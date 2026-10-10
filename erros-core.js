// Caderno de Erros — lógica central
// Usado por: erros.html

const ERROS_KEY = 'oab_erros_v1';

window.MATERIAS_ERROS = {
  etica:         'Ética',
  constitucional:'Constitucional',
  civil:         'Civil',
  proc_civil:    'Processo Civil',
  penal:         'Penal',
  proc_penal:    'Processo Penal',
  trabalho:      'Trabalho',
  proc_trabalho: 'Proc. Trabalho',
  tributario:    'Tributário',
  administrativo:'Administrativo',
  empresarial:   'Empresarial'
};

window.MOTIVOS_ERROS = {
  nao_sabia:         'Não sabia o conteúdo',
  confusao_conceito: 'Confundi conceitos',
  pegadinha:         'Pegadinha da banca',
  desatencao:        'Desatenção',
  memorizacao:       'Falha de memorização'
};

function erros_get() {
  try { return JSON.parse(localStorage.getItem(ERROS_KEY) || '[]'); }
  catch { return []; }
}

function erros_save(list) {
  localStorage.setItem(ERROS_KEY, JSON.stringify(list));
  try { localStorage.setItem('oab_local_rev', String(Date.now())); } catch (e) {}
  if (window._syncOAB && window._syncOAB.notificarAlteracaoLocal) {
    try { window._syncOAB.notificarAlteracaoLocal(ERROS_KEY); } catch (e) {}
  }
}

// ── Revisão espaçada ─────────────────────────────────────────
// Cada acerto sobe um degrau da escada (dias até a próxima revisão);
// errar volta pro começo; acertar no último degrau (15 dias) tira o erro
// da rotação. Perto da prova o intervalo é cortado pra
// caber antes de 10/01/2027. Erros sem `proxima_revisao` (anteriores a
// esta função) contam como devidos hoje.
const ERROS_ESCADA = [1, 7, 15];
const ERROS_ACERTOS_PARA_DOMINAR = 3;
const ERROS_LIMITE_DIARIO = 15;
const ERROS_DIA_PROVA = '2027-01-09';

function _erros_soma_dias(iso, n) {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(y, m - 1, d + n);
  return dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0');
}

function erros_proxima_data(nivel, hoje) {
  const passo = ERROS_ESCADA[Math.min(nivel, ERROS_ESCADA.length - 1)];
  const alvo = _erros_soma_dias(hoje, passo);
  return alvo > ERROS_DIA_PROVA ? (hoje < ERROS_DIA_PROVA ? ERROS_DIA_PROVA : alvo) : alvo;
}

function erros_devidas(limite) {
  const hoje = dataLocalHoje();
  const max = limite == null ? ERROS_LIMITE_DIARIO : limite;
  return erros_get()
    .filter(e => e.status !== 'dominada' && !e.flashcard_id && (e.proxima_revisao || '0000-00-00') <= hoje)
    .sort((a, b) => (a.proxima_revisao || '0000-00-00').localeCompare(b.proxima_revisao || '0000-00-00'))
    .slice(0, max);
}

function erros_total_devidas() {
  return erros_devidas(Infinity).length;
}

function erros_registrar_revisao(id, acertou) {
  const list = erros_get();
  const i = list.findIndex(e => e.id === id);
  if (i < 0) return null;
  const hoje = dataLocalHoje();
  const e = list[i];
  const nivel = acertou ? (e.nivel || 0) + 1 : 0;
  const seguidos = acertou ? (e.acertos_seguidos || 0) + 1 : 0;
  const atualizado = {
    ...e, nivel, acertos_seguidos: seguidos, ultima_revisao: hoje,
    revisoes: (e.revisoes || 0) + 1
  };
  if (seguidos >= ERROS_ACERTOS_PARA_DOMINAR) {
    atualizado.status = 'dominada';
    atualizado.dominada_em = hoje;
    delete atualizado.proxima_revisao;
  } else {
    atualizado.proxima_revisao = erros_proxima_data(nivel, hoje);
  }
  list[i] = atualizado;
  erros_save(list);
  return atualizado;
}

function erros_add(dados) {
  const list = erros_get();
  if (dados.questao_id || dados.flashcard_id) {
    const j = list.findIndex(e => e.status !== 'dominada' &&
      (dados.questao_id ? e.questao_id === dados.questao_id : e.flashcard_id === dados.flashcard_id));
    if (j >= 0) {
      list[j] = { ...list[j], nivel: 0, acertos_seguidos: 0, proxima_revisao: _erros_soma_dias(dataLocalHoje(), 1) };
      erros_save(list);
      return list[j];
    }
  }
  const registro = {
    id: 'e' + Date.now(),
    data: dataLocalHoje(),
    materia:    dados.materia    || '',
    topico:     dados.topico     || '',
    subtopico:  dados.subtopico  || '',
    motivo:     dados.motivo     || 'nao_sabia',
    o_que_faltou: dados.o_que_faltou || '',
    explicacao:   dados.explicacao   || '',
    dia_estudo:   dados.dia_estudo   || null,
    questao_id:   dados.questao_id   || null,
    flashcard_id: dados.flashcard_id || null,
    nivel: 0,
    acertos_seguidos: 0,
    proxima_revisao: _erros_soma_dias(dataLocalHoje(), 1),
    status: 'pendente'
  };
  list.unshift(registro);
  erros_save(list);
  return registro;
}

function erros_editar(id, dados) {
  const list = erros_get();
  const i = list.findIndex(e => e.id === id);
  if (i < 0) return null;
  list[i] = {
    ...list[i],
    materia:      dados.materia      ?? list[i].materia,
    topico:       dados.topico       ?? list[i].topico,
    subtopico:    dados.subtopico    ?? list[i].subtopico,
    motivo:       dados.motivo       ?? list[i].motivo,
    o_que_faltou: dados.o_que_faltou ?? list[i].o_que_faltou,
    explicacao:   dados.explicacao   ?? list[i].explicacao,
  };
  erros_save(list);
  return list[i];
}

function erros_dominar(id) {
  const list = erros_get();
  const i = list.findIndex(e => e.id === id);
  if (i < 0) return;
  list[i] = { ...list[i], status: 'dominada', dominada_em: dataLocalHoje() };
  erros_save(list);
}

function erros_deletar(id) {
  erros_save(erros_get().filter(e => e.id !== id));
}

function erros_stats() {
  const list = erros_get();
  const total     = list.length;
  const dominadas = list.filter(e => e.status === 'dominada').length;
  const pendentes = total - dominadas;
  const taxa      = total > 0 ? Math.round((dominadas / total) * 100) : 0;

  const porMateria = {};
  const porMotivo  = {};
  list.forEach(e => {
    porMateria[e.materia] = (porMateria[e.materia] || 0) + 1;
    porMotivo[e.motivo]   = (porMotivo[e.motivo]   || 0) + 1;
  });

  const motivoMaisFreq = Object.entries(porMotivo).sort((a, b) => b[1] - a[1])[0];
  const materiaMaisErra = Object.entries(porMateria).sort((a, b) => b[1] - a[1])[0];

  return { total, dominadas, pendentes, taxa, porMateria, porMotivo, motivoMaisFreq, materiaMaisErra };
}

function erros_fmt_data(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y.slice(2)}`;
}
