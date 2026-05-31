// ============================================================
// OAB · Seletor de Cor Global do Tema
// Injeta botão no .topbar-actions e aplica cor via CSS vars
// ============================================================

(function () {
  const STORAGE_KEY = 'oab_accent_color';
  const DEFAULT_BASE = '#ff4da6';
  const DEFAULT_DEEP = '#e8006e';

  const PRESETS = [
    { nome: 'Rosa Choque',  base: '#ff4da6', deep: '#e8006e' },
    { nome: 'Magenta',      base: '#e040fb', deep: '#aa00ff' },
    { nome: 'Violeta',      base: '#7c4dff', deep: '#651fff' },
    { nome: 'Azul Royal',   base: '#448aff', deep: '#1565c0' },
    { nome: 'Ciano',        base: '#00bcd4', deep: '#00838f' },
    { nome: 'Esmeralda',    base: '#26c280', deep: '#00875a' },
    { nome: 'Coral',        base: '#ff6e40', deep: '#dd2c00' },
    { nome: 'Âmbar',        base: '#ffca28', deep: '#f57f17' },
  ];

  // ── Conversões de cor ────────────────────────
  function hexToRgb(hex) {
    return [
      parseInt(hex.slice(1, 3), 16),
      parseInt(hex.slice(3, 5), 16),
      parseInt(hex.slice(5, 7), 16),
    ];
  }

  function hexToHsl(hex) {
    let [r, g, b] = hexToRgb(hex).map(v => v / 255);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s;
    const l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
      else if (max === g) h = ((b - r) / d + 2) / 6;
      else h = ((r - g) / d + 4) / 6;
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }

  function hslToHex(h, s, l) {
    s /= 100; l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
      const k = (n + h / 30) % 12;
      const c = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * c).toString(16).padStart(2, '0');
    };
    return '#' + f(0) + f(8) + f(4);
  }

  // ── Aplica a cor acento globalmente ──────────
  function applyAccentColor(baseHex, deepHex) {
    if (!baseHex || baseHex.length < 4) return;
    // Normaliza hex curto (#abc → #aabbcc)
    if (baseHex.length === 4) baseHex = '#' + baseHex[1] + baseHex[1] + baseHex[2] + baseHex[2] + baseHex[3] + baseHex[3];

    const [h, s, l] = hexToHsl(baseHex);
    const deep = deepHex || hslToHex(h, Math.min(s + 5, 100), Math.max(l - 18, 8));
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const root = document.documentElement;

    // Sempre: cores de acento principal
    root.style.setProperty('--rose', baseHex);
    root.style.setProperty('--rose-deep', deep);

    // Hues derivadas para paleta completa
    const hWarm = (h + 15)  % 360;   // champagne / callout dica
    const hCool = (h - 30 + 360) % 360; // lavender / constitucional
    const hComp = (h + 150) % 360;   // sage / trabalho/processo

    if (isDark) {
      // Acento
      root.style.setProperty('--rose-soft',  hslToHex(h,     60, 15));
      root.style.setProperty('--blush',      hslToHex(h,     50, 10));
      root.style.setProperty('--nude',       hslToHex(h,     45, 11));
      // Paleta secundária
      root.style.setProperty('--champagne',  hslToHex(hWarm, 45, 13));
      root.style.setProperty('--lavender',   hslToHex(hCool, 45, 13));
      root.style.setProperty('--sage',       hslToHex(hComp, 30, 12));
      root.style.setProperty('--gold',       hslToHex(hWarm, 55, 52));
      // Backgrounds
      root.style.setProperty('--bg',         hslToHex(h,     40,  6));
      root.style.setProperty('--bg-soft',    hslToHex(h,     45,  9));
      root.style.setProperty('--bg-deep',    hslToHex(h,     50, 12));
      // Bordas
      root.style.setProperty('--line',       hslToHex(h,     55, 14));
      root.style.setProperty('--line-soft',  hslToHex(h,     40, 10));
      // Texto
      root.style.setProperty('--ink',        hslToHex(h,     35, 92));
      root.style.setProperty('--ink-soft',   hslToHex(h,     25, 72));
      root.style.setProperty('--ink-faded',  hslToHex(h,     18, 52));
      root.style.setProperty('--ink-ghost',  hslToHex(h,     15, 30));
    } else {
      const sat = s;
      // Acento
      root.style.setProperty('--rose-soft',  hslToHex(h,     Math.max(sat - 35, 8),  91));
      root.style.setProperty('--blush',      hslToHex(h,     Math.max(sat - 55, 4),  96));
      root.style.setProperty('--nude',       hslToHex(h,     Math.max(sat - 45, 6),  95));
      // Paleta secundária — varia com o tom escolhido
      root.style.setProperty('--champagne',  hslToHex(hWarm, Math.max(sat - 40, 8),  93));
      root.style.setProperty('--lavender',   hslToHex(hCool, Math.max(sat - 40, 8),  91));
      root.style.setProperty('--sage',       hslToHex(hComp, Math.max(sat - 55, 5),  90));
      root.style.setProperty('--gold',       hslToHex(hWarm, Math.min(sat, 75),       55));
      // Highlights
      root.style.setProperty('--highlight-1', hslToHex(h,    Math.max(sat - 20, 18), 87));
      root.style.setProperty('--highlight-2', hslToHex(h,    Math.max(sat - 35, 8),  91));
      root.style.setProperty('--highlight-3', hslToHex(hWarm, Math.max(sat - 40, 8), 92));
      root.style.setProperty('--highlight-4', hslToHex(hCool, Math.max(sat - 40, 8), 91));
      // Backgrounds
      root.style.setProperty('--bg',         hslToHex(h,     Math.max(sat - 60, 3),  98));
      root.style.setProperty('--bg-soft',    hslToHex(h,     Math.max(sat - 50, 5),  95));
      root.style.setProperty('--bg-deep',    hslToHex(h,     Math.max(sat - 40, 8),  91));
      // Bordas
      root.style.setProperty('--line',       hslToHex(h,     Math.max(sat - 30, 12), 85));
      root.style.setProperty('--line-soft',  hslToHex(h,     Math.max(sat - 55, 4),  93));
      // Texto — levemente tingido pelo hue para total imersão
      root.style.setProperty('--ink',        hslToHex(h,     30, 12));
      root.style.setProperty('--ink-soft',   hslToHex(h,     20, 35));
      root.style.setProperty('--ink-faded',  hslToHex(h,     15, 58));
      root.style.setProperty('--ink-ghost',  hslToHex(h,     20, 78));
    }

    // Sombras com tom da cor
    const [r, g, b] = hexToRgb(deep);
    root.style.setProperty('--shadow-sm', `0 1px 2px rgba(${r},${g},${b},.08), 0 2px 4px rgba(${r},${g},${b},.05)`);
    root.style.setProperty('--shadow',    `0 2px 4px rgba(${r},${g},${b},.10), 0 8px 20px rgba(${r},${g},${b},.08)`);
    root.style.setProperty('--shadow-lg', `0 8px 24px rgba(${r},${g},${b},.18), 0 16px 40px rgba(${r},${g},${b},.12)`);

    // Aurora blobs — fundo decorativo
    const _rgba = (hue, sat, lig, alpha) => {
      const [rr, gg, bb] = hexToRgb(hslToHex(hue, sat, lig));
      return `rgba(${rr},${gg},${bb},${alpha})`;
    };
    const ab1 = document.querySelector('.ab1');
    const ab2 = document.querySelector('.ab2');
    const ab3 = document.querySelector('.ab3');
    const ab4 = document.querySelector('.ab4');
    if (ab1) {
      if (isDark) {
        ab1.style.background = _rgba(h,     30, 18, 0.65);
        ab2 && (ab2.style.background = _rgba(hCool, 25, 16, 0.50));
        ab3 && (ab3.style.background = _rgba(hWarm, 28, 17, 0.55));
        ab4 && (ab4.style.background = _rgba(h,     25, 15, 0.50));
      } else {
        ab1.style.background = _rgba(h,     Math.min(s, 65), 78, 0.45);
        ab2 && (ab2.style.background = _rgba(hCool, Math.min(s - 15, 55), 80, 0.38));
        ab3 && (ab3.style.background = _rgba(hWarm, Math.min(s - 10, 60), 83, 0.42));
        ab4 && (ab4.style.background = _rgba(h,     Math.min(s - 5, 60),  82, 0.35));
      }
    }

    // Coleta todas as variáveis aplicadas para enviar aos iframes
    const _vars = {};
    ['--rose','--rose-deep','--rose-soft','--blush','--nude','--champagne','--lavender','--sage',
     '--gold','--bg','--bg-soft','--bg-deep','--line','--line-soft','--ink','--ink-soft',
     '--ink-faded','--ink-ghost','--highlight-1','--highlight-2','--highlight-3','--highlight-4',
     '--shadow-sm','--shadow','--shadow-lg'].forEach(v => {
      _vars[v] = root.style.getPropertyValue(v);
    });
    // Propaga para todos os iframes abertos
    document.querySelectorAll('iframe').forEach(fr => {
      try { fr.contentWindow.postMessage({ type: 'set-accent', vars: _vars }, '*'); } catch {}
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ base: baseHex, deep }));
    _updateUI(baseHex);
  }

  function _loadSaved() {
    try {
      const s = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (s && s.base) applyAccentColor(s.base, s.deep);
    } catch {}
  }

  // ── Sincroniza UI do picker ──────────────────
  function _updateUI(baseHex) {
    const dot = document.getElementById('_cpd-dot');
    if (dot) dot.style.background = baseHex;
    const inp = document.getElementById('_cpd-custom');
    if (inp) inp.value = baseHex;
    document.querySelectorAll('._cpd-sw').forEach(sw => {
      const isActive = sw.dataset.color === baseHex;
      sw.style.outline = isActive ? '2.5px solid var(--ink)' : 'none';
      sw.style.outlineOffset = '2px';
      sw.style.transform = isActive ? 'scale(1.12)' : 'scale(1)';
    });
  }

  // ── Constrói e injeta o picker ───────────────
  function _buildPicker() {
    if (document.getElementById('_cpd-wrap')) return;
    const actions = document.querySelector('.topbar-actions');
    if (!actions) return;

    const wrap = document.createElement('div');
    wrap.id = '_cpd-wrap';
    wrap.style.cssText = 'position:relative;display:inline-flex;align-items:center';

    // Botão de abertura
    const toggle = document.createElement('button');
    toggle.className = 'btn btn-ghost';
    toggle.style.cssText = 'display:flex;align-items:center;gap:0.45rem;font-size:0.78rem;padding:0.4rem 0.75rem';
    toggle.title = 'Mudar cor do tema';
    toggle.innerHTML = `<span id="_cpd-dot" style="width:13px;height:13px;border-radius:50%;background:var(--rose);display:inline-block;border:2px solid rgba(0,0,0,.1);flex-shrink:0;transition:background .3s"></span>Cores`;
    toggle.addEventListener('click', e => { e.stopPropagation(); _toggle(); });
    wrap.appendChild(toggle);

    // Dropdown
    const dd = document.createElement('div');
    dd.id = '_cpd-dd';
    dd.style.cssText = [
      'display:none', 'position:absolute', 'top:calc(100% + 8px)', 'right:0',
      'background:var(--paper)', 'border:1px solid var(--line)', 'border-radius:var(--radius)',
      'box-shadow:var(--shadow-lg)', 'padding:1.1rem', 'min-width:256px',
      'z-index:9999', 'animation:fadeInUp .2s ease'
    ].join(';');

    // Título
    dd.innerHTML = `<div style="font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-faded);margin-bottom:.8rem;font-weight:700">Cor do tema</div>`;

    // Grade de presets
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(4,1fr);gap:.45rem;margin-bottom:.9rem';
    PRESETS.forEach(p => {
      const sw = document.createElement('button');
      sw.className = '_cpd-sw';
      sw.dataset.color = p.base;
      sw.title = p.nome;
      sw.style.cssText = `aspect-ratio:1;border-radius:50%;background:${p.base};border:none;cursor:pointer;transition:all .15s`;
      sw.addEventListener('click', () => { applyAccentColor(p.base, p.deep); _toggle(false); });
      grid.appendChild(sw);
    });
    dd.appendChild(grid);

    // Separador + input personalizado
    const customWrap = document.createElement('div');
    customWrap.style.cssText = 'border-top:1px solid var(--line);padding-top:.8rem;margin-bottom:.6rem';
    customWrap.innerHTML = `
      <div style="font-size:.7rem;color:var(--ink-faded);margin-bottom:.45rem;font-weight:600">Cor personalizada</div>
      <div style="display:flex;gap:.5rem;align-items:center">
        <input type="color" id="_cpd-custom" value="${DEFAULT_BASE}"
          style="width:44px;height:32px;border:1px solid var(--line);border-radius:var(--radius-sm);cursor:pointer;background:none;padding:2px 3px;flex-shrink:0">
        <div style="flex:1">
          <input type="text" id="_cpd-hex" placeholder="#ff4da6" maxlength="7"
            style="width:100%;padding:.35rem .6rem;border:1px solid var(--line);border-radius:var(--radius-sm);font-size:.82rem;background:var(--bg-soft);color:var(--ink);font-family:monospace">
        </div>
        <button id="_cpd-apply" class="btn btn-primary" style="font-size:.72rem;padding:.35rem .7rem;white-space:nowrap">Aplicar</button>
      </div>`;
    dd.appendChild(customWrap);

    // Resetar
    const resetBtn = document.createElement('button');
    resetBtn.className = 'btn btn-ghost';
    resetBtn.style.cssText = 'width:100%;font-size:.7rem;padding:.3rem';
    resetBtn.textContent = '↺ Resetar para rosa choque';
    resetBtn.addEventListener('click', () => { applyAccentColor(DEFAULT_BASE, DEFAULT_DEEP); _toggle(false); });
    dd.appendChild(resetBtn);

    wrap.appendChild(dd);

    // Bind eventos do dropdown após inserção
    dd.addEventListener('click', e => e.stopPropagation());
    setTimeout(() => {
      const colInput = document.getElementById('_cpd-custom');
      const hexInput = document.getElementById('_cpd-hex');
      const applyBtn = document.getElementById('_cpd-apply');
      let previewTimer;

      // Preview em tempo real ao mover o seletor de cor
      if (colInput) colInput.addEventListener('input', e => {
        clearTimeout(previewTimer);
        previewTimer = setTimeout(() => {
          applyAccentColor(e.target.value);
          if (hexInput) hexInput.value = e.target.value;
        }, 30);
      });

      // Aplicar pelo campo de texto hex
      if (hexInput) {
        hexInput.addEventListener('input', e => {
          let v = e.target.value.trim();
          if (!v.startsWith('#')) v = '#' + v;
          if (/^#[0-9a-fA-F]{6}$/.test(v)) {
            applyAccentColor(v);
            if (colInput) colInput.value = v;
          }
        });
      }

      // Botão Aplicar (confirmação)
      if (applyBtn) applyBtn.addEventListener('click', () => {
        let v = (hexInput ? hexInput.value.trim() : '') || (colInput ? colInput.value : DEFAULT_BASE);
        if (!v.startsWith('#')) v = '#' + v;
        if (/^#[0-9a-fA-F]{3,6}$/.test(v)) applyAccentColor(v);
        _toggle(false);
      });
    }, 0);

    actions.insertBefore(wrap, actions.firstChild);

    // Fechar ao clicar fora
    document.addEventListener('click', () => _toggle(false));
  }

  let _open = false;
  function _toggle(forceState) {
    _open = forceState !== undefined ? forceState : !_open;
    const dd = document.getElementById('_cpd-dd');
    if (!dd) return;
    dd.style.display = _open ? 'block' : 'none';
    if (_open) {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        _updateUI(saved && saved.base ? saved.base : DEFAULT_BASE);
      } catch { _updateUI(DEFAULT_BASE); }
    }
  }

  // Re-aplica cor quando tema escuro/claro é alternado
  const _origThemeToggle = window.toggleTheme;
  if (typeof _origThemeToggle === 'function') {
    window.toggleTheme = function () {
      _origThemeToggle();
      setTimeout(_loadSaved, 60);
    };
  }

  // ── Inicialização ────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    _buildPicker();
    _loadSaved();
  });

  // Estilos do picker
  const s = document.createElement('style');
  s.textContent = `
    ._cpd-sw:hover { transform: scale(1.18) !important; filter: brightness(1.1); }
    #_cpd-dd { animation: fadeInUp .2s ease; }
  `;
  document.head.appendChild(s);

  // Expõe globalmente para uso externo se necessário
  window._coresOAB = { apply: applyAccentColor, reset: () => applyAccentColor(DEFAULT_BASE, DEFAULT_DEEP) };
})();
