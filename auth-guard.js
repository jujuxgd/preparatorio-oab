// ============================================================
// OAB · Guarda de autenticação + sincronização com a nuvem
// Precisa ser um <script> comum, carregado logo após firebase-init.js
// no topo do <head>: cria um véu cobrindo a tela ANTES do primeiro
// paint, e só revela o conteúdo depois de confirmar o login.
// ============================================================
(function () {
  var isDark = (localStorage.getItem('theme') || 'light') === 'dark';
  var cores = isDark
    ? { paper: '#211C18', ink: '#F1ECE4', inkFaded: '#B3A99C', linha: '#332C25', bg1: '#2A1F22', bg2: '#211C18' }
    : { paper: '#FFFFFF', ink: '#211C19', inkFaded: '#8a8078', linha: '#E7E0D9', bg1: '#FCE7EF', bg2: '#FFFFFF' };
  var roseDeep = '#C8336F';
  try { roseDeep = getComputedStyle(document.documentElement).getPropertyValue('--rose-600').trim() || roseDeep; } catch (e) {}

  // Estilos próprios do gate (funciona mesmo antes do style.css carregar,
  // e cobre estados como :focus/:hover que não dá pra fazer só inline)
  var css = document.createElement('style');
  css.textContent =
    '#auth-gate input:focus { outline:none; border-color:' + roseDeep + ' !important; box-shadow:0 0 0 3px ' + roseDeep + '22; }' +
    '#auth-gate button[type="submit"]:hover { filter:brightness(1.06); }' +
    '#auth-gate button[type="submit"]:active { transform:scale(0.98); }' +
    '#auth-gate label.remember { display:flex; align-items:center; gap:0.5rem; font-size:0.8rem; color:' + cores.inkFaded + '; cursor:pointer; user-select:none; }' +
    '#auth-gate input[type="checkbox"] { width:16px; height:16px; accent-color:' + roseDeep + '; cursor:pointer; }';
  document.head.appendChild(css);

  var overlay = document.createElement('div');
  overlay.id = 'auth-gate';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:200000;display:flex;align-items:center;' +
    'justify-content:center;background:radial-gradient(circle at 50% 38%, ' + cores.bg1 + ' 0%, ' + cores.bg2 + ' 65%);' +
    'font-family:Inter,-apple-system,sans-serif;padding:1.5rem;box-sizing:border-box;opacity:0;transition:opacity .15s ease;';
  document.documentElement.appendChild(overlay);
  requestAnimationFrame(function () { overlay.style.opacity = '1'; });

  // Só mostra o texto "Carregando" se a verificação de login demorar
  // mais que um piscar de olhos — a maioria das vezes é quase instantâneo
  // (a sessão já fica salva no aparelho), então não precisa mostrar nada.
  var loadingTimer = setTimeout(function () {
    if (overlay.parentNode) overlay.innerHTML = '<div style="color:' + roseDeep + ';font-size:0.85rem">Carregando…</div>';
  }, 280);

  function esconderApp() {
    var style = document.createElement('style');
    style.id = 'auth-gate-hide-app';
    style.textContent = '.app, .mobile-menu-btn, .sidebar-toggle-btn { visibility: hidden !important; }';
    document.head.appendChild(style);
  }
  function mostrarApp() {
    clearTimeout(loadingTimer);
    var style = document.getElementById('auth-gate-hide-app');
    if (style) style.remove();
    overlay.remove();
    css.remove();
  }
  esconderApp();

  function renderLoginForm(erro) {
    clearTimeout(loadingTimer);
    overlay.style.opacity = '1';
    overlay.innerHTML =
      '<div style="width:100%;max-width:360px;background:' + cores.paper + ';border:1px solid ' + cores.linha + ';border-radius:20px;padding:2.4rem 2rem;box-shadow:0 8px 32px rgba(33,28,25,0.13), 0 20px 48px rgba(33,28,25,0.08)">' +
        '<div style="display:flex;justify-content:center;margin-bottom:1rem">' +
          '<svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true"><circle cx="32" cy="32" r="23" fill="none" stroke="' + roseDeep + '" stroke-width="1.6"/><text x="32" y="33" font-size="19" letter-spacing="1.2" text-anchor="middle" dominant-baseline="central" font-family="Georgia,serif" font-weight="700" fill="' + roseDeep + '">OAB</text></svg>' +
        '</div>' +
        '<div style="font-family:Fraunces,Georgia,serif;font-size:1.6rem;text-align:center;color:' + roseDeep + ';margin-bottom:0.25rem;letter-spacing:-0.01em">Exame da Ordem</div>' +
        '<div style="font-size:0.8rem;text-align:center;color:' + cores.inkFaded + ';margin-bottom:1.6rem">Entre para acessar seu preparatório</div>' +
        (erro ? '<div style="background:#fdecea;color:#c0524b;font-size:0.78rem;padding:0.65rem 0.85rem;border-radius:10px;margin-bottom:1rem;line-height:1.4">' + erro + '</div>' : '') +
        '<form id="auth-gate-form">' +
          '<input id="auth-gate-email" type="email" placeholder="E-mail" autocomplete="username" required ' +
            'style="width:100%;box-sizing:border-box;padding:0.8rem 1rem;border:1.5px solid ' + cores.linha + ';border-radius:10px;font-size:1rem;margin-bottom:0.7rem;font-family:inherit;background:' + cores.paper + ';color:' + cores.ink + ';transition:border-color .2s,box-shadow .2s">' +
          '<input id="auth-gate-senha" type="password" placeholder="Senha" autocomplete="current-password" required ' +
            'style="width:100%;box-sizing:border-box;padding:0.8rem 1rem;border:1.5px solid ' + cores.linha + ';border-radius:10px;font-size:1rem;margin-bottom:0.9rem;font-family:inherit;background:' + cores.paper + ';color:' + cores.ink + ';transition:border-color .2s,box-shadow .2s">' +
          '<label class="remember" style="margin-bottom:1.2rem">' +
            '<input type="checkbox" id="auth-gate-lembrar" checked> Manter conectada neste navegador' +
          '</label>' +
          '<button type="submit" id="auth-gate-btn" ' +
            'style="width:100%;padding:0.85rem;border:none;border-radius:10px;background:linear-gradient(135deg,' + roseDeep + ',' + roseDeep + 'dd);color:#fff;font-size:0.92rem;font-weight:600;cursor:pointer;font-family:inherit;transition:filter .15s, transform .1s">Entrar</button>' +
        '</form>' +
      '</div>';

    document.getElementById('auth-gate-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('auth-gate-email').value.trim();
      var senha = document.getElementById('auth-gate-senha').value;
      var lembrar = document.getElementById('auth-gate-lembrar').checked;
      var btn = document.getElementById('auth-gate-btn');
      btn.disabled = true;
      btn.textContent = 'Entrando…';
      var persistencia = lembrar ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION;
      window._fbAuth.setPersistence(persistencia)
        .then(function () { return window._fbAuth.signInWithEmailAndPassword(email, senha); })
        .catch(function (err) {
          var msg = 'Não foi possível entrar. Confira o e-mail e a senha.';
          if (err && err.code === 'auth/invalid-email') msg = 'E-mail inválido.';
          if (err && err.code === 'auth/too-many-requests') msg = 'Muitas tentativas — aguarde um pouco e tente de novo.';
          renderLoginForm(msg);
        });
    });
  }

  function iniciarSincronizacao(user) {
    if (typeof window._syncOAB !== 'undefined' && window._syncOAB.iniciar) {
      window._syncOAB.iniciar(user);
    }
  }

  if (typeof window._fbAuth === 'undefined') {
    overlay.innerHTML = '<div style="max-width:320px;text-align:center;font-size:0.85rem;color:#c0524b">Não foi possível carregar o sistema de login. Verifique sua conexão e recarregue a página.</div>';
    return;
  }

  window._fbAuth.onAuthStateChanged(function (user) {
    if (user) {
      mostrarApp();
      iniciarSincronizacao(user);
    } else {
      renderLoginForm(null);
    }
  });
})();
