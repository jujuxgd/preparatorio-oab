// Área da 2ª fase (Direito do Trabalho). Abas por ?aba=hoje|plano|estudo|pecas|treino|guia; dados em f2-dados.js.
(function () {
  var F2 = window.F2;
  var K_CHECK = 'oab_f2_check_v1', K_FEITO = 'oab_f2_feito_v1', K_DISC = 'oab_f2_disc_v1', K_SIM = 'oab_f2_sim_v1';
  var TREINO_KEY = 'oab_pecas_treino_v1', CRON_KEY = 'oab_pecas_cron';
  var Q = new URLSearchParams(location.search);
  var ABA = Q.get('aba') || 'hoje';
  // trilha de Trabalho do VDE (resumo, caderno legislativo e material de cada tema), que já estava na Biblioteca
  if (window.BIBLIOTECA_REVISAO && !F2.MATERIAIS.some(function (m) { return m.g === 'vde'; })) {
    var TIPO_VDE = { resumo: 'resumo', caderno: 'caderno legislativo', material: 'material completo', revisao: 'revisão' };
    BIBLIOTECA_REVISAO.filter(function (i) { return i.g === 'trab'; })
      .sort(function (a, b) { return (+a.a - +b.a) || String(a.b).localeCompare(String(b.b)); })
      .forEach(function (i, k) { F2.MATERIAIS.push({ id: i.id, t: (i.n || 'Tema ' + i.a) + ' · ' + (TIPO_VDE[i.b] || i.b), g: 'vde', n: k + 1 }); });
    F2.GRUPOS.splice(2, 0, ['vde', 'Trilha do VDE · Trabalho', 'Resumo, caderno legislativo e material de cada tema de direito material.']);
  }
  var PLANO = F2.plano();
  var HOJE = typeof dataLocalHoje === 'function' ? dataLocalHoje() : iso(new Date());

  function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function ler(k, p) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? p : v; } catch (e) { return p; } }
  function gravar(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
      localStorage.setItem('oab_local_rev', String(Date.now()));
      if (window._syncOAB && window._syncOAB.notificarAlteracaoLocal) window._syncOAB.notificarAlteracaoLocal(k);
    } catch (e) {}
  }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function dataBR(s, longo) {
    var d = new Date(s + 'T12:00:00');
    return longo ? d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }) : s.slice(8) + '/' + s.slice(5, 7);
  }
  function dias(a, b) { return Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 86400000); }
  function mat(id) { return F2.MATERIAIS.filter(function (m) { return m.id === id; })[0]; }
  function peca(id) { return F2.PECAS.filter(function (p) { return p.id === id; })[0]; }
  function link(aba, extra) { return 'segunda-fase.html?aba=' + aba + (extra || ''); }

  var TITULOS = { hoje: '2ª fase · <em>hoje</em>', plano: 'Plano da <em>2ª fase</em>', estudo: 'Estudo · <em>Trabalho</em>',
    pecas: 'Peças <em>trabalhistas</em>', treino: 'Treino da <em>2ª fase</em>', guia: 'Como é a <em>2ª fase</em>' };

  // ── Hoje ──
  function diaDoPlano(d) { return PLANO.filter(function (x) { return x.d === d; })[0]; }
  function htmlHoje() {
    var alvo = Q.get('data') || HOJE;
    if (alvo < F2.INICIO) {
      var p1 = PLANO[0];
      return '<div class="f2-hero"><div class="f2-eb">Começa depois da 1ª fase</div><h2>O plano da 2ª fase começa em <em>11 de janeiro</em></h2>' +
        '<p>Até a 1ª fase (10/01) o foco continua nela. Faltam ' + dias(HOJE, F2.INICIO) + ' dias para o primeiro dia deste plano e ' + dias(HOJE, F2.PROVA) +
        ' para a prova da 2ª fase (28/02/2027). Enquanto isso, dá para conhecer a prova e as peças.</p>' +
        '<div class="f2-nav"><a class="f2-bt pri" href="' + link('hoje', '&data=' + p1.d) + '">Ver o 1º dia</a><a href="' + link('plano') + '">Plano completo</a><a href="' + link('guia') + '">Como é a prova</a><a href="' + link('pecas') + '">Peças</a></div></div>';
    }
    if (alvo > F2.PROVA) alvo = F2.PROVA;
    var x = diaDoPlano(alvo), i = PLANO.indexOf(x);
    if (!x) return '<p class="rv-vazio">Nenhum dia do plano nesta data.</p>';
    var ck = ler(K_CHECK, {})[x.d] || {}, feitos = x.itens.filter(function (it) { return ck[it.k]; }).length;
    var ant = PLANO[i - 1], prox = PLANO[i + 1];
    var h = '<div class="f2-hero"><div class="f2-eb">' + (x.d === HOJE ? 'Hoje · ' : x.d > HOJE ? 'Dia futuro · ' : 'Dia passado · ') + esc(dataBR(x.d, true)) + ' · semana ' + x.sem + '</div>' +
      '<h2>' + esc(x.titulo) + '</h2><p>' + (x.tipo === 'prova' ? 'Boa prova! Leia o problema duas vezes antes de decidir a peça.' :
        feitos + ' de ' + x.itens.length + ' feitos · faltam ' + dias(x.d, F2.PROVA) + ' dias para a prova.') + '</p>' +
      '<div class="f2-nav">' + (ant ? '<a href="' + link('hoje', '&data=' + ant.d) + '">‹ ' + dataBR(ant.d) + '</a>' : '') +
      (x.d !== HOJE && HOJE >= F2.INICIO && HOJE <= F2.PROVA ? '<a href="' + link('hoje') + '">Hoje</a>' : '') +
      (prox ? '<a href="' + link('hoje', '&data=' + prox.d) + '">' + dataBR(prox.d) + ' ›</a>' : '') + '</div></div>';
    if (!x.itens.length) return h;
    h += '<ul class="f2-lista">' + x.itens.map(function (it) {
      var ac = '';
      if (it.mat) ac = '<button class="f2-bt" data-abrir="' + it.mat + '">Abrir PDF</button>';
      else if (it.peca) ac = '<a class="f2-bt" href="' + link('pecas', '#' + it.peca) + '">Roteiro</a><a class="f2-bt" href="' + link('treino', '&peca=' + it.peca) + '">Registrar</a>';
      else if (it.a) ac = '<a class="f2-bt" href="' + link(it.a) + '">Abrir</a>';
      return '<li class="f2-it' + (ck[it.k] ? ' ok' : '') + '"><input type="checkbox" data-ck="' + esc(it.k) + '" data-dia="' + x.d + '"' + (ck[it.k] ? ' checked' : '') + '>' +
        '<span class="tx">' + esc(it.t) + '</span><span class="ac">' + ac + '</span></li>';
    }).join('') + '</ul>';
    return h;
  }

  // ── Plano ──
  var TIPO = { estudo: 'Estudo', peca: 'Peça', discursivas: 'Discursivas', reta: 'Reta final', simulado: 'Simulado', leve: 'Leve', prova: 'Prova' };
  function htmlPlano() {
    var ck = ler(K_CHECK, {}), sem = {};
    PLANO.forEach(function (x) { (sem[x.sem] = sem[x.sem] || []).push(x); });
    return '<div class="f2-hero"><div class="f2-eb">11/01 → 28/02/2027 · 7 semanas</div><h2>Base em 5 semanas, <em>reta final</em> em 2</h2>' +
      '<p>Seg a sex: um capítulo de Processo do Trabalho, um de Direito do Trabalho e o esqueleto de uma peça. Sábado: peça completa cronometrada. Domingo: 4 discursivas e revisão. ' +
      'A partir de 15/02: uma peça completa por dia, súmulas e simulado completo em 20/02.</p></div>' +
      Object.keys(sem).map(function (s) {
        var ds = sem[s];
        return '<div class="f2-sem"><h3>Semana ' + s + ' · ' + dataBR(ds[0].d) + ' a ' + dataBR(ds[ds.length - 1].d) + '</h3>' + ds.map(function (x) {
          var c = ck[x.d] || {}, n = x.itens.filter(function (it) { return c[it.k]; }).length;
          return '<a class="f2-dia' + (x.d === HOJE ? ' hoje' : '') + '" href="' + link('hoje', '&data=' + x.d) + '"><span class="dt">' + dataBR(x.d) + ' · ' +
            new Date(x.d + 'T12:00:00').toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '') + '</span>' +
            '<span class="tg"><span class="f2-tag ' + x.tipo + '">' + TIPO[x.tipo] + '</span></span><span>' + esc(x.titulo) + '</span>' +
            '<span class="pg">' + (x.itens.length ? n + '/' + x.itens.length : '') + '</span></a>';
        }).join('') + '</div>';
      }).join('');
  }

  // ── Estudo ──
  function htmlEstudo() {
    var feito = ler(K_FEITO, {});
    var total = F2.MATERIAIS.filter(function (m) { return m.g === 'proc' || m.g === 'mat'; }), ok = total.filter(function (m) { return feito[m.id]; }).length;
    return '<div class="f2-hero"><div class="f2-eb">Seus PDFs do Drive · leitor com grifos</div><h2>' + ok + ' de ' + total.length + ' <em>capítulos</em> lidos</h2>' +
      '<p>Os dois livros são a base. As aulas explicam os mesmos temas de outro jeito; súmulas, OJs e cadernos legislativos ajudam a marcar o Vade Mecum.</p></div>' +
      F2.GRUPOS.map(function (gr) {
        var ms = F2.MATERIAIS.filter(function (m) { return m.g === gr[0]; }), n = ms.filter(function (m) { return feito[m.id]; }).length;
        return '<h2 class="f2-sec">' + esc(gr[1]) + '<small>' + n + '/' + ms.length + '</small></h2><p class="f2-gr-desc">' + esc(gr[2]) + '</p><div class="f2-grid">' +
          ms.map(function (m) {
            return '<div class="f2-mat' + (feito[m.id] ? ' ok' : '') + '"><span class="n">' + m.n + '</span><button class="t" data-abrir="' + m.id + '">' + esc(m.t) + '</button>' +
              '<button class="ck" data-feito="' + m.id + '">' + (feito[m.id] ? '✓ lido' : 'marcar') + '</button></div>';
          }).join('') + '</div>';
      }).join('');
  }

  // ── Peças ──
  var DECIDIR = [
    ['Ainda não há processo; o empregado quer cobrar direitos', 'rt'],
    ['Ainda não há processo; a empresa quer pagar e o empregado não recebe', 'cons'],
    ['A empresa quer dispensar por falta grave um empregado estável que exige inquérito', 'iq'],
    ['Há reclamação e o cliente é o réu (antes da audiência)', 'cont'],
    ['Reclamação proposta em local diferente do que manda o art. 651 CLT', 'exc'],
    ['Saiu a sentença da Vara e o cliente perdeu', 'ro'],
    ['A decisão tem omissão, contradição, obscuridade ou erro material', 'ed'],
    ['Saiu acórdão do TRT no recurso ordinário', 'rr'],
    ['O recurso do cliente teve o seguimento negado', 'ai'],
    ['Execução com juízo garantido; o cliente é o executado', 'ee'],
    ['O juiz decidiu na execução (ex.: julgou os embargos)', 'ap'],
    ['Ato do juiz sem recurso cabível (ex.: tutela antes da sentença)', 'ms'],
    ['Decisão de mérito já transitou em julgado', 'ar']
  ];
  function htmlPecas() {
    var alvo = location.hash.slice(1);
    return '<div class="f2-hero"><div class="f2-eb">' + F2.PECAS.length + ' peças · da mais cobrada para a menos cobrada</div><h2>Qual é a <em>peça</em>?</h2>' +
      '<p>Errar a peça zera a nota da peça (5 pontos). Leia o problema perguntando: já há processo? Em que fase? Quem é o meu cliente? Qual decisão eu ataco? ' +
      'Prazos e artigos aqui são um resumo: confira sempre no Vade Mecum.</p></div>' +
      '<div class="f2-dec">' + DECIDIR.map(function (d) { return '<div><span>' + esc(d[0]) + '</span><a href="#' + d[1] + '">' + esc(peca(d[1]).nome) + ' ↓</a></div>'; }).join('') + '</div>' +
      F2.PECAS.map(function (p) {
        return '<div class="f2-peca' + (alvo === p.id ? ' alvo' : '') + '" id="' + p.id + '"><h3>' + esc(p.nome) + '</h3><dl>' +
          '<dt>Para quem</dt><dd>' + esc(p.quem) + '</dd><dt>Quando</dt><dd>' + esc(p.quando) + '</dd><dt>Prazo</dt><dd>' + esc(p.prazo) + '</dd>' +
          '<dt>Base legal</dt><dd>' + esc(p.base) + '</dd><dt>Endereçamento</dt><dd>' + esc(p.onde) + '</dd></dl>' +
          '<ol>' + p.estrutura.map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') + '</ol>' +
          '<a class="f2-bt pri" href="' + link('treino', '&peca=' + p.id) + '">Treinar esta peça</a></div>';
      }).join('');
  }

  // ── Treino ──
  var CRITERIOS = [['peca', 'Peça certa e endereçamento'], ['partes', 'Partes e qualificação'], ['fundamentos', 'Fatos e fundamentos jurídicos'],
    ['pedidos', 'Pedidos'], ['fechamento', 'Fechamento (valor, local, data, advogado)']];
  var rascunho = { crit: {} }, cronTimer = null;
  function treinos() { return ler(TREINO_KEY, []); }
  function cron() { return ler(CRON_KEY, { inicio: null, acumulado: 0 }); }
  function cronMs() { var c = cron(); return c.acumulado + (c.inicio ? Date.now() - c.inicio : 0); }
  function salvarCron(c) { try { localStorage.setItem(CRON_KEY, JSON.stringify(c)); } catch (e) {} }
  function mmss(ms) {
    var t = Math.floor(ms / 1000), h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), s = t % 60;
    return (h ? h + ':' + String(m).padStart(2, '0') : String(m).padStart(2, '0')) + ':' + String(s).padStart(2, '0');
  }
  function fmtMin(min) { return min >= 60 ? Math.floor(min / 60) + 'h' + String(min % 60).padStart(2, '0') : min + ' min'; }
  function num(v, max) { var n = parseFloat(String(v || '').replace(',', '.')); return isNaN(n) ? null : Math.min(max, Math.max(0, n)); }
  function br(n, c) { return n == null ? '—' : n.toFixed(c == null ? 2 : c).replace('.', ','); }

  function htmlTreino() {
    if (Q.get('peca') && !rascunho.peca) { var pp = peca(Q.get('peca')); if (pp) rascunho.peca = pp.nome; }
    var lista = treinos(), nomes = F2.PECAS.map(function (p) { return p.nome; });
    var h = '<div class="f2-hero"><div class="f2-eb">Peças · discursivas · simulado</div><h2>Escrever, corrigir, <em>registrar</em></h2>' +
      '<p>Use as provas anteriores da FGV com o padrão de resposta (gabarito comentado da banca) em <a href="https://oab.fgv.br" target="_blank" rel="noopener">oab.fgv.br</a>. ' +
      'Corrija pela grade do padrão de resposta e registre aqui — é assim que você vê onde perde ponto.</p></div>';
    // peça
    h += '<h2 class="f2-sec">Peça</h2><div class="rv-tr-form">' +
      '<div class="rv-tr-linha"><label class="rv-tr-campo" style="flex:2"><span>Peça</span><input id="tr-peca" list="tr-pecas" placeholder="Ex.: Reclamação Trabalhista" value="' + esc(rascunho.peca || '') + '"></label>' +
      '<datalist id="tr-pecas">' + nomes.map(function (n) { return '<option value="' + esc(n) + '">'; }).join('') + '</datalist>' +
      '<div class="rv-tr-campo" style="flex:0 0 auto"><span>Cronômetro</span><div class="rv-cron"><b id="tr-cron">' + mmss(cronMs()) + '</b>' +
      '<button type="button" id="tr-cron-bt">' + (cron().inicio ? 'Pausar' : (cronMs() ? 'Continuar' : 'Iniciar')) + '</button><button type="button" id="tr-cron-zero">Zerar</button></div></div>' +
      '<label class="rv-tr-campo" style="flex:0 0 110px"><span>Tempo (min)</span><input id="tr-tempo" type="number" min="0" inputmode="numeric" value="' + esc(rascunho.tempo || '') + '"></label></div>' +
      '<div class="rv-crit">' + CRITERIOS.map(function (c) {
        var v = rascunho.crit[c[0]] || '';
        return '<div class="rv-crit-l"><span>' + esc(c[1]) + '</span><div class="rv-seg" data-crit="' + c[0] + '">' +
          [['ok', 'Completo'], ['parcial', 'Parcial'], ['faltou', 'Faltou']].map(function (o) { return '<button type="button" data-v="' + o[0] + '"' + (v === o[0] ? ' class="on"' : '') + '>' + o[1] + '</button>'; }).join('') + '</div></div>';
      }).join('') + '</div>' +
      '<div class="rv-tr-linha"><label class="rv-tr-campo" style="flex:0 0 150px"><span>Nota (0 a 5)</span><input id="tr-nota" inputmode="decimal" placeholder="ex.: 3,5" value="' + esc(rascunho.nota || '') + '"></label>' +
      '<label class="rv-tr-campo" style="flex:3"><span>O que errei / lembrar na próxima</span><textarea id="tr-obs">' + esc(rascunho.obs || '') + '</textarea></label></div>' +
      '<div class="rv-tr-acoes"><button type="button" class="btn btn-primary" id="tr-salvar">Salvar peça</button><span class="rv-tr-msg" id="tr-msg"></span></div></div>';
    if (lista.length) {
      var comNota = lista.filter(function (t) { return typeof t.nota === 'number'; });
      var media = comNota.length ? comNota.reduce(function (a, t) { return a + t.nota; }, 0) / comNota.length : null;
      var falhas = CRITERIOS.map(function (c) { return [c[1], lista.filter(function (t) { return t.crit && (t.crit[c[0]] === 'faltou' || t.crit[c[0]] === 'parcial'); }).length]; })
        .sort(function (a, b) { return b[1] - a[1]; });
      h += '<div class="rv-tr-resumo" style="margin-top:1rem"><div class="rv-tr-num"><b>' + lista.length + '</b><small>peças treinadas</small></div>' +
        '<div class="rv-tr-num"><b>' + br(media) + '</b><small>nota média (de 5)</small></div>' +
        '<div class="rv-tr-num"><b style="font-size:1rem">' + (falhas[0][1] ? esc(falhas[0][0]) : 'Nada ainda') + '</b><small>onde mais perde</small></div></div>' +
        lista.slice(0, 8).map(function (t) {
          return '<div class="rv-tr-item"><div class="rv-tr-item-top"><strong>' + esc(t.peca) + '</strong><span>' +
            [t.data ? t.data.split('-').reverse().join('/') : '', t.tempo ? fmtMin(t.tempo) : '', typeof t.nota === 'number' ? 'nota ' + br(t.nota) : ''].filter(Boolean).join(' · ') + '</span></div>' +
            (t.obs ? '<div class="rv-tr-obs">' + esc(t.obs) + '</div>' : '') + '<button type="button" class="rv-tr-del" data-del="' + esc(t.id) + '">Excluir</button></div>';
        }).join('');
    }
    // discursivas
    var disc = ler(K_DISC, []);
    var md = disc.length ? disc.reduce(function (a, x) { return a + (x.nota || 0); }, 0) / disc.length : null;
    h += '<h2 class="f2-sec">Questões discursivas<small>cada uma vale 1,25</small></h2><div class="rv-tr-form">' +
      '<div class="rv-tr-linha"><label class="rv-tr-campo" style="flex:2"><span>Tema / exame</span><input id="dq-tema" placeholder="Ex.: 41º Exame, Q2 · horas extras"></label>' +
      '<label class="rv-tr-campo" style="flex:0 0 110px"><span>Tempo (min)</span><input id="dq-tempo" type="number" min="0"></label>' +
      '<label class="rv-tr-campo" style="flex:0 0 130px"><span>Nota (0 a 1,25)</span><input id="dq-nota" inputmode="decimal" placeholder="ex.: 0,85"></label></div>' +
      '<div class="rv-tr-linha"><label class="rv-tr-campo" style="flex:3"><span>O que faltou (artigo, súmula, conclusão)</span><textarea id="dq-obs"></textarea></label></div>' +
      '<div class="rv-tr-acoes"><button type="button" class="btn btn-primary" id="dq-salvar">Salvar questão</button><span class="rv-tr-msg">' +
      (disc.length ? disc.length + ' feitas · média ' + br(md) + ' de 1,25' : 'Responda sempre: sim/não + fundamento (artigo/súmula) + explicação curta.') + '</span></div></div>' +
      disc.slice(0, 6).map(function (x) {
        return '<div class="rv-tr-item"><div class="rv-tr-item-top"><strong>' + esc(x.tema || 'Questão') + '</strong><span>' +
          [x.data.split('-').reverse().join('/'), x.tempo ? fmtMin(x.tempo) : '', x.nota != null ? 'nota ' + br(x.nota) : ''].filter(Boolean).join(' · ') + '</span></div>' +
          (x.obs ? '<div class="rv-tr-obs">' + esc(x.obs) + '</div>' : '') + '<button type="button" class="rv-tr-del" data-deld="' + esc(x.id) + '">Excluir</button></div>';
      }).join('');
    // simulado
    var sims = ler(K_SIM, []);
    h += '<h2 class="f2-sec">Simulado completo<small>5 horas · aprovação com 6,0</small></h2><div class="rv-tr-form">' +
      '<div class="rv-tr-linha"><label class="rv-tr-campo" style="flex:2"><span>Exame usado</span><input id="sm-ex" placeholder="Ex.: 44º Exame"></label>' +
      '<label class="rv-tr-campo" style="flex:0 0 120px"><span>Peça (0 a 5)</span><input id="sm-p" inputmode="decimal"></label>' +
      '<label class="rv-tr-campo" style="flex:0 0 150px"><span>Questões (0 a 5)</span><input id="sm-q" inputmode="decimal" placeholder="soma das 4"></label></div>' +
      '<div class="rv-tr-acoes"><button type="button" class="btn btn-primary" id="sm-salvar">Salvar simulado</button></div></div>' +
      sims.map(function (x) {
        var t = (x.p || 0) + (x.q || 0);
        return '<div class="rv-tr-item"><div class="rv-tr-item-top"><strong>' + esc(x.ex || 'Simulado') + ' · ' + br(t) + ' ' + (t >= 6 ? '✅' : '❌') + '</strong><span>' +
          x.data.split('-').reverse().join('/') + ' · peça ' + br(x.p) + ' · questões ' + br(x.q) + '</span></div><button type="button" class="rv-tr-del" data-dels="' + esc(x.id) + '">Excluir</button></div>';
      }).join('');
    return h;
  }
  function lerRascunho() {
    var v = function (id) { return (document.getElementById(id) || {}).value; };
    if (!document.getElementById('tr-peca')) return;
    rascunho.peca = v('tr-peca'); rascunho.tempo = v('tr-tempo'); rascunho.nota = v('tr-nota'); rascunho.obs = v('tr-obs');
  }
  function ligarTreino() {
    clearInterval(cronTimer);
    cronTimer = setInterval(function () { var x = document.getElementById('tr-cron'); if (x) x.textContent = mmss(cronMs()); else clearInterval(cronTimer); }, 1000);
    document.getElementById('tr-cron-bt').onclick = function () {
      var c = cron();
      if (c.inicio) { c.acumulado += Date.now() - c.inicio; c.inicio = null; } else c.inicio = Date.now();
      salvarCron(c); lerRascunho();
      if (!c.inicio) rascunho.tempo = String(Math.max(1, Math.round(c.acumulado / 60000)));
      render();
    };
    document.getElementById('tr-cron-zero').onclick = function () { salvarCron({ inicio: null, acumulado: 0 }); lerRascunho(); render(); };
    document.querySelectorAll('.rv-crit .rv-seg').forEach(function (seg) {
      seg.onclick = function (e) {
        var b = e.target.closest('button'); if (!b) return;
        var k = seg.dataset.crit;
        rascunho.crit[k] = rascunho.crit[k] === b.dataset.v ? '' : b.dataset.v;
        seg.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x.dataset.v === rascunho.crit[k]); });
      };
    });
    document.getElementById('tr-salvar').onclick = function () {
      lerRascunho();
      var nome = (rascunho.peca || '').trim();
      if (!nome) { document.getElementById('tr-msg').textContent = 'Diga qual peça você treinou.'; return; }
      var tempo = parseInt(rascunho.tempo, 10);
      if (!(tempo > 0) && cronMs() > 0) tempo = Math.max(1, Math.round(cronMs() / 60000));
      var crit = {}; Object.keys(rascunho.crit).forEach(function (k) { if (rascunho.crit[k]) crit[k] = rascunho.crit[k]; });
      var lista = treinos();
      lista.unshift({ id: 't' + Date.now(), data: HOJE, peca: nome, tempo: tempo > 0 ? tempo : null, nota: num(rascunho.nota, 5), crit: crit, obs: (rascunho.obs || '').trim() });
      gravar(TREINO_KEY, lista); salvarCron({ inicio: null, acumulado: 0 }); rascunho = { crit: {} }; render();
    };
    document.getElementById('dq-salvar').onclick = function () {
      var v = function (id) { return document.getElementById(id).value; };
      var l = ler(K_DISC, []);
      l.unshift({ id: 'd' + Date.now(), data: HOJE, tema: v('dq-tema').trim(), tempo: parseInt(v('dq-tempo'), 10) || null, nota: num(v('dq-nota'), 1.25), obs: v('dq-obs').trim() });
      gravar(K_DISC, l); render();
    };
    document.getElementById('sm-salvar').onclick = function () {
      var v = function (id) { return document.getElementById(id).value; };
      var l = ler(K_SIM, []);
      l.unshift({ id: 's' + Date.now(), data: HOJE, ex: v('sm-ex').trim(), p: num(v('sm-p'), 5), q: num(v('sm-q'), 5) });
      gravar(K_SIM, l); render();
    };
    function apagar(attr, chave) {
      document.querySelectorAll('[' + attr + ']').forEach(function (b) {
        b.onclick = function () {
          if (!confirm('Excluir este registro?')) return;
          lerRascunho();
          gravar(chave, ler(chave, []).filter(function (t) { return t.id !== b.getAttribute(attr); }));
          render();
        };
      });
    }
    apagar('data-del', TREINO_KEY); apagar('data-deld', K_DISC); apagar('data-dels', K_SIM);
  }

  // ── Guia ──
  function htmlGuia() {
    return '<div class="f2-hero"><div class="f2-eb">OAB 48 · prova prático-profissional</div><h2>Domingo, <em>28 de fevereiro de 2027</em></h2>' +
      '<p>Faltam ' + Math.max(0, dias(HOJE, F2.PROVA)) + ' dias. Data do cronograma oficial divulgado pela OAB; confirme local, horário e regras no edital do 48º Exame em ' +
      '<a href="https://oab.fgv.br" target="_blank" rel="noopener">oab.fgv.br</a>.</p></div>' +
      '<div class="f2-txt"><h3>Como é a prova</h3><ul>' +
      '<li><b>1 peça profissional</b> valendo 5,0 pontos e <b>4 questões discursivas</b> valendo 1,25 cada — total 10.</li>' +
      '<li>Aprova com <b>6,0</b>, sem arredondamento.</li>' +
      '<li>Duração de 5 horas (conferir no edital).</li>' +
      '<li>Pode consultar <b>legislação sem comentários, sem anotações e sem comparações</b>. O edital lista o que é permitido (marca-texto, remissões, separadores) — leia antes de marcar o Vade Mecum.</li>' +
      '<li><b>Nota zero na peça</b> se ela for inadequada ao problema (peça errada). Assinar ou se identificar no texto também anula: feche com "Advogado… OAB…", sem seu nome.</li></ul></div>' +
      '<div class="f2-txt"><h3>Como se preparar</h3><ul>' +
      '<li><b>Identificar a peça</b> é o passo que mais vale: pergunte se já há processo, em que fase, quem é o cliente e qual decisão você ataca (veja a aba Peças).</li>' +
      '<li><b>Esqueleto antes de escrever</b>: endereçamento, partes, fatos, fundamentos (lei + súmula/OJ), pedidos, fechamento. Os pontos do padrão de resposta estão quase sempre nos fundamentos e nos pedidos.</li>' +
      '<li><b>Treinar com provas anteriores</b> da FGV e corrigir pelo padrão de resposta. Uma peça completa por semana na base e uma por dia na reta final.</li>' +
      '<li><b>Discursivas</b>: responda de forma direta — sim/não, o fundamento (artigo e súmula) e uma frase de explicação.</li>' +
      '<li><b>Vade Mecum</b>: marque, com o que o edital permite, os artigos que você mais usa (art. 840, 847, 895, 896, 897, 884 CLT…) e as súmulas do TST.</li>' +
      '<li><b>Tempo</b>: na prova, separe cerca de 3 horas para a peça e 2 para as questões; treine com esse relógio.</li></ul></div>' +
      '<div class="f2-txt"><h3>O que vale procurar para baixar</h3><ul>' +
      '<li>Provas anteriores de 2ª fase de Trabalho com <b>padrão de resposta</b> (FGV) — do 35º ao 47º, pelo menos.</li>' +
      '<li>Um livro/apostila de <b>Prática Trabalhista para a 2ª fase</b> (com modelos de peças comentados).</li>' +
      '<li>Um caderno de <b>peças trabalhistas modelo</b> (reclamação, contestação, RO, RR, AP, embargos à execução, MS).</li>' +
      '<li>Lista de <b>súmulas e OJs do TST mais cobradas</b> na 2ª fase.</li>' +
      '<li>Material de <b>repescagem</b>/reta final de Trabalho (resumos curtos para a última semana).</li>' +
      '<li>Um <b>Vade Mecum</b> permitido pelo edital, atualizado.</li></ul></div>';
  }

  // ── Leitor ──
  function abrirPDF(id) {
    var m = mat(id), box = document.getElementById('f2-modal-leitor');
    document.getElementById('f2-modal-t').textContent = m ? m.t : 'PDF';
    document.getElementById('f2-modal-drive').href = 'https://drive.google.com/file/d/' + id + '/view';
    box.innerHTML = '';
    if (window.LEITOR) LEITOR.montar(box, id, { rolagem: box });
    else box.innerHTML = '<iframe src="https://drive.google.com/file/d/' + id + '/preview" style="width:100%;height:100%;border:0"></iframe>';
    document.getElementById('f2-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function fecharPDF() {
    document.getElementById('f2-modal').classList.remove('open');
    setTimeout(function () { document.getElementById('f2-modal-leitor').innerHTML = ''; }, 200);
    document.body.style.overflow = '';
  }

  function render() {
    var el = document.getElementById('f2');
    el.innerHTML = ABA === 'plano' ? htmlPlano() : ABA === 'estudo' ? htmlEstudo() : ABA === 'pecas' ? htmlPecas() :
      ABA === 'treino' ? htmlTreino() : ABA === 'guia' ? htmlGuia() : htmlHoje();
    if (ABA === 'treino') ligarTreino();
  }

  document.addEventListener('click', function (e) {
    var t = e.target;
    var ab = t.closest('[data-abrir]'); if (ab) { abrirPDF(ab.dataset.abrir); return; }
    var fe = t.closest('[data-feito]');
    if (fe) { var f = ler(K_FEITO, {}); if (f[fe.dataset.feito]) delete f[fe.dataset.feito]; else f[fe.dataset.feito] = HOJE; gravar(K_FEITO, f); render(); return; }
    if (t.id === 'f2-modal-x' || t.id === 'f2-modal') fecharPDF();
  });
  document.addEventListener('change', function (e) {
    var c = e.target.closest('[data-ck]'); if (!c) return;
    var all = ler(K_CHECK, {}), d = all[c.dataset.dia] = all[c.dataset.dia] || {};
    if (c.checked) d[c.dataset.ck] = true; else delete d[c.dataset.ck];
    // material lido no dia também conta na aba Estudo
    var it = (diaDoPlano(c.dataset.dia) || { itens: [] }).itens.filter(function (x) { return x.k === c.dataset.ck; })[0];
    if (it && it.mat) { var f = ler(K_FEITO, {}); if (c.checked) f[it.mat] = f[it.mat] || HOJE; else delete f[it.mat]; gravar(K_FEITO, f); }
    gravar(K_CHECK, all); render();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fecharPDF(); });

  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('f2-titulo').innerHTML = TITULOS[ABA] || TITULOS.hoje;
    document.title = (TITULOS[ABA] || '').replace(/<[^>]+>/g, '') + ' - OAB';
    var f = dias(HOJE, F2.PROVA);
    document.getElementById('f2-falta').textContent = f > 0 ? 'prova em ' + f + ' dias' : 'dia da prova';
    render();
    if (ABA === 'pecas' && location.hash) { var a = document.getElementById(location.hash.slice(1)); if (a) a.scrollIntoView(); }
  });
})();
