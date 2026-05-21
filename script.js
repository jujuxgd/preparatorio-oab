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
const EXAM_DATE = new Date(2026, 11, 20); // 20 de dezembro de 2026
const STUDY_START = new Date(2026, 5, 1); // 1º de junho de 2026
const STUDY_END = new Date(2026, 6, 30);  // 30 de julho de 2026 (dia 60)

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

// Calcular qual dia do plano você está (1-60)
function getStudyDay() {
  const today = getCurrentDate();
  if (today < STUDY_START) return 0; // ainda não começou
  if (today > STUDY_END) return 61; // já acabou
  
  const diff = today - STUDY_START;
  return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
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
  const badges = document.querySelectorAll('a[href="revisar.html"] .badge');
  if (!badges.length) return;
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

// MOBILE NAV TOGGLE
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('open');
}

// MODO FOCO — funciona em todas as páginas
function toggleFocusMode() {
  document.body.classList.toggle('focus-mode');
}

// Injeta barra Mac e botão foco em todas as páginas
document.addEventListener('DOMContentLoaded', () => {
  // Barra de janela estilo Mac (title bar com traffic lights)
  const mainEl = document.querySelector('main');
  if (mainEl && !mainEl.querySelector('.focus-mac-bar')) {
    const pageTitle = document.title.replace('Preparatório - OAB', 'OAB Preparatório').replace(' | ', ' · ') || 'OAB Preparatório';
    const bar = document.createElement('div');
    bar.className = 'focus-mac-bar';
    bar.innerHTML = `
      <div class="focus-mac-lights">
        <span class="fml fml-close" onclick="toggleFocusMode()" title="Sair do foco"></span>
        <span class="fml fml-min"></span>
        <span class="fml fml-max"></span>
      </div>
      <span class="focus-mac-title">${pageTitle}</span>
      <div style="width:54px"></div>`;
    mainEl.prepend(bar);
  }

  // Botão foco na topbar-actions — apenas se não houver um já
  const topbarActions = document.querySelector('.topbar-actions');
  if (topbarActions && !topbarActions.querySelector('[data-focus-btn]')) {
    const focusBtn = document.createElement('button');
    focusBtn.className = 'icon-btn';
    focusBtn.setAttribute('data-focus-btn', '1');
    focusBtn.title = 'Modo foco';
    focusBtn.textContent = '✦';
    focusBtn.onclick = toggleFocusMode;
    topbarActions.prepend(focusBtn);
  }
});

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