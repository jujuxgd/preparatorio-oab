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
    raiz.innerHTML = '<div class="lp-topo"><span class="lp-info">Carregando o PDF…</span>' +
      '<span class="lp-acoes"><button type="button" class="lp-b" data-a="area" title="Para páginas escaneadas: arraste um retângulo para grifar">▭ Grifar área</button>' +
      '<button type="button" class="lp-b" data-a="lista" title="Mostrar ou esconder a lista de grifos">✎ Grifos <b class="lp-ng">0</b></button>' +
      '<button type="button" class="lp-b" data-a="zoom-" aria-label="Diminuir">−</button><span class="lp-zoom"></span><button type="button" class="lp-b" data-a="zoom+" aria-label="Aumentar">+</button>' +
      '<button type="button" class="lp-b" data-a="texto" title="Mostra o texto do PDF como página normal, que se ajusta à tela (sem cores, imagens e grifos)">Aa Texto</button>' +
      '<button type="button" class="lp-b" data-a="col" title="PDF em duas colunas: mostra uma coluna de cada vez, na largura da tela">▥ Colunas</button>' +
      '<button type="button" class="lp-b" data-a="cheia">⛶ Tela cheia</button>' +
      '<a class="lp-b" href="https://drive.google.com/file/d/' + this.arq + '/view" target="_blank" rel="noopener">Drive ↗</a></span></div>' +
      '<div class="lp-corpo"><div class="lp-paginas"></div><aside class="lp-lista"></aside></div>';
    if (this.opts.caixa) { raiz.classList.add('lp-caixa'); this.opts.rolagem = raiz.querySelector('.lp-corpo'); }
    var colSalvo = null; try { colSalvo = localStorage.getItem('oab_lp_col'); } catch (e) {}
    this.colunas = colSalvo ? colSalvo === '1' : window.innerWidth <= 700;
    raiz.querySelector('[data-a="col"]').classList.toggle('on', this.colunas);
    var txtSalvo = null; try { txtSalvo = localStorage.getItem('oab_lp_texto'); } catch (e) {}
    this.texto = txtSalvo === '1';
    raiz.querySelector('[data-a="texto"]').classList.toggle('on', this.texto);
    raiz.classList.toggle('lp-modo-texto', this.texto);
    var zoomSalvo = parseFloat(localStorage.getItem('oab_lp_zoom3'));
    this.zoom = zoomSalvo >= 0.6 && zoomSalvo <= 3 ? zoomSalvo : 1;
    function mostrarZoom() { raiz.querySelector('.lp-zoom').textContent = Math.round(self.zoom * 100) + '%'; }
    function mudarZoom(z) {
      self.zoom = Math.round(Math.min(3, Math.max(0.6, z)) * 100) / 100;
      try { localStorage.setItem('oab_lp_zoom3', String(self.zoom)); } catch (e) {}
      mostrarZoom(); self.renderizar();
    }
    mostrarZoom();
    raiz.querySelector('.lp-topo').addEventListener('click', function (e) {
      var b = e.target.closest('[data-a]'); if (!b) return;
      if (b.dataset.a === 'area') { self.area = !self.area; b.classList.toggle('on', self.area); raiz.classList.toggle('modo-area', self.area); }
      if (b.dataset.a === 'texto') {
        self.texto = !self.texto; b.classList.toggle('on', self.texto); raiz.classList.toggle('lp-modo-texto', self.texto);
        try { localStorage.setItem('oab_lp_texto', self.texto ? '1' : '0'); } catch (e) {}
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
    return Promise.all([carregarLib(), baixar(this.arq)]).then(function (r) {
      return r[0].getDocument({ data: new Uint8Array(r[1].slice(0)) }).promise;
    }).then(function (doc) {
      self.doc = doc;
      self.de = Math.max(1, self.opts.de || 1); self.ate = Math.min(doc.numPages, self.opts.ate || doc.numPages);
      raiz.querySelector('.lp-info').textContent = (self.opts.de ? 'Páginas ' + self.de + '–' + self.ate + ' de ' + doc.numPages : doc.numPages + (doc.numPages === 1 ? ' página' : ' páginas')) + ' · selecione um trecho para grifar';
      return self.medirMargem().then(function () { return self.renderizar(); }).then(function () { self.voltarPosicao(); });
    }).then(function () {
      var rz; window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(function () { if (Math.abs(self._largura - self.largura()) > 40) self.renderizar(); }, 300); });
    }).catch(function (e) {
      console.warn('Leitor PDF: usando o preview do Drive', e);
      raiz.classList.remove('lp');
      raiz.innerHTML = '<p class="ss-vazio" style="margin:0 0 .5rem">Não deu para abrir o leitor com grifos agora — mostrando o PDF pelo Drive.</p>' +
        '<iframe class="vde-pdf" src="https://drive.google.com/file/d/' + self.arq + '/preview" allow="autoplay"></iframe>';
    });
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
    this.paginas.forEach(function (info, n) { if (info && info.el.getBoundingClientRect().top <= topo + 80) atual = n; });
    return atual;
  };
  Leitor.prototype.telaCheia = function (on) {
    var self = this, raiz = this.raiz, corpo = raiz.querySelector('.lp-corpo'), n = this.paginaAtual();
    if (on) { this._rolagemAntes = this.opts.rolagem; this.opts.rolagem = corpo; } else this.opts.rolagem = this._rolagemAntes;
    raiz.classList.toggle('lp-cheia', on);
    document.documentElement.classList.toggle('lp-travada', on);
    raiz.querySelector('[data-a="cheia"]').textContent = on ? '✕ Fechar' : '⛶ Tela cheia';
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
  var K_POS = 'oab_lp_pos';
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
        if (!self.raiz.isConnected) return;
        try { pos = JSON.parse(localStorage.getItem(K_POS)) || {}; } catch (e) { pos = {}; }
        pos[self.chavePos()] = self.paginaAtual();
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
        var escala = Math.min(self._largura, 1000) / (base.width * maior) * self.zoom;
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
        itens.push([a, b]);
        for (var k = Math.max(0, Math.floor(a * B)); k < Math.min(B, Math.ceil(b * B)); k++) cob[k]++;
      });
      if (itens.length < 12) return (cache[n] = null);
      var melhor = -1;
      for (var k = 35; k <= 65; k++) if (melhor < 0 || cob[k] < cob[melhor]) melhor = k;
      var s = (melhor + .5) / B;
      var esq = itens.filter(function (q) { return q[1] <= s; }).length, dir = itens.filter(function (q) { return q[0] >= s; }).length;
      var ok = cob[melhor] <= Math.max(2, itens.length * 0.04) && esq >= itens.length * 0.2 && dir >= itens.length * 0.2;
      return (cache[n] = ok ? s : null);
    }).catch(function () { return (cache[n] = null); });
  };
  // Modo texto (híbrido): o texto do PDF reacomodado como página normal, com as cores e as caixas coloridas do PDF
  // (lidas da própria página desenhada); tabelas e imagens entram como recorte da página. Cabeçalho/rodapé que se
  // repetem em quase todas as páginas e números de página saem.
  Leitor.prototype.renderTexto = function (alvo) {
    var self = this, doc = this.doc, de = this.de || 1, ate = this.ate || doc.numPages, vez = this._vez = (this._vez || 0) + 1;
    alvo.innerHTML = '<p class="lp-vazio">Montando o texto…</p>';
    var pags = [], n = de;
    function proxima() {
      if (vez !== self._vez) return null;
      if (n > ate) return Promise.resolve();
      var num = n++;
      return doc.getPage(num).then(function (pg) {
        return Promise.all([pg.getTextContent(), pg.getOperatorList(), self.divisao(pg, num)]).then(function (r) {
          return self.blocosDaPagina(pg, r[0], r[2]);
        }).then(function (bl) { pags.push(bl); return proxima(); });
      });
    }
    return proxima().then(function () {
      if (vez !== self._vez) return;
      var conta = {}, chave = function (l) { return l.txt.replace(/\d+/g, '#'); };
      pags.forEach(function (bl) { var v = {}; bl.forEach(function (l) { if (l.txt && !v[chave(l)]) { v[chave(l)] = 1; conta[chave(l)] = (conta[chave(l)] || 0) + 1; } }); });
      var rep = pags.length >= 3 ? Math.max(2, pags.length * 0.4) : 99;
      var freq = {}, corpo = 10;
      pags.forEach(function (bl) { bl.forEach(function (l) { if (l.txt) { var t = Math.round(l.tam * 2) / 2; freq[t] = (freq[t] || 0) + 1; } }); });
      Object.keys(freq).forEach(function (t) { if (!freq[corpo] || freq[t] > freq[corpo]) corpo = +t; });
      var h = '';
      pags.forEach(function (bl, j) {
        h += '<div class="lp-tx-pag"><span class="lp-tx-n">p. ' + (de + j) + '</span>';
        var par = null, ant = null, caixa = null;
        function fecha() { if (par) { h += '<' + par.tag + (par.cor ? ' style="color:' + par.cor + '"' : '') + '>' + par.html + '</' + par.tag + '>'; par = null; } }
        function fechaCaixa() { fecha(); if (caixa) { h += '</div>'; caixa = null; } }
        bl.forEach(function (l) {
          if (l.img) { fechaCaixa(); h += '<figure class="lp-tx-fig"><img src="' + l.img + '" alt="' + (l.tabela ? 'Tabela' : 'Figura') + ' da página ' + (de + j) + '" loading="lazy"><figcaption>' + (l.tabela ? 'Tabela' : 'Figura') + ' do PDF · toque para ampliar</figcaption></figure>'; ant = null; return; }
          if (conta[chave(l)] >= rep || /^\d{1,3}$/.test(l.txt)) return;
          if ((l.bg || '') !== (caixa ? caixa.bg : '')) {
            fechaCaixa();
            if (l.bg) { caixa = { bg: l.bg }; h += '<div class="lp-tx-caixa' + (l.bgEscuro ? ' escura' : '') + '" style="--bx:' + l.bg + '">'; }
          }
          var tag = l.tam >= corpo * 1.35 ? 'h3' : l.tam >= corpo * 1.12 ? 'h4' : 'p';
          var novo = !par || par.tag !== tag || tag !== 'p' || (ant && (ant.y - l.y) > ant.tam * 1.9) || /^([-–•▪►✓→]|\d+[.)]\s|[a-z]\)\s)/.test(l.txt);
          if (novo) { fecha(); par = { tag: tag, html: '', cor: l.corLinha }; } else par.html += ' ';
          par.html += l.html;
          ant = l;
        });
        fechaCaixa();
        h += '</div>';
      });
      alvo.innerHTML = '<div class="lp-texto">' + (h || '<p class="lp-vazio">Este PDF não tem texto (é escaneado). Use o modo PDF.</p>') + '</div>';
      alvo.querySelectorAll('.lp-tx-fig').forEach(function (f) { f.addEventListener('click', function () { f.classList.toggle('grande'); }); });
    });
  };
  // Desenha a página num canvas fora da tela e devolve os blocos na ordem de leitura: linhas de texto (com cor e
  // fundo medidos nos pixels) e recortes de tabela/imagem.
  Leitor.prototype.blocosDaPagina = function (pg, tc, s) {
    var base = pg.getViewport({ scale: 1 }), escala = 1400 / base.width, vp = pg.getViewport({ scale: escala });
    var cv = document.createElement('canvas'); cv.width = Math.floor(vp.width); cv.height = Math.floor(vp.height);
    var cx = cv.getContext('2d', { willReadFrequently: true });
    cx.fillStyle = '#fff'; cx.fillRect(0, 0, cv.width, cv.height);
    return pg.render({ canvasContext: cx, viewport: vp }).promise.then(function () {
      var W = cv.width, H = cv.height, px = cx.getImageData(0, 0, W, H).data;
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
        return { bg: bg, fg: nt ? soma.map(function (v) { return Math.round(v / nt); }) : null };
      }
      function claro(c) { return c[0] > 232 && c[1] > 232 && c[2] > 232; }
      // acento que alguns PDFs gravam como letra separada ("c¸ã", "a´") vira acento de verdade na letra anterior
      var ACENTO = /^[´`ˆ^˜~¨¸]$/, COMB = { '´': '\u0301', '`': '\u0300', 'ˆ': '\u0302', '^': '\u0302', '˜': '\u0303', '~': '\u0303', '¨': '\u0308', '¸': '\u0327' };
      function acentos(t) { return t.replace(/([A-Za-z])((?:<\/?[a-z][^>]*>)*)\s?([´`ˆ˜¨¸])/g, function (m, a, tags, c) { return (a + COMB[c]).normalize('NFC') + tags; }); }
      function lum(c) { return 0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2]; }
      function neutro(c) { return Math.max(c[0], c[1], c[2]) - Math.min(c[0], c[1], c[2]) < 40; }
      // texto: itens → linhas por coluna
      var vb = pg.view, w = vb[2] - vb[0], itens = [];
      tc.items.forEach(function (it) {
        if (!it.str || !it.str.trim() || it.transform[1] || it.transform[2]) return;
        var tam = Math.abs(it.transform[3]) || 10, x = (it.transform[4] - vb[0]) / w, nome = '';
        try { var f = pg.commonObjs.get(it.fontName); nome = (f && f.name) || ''; } catch (e) {}
        var a = vp.convertToViewportPoint(it.transform[4], it.transform[5] + tam * 0.85), b = vp.convertToViewportPoint(it.transform[4] + it.width, it.transform[5] - tam * 0.2);
        var c = cores(Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[0], b[0]), Math.max(a[1], b[1]));
        if (c && c.fg && claro(c.bg) && lum(c.fg) > 185) return;  // marca d'água clara sobre fundo branco
        itens.push({ x: x, x1: x + it.width / w, y: it.transform[5], tam: tam, str: it.str, neg: /bold|black|heavy|semibold/i.test(nome), col: s && x >= s ? 1 : 0,
          top: Math.min(a[1], b[1]), bot: Math.max(a[1], b[1]), c: c });
      });
      itens.sort(function (a, b) { return a.col - b.col || b.y - a.y || a.x - b.x; });
      var ls = [];
      itens.forEach(function (it) {
        var l = ls[ls.length - 1];
        if (l && l.col === it.col && Math.abs(l.y - it.y) < Math.max(l.tam, it.tam) * 0.5) { l.partes.push(it); l.tam = Math.max(l.tam, it.tam); l.top = Math.min(l.top, it.top); l.bot = Math.max(l.bot, it.bot); }
        else ls.push({ col: it.col, y: it.y, tam: it.tam, top: it.top, bot: it.bot, partes: [it] });
      });
      ls.forEach(function (l) {
        l.partes.sort(function (a, b) { return a.x - b.x; });
        var gaps = 0; for (var k = 1; k < l.partes.length; k++) if (l.partes[k].x - l.partes[k - 1].x1 > (l.tam * 3) / w) gaps++;
        l.tab = gaps >= 2 || (gaps >= 1 && l.partes.length >= 3);
      });
      var colX = function (col) { return s ? (col ? [s, 1] : [0, s]) : [0, 1]; };
      function recorte(col, y0, y1) {
        var xr = colX(col), x0 = Math.floor(xr[0] * W), x1 = Math.ceil(xr[1] * W);
        y0 = Math.max(0, Math.floor(y0 - 8)); y1 = Math.min(H, Math.ceil(y1 + 8));
        if (y1 - y0 < 12) return null;
        var c2 = document.createElement('canvas'); c2.width = x1 - x0; c2.height = y1 - y0;
        c2.getContext('2d').drawImage(cv, x0, y0, x1 - x0, y1 - y0, 0, 0, x1 - x0, y1 - y0);
        return c2.toDataURL('image/jpeg', 0.82);
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
      var out = [], i = 0;
      while (i < ls.length) {
        var l = ls[i], prev = out.length ? out[out.length - 1] : null;
        // vão grande com desenho entre duas linhas da mesma coluna = imagem/esquema
        if (prev && prev.bot != null && prev.col === l.col && !prev.tabela && l.top - prev.bot > Math.max(l.tam * escala * 5, 110) && tinta(l.col, prev.bot + 6, l.top - 6) > 0.06) {
          var im = recorte(l.col, prev.bot + 2, l.top - 2); if (im) out.push({ img: im });
        }
        // linhas seguidas em colunas de tabela = recorte da tabela inteira
        if (l.tab && ls[i + 1] && ls[i + 1].tab && ls[i + 1].col === l.col) {
          var f = i; while (ls[f + 1] && ls[f + 1].col === l.col && (ls[f + 1].tab || (ls[f + 2] && ls[f + 2].tab && ls[f + 2].col === l.col))) f++;
          // a tabela vai até perto da próxima linha de texto (pega a borda e a última linha das células)
          var prox = ls[f + 1], lim = prox && prox.col === l.col ? prox.top - 4 : Math.min(H, ls[f].bot + l.tam * escala * 6);
          var fim = vazia(l.col, ls[f].bot + 2, lim, 1);
          var limI = prev && prev.bot != null && prev.col === l.col ? prev.bot + 4 : Math.max(0, l.top - l.tam * escala * 4);
          var ini = vazia(l.col, l.top - 2, limI, -1);
          var img = recorte(l.col, ini, fim);
          if (img) out.push({ img: img, tabela: true, col: l.col, bot: fim });
          i = f + 1; continue;
        }
        var txt = '', html = '', bgs = {}, fgs = [];
        l.partes.forEach(function (p, k) {
          var ant = l.partes[k - 1];
          var sep = k && !/\s$/.test(txt) && !/^[\s,.;:!?)\]]/.test(p.str) && !ACENTO.test(p.str) && !ACENTO.test(ant.str.slice(-1)) &&
            p.x - ant.x1 > (l.tam * 0.18) / w ? ' ' : '';
          txt += sep + p.str;
          var fg = p.c && p.c.fg, cor = fg && !neutro(fg) ? fg : null;
          var t = esc(p.str); if (p.neg) t = '<b>' + t + '</b>'; if (cor) t = '<span style="color:' + rgb(cor) + '">' + t + '</span>';
          html += sep + t;
          if (p.c) { var q = p.c.bg.join(','); bgs[q] = (bgs[q] || 0) + p.str.length; }
        });
        var bq = null; Object.keys(bgs).forEach(function (q) { if (!bq || bgs[q] > bgs[bq]) bq = q; });
        var bg = bq ? bq.split(',').map(Number) : null;
        out.push({ col: l.col, y: l.y, tam: l.tam, top: l.top, bot: l.bot, txt: acentos(txt).replace(/\s+/g, ' ').trim(),
          html: acentos(html.replace(/<\/b>(\s*)<b>/g, '$1')), bg: bg && !claro(bg) ? rgb(bg) : '', bgEscuro: bg && lum(bg) < 140 });
        i++;
      }
      cv.width = cv.height = 0;
      return out.filter(function (o) { return o.img || o.txt; });
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
    grifosDe: grifosDe, CORES: CORES,
    listarPasta: function (pasta) {
      var q = encodeURIComponent("'" + pasta + "' in parents and trashed=false and mimeType='application/pdf'");
      return fetch('https://www.googleapis.com/drive/v3/files?q=' + q + '&fields=files(id,name)&pageSize=1000&key=' + CHAVE)
        .then(function (r) { if (!r.ok) throw new Error('drive ' + r.status); return r.json(); })
        .then(function (j) { return j.files || []; });
    }
  };
})();
