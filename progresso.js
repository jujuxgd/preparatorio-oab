// ============================================
// OAB · Sistema de Progresso de Estudos
// Persistência: localStorage + export/import JSON
// ============================================

const PROGRESSO_KEY   = 'oab_progresso_v1';
const PROGRESSO_VERSAO = '2.0';

function _criarEstrutura() {
  return {
    versao:      PROGRESSO_VERSAO,
    criado:      new Date().toISOString(),
    atualizado:  new Date().toISOString(),
    meta_dias:   120,
    streak:      parseInt(localStorage.getItem('ju_oab_streak') || '0'),
    streak_data: localStorage.getItem('ju_oab_streak_date') || null,
    dias:        {}
  };
}

function carregarProgresso() {
  try {
    const s = localStorage.getItem(PROGRESSO_KEY);
    if (s) {
      const p = JSON.parse(s);
      // Remove chaves de dias inválidas (dia 0, dias > 60 sem sentido)
      // preserva apenas dias 1–60
      if (p.dias) {
        Object.keys(p.dias).forEach(k => {
          const n = parseInt(k);
          if (isNaN(n) || n < 1 || n > 120) delete p.dias[k];
        });
      }
      return p;
    }
  } catch(e) {}
  return _criarEstrutura();
}

function salvarProgresso(p) {
  p.atualizado = new Date().toISOString();
  try { localStorage.setItem(PROGRESSO_KEY, JSON.stringify(p)); } catch(e) {}
}

function obterDia(numDia) {
  return carregarProgresso().dias[String(numDia)] || {};
}

function concluirDia(numDia, nota) {
  const n = parseInt(numDia);
  if (isNaN(n) || n < 1 || n > 120) return;
  const p = carregarProgresso();
  const key = String(n);
  if (!p.dias[key]) p.dias[key] = {};
  p.dias[key].concluido       = true;
  p.dias[key].data_conclusao  = new Date().toISOString().split('T')[0];
  if (nota) p.dias[key].nota  = nota;
  salvarProgresso(p);
  return p;
}

function atualizarChecklist(numDia, itemId, marcado) {
  const p   = carregarProgresso();
  const key = String(numDia);
  if (!p.dias[key]) p.dias[key] = {};
  if (!p.dias[key].checklist) p.dias[key].checklist = {};
  p.dias[key].checklist[itemId] = marcado;
  salvarProgresso(p);
}

function salvarNota(numDia, texto) {
  const p   = carregarProgresso();
  const key = String(numDia);
  if (!p.dias[key]) p.dias[key] = {};
  p.dias[key].nota             = texto;
  p.dias[key].nota_atualizada  = new Date().toISOString();
  salvarProgresso(p);
}

function calcularStats() {
  const p = carregarProgresso();
  const concluidos = Object.entries(p.dias).filter(([k, d]) => {
    const n = parseInt(k);
    return n >= 1 && n <= 120 && d.concluido === true;
  }).length;
  const pct = Math.round((concluidos / 120) * 100);
  return { concluidos, pct, total: 120 };
}

function proximoDia() {
  const p = carregarProgresso();
  for (let i = 1; i <= 120; i++) {
    if (!p.dias[String(i)] || !p.dias[String(i)].concluido) return i;
  }
  return 120;
}

