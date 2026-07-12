// ============================================
// OAB · Plano de Estudos
// ============================================

// DATA DO SISTEMA
// Por padrão usa a data real, mas você pode simular datas pra testar
function getCurrentDate() {
  // Tenta pegar data simulada do localStorage (formato: YYYY-MM-DD)
  const simulated = localStorage.getItem('simulatedDate');
  if (simulated) {
    const [y, m, d] = simulated.split('-').map(Number);
    return new Date(y, m - 1, d); // mês é 0-indexed
  }
  return new Date();
}

// Usar no console pra testar: setSimulatedDate('2026-06-02')
function setSimulatedDate(dateStr) {
  localStorage.setItem('simulatedDate', dateStr);
  window.location.reload();
}

// Limpar simulação: clearSimulatedDate()
function clearSimulatedDate() {
  localStorage.removeItem('simulatedDate');
  window.location.reload();
}

// DATAS IMPORTANTES
const EXAM_DATE   = new Date(2027, 0, 10);  // 10 de janeiro de 2027 — OAB 48
const STUDY_START = new Date(2026, 6, 10);  // 10 de julho de 2026

// ── Calendário de dias úteis ───────────────────
function isWeekday(date) {
  const dow = date.getDay();
  return dow >= 1 && dow <= 5;
}

// Retorna o número do dia de estudo (1-N) para uma data calendar.
// Conta apenas dias úteis a partir de 10/07/2026.
function getStudyDayForDate(date) {
  const d = new Date(date); d.setHours(0,0,0,0);
  const start = new Date(2026, 6, 10); start.setHours(0,0,0,0);
  if (d < start) return 0;
  let count = 0;
  const cur = new Date(start);
  while (cur <= d) {
    if (isWeekday(cur)) count++;
    cur.setDate(cur.getDate() + 1);
  }
  return Math.min(count, 120);
}

// Retorna true se hoje está na semana de revisão estratégica (Jan 4-8, 2027)
function isRevisaoEstrategica() {
  const d = getCurrentDate();
  return d.getFullYear() === 2027 && d.getMonth() === 0 && d.getDate() >= 4 && d.getDate() <= 8;
}

// Retorna true se hoje é o dia da prova (10 de janeiro de 2027)
function isDiaProva() {
  const d = getCurrentDate();
  return d.getFullYear() === 2027 && d.getMonth() === 0 && d.getDate() === 10;
}

// Nomes dos meses e dias em PT-BR
const MONTHS_PT = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const DAYS_PT   = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];

function getFormattedDate(date) {
  const d = date || getCurrentDate();
  return `${DAYS_PT[d.getDay()]}, ${d.getDate()} de ${MONTHS_PT[d.getMonth()].toLowerCase()}`;
}

function getMonthYear(date) {
  const d = date || getCurrentDate();
  return `${MONTHS_PT[d.getMonth()]} ${d.getFullYear()}`;
}

// Calcular dias restantes até a prova
function getDaysUntilExam() {
  const today = getCurrentDate();
  const diff = EXAM_DATE - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// Retorna o dia de estudo atual baseado no calendário.
// Fins de semana retornam o número do último dia útil.
function getStudyDay() {
  let today = getCurrentDate();
  today.setHours(0,0,0,0);
  if (!isWeekday(today)) {
    const prev = new Date(today);
    while (!isWeekday(prev)) prev.setDate(prev.getDate() - 1);
    return getStudyDayForDate(prev);
  }
  return getStudyDayForDate(today) || 1;
}

// THEME TOGGLE
(function() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);

  const label = document.querySelector('.theme-label');
  if (label) label.textContent = next === 'dark' ? 'Modo claro' : 'Modo escuro';
}

