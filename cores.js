// ============================================================
// OAB · Intensidade do Rosa
// Substitui o antigo seletor multi-matiz (§5.6 da Especificação Visual v1).
// A marca é SEMPRE rosa — aqui só se ajusta a intensidade da cor de ação,
// sem nunca sair do rosa. Mantém apenas o eixo claro/escuro como tema.
// ============================================================

(function () {
  const KEY = 'oab_rose_intensity';
  const CUSTOM_KEY = 'oab_rose_custom_hex';

  // Cada nível gera a escala rosa inteira (50…900) a partir de uma cor-base,
  // para que todo elemento do site — não só botões — acompanhe a troca de tema.
  const BASES = {
    sutil:    '#B14A77', // mais empoeirado, suave
    couture:  '#C8336F', // padrão da marca
    vibrante: '#E01571', // mais saturado, punchy
  };
  const LEVELS = {
    sutil:    buildRamp(BASES.sutil),
    couture:  buildRamp(BASES.couture),
    vibrante: buildRamp(BASES.vibrante),
  };
  const ORDER = [
    ['sutil',    'Sutil'],
    ['couture',  'Couture'],
    ['vibrante', 'Vibrante'],
  ];

  // ── Cor personalizada — seletor de cor ou código hex digitado ──
  function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const num = parseInt(hex, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
  }
  function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
  }
  function lighten(hex, amt) {
    const { r, g, b } = hexToRgb(hex);
    return rgbToHex(r + (255 - r) * amt, g + (255 - g) * amt, b + (255 - b) * amt);
  }
  function darken(hex, amt) {
    const { r, g, b } = hexToRgb(hex);
    return rgbToHex(r * (1 - amt), g * (1 - amt), b * (1 - amt));
  }
  // Gera a escala completa (50…900) a partir de uma única cor-base (nível 600),
  // para que blush, soft, deep etc. sempre acompanhem a cor escolhida.
  function buildRamp(base) {
    return {
      '--rose-50':  lighten(base, 0.95),
      '--rose-100': lighten(base, 0.88),
      '--rose-300': lighten(base, 0.55),
      '--rose-500': lighten(base, 0.18),
      '--rose-600': base,
      '--rose-700': darken(base, 0.18),
      '--rose-900': darken(base, 0.55),
    };
  }
  function normalizeHex(v) {
    v = (v || '').trim();
    if (v && v[0] !== '#') v = '#' + v;
    return v;
  }
  function isValidHex(v) {
    return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(v);
  }

  function applyCustom(rawHex) {
    const hex = normalizeHex(rawHex);
    if (!isValidHex(hex)) return false;
    const root = document.documentElement;
    const rose600 = hex;
    const ramp = buildRamp(hex);
    Object.entries(ramp).forEach(([k, v]) => root.style.setProperty(k, v));
    try {
      localStorage.setItem(KEY, 'custom');
      localStorage.setItem(CUSTOM_KEY, rose600);
    } catch (e) {}
    document.querySelectorAll('._ri-sw').forEach(b => {
      b.setAttribute('aria-pressed', 'false');
      b.style.borderColor = 'var(--line)';
      b.style.color = 'var(--ink-soft)';
      b.style.fontWeight = '500';
    });
    const picker = document.getElementById('_ri-custom-picker');
    const hexField = document.getElementById('_ri-custom-hex');
    if (picker)   picker.value = rose600;
    if (hexField) hexField.value = rose600;
    return true;
  }

  // Limpa qualquer preferência do esquema multi-matiz retirado (magenta, violeta…),
  // que de outro modo sobrescreveria o design system rosa ao carregar.
  try { localStorage.removeItem('oab_accent_color'); } catch (e) {}

  function apply(level) {
    const set = LEVELS[level] ? level : 'couture';
    const root = document.documentElement;
    Object.entries(LEVELS[set]).forEach(([k, v]) => root.style.setProperty(k, v));
    try { localStorage.setItem(KEY, set); } catch (e) {}
    document.querySelectorAll('._ri-sw').forEach(b => {
      const active = b.dataset.level === set;
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
      b.style.boxShadow = active ? '0 0 0 2px var(--paper), 0 0 0 4px var(--rose-600)' : 'none';
      b.style.transform = active ? 'scale(1.08)' : 'scale(1)';
    });
    const picker = document.getElementById('_ri-custom-picker');
    const hexField = document.getElementById('_ri-custom-hex');
    if (picker)   picker.value = LEVELS[set]['--rose-600'];
    if (hexField) { hexField.value = LEVELS[set]['--rose-600']; hexField.style.borderColor = 'var(--line)'; }
  }

  function load() {
    let saved = 'couture';
    try { saved = localStorage.getItem(KEY) || 'couture'; } catch (e) {}
    if (saved === 'custom') {
      let hex = null;
      try { hex = localStorage.getItem(CUSTOM_KEY); } catch (e) {}
      if (hex && applyCustom(hex)) return;
      saved = 'couture'; // hex inválido/ausente — volta ao padrão
    }
    apply(saved);
  }

  function buildControl() {
    if (document.getElementById('_ri-wrap')) return;
    const actions = document.querySelector('.topbar-actions');
    if (!actions) return;

    const wrap = document.createElement('div');
    wrap.id = '_ri-wrap';
    wrap.style.cssText = 'position:relative;display:inline-flex;align-items:center';

    const toggle = document.createElement('button');
    toggle.className = 'btn btn-ghost';
    toggle.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:0;width:32px;height:32px;border-radius:50%';
    toggle.title = 'Cor do tema';
    toggle.setAttribute('aria-label', 'Cor do tema');
    toggle.innerHTML = '<span style="width:18px;height:18px;border-radius:50%;background:var(--rose-600);display:inline-block;flex-shrink:0;border:1px solid rgba(0,0,0,.08)"></span>';
    toggle.addEventListener('click', e => { e.stopPropagation(); _toggle(); });
    wrap.appendChild(toggle);

    const dd = document.createElement('div');
    dd.id = '_ri-dd';
    dd.style.cssText = [
      'display:none', 'position:absolute', 'top:calc(100% + 8px)', 'right:0',
      'background:var(--paper)', 'border:1px solid var(--line)', 'border-radius:var(--radius)',
      'box-shadow:var(--shadow-lg)', 'padding:1rem', 'min-width:200px', 'z-index:9999'
    ].join(';');
    dd.innerHTML = '<div style="font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-faded);margin-bottom:.7rem;font-weight:600">Cor do tema</div>';

    const col = document.createElement('div');
    col.style.cssText = 'display:flex;align-items:center;gap:.6rem';
    ORDER.forEach(([lvl, label]) => {
      const b = document.createElement('button');
      b.className = '_ri-sw';
      b.dataset.level = lvl;
      b.title = label;
      b.setAttribute('aria-label', label);
      b.style.cssText = 'width:28px;height:28px;border-radius:50%;border:none;cursor:pointer;transition:all .2s;background:' + LEVELS[lvl]['--rose-600'];
      b.addEventListener('click', () => { apply(lvl); _toggle(false); });
      col.appendChild(b);
    });
    dd.appendChild(col);

    const divider = document.createElement('div');
    divider.style.cssText = 'height:1px;background:var(--line);margin:.75rem 0';
    dd.appendChild(divider);

    const customLabel = document.createElement('div');
    customLabel.style.cssText = 'font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-faded);margin-bottom:.5rem;font-weight:600';
    customLabel.textContent = 'Cor personalizada';
    dd.appendChild(customLabel);

    const customRow = document.createElement('div');
    customRow.style.cssText = 'display:flex;align-items:center;gap:.5rem';

    const currentRose = getComputedStyle(document.documentElement).getPropertyValue('--rose-600').trim() || '#C8336F';

    const picker = document.createElement('input');
    picker.type = 'color';
    picker.id = '_ri-custom-picker';
    picker.value = currentRose;
    picker.title = 'Escolher cor';
    picker.style.cssText = 'width:34px;height:34px;padding:0;border:1px solid var(--line);border-radius:var(--radius-sm);cursor:pointer;background:none;flex-shrink:0';
    picker.addEventListener('input', () => applyCustom(picker.value));

    const hexField = document.createElement('input');
    hexField.type = 'text';
    hexField.id = '_ri-custom-hex';
    hexField.placeholder = '#RRGGBB';
    hexField.maxLength = 7;
    hexField.value = currentRose;
    hexField.style.cssText = 'flex:1;min-width:0;padding:.45rem .6rem;border:1px solid var(--line);border-radius:var(--radius-sm);font-size:.8rem;font-family:inherit;background:var(--paper-tint);color:var(--ink)';
    hexField.addEventListener('input', () => { hexField.style.borderColor = 'var(--line)'; });
    hexField.addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      if (!applyCustom(hexField.value)) hexField.style.borderColor = '#c0392b';
    });
    hexField.addEventListener('blur', () => {
      if (hexField.value && !applyCustom(hexField.value)) hexField.style.borderColor = '#c0392b';
    });

    customRow.appendChild(picker);
    customRow.appendChild(hexField);
    dd.appendChild(customRow);

    dd.addEventListener('click', e => e.stopPropagation());
    wrap.appendChild(dd);

    actions.insertBefore(wrap, actions.firstChild);
    document.addEventListener('click', () => _toggle(false));
  }

  let _open = false;
  function _toggle(force) {
    _open = force !== undefined ? force : !_open;
    const dd = document.getElementById('_ri-dd');
    if (dd) dd.style.display = _open ? 'block' : 'none';
  }

  // Re-aplica ao alternar claro/escuro (mantém compat com toggleTheme).
  const _origThemeToggle = window.toggleTheme;
  if (typeof _origThemeToggle === 'function') {
    window.toggleTheme = function () { _origThemeToggle(); setTimeout(load, 60); };
  }

  document.addEventListener('DOMContentLoaded', () => {
    const page = location.pathname.split('/').pop();
    if (!page || page === '' || page === 'index.html') buildControl();
    load();
  });

  // API compatível com chamadas externas existentes.
  window._coresOAB = { apply, reset: () => apply('couture') };
})();
