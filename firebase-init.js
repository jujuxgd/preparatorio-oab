// ============================================================
// OAB · Inicialização do Firebase
// Usa o SDK "compat" (namespace global `firebase`), carregado via
// CDN nas tags <script> antes deste arquivo — mais simples de
// integrar num site sem build step, igual o resto do projeto.
// ============================================================
(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyB7A6hI4GPO-SXNwCx9EF6wdhxq7VixLPM",
    authDomain: "preparatoriooab-5a577.firebaseapp.com",
    projectId: "preparatoriooab-5a577",
    storageBucket: "preparatoriooab-5a577.firebasestorage.app",
    messagingSenderId: "545507373202",
    appId: "1:545507373202:web:2baa5060dc5d39c06af64b",
  };

  try {
    if (typeof firebase === 'undefined') {
      console.error('SDK do Firebase não carregou — verifique as tags <script> no <head>.');
      return;
    }
    firebase.initializeApp(firebaseConfig);
    window._fbAuth = firebase.auth();
    window._fbDb = firebase.firestore();
  } catch (e) {
    console.error('Erro ao inicializar o Firebase:', e);
  }
})();