function exportarProgresso() {
  const p    = carregarProgresso();
  const json = JSON.stringify(p, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const data = new Date().toISOString().split('T')[0];
  a.href     = url;
  a.download = `oab_progresso_${data}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  return data;
}

function importarProgresso(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = (e) => {
      try {
        const p = JSON.parse(e.target.result);
        if (!p.versao || !p.dias) throw new Error('Arquivo inválido');
        salvarProgresso(p);
        resolve(p);
      } catch(err) { reject(err); }
    };
    r.onerror = reject;
    r.readAsText(file);
  });
}

// ── Questões (QConcursos tracking) ──────────
// materia: string (ex: "etica", "constitucional")
// Estrutura: progresso.questoes[materia] = { total, acertos, registros: [{data,total,acertos}] }

function registrarQuestoes(materia, total, acertos) {
  if (!materia || total <= 0) return;
  const p = carregarProgresso();
  if (!p.questoes) p.questoes = {};
  if (!p.questoes[materia]) p.questoes[materia] = { total: 0, acertos: 0, registros: [] };
  p.questoes[materia].total   += parseInt(total)   || 0;
  p.questoes[materia].acertos += parseInt(acertos) || 0;
  p.questoes[materia].registros.push({
    data: new Date().toISOString().split('T')[0],
    total: parseInt(total), acertos: parseInt(acertos)
  });
  salvarProgresso(p);
  return p.questoes[materia];
}

function getQuestoesPorMateria(materia) {
  const p = carregarProgresso();
  return (p.questoes && p.questoes[materia]) || { total: 0, acertos: 0, registros: [] };
}

function getTodasQuestoes() {
  const p = carregarProgresso();
  return p.questoes || {};
}

function getTotaisQuestoes() {
  const q = getTodasQuestoes();
  let total = 0, acertos = 0;
  Object.values(q).forEach(m => { total += m.total; acertos += m.acertos; });
  return { total, acertos, pct: total > 0 ? Math.round((acertos/total)*100) : 0 };
}

// ── Tópicos estudados (auto-check ao concluir dia) ──
// key: "d{dia}_m{materiaIdx}_t{topicoIdx}"

function marcarTopicosEstudados(numDia) {
  if (typeof getDadosDia !== 'function') return;
  const dados = getDadosDia(numDia);
  if (!dados) return;
  const p = carregarProgresso();
  if (!p.topicos) p.topicos = {};
  dados.materias.forEach((mat, mIdx) => {
    if (!mat.topicos) return;
    mat.topicos.forEach((_top, tIdx) => {
      p.topicos[`d${numDia}_m${mIdx}_t${tIdx}`] = true;
    });
  });
  salvarProgresso(p);
}

function isTopicoEstudado(numDia, mIdx, tIdx) {
  const p = carregarProgresso();
  return !!(p.topicos && p.topicos[`d${numDia}_m${mIdx}_t${tIdx}`]);
}

function toggleTopicoManual(numDia, mIdx, tIdx, valor) {
  const p = carregarProgresso();
  if (!p.topicos) p.topicos = {};
  const key = `d${numDia}_m${mIdx}_t${tIdx}`;
  p.topicos[key] = valor !== undefined ? valor : !p.topicos[key];
  salvarProgresso(p);
  return p.topicos[key];
}

// ── Helpers por matéria ──────────────────────
// Dado nome de matéria (ex: "Ética Profissional"), retorna ID curto
function getMateriaId(nome) {
  const map = [
    ["Ética",          "etica"],
    ["Constitucional", "constitucional"],
    ["Processo Civil", "proc_civil"],
    ["Civil",          "civil"],
    ["Processo Penal", "proc_penal"],
    ["Processual Penal","proc_penal"],
    ["Penal",          "penal"],
    ["Processo do Trabalho","proc_trabalho"],
    ["Processual do Trabalho","proc_trabalho"],
    ["Trabalho",       "trabalho"],
    ["Tributário",     "tributario"],
    ["Administrativo", "administrativo"],
    ["Empresarial",    "empresarial"],
    ["Humanos",        "dh"],
    ["Internacional",  "internacional"],
    ["Ambiental",      "ambiental"],
    ["ECA",            "eca"],
    ["Consumidor",     "cdc"],
    ["Filosofia",      "filosofia"],
    ["Financeiro",     "financeiro"],
    ["Eleitoral",      "eleitoral"],
    ["Previdenciário", "previdenciario"],
  ];
  for (const [keyword, id] of map) {
    if (nome && nome.includes(keyword)) return id;
  }
  return "outro";
}

// Progresso de tópicos de uma matéria por ID
function getProgressoMateria(materiaId) {
  const p = carregarProgresso();
  const plano = (typeof PLANO_VDE !== 'undefined') ? PLANO_VDE : (typeof PLANO_OAB !== 'undefined' ? PLANO_OAB : []);
  if (!plano.length) return { total: 0, feitos: 0, pct: 0, dias: [] };
  let total = 0, feitos = 0;
  const dias = [];
  plano.forEach(diaData => {
    diaData.materias && diaData.materias.forEach((mat, mIdx) => {
      if (getMateriaId(mat.nome) !== materiaId) return;
      const dayTopicos = mat.topicos || [];
      const dayFeitos  = dayTopicos.filter((_,tIdx) => !!(p.topicos && p.topicos[`d${diaData.dia}_m${mIdx}_t${tIdx}`])).length;
      total  += dayTopicos.length;
      feitos += dayFeitos;
      if (dayTopicos.length > 0) {
        dias.push({ dia: diaData.dia, topicos: dayTopicos, mIdx, feitos: dayFeitos });
      }
    });
  });
  return { total, feitos, pct: total > 0 ? Math.round((feitos/total)*100) : 0, dias };
}

// Sincroniza streak da antiga chave com o progresso
(function _syncStreak() {
  const p     = carregarProgresso();
  const saved = parseInt(localStorage.getItem('ju_oab_streak') || '0');
  const date  = localStorage.getItem('ju_oab_streak_date');
  if (saved !== p.streak || date !== p.streak_data) {
    p.streak      = saved;
    p.streak_data = date;
    salvarProgresso(p);
  }
})();
