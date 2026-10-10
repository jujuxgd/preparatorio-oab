// Revisão ativa (a partir de 12/10/2026): flashcards das Revisões VDE com "sei"/"errei".
// Usado por: sessao.html, hoje.html
//
// Regra de cada cartão (estado em oab_fc_estado_v1):
//   errei → volta em 1 dia e entra no Caderno de Erros; acertando, 7 e depois 15 dias;
//   sei   → cartão novo volta em 15 dias; "sei" no degrau de 15 dias tira da rotação.
(function () {
  var K_FC = 'oab_fc_estado_v1';
  var K_QPT = 'oab_ativo_questoes_por_topico';
  var ESCADA = [1, 7, 15];
  var VESPERA = '2027-01-09';
  var NOVOS_POR_MATERIA = 10;

  function hoje() {
    return typeof dataLocalHoje === 'function' ? dataLocalHoje() : iso(new Date());
  }
  function iso(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function somaDias(s, n) {
    var p = s.split('-').map(Number);
    return iso(new Date(p[0], p[1] - 1, p[2] + n));
  }
  function ler(k, padrao) {
    try { return JSON.parse(localStorage.getItem(k)) || padrao; } catch (e) { return padrao; }
  }
  function gravar(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
      localStorage.setItem('oab_local_rev', String(Date.now()));
      if (window._syncOAB && window._syncOAB.notificarAlteracaoLocal) window._syncOAB.notificarAlteracaoLocal(k);
    } catch (e) {}
  }

  // Um arquivo de flashcards por matéria; carregados sob demanda.
  var ARQUIVOS = ['fc-etica.js', 'fc-constitucional.js', 'fc-civil.js', 'fc-proc-civil.js', 'fc-penal.js', 'fc-proc-penal.js', 'fc-trabalho.js', 'fc-proc-trabalho.js'];
  var _carga = null;
  function carregarCartoes() {
    if (_carga) return _carga;
    _carga = Promise.all(ARQUIVOS.map(function (arq) {
      return new Promise(function (ok) {
        var s = document.createElement('script');
        s.src = arq; s.onload = ok; s.onerror = ok;
        document.head.appendChild(s);
      });
    })).then(cartoes);
    return _carga;
  }

  function cartoes() { return window.FC_VDE || []; }
  function porId(id) { return cartoes().filter(function (c) { return c.id === id; })[0] || null; }
  function estados() { return ler(K_FC, {}); }

  // Revisão marcada para depois da véspera é puxada para 09/01, para nada ficar para trás.
  function agendar(base, dias) {
    var alvo = somaDias(base, dias);
    return alvo > VESPERA && base < VESPERA ? VESPERA : alvo;
  }

  function responder(id, sabia) {
    var todos = estados(), h = hoje();
    var e = todos[id] || { n: null, h: [] };
    var n = sabia ? (e.n == null ? ESCADA.length - 1 : e.n + 1) : 0;
    e.h = (e.h || []).concat([[h, sabia ? 's' : 'e']]).slice(-12);
    if (!sabia) e.erros = (e.erros || 0) + 1;
    if (n >= ESCADA.length) {
      e.n = n; e.fora = true; delete e.prox;
    } else {
      e.n = n; e.fora = false; e.prox = agendar(h, ESCADA[n]);
    }
    todos[id] = e;
    gravar(K_FC, todos);
    espelharNoCaderno(id, sabia, e);
    return e;
  }

  // O cartão errado também aparece no Caderno de Erros (fila própria fica aqui na sessão).
  function espelharNoCaderno(id, sabia, e) {
    if (typeof erros_get !== 'function') return;
    var c = porId(id); if (!c) return;
    var reg = erros_get().filter(function (x) { return x.flashcard_id === id && x.status !== 'dominada'; })[0];
    if (!sabia) {
      erros_add({
        materia: c.d, topico: c.t, subtopico: 'Revisão ' + c.r + ' VDE · flashcard', motivo: 'memorizacao',
        o_que_faltou: c.f, explicacao: c.v + (c.b ? '\nBase: ' + c.b : ''), flashcard_id: id
      });
    } else if (reg) {
      if (e.fora) erros_dominar(reg.id); else erros_registrar_revisao(reg.id, true);
    }
  }

  function vencidos(data) {
    var h = data || hoje(), est = estados();
    return cartoes().filter(function (c) {
      var e = est[c.id];
      return e && !e.fora && e.prox && e.prox <= h;
    }).sort(function (a, b) { return est[a.id].prox.localeCompare(est[b.id].prox); });
  }

  // Cartões ainda não vistos das matérias do dia, na ordem das revisões.
  function novos(disciplinas, limite) {
    var est = estados(), max = limite == null ? NOVOS_POR_MATERIA : limite, cont = {};
    return cartoes().filter(function (c) {
      if (est[c.id] || disciplinas.indexOf(c.d) < 0) return false;
      cont[c.d] = (cont[c.d] || 0) + 1;
      return cont[c.d] <= max;
    });
  }

  function resumo() {
    var est = estados(), r = { total: cartoes().length, vistos: 0, fora: 0, emRevisao: 0, vencidos: vencidos().length };
    cartoes().forEach(function (c) {
      var e = est[c.id]; if (!e) return;
      r.vistos++;
      if (e.fora) r.fora++; else r.emRevisao++;
    });
    return r;
  }

  // Erros por disciplina e tema: cartões que já levaram "errei" + Caderno de Erros pendente.
  function painelErros() {
    var est = estados(), out = {};
    function soma(disc, tema, campo) {
      var d = out[disc] || (out[disc] = { fc: 0, cad: 0, temas: {} });
      d[campo]++;
      var t = d.temas[tema || '—'] || (d.temas[tema || '—'] = { fc: 0, cad: 0 });
      t[campo]++;
    }
    cartoes().forEach(function (c) { var e = est[c.id]; if (e && e.erros) soma(c.d, c.t, 'fc'); });
    if (typeof erros_get === 'function') {
      erros_get().forEach(function (x) {
        if (x.status === 'dominada' || x.flashcard_id) return;
        var disc = (window.ESTUDO && ESTUDO.disciplinaDoBanco((window.MATERIAS_ERROS || {})[x.materia] || x.materia)) || x.materia || 'Sem matéria';
        soma(disc, x.topico, 'cad');
      });
    }
    return out;
  }

  function diaDoCalendario(data) {
    var cal = window.CAL_ATIVO; if (!cal) return null;
    var d = data || hoje();
    return cal.dias.filter(function (x) { return x.d === d; })[0] || null;
  }

  function questoesPorTopico() {
    var n = parseInt(localStorage.getItem(K_QPT), 10);
    return n > 0 ? n : 10;
  }
  function definirQuestoesPorTopico(n) { gravar(K_QPT, n); }

  window.ATIVO = {
    ESCADA: ESCADA, ARQUIVOS: ARQUIVOS, hoje: hoje, somaDias: somaDias,
    carregarCartoes: carregarCartoes, cartoes: cartoes, porId: porId, estados: estados, responder: responder,
    vencidos: vencidos, novos: novos, resumo: resumo, painelErros: painelErros,
    questoesPorTopico: questoesPorTopico, definirQuestoesPorTopico: definirQuestoesPorTopico,
    diaDoCalendario: diaDoCalendario
  };
})();
