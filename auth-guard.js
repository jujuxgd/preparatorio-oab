// ============================================================
// OAB · Guarda de autenticação + sincronização com a nuvem
// Precisa ser um <script> comum, carregado logo após firebase-init.js
// no topo do <head>.
//
// Estratégia "otimista": se este navegador já logou com sucesso antes
// (marca oab_auth_ok no localStorage), mostra o app IMEDIATAMENTE, sem
// esperar o Firebase confirmar de novo a cada página — só confere em
// segundo plano. Isso evita o "piscando toda hora" de esperar o
// Firebase em toda navegação, já que esse app é multi-página (não é
// um app de página única). Só espera de verdade — cobrindo a tela —
// na primeira vez, quando ainda não existe essa marca local.
// ============================================================
(function () {
  var ADMIN_EMAIL = 'juliagabriellems@icloud.com';
  var isDark = (localStorage.getItem('theme') || 'light') === 'dark';
  var cores = isDark
    ? { paper: '#211C18', ink: '#F1ECE4', inkFaded: '#B3A99C', linha: '#332C25', bg1: '#2A1F22', bg2: '#211C18' }
    : { paper: '#FFFFFF', ink: '#211C19', inkFaded: '#8a8078', linha: '#E7E0D9', bg1: '#FCE7EF', bg2: '#FFFFFF' };
  var roseDeep = '#C8336F';
  try { roseDeep = getComputedStyle(document.documentElement).getPropertyValue('--rose-600').trim() || roseDeep; } catch (e) {}

  var css = document.createElement('style');
  css.textContent =
    '#auth-gate input:focus { outline:none; border-color:' + roseDeep + ' !important; box-shadow:0 0 0 3px ' + roseDeep + '22; }' +
    '#auth-gate button[type="submit"]:hover:not(:disabled) { filter:brightness(1.06); }' +
    '#auth-gate button[type="submit"]:active:not(:disabled) { transform:scale(0.98); }' +
    '#auth-gate button[type="submit"]:disabled { opacity:0.85; cursor:default; }' +
    '#auth-gate label.remember { display:flex; align-items:center; gap:0.5rem; font-size:0.8rem; font-style:normal; color:' + cores.ink + '; opacity:0.75; cursor:pointer; user-select:none; }' +
    '#auth-gate input[type="checkbox"] { width:16px; height:16px; accent-color:' + roseDeep + '; cursor:pointer; }' +
    '@keyframes agFloatIn { from { opacity:0; transform:translateY(14px) scale(0.98); } to { opacity:1; transform:translateY(0) scale(1); } }' +
    '@keyframes agBreathe { 0%,100% { background-position:50% 35%; } 50% { background-position:50% 45%; } }' +
    '@keyframes agPulse { 0%,100% { transform:scale(1); opacity:1; } 50% { transform:scale(1.06); opacity:0.85; } }' +
    '@keyframes agShake { 10%,90% { transform:translateX(-1px); } 20%,80% { transform:translateX(2px); } 30%,50%,70% { transform:translateX(-4px); } 40%,60% { transform:translateX(4px); } }' +
    '#auth-gate .ag-card { animation: agFloatIn .5s cubic-bezier(.16,1,.3,1); }' +
    '#auth-gate .ag-card.ag-shake { animation: agShake .5s; }' +
    '#auth-gate .ag-seal { animation: agPulse 3.2s ease-in-out infinite; }' +
    '#auth-gate .ag-spinner { display:inline-block; width:15px; height:15px; border:2px solid rgba(255,255,255,0.4); border-top-color:#fff; border-radius:50%; animation: agSpin .7s linear infinite; vertical-align:-3px; margin-right:0.4rem; }' +
    '@keyframes agSpin { to { transform:rotate(360deg); } }' +
    '@media (prefers-reduced-motion: reduce) { #auth-gate * { animation-duration:0.001ms !important; } }';
  document.head.appendChild(css);

  var overlay = document.createElement('div');
  overlay.id = 'auth-gate';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:200000;display:flex;align-items:center;' +
    'justify-content:center;background:radial-gradient(circle at 50% 38%, ' + cores.bg1 + ' 0%, ' + cores.bg2 + ' 65%);' +
    'background-size:140% 140%;animation:agBreathe 8s ease-in-out infinite;' +
    'font-family:Inter,-apple-system,sans-serif;padding:1.5rem;box-sizing:border-box;opacity:0;transition:opacity .15s ease;';

  var jaLogouAntes = false;
  try { jaLogouAntes = localStorage.getItem('oab_auth_ok') === '1'; } catch (e) {}
  var overlayAtivo = false;
  var loadingTimer = null;

  function marcarLogado(sim) {
    try {
      if (sim) localStorage.setItem('oab_auth_ok', '1');
      else localStorage.removeItem('oab_auth_ok');
    } catch (e) {}
  }

  function ativarOverlay() {
    if (overlayAtivo) return;
    overlayAtivo = true;
    if (!overlay.parentNode) document.documentElement.appendChild(overlay);
    requestAnimationFrame(function () { overlay.style.opacity = '1'; });
    esconderApp();
  }

  function esconderApp() {
    if (document.getElementById('auth-gate-hide-app')) return;
    var style = document.createElement('style');
    style.id = 'auth-gate-hide-app';
    style.textContent = '.app, .mobile-menu-btn, .sidebar-toggle-btn { visibility: hidden !important; }';
    document.head.appendChild(style);
  }
  function mostrarApp() {
    clearTimeout(loadingTimer);
    marcarLogado(true);
    var style = document.getElementById('auth-gate-hide-app');
    if (style) style.remove();
    if (overlay.parentNode) overlay.remove();
    overlayAtivo = false;
  }

  if (jaLogouAntes) {
    // Confiança otimista: não bloqueia nada. Só prepara um timer que
    // ativa o véu se a checagem em segundo plano demorar de verdade
    // (bem raro) — assim o usuário não fica travado numa tela em
    // branco se a internet estiver ruim.
    loadingTimer = setTimeout(ativarOverlay, 1200);
  } else {
    ativarOverlay();
    loadingTimer = setTimeout(function () {
      if (overlay.parentNode) overlay.innerHTML = '<div style="color:' + roseDeep + ';font-size:0.85rem">Carregando…</div>';
    }, 280);
  }

  function renderLoginForm(erro) {
    clearTimeout(loadingTimer);
    marcarLogado(false);
    ativarOverlay();
    overlay.style.opacity = '1';
    overlay.innerHTML =
      '<div class="ag-card" style="width:100%;max-width:360px;background:' + cores.paper + ';border:1px solid ' + cores.linha + ';border-radius:20px;padding:2.4rem 2rem;box-shadow:0 8px 32px rgba(33,28,25,0.13), 0 20px 48px rgba(33,28,25,0.08)">' +
        '<div class="ag-seal" style="display:flex;justify-content:center;margin-bottom:0.7rem">' +
          '<svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true"><circle cx="32" cy="32" r="23" fill="none" stroke="' + roseDeep + '" stroke-width="1.6"/><text x="32" y="33" font-size="19" letter-spacing="1.2" text-anchor="middle" dominant-baseline="central" font-family="Georgia,serif" font-weight="700" fill="' + roseDeep + '">OAB</text></svg>' +
        '</div>' +
        '<div style="font-family:MagicalFeather,cursive;font-size:2.1rem;font-weight:normal;text-align:center;color:' + roseDeep + ';margin-bottom:0.1rem;line-height:1">Exame da Ordem</div>' +
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
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:1.1rem;gap:0.6rem;flex-wrap:wrap">' +
          '<button type="button" id="auth-gate-esqueci" style="background:none;border:none;color:' + cores.inkFaded + ';font-size:0.76rem;cursor:pointer;font-family:inherit;text-decoration:underline;padding:0">Esqueci minha senha</button>' +
          '<button type="button" id="auth-gate-ir-cadastro" style="background:none;border:none;color:' + cores.inkFaded + ';font-size:0.76rem;cursor:pointer;font-family:inherit;text-decoration:underline;padding:0">Solicitar acesso</button>' +
        '</div>' +
      '</div>';

    document.getElementById('auth-gate-ir-cadastro').addEventListener('click', function () {
      renderSignupForm(null);
    });

    document.getElementById('auth-gate-esqueci').addEventListener('click', function () {
      var emailField = document.getElementById('auth-gate-email');
      var email = (emailField && emailField.value.trim()) || '';
      renderRecuperarSenha(email);
    });

    document.getElementById('auth-gate-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('auth-gate-email').value.trim();
      var senha = document.getElementById('auth-gate-senha').value;
      var lembrar = document.getElementById('auth-gate-lembrar').checked;
      var btn = document.getElementById('auth-gate-btn');
      btn.disabled = true;
      btn.innerHTML = '<span class="ag-spinner"></span>Entrando…';
      var persistencia = lembrar ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION;
      window._fbAuth.setPersistence(persistencia)
        .then(function () { return window._fbAuth.signInWithEmailAndPassword(email, senha); })
        .catch(function (err) {
          var msg = 'Não foi possível entrar. Confira o e-mail e a senha.';
          if (err && err.code === 'auth/invalid-email') msg = 'E-mail inválido.';
          if (err && err.code === 'auth/too-many-requests') msg = 'Muitas tentativas — aguarde um pouco e tente de novo.';
          var cardEl = overlay.querySelector('.ag-card');
          if (cardEl) {
            cardEl.classList.remove('ag-shake');
            void cardEl.offsetWidth; // reinicia a animação se já tinha rodado
            cardEl.classList.add('ag-shake');
          }
          renderLoginForm(msg);
        });
    });
  }

  function renderRecuperarSenha(emailInicial, mensagem, erro) {
    clearTimeout(loadingTimer);
    ativarOverlay();
    overlay.style.opacity = '1';
    overlay.innerHTML =
      '<div class="ag-card" style="width:100%;max-width:360px;background:' + cores.paper + ';border:1px solid ' + cores.linha + ';border-radius:20px;padding:2.4rem 2rem;box-shadow:0 8px 32px rgba(33,28,25,0.13), 0 20px 48px rgba(33,28,25,0.08)">' +
        '<div class="ag-seal" style="display:flex;justify-content:center;margin-bottom:0.7rem">' +
          '<svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true"><circle cx="32" cy="32" r="23" fill="none" stroke="' + roseDeep + '" stroke-width="1.6"/><text x="32" y="33" font-size="19" letter-spacing="1.2" text-anchor="middle" dominant-baseline="central" font-family="Georgia,serif" font-weight="700" fill="' + roseDeep + '">OAB</text></svg>' +
        '</div>' +
        '<div style="font-family:MagicalFeather,cursive;font-size:1.8rem;text-align:center;color:' + roseDeep + ';margin-bottom:0.5rem;line-height:1">Recuperar senha</div>' +
        '<p style="font-size:0.8rem;text-align:center;color:' + cores.inkFaded + ';margin:0 0 1.4rem;line-height:1.5">Digite seu e-mail — enviamos um link pra você criar uma senha nova.</p>' +
        (erro ? '<div style="background:#fdecea;color:#c0524b;font-size:0.78rem;padding:0.65rem 0.85rem;border-radius:10px;margin-bottom:1rem;line-height:1.4">' + erro + '</div>' : '') +
        (mensagem ? '<div style="background:#eaf6ec;color:#2f6b3a;font-size:0.78rem;padding:0.65rem 0.85rem;border-radius:10px;margin-bottom:1rem;line-height:1.4">' + mensagem + '</div>' : '') +
        '<form id="auth-gate-recuperar-form">' +
          '<input id="auth-gate-recuperar-email" type="email" placeholder="E-mail" autocomplete="username" required value="' + (emailInicial || '').replace(/"/g,'') + '" ' +
            'style="width:100%;box-sizing:border-box;padding:0.8rem 1rem;border:1.5px solid ' + cores.linha + ';border-radius:10px;font-size:1rem;margin-bottom:1.2rem;font-family:inherit;background:' + cores.paper + ';color:' + cores.ink + ';transition:border-color .2s,box-shadow .2s">' +
          '<button type="submit" id="auth-gate-recuperar-btn" ' +
            'style="width:100%;padding:0.85rem;border:none;border-radius:10px;background:linear-gradient(135deg,' + roseDeep + ',' + roseDeep + 'dd);color:#fff;font-size:0.92rem;font-weight:600;cursor:pointer;font-family:inherit;transition:filter .15s, transform .1s">Enviar link de recuperação</button>' +
        '</form>' +
        '<div style="text-align:center;margin-top:1.1rem">' +
          '<button type="button" id="auth-gate-voltar-login" style="background:none;border:none;color:' + cores.inkFaded + ';font-size:0.76rem;cursor:pointer;font-family:inherit;text-decoration:underline">Voltar pro login</button>' +
        '</div>' +
      '</div>';

    document.getElementById('auth-gate-voltar-login').addEventListener('click', function () {
      renderLoginForm(null);
    });

    document.getElementById('auth-gate-recuperar-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('auth-gate-recuperar-email').value.trim();
      var btn = document.getElementById('auth-gate-recuperar-btn');
      btn.disabled = true;
      btn.innerHTML = '<span class="ag-spinner"></span>Enviando…';
      window._fbAuth.sendPasswordResetEmail(email)
        .then(function () {
          renderRecuperarSenha(email, 'Link enviado! Confere sua caixa de entrada (e o spam) e clica no link pra criar uma senha nova.');
        })
        .catch(function (err) {
          // Por segurança, o Firebase às vezes não diferencia "não existe"
          // de outros erros -- trata de forma genérica e amigável mesmo assim
          var msg = 'Não foi possível enviar o link. Confere se o e-mail está certo.';
          if (err && err.code === 'auth/invalid-email') msg = 'E-mail inválido.';
          if (err && err.code === 'auth/too-many-requests') msg = 'Muitas tentativas — aguarde um pouco e tente de novo.';
          renderRecuperarSenha(email, null, msg);
        });
    });
  }

  function renderSignupForm(erro) {
    clearTimeout(loadingTimer);
    ativarOverlay();
    overlay.style.opacity = '1';
    overlay.innerHTML =
      '<div class="ag-card" style="width:100%;max-width:360px;background:' + cores.paper + ';border:1px solid ' + cores.linha + ';border-radius:20px;padding:2.4rem 2rem;box-shadow:0 8px 32px rgba(33,28,25,0.13), 0 20px 48px rgba(33,28,25,0.08)">' +
        '<div class="ag-seal" style="display:flex;justify-content:center;margin-bottom:0.7rem">' +
          '<svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true"><circle cx="32" cy="32" r="23" fill="none" stroke="' + roseDeep + '" stroke-width="1.6"/><text x="32" y="33" font-size="19" letter-spacing="1.2" text-anchor="middle" dominant-baseline="central" font-family="Georgia,serif" font-weight="700" fill="' + roseDeep + '">OAB</text></svg>' +
        '</div>' +
        '<div style="font-family:MagicalFeather,cursive;font-size:2.1rem;font-weight:normal;text-align:center;color:' + roseDeep + ';margin-bottom:0.1rem;line-height:1">Exame da Ordem</div>' +
        '<div style="font-size:0.8rem;text-align:center;color:' + cores.inkFaded + ';margin-bottom:1.6rem">Solicitar acesso ao preparatório</div>' +
        (erro ? '<div style="background:#fdecea;color:#c0524b;font-size:0.78rem;padding:0.65rem 0.85rem;border-radius:10px;margin-bottom:1rem;line-height:1.4">' + erro + '</div>' : '') +
        '<form id="auth-gate-signup-form">' +
          '<input id="auth-gate-signup-email" type="email" placeholder="E-mail" autocomplete="username" required ' +
            'style="width:100%;box-sizing:border-box;padding:0.8rem 1rem;border:1.5px solid ' + cores.linha + ';border-radius:10px;font-size:1rem;margin-bottom:0.7rem;font-family:inherit;background:' + cores.paper + ';color:' + cores.ink + ';transition:border-color .2s,box-shadow .2s">' +
          '<input id="auth-gate-signup-senha" type="password" placeholder="Crie uma senha (mín. 6 caracteres)" autocomplete="new-password" required minlength="6" ' +
            'style="width:100%;box-sizing:border-box;padding:0.8rem 1rem;border:1.5px solid ' + cores.linha + ';border-radius:10px;font-size:1rem;margin-bottom:0.7rem;font-family:inherit;background:' + cores.paper + ';color:' + cores.ink + ';transition:border-color .2s,box-shadow .2s">' +
          '<input id="auth-gate-signup-senha2" type="password" placeholder="Confirme a senha" autocomplete="new-password" required minlength="6" ' +
            'style="width:100%;box-sizing:border-box;padding:0.8rem 1rem;border:1.5px solid ' + cores.linha + ';border-radius:10px;font-size:1rem;margin-bottom:1.2rem;font-family:inherit;background:' + cores.paper + ';color:' + cores.ink + ';transition:border-color .2s,box-shadow .2s">' +
          '<div style="font-size:0.74rem;color:' + cores.inkFaded + ';margin-bottom:1rem;line-height:1.4">Depois de enviar, o acesso fica pendente até ser aprovado — você recebe um aviso assim que puder entrar.</div>' +
          '<button type="submit" id="auth-gate-signup-btn" ' +
            'style="width:100%;padding:0.85rem;border:none;border-radius:10px;background:linear-gradient(135deg,' + roseDeep + ',' + roseDeep + 'dd);color:#fff;font-size:0.92rem;font-weight:600;cursor:pointer;font-family:inherit;transition:filter .15s, transform .1s">Solicitar acesso</button>' +
        '</form>' +
        '<div style="text-align:center;margin-top:1.1rem">' +
          '<button type="button" id="auth-gate-ir-login" style="background:none;border:none;color:' + cores.inkFaded + ';font-size:0.76rem;cursor:pointer;font-family:inherit;text-decoration:underline">Já tenho acesso — entrar</button>' +
        '</div>' +
      '</div>';

    document.getElementById('auth-gate-ir-login').addEventListener('click', function () {
      renderLoginForm(null);
    });

    document.getElementById('auth-gate-signup-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('auth-gate-signup-email').value.trim();
      var senha = document.getElementById('auth-gate-signup-senha').value;
      var senha2 = document.getElementById('auth-gate-signup-senha2').value;
      if (senha !== senha2) { renderSignupForm('As senhas não coincidem.'); return; }
      var btn = document.getElementById('auth-gate-signup-btn');
      btn.disabled = true;
      btn.innerHTML = '<span class="ag-spinner"></span>Enviando…';
      window._fbAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(function () { return window._fbAuth.createUserWithEmailAndPassword(email, senha); })
        .then(function (cred) {
          if (!window._fbDb) return;
          return window._fbDb.collection('usuarios_autorizados').doc(cred.user.uid).set({
            email: email,
            aprovado: false,
            criado_em: firebase.firestore.FieldValue.serverTimestamp(),
          });
        })
        .catch(function (err) {
          var msg = 'Não foi possível enviar a solicitação.';
          if (err && err.code === 'auth/email-already-in-use') msg = 'Esse e-mail já tem uma conta — tenta entrar em vez de solicitar de novo.';
          else if (err && err.code === 'auth/invalid-email') msg = 'E-mail inválido.';
          else if (err && err.code === 'auth/weak-password') msg = 'Senha muito fraca — use pelo menos 6 caracteres.';
          else if (err && err.code === 'permission-denied') msg = 'A conta foi criada, mas o pedido de acesso não pôde ser salvo (regras do banco de dados). Avise a administradora.';
          else if (err && err.code) msg = 'Erro: ' + err.code;
          var cardEl = overlay.querySelector('.ag-card');
          if (cardEl) { cardEl.classList.remove('ag-shake'); void cardEl.offsetWidth; cardEl.classList.add('ag-shake'); }
          renderSignupForm(msg);
        });
      // onAuthStateChanged cuida do que acontece depois (tela de
      // aguardando aprovação, já que aprovado começa como false)
    });
  }

  function renderAguardandoAprovacao(email) {
    clearTimeout(loadingTimer);
    ativarOverlay();
    overlay.style.opacity = '1';
    overlay.innerHTML =
      '<div class="ag-card" style="width:100%;max-width:360px;background:' + cores.paper + ';border:1px solid ' + cores.linha + ';border-radius:20px;padding:2.4rem 2rem;box-shadow:0 8px 32px rgba(33,28,25,0.13), 0 20px 48px rgba(33,28,25,0.08);text-align:center">' +
        '<div class="ag-seal" style="display:flex;justify-content:center;margin-bottom:0.9rem">' +
          '<svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true"><circle cx="32" cy="32" r="23" fill="none" stroke="' + roseDeep + '" stroke-width="1.6"/><text x="32" y="33" font-size="19" letter-spacing="1.2" text-anchor="middle" dominant-baseline="central" font-family="Georgia,serif" font-weight="700" fill="' + roseDeep + '">OAB</text></svg>' +
        '</div>' +
        '<div style="font-family:MagicalFeather,cursive;font-size:1.8rem;color:' + roseDeep + ';margin-bottom:0.6rem;line-height:1">Quase lá</div>' +
        '<p style="font-size:0.86rem;color:' + cores.ink + ';line-height:1.55;margin:0 0 1.5rem">Seu pedido de acesso (<strong>' + email + '</strong>) está aguardando aprovação. Assim que for liberado, esta página atualiza sozinha — pode deixar aberta.</p>' +
        '<button type="button" id="auth-gate-sair-espera" style="background:none;border:1px solid ' + cores.linha + ';border-radius:10px;padding:0.6rem 1.1rem;color:' + cores.inkFaded + ';font-size:0.78rem;cursor:pointer;font-family:inherit">Sair</button>' +
      '</div>';
    document.getElementById('auth-gate-sair-espera').addEventListener('click', function () {
      window._fbAuth.signOut().then(function () { location.reload(); });
    });
  }


  function iniciarSincronizacao(user) {
    if (typeof window._syncOAB !== 'undefined' && window._syncOAB.iniciar) {
      window._syncOAB.iniciar(user);
    }
  }

  if (typeof window._fbAuth === 'undefined') {
    ativarOverlay();
    overlay.style.opacity = '1';
    overlay.innerHTML = '<div style="max-width:320px;text-align:center;font-size:0.85rem;color:#c0524b">Não foi possível carregar o sistema de login. Verifique sua conexão e recarregue a página.</div>';
    return;
  }

  var _unsubAprovacao = null;
  window._fbAuth.onAuthStateChanged(function (user) {
    if (_unsubAprovacao) { _unsubAprovacao(); _unsubAprovacao = null; }
    if (!user) { renderLoginForm(null); return; }

    // Administradora sempre tem acesso — não depende de aprovação
    if (user.email === ADMIN_EMAIL) {
      mostrarApp();
      iniciarSincronizacao(user);
      return;
    }

    if (!window._fbDb) { mostrarApp(); iniciarSincronizacao(user); return; }

    // Ouve em tempo real: se a administradora aprovar enquanto esta
    // tela de espera está aberta, libera sozinho, sem precisar recarregar
    _unsubAprovacao = window._fbDb.collection('usuarios_autorizados').doc(user.uid)
      .onSnapshot(function (snap) {
        var dados = snap.exists ? snap.data() : null;
        if (dados && dados.aprovado === true) {
          mostrarApp();
          iniciarSincronizacao(user);
        } else {
          renderAguardandoAprovacao(user.email || '');
        }
      }, function () {
        // sem permissão de ler (regra ainda não publicada, etc.) — trata
        // como pendente em vez de travar numa tela de erro
        renderAguardandoAprovacao(user.email || '');
      });
  });
})();
