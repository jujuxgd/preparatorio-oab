// Service worker: deixa o site abrir sem internet.
// Rede primeiro (o conteúdo novo sempre ganha quando há conexão); sem rede, ou com a rede
// demorando mais de 4s, usa a cópia guardada. O banco de questões e os cadernos legislativos
// entram no cache na primeira vez que são abertos com internet.
var VERSAO = 'oab-v2';
var ESSENCIAIS = ["banco-questoes.html", "caderno-legislativo.html", "calendario.html", "desempenho.html", "dia.html", "erros.html", "estatisticas.html", "estudar.html", "hoje.html", "index.html", "materias.html", "perfil.html", "plano.html", "questoes.html", "reta-final.html", "revisao.html", "revisar.html", "rumo40.html", "sessao.html", "simulado.html", "simulados.html", "videoaulas.html", "ativo-core.js", "auth-guard.js", "calendario-ativo.js", "cards.js", "cores-early.js", "cores.js", "editor-quill-rico.js", "erros-core.js", "estudo-core.js", "fc-civil.js", "fc-constitucional.js", "fc-proc-civil.js", "fc-etica.js", "fc-penal.js", "firebase-init.js", "hoje-compact.css", "hoje-compact.js", "home.css", "home.js", "humor.js", "page-transition.js", "perfil-ui.css", "perfil-ui.js", "perfil.js", "plano-vde.js", "progresso.js", "revisao-biblioteca.js", "script.js", "simulado.js", "style.css", "sync.js", "topnav.css", "topnav.js", "videoaulas.js", "favicon.svg", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "manifest.webmanifest", "fonts/Kathen Font by Situjuh (7NTypes).otf", "fonts/Magical Feather.ttf", "fonts/Muthiara demo version.otf", "fonts/Simple Mandala.otf"];
var FIREBASE = [
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js'
];
// Login, sincronização e PDFs do Drive precisam da rede de verdade — nunca do cache.
var SO_REDE = /(^|\.)(googleapis\.com|firebaseapp\.com|drive\.google\.com|docs\.google\.com|youtube\.com|youtube-nocookie\.com|vercel-insights\.com)$/;

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSAO).then(function (c) {
    return Promise.all(
      ESSENCIAIS.map(function (u) { return c.add(u).catch(function () {}); }).concat(
      FIREBASE.map(function (u) {
        return fetch(new Request(u, { mode: 'no-cors' })).then(function (r) { return c.put(u, r); }).catch(function () {});
      }))
    );
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSAO; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function doCache(req) {
  var mesmaOrigem = new URL(req.url).origin === self.location.origin;
  return caches.open(VERSAO).then(function (c) {
    return c.match(req, { ignoreSearch: mesmaOrigem }).then(function (r) {
      if (r || !mesmaOrigem || req.mode !== 'navigate') return r;
      return c.match('hoje.html');
    });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.protocol !== 'https:' && url.protocol !== 'http:') return;
  var fontes = url.hostname === 'fonts.googleapis.com';
  if (SO_REDE.test(url.hostname) && !fontes) return;
  var mesmaOrigem = url.origin === self.location.origin;
  if (!mesmaOrigem && !fontes && !/(^|\.)(gstatic\.com|cdnjs\.cloudflare\.com)$/.test(url.hostname)) return;

  e.respondWith(new Promise(function (resolve) {
    var resolvido = false;
    function entrega(r) { if (!resolvido && r) { resolvido = true; resolve(r); } }
    var rede = fetch(req).then(function (r) {
      if (r && (r.ok || r.type === 'opaque')) {
        var copia = r.clone();
        caches.open(VERSAO).then(function (c) { c.put(req, copia); });
      }
      return r;
    });
    var espera = setTimeout(function () { doCache(req).then(entrega); }, 4000);
    rede.then(function (r) { clearTimeout(espera); entrega(r); })
        .catch(function () {
          clearTimeout(espera);
          doCache(req).then(function (r) { entrega(r || new Response('Sem conexão', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } })); });
        });
  }));
});