document.addEventListener('DOMContentLoaded', () => {
  const label = document.querySelector('.theme-label');
  if (label) {
    const theme = document.documentElement.getAttribute('data-theme');
    label.textContent = theme === 'dark' ? 'Modo claro' : 'Modo escuro';
  }

  // Atualizar contadores na página
  updateCountdowns();

  // Badge de Revisar e streak — calculados após todos os scripts carregarem
  setTimeout(() => {
    atualizarBadgeRevisar();
    // Streak global: atualiza qualquer .streak-pill .count na página
    try {
      if (typeof carregarProgresso === 'function') {
        const _p = carregarProgresso();
        document.querySelectorAll('.streak-pill .count').forEach(el => {
          el.textContent = _p.streak || 0;
        });
      }
    } catch(e) {}
  }, 0);
});

function atualizarBadgeRevisar() {
  const links = document.querySelectorAll('a.nav-link[href="revisar.html"]');
  if (!links.length) return;
  // Garante que cada link de Revisar tenha um badge — cria se não existir
  const badges = [];
  links.forEach(link => {
    let b = link.querySelector('.badge');
    if (!b) {
      b = document.createElement('span');
      b.className = 'badge';
      b.style.display = 'none';
      b.textContent = '0';
      link.appendChild(b);
    }
    badges.push(b);
  });
  let count = 0;
  try {
    if (typeof carregarProgresso === 'function') {
      const prog    = carregarProgresso();
      const hoje    = new Date();
      const hojeStr = hoje.toISOString().split('T')[0];
      Object.entries(prog.dias || {}).forEach(([numDia, d]) => {
        if (!d.concluido || !d.data_conclusao) return;
        const diff = Math.round((hoje - new Date(d.data_conclusao)) / 864e5);
        if (diff < 1) return;                          // concluído hoje — ainda não é revisão
        if (d.ultima_revisao === hojeStr) return;      // já foi revisado hoje
        if (typeof getDadosDia === 'function') {       // dia precisa existir no plano
          if (!getDadosDia(parseInt(numDia))) return;
        }
        count++;
      });
    }
  } catch(e) {}
  badges.forEach(b => {
    if (count > 0) { b.textContent = count; b.style.display = ''; }
    else b.style.display = 'none';
  });
}

// Atualizar todos os contadores de dias
function updateCountdowns() {
  const today = getCurrentDate();
  const studyDay = getStudyDay();
  const daysLeft = getDaysUntilExam();

  // Countdown até a prova
  document.querySelectorAll('.countdown .number, [data-countdown]').forEach(el => {
    el.textContent = daysLeft;
  });

  // Dia atual do plano
  document.querySelectorAll('[data-study-day]').forEach(el => {
    el.textContent = studyDay > 0 ? studyDay : '—';
  });

  // Número do dia no mês (ex: 19)
  document.querySelectorAll('[data-today-day]').forEach(el => {
    el.textContent = today.getDate();
  });

  // Nome do mês (ex: Junho)
  document.querySelectorAll('[data-today-month]').forEach(el => {
    el.textContent = MONTHS_PT[today.getMonth()];
  });

  // Data completa no breadcrumb (ex: Terça, 19 de maio)
  document.querySelectorAll('[data-full-date]').forEach(el => {
    el.textContent = getFormattedDate(today);
  });

  // Mês e ano para painel (ex: Junho 2026)
  document.querySelectorAll('[data-month-year]').forEach(el => {
    el.textContent = getMonthYear(today);
  });
}

// CONFETE DE PÉTALAS
function showPetals() {
  const petals = ['🌸', '🌺', '💮', '🌷'];
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.textContent = petals[Math.floor(Math.random() * petals.length)];
      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.animationDuration = (2 + Math.random() * 2) + 's';
      petal.style.fontSize = (1 + Math.random() * 1) + 'rem';
      document.body.appendChild(petal);
      setTimeout(() => petal.remove(), 4000);
    }, i * 80);
  }
}

