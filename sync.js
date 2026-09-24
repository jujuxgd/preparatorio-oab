// ============================================================
// OAB · Sincronização com a nuvem (Firestore)
// Guarda um "snapshot" do localStorage num documento por usuário
// (backups/{uid}), reaproveitando a mesma estrutura de dados do
// backup em arquivo já existente em perfil.js. Não substitui o
// localStorage como fonte principal — só mantém uma cópia sincronizada
// na nuvem, protegida por login.
//
// Sincronização em tempo real: cada gravação local carimba
// localStorage['oab_local_rev'] com Date.now() (feito pelas próprias
// funções de gravação — salvarProgresso, erros_save, _saveSims, etc.),
// que também passam a CHAVE que mudou (ex.: 'oab_progresso_v1') pra
// notificarAlteracaoLocal/enviarParaNuvem. Com a chave em mãos, o push
// manda só {[chave]: valor, oab_local_rev} com merge:true — o Firestore
// faz merge por campo dentro do mapa "dados", preservando as chaves de
// OUTROS domínios de dados (ex.: simulados) que este aparelho não
// tocou. Sem isso, cada push mandava o localStorage inteiro e
// sobrescrevia o documento todo: dois aparelhos com alterações
// diferentes (ex.: simulados só no tablet, progresso só no notebook)
// faziam o último a salvar apagar os dados do outro na nuvem. Só o
// primeiro sync de uma conta e o reset total (index.html) continuam
// mandando o localStorage inteiro (sem chave) — nesses casos um
// overwrite completo é o comportamento certo.
// Esse carimbo viaja pro Firestore dentro do próprio blob de dados.
// Um listener onSnapshot compara a revisão da nuvem com a local: só
// aplica quando a nuvem é ESTRITAMENTE mais nova, o que naturalmente
// ignora o eco da própria escrita (mesma revisão) e evita repetir o
// loop de recarregamento que já existiu aqui antes.
// ============================================================
(function () {
  const COLECAO = 'backups';
  let _unsubscribe = null;
  let _aplicando = false;

  function docRef(uid) {
    return window._fbDb.collection(COLECAO).doc(uid);
  }

  function localRev() {
    return Number(localStorage.getItem('oab_local_rev') || 0);
  }

  // Envia o estado atual pro Firestore, sempre em modo merge: com
  // `chave`, manda só essa chave do localStorage; sem `chave` (rede de
  // segurança ao trocar de aba/fechar), manda o localStorage inteiro,
  // mas ainda em merge — nunca apaga uma chave que só existe na nuvem
  // (de outro aparelho) que este aparelho não tem localmente.
  function enviarParaNuvem(uid, chave) {
    if (!window._fbDb || !uid || !window._perfilOAB) return Promise.resolve(false);
    const dados = chave
      ? { [chave]: localStorage.getItem(chave), oab_local_rev: localStorage.getItem('oab_local_rev') }
      : window._perfilOAB.coletarDadosLocalStorage();
    const payload = { dados, atualizado_em: firebase.firestore.FieldValue.serverTimestamp() };
    return docRef(uid).set(payload, { merge: true }).then(() => {
      try { localStorage.setItem('oab_ultimo_backup', new Date().toISOString()); } catch (e) {}
      return true;
    }).catch(err => { console.error('Erro ao enviar pra nuvem:', err); return false; });
  }

  // Overwrite de verdade (sem merge) — só faz sentido quando a intenção
  // é apagar o que estiver na nuvem: primeiro sync de uma conta nova
  // (não existe doc ainda, não faz diferença) e o reset total do app
  // (index.html), onde o objetivo é justamente zerar tudo, inclusive
  // na nuvem.
  function enviarSnapshotCompleto(uid) {
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

  // Baixa o snapshot da nuvem e aplica no localStorage deste aparelho
  // (fetch único — usado pelo botão manual "Baixar da nuvem").
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

  // Um campo de formulário focado não deve levar um reload no meio da
  // digitação — tenta de novo em breve em vez de aplicar na hora.
  function aguardandoDigitacao() {
    const el = document.activeElement;
    if (!el) return false;
    const tag = el.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || el.isContentEditable;
  }

  function aplicarSnapshotRemoto(uid, data, tentativa) {
    if (_aplicando) return;
    if (aguardandoDigitacao() && (tentativa || 0) < 20) {
      setTimeout(() => aplicarSnapshotRemoto(uid, data, (tentativa || 0) + 1), 1000);
      return;
    }
    _aplicando = true;
    window._perfilOAB.aplicarDadosLocalStorage(data.dados);
    location.reload();
  }

  function handleSnapshot(uid, snap) {
    if (_aplicando) return;
    if (!snap.exists) {
      // Primeira vez usando sync nesta conta — envia o que já existe localmente.
      enviarSnapshotCompleto(uid);
      return;
    }
    const data = snap.data();
    if (!data || !data.dados) return;
    const cloudRev = Number(data.dados.oab_local_rev || 0);
    if (cloudRev > localRev()) {
      aplicarSnapshotRemoto(uid, data);
    }
  }

  // Dados pessoais ficam em dezenas de chaves diferentes no localStorage
  // (progresso, humor, perfil, microresumos, questões, simulados...).
  // Mais seguro limpar TUDO exceto uma pequena lista de preferências de
  // aparelho (tema, cor) do que tentar listar cada chave pessoal à mão.
  const PRESERVAR_AO_TROCAR_CONTA = ['theme', 'oab_rose_intensity', 'oab_rose_custom_hex', 'simulatedDate'];
  function limparDadosLocaisDoApp() {
    const chaves = [];
    for (let i = 0; i < localStorage.length; i++) chaves.push(localStorage.key(i));
    chaves.forEach(k => {
      if (!PRESERVAR_AO_TROCAR_CONTA.includes(k)) {
        try { localStorage.removeItem(k); } catch (e) {}
      }
    });
  }

  // Chamada pelo auth-guard.js assim que o login é confirmado.
  function iniciar(user) {
    const uid = user.uid;

    // Este aparelho pode ter sido usado por outra conta antes (ex: testar
    // o cadastro no mesmo navegador do admin) -- se o dono da sessão
    // mudou, os dados locais pertencem à pessoa anterior e não podem
    // "vazar" pra conta nova.
    let uidAnterior = null;
    try { uidAnterior = localStorage.getItem('oab_uid_ativo'); } catch (e) {}
    if (uidAnterior && uidAnterior !== uid) {
      limparDadosLocaisDoApp();
      try { localStorage.setItem('oab_uid_ativo', uid); } catch (e) {}
      // A página já desenhou na tela com os dados antigos antes desta
      // limpeza rodar (ela só acontece depois que o login termina de
      // confirmar) -- sem recarregar, o visual continuaria mostrando
      // o nome/progresso da conta anterior mesmo com o localStorage
      // já limpo por baixo.
      location.reload();
      return;
    }
    try { localStorage.setItem('oab_uid_ativo', uid); } catch (e) {}

    window._syncOAB._uid = uid;

    if (_unsubscribe) { _unsubscribe(); _unsubscribe = null; }
    _unsubscribe = docRef(uid).onSnapshot(
      snap => handleSnapshot(uid, snap),
      err => console.error('Erro no listener de sincronização:', err)
    );

    // Envia pra nuvem silenciosamente ao trocar de aba/sair da página,
    // como rede de segurança além do push logo após cada gravação.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') enviarParaNuvem(uid);
    });
    window.addEventListener('pagehide', () => enviarParaNuvem(uid));
  }

  // Chamada pelas funções de gravação (salvarProgresso, erros_save,
  // _saveSims, etc.) logo depois de carimbar oab_local_rev, pra propagar
  // a mudança rápido em vez de esperar o usuário trocar de aba.
  function notificarAlteracaoLocal(chave) {
    const uid = window._syncOAB._uid;
    if (!uid) return;
    enviarParaNuvem(uid, chave);
  }

  window._syncOAB = { iniciar, enviarParaNuvem, enviarSnapshotCompleto, baixarDaNuvem, notificarAlteracaoLocal, _uid: null };
})();
