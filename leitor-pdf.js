// Leitor de PDF do Drive com grifos e anotações (PDF.js).
// O PDF vem pela API do Drive (chave restrita aos domínios do site, só lê arquivos com link aberto);
// sem acesso, cai para o preview do Drive como antes.
// Grifos em oab_grifos_v1: { "<idArquivo>|<idGrifo>": {p, r:[[x,y,w,h]...] (0–1 da página), c, t, n, u, x?} }
// u = horário da última alteração; x = apagado (fica para a sincronização não ressuscitar o grifo).
(function () {
  var CHAVE = 'AIzaSyAmSnV2qyIAfzqXuYxsGvYIgaKl45TqIoU';
  var PDFJS = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';
  var K = 'oab_grifos_v1';
  var CORES = [
    { id: 'am', nome: 'Amarelo', bg: 'rgba(255,214,10,.42)' },
    { id: 'vd', nome: 'Verde', bg: 'rgba(110,200,120,.38)' },
    { id: 'rs', nome: 'Rosa', bg: 'rgba(240,120,170,.36)' },
    { id: 'az', nome: 'Azul', bg: 'rgba(90,160,240,.34)' }
  ];
  function cor(id) { return (CORES.filter(function (c) { return c.id === id; })[0] || CORES[0]).bg; }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  function ler() { try { return JSON.parse(localStorage.getItem(K)) || {}; } catch (e) { return {}; } }
  function gravar(t) {
    try {
      localStorage.setItem(K, JSON.stringify(t));
      localStorage.setItem('oab_local_rev', String(Date.now()));
      if (window._syncOAB && window._syncOAB.notificarAlteracaoLocal) window._syncOAB.notificarAlteracaoLocal(K);
    } catch (e) {}
  }
  function grifosDe(arq) {
    var t = ler(), out = [];
    Object.keys(t).forEach(function (k) {
      var i = k.indexOf('|');
      if (k.slice(0, i) === arq && !t[k].x) out.push(Object.assign({ id: k.slice(i + 1) }, t[k]));
    });
    return out.sort(function (a, b) { return a.p - b.p || (a.r[0][1] - b.r[0][1]); });
  }
  function salvarGrifo(arq, g) {
    var t = ler(), k = arq + '|' + g.id, o = Object.assign({}, g); delete o.id; o.u = Date.now();
    t[k] = o; gravar(t);
  }
  function apagarGrifo(arq, id) {
    var t = ler(), k = arq + '|' + id;
    if (t[k]) { t[k] = { x: 1, u: Date.now(), p: t[k].p, r: [], c: t[k].c }; gravar(t); }
  }

  var _lib = null;
  function carregarLib() {
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    if (_lib) return _lib;
    _lib = new Promise(function (ok, erro) {
      var s = document.createElement('script');
      s.src = PDFJS + 'pdf.min.js';
      s.onload = function () { window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS + 'pdf.worker.min.js'; ok(window.pdfjsLib); };
      s.onerror = erro;
      document.head.appendChild(s);
    });
    return _lib;
  }
  var _cache = {};
  // PDFs baixados ficam guardados no navegador (Cache Storage): abrir de novo não gasta internet.
  function baixar(arq) {
    if (_cache[arq]) return _cache[arq];
    var chave = location.origin + '/__pdf/' + arq, cx = null;
    var abrir = window.caches ? caches.open('oab-pdfs-v1').then(function (c) { cx = c; return c.match(chave); }).catch(function () { return null; }) : Promise.resolve(null);
    _cache[arq] = abrir.then(function (r) {
      if (r) return r.arrayBuffer();
      return fetch('https://www.googleapis.com/drive/v3/files/' + arq + '?alt=media&key=' + CHAVE).then(function (r2) {
        if (!r2.ok) throw new Error('drive ' + r2.status);
        if (cx) cx.put(chave, r2.clone()).catch(function () {});
        return r2.arrayBuffer();
      });
    }).catch(function (e) { delete _cache[arq]; throw e; });
    return _cache[arq];
  }

  // ── barra de cores que aparece sobre a seleção ──
  var barra = null, pendente = null;
  function montarBarra() {
    if (barra) return barra;
    barra = document.createElement('div');
    barra.className = 'lp-barra';
    barra.innerHTML = CORES.map(function (c) { return '<button type="button" data-cor="' + c.id + '" title="' + c.nome + '" style="background:' + c.bg + '"></button>'; }).join('') +
      '<span class="lp-sep"></span><button type="button" data-nota="1" class="lp-bnota" title="Grifar e anotar">✎</button>';
    barra.addEventListener('mousedown', function (e) { e.preventDefault(); });
    barra.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b || !pendente) return;
      var p = pendente; pendente = null; esconderBarra();
      var g = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), p: p.p, r: p.r, c: b.dataset.cor || 'am', t: p.t, n: '' };
      salvarGrifo(p.arq, g);
      var sel = window.getSelection(); if (sel) sel.removeAllRanges();
      p.viewer.redesenhar();
      if (b.dataset.nota) p.viewer.abrirNota(g.id);
    });
    document.body.appendChild(barra);
    return barra;
  }
  function esconderBarra() { if (barra) barra.classList.remove('on'); }
  function mostrarBarra(x, y) {
    montarBarra();
    barra.style.left = Math.max(8, Math.min(x - 90, window.innerWidth - 190)) + 'px';
    barra.style.top = Math.max(8, y - 48) + 'px';
    barra.classList.add('on');
  }

  var VIEWERS = [];
  function verificarSelecao() {
    var sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) { if (!(barra && barra.matches(':hover'))) { pendente = null; esconderBarra(); } return; }
    var range = sel.getRangeAt(0), no = range.commonAncestorContainer;
    var el = no.nodeType === 1 ? no : no.parentElement;
    var pag = el && el.closest('.lp-pag');
    var texto = sel.toString().replace(/\s+/g, ' ').trim();
    if (!pag || texto.length < 2) { pendente = null; esconderBarra(); return; }
    var v = VIEWERS.filter(function (x) { return x.raiz.contains(pag); })[0]; if (!v) return;
    var caixa = pag.getBoundingClientRect(), rs = [];
    Array.prototype.forEach.call(range.getClientRects(), function (q) {
      if (q.width < 2 || q.height < 2) return;
      var x = Math.max(q.left, caixa.left), y = Math.max(q.top, caixa.top);
      var x2 = Math.min(q.right, caixa.right), y2 = Math.min(q.bottom, caixa.bottom);
      if (x2 - x < 2 || y2 - y < 2) return;
      rs.push([(x - caixa.left) / caixa.width, (y - caixa.top) / caixa.height, (x2 - x) / caixa.width, (y2 - y) / caixa.height].map(function (n) { return Math.round(n * 10000) / 10000; }));
    });
    if (!rs.length) return;
    pendente = { arq: v.arq, p: +pag.dataset.p, r: rs, t: texto.slice(0, 300), viewer: v };
    var ult = range.getBoundingClientRect();
    mostrarBarra(ult.left + ult.width / 2, ult.top);
  }
  var _t = null;
  document.addEventListener('selectionchange', function () { clearTimeout(_t); _t = setTimeout(verificarSelecao, 250); });
  document.addEventListener('scroll', function () { if (pendente) { var s = window.getSelection(); if (s && s.rangeCount) { var r = s.getRangeAt(0).getBoundingClientRect(); mostrarBarra(r.left + r.width / 2, r.top); } } }, true);

  // ── um leitor por PDF ──
  function Leitor(raiz, arq, opts) {
    this.raiz = raiz; this.arq = arq; this.opts = opts || {}; this.paginas = []; this.area = false;
    VIEWERS.push(this);
  }
  Leitor.prototype.meus = function () {
    var de = this.opts.de || 1, ate = this.opts.ate || 1e9;
    return grifosDe(this.arq).filter(function (g) { return g.p >= de && g.p <= ate; });
  };
  Leitor.prototype.iniciar = function () {
    var self = this, raiz = this.raiz;
    raiz.classList.add('lp');
    raiz.innerHTML = '<div class="lp-topo">' + (this.opts.titulo ? '<div class="lp-titulo">' + this.opts.titulo + '</div>' : '') +
      '<span class="lp-info">Carregando…</span>' +
      '<span class="lp-acoes">' +
        '<button type="button" class="lp-i lp-so-pdf" data-a="lista" title="Seus grifos neste PDF" aria-label="Grifos">✎<b class="lp-ng">0</b></button>' +
        '<button type="button" class="lp-i lp-so-texto lp-b-sum" data-a="sumario" title="Sumário do capítulo" aria-label="Sumário" hidden>☰</button>' +
        '<button type="button" class="lp-i lp-so-texto" data-a="ajustes" title="Letra, espaço, margem e fundo" aria-label="Ajustes do texto">Aa</button>' +
        '<button type="button" class="lp-i" data-a="cheia" title="Tela cheia" aria-label="Tela cheia">⛶</button>' +
        '<button type="button" class="lp-i" data-a="mais" title="Mais opções" aria-label="Mais opções">⋯</button>' +
      '</span>' +
      '<div class="lp-menu lp-menu-mais" hidden>' +
        (this.opts.semTexto ? '' : '<button type="button" class="lp-so-pdf" data-a="texto"><span>Ler como texto</span><small>letra e margens ajustáveis, bom no celular</small></button>') +
        '<button type="button" class="lp-so-texto" data-a="pdf"><span>Voltar ao PDF</span><small>com grifos</small></button>' +
        (this.opts.extras || []).map(function (x, i) { return '<button type="button" data-extra="' + i + '"><span>' + esc(x.t) + '</span>' + (x.sub ? '<small>' + esc(x.sub) + '</small>' : '') + '</button>'; }).join('') +
        '<button type="button" class="lp-so-pdf" data-a="area"><span>Grifar área</span><small>arraste um retângulo (PDF escaneado)</small></button>' +
        '<button type="button" class="lp-so-pdf" data-a="col"><span>Uma coluna por vez</span><small>para PDF em duas colunas</small></button>' +
        '<div class="lp-so-pdf lp-linha"><span>Zoom</span><button type="button" data-a="zoom-" aria-label="Diminuir">−</button><span class="lp-zoom"></span><button type="button" data-a="zoom+" aria-label="Aumentar">+</button></div>' +
        '<a href="https://drive.google.com/file/d/' + this.arq + '/view" target="_blank" rel="noopener"><span>Abrir no Drive</span></a>' +
      '</div>' +
      '<div class="lp-menu lp-menu-aj" hidden></div>' +
      '<div class="lp-menu lp-menu-sum" hidden></div>' +
      '</div>' +
      '<div class="lp-corpo"><div class="lp-paginas"></div><aside class="lp-lista"></aside></div>';
    if (this.opts.caixa) { raiz.classList.add('lp-caixa'); this.opts.rolagem = raiz.querySelector('.lp-corpo'); }
    var colSalvo = null; try { colSalvo = localStorage.getItem('oab_lp_col'); } catch (e) {}
    this.colunas = colSalvo ? colSalvo === '1' : window.innerWidth <= 700;
    raiz.querySelector('[data-a="col"]').classList.toggle('on', this.colunas);
    // o PDF é o padrão; o modo texto fica guardado por aparelho (chave nova: quem usava o modo texto antigo volta ao PDF)
    var txtSalvo = null; try { txtSalvo = localStorage.getItem('oab_lp_modo'); } catch (e) {}
    this.texto = txtSalvo === 'texto' && !this.opts.semTexto;
    function marcarModo() { raiz.classList.toggle('lp-modo-texto', self.texto); }
    marcarModo();
    this.ajustesTexto();
    function fecharMenus(exceto) { raiz.querySelectorAll('.lp-menu').forEach(function (m) { if (m !== exceto) m.hidden = true; }); raiz.querySelectorAll('[data-a="mais"],[data-a="ajustes"]').forEach(function (b) { b.classList.toggle('on', !!exceto && b.dataset.a === exceto.dataset.de); }); }
    raiz.querySelector('.lp-menu-mais').dataset.de = 'mais'; raiz.querySelector('.lp-menu-aj').dataset.de = 'ajustes'; raiz.querySelector('.lp-menu-sum').dataset.de = 'sumario';
    document.addEventListener('click', function (e) { var tp = raiz.querySelector('.lp-topo'); if (tp && !tp.contains(e.target)) fecharMenus(null); });
    raiz.querySelector('.lp-menu-sum').addEventListener('click', function (e) {
      var a = e.target.closest('[data-sum]'); if (!a) return;
      var h = raiz.querySelectorAll('.lp-texto h3, .lp-texto h4')[+a.dataset.sum];
      fecharMenus(null); if (h) self.rolarAte(h, 4);
    });
    var zoomSalvo = parseFloat(localStorage.getItem('oab_lp_zoom4'));
    this.zoom = zoomSalvo >= 0.6 && zoomSalvo <= 3 ? zoomSalvo : 1;
    function mostrarZoom() { raiz.querySelector('.lp-zoom').textContent = Math.round(self.zoom * 100) + '%'; }
    function mudarZoom(z) {
      self.zoom = Math.round(Math.min(3, Math.max(0.6, z)) * 100) / 100;
      try { localStorage.setItem('oab_lp_zoom4', String(self.zoom)); } catch (e) {}
      mostrarZoom(); self.renderizar();
    }
    mostrarZoom();
    raiz.querySelector('.lp-topo').addEventListener('click', function (e) {
      var x = e.target.closest('[data-extra]');
      if (x) { fecharMenus(null); self.opts.extras[+x.dataset.extra].fn(); return; }
      var b = e.target.closest('[data-a]'); if (!b) return;
      if (b.dataset.a === 'mais' || b.dataset.a === 'ajustes' || b.dataset.a === 'sumario') {
        var m = raiz.querySelector('.lp-menu-' + { mais: 'mais', ajustes: 'aj', sumario: 'sum' }[b.dataset.a]), abrir = m.hidden;
        fecharMenus(abrir ? m : null); m.hidden = !abrir;
        if (abrir && b.dataset.a === 'sumario') { var at = m.querySelector('.atual'); if (at) at.scrollIntoView({ block: 'center' }); }
        return;
      }
      if (b.dataset.a === 'area') { self.area = !self.area; b.classList.toggle('on', self.area); raiz.classList.toggle('modo-area', self.area); fecharMenus(null); }
      if ((b.dataset.a === 'texto' && !self.texto) || (b.dataset.a === 'pdf' && self.texto)) {
        self.texto = !self.texto; marcarModo(); fecharMenus(null);
        try { localStorage.setItem('oab_lp_modo', self.texto ? 'texto' : 'pdf'); } catch (e) {}
        self.renderizar();
      }
      if (b.dataset.a === 'col') {
        self.colunas = !self.colunas; b.classList.toggle('on', self.colunas);
        try { localStorage.setItem('oab_lp_col', self.colunas ? '1' : '0'); } catch (e) {}
        var n0 = self.paginaAtual(), r0 = self.renderizar();
        if (r0) r0.then(function () { var inf = self.paginas[n0]; if (inf && self.opts.rolagem) self.opts.rolagem.scrollTop += inf.el.getBoundingClientRect().top - self.opts.rolagem.getBoundingClientRect().top - 8; });
      }
      if (b.dataset.a === 'cheia') self.telaCheia(!raiz.classList.contains('lp-cheia'));
      if (b.dataset.a === 'lista') { b.classList.toggle('on', raiz.classList.toggle('lp-com-lista')); if (Math.abs(self._largura - self.largura()) > 40) self.renderizar(); }
      if (b.dataset.a === 'zoom+') mudarZoom(self.zoom + 0.25);
      if (b.dataset.a === 'zoom-') mudarZoom(self.zoom - 0.25);
    });
    this.lista();
    // texto já guardado aparece antes mesmo de baixar e abrir o PDF
    var rapido = this.texto ? txLer(this.chaveTexto()).then(function (c) {
      if (!c || !c.h || !self.texto || self.doc) return;
      self.porTexto(raiz.querySelector('.lp-paginas'), c.h); self._txRapido = true; self.voltarPosicao();
      if (c.c !== corAtual()) self._txRefazer = true;
    }).catch(function () {}) : Promise.resolve();
    return Promise.all([carregarLib(), baixar(this.arq), rapido]).then(function (r) {
      return r[0].getDocument({ data: new Uint8Array(r[1].slice(0)) }).promise;
    }).then(function (doc) {
      self.doc = doc;
      self.de = Math.max(1, self.opts.de || 1); self.ate = Math.min(doc.numPages, self.opts.ate || doc.numPages);
      raiz.querySelector('.lp-info').textContent = self.opts.de ? 'p. ' + self.de + '–' + self.ate : doc.numPages + ' p.';
      if (self._txRapido && self.texto) { self._largura = self.largura(); return self.medirMargem().then(function () { if (self._txRefazer) self.prepararTexto(true); }); }
      return self.medirMargem().then(function () { return self.renderizar(); }).then(function () { self.voltarPosicao(); if (!self.texto) self.prepararTexto(); });
    }).then(function () {
      var rz; window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(function () { if (Math.abs(self._largura - self.largura()) > 40) self.renderizar(); }, 300); });
    }).catch(function (e) {
      console.warn('Leitor PDF: usando o preview do Drive', e);
      raiz.classList.remove('lp');
      raiz.innerHTML = '<p class="ss-vazio" style="margin:0 0 .5rem">Não deu para abrir o leitor com grifos agora — mostrando o PDF pelo Drive.</p>' +
        '<iframe class="vde-pdf" src="https://drive.google.com/file/d/' + self.arq + '/preview" allow="autoplay"></iframe>';
    });
  };
  // Ajustes do modo texto (só deste aparelho): tamanho da letra, espaço entre linhas, margem, fundo e fonte.
  var K_TX = 'oab_lp_tx2', TX_PADRAO = { t: 2, l: 1, m: 0, f: 'papel', s: 'sans', e: 2 };
  var TX_TAM = [0.72, 0.8, 0.9, 1, 1.1, 1.22, 1.36, 1.5], TX_LIN = [1.45, 1.62, 1.85];
  function lerTx() {
    var v = {}; try { v = JSON.parse(localStorage.getItem(K_TX)) || {}; } catch (e) {}
    // escala ganhou 2 tamanhos menores no começo (02/11/2026): quem já tinha escolhido um tamanho continua no mesmo
    if (v.t != null && v.e == null) { v.t += 2; v.e = 2; }
    for (var k in TX_PADRAO) if (v[k] == null) v[k] = TX_PADRAO[k];
    if (v.f === 'sepia') v.f = 'papel';
    return v;
  }
  var _fonte = false;
  function carregarFonte() {
    if (_fonte) return; _fonte = true;
    var l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,600;1,7..72,400&display=swap';
    document.head.appendChild(l);
  }
  Leitor.prototype.aplicarTx = function () {
    var v = lerTx(), r = this.raiz, mp = Math.max(0, Math.min(3, +v.mp || 0));
    if (v.s === 'serif') carregarFonte();
    r.style.setProperty('--tx-tam', (TX_TAM[v.t] || 1) + 'rem');
    r.style.setProperty('--tx-lin', TX_LIN[v.l] || 1.7);
    r.style.setProperty('--tx-larg', 'none');
    this._mp = mp; this.sangrar();
    if (!this._ro && window.ResizeObserver) { var self = this; this._ro = new ResizeObserver(function () { self.sangrar(); }); this._ro.observe(r); }
    r.dataset.txFundo = v.f; r.dataset.txFonte = v.s;
    var aj = r.querySelector('.lp-menu-aj'); if (!aj) return;
    aj.querySelectorAll('[data-tx]').forEach(function (b) { var p = b.dataset.tx.split(':'); b.classList.toggle('on', String(v[p[0]]) === p[1]); });
    var rg = aj.querySelector('[data-tx-m]'); if (rg && document.activeElement !== rg) rg.value = mp;
    aj.querySelector('[data-tx-t="-"]').disabled = v.t <= 0; aj.querySelector('[data-tx-t="+"]').disabled = v.t >= TX_TAM.length - 1;
  };
  // margem abaixo de zero: só a área do texto avança sobre o respiro do cartão em volta, até 4px da borda da tela
  // (a barra com o título fica onde está); medido quando o leitor aparece, porque numa aba escondida a largura é 0
  Leitor.prototype.sangrar = function () {
    var r = this.raiz, mp = this._mp || 0, bb = r.getBoundingClientRect(), sang = 0;
    if (!bb.width) return;
    // deslizador: 0 = o mínimo de margem (no celular o texto vai até perto da borda da tela); no PC cada passo vale mais,
    // porque a caixa é larga (no máximo, as linhas ficam com a largura de leitura de antes)
    r.style.setProperty('--tx-pad', (bb.width >= 700 ? mp * 5 : mp) + 'rem');
    if (mp === 0 && bb.width < 700) {
      var livre = Math.min(bb.left, (document.documentElement.clientWidth || innerWidth) - bb.right) - 4;
      sang = Math.max(0, Math.min(40, livre));
    }
    r.style.setProperty('--tx-sang', -sang + 'px');
    r.classList.toggle('lp-sangra', sang > 0);
  };
  Leitor.prototype.ajustesTexto = function () {
    var self = this, aj = this.raiz.querySelector('.lp-menu-aj');
    function grupo(nome, k, ops) { return '<div class="lp-aj"><span>' + nome + '</span><div class="lp-seg">' + ops.map(function (o) { return '<button type="button" data-tx="' + k + ':' + o[0] + '"' + (o[2] ? ' aria-label="' + o[2] + '"' : '') + '>' + o[1] + '</button>'; }).join('') + '</div></div>'; }
    aj.innerHTML =
      '<div class="lp-aj"><span>Letra</span><div class="lp-seg"><button type="button" data-tx-t="-" aria-label="Letra menor">A−</button><button type="button" data-tx-t="+" aria-label="Letra maior">A+</button></div></div>' +
      grupo('Linhas', 'l', [[0, '<i class="lp-ic l0"></i>', 'Linhas juntas'], [1, '<i class="lp-ic l1"></i>', 'Linhas normais'], [2, '<i class="lp-ic l2"></i>', 'Linhas soltas']]) +
      '<div class="lp-aj"><span>Margem</span><input class="lp-rg" type="range" min="0" max="3" step="0.25" data-tx-m aria-label="Margem dos lados"></div>' +
      grupo('Fundo', 'f', [['papel', '<i class="lp-bola papel"></i>', 'Papel'], ['noite', '<i class="lp-bola noite"></i>', 'Noite']]) +
      grupo('Fonte', 's', [['serif', '<span class="lp-fs">Serifa</span>'], ['sans', '<span class="lp-fn">Sem serifa</span>']]);
    // margem livre: o deslizador muda na hora, em todos os leitores abertos
    aj.addEventListener('input', function (e) {
      if (!e.target.matches('[data-tx-m]')) return;
      var v = lerTx(); v.mp = +e.target.value;
      try { localStorage.setItem(K_TX, JSON.stringify(v)); } catch (er) {}
      VIEWERS.forEach(function (x) { if (x.raiz.isConnected) x.aplicarTx(); });
    });
    aj.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tx], [data-tx-t]'); if (!b) return;
      var v = lerTx();
      if (b.dataset.txT) v.t = Math.max(0, Math.min(TX_TAM.length - 1, v.t + (b.dataset.txT === '+' ? 1 : -1)));
      else { var p = b.dataset.tx.split(':'); v[p[0]] = isNaN(+p[1]) ? p[1] : +p[1]; }
      try { localStorage.setItem(K_TX, JSON.stringify(v)); } catch (er) {}
      VIEWERS.forEach(function (x) { if (x.raiz.isConnected) x.aplicarTx(); });
    });
    this.aplicarTx();
  };
  // margem branca dos lados (pelo texto das primeiras páginas): cortada para a página ganhar largura
  Leitor.prototype.medirMargem = function () {
    var self = this, doc = this.doc, ns = [];
    this.corte = 0;
    for (var i = this.de; i <= Math.min(this.ate, this.de + 2); i++) ns.push(i);
    return Promise.all(ns.map(function (n) {
      return doc.getPage(n).then(function (pg) {
        if (pg.rotate % 180) return null;
        var vb = pg.view, w = vb[2] - vb[0];
        return pg.getTextContent().then(function (tc) {
          var esq = w, dir = w;
          tc.items.forEach(function (it) {
            if (!it.str || !it.str.trim() || it.transform[1] || it.transform[2]) return;
            var x = it.transform[4] - vb[0];
            esq = Math.min(esq, x); dir = Math.min(dir, w - x - it.width);
          });
          return esq < w ? Math.max(0, Math.min(esq, dir) - 14) / w : null;
        });
      });
    })).then(function (rs) {
      rs = rs.filter(function (r) { return r !== null; });
      if (rs.length) self.corte = Math.min(0.12, Math.min.apply(null, rs));
    }).catch(function () { self.corte = 0; });
  };
  Leitor.prototype.paginaAtual = function () {
    var topo = this.opts.rolagem ? this.opts.rolagem.getBoundingClientRect().top : 0, atual = this.de || 1;
    // leitor escondido (outra aba aberta): tudo mede 0 e pareceria a última página
    if (!this.raiz.offsetParent && !this.raiz.classList.contains('lp-cheia')) return null;
    this.paginas.forEach(function (info, n) { if (info && info.el.getBoundingClientRect().top <= topo + 80) atual = n; });
    return atual;
  };
  Leitor.prototype.telaCheia = function (on) {
    var self = this, raiz = this.raiz, corpo = raiz.querySelector('.lp-corpo'), n = this.paginaAtual();
    if (on) { this._rolagemAntes = this.opts.rolagem; this.opts.rolagem = corpo; } else this.opts.rolagem = this._rolagemAntes;
    raiz.classList.toggle('lp-cheia', on);
    document.documentElement.classList.toggle('lp-travada', on);
    var bc = raiz.querySelector('[data-a="cheia"]'); bc.textContent = on ? '✕' : '⛶'; bc.setAttribute('aria-label', on ? 'Fechar tela cheia' : 'Tela cheia');
    if (on && !this._esc) {
      this._esc = function (e) { if (e.key === 'Escape' && raiz.classList.contains('lp-cheia')) self.telaCheia(false); };
      document.addEventListener('keydown', this._esc);
    }
    var r = this.renderizar();
    if (r) r.then(function () {
      var info = self.paginas[n]; if (!info) return;
      if (self.opts.rolagem) self.opts.rolagem.scrollTop += info.el.getBoundingClientRect().top - self.opts.rolagem.getBoundingClientRect().top - 8;
      else if (!on) window.scrollTo(0, info.el.getBoundingClientRect().top + window.scrollY - 90);
    });
  };
  // Página em que o PDF estava (por arquivo e trecho, só neste aparelho): ao trocar de aba no Hoje o leitor é montado
  // de novo e voltava para a primeira página.
  var K_POS = 'oab_lp_pos2';
  Leitor.prototype.chavePos = function () { return this.arq + ':' + (this.opts.de || 1); };
  Leitor.prototype.voltarPosicao = function () {
    var self = this, rol = this.opts.rolagem, pos = {};
    try { pos = JSON.parse(localStorage.getItem(K_POS)) || {}; } catch (e) {}
    var info = this.paginas[pos[this.chavePos()]];
    if (info && pos[this.chavePos()] > this.de) {
      if (rol) rol.scrollTop += info.el.getBoundingClientRect().top - rol.getBoundingClientRect().top - 8;
      else window.scrollTo(0, info.el.getBoundingClientRect().top + window.scrollY - 90);
    }
    var t;
    function guardar() {
      clearTimeout(t);
      t = setTimeout(function () {
        if (!self.raiz.isConnected || self.texto) return;
        try { pos = JSON.parse(localStorage.getItem(K_POS)) || {}; } catch (e) { pos = {}; }
        var n = self.paginaAtual(); if (n == null) return;
        pos[self.chavePos()] = n;
        try { localStorage.setItem(K_POS, JSON.stringify(pos)); } catch (e) {}
      }, 400);
    }
    this.raiz.querySelector('.lp-corpo').addEventListener('scroll', guardar, { passive: true });
    window.addEventListener('scroll', guardar, { passive: true });
  };
  Leitor.prototype.largura = function () { return this.raiz.querySelector('.lp-paginas').clientWidth - 2; };
  Leitor.prototype.renderizar = function () {
    var self = this, doc = this.doc, alvo = this.raiz.querySelector('.lp-paginas');
    if (!doc) return;
    this._largura = this.largura();
    alvo.innerHTML = '';
    this.paginas = [];
    if (this.texto) return this.renderTexto(alvo);
    // vários cliques seguidos no zoom: só a última renderização vale
    var vez = this._vez = (this._vez || 0) + 1;
    if (this._obs) this._obs.disconnect();
    var obs = this._obs = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { obs.unobserve(e.target); self.desenharPagina(+e.target.dataset.p); } });
    }, { root: this.opts.rolagem || null, rootMargin: '600px 0px' });
    var feitas = [], de = this.de || 1, ate = this.ate || doc.numPages;
    for (var i = de; i <= ate; i++) feitas.push(doc.getPage(i));
    return Promise.all(feitas).then(function (pgs) {
      return Promise.all(pgs.map(function (pg, j) { return self.colunas ? self.divisao(pg, j + de) : null; })).then(function (divs) { return [pgs, divs]; });
    }).then(function (r) {
      if (vez !== self._vez) return;
      var pgs = r[0], divs = r[1];
      pgs.forEach(function (pg, j) {
        var i = j + de - 1;
        var base = pg.getViewport({ scale: 1 });
        var corte = self.corte || 0, s = divs[j];
        // página em duas colunas: cada coluna vira um quadro com a largura da tela (a esquerda inteira, depois a direita)
        var partes = s ? [[corte, s], [s, 1 - corte]] : [[corte, 1 - corte]];
        var maior = Math.max.apply(null, partes.map(function (p) { return p[1] - p[0]; }));
        // zoom 100% = página na largura da caixa (a caixa tem altura limitada e rola por dentro)
        var escala = (self.opts.caixa || self.raiz.classList.contains('lp-cheia') ? self._largura : Math.min(self._largura, 1000)) / (base.width * maior) * self.zoom;
        var vp = pg.getViewport({ scale: escala }), els = [];
        partes.forEach(function (p, k) {
          var mold = document.createElement('div');
          mold.className = 'lp-moldura';
          mold.style.width = Math.floor(vp.width * (p[1] - p[0])) + 'px';
          var d = document.createElement('div');
          d.className = 'lp-pag'; d.dataset.p = i + 1; d.dataset.x0 = p[0]; d.dataset.x1 = p[1];
          d.style.width = Math.floor(vp.width) + 'px'; d.style.height = Math.floor(vp.height) + 'px';
          d.style.marginLeft = -Math.floor(vp.width * p[0]) + 'px';
          d.style.setProperty('--scale-factor', escala);
          d.innerHTML = '<canvas></canvas><div class="lp-grifos"></div><div class="textLayer"></div>';
          mold.innerHTML = '<span class="lp-num">' + (i + 1) + (partes.length > 1 ? ' · ' + (k ? 'coluna 2' : 'coluna 1') : '') + '</span>';
          mold.insertBefore(d, mold.firstChild);
          alvo.appendChild(mold);
          self.ligarArea(d);
          obs.observe(d);
          els.push(d);
        });
        self.paginas[i + 1] = { pg: pg, vp: vp, el: els[0], els: els };
      });
      self.redesenhar();
    });
  };
  // Onde fica o vão entre as duas colunas (fração da largura), pelo texto da página; null = página de uma coluna só.
  Leitor.prototype.divisao = function (pg, n) {
    var cache = this._div || (this._div = {});
    if (n in cache) return Promise.resolve(cache[n]);
    return pg.getTextContent().then(function (tc) {
      var vb = pg.view, w = vb[2] - vb[0], B = 100, cob = new Array(B).fill(0), itens = [];
      tc.items.forEach(function (it) {
        if (!it.str || !it.str.trim() || it.transform[1] || it.transform[2]) return;
        var a = (it.transform[4] - vb[0]) / w, b = a + it.width / w;
        itens.push([a, b, Math.round(it.transform[5])]);
        for (var k = Math.max(0, Math.floor(a * B)); k < Math.min(B, Math.ceil(b * B)); k++) cob[k]++;
      });
      if (itens.length < 12) return (cache[n] = null);
      var melhor = -1;
      for (var k = 35; k <= 65; k++) if (melhor < 0 || cob[k] < cob[melhor]) melhor = k;
      var s = (melhor + .5) / B;
      var esq = itens.filter(function (q) { return q[1] <= s; }).length, dir = itens.filter(function (q) { return q[0] >= s; }).length;
      var ok = cob[melhor] <= Math.max(2, itens.length * 0.04) && esq >= itens.length * 0.2 && dir >= itens.length * 0.2;
      // linha que atravessa o vão com só um espaço entre os pedaços não é de duas colunas: página com pouco texto e esquemas
      // em imagem (ex.: 8. Dos Direitos dos Advogados, p. 8) parecia ter duas colunas, e o esquema e a frase saíam fatiados
      if (ok) {
        var linhas = {}, cruza = 0, nl = 0;
        itens.forEach(function (q) { (linhas[q[2]] = linhas[q[2]] || []).push(q); });
        Object.keys(linhas).forEach(function (y) {
          var ps = linhas[y].sort(function (p, q) { return p[0] - q[0]; }); nl++;
          if (ps.some(function (q) { return q[0] < s - 0.01 && q[1] > s + 0.01; })) { cruza++; return; }
          for (var i = 1; i < ps.length; i++) if (ps[i - 1][1] <= s + 0.005 && ps[i][0] >= s - 0.005 && ps[i][0] - ps[i - 1][1] < 0.02) { cruza++; break; }
        });
        if (cruza >= Math.max(1, nl * 0.1)) ok = false;
      }
      return (cache[n] = ok ? s : null);
    }).catch(function () { return (cache[n] = null); });
  };
  // Modo texto (híbrido): o texto do PDF reacomodado como página normal, com as cores e as caixas coloridas do PDF
  // (lidas da própria página desenhada); tabelas e imagens entram como recorte da página. Cabeçalho/rodapé que se
  // repetem em quase todas as páginas e números de página saem.
  // Texto já montado fica guardado no aparelho (IndexedDB): abrir de novo é instantâneo. TXV muda quando a montagem muda.
  var TXV = 'tx5', TX_MAX = 60, _txDb = null;
  function txDb() {
    if (_txDb) return _txDb;
    _txDb = new Promise(function (ok, erro) {
      if (!window.indexedDB) return erro();
      var rq = indexedDB.open('oab-texto', 1);
      rq.onupgradeneeded = function () { rq.result.createObjectStore('tx'); };
      rq.onsuccess = function () { ok(rq.result); }; rq.onerror = function () { erro(rq.error); };
    }).catch(function () { return null; });
    return _txDb;
  }
  function txLer(k) {
    return txDb().then(function (db) {
      if (!db) return null;
      return new Promise(function (ok) { try { var rq = db.transaction('tx').objectStore('tx').get(k); rq.onsuccess = function () { ok(rq.result || null); }; rq.onerror = function () { ok(null); }; } catch (e) { ok(null); } });
    });
  }
  function txGravar(k, html) {
    return txDb().then(function (db) {
      if (!db) return;
      try {
        var st = db.transaction('tx', 'readwrite').objectStore('tx'); st.put({ h: html, u: Date.now(), c: corAtual() }, k);
        var todos = [], cur = st.openCursor();
        cur.onsuccess = function () { var c = cur.result; if (c) { todos.push([c.key, c.value.u || 0]); c.continue(); } else if (todos.length > TX_MAX) { todos.sort(function (a, b) { return a[1] - b[1]; }).slice(0, todos.length - TX_MAX).forEach(function (t) { st.delete(t[0]); }); } };
      } catch (e) {}
    });
  }
  // a cor do Perfil não entra na chave: ela chega depois do login/sincronização e a chave nunca batia.
  // Texto guardado com outra cor aparece assim mesmo e é refeito em segundo plano.
  function corAtual() { return (getComputedStyle(document.documentElement).getPropertyValue('--rose-600') || '').trim().toLowerCase(); }
  Leitor.prototype.chaveTexto = function () { return [TXV, this.arq, this.opts.de || 1, this.opts.ate || 0].join('|'); };
  Leitor.prototype.porTexto = function (alvo, html) {
    alvo.innerHTML = html;
    alvo.querySelectorAll('.lp-tx-fig').forEach(function (f) { f.addEventListener('click', function () { f.classList.toggle('grande'); }); });
    this.sumario();
    this.voltarTexto();
  };
  Leitor.prototype.rolarAte = function (el, folga) {
    var rol = this.opts.rolagem;
    if (rol) rol.scrollTop += el.getBoundingClientRect().top - rol.getBoundingClientRect().top - folga;
    else window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 90 - folga);
  };
  // Sumário do modo texto: os títulos do capítulo (h3 e h4) num menu ☰ da barra, com a seção em que se está marcada
  Leitor.prototype.sumario = function () {
    var r = this.raiz, m = r.querySelector('.lp-menu-sum'), b = r.querySelector('.lp-b-sum');
    var hs = r.querySelectorAll('.lp-texto h3, .lp-texto h4');
    b.hidden = hs.length < 2;
    var itens = Array.prototype.map.call(hs, function (h, i) {
      return '<button type="button" class="lp-sum-' + h.tagName.toLowerCase() + '" data-sum="' + i + '">' + esc(h.textContent.replace(/\s+/g, ' ').trim()) + '</button>';
    }).join('');
    m.innerHTML = '<div class="lp-sum-tit">Sumário</div>' + itens;
    // o mesmo sumário, visível no começo do texto (fora de .lp-texto: a posição salva conta os blocos do texto)
    var tx = r.querySelector('.lp-texto'), velho = r.querySelector('.lp-tx-sumario');
    if (velho) velho.remove();
    if (!tx || hs.length < 2) return;
    var d = document.createElement('details'); d.className = 'lp-tx-sumario';
    d.innerHTML = '<summary>☰ Sumário do capítulo <small>' + hs.length + ' tópicos</small></summary><div class="lp-tx-sum-lista">' + itens + '</div>';
    tx.parentNode.insertBefore(d, tx);
    var self = this;
    d.addEventListener('click', function (e) {
      var a2 = e.target.closest('[data-sum]'); if (!a2) return;
      var h = r.querySelectorAll('.lp-texto h3, .lp-texto h4')[+a2.dataset.sum];
      d.open = false; if (h) self.rolarAte(h, 4);
    });
  };
  // Onde o modo texto estava (bloco do topo da tela, por arquivo e trecho, só neste aparelho): volta nele ao reabrir o site
  var K_TXPOS = 'oab_lp_txpos';
  Leitor.prototype.chaveTxPos = function () { return this.arq + '|' + (this.opts.de || 1) + '|' + (this.opts.ate || 0); };
  Leitor.prototype.refTopo = function () {
    var rol = this.opts.rolagem;
    if (rol) return rol.getBoundingClientRect().top;
    var tn = document.querySelector('.tn'); return tn ? Math.max(0, tn.getBoundingClientRect().bottom) : 0;
  };
  Leitor.prototype.blocoAtual = function () {
    var tx = this.raiz.querySelector('.lp-texto'); if (!tx || !tx.offsetParent) return -1;
    var topo = this.refTopo() + 10, fs = tx.children;
    for (var i = 0; i < fs.length; i++) if (fs[i].getBoundingClientRect().bottom > topo) return i;
    return fs.length - 1;
  };
  Leitor.prototype.marcarSecao = function (i) {
    var tx = this.raiz.querySelector('.lp-texto'), m = this.raiz.querySelector('.lp-menu-sum'); if (!tx || !m) return;
    var hs = tx.querySelectorAll('h3, h4'), at = -1, topo = this.refTopo() + 40;
    for (var j = 0; j < hs.length; j++) { if (hs[j].getBoundingClientRect().top <= topo) at = j; else break; }
    m.querySelectorAll('[data-sum]').forEach(function (x) { x.classList.toggle('atual', +x.dataset.sum === Math.max(0, at)); });
  };
  Leitor.prototype.voltarTexto = function () {
    var self = this, pos = {}, k = this.chaveTxPos(), mexeu = false;
    try { pos = JSON.parse(localStorage.getItem(K_TXPOS)) || {}; } catch (e) {}
    var alvo = pos[k] && pos[k].i;
    function ir() {
      if (mexeu || !alvo) return;
      var tx = self.raiz.querySelector('.lp-texto'), el = tx && tx.children[alvo];
      if (el && tx.offsetParent) self.rolarAte(el, 8);
    }
    requestAnimationFrame(ir); setTimeout(ir, 450);
    if (this._txOuv) return;
    this._txOuv = true;
    ['wheel', 'touchstart', 'keydown'].forEach(function (ev) { self.raiz.addEventListener(ev, function () { mexeu = true; }, { passive: true }); });
    var t;
    function guardar() {
      if (!self.texto || !self.raiz.isConnected) return;
      self.marcarSecao();
      clearTimeout(t);
      t = setTimeout(function () {
        var i = self.blocoAtual(); if (i < 0) return;
        try { pos = JSON.parse(localStorage.getItem(K_TXPOS)) || {}; } catch (e) { pos = {}; }
        pos[k] = { i: i, u: Date.now() };
        var ks = Object.keys(pos).sort(function (a, b) { return (pos[b].u || 0) - (pos[a].u || 0); });
        ks.slice(40).forEach(function (x) { delete pos[x]; });
        try { localStorage.setItem(K_TXPOS, JSON.stringify(pos)); } catch (e) {}
      }, 400);
    }
    this.raiz.querySelector('.lp-corpo').addEventListener('scroll', guardar, { passive: true });
    window.addEventListener('scroll', guardar, { passive: true });
  };
  function txApagar(k) { return txDb().then(function (db) { if (db) try { db.transaction('tx', 'readwrite').objectStore('tx').delete(k); } catch (e) {} }); }
  function txParcial(k, v) { return txDb().then(function (db) { if (db) try { db.transaction('tx', 'readwrite').objectStore('tx').put(v, k); } catch (e) {} }); }
  // Uma montagem por capítulo, fora do leitor: trocar de aba (o leitor é remontado) não para nem recomeça o trabalho.
  // O progresso é salvo a cada 3 páginas ('p|' + chave): se a página recarregar (a sincronização recarrega quando
  // chega dado novo da nuvem), a montagem continua de onde parou.
  // Um capítulo por vez (dois em paralelo dividiam o processador e os dois demoravam o dobro); o que está na tela passa à frente.
  var TRAB = {}, FILA = [], rodando = false;
  function proximoDaFila() {
    if (rodando || !FILA.length) return;
    FILA.sort(function (a, b) { return (b.fg ? 1 : 0) - (a.fg ? 1 : 0); });
    var t = FILA.shift(); rodando = true;
    t.rodar().then(function () { rodando = false; proximoDaFila(); });
  }
  function trabalho(lt, fg) {
    var k = lt.chaveTexto(), kp = 'p|' + k;
    if (TRAB[k]) { if (fg) TRAB[k].fg = true; proximoDaFila(); return TRAB[k]; }
    var t = TRAB[k] = { ouv: [], i: 0, tot: (lt.ate || 1) - (lt.de || 1) + 1, fg: !!fg };
    var de = lt.de || 1, pronto;
    t.p = new Promise(function (ok) { pronto = ok; });
    t.rodar = function () { var r = rodar(); r.then(pronto); return r.then(function () {}, function () {}); };
    FILA.push(t); proximoDaFila();
    return t;
    function rodar() { return txLer(kp).then(function (par) {
      var tmp = document.createElement('div'), vivo = function () { return true; };
      vivo.aviso = function (i, tot) { t.i = i; t.tot = tot; t.ouv.forEach(function (f) { try { f(i, tot); } catch (e) {} }); };
      vivo.pagina = function (pags, FS, n) { if ((n - de) % 3 === 0) txParcial(kp, { pags: pags, FS: FS, n: n, u: Date.now() }); };
      return lt.montarTexto(tmp, vivo, par && par.pags ? par : null).then(function (ok) {
        if (!ok) return null;
        var h = tmp.innerHTML;
        if (tmp.querySelector('.lp-texto')) txGravar(k, h).then(function () { txApagar(kp); });
        return h;
      });
    }).then(function (h) { delete TRAB[k]; return h; }, function () { delete TRAB[k]; return null; }); }
  }
  Leitor.prototype.renderTexto = function (alvo) {
    var self = this, k = this.chaveTexto(), vez = this._vez = (this._vez || 0) + 1;
    alvo.innerHTML = '<p class="lp-vazio">Montando o texto…</p>';
    return txLer(k).then(function (c) {
      if (vez !== self._vez) return;
      if (c && c.h) { self.porTexto(alvo, c.h); if (c.c !== corAtual()) self.prepararTexto(true); return; }
      var t = trabalho(self, true), av = alvo.querySelector('.lp-vazio');
      function aviso(i, tot) { if (av && vez === self._vez) av.textContent = 'Montando o texto… página ' + i + ' de ' + tot + ' (só na primeira vez)'; }
      if (t.i) aviso(t.i, t.tot);
      t.ouv.push(aviso);
      return t.p.then(function (h) { if (h && vez === self._vez && self.texto) self.porTexto(alvo, h); });
    });
  };
  // Lendo o PDF, o texto vai sendo montado em segundo plano: na hora de "Ler como texto" ele já está pronto
  Leitor.prototype.prepararTexto = function (refazer) {
    var self = this;
    if (this.opts.semTexto || this._fundoAtivo || !this.doc) return;
    var k = this.chaveTexto(); this._fundoAtivo = true;
    new Promise(function (ok) { setTimeout(ok, 4000); }).then(function () { return txLer(k); }).then(function (c) {
      if (c && (!refazer || c.c === corAtual())) return;
      if (!self.raiz.isConnected || TRAB[k]) return;
      return trabalho(self).p;
    }).catch(function () {}).then(function () { self._fundoAtivo = false; });
  };
  Leitor.prototype.montarTexto = function (alvo, vivo, ini) {
    var self = this, doc = this.doc, de = this.de || 1, ate = this.ate || doc.numPages;
    var FS = (ini && ini.FS) || {};
    var pags = (ini && ini.pags) || [], n = (ini && ini.n) || de;
    function proxima() {
      if (!vivo()) return null;
      if (n > ate) return Promise.resolve();
      var num = n++;
      if (vivo.aviso) vivo.aviso(num - de + 1, ate - de + 1);
      return doc.getPage(num).then(function (pg) {
        return Promise.all([pg.getTextContent(), pg.getOperatorList(), self.divisao(pg, num)]).then(function (r) {
          return self.blocosDaPagina(pg, r[0], r[2], FS);
        }).then(function (bl) { pags.push(bl); if (vivo.pagina) vivo.pagina(pags, FS, n); return proxima(); });
      });
    }
    return proxima().then(function () {
      if (!vivo()) return false;
      var conta = {}, chave = function (l) { return l.txt.replace(/\s*\d{1,3}\s*\/\s*\d{1,3}\s*$/, '').replace(/\d+/g, '#'); };
      pags.forEach(function (bl) { var v = {}; bl.forEach(function (l) { if (l.txt && !v[chave(l)]) { v[chave(l)] = 1; conta[chave(l)] = (conta[chave(l)] || 0) + 1; } }); });
      var rep = pags.length >= 3 ? Math.max(2, pags.length * 0.4) : 99;
      // corpo = o maior tamanho de letra que tem parcela relevante do texto (a moda enganava nos capítulos com muitas
      // questões comentadas em letra pequena: aí a letra normal parecia "grande" e virava título)
      var freq = {}, totalCh = 0;
      pags.forEach(function (bl) { bl.forEach(function (l) { if (l.txt) { var t = Math.round(l.tam * 2) / 2; freq[t] = (freq[t] || 0) + l.txt.length; totalCh += l.txt.length; } }); });
      var corpo = Object.keys(freq).map(Number).sort(function (a, b) { return b - a; }).filter(function (t) { return freq[t] >= totalCh * 0.15; })[0] || 10;
      // texto corrido: o parágrafo que termina sem pontuação no fim da página continua na seguinte
      if (de === 1 && pags[0] && pags[0].length <= 14 && pags[0].some(function (l) { return /^Documento última vez atualizado/i.test(l.txt || ''); })) pags[0] = [];
      // primeira palavra dos títulos grandes que se repetem ("Princípio da…", "Princípio do…"): uma linha em negrito que começa igual
      // é título do mesmo nível, mesmo que o PDF a tenha desenhado menor (aconteceu com "Princípio da Não Mercantilização")
      var inicio3 = {};
      pags.forEach(function (bl) { bl.forEach(function (l) {
        if (!l.txt || l.tam < corpo * 1.25 || l.txt.length > 75 || /[.,;]\s*$/.test(l.txt)) return;
        var w = l.txt.split(' ')[0]; if (w.length >= 5 && !/^\d/.test(w)) inicio3[w] = (inicio3[w] || 0) + 1;
      }); });
      // "Referências e links deste capítulo" (endereços de leis, no fim) não é conteúdo de estudo
      (function () {
        for (var jj = 0; jj < pags.length; jj++) {
          for (var ii = 0; ii < pags[jj].length; ii++) {
            if (pags[jj][ii].txt && /^Referências e links deste capítulo/i.test(pags[jj][ii].txt)) {
              pags[jj] = pags[jj].slice(0, ii); for (var kk = jj + 1; kk < pags.length; kk++) pags[kk] = [];
              return;
            }
          }
        }
      })();
      // página de índice (3 ou mais linhas com pontilhado até o número da página, ou que abre com o título "Índice"/"Sumário") não é conteúdo
      pags.forEach(function (bl, jj) {
        if (bl.filter(function (l) { return l.txt && /(?:\.\s?){6,}|…{3,}/.test(l.txt); }).length >= 3) pags[jj] = [];
        var t1 = bl.filter(function (l) { return l.txt && !l.rodape && !(conta[chave(l)] >= rep); })[0];
        if (jj <= 2 && t1 && /^(Índice|Sumário)$/i.test(t1.txt.trim())) pags[jj] = [];
      });
      // sequência de 3 a 8 linhas bem curtas e seguidas (rótulos de um quadro, ex.: lista de princípios) = lista, não vários títulos
      pags.forEach(function (bl) {
        var run = [];
        function fechaRun() { if (run.length >= 3 && run.length <= 8) run.forEach(function (x) { x.listaCurta = true; }); run = []; }
        bl.forEach(function (l) {
          var curtaL = !l.img && l.txt && l.txt.length <= 28 && l.txt.split(' ').length <= 4 && !/[.,;:]\s*$/.test(l.txt) && !/^\d+(\.\d+)*\s/.test(l.txt) && l.tam < corpo * 1.25 && !l.bg;
          var ult = run[run.length - 1];
          if (curtaL && (!ult || (ult.col === l.col && ult.y - l.y > 0 && ult.y - l.y <= ult.tam * 3.6))) run.push(l);
          else { fechaRun(); if (curtaL) run = [l]; }
        });
        fechaRun();
      });
      // Questões comentadas não entram no modo texto: o treino fica em "Questões do dia". Dois formatos do material:
      //   1) caixa "Questão … Solução … Comentário do professor" em letra 9pt (corpo em 12pt): vai da linha "Questão" até a primeira linha maior;
      //   2) caixa de moldura vermelha das revisões: "(XXXVII Exame da OAB) enunciado … COMENTÁRIOS … Gabarito: B" (vai até acabar a moldura).
      // Figura/tabela solta no meio da caixa sai junto; a que vem depois do fim fica.
      var tiroQ = 0;
      (function () {
        var seq = []; pags.forEach(function (bl) { bl.forEach(function (l) { seq.push(l); }); });
        var tx = []; seq.forEach(function (l, k) { if (l.txt && !l.rodape && !(conta[chave(l)] >= rep)) { l.k = k; tx.push(l); } });
        var ROT = /^(Solução|Comentário do professor):?$/i, INI2 = /^\((?:(?=[^)]*(?:Exame|INÉDITA))|[^)]*(?:OAB|CESPE|FGV)[^)]*[-/]\s*(?:19|20)\d{2}\s*\))/, FIM2 = /^Gabarito:?\s*[A-E]\b/;
        var blocos = [], dentro = null;
        tx.forEach(function (l, n) {
          var prox = tx[n + 1];
          if (dentro) {
            if (ROT.test(l.txt) || l.tam <= 9.6) { dentro.fim = l.k; dentro.rot = /^Coment/i.test(l.txt); return; }
            // o comentário do professor pode vir numa caixa que o leitor trata como tabela (sem linhas de texto): sai junto
            if (dentro.rot) dentro.fim = l.k - 1;
            blocos.push(dentro); dentro = null;
          }
          if (/^Questão(\s|$)/.test(l.txt) && l.tam >= 11 && prox && prox.tam <= 9.6 && !ROT.test(prox.txt)) { dentro = { ini: l.k, fim: l.k }; return; }
          if (INI2.test(l.txt) && l.tam >= 11) {
            if (l.rv) { var m = n + 1; while (tx[m] && tx[m].rv) m++; blocos.push({ ini: l.k, fim: tx[m - 1].k }); }
            else for (var m2 = n; m2 < Math.min(tx.length, n + 400); m2++) {
              // sem "Gabarito" antes da próxima questão: a caixa acaba na linha anterior a ela (não engole texto de estudo)
              // título de seção (letra bem maior que a do corpo) também encerra: nunca engole texto de estudo
              if (m2 > n && (tx[m2].tam >= 14.5 || (INI2.test(tx[m2].txt) && tx[m2].tam >= 11))) { blocos.push({ ini: l.k, fim: tx[m2 - 1].k }); break; }
              if (FIM2.test(tx[m2].txt)) { blocos.push({ ini: l.k, fim: tx[m2].k }); break; }
            }
          }
        });
        if (dentro) { if (dentro.rot) dentro.fim = seq.length - 1; blocos.push(dentro); }
        // bloco do formato 2 engole as linhas até o fim: pula as que já ficaram dentro dele
        blocos.sort(function (a, b) { return a.ini - b.ini; });
        var ate = -1;
        blocos.forEach(function (b) { if (b.ini <= ate) return; tiroQ++; for (var k = b.ini; k <= b.fim; k++) seq[k].questao = true; ate = b.fim; });
        pags.forEach(function (bl, jj) { pags[jj] = bl.filter(function (o) { return !o.questao; }); });
      })();
      var h = '', par = null, ant = null, caixa = null, marca = '', cabUlt = null;
      // chamadas para vídeo/áudio da plataforma ("Segue o vídeo:", "Vamos rever, em vídeo?", "acompanhe o áudio…"): o vídeo não vem no PDF, então não é conteúdo.
      // Só parágrafos curtos, para nunca apagar texto de estudo que apenas cita um vídeo ou áudio (prova, interceptação…)
      var CHAMADA = /(v[ií]deo\s+(?:abaixo|r[aá]pido)|\b(?:em|neste|no|ao|pelo)\s+v[ií]deo\b|segue o v[ií]deo|acompanhe[^.]{0,40}[aá]udio)/i;
      function fecha() { if (par && par.tag === 'p') { var tp = par.html.replace(/<[^>]+>/g, ''); if (tp.length <= 200 && CHAMADA.test(tp)) par = null; } if (par) { h += '<' + par.tag + (par.cls ? ' class="' + par.cls + '"' : '') + '>' + par.html + '</' + par.tag + '>'; par = null; } }
      function fechaCaixa() { fecha(); if (caixa) { h += '</div>'; caixa = null; } }
      pags.forEach(function (bl, j) {
        marca = '';
        var primeira = true;
        bl.forEach(function (l) {
          if (l.tabelaCorpo !== undefined) {
            // tabela que continua na página seguinte não repete o cabeçalho: herda o da anterior com o mesmo número de colunas
            fechaCaixa();
            var cabUsar = l.tabelaCab || (cabUlt && cabUlt.ncol === l.tabelaNcol ? cabUlt.html : '');
            if (l.tabelaCab) cabUlt = { ncol: l.tabelaNcol, html: l.tabelaCab };
            h += '<div class="lp-tx-tab"><table><tbody>' + cabUsar + l.tabelaCorpo + '</tbody></table></div>'; marca = ''; ant = null; primeira = false; return;
          }
          if (l.img) { fechaCaixa(); h += marca + '<figure class="lp-tx-fig"><img src="' + l.img + '" alt="' + (l.tabela ? 'Tabela' : 'Figura') + ' da página ' + (de + j) + '" loading="lazy"></figure>'; marca = ''; ant = null; primeira = false; return; }
          if (l.rodape || conta[chave(l)] >= rep || /^\d{1,3}(\s*\/\s*\d{1,3})?$/.test(l.txt) || /(?:\.\s?){6,}|…{3,}/.test(l.txt) || /^(Índice|Sumário)$/i.test(l.txt)) return;
          if ((l.bg || '') !== (caixa ? caixa.bg : '')) {
            fechaCaixa();
            if (l.bg) { caixa = { bg: l.bg }; h += '<div class="lp-tx-caixa' + (l.bgEscuro ? ' escura' : '') + '" style="--bx:' + l.bg + '">'; }
          }
          // título = linha curta, sem ponto final nem vírgula (frase terminada é parágrafo), que não começa em minúscula/travessão:
          //   h3 = letra maior que a do corpo; h4 = linha toda em negrito que começa um bloco (depois de frase terminada ou de espaço)
          var curta = l.txt.length <= 75, numerada = /^\d+(\.\d+)*\.?\s+\S/.test(l.txt);
          var fimDeFrase = /[.,;]\s*$/.test(l.txt) && !numerada;
          var comecoDeBloco = !ant || ant.cabecalho || /[.:;!?)”"]\s*$/.test(ant.txt) || (ant.y - l.y) > ant.tam * 1.9;
          var ehTitulo = curta && !fimDeFrase && !l.marca && !/;\s*(e|ou)\s*$/.test(l.txt) && !/^[a-zà-ú\-–•●▪]/.test(l.txt);
          var tag = !ehTitulo ? 'p' : l.tam >= corpo * 1.25 ? 'h3' : (l.neg >= 0.9 && l.txt.length <= 60 && comecoDeBloco) ? 'h4' : 'p';
          // título que termina em palavra solta ("…dos", "…no") continua na linha de baixo, seja qual for o estilo dela
          var continua = !primeira && par && par.tag !== 'p' && ant && (ant.y - l.y) <= ant.tam * 2.6 && !numerada && !l.marca && !/^[a-z]\)\s/.test(l.txt) &&
            par.html.replace(/<[^>]+>/g, '').length + l.txt.length <= 150 &&
            (/(^|\s)(d[aeo]s?|n[aeo]s?|e|ou|a|o|as|os|para|com|em|por|ao|aos|à|às|que|x)\s*$/i.test(ant.txt) || /^[a-zà-ú]/.test(l.txt));
          if (continua) tag = par.tag;
          if (tag === 'h4' && inicio3[l.txt.split(' ')[0]] >= 2) tag = 'h3';
          if (l.listaCurta) tag = 'p';
          l.cabecalho = tag !== 'p';
          var segue = primeira && par && par.tag === 'p' && tag === 'p' && !l.marca && !/[.:;!?)]\s*(<\/[a-z]+>)*$/.test(par.html);
          var perto = ant && (ant.y - l.y) <= ant.tam * (tag === 'p' ? 1.9 : 1.6) && (tag === 'p' || Math.abs(ant.tam - l.tam) < 1);
          var itemLista = l.marca || (l.bolinha && tag === 'p') || l.listaCurta;
          var novo = !continua && !segue && (!par || par.tag !== tag || primeira || itemLista || !perto || /^([-–•▪►✓→]|\d+[.)]\s|[a-z]\)\s)/.test(l.txt));
          if (novo) { fecha(); h += marca; marca = ''; par = { tag: tag, html: '', cls: itemLista ? 'lp-tx-item' : '' }; }
          else par.html += (/[A-Za-zÀ-ú]-(<\/[a-z]+>)*$/.test(par.html) && /^[a-zà-ú]/.test(l.txt) ? '' : ' ');
          par.html += l.html;
          ant = l; primeira = false;
        });
      });
      fechaCaixa();
      if (tiroQ && h) h += '<p class="lp-tx-nota">As questões comentadas deste capítulo ficam em “Questões do dia”.</p>';
      alvo.innerHTML = '<div class="lp-texto">' + (h || '<p class="lp-vazio">Este PDF não tem texto (é escaneado). Use o modo PDF.</p>') + '</div>';
      // acabamento de leitura: número do título em destaque; artigo de lei e aviso ganham o seu tipo de caixa
      alvo.querySelectorAll('.lp-texto h3').forEach(function (h) {
        var no = h.firstChild; if (!no || no.nodeType !== 3) return;
        var m = no.nodeValue.match(/^\s*(\d+(?:\.\d+)*)\.?\s+(\S[\s\S]*)$/); if (!m) return;
        var sp = document.createElement('span'); sp.className = 'lp-tx-num'; sp.textContent = m[1] + ' ';
        no.nodeValue = m[2]; h.insertBefore(sp, no); h.classList.add('com-num');
      });
      alvo.querySelectorAll('.lp-texto p:not(.lp-tx-nota)').forEach(function (pp) {
        if (pp.closest('.lp-tx-caixa')) return;
        var t = (pp.textContent || '').trim();
        if (t.length > 25 && /^[“"]?(Art\.|Arts\.|§|Parágrafo único|CLT\.|CPC\.|CF\/88\.|CC\.|CP\.|CPP\.|CTN\.|Lei n)/.test(t)) pp.classList.add('lp-tx-lei');
        else if (t.length > 20 && /^(Atenção|Dica para|Dica:|Importante|Lembre|Pegadinha|Cuidado|Observação|Obs\.?:)/i.test(t)) pp.classList.add('lp-tx-dica');
      });
      // artigo com parágrafos e incisos: inciso/alínea logo depois da lei entra na mesma caixa, e a sequência vira uma caixa só
      alvo.querySelectorAll('.lp-texto .lp-tx-lei').forEach(function (pp) {
        var n = pp.nextElementSibling;
        while (n && n.tagName === 'P' && !n.classList.contains('lp-tx-lei') && /^\s*([IVXL]+\s*[-–—.]|[a-z]\)\s)/.test(n.textContent || '')) { n.classList.add('lp-tx-lei'); n = n.nextElementSibling; }
      });
      alvo.querySelectorAll('.lp-texto .lp-tx-lei').forEach(function (pp) {
        var a = pp.previousElementSibling, d = pp.nextElementSibling;
        if (a && a.classList.contains('lp-tx-lei')) pp.classList.add('lei-cont');
        if (d && d.classList.contains('lp-tx-lei')) pp.classList.add('lei-segue');
      });
      return true;
    });
  };
  // Desenha a página num canvas fora da tela e devolve os blocos na ordem de leitura: linhas de texto (com cor e
  // fundo medidos nos pixels) e recortes de tabela/imagem.
  // chamadas da plataforma do curso (vídeo/PDF "pelo APP", QR code e link) não fazem sentido fora dela
  var LIXO = /^(Assista (o|ao) vídeo pelo APP|Acesse o PDF pelo APP|Escute o Cast pelo APP|Acesse a plataforma pelo QR code|Ou acesse pelo link|\d{0,2}\s*https?:\/\/|topic=[\d.]+$)|\?topic=[\d.]+$|\bpelo APP!?$|^Prof\.? Estratégia Materiais$|\bHora de responder quest\S{0,3}es\s*!?$|^vocês sobre o tema|áudio exclusivo que preparamos|para a 1ª Fase do Exame de Ordem \(OAB\)$/i;
  // retângulos (em pixels da página desenhada) das imagens pintadas na página, pela lista de operações do PDF.js
  function imagensDaPagina(opl, vp) {
    var O = window.pdfjsLib && window.pdfjsLib.OPS; if (!opl || !O) return [];
    var m = [1, 0, 0, 1, 0, 0], pilha = [], res = [];
    function mul(a, b) { return [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]]; }
    var IMG = {}; ['paintImageXObject', 'paintInlineImageXObject', 'paintImageMaskXObject', 'paintJpegXObject'].forEach(function (n) { if (O[n] != null) IMG[O[n]] = 1; });
    for (var i = 0; i < opl.fnArray.length; i++) {
      var f = opl.fnArray[i], a = opl.argsArray[i];
      if (f === O.save) pilha.push(m);
      else if (f === O.restore) m = pilha.length ? pilha.pop() : m;
      else if (f === O.transform) m = mul(m, a);
      else if (f === O.paintFormXObjectBegin) { pilha.push(m); if (a && a[0]) m = mul(m, a[0]); }
      else if (f === O.paintFormXObjectEnd) m = pilha.length ? pilha.pop() : m;
      else if (IMG[f]) {
        var xs = [], ys = [];
        [[0, 0], [1, 0], [0, 1], [1, 1]].forEach(function (q) {
          var p = vp.convertToViewportPoint(m[0] * q[0] + m[2] * q[1] + m[4], m[1] * q[0] + m[3] * q[1] + m[5]);
          xs.push(p[0]); ys.push(p[1]);
        });
        res.push([Math.min.apply(null, xs), Math.min.apply(null, ys), Math.max.apply(null, xs), Math.max.apply(null, ys)]);
      }
    }
    return res;
  }
  Leitor.prototype.blocosDaPagina = function (pg, tc, s, FS) {
    var base = pg.getViewport({ scale: 1 }), escala = 1400 / base.width, vp = pg.getViewport({ scale: escala });
    var cv = document.createElement('canvas'); cv.width = Math.floor(vp.width); cv.height = Math.floor(vp.height);
    var cx = cv.getContext('2d', { willReadFrequently: true });
    cx.fillStyle = '#fff'; cx.fillRect(0, 0, cv.width, cv.height);
    // intent 'print': o desenho segue mesmo com a aba do navegador em segundo plano (o modo de tela espera requestAnimationFrame, que para)
    return Promise.all([pg.render({ canvasContext: cx, viewport: vp, intent: 'print' }).promise, pg.getOperatorList().catch(function () { return null; })]).then(function (rr) {
      var opl = rr[1];
      var W = cv.width, H = cv.height, px = cx.getImageData(0, 0, W, H).data, nitidas = [];
      function rgb(c) { return 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')'; }
      function dist(a, b) { return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]); }
      // cor de fundo (a mais comum) e cor do texto (média dos pixels bem diferentes do fundo) dentro de uma caixa
      function cores(x0, y0, x1, y1) {
        x0 = Math.max(0, Math.floor(x0)); y0 = Math.max(0, Math.floor(y0)); x1 = Math.min(W, Math.ceil(x1)); y1 = Math.min(H, Math.ceil(y1));
        var cont = {}, amostra = [];
        for (var y = y0; y < y1; y += 2) for (var x = x0; x < x1; x += 2) {
          var k = (y * W + x) * 4, c = [px[k], px[k + 1], px[k + 2]];
          amostra.push(c); var q = (c[0] >> 4) + ',' + (c[1] >> 4) + ',' + (c[2] >> 4); cont[q] = (cont[q] || 0) + 1;
        }
        if (!amostra.length) return null;
        var mq = null; Object.keys(cont).forEach(function (q) { if (!mq || cont[q] > cont[mq]) mq = q; });
        var bg = mq.split(',').map(function (v) { return (+v << 4) + 8; }), soma = [0, 0, 0], nt = 0;
        amostra.forEach(function (c) { if (dist(c, bg) > 120) { soma[0] += c[0]; soma[1] += c[1]; soma[2] += c[2]; nt++; } });
        return { bg: bg, fg: nt ? soma.map(function (v) { return Math.round(v / nt); }) : null, tinta: nt / amostra.length };
      }
      function claro(c) { return c[0] > 232 && c[1] > 232 && c[2] > 232; }
      // acento que alguns PDFs gravam como letra separada ("c¸ã", "a´") vira acento de verdade na letra anterior
      var ACENTO = /^[´`ˆ^˜~¨¸]$/, COMB = { '´': '\u0301', '`': '\u0300', 'ˆ': '\u0302', '^': '\u0302', '˜': '\u0303', '~': '\u0303', '¨': '\u0308', '¸': '\u0327' };
      function acentos(t) { return t.replace(/([A-Za-z])((?:<\/?[a-z][^>]*>)*)\s?([´`ˆ˜¨¸])/g, function (m, a, tags, c) { return (a + COMB[c]).normalize('NFC') + tags; }); }
      function lum(c) { return 0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2]; }
      function neutro(c) { return Math.max(c[0], c[1], c[2]) - Math.min(c[0], c[1], c[2]) < 40; }
      // Tabelas com borda e 2+ colunas: o texto de cada coluna NÃO pode ser lido em sequência (uma tabela "vedados | permitidos" que
      // continuava na página seguinte punha o item vedado depois do cabeçalho "permitidos"). Acha pelas linhas da borda (faixas
      // horizontais longas + 3 ou mais linhas verticais) e recorta a tabela inteira como imagem; a página volta a ser de 1 coluna.
      var tabelasB = [];
      (function () {
        var xa = Math.floor(W * 0.04), xb = Math.floor(W * 0.96), minRun = (xb - xa) * 0.55, segs = [], margemPg = 58 * escala;
        for (var y = 0; y < H; y++) {
          var run = 0, best = 0;
          for (var x = xa; x < xb; x++) { var k = (y * W + x) * 4; if (px[k] < 235 || px[k + 1] < 235 || px[k + 2] < 235) { run++; if (run > best) best = run; } else run = 0; }
          if (best >= minRun) { var u = segs[segs.length - 1]; if (u && y - u.b <= 3) u.b = y; else segs.push({ t: y, b: y }); }
        }
        // faixa colorida de cabeçalho com texto branco dentro vira várias faixas finas (o texto interrompe a linha): junta
        var junta = [];
        segs.forEach(function (g) { var u = junta[junta.length - 1]; if (u && u.b - u.t > 30 && g.t - u.b <= 40) u.b = g.b; else junta.push(g); });
        segs = junta.filter(function (g) { return g.t > margemPg && g.b < H - margemPg; });
        // duas faixas só fazem parte da mesma tabela se alguma linha vertical da borda atravessa o espaço entre elas
        // (senão, parágrafos entre duas tabelas empilhadas eram engolidos pela primeira e o texto saía embaralhado)
        function ligada(y0, y1) {
          if (y1 - y0 < 10) return true;
          for (var x = Math.floor(W * 0.02); x < Math.floor(W * 0.98); x++) {
            var ok = 0, tot = 0;
            for (var y = y0 + 3; y < y1 - 2; y += 2) { tot++; var k = (y * W + x) * 4; if (px[k] < 235 || px[k + 1] < 235 || px[k + 2] < 235) ok++; }
            if (tot && ok >= tot * 0.9) return true;
          }
          return false;
        }
        for (var i = 0; i < segs.length;) {
          var j = i; while (segs[j + 1] && segs[j + 1].t - segs[j].b <= 1500 && ligada(segs[j].b, segs[j + 1].t)) j++;
          if (j > i) {
            var yt = segs[i].t, yb = segs[j].b, vx = [], linhasV = [];
            // linhas verticais = colunas escuras em (quase) todas as linhas do recorte, sem contar as faixas coloridas de cabeçalho
            // (uma faixa grossa fazia toda coluna parecer uma "linha vertical")
            for (var yy0 = yt; yy0 <= yb; yy0 += 2) {
              var esc0 = 0, tot0 = 0;
              for (var xe = Math.floor(W * 0.1); xe < Math.floor(W * 0.9); xe += 6) { tot0++; var ke = (yy0 * W + xe) * 4; if (px[ke] < 235 || px[ke + 1] < 235 || px[ke + 2] < 235) esc0++; }
              if (esc0 < tot0 * 0.6) linhasV.push(yy0);
            }
            for (var xx = Math.floor(W * 0.02); xx < Math.floor(W * 0.98); xx++) {
              var c = 0; linhasV.forEach(function (yy) { var kk = (yy * W + xx) * 4; if (px[kk] < 235 || px[kk + 1] < 235 || px[kk + 2] < 235) c++; });
              if (linhasV.length && c >= linhasV.length * 0.8) { if (vx.length && xx - vx[vx.length - 1] <= 4) vx[vx.length - 1] = xx; else vx.push(xx); }
            }
            if (vx.length >= 3) {
              var linhasT = [];
              for (var kk2 = i; kk2 <= j; kk2++) {
                if (segs[kk2].b - segs[kk2].t > 12) linhasT.push({ t: segs[kk2].t, b: segs[kk2].b, th: true });
                if (kk2 < j) linhasT.push({ t: segs[kk2].b, b: segs[kk2 + 1].t, th: false });
              }
              tabelasB.push({ top: yt, bot: yb, x0: vx[0], x1: vx[vx.length - 1], vx: vx, linhas: linhasT });
            } else if (vx.length === 2) {
              // caixa com borda em que só um trecho tem colunas (ex.: "TRT | TST" no meio de um quadro de uma coluna): acha as faixas
              // entre linhas horizontais que têm divisória vertical própria e monta a tabela só com elas
              var faixas = [];
              for (var k3 = i; k3 < j; k3++) {
                var ft = segs[k3].b + 1, fb = segs[k3 + 1].t - 1, div = [];
                if (fb - ft < 18) continue;
                for (var xd = vx[0] + 10; xd < vx[1] - 10; xd++) {
                  var cd = 0, td = 0;
                  for (var yd = ft; yd <= fb; yd += 2) { td++; var kd = (yd * W + xd) * 4; if (px[kd] < 235 || px[kd + 1] < 235 || px[kd + 2] < 235) cd++; }
                  if (td && cd >= td * 0.92) { if (div.length && xd - div[div.length - 1] <= 4) div[div.length - 1] = xd; else div.push(xd); }
                }
                faixas.push({ t: ft, b: fb, div: div });
              }
              for (var f0 = 0; f0 < faixas.length;) {
                if (!faixas[f0].div.length) { f0++; continue; }
                var f1 = f0; while (faixas[f1 + 1] && faixas[f1 + 1].div.length === faixas[f0].div.length && Math.abs(faixas[f1 + 1].div[0] - faixas[f0].div[0]) <= 6) f1++;
                var vxs = [vx[0]].concat(faixas[f0].div, [vx[1]]), linS = [];
                for (var f2 = f0; f2 <= f1; f2++) linS.push({ t: faixas[f2].t, b: faixas[f2].b, th: false });
                tabelasB.push({ top: faixas[f0].t, bot: faixas[f1].b, x0: vxs[0], x1: vxs[vxs.length - 1], vx: vxs, linhas: linS });
                f0 = f1 + 1;
              }
            }
          }
          i = j + 1;
        }
      })();
      if (tabelasB.length) s = null;
      // texto: itens → linhas por coluna
      var vb = pg.view, w = vb[2] - vb[0], itens = [];
      tc.items.forEach(function (it) {
        if (!it.str || !it.str.trim() || it.transform[1] || it.transform[2]) return;
        var tam = Math.abs(it.transform[3]) || 10, x = (it.transform[4] - vb[0]) / w, nome = '';
        try { var f = pg.commonObjs.get(it.fontName); nome = (f && f.name) || ''; } catch (e) {}
        var a = vp.convertToViewportPoint(it.transform[4], it.transform[5] + tam * 0.85), b = vp.convertToViewportPoint(it.transform[4] + it.width, it.transform[5] - tam * 0.2);
        var c = cores(Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[0], b[0]), Math.max(a[1], b[1]));
        if (c && c.fg && claro(c.bg) && lum(c.fg) > 185) return;  // marca d'água clara sobre fundo branco
        itens.push({ x: x, x1: x + it.width / w, y: it.transform[5], tam: tam, str: it.str, fn: it.fontName, semNome: !/[A-Za-z]{3,}/.test(nome.replace(/^[A-Z]{6}\+/, '')), neg: /bold|black|heavy|semibold/i.test(nome), col: s && x >= s ? 1 : 0,
          top: Math.min(a[1], b[1]), bot: Math.max(a[1], b[1]), c: c });
      });
      // fontes sem nome (Type3, PDFs impressos do navegador): negrito = tinta bem maior que a da fonte mais comum DO MESMO
      // TAMANHO. A mesma fonte do PDF serve para o título grande e para o subtítulo em negrito do tamanho do texto, então a
      // estatística é por fonte + tamanho e acumulada desde a primeira página.
      {
        itens.forEach(function (it) { it.fk = it.fn + '|' + Math.round(it.tam); });
        itens.forEach(function (it) {
          var n = it.str.trim().length; if (!it.semNome || !it.c || n < 3) return;
          var f = FS[it.fk] || (FS[it.fk] = { t: 0, n: 0, tam: Math.round(it.tam) }); f.t += it.c.tinta * n; f.n += n;
        });
        var baseTam = {};
        Object.keys(FS).forEach(function (k) { var f = FS[k]; if (!baseTam[f.tam] || f.n > FS[baseTam[f.tam]].n) baseTam[f.tam] = k; });
        itens.forEach(function (it) {
          var f = FS[it.fk], b = f && baseTam[f.tam];
          if (!f || it.neg || !it.semNome || !b || b === it.fk || f.n < 6 || it.str.trim().length < 3) return;
          if (f.t / f.n > (FS[b].t / FS[b].n) * 1.25) it.neg = true;
        });
      }
      itens.sort(function (a, b) { return a.col - b.col || b.y - a.y || a.x - b.x; });
      var ls = [];
      itens.forEach(function (it) {
        var l = ls[ls.length - 1];
        if (l && l.col === it.col && Math.abs(l.y - it.y) < Math.max(l.tam, it.tam) * 0.5 && !(Math.max(l.tam, it.tam) >= Math.min(l.tam, it.tam) * 1.3 && Math.abs(l.y - it.y) > Math.min(l.tam, it.tam) * 0.4 && it.str.trim().length >= 3 && l.partes[0].str.trim().length >= 3)) { l.partes.push(it); l.tam = Math.max(l.tam, it.tam); l.top = Math.min(l.top, it.top); l.bot = Math.max(l.bot, it.bot); }
        else ls.push({ col: it.col, y: it.y, tam: it.tam, top: it.top, bot: it.bot, partes: [it] });
      });
      ls.forEach(function (l) {
        l.partes.sort(function (a, b) { return a.x - b.x; });
        // ligatura (fi, fl…) vem como item à parte, em outra fonte: herda negrito e cor da palavra a que pertence
        l.partes.forEach(function (q, kk) {
          if (!/^(f[fil]|ffi|ffl|[\uFB00-\uFB06])$/.test(q.str.trim())) return;
          var an = l.partes[kk - 1], pr = l.partes[kk + 1], tol = (l.tam * 0.3) / w;
          var viz = an && q.x - an.x1 < tol ? an : pr && pr.x - q.x1 < tol ? pr : null;
          if (viz) { q.neg = viz.neg; q.c = viz.c; }
        });
        var gaps = 0; for (var k = 1; k < l.partes.length; k++) if (l.partes[k].x - l.partes[k - 1].x1 > (l.tam * 3) / w) gaps++;
        l.tab = gaps >= 2 || (gaps >= 1 && l.partes.length >= 3);
        l.lixo = LIXO.test(l.partes.map(function (q) { return q.str; }).join(' ').replace(/[\uE000-\uF8FF]/g, '').trim());
        l.gaps = gaps; l.x0 = l.partes[0].x;
      });
      // linha com duas células colada em linhas de tabela é linha da mesma tabela (a de 2 colunas não passava no critério)
      var vizinha = function (a, b) { return a && b && a.col === b.col && Math.abs(a.y - b.y) <= Math.max(a.tam, b.tam) * 4; };
      for (var pass = 0; pass < 2; pass++) {
        ls.forEach(function (l, k) { if (!l.tab && l.gaps >= 1 && l.partes.length >= 2 && ((ls[k - 1] && ls[k - 1].tab && vizinha(ls[k - 1], l)) || (ls[k + 1] && ls[k + 1].tab && vizinha(ls[k + 1], l)))) l.tab = true; });
        for (var k2 = ls.length - 1; k2 >= 0; k2--) { var l2 = ls[k2]; if (!l2.tab && l2.gaps >= 1 && l2.partes.length >= 2 && ((ls[k2 - 1] && ls[k2 - 1].tab && vizinha(ls[k2 - 1], l2)) || (ls[k2 + 1] && ls[k2 + 1].tab && vizinha(ls[k2 + 1], l2)))) l2.tab = true; }
      }
      // 3 ou mais linhas seguidas, cada uma com um vão grande entre blocos de texto = tabela de poucas colunas
      for (var k3 = 0; k3 < ls.length;) {
        if (!ls[k3].tab && ls[k3].gaps >= 1 && ls[k3].partes.length >= 2) {
          var k4 = k3;
          while (ls[k4 + 1] && !ls[k4 + 1].tab && ls[k4 + 1].gaps >= 1 && ls[k4 + 1].partes.length >= 2 && vizinha(ls[k4], ls[k4 + 1])) k4++;
          if (k4 - k3 >= 2) for (var k5 = k3; k5 <= k4; k5++) ls[k5].tab = true;
          k3 = k4 + 1;
        } else k3++;
      }
      // o cabeçalho da caixa de questão ("Questão  ID  ano  exame  Primeira fase") tem vãos largos mas não é tabela: virava recorte de imagem
      ls.forEach(function (l) { if (l.tab && /^Questão$/.test(l.partes[0].str.trim()) && l.partes.some(function (q) { return /Exame|fase/i.test(q.str); })) l.tab = false; });
      // item de lista = linha com uma bolinha desenhada logo à esquerda (a indentação sozinha enganava: texto centralizado em
      // célula de tabela também fica "recuado")
      function temBolinha(l) {
        var em = l.tam * escala, xt = l.x0 * W;
        var xa = Math.max(0, Math.floor(xt - em * 1.7)), xb = Math.floor(xt - em * 0.2);
        var ya = Math.floor(l.top + (l.bot - l.top) * 0.2), yb = Math.ceil(l.bot - (l.bot - l.top) * 0.15);
        if (xb - xa < 3 || yb - ya < 3) return false;
        var bx0 = 1e9, bx1 = -1, by0 = 1e9, by1 = -1, n = 0;
        for (var y = ya; y < yb && y < H; y++) for (var x = xa; x < xb; x++) {
          var k = (y * W + x) * 4;
          if (px[k] < 200 || px[k + 1] < 200 || px[k + 2] < 200) { n++; if (x < bx0) bx0 = x; if (x > bx1) bx1 = x; if (y < by0) by0 = y; if (y > by1) by1 = y; }
        }
        var bw = bx1 - bx0 + 1, bh = by1 - by0 + 1;
        if (!(n >= em * em * 0.04 && bw >= em * 0.15 && bw <= em * 0.75 && bh >= em * 0.15 && bh <= em * 0.75)) return false;
        // a bolinha é um ponto isolado: sem tinta logo acima nem abaixo (ícone grande que atravessa duas linhas não conta)
        var folga = Math.max(3, Math.round(em * 0.3));
        function livre(ya2, yb2) {
          for (var y2 = Math.max(0, ya2); y2 < Math.min(H, yb2); y2++) for (var x2 = Math.max(0, bx0 - 2); x2 <= bx1 + 2; x2++) {
            var k2 = (y2 * W + x2) * 4; if (px[k2] < 200 || px[k2 + 1] < 200 || px[k2 + 2] < 200) return false;
          }
          return true;
        }
        return livre(by0 - folga, by0 - 1) && livre(by1 + 2, by1 + 2 + folga);
      }
      var colX = function (col) { return s ? (col ? [s, 1] : [0, s]) : [0, 1]; };
      // recorte justo: só a área com tinta dentro da faixa (sem margem branca nem pedaço de texto vizinho cortado)
      // figuras e tabelas recortadas do PDF: o vermelho do material vira a cor de destaque do Perfil (mesma claridade de cada tom)
      function recolorir(c) {
        var cor = (getComputedStyle(document.documentElement).getPropertyValue('--rose-600') || '').trim(), m = cor.match(/^#?([0-9a-f]{6})$/i);
        if (!m) return;
        var n = parseInt(m[1], 16), ar = (n >> 16) / 255, ag = (n >> 8 & 255) / 255, ab = (n & 255) / 255;
        var amx = Math.max(ar, ag, ab), amn = Math.min(ar, ag, ab), al = (amx + amn) / 2, ad = amx - amn, ah = 0;
        var as = ad ? ad / (1 - Math.abs(2 * al - 1)) : 0;
        if (ad) ah = amx === ar ? ((ag - ab) / ad) % 6 : amx === ag ? (ab - ar) / ad + 2 : (ar - ag) / ad + 4;
        ah = (ah * 60 + 360) % 360;
        if (ah >= 340 || ah <= 12) if (as > .5) return;
        var x = c.getContext('2d'), im = x.getImageData(0, 0, c.width, c.height), d = im.data;
        function hsl2rgb(h, s, l) {
          var q = (1 - Math.abs(2 * l - 1)) * s, hp = h / 60, xx = q * (1 - Math.abs(hp % 2 - 1)), r1 = 0, g1 = 0, b1 = 0;
          if (hp < 1) { r1 = q; g1 = xx; } else if (hp < 2) { r1 = xx; g1 = q; } else if (hp < 3) { g1 = q; b1 = xx; } else if (hp < 4) { g1 = xx; b1 = q; } else if (hp < 5) { r1 = xx; b1 = q; } else { r1 = q; b1 = xx; }
          var mm = l - q / 2; return [(r1 + mm) * 255, (g1 + mm) * 255, (b1 + mm) * 255];
        }
        for (var i = 0; i < d.length; i += 4) {
          var r = d[i] / 255, g = d[i + 1] / 255, b = d[i + 2] / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), dd = mx - mn;
          if (dd < .08 || mx !== r) continue;
          var h = ((g - b) / dd) % 6 * 60; h = (h + 360) % 360;
          if (!(h >= 335 || h <= 22)) continue;
          var l = (mx + mn) / 2, sa = dd / (1 - Math.abs(2 * l - 1));
          if (sa < .18) continue;
          var o = hsl2rgb(ah, Math.min(1, sa * (as || 0) / .85), l);
          d[i] = o[0]; d[i + 1] = o[1]; d[i + 2] = o[2];
        }
        x.putImageData(im, 0, 0);
      }
      function recorte(col, y0, y1, minAlt) {
        var xr = colX(col), x0 = Math.floor(xr[0] * W), x1 = Math.ceil(xr[1] * W);
        y0 = Math.max(0, Math.floor(y0)); y1 = Math.min(H, Math.ceil(y1));
        var bx0 = x1, bx1 = x0, by0 = y1, by1 = y0, soma = 0, n = 0;
        for (var y = y0; y < y1; y += 2) for (var x = x0; x < x1; x += 2) {
          var k = (y * W + x) * 4;
          if (px[k] < 235 || px[k + 1] < 235 || px[k + 2] < 235) { if (x < bx0) bx0 = x; if (x > bx1) bx1 = x; if (y < by0) by0 = y; if (y > by1) by1 = y; soma += px[k] + px[k + 1] + px[k + 2]; n++; }
        }
        if (bx1 <= bx0 || by1 - by0 < (minAlt || 12)) return null;
        // ilustração clarinha de capa/fundo (ex.: a coruja da capa) não é figura do conteúdo
        if (minAlt && n && soma / n / 3 > 200) return null;
        if (minAlt && n / (((bx1 - bx0) / 2) * ((by1 - by0) / 2) || 1) < 0.04) return null;
        // resto de borda do elemento vizinho (faixa de tinta fina separada da figura por espaço em branco) fica de fora
        if (minAlt) {
          var cnt = [], colsAm = Math.max(1, (bx1 - bx0) / 2);
          // moldura = poucas linhas inteiras (borda de cima/baixo) e, no resto, só os traços das laterais
          function moldura(rows) { var cheias = 0; return rows.every(function (c) { if (c > 0.5 * colsAm) { cheias++; return true; } return c <= 0.04 * colsAm + 6; }) && cheias <= 3; }
          for (var yy = by0; yy <= by1; yy += 2) { var c = 0; for (var xx = bx0; xx <= bx1; xx += 2) { var kk = (yy * W + xx) * 4; if (px[kk] < 235 || px[kk + 1] < 235 || px[kk + 2] < 235) c++; } cnt.push(c); }
          // faixa de borda: baixa e com pouquíssima tinta (só a moldura da caixa vizinha), separada do resto por espaço em branco
          var fimI = cnt.length - 1, run = 0, gap = 0, somaR = 0;
          while (fimI >= 0 && cnt[fimI] > 0) { somaR += cnt[fimI]; fimI--; run++; }
          while (fimI >= 0 && cnt[fimI] === 0) { fimI--; gap++; }
          if (fimI >= 0 && run * 2 < 90 && gap * 2 >= 8 && moldura(cnt.slice(cnt.length - run))) by1 = by0 + fimI * 2;
          var iniI = 0, run2 = 0, gap2 = 0, somaR2 = 0;
          while (iniI < cnt.length && cnt[iniI] > 0) { somaR2 += cnt[iniI]; iniI++; run2++; }
          while (iniI < cnt.length && cnt[iniI] === 0) { iniI++; gap2++; }
          if (iniI < cnt.length && run2 * 2 < 90 && gap2 * 2 >= 8 && moldura(cnt.slice(0, run2))) by0 = by0 + iniI * 2;
        }
        x0 = Math.max(0, bx0 - 10); x1 = Math.min(W, bx1 + 10); y0 = Math.max(0, by0 - 10); y1 = Math.min(H, by1 + 10);
        if (by1 - by0 < (minAlt || 12)) return null;
        var c2 = document.createElement('canvas'); c2.width = x1 - x0; c2.height = y1 - y0;
        c2.getContext('2d').drawImage(cv, x0, y0, x1 - x0, y1 - y0, 0, 0, x1 - x0, y1 - y0);
        recolorir(c2);
        var u = c2.toDataURL('image/jpeg', 0.82);
        nitidas.push({ u: u, b: [x0, y0, x1, y1] });
        return u;
      }
      // primeira linha de pixels toda branca a partir de y0, andando para baixo (dir 1) ou para cima (-1); a borda da tabela fica dentro
      function vazia(col, y0, lim, dir) {
        var xr = colX(col), x0 = Math.floor(xr[0] * W + 4), x1 = Math.floor(xr[1] * W - 4);
        for (var y = Math.round(y0); dir > 0 ? y < lim : y > lim; y += dir) {
          var cheia = false;
          for (var x = x0; x < x1; x += 3) { var k = (y * W + x) * 4; if (px[k] < 235 || px[k + 1] < 235 || px[k + 2] < 235) { cheia = true; break; } }
          if (!cheia) return y;
        }
        return lim;
      }
      function tinta(col, y0, y1) {
        var xr = colX(col), x0 = Math.floor(xr[0] * W + W * 0.04), x1 = Math.floor(xr[1] * W - W * 0.04), n = 0, t = 0;
        for (var y = Math.floor(y0); y < y1; y += 4) for (var x = x0; x < x1; x += 4) { var k = (y * W + x) * 4; t++; if (px[k] < 225 || px[k + 1] < 225 || px[k + 2] < 225) n++; }
        return t ? n / t : 0;
      }
      // caixa de questão das revisões = moldura vermelha (borda esquerda: faixa vertical de vermelho, longa e fina)
      var molduras = [];
      (function () {
        var xa = Math.floor(W * 0.02), xb = Math.floor(W * 0.2), minH = Math.floor(H * 0.04);
        for (var x = xa; x < xb; x++) {
          var run = 0, y0 = 0;
          for (var y = 0; y <= H; y++) {
            var k = (y * W + x) * 4, verm = y < H && px[k] > 150 && px[k + 1] < 90 && px[k + 2] < 90;
            if (verm) { if (!run) y0 = y; run++; }
            else { if (run >= minH && !molduras.some(function (m) { return Math.abs(m.x - x) <= 3 && m.t === y0; })) molduras.push({ x: x, t: y0, b: y - 1 }); run = 0; }
          }
        }
      })();
      function naMoldura(l) { var cy = (l.top + l.bot) / 2; return molduras.some(function (m) { return cy >= m.t - 4 && cy <= m.b + 4 && l.x0 * W > m.x; }); }
      var out = [], i = 0;
      var pendT = tabelasB.slice().sort(function (a, b) { return a.top - b.top; });
      // célula = itens de texto cujo centro cai entre duas linhas horizontais e duas verticais da borda
      function htmlTabela(tb) {
        var its = itens.filter(function (it) {
          var cy = (it.top + it.bot) / 2, cx = (it.x + it.x1) / 2 * W;
          return it.str.trim() && !/pelo APP|QR code|Ou acesse pelo link|^\s*https?:\/\/|topic=\d/i.test(it.str) && cy >= tb.top - 2 && cy <= tb.bot + 2 && cx >= tb.x0 - 4 && cx <= tb.x1 + 4;
        });
        if (!its.length || !tb.linhas.length) return '';
        var ncol = tb.vx.length - 1, grade = tb.linhas.map(function () { return []; }), cheias = 0;
        tb.linhas.forEach(function (r, ri) { for (var c = 0; c < ncol; c++) grade[ri].push([]); });
        its.forEach(function (it) {
          var cy = (it.top + it.bot) / 2, cx = (it.x + it.x1) / 2 * W, ri = -1, ci = -1;
          tb.linhas.forEach(function (r, k) { if (cy >= r.t && cy <= r.b) ri = k; });
          for (var c = 0; c < ncol; c++) if (cx >= tb.vx[c] && cx <= tb.vx[c + 1]) ci = c;
          if (ri >= 0 && ci >= 0) grade[ri][ci].push(it);
        });
        function htmlCelula(arr) {
          arr.sort(function (a, b) { return b.y - a.y || a.x - b.x; });
          var h2 = '', ultY = null, ultX1 = null, ultTam = 0;
          arr.forEach(function (it) {
            var t = esc(it.str), fg = it.c && it.c.fg, cor = fg && !neutro(fg);
            if (it.neg) t = '<b>' + t + '</b>'; if (cor) t = '<span class="lp-tx-cor">' + t + '</span>';
            if (ultY === null) h2 = t;
            else if (Math.abs(ultY - it.y) < Math.max(ultTam, it.tam) * 0.5) h2 += (it.x - ultX1 > (it.tam * 0.18) / w ? ' ' : '') + t;
            else h2 += (ultY - it.y > Math.max(ultTam, it.tam) * 1.8 ? '<br><br>' : ' ') + t;
            ultY = it.y; ultX1 = it.x1; ultTam = it.tam;
          });
          // alguns PDFs imprimem a bolinha como letra de fonte de símbolos: "l" (bolinha) e "Ä" (quadradinho) no começo do parágrafo
          h2 = h2.replace(/(^|<br><br>)((?:<[^>]+>)*)([lÄ])(?:\s|&nbsp;)+/g, function (m, ini, tags, g) { return ini + tags + (g === 'l' ? '• ' : '– '); });
          return acentos(h2.replace(/<\/b>(\s*)<b>/g, '$1'));
        }
        // caixa de destaque (todo o texto numa coluna só; as outras são só moldura/ícone): vira uma célula, e as linhas que
        // não terminam frase se juntam (a caixa quebrava a frase em linhas de tabela)
        var colsOcup = {}; grade.forEach(function (lin) { lin.forEach(function (cel, ci) { if (cel.length) colsOcup[ci] = 1; }); });
        if (ncol > 1 && Object.keys(colsOcup).length === 1) {
          var ci1 = +Object.keys(colsOcup)[0], pars = [];
          grade.forEach(function (lin) {
            var hc = htmlCelula(lin[ci1]); if (!hc) return;
            var ult = pars.length ? pars[pars.length - 1] : null;
            if (ult && !/[.:;!?)”"]\s*(<\/[a-z]+>)*$/.test(ult)) pars[pars.length - 1] = ult + ' ' + hc; else pars.push(hc);
          });
          if (pars.length && /Gabarito( Letra)?:?\s*[A-E]\.?\s*(<\/[a-z]+>)*$/i.test(pars[pars.length - 1])) return { drop: true };
          return pars.length ? { cab: '', corpo: '<tr><td>' + pars.join('<br><br>') + '</td></tr>', ncol: 1 } : null;
        }
        var corpoT = '', cabT = '';
        tb.linhas.forEach(function (r, ri) {
          var tds = '', alguma = false;
          var hcs = grade[ri].map(htmlCelula), ocup = hcs.filter(function (x) { return x; });
          // faixa de título com um texto só (centralizado sobre as colunas) ocupa a linha inteira
          if (r.th && ncol > 1 && ocup.length === 1) { alguma = true; cheias++; tds = '<th colspan="' + ncol + '">' + ocup[0] + '</th>'; }
          else hcs.forEach(function (hc) { if (hc) { alguma = true; cheias++; } tds += '<' + (r.th ? 'th' : 'td') + '>' + hc + '</' + (r.th ? 'th' : 'td') + '>'; });
          if (alguma) { if (r.th) cabT += '<tr>' + tds + '</tr>'; else corpoT += '<tr>' + tds + '</tr>'; }
        });
        return cheias >= 2 ? { cab: cabT, corpo: corpoT, ncol: ncol } : null;
      }
      function emiteTabelas(ate) {
        while (pendT.length && pendT[0].top <= ate) {
          var tb = pendT.shift(), ht = htmlTabela(tb);
          if (ht && ht.drop) continue;
          if (ht) out.push({ tabelaCorpo: ht.corpo, tabelaCab: ht.cab, tabelaNcol: ht.ncol, tabela: true, col: 0, top: tb.top, bot: tb.bot });
          else { var imT = recorte(0, tb.top - 2, tb.bot + 2); if (imT) out.push({ img: imT, tabela: true, col: 0, top: tb.top, bot: tb.bot }); }
        }
      }
      function dentroTabela(l) {
        var cy = (l.top + l.bot) / 2;
        return tabelasB.some(function (t) { return cy >= t.top - 2 && cy <= t.bot + 2 && l.x0 * W >= t.x0 - 8 && l.x0 * W <= t.x1; });
      }
      while (i < ls.length) {
        emiteTabelas(ls[i].top + 4);
        if (dentroTabela(ls[i])) { i++; continue; }
        var l = ls[i], prev = out.length ? out[out.length - 1] : null;
        // vão grande com desenho entre duas linhas da mesma coluna = imagem/esquema (a linha de baixo pode ser lixo, ex.: o quadro
        // "Assista o vídeo pelo APP!" logo depois do esquema do 3.3 de Ética — antes o esquema inteiro sumia)
        if (prev && prev.bot != null && prev.col === l.col && !prev.tabela && !prev.lixo && l.top - prev.bot > Math.max(l.tam * escala * 5, 110) && tinta(l.col, prev.bot + 6, l.top - 6) > 0.06) {
          // se a próxima linha abre uma tabela ou faixa colorida, o desenho termina antes do topo dessa faixa
          var limF = l.top - 6;
          if (l.tab || (l.partes[0].c && !claro(l.partes[0].c.bg))) {
            var cx0 = Math.floor(colX(l.col)[0] * W + 4), cx1 = Math.floor(colX(l.col)[1] * W - 4);
            for (var yb = Math.round(l.top - 4); yb > prev.bot + 20; yb--) {
              var pretos = 0, tot = 0;
              for (var xb = cx0; xb < cx1; xb += 4) { var kb = (yb * W + xb) * 4; tot++; if (px[kb] < 235 || px[kb + 1] < 235 || px[kb + 2] < 235) pretos++; }
              if (pretos / tot < 0.5) { limF = yb - 2; break; }
            }
          }
          var im = recorte(l.col, prev.bot + 6, limF, 60); if (im) out.push({ img: im });
        }
        // linhas seguidas em colunas de tabela = recorte da tabela inteira
        if (l.tab && ls[i + 1] && ls[i + 1].tab && ls[i + 1].col === l.col) {
          // a faixa de título da tabela (fundo colorido, logo acima) faz parte dela
          var topoT = l.top;
          while (out.length && out[out.length - 1].col === l.col && out[out.length - 1].bg && out[out.length - 1].txt && topoT - out[out.length - 1].bot < l.tam * escala * 3) { topoT = Math.min(topoT, out[out.length - 1].top); out.pop(); }
          prev = out.length ? out[out.length - 1] : null;
          var f = i; while (ls[f + 1] && ls[f + 1].col === l.col && (ls[f + 1].tab || (ls[f + 2] && ls[f + 2].tab && ls[f + 2].col === l.col))) f++;
          // a tabela vai até perto da próxima linha de texto (pega a borda e a última linha das células)
          var prox = ls[f + 1], lim = prox && prox.col === l.col ? prox.top - 4 : Math.min(H, ls[f].bot + l.tam * escala * 6);
          var fim = vazia(l.col, ls[f].bot + 2, lim, 1);
          // sobe pela borda da tabela até o primeiro espaço em branco (no máximo até o topo da linha anterior); linhas de texto que
          // ficam dentro desse recorte entram na imagem e saem do texto
          var limI = prev && prev.top != null && prev.col === l.col ? Math.max(0, prev.top - 2) : Math.max(0, topoT - l.tam * escala * 4);
          var ini = vazia(l.col, topoT - 2, limI, -1);
          while (out.length && out[out.length - 1].col === l.col && !out[out.length - 1].img && out[out.length - 1].top != null && out[out.length - 1].top >= ini - 2) out.pop();
          var img = recorte(l.col, ini, fim);
          if (img) out.push({ img: img, tabela: true, col: l.col, bot: fim });
          i = f + 1; continue;
        }
        var txt = '', html = '', bgs = {}, fgs = [], nNeg = 0, nTot = 0;
        l.partes.forEach(function (p, k) {
          var ant = l.partes[k - 1];
          var sep = k && !/\s$/.test(txt) && !/^[\s,.;:!?)\]]/.test(p.str) && !ACENTO.test(p.str) && !ACENTO.test(ant.str.slice(-1)) &&
            p.x - ant.x1 > (l.tam * 0.18) / w ? ' ' : '';
          txt += sep + p.str; nTot += p.str.trim().length; if (p.neg) nNeg += p.str.trim().length;
          var fg = p.c && p.c.fg, cor = fg && !neutro(fg) ? fg : null;
          var t = esc(p.str); if (p.neg) t = '<b>' + t + '</b>'; if (cor) t = '<span class="lp-tx-cor">' + t + '</span>';
          html += sep + t;
          if (p.c) { var q = p.c.bg.join(','); bgs[q] = (bgs[q] || 0) + p.str.length; }
        });
        var bq = null; Object.keys(bgs).forEach(function (q) { if (!bq || bgs[q] > bgs[bq]) bq = q; });
        var bg = bq ? bq.split(',').map(Number) : null;
        var AUDIO = /\s*Para (?:ouvir ao áudio|assistir ao v[ií]deo) correspondente, acesse o LDI\.?\s*/gi, IDQ = /\s4000\d{6}(?=\s)/g;
        // ícones de fontes de ícone (caracteres da área privada, ex.: o alto-falante do "ouvir o áudio") não são texto
        var ICONE = /[\uE000-\uF8FF]/g;
        var t0 = acentos(txt).replace(ICONE, '').replace(AUDIO, ' ').replace(IDQ, '').replace(/\s+/g, ' ').trim(), h0 = acentos(html.replace(/<\/b>(\s*)<b>/g, '$1')).replace(ICONE, '').replace(AUDIO, ' ').replace(IDQ, '').trim().replace(/<(span class="lp-tx-cor"|b)><\/(span|b)>/g, ''), mk = /^#/.test(t0) || /^[-–•▪●►]\s/.test(t0) || /^[lÄ]\s/.test(t0);
        if (mk) { t0 = t0.replace(/^(?:(?:#|[-–•▪●►])\s*|[lÄ]\s+)+/, ''); h0 = h0.replace(/^((?:<[^>]+>)*)(?:(?:#|[-–•▪●►])\s*|[lÄ]\s+)+/, '$1'); }
        out.push({ col: l.col, y: l.y, tam: l.tam, top: l.top, bot: l.bot, txt: t0, html: h0, marca: mk, lixo: l.lixo, neg: nTot ? nNeg / nTot : 0,
          rv: naMoldura(l),
          bolinha: !l.tab && temBolinha(l),
          rodape: (l.y < 45 || l.y > base.height - 45) && l.tam <= 8.5,
          bg: bg && !claro(bg) ? rgb(bg) : '', bgEscuro: bg && lum(bg) < 140 });
        i++;
      }
      emiteTabelas(1e9);
      // Imagens do PDF (esquemas e mapas mentais gravados como figura) que a regra do vão não pegou — no começo ou no fim da
      // página, ou com o quadro do vídeo logo abaixo: antes sumiam do modo texto. Entram na ordem, pela posição na página.
      imagensDaPagina(opl, vp).forEach(function (R) {
        var w = R[2] - R[0], h = R[3] - R[1];
        if (w < 60 * escala || h < 40 * escala) return;
        if (Math.abs(w - h) < 12 * escala && w < 130 * escala) return;
        if (R[3] < H * 0.08 || R[1] > H * 0.92) return;
        if (nitidas.some(function (j) {
          var ix = Math.max(0, Math.min(R[2], j.b[2]) - Math.max(R[0], j.b[0])), iy = Math.max(0, Math.min(R[3], j.b[3]) - Math.max(R[1], j.b[1]));
          return ix * iy > 0.4 * w * h;
        })) return;
        var col = s && (R[0] + R[2]) / 2 / W >= s ? 1 : 0;
        // imagem com texto por cima: só rótulos curtos ("Direito Interno", "Contrato de trabalho") = esquema, e os rótulos saem do
        // texto (já estão no recorte); frases (texto que contorna a ilustração, caixa sobre um fundo) = não é figura
        var sobre = out.filter(function (o) { return o.txt && !o.lixo && o.col === col && o.top != null && (o.top + o.bot) / 2 > R[1] && (o.top + o.bot) / 2 < R[3]; });
        var rotulos = sobre.every(function (o) { return o.txt.length <= 40; }) && sobre.reduce(function (n, o) { return n + o.txt.length; }, 0) <= 160;
        if (sobre.length >= 2 && !rotulos) return;
        var im = recorte(col, R[1], R[3], 60); if (!im) return;
        if (rotulos) sobre.forEach(function (o) { o.lixo = true; });
        var k = 0;
        while (k < out.length && !(out[k].col > col || (out[k].col === col && out[k].top != null && out[k].top >= R[1]))) k++;
        out.splice(k, 0, { img: im, col: col, top: R[1], bot: R[3] });
      });
      cv.width = cv.height = 0;
      out = out.filter(function (o) { return !o.lixo && (o.img || o.tabelaCorpo !== undefined || o.txt); });
      // o recorte da análise (1400px de página) fica pixelado na tela do celular: cada figura é desenhada de novo só na sua área, com mais resolução
      return nitidas.reduce(function (pr, j) {
        return pr.then(function () {
          var w = j.b[2] - j.b[0], h = j.b[3] - j.b[1], f = Math.min(2, Math.sqrt(5e6 / Math.max(1, w * h)));
          if (f < 1.3) return;
          var c3 = document.createElement('canvas'); c3.width = Math.round(w * f); c3.height = Math.round(h * f);
          var x3 = c3.getContext('2d'); x3.fillStyle = '#fff'; x3.fillRect(0, 0, c3.width, c3.height);
          return pg.render({ canvasContext: x3, viewport: pg.getViewport({ scale: escala * f }), transform: [1, 0, 0, 1, -j.b[0] * f, -j.b[1] * f], intent: 'print' }).promise.then(function () {
            recolorir(c3);
            var u = c3.toDataURL('image/jpeg', 0.9);
            out.forEach(function (o) { if (o.img === j.u) o.img = u; });
            c3.width = c3.height = 0;
          }).catch(function () {});
        });
      }, Promise.resolve()).then(function () { return out; });
    });
  };
  Leitor.prototype.elDe = function (info, x) {
    return (info.els || [info.el]).filter(function (d) { return x >= +d.dataset.x0 && x < +d.dataset.x1; })[0] || info.el;
  };
  Leitor.prototype.desenharPagina = function (n) {
    var info = this.paginas[n]; if (!info || info.feita) return;
    info.feita = true;
    var dpr = Math.min(window.devicePixelRatio || 1, 3), vp = info.vp, texto = info.pg.getTextContent();
    // cada quadro desenha só o seu pedaço da página (canvas do tamanho da parte visível)
    (info.els || [info.el]).forEach(function (d) {
      var x0 = (+d.dataset.x0 || 0) * vp.width, cw = Math.floor(((+d.dataset.x1 || 1) * vp.width) - x0), c = d.querySelector('canvas');
      c.width = Math.floor(cw * dpr); c.height = Math.floor(vp.height * dpr);
      c.style.width = cw + 'px'; c.style.height = Math.floor(vp.height) + 'px';
      c.style.position = 'absolute'; c.style.left = Math.floor(x0) + 'px'; c.style.top = '0';
      info.pg.render({ canvasContext: c.getContext('2d'), viewport: vp, transform: [dpr, 0, 0, dpr, -x0 * dpr, 0] });
      var tl = d.querySelector('.textLayer');
      texto.then(function (tc) { window.pdfjsLib.renderTextLayer({ textContentSource: tc, container: tl, viewport: vp, textDivs: [] }); });
    });
  };
  Leitor.prototype.redesenhar = function () {
    var self = this, gs = this.meus();
    this.paginas.forEach(function (info, n) {
      if (!info) return;
      var html = gs.filter(function (g) { return g.p === n; }).map(function (g) {
        return g.r.map(function (q, i) {
          return '<div class="lp-g' + (g.n ? ' tem-nota' : '') + '" data-g="' + g.id + '" style="left:' + q[0] * 100 + '%;top:' + q[1] * 100 + '%;width:' + q[2] * 100 + '%;height:' + q[3] * 100 + '%;background:' + cor(g.c) + '">' +
            (i === 0 && g.n ? '<span class="lp-gn">✎</span>' : '') + '</div>';
        }).join('');
      }).join('');
      (info.els || [info.el]).forEach(function (d) { d.querySelector('.lp-grifos').innerHTML = html; });
    });
    this.lista();
  };
  Leitor.prototype.lista = function () {
    var gs = this.meus(), el = this.raiz.querySelector('.lp-lista'); if (!el) return;
    var ng = this.raiz.querySelector('.lp-ng'); if (ng) ng.textContent = gs.length;
    el.innerHTML = '<div class="lp-lt">Meus grifos <b>' + gs.length + '</b></div>' + (gs.length ? gs.map(function (g) {
      return '<button type="button" class="lp-it" data-ir="' + g.id + '"><span class="lp-cor" style="background:' + cor(g.c) + '"></span>' +
        '<span><small>p. ' + g.p + '</small>' + esc(g.t || 'Área grifada') + (g.n ? '<em>' + esc(g.n) + '</em>' : '') + '</span></button>';
    }).join('') : '<p class="lp-vazio">Selecione um trecho do PDF e escolha a cor. ✎ grifa e já abre a anotação.</p>');
  };
  Leitor.prototype.irPara = function (id) {
    var g = grifosDe(this.arq).filter(function (x) { return x.id === id; })[0]; if (!g) return;
    var info = this.paginas[g.p]; if (!info) return;
    var cx = this.opts.rolagem, pe = this.elDe(info, g.r[0][0]);
    if (cx) {
      var y2 = pe.getBoundingClientRect().top - cx.getBoundingClientRect().top + cx.scrollTop + g.r[0][1] * pe.offsetHeight - 80;
      cx.scrollTo({ top: y2, behavior: 'smooth' });
    } else {
      var y = pe.getBoundingClientRect().top + window.scrollY + g.r[0][1] * pe.offsetHeight - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    var el = pe.querySelector('[data-g="' + id + '"]');
    if (el) { el.classList.add('pisca'); setTimeout(function () { el.classList.remove('pisca'); }, 1400); }
  };
  Leitor.prototype.abrirNota = function (id) {
    var self = this, g = grifosDe(this.arq).filter(function (x) { return x.id === id; })[0]; if (!g) return;
    var info = this.paginas[g.p]; if (!info) return;
    var velho = document.querySelector('.lp-pop'); if (velho) velho.remove();
    var pop = document.createElement('div');
    pop.className = 'lp-pop';
    pop.innerHTML = '<div class="lp-pop-cores">' + CORES.map(function (c) { return '<button type="button" data-cor="' + c.id + '" class="' + (c.id === g.c ? 'on' : '') + '" style="background:' + c.bg + '" title="' + c.nome + '"></button>'; }).join('') +
      '<button type="button" class="lp-apagar" title="Apagar grifo">Apagar</button></div>' +
      (g.t ? '<blockquote>' + esc(g.t) + '</blockquote>' : '') +
      '<textarea placeholder="Sua anotação (ex.: cai muito, reler o art. 7º)">' + esc(g.n || '') + '</textarea>' +
      '<div class="lp-pop-acoes"><button type="button" class="btn" data-fechar="1">Fechar</button><button type="button" class="btn btn-primary" data-salvar="1">Salvar</button></div>';
    var q = g.r[g.r.length - 1], pe = this.elDe(info, q[0]), W = pe.offsetWidth;
    pe.appendChild(pop);
    var x0 = (+pe.dataset.x0 || 0) * W, x1 = (+pe.dataset.x1 || 1) * W;
    pop.style.top = Math.min((q[1] + q[3]) * pe.offsetHeight + 6, pe.offsetHeight - 10) + 'px';
    pop.style.left = Math.max(x0 + 4, Math.min(q[0] * W, x1 - 290)) + 'px';
    var ta = pop.querySelector('textarea'); ta.focus();
    pop.addEventListener('mousedown', function (e) { e.stopPropagation(); });
    pop.addEventListener('click', function (e) {
      e.stopPropagation();
      var b = e.target.closest('button'); if (!b) return;
      if (b.dataset.cor) { g.c = b.dataset.cor; pop.querySelectorAll('[data-cor]').forEach(function (x) { x.classList.toggle('on', x === b); }); salvarGrifo(self.arq, Object.assign({}, g, { n: ta.value.trim() })); self.redesenhar(); return; }
      if (b.classList.contains('lp-apagar')) { apagarGrifo(self.arq, g.id); pop.remove(); self.redesenhar(); return; }
      if (b.dataset.salvar) { g.n = ta.value.trim(); salvarGrifo(self.arq, g); }
      pop.remove(); self.redesenhar();
    });
  };
  // Grifar área: arrastar um retângulo (páginas escaneadas, tabelas, esquemas)
  Leitor.prototype.ligarArea = function (pag) {
    var self = this, ini = null, caixa = null;
    function pos(e) { var t = e.touches ? e.touches[0] : e, r = pag.getBoundingClientRect(); return [(t.clientX - r.left) / r.width, (t.clientY - r.top) / r.height]; }
    function comeca(e) {
      if (!self.area) return;
      e.preventDefault(); ini = pos(e);
      caixa = document.createElement('div'); caixa.className = 'lp-g lp-arrasto'; pag.querySelector('.lp-grifos').appendChild(caixa);
    }
    function move(e) {
      if (!ini) return; e.preventDefault();
      var p = pos(e), x = Math.min(ini[0], p[0]), y = Math.min(ini[1], p[1]);
      caixa.style.cssText = 'left:' + x * 100 + '%;top:' + y * 100 + '%;width:' + Math.abs(p[0] - ini[0]) * 100 + '%;height:' + Math.abs(p[1] - ini[1]) * 100 + '%;background:' + cor('am');
    }
    function fim(e) {
      if (!ini) return;
      var p = e.changedTouches ? (function () { var t = e.changedTouches[0], r = pag.getBoundingClientRect(); return [(t.clientX - r.left) / r.width, (t.clientY - r.top) / r.height]; })() : pos(e);
      var q = [Math.min(ini[0], p[0]), Math.min(ini[1], p[1]), Math.abs(p[0] - ini[0]), Math.abs(p[1] - ini[1])];
      ini = null; caixa.remove();
      if (q[2] < 0.02 || q[3] < 0.008) return;
      var g = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), p: +pag.dataset.p, r: [q.map(function (n) { return Math.round(n * 10000) / 10000; })], c: 'am', t: '', n: '' };
      salvarGrifo(self.arq, g); self.redesenhar(); self.abrirNota(g.id);
    }
    pag.addEventListener('mousedown', comeca); pag.addEventListener('touchstart', comeca, { passive: false });
    pag.addEventListener('mousemove', move); pag.addEventListener('touchmove', move, { passive: false });
    pag.addEventListener('mouseup', fim); pag.addEventListener('touchend', fim);
  };

  // clique num grifo (a camada de grifos fica sob o texto; acha pelo ponto clicado)
  document.addEventListener('click', function (e) {
    var it = e.target.closest('.lp-it');
    if (it) { var v0 = VIEWERS.filter(function (x) { return x.raiz.contains(it); })[0]; if (v0) { v0.irPara(it.dataset.ir); v0.abrirNota(it.dataset.ir); } return; }
    var pag = e.target.closest('.lp-pag'); if (!pag || e.target.closest('.lp-pop')) return;
    var s = window.getSelection(); if (s && !s.isCollapsed) return;
    var v = VIEWERS.filter(function (x) { return x.raiz.contains(pag); })[0]; if (!v || v.area) return;
    var r = pag.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    var achou = grifosDe(v.arq).filter(function (g) {
      return g.p === +pag.dataset.p && g.r.some(function (q) { return x >= q[0] && x <= q[0] + q[2] && y >= q[1] && y <= q[1] + q[3]; });
    })[0];
    if (achou) v.abrirNota(achou.id);
    else { var pop = document.querySelector('.lp-pop'); if (pop) pop.remove(); }
  });

  window.LEITOR = {
    montar: function (el, arq, opts) { var v = new Leitor(el, arq, opts); v.iniciar(); return v; },
    // monta e guarda o modo texto de um capítulo sem mostrar nada (os próximos dias do Hoje ficam prontos antes de abrir)
    preparar: function (arq, opts) {
      opts = opts || {};
      var lt = new Leitor(document.createElement('div'), arq, opts), k = lt.chaveTexto();
      VIEWERS.splice(VIEWERS.indexOf(lt), 1);
      return txLer(k).then(function (c) {
        if (c && c.h) return;
        if (TRAB[k]) return TRAB[k].p;
        return Promise.all([carregarLib(), baixar(arq)]).then(function (r) {
          return r[0].getDocument({ data: new Uint8Array(r[1].slice(0)) }).promise;
        }).then(function (doc) {
          lt.doc = doc; lt.de = Math.max(1, opts.de || 1); lt.ate = Math.min(doc.numPages, opts.ate || doc.numPages);
          return trabalho(lt).p.then(function () { delete _cache[arq]; doc.destroy(); });
        });
      }).catch(function () {});
    },
    grifosDe: grifosDe, CORES: CORES,
    listarPasta: function (pasta) {
      var q = encodeURIComponent("'" + pasta + "' in parents and trashed=false and mimeType='application/pdf'");
      return fetch('https://www.googleapis.com/drive/v3/files?q=' + q + '&fields=files(id,name)&pageSize=1000&key=' + CHAVE)
        .then(function (r) { if (!r.ok) throw new Error('drive ' + r.status); return r.json(); })
        .then(function (j) { return j.files || []; });
    }
  };
})();