// MOBILE NAV TOGGLE — com backdrop e fecho ao tocar fora / num link
function toggleSidebar() {
  const sb = document.querySelector('.sidebar');
  if (!sb) return;
  const open = sb.classList.toggle('open');
  let bd = document.getElementById('sidebar-backdrop');
  if (open) {
    if (!bd) {
      bd = document.createElement('div');
      bd.id = 'sidebar-backdrop';
      bd.addEventListener('click', toggleSidebar);
      document.body.appendChild(bd);
    }
    bd.classList.add('show');
    document.body.style.overflow = 'hidden';
  } else {
    if (bd) bd.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Fecha o menu mobile ao clicar num link da nav
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.sidebar .nav-link').forEach(function (a) {
    a.addEventListener('click', function () {
      const sb = document.querySelector('.sidebar');
      if (sb && sb.classList.contains('open')) toggleSidebar();
    });
  });
});

// ── Sidebar retrátil (desktop) — estado persiste entre páginas ──
const SIDEBAR_COLLAPSE_KEY = 'oab_sidebar_collapsed';

function toggleSidebarCollapse() {
  const app = document.querySelector('.app');
  const btn = document.querySelector('.sidebar-toggle-btn');
  if (!app) return;
  const collapsed = app.classList.toggle('sidebar-collapsed');
  if (btn) {
    btn.classList.toggle('collapsed', collapsed);
    btn.textContent = collapsed ? '›' : '‹';
    btn.title = collapsed ? 'Mostrar menu' : 'Esconder menu';
  }
  localStorage.setItem(SIDEBAR_COLLAPSE_KEY, collapsed ? '1' : '0');
}

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem(SIDEBAR_COLLAPSE_KEY) !== '1') return;
  const app = document.querySelector('.app');
  const btn = document.querySelector('.sidebar-toggle-btn');
  if (app) app.classList.add('sidebar-collapsed');
  if (btn) {
    btn.classList.add('collapsed');
    btn.textContent = '›';
    btn.title = 'Mostrar menu';
  }
});

// Modo Foco existe apenas no Caderno Legislativo (clToggleFocus, definido
// inline em caderno-legislativo.html) — não é mais injetado globalmente.

// ============================================
// NOVAS FUNÇÕES (STREAK, CHECKLIST, MOOD, ERROS)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. STREAK DE ESTUDOS (Dias seguidos)
    const streakElement = document.getElementById('streak-count');
    let streak = parseInt(localStorage.getItem('ju_oab_streak') || '0');

    if (streakElement) streakElement.innerText = streak;

    window.baterMetaDoDia = function() {
        const todayStr = getCurrentDate().toISOString().split('T')[0];
        const lastBeat = localStorage.getItem('ju_oab_streak_date');

        if (lastBeat === todayStr) {
            alert('Você já bateu a meta hoje, Ju! Volta amanhã e continue o streak! 💖');
            return;
        }

        streak++;
        localStorage.setItem('ju_oab_streak', streak);
        localStorage.setItem('ju_oab_streak_date', todayStr);

        if (streakElement) streakElement.innerText = streak;
        showPetals();
        setTimeout(() => alert(`Meta batida! Streak: ${streak} dias seguidos! 🌸`), 300);
    };

    // 2. CHECKLIST DE TAREFAS
    const checkboxes = document.querySelectorAll('.task-check');
    
    checkboxes.forEach(box => {
        const taskId = box.id;
        const isChecked = localStorage.getItem(taskId) === 'true';
        box.checked = isChecked;

        box.addEventListener('change', (e) => {
            localStorage.setItem(taskId, e.target.checked);
        });
    });

    // 3. MOOD TRACKER (Como estou me sentindo hoje?)
    const moodSelect = document.getElementById('mood-selector'); 
    if (moodSelect) {
        const today = getCurrentDate().toISOString().split('T')[0];
        moodSelect.value = localStorage.getItem(`mood_${today}`) || '';

        moodSelect.addEventListener('change', (e) => {
            localStorage.setItem(`mood_${today}`, e.target.value);
        });
    }

    // 4. BANCO DE ERROS RÁPIDO
    const errorTextArea = document.getElementById('banco-erros');
    if(errorTextArea) {
        errorTextArea.value = localStorage.getItem('ju_banco_erros') || '';
        
        errorTextArea.addEventListener('input', (e) => {
            localStorage.setItem('ju_banco_erros', e.target.value);
        });
    }
});