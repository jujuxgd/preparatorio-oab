// Sessão do dia da revisão ativa: flashcards no próprio cartão, questões por tópico,
// checklist do dia, calendário até a prova e painel de erros.
// Usado por: hoje.html, revisar.html, calendario.html, painel-erros.html
(function () {
  var K_RESP = 'oab_bq_respostas', K_DIA = 'oab_ativo_dia', K_CHECK = 'oab_ativo_check_v1';
  var DIAS_SEM = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  var MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  var GABARITACO = {
    'Direito Constitucional': '1OxwCkh7ktp86eY4xV-qjeGnUDuXA5JK8', 'Direito Civil': '18f7snpnvRyROPiqfVyzvbiZvLuUM02pV',
    'Direito Processual Civil': '1HRJef6BbLRuPcvAiMpdmLAqtXK3ODZ87', 'Direito Penal': '1kA6-Dl-Dg8c-SRMB6hqL1_CG-U2vFDJF',
    'Direito Processual Penal': '13TnIk_nRowEIwYbb1qDcZASV5icUaQZp', 'Direito do Trabalho': '1ux1m3wMGUkyV1uiyvea1gWsk6Pg12KEs',
    'Direito Processual do Trabalho': '1pDduJ9ujams2xglSyH93idq2toC_5rFK', 'Direito Administrativo': '1Tl8knaHJAdLjQ_3Qv4NuUv10-K1tDDhb',
    'Direito Tributário': '18vkNz1RXGumP-sJjFGW85w5hEHiqzxFv', 'Ética Profissional': '1rmCzKZJq7-A7DK1CJUdAqRvon30U3JDz'
  };
  // nome da matéria em revisao-biblioteca.js
  var NOME_REV = {
    'Ética Profissional': 'Ética', 'Direito Constitucional': 'Constitucional', 'Direito Civil': 'Civil',
    'Direito Processual Civil': 'Processo Civil', 'Direito Penal': 'Penal', 'Direito Processual Penal': 'Processo Penal',
    'Direito do Trabalho': 'Trabalho', 'Direito Processual do Trabalho': 'Processo do Trabalho',
    'Direito Administrativo': 'Administrativo', 'Direito Tributário': 'Tributário', 'Direito Empresarial': 'Empresarial'
  };
  var ETICA = 'Ética Profissional';
  var TIPO = {
    estudo: 'Questões nos tópicos do dia', simulado: 'Simulado completo', revisao: 'Revisão',
    leve: 'Dia leve', vespera: 'Véspera · só flashcards leves', prova: 'Dia da prova'
  };

  var CAL = window.CAL_ATIVO;
  var HOJE = ATIVO.hoje();
  var DATA = new URLSearchParams(location.search).get('data') || HOJE;
  if (CAL && DATA < CAL.dias[0].d) DATA = CAL.dias[0].d;
  if (CAL && DATA > CAL.dias[CAL.dias.length - 1].d) DATA = CAL.dias[CAL.dias.length - 1].d;
  var DIA = ATIVO.diaDoCalendario(DATA);

  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function ler(k, p) { try { return JSON.parse(localStorage.getItem(k)) || p; } catch (e) { return p; } }
  function gravar(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
      localStorage.setItem('oab_local_rev', String(Date.now()));
      if (window._syncOAB && window._syncOAB.notificarAlteracaoLocal) window._syncOAB.notificarAlteracaoLocal(k);
    } catch (e) {}
  }
  function uniq(a) { return a.filter(function (x, i) { return a.indexOf(x) === i; }); }
  function curto(d) { return (CAL && CAL.curto && CAL.curto[d]) || String(d).replace(/^Direito (do |Processual )?/, ''); }
  function partes(iso) { var p = iso.split('-').map(Number); return { a: p[0], m: p[1], d: p[2], dt: new Date(p[0], p[1] - 1, p[2]) }; }
  function dataLonga(iso) { var p = partes(iso); return DIAS_SEM[p.dt.getDay()] + ', ' + p.d + ' ' + MESES[p.m - 1]; }
  function drive(id) { return 'https://drive.google.com/file/d/' + id + '/preview'; }
  function linkRevisao(disc, r) {
    var a = NOME_REV[disc];
    var item = (window.BIBLIOTECA_REVISAO || []).filter(function (x) { return x.g === 'rev' && x.a === a && String(x.b) === String(r); })[0];
    return item ? drive(item.id) : null;
  }
  function linkTopico(t) {
    if (t.k && GABARITACO[t.d]) return { href: drive(GABARITACO[t.d]), txt: 'Gabaritaço · DICAS ' + t.k[0] + '–' + t.k[1] };
    var r = t.rev && linkRevisao(t.d, t.rev);
    return r ? { href: r, txt: 'Revisão ' + t.rev + ' VDE' } : null;
  }
  function banco() { return window.BANCO_QUESTOES || []; }
  var _QPOR = null;
  function qpor(id) {
    if (!_QPOR) { _QPOR = {}; banco().forEach(function (q) { _QPOR[q.id] = q; }); }
    return _QPOR[id];
  }
  function nomeExame(n) {
    var q = banco().filter(function (x) { return x.exam_number === n; })[0];
    return q ? q.exam.replace(' Exame de Ordem Unificado', ' Exame').replace('ºº', 'º') : n + 'º Exame';
  }
  var _banco = null;
  function carregarBanco() {
    if (banco().length) return Promise.resolve();
    if (!_banco) _banco = new Promise(function (ok) {
      var s = document.createElement('script');
      s.src = 'questoes-banco.js'; s.onload = ok; s.onerror = ok;
      document.head.appendChild(s);
    }).then(function () { _QPOR = null; });
    return _banco;
  }

  // ── posição no calendário ──
  function indice(d) { return CAL ? CAL.dias.map(function (x) { return x.d; }).indexOf(d || DATA) : -1; }
  function vizinho(passo) { var i = indice(); return CAL && CAL.dias[i + passo] ? CAL.dias[i + passo].d : null; }
  function resumoDoDia(x) {
    x = x || DIA; if (!x) return '';
    if (x.top) return x.top.map(function (t) { return curto(t.d) + ' (' + t.s + ')'; }).join(' e ');
    if (x.tipo === 'simulado') return 'Simulado completo · ' + nomeExame(x.sim.exame);
    if (x.tipo === 'revisao') return 'Revisão com foco em ' + x.foco.map(curto).join(' e ') + ' + Ética';
    if (x.tipo === 'leve') return 'Flashcards vencidos e 10 questões de Ética';
    if (x.tipo === 'vespera') return 'Só flashcards leves. Nada novo.';
    return '1ª fase · 13h às 18h';
  }
  function disciplinasDoDia(x) {
    x = x || DIA; if (!x) return [];
    return x.top ? uniq(x.top.map(function (t) { return t.d; })) : x.foco ? x.foco.concat([ETICA]) : [];
  }

  // ── fila de flashcards do dia ──
  function fila() {
    var venc = ATIVO.vencidos(DATA);
    if (!DIA) return { venc: venc, novos: [] };
    if (DIA.tipo === 'vespera') return { venc: venc.slice(0, 30), novos: [] };
    if (DIA.tipo === 'leve' || DIA.tipo === 'prova') return { venc: venc, novos: [] };
    return { venc: venc, novos: ATIVO.novos(disciplinasDoDia()) };
  }

  // ── checklist do dia ──
  function checks() { var t = ler(K_CHECK, {}); return t[DATA] || {}; }
  function marcar(id, valor) {
    var t = ler(K_CHECK, {}), d = t[DATA] || (t[DATA] = {});
    if (valor) d[id] = 1; else delete d[id];
    gravar(K_CHECK, t);
    document.querySelectorAll('[data-ck="' + id + '"]').forEach(function (li) { li.classList.toggle('done', !!valor); li.querySelector('.ck').textContent = valor ? '✓' : ''; });
    document.dispatchEvent(new CustomEvent('sessao:checklist'));
  }
  function itensChecklist() {
    if (!DIA) return [];
    var it = [], f = fila(), n = f.venc.length + f.novos.length;
    if (DIA.tipo === 'prova') return [{ id: 'prova', t: 'Prova da 1ª fase · 13h às 18h', s: 'Documento com foto, caneta preta de material transparente. Nada novo hoje.' }];
    it.push({ id: 'fc', t: 'Flashcards do dia', s: n ? f.venc.length + ' vencidos + ' + f.novos.length + ' novos · aba Flashcards' : 'Nada vence hoje', aba: 'flashcards' });
    if (DIA.top) DIA.top.forEach(function (t, i) {
      var l = linkTopico(t);
      it.push({ id: 't' + i, t: curto(t.d) + ' · ' + t.s, aba: 'questoes',
        s: (l ? 'Releia no <a href="' + l.href + '" target="_blank" rel="noopener">' + esc(l.txt) + ' ↗</a> e resolva ' : 'Resolva ') + ATIVO.questoesPorTopico() + ' questões na aba Questões' });
    });
    if (DIA.tipo === 'revisao' || DIA.tipo === 'leve') it.push({ id: 'etica', t: 'Reforço em Ética', s: (DIA.tipo === 'leve' ? 10 : 20) + ' questões, erradas primeiro · aba Questões', aba: 'questoes' });
    if (DIA.f === 2 && DIA.tipo !== 'vespera') it.push({ id: 'cad', t: 'Caderno de erros do dia', s: '<a href="erros.html">Abrir o caderno →</a>' });
    if (DIA.sim) {
      var completo = DIA.sim.modo === 'completo';
      it.push({ id: 'sim', t: completo ? 'Simulado completo · ' + nomeExame(DIA.sim.exame) : 'Simulado parcial · 20 questões em 1 hora',
        s: '<a href="simulado.html?' + (completo ? 'exame=' + DIA.sim.exame : 'treino=fracas') + '">Ir para o simulado →</a> · na correção, mande os erros para o caderno' });
    }
    return it;
  }
  function htmlChecklist() {
    var c = checks();
    return '<ul class="ck-lista">' + itensChecklist().map(function (x) {
      var ok = !!c[x.id];
      return '<li data-ck="' + x.id + '"' + (ok ? ' class="done"' : '') + '><span class="ck">' + (ok ? '✓' : '') + '</span><div><div class="ck-t">' + esc(x.t) + '</div>' +
        (x.s ? '<div class="ck-s">' + x.s + '</div>' : '') + '</div></li>';
    }).join('') + '</ul>';
  }
  function progressoChecklist() {
    var it = itensChecklist(), c = checks();
    return { feitos: it.filter(function (x) { return c[x.id]; }).length, total: it.length };
  }

  // ── flashcards: um cartão por vez, dentro do próprio bloco ──
  function montarFlashcards(el, cartoes, opts) {
    opts = opts || {};
    var st = { fila: cartoes.slice(), idx: 0, sabidos: 0, verso: false };
    function desenhar() {
      if (!st.fila.length) { el.innerHTML = '<p class="ss-vazio">' + (opts.vazio || 'Nenhum flashcard para agora.') + '</p>'; return; }
      if (st.idx >= st.fila.length) {
        el.innerHTML = '<div class="fc-player"><h3 style="font-family:Fraunces,serif;font-weight:500;color:var(--rose-deep);margin:0 0 .5rem">Flashcards concluídos</h3>' +
          '<p style="font-size:.9rem;color:var(--ink-soft);margin:0">' + st.sabidos + ' de ' + st.fila.length + ' você sabia. Os errados voltam amanhã e estão no Caderno de Erros.</p></div>';
        if (opts.fim) opts.fim(st);
        return;
      }
      var c = st.fila[st.idx], e = ATIVO.estados()[c.id], origem = linkRevisao(c.d, c.r);
      var h = '<div class="fc-player"><div class="topo"><span>' + (st.idx + 1) + ' de ' + st.fila.length + (e ? ' · revisão' : ' · novo') + '</span></div>' +
        '<div class="ss-bar"><i style="width:' + Math.round(st.idx / st.fila.length * 100) + '%"></i></div>' +
        '<div class="fc-meta">' + esc(curto(c.d)) + ' · ' + esc(c.t) + ' · ' +
          (origem ? '<a href="' + origem + '" target="_blank" rel="noopener" style="color:inherit">Revisão ' + c.r + ' VDE ↗</a>' : 'Revisão ' + c.r + ' VDE') + '</div>' +
        '<div class="fc-frente">' + esc(c.f) + '</div>';
      if (!st.verso) h += '<div class="fc-bts"><button class="btn btn-primary" data-fc="mostrar">Mostrar resposta</button></div>';
      else h += '<div class="fc-verso">' + esc(c.v) +
        '<div class="base"><b>Base:</b> ' + (c.b ? esc(c.b) : 'não citada na revisão') + (c.c || !c.b ? '<span class="fc-tag">conferir</span>' : '') +
        (c.n ? '<div class="base">' + esc(c.n) + '</div>' : '') + '</div>' +
        (c.p ? '<div class="fc-peg"><b>Pegadinha:</b> ' + esc(c.p) + '</div>' : '') + '</div>' +
        '<div class="fc-bts"><button class="btn sei" data-fc="sei">Sei</button><button class="btn errei" data-fc="errei">Errei</button></div>';
      el.innerHTML = h + '</div>';
    }
    el.onclick = function (ev) {
      var b = ev.target.closest('[data-fc]'); if (!b) return;
      if (b.dataset.fc === 'mostrar') { st.verso = true; desenhar(); return; }
      var sabia = b.dataset.fc === 'sei';
      ATIVO.responder(st.fila[st.idx].id, sabia);
      if (sabia) st.sabidos++;
      st.idx++; st.verso = false; desenhar();
    };
    desenhar();
  }

  // ── questões: seleção fica fixa no dia para não embaralhar a cada abertura ──
  function selecaoDoDia() {
    var s = ler(K_DIA, null);
    if (!s || s.data !== DATA || s.n !== ATIVO.questoesPorTopico()) s = { data: DATA, n: ATIVO.questoesPorTopico(), sel: {} };
    return s;
  }
  function escolher(chave, disc, topicos, prioritarias, n, erradasPrimeiro, usadas) {
    var s = selecaoDoDia();
    if (s.sel[chave]) return s.sel[chave];
    var resp = ler(K_RESP, {}), todos = topicos.indexOf('*') >= 0;
    var pool = banco().filter(function (q) {
      return q.discipline === disc && q.correct_answer && !usadas[q.id] && (todos || topicos.indexOf(q.topic) >= 0);
    });
    function nivel(q) {
      var r = resp[q.id];
      if (r && r.ultima_correta) return 9;
      var g = (prioritarias || []).indexOf(q.id) >= 0;
      if (erradasPrimeiro) return r ? 0 : g ? 1 : 2;
      return g ? 0 : r ? 2 : 1;
    }
    pool.sort(function (a, b) { return nivel(a) - nivel(b) || b.exam_number - a.exam_number; });
    var ids = pool.filter(function (q) { return nivel(q) < 9; }).slice(0, n).map(function (q) { return q.id; });
    s.sel[chave] = ids;
    try { localStorage.setItem(K_DIA, JSON.stringify(s)); } catch (e) {}
    return ids;
  }

  // comentário: mesma leitura do Banco de Questões
  function formatarExplicacao(txt) {
    var JULGA = '(?:Correto|Correta|Certo|Certa|Errado|Errada|Incorreto|Incorreta)';
    var ABRE = '(?:[A-D]\\)\\s*' + JULGA + '\\b|(?:A\\s+)?(?:alternativa|assertiva|letra)\\s+[A-D]\\s+(?:est[áa]|é)\\s+' + JULGA + '\\b)';
    var VER = new RegExp('^(?:([A-D])\\)\\s*(' + JULGA + ')|(?:A\\s+)?(?:alternativa|assertiva|letra)\\s+([A-D])\\s+(?:est[áa]|é)\\s+(' + JULGA + '))\\b[\\s:.,-]*', 'i');
    return String(txt || '').split(new RegExp('\\n(?=' + ABRE + ')', 'i')).map(function (bloco) {
      var m = bloco.match(VER), corpo = m ? bloco.slice(m[0].length) : bloco;
      corpo = corpo.replace(/\n{2,}/g, '\u0000').replace(/\n/g, ' ').replace(/\u0000/g, '\n').replace(/[ \t]{2,}/g, ' ').trim();
      if (!corpo && !m) return '';
      var paras = corpo.split('\n').filter(Boolean).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
      if (!m) return '<div class="ex-bloco">' + paras + '</div>';
      var letra = m[1] || m[3], ver = m[2] || m[4];
      return '<div class="ex-bloco ' + (/^(corret|cert)/i.test(ver) ? 'ex-certo' : 'ex-errado') + '"><span class="ex-l">' + esc(letra.toUpperCase()) +
        '</span><div><span class="ex-v">' + esc(ver) + '</span>' + paras + '</div></div>';
    }).join('');
  }

  function htmlQuestao(id, i, g) {
    var q = qpor(id); if (!q) return '';
    var r = ler(K_RESP, {})[id], gab = (g || []).indexOf(id) >= 0;
    return '<div class="ss-q" data-q="' + id + '"><div class="meta">' + (i + 1) + ' · ' + esc(nomeExame(q.exam_number)) +
      ', questão ' + q.question_number + ' · ' + esc(q.topic || '') + (gab ? ' · <span class="gab">caiu no Gabaritaço</span>' : '') +
      (r ? ' · já respondida' : '') + '</div>' +
      '<div class="enun">' + esc(q.statement) + '</div>' +
      ['a', 'b', 'c', 'd'].map(function (k) {
        return q['alternative_' + k] ? '<button class="ss-alt" data-l="' + k.toUpperCase() + '"><span class="l">' + k.toUpperCase() +
          '</span><span>' + esc(q['alternative_' + k]) + '</span></button>' : '';
      }).join('') + '<div class="fim"></div></div>';
  }
  function blocoQuestoes(chave, titulo, extra, disc, topicos, g, n, erradasPrimeiro, usadas) {
    var ids = escolher(chave, disc, topicos, g, n, erradasPrimeiro, usadas);
    ids.forEach(function (id) { usadas[id] = 1; });
    return '<div class="ss-top" data-bloco="' + chave + '"><div class="ss-top-cab"><b><span class="mat">' + esc(curto(disc)) + '</span>' + esc(titulo) + '</b>' + (extra || '') + '</div>' +
      (ids.length ? ids.map(function (id, i) { return htmlQuestao(id, i, g); }).join('')
        : '<p class="ss-vazio">Você já acertou todas as questões do banco neste tópico. Use os flashcards e o caderno de erros.</p>') + '</div>';
  }
  function htmlQuestoes() {
    if (!DIA) return '<p class="ss-vazio">Nenhum dia do calendário nesta data.</p>';
    var usadas = {}, n = ATIVO.questoesPorTopico(), h = '';
    if (DIA.top) {
      h += '<div class="ss-bloco"><h3>Questões dos tópicos do dia</h3>' +
        '<p>Tópicos do Gabaritaço VDE. Errou, a questão vai para o Caderno de Erros e volta em 1, 7 e 15 dias.</p>' +
        DIA.top.map(function (t, i) {
          var l = linkTopico(t);
          return blocoQuestoes('t' + i, t.s, l ? '<a href="' + l.href + '" target="_blank" rel="noopener">' + esc(l.txt) + ' ↗</a>' : '', t.d, t.q, t.g, n, /^Reforço/.test(t.s), usadas);
        }).join('') + '</div>';
    } else if (DIA.tipo === 'revisao' || DIA.tipo === 'leve') {
      h += '<div class="ss-bloco"><h3>Reforço em Ética</h3><p>Erradas primeiro, depois as que você ainda não fez.</p>' +
        blocoQuestoes('etica', 'Ética mista', '', ETICA, ['*'], [], DIA.tipo === 'leve' ? 10 : 20, true, usadas) + '</div>';
    } else {
      h += '<div class="ss-bloco"><p class="ss-vazio" style="margin:0">' + esc(resumoDoDia()) + (DIA.sim ? ' · as questões de hoje são as do simulado.' : '') + '</p></div>';
    }
    if (DIA.sim) {
      var completo = DIA.sim.modo === 'completo';
      h += '<div class="ss-bloco"><h3>' + (completo ? 'Simulado completo' : 'Simulado parcial') + '</h3>' +
        '<p>' + (completo ? esc(nomeExame(DIA.sim.exame)) + ' · 80 questões em 5 horas, sem gabarito até o fim. Se já fez esta prova, escolha outra que ainda não fez.'
                          : '20 questões em 1 hora nas suas matérias mais fracas.') + ' Na correção, mande os erros para o caderno.</p>' +
        '<div class="ss-acoes"><a class="btn btn-primary" href="simulado.html?' + (completo ? 'exame=' + DIA.sim.exame : 'treino=fracas') + '">Ir para o simulado</a></div></div>';
    }
    if (DIA.top && window.ESTUDO) {
      var ex = ESTUDO.extraDaSemana(new Date(DATA + 'T12:00:00'));
      if (ex) h += '<div class="ss-bloco"><h3>Se sobrar tempo · matéria extra da semana</h3><p>' + esc(ex) +
        ' não entra no rodízio, mas vale 2 questões na prova.</p><div class="ss-acoes"><a class="btn" href="' + ESTUDO.linkBanco(ex, 'nao') + '">Questões de ' + esc(ex) + '</a></div></div>';
    }
    if (DIA.top) h += '<div class="ss-cfg">Questões por tópico <select id="cfg-n">' + [5, 10, 15, 20].map(function (v) {
      return '<option' + (v === n ? ' selected' : '') + '>' + v + '</option>';
    }).join('') + '</select><span>(ajuste ao tempo que você tem)</span></div>';
    return h;
  }
  function montarQuestoes(el) {
    el.innerHTML = '<p class="ss-vazio">Carregando questões…</p>';
    return carregarBanco().then(function () { el.innerHTML = htmlQuestoes(); });
  }

  function mandarProCaderno(q, letra) {
    if (typeof erros_add !== 'function') return;
    erros_add({
      materia: q.discipline || '', topico: q.topic || '', subtopico: q.subtopic || '', motivo: 'nao_sabia',
      o_que_faltou: q.exam_number + 'º Exame, questão ' + q.question_number + '. Gabarito ' + q.correct_answer + (letra ? '; marquei ' + letra : '') + '.',
      explicacao: q.explanation || '', questao_id: q.id
    });
  }
  function responderQuestao(card, letra) {
    var id = card.dataset.q, q = qpor(id); if (!q || card.dataset.feita) return;
    card.dataset.feita = '1';
    var certa = letra === q.correct_answer;
    var resp = ler(K_RESP, {}), at = resp[id] || { vezes: 0, acertos: 0, erros: 0 };
    at.vezes += 1; if (certa) at.acertos += 1; else at.erros += 1;
    at.ultima_correta = certa; at.ultima_resposta = letra; at.ultima_data = new Date().toISOString();
    resp[id] = at; gravar(K_RESP, resp);
    if (!certa) mandarProCaderno(q, letra);
    else if (typeof erros_get === 'function') {
      var reg = erros_get().filter(function (x) { return x.questao_id === id && x.status !== 'dominada'; })[0];
      if (reg) erros_registrar_revisao(reg.id, true);
    }
    card.querySelectorAll('.ss-alt').forEach(function (b) {
      b.disabled = true;
      if (b.dataset.l === q.correct_answer) b.classList.add('certa');
      else if (b.dataset.l === letra) b.classList.add('errada');
    });
    card.querySelector('.fim').innerHTML = '<div class="ss-res">' +
      (certa ? '<b class="ok">Acertou.</b><button data-chute="1">Foi chute → errei</button>'
             : '<b class="no">Errou · gabarito ' + q.correct_answer + '.</b> Foi para o Caderno de Erros.') +
      '<button data-expl="1">Ver comentário</button></div><div class="ss-expl" hidden>' + formatarExplicacao(q.explanation) +
      (q.legal_basis ? '<p><b>Fundamentação:</b> ' + esc(q.legal_basis) + '</p>' : '') + '</div>';
    var bloco = card.closest('[data-bloco]');
    if (bloco && !bloco.querySelector('.ss-q:not([data-feita])')) marcar(bloco.dataset.bloco, true);
  }

  // ── calendário até a prova ──
  function htmlCalendario(href) {
    if (!CAL) return '<p class="ss-vazio">Calendário não carregado.</p>';
    href = href || function (d) { return 'hoje.html?data=' + d; };
    var h = '', sem = null, feitos = ler(K_CHECK, {});
    CAL.dias.forEach(function (x) {
      var p = partes(x.d), seg = new Date(p.dt); seg.setDate(p.dt.getDate() - ((p.dt.getDay() + 6) % 7));
      var chave = seg.toDateString();
      if (chave !== sem) {
        if (sem) h += '</div>';
        sem = chave;
        h += '<div class="cal-sem"><h4>Semana de ' + seg.getDate() + ' ' + MESES[seg.getMonth()] + (x.f === 2 ? ' · Fase 2' : x.f === 1 ? ' · Fase 1' : '') + '</h4>';
      }
      var desc = x.top ? x.top.map(function (t) { return '<b>' + esc(curto(t.d)) + '</b> · ' + esc(t.s) + (t.k ? ' <span class="tp">(DICAS ' + t.k[0] + '–' + t.k[1] + ')</span>' : t.rev ? ' <span class="tp">(Revisão ' + t.rev + ')</span>' : ''); }).join('<br>')
        : x.tipo === 'simulado' ? '<b>Simulado completo</b> · ' + esc(nomeExame(x.sim.exame))
        : x.tipo === 'revisao' ? 'Revisão: caderno + flashcards (foco ' + x.foco.map(curto).join(' e ') + ') + Ética' + (x.sim ? ' · simulado ' + (x.sim.modo === 'completo' ? 'completo (' + esc(nomeExame(x.sim.exame)) + ')' : 'parcial') : '')
        : x.tipo === 'leve' ? 'Leve: flashcards vencidos + 10 questões de Ética'
        : x.tipo === 'vespera' ? 'Véspera: só flashcards leves. Nada novo.' : '<b>Prova</b> · 13h às 18h';
      var ok = feitos[x.d] && feitos[x.d].feito;
      h += '<a class="cal-dia' + (x.d === HOJE ? ' hoje' : x.d < HOJE ? ' passado' : '') + '" href="' + href(x.d) + '">' +
        '<span class="dt">' + p.d + '/' + String(p.m).padStart(2, '0') + (ok ? ' ✓' : '') + '<small>' + DIAS_SEM[p.dt.getDay()] + '</small></span><span>' + desc + '</span></a>';
    });
    return h + '</div>';
  }

  // ── painel de erros ──
  function htmlPainel() {
    var pn = ATIVO.painelErros(), est = ATIVO.estados(), cart = ATIVO.cartoes();
    var discs = uniq(Object.keys((CAL && CAL.curto) || {}).concat(Object.keys(pn)));
    var linhas = discs.map(function (d) {
      var p = pn[d] || { fc: 0, cad: 0, temas: {} };
      var meus = cart.filter(function (c) { return c.d === d; });
      var vistos = meus.filter(function (c) { return est[c.id]; }).length;
      var fora = meus.filter(function (c) { return est[c.id] && est[c.id].fora; }).length;
      var temas = Object.keys(p.temas).map(function (t) { return [t, p.temas[t].fc + p.temas[t].cad]; })
        .sort(function (a, b) { return b[1] - a[1]; }).slice(0, 3)
        .map(function (t) { return esc(t[0]) + ' (' + t[1] + ')'; }).join(' · ');
      return { tot: p.fc + p.cad, html: '<div class="pn-lin"><span class="disc"><b>' + esc(curto(d)) + '</b></span>' +
        '<span>' + vistos + '/' + meus.length + ' vistos</span><span>' + fora + ' fora</span>' +
        '<span>' + (p.fc + p.cad) + (p.fc + p.cad === 1 ? ' erro' : ' erros') + '</span><span class="temas">' + (temas || '—') + '</span></div>' };
    }).sort(function (a, b) { return b.tot - a.tot; });
    return '<div class="ss-bloco"><h3>Onde você mais erra</h3><p>Soma dos flashcards que já levaram "errei" com os erros pendentes no Caderno de Erros (questões do banco, simulados e registros manuais). Temas com mais erros à direita.</p></div>' +
      '<div class="pn-tab"><div class="pn-lin cab"><span>Matéria</span><span>Flashcards</span><span>Dominados</span><span>Erros</span><span>Temas que mais erra</span></div>' +
      linhas.map(function (l) { return l.html; }).join('') + '</div>';
  }

  // ── cliques de questões e checklist (valem em qualquer página) ──
  document.addEventListener('click', function (ev) {
    var t = ev.target;
    var li = t.closest('.ck-lista li[data-ck]');
    if (li && !t.closest('a')) { marcar(li.dataset.ck, !li.classList.contains('done')); return; }
    var alt = t.closest('.ss-alt');
    if (alt && !alt.disabled) { responderQuestao(alt.closest('.ss-q'), alt.dataset.l); return; }
    if (t.closest('[data-expl]')) { var ex = t.closest('.ss-q').querySelector('.ss-expl'); ex.hidden = !ex.hidden; return; }
    if (t.closest('[data-chute]')) {
      var card = t.closest('.ss-q'), q = qpor(card.dataset.q);
      var resp = ler(K_RESP, {}), r = resp[q.id];
      if (r) { r.ultima_correta = false; r.acertos = Math.max(0, r.acertos - 1); r.erros += 1; gravar(K_RESP, resp); }
      mandarProCaderno(q, q.correct_answer);
      t.outerHTML = '<span style="margin-left:.6rem">Foi para o Caderno de Erros.</span>';
    }
  });
  document.addEventListener('change', function (ev) {
    if (ev.target.id === 'cfg-n') {
      ATIVO.definirQuestoesPorTopico(parseInt(ev.target.value, 10));
      var el = ev.target.closest('[data-questoes]'); if (el) montarQuestoes(el);
    }
  });

  function marcarFeito(v) {
    var t = ler(K_CHECK, {}), d = t[DATA] || (t[DATA] = {});
    if (v) d.feito = 1; else delete d.feito;
    gravar(K_CHECK, t);
  }

  window.SESSAO = {
    DATA: DATA, HOJE: HOJE, DIA: DIA, TIPO: TIPO, ETICA: ETICA,
    esc: esc, curto: curto, dataLonga: dataLonga, partes: partes, MESES: MESES,
    indice: indice, vizinho: vizinho, resumoDoDia: resumoDoDia, disciplinasDoDia: disciplinasDoDia,
    fila: fila, montarFlashcards: montarFlashcards, montarQuestoes: montarQuestoes, carregarBanco: carregarBanco,
    itensChecklist: itensChecklist, htmlChecklist: htmlChecklist, progressoChecklist: progressoChecklist, marcar: marcar,
    feito: function () { return !!checks().feito; }, marcarFeito: marcarFeito,
    htmlCalendario: htmlCalendario, htmlPainel: htmlPainel, linkRevisao: linkRevisao
  };
})();
