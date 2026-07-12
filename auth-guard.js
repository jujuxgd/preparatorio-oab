// ============================================================
// OAB · Guarda de autenticação + sincronização com a nuvem
// Precisa ser um <script> comum, carregado logo após firebase-init.js
// no topo do <head>: cria um véu cobrindo a tela ANTES do primeiro
// paint, e só revela o conteúdo depois de confirmar o login.
// ============================================================
(function () {
  var overlay = document.createElement('div');
  overlay.id = 'auth-gate';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:200000;display:flex;align-items:center;' +
    'justify-content:center;background:#FFFFFF;font-family:Inter,-apple-system,sans-serif;padding:1.5rem;box-sizing:border-box;';
  overlay.innerHTML = '<div style="color:#B08" >Carregando…</div>';
  document.documentElement.appendChild(overlay);

  function esconderApp() {
    var style = document.createElement('style');
    style.id = 'auth-gate-hide-app';
    style.textContent = '.app, .mobile-menu-btn, .sidebar-toggle-btn { visibility: hidden !important; }';
    document.head.appendChild(style);
  }
  function mostrarApp() {
    var style = document.getElementById('auth-gate-hide-app');
    if (style) style.remove();
    overlay.remove();
  }
  esconderApp();

  function renderLoginForm(erro) {
    overlay.innerHTML =
      '<div style="width:100%;max-width:340px;background:#FFFFFF;border:1px solid #E7E0D9;border-radius:16px;padding:2rem 1.75rem;box-shadow:0 8px 32px rgba(33,28,25,0.11)">' +
        '<div style="font-family:Georgia,serif;font-size:1.4rem;text-align:center;color:#C8336F;margin-bottom:0.3rem">Exame da Ordem</div>' +
        '<div style="font-size:0.78rem;text-align:center;color:#8a8078;margin-bottom:1.5rem">Entre para acessar seu preparatório</div>' +
        (erro ? '<div style="background:#fdecea;color:#c0524b;font-size:0.78rem;padding:0.6rem 0.8rem;border-radius:8px;margin-bottom:1rem">' + erro + '</div>' : '') +
        '<form id="auth-gate-form">' +
          '<input id="auth-gate-email" type="email" placeholder="E-mail" autocomplete="username" required ' +
            'style="width:100%;box-sizing:border-box;padding:0.7rem 0.9rem;border:1.5px solid #E7E0D9;border-radius:8px;font-size:1rem;margin-bottom:0.7rem;font-family:inherit">' +
          '<input id="auth-gate-senha" type="password" placeholder="Senha" autocomplete="current-password" required ' +
            'style="width:100%;box-sizing:border-box;padding:0.7rem 0.9rem;border:1.5px solid #E7E0D9;border-radius:8px;font-size:1rem;margin-bottom:1rem;font-family:inherit">' +
          '<button type="submit" id="auth-gate-btn" ' +
            'style="width:100%;padding:0.75rem;border:none;border-radius:8px;background:#C8336F;color:#fff;font-size:0.9rem;font-weight:600;cursor:pointer;font-family:inherit">Entrar</button>' +
        '</form>' +
      '</div>';

    document.getElementById('auth-gate-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('auth-gate-email').value.trim();
      var senha = document.getElementById('auth-gate-senha').value;
      var btn = document.getElementById('auth-gate-btn');
      btn.disabled = true;
      btn.textContent = 'Entrando…';
      window._fbAuth.signInWithEmailAndPassword(email, senha).catch(function (err) {
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
