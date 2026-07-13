// Caderno de Erros — lógica central
// Usado por: erros.html, hoje.html

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
    try { window._syncOAB.notificarAlteracaoLocal(); } catch (e) {}
  }
}

function erros_add(dados) {
  const list = erros_get();
  const registro = {
    id: 'e' + Date.now(),
    data: new Date().toISOString().split('T')[0],
    materia:    dados.materia    || '',
    topico:     dados.topico     || '',
    subtopico:  dados.subtopico  || '',
    motivo:     dados.motivo     || 'nao_sabia',
    o_que_faltou: dados.o_que_faltou || '',
    explicacao:   dados.explicacao   || '',
    dia_estudo:   dados.dia_estudo   || null,
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
  list[i] = { ...list[i], status: 'dominada', dominada_em: new Date().toISOString().split('T')[0] };
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
