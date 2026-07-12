// ============================================================
// OAB · Transição de página ("floração")
// Precisa ser um <script> comum (não defer/async), carregado logo
// após cores-early.js no topo do <head>: cria o véu já coberto
// ANTES do primeiro paint (evita flash do conteúdo cru), depois
// o dissolve suavemente. Ao clicar num link interno, faz o caminho
// inverso antes de navegar de verdade — dá sensação de transição
// de app único, mesmo sendo várias páginas separadas.
// ============================================================
(function () {
  var isDark = (localStorage.getItem('theme') || 'light') === 'dark';
  var rose100 = isDark ? '#3A2530' : '#FCE7EF';
  var paper   = isDark ? '#211C18' : '#FFFFFF';

  var veil = document.createElement('div');
  veil.id = 'page-veil';
  // Cobre a tela imediatamente, antes de qualquer CSS externo carregar
  veil.style.cssText = 'position:fixed;inset:0;z-index:100000;opacity:1;pointer-events:none;' +
    'background:radial-gradient(circle at 50% 42%, ' + rose100 + ' 0%, ' + paper + ' 62%);' +
    'transition:opacity .38s cubic-bezier(.16,1,.3,1);';
  document.documentElement.appendChild(veil);

  function reveal() {
    veil.style.opacity = '0';
  }
  // Duas camadas de segurança: revela assim que o DOM estiver pronto,
  // e de novo no window.load (recursos pesados), o que vier primeiro
  // já resolve — o resto é só garantia.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { requestAnimationFrame(function(){ requestAnimationFrame(reveal); }); });
  } else {
    requestAnimationFrame(function(){ requestAnimationFrame(reveal); });
  }
  window.addEventListener('load', reveal);
  // Rede de segurança final — nunca deixa o véu preso na tela
  setTimeout(reveal, 900);

  // ── Intercepta cliques em links internos pra floração de saída ──
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (!href || href.charAt(0) === '#' || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) return;
    if (a.target && a.target !== '' && a.target !== '_self') return;
    if (a.hasAttribute('download')) return;
    // Só páginas locais .html (com ou sem querystring)
    if (!/^[a-zA-Z0-9_\-]+\.html(\?.*)?$/.test(href) && href.indexOf('://') !== -1) return;

    e.preventDefault();
    veil.style.pointerEvents = 'auto';
    veil.style.opacity = '1';
    setTimeout(function () { window.location.href = href; }, 260);
  }, true);
})();
