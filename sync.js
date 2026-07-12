// ============================================================
// OAB · Sincronização com a nuvem (Firestore)
// Guarda um "snapshot" completo do localStorage num documento por
// usuário (users/{uid}), reaproveitando a mesma estrutura de dados
// do backup em arquivo já existente em perfil.js. Não substitui o
// localStorage como fonte principal — só mantém uma cópia sincronizada
// na nuvem, protegida por login.
// ============================================================
(function () {
  const COLECAO = 'backups';

  function docRef(uid) {
    return window._fbDb.collection(COLECAO).doc(uid);
  }

  // Envia o estado atual do localStorage pro Firestore.
  function enviarParaNuvem(uid) {
    if (!window._fbDb || !uid || !window._perfilOAB) return Promise.resolve(false);
    const dados = window._perfilOAB.coletarDadosLocalStorage();
    return docRef(uid).set({
      dados,
      atualizado_em: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(() => {
      try { localStorage.setItem('oab_ultimo_backup', new Date().toISOString()); } catch (e) {}
      return true;
    }).catch(err => { console.error('Erro ao enviar pra nuvem:', err); return false; });
  }

  // Baixa o snapshot da nuvem e aplica no localStorage deste aparelho.
  function baixarDaNuvem(uid) {
    if (!window._fbDb || !uid || !window._perfilOAB) return Promise.resolve(null);
    return docRef(uid).get().then(snap => {
      if (!snap.exists) return null;
      const data = snap.data();
      if (data && data.dados) {
        window._perfilOAB.aplicarDadosLocalStorage(data.dados);
        return data;
      }
      return null;
    }).catch(err => { console.error('Erro ao baixar da nuvem:', err); return null; });
  }

  // Chamada pelo auth-guard.js assim que o login é confirmado.
  function iniciar(user) {
    const uid = user.uid;
    window._syncOAB._uid = uid;

    // Aparelho novo (sem progresso local ainda) — tenta restaurar
    // automaticamente o que já existir salvo na nuvem.
    const temDadosLocais = !!localStorage.getItem('oab_progresso_v1');
    if (!temDadosLocais) {
      baixarDaNuvem(uid).then(data => {
        if (data) location.reload();
      });
    }

    // Envia pra nuvem silenciosamente ao trocar de aba/sair da página,
    // pra manter tudo sincronizado sem precisar de ação manual sempre.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') enviarParaNuvem(uid);
    });
    window.addEventListener('pagehide', () => enviarParaNuvem(uid));
  }

  window._syncOAB = { iniciar, enviarParaNuvem, baixarDaNuvem, _uid: null };
})();
