// ============================================================
// OAB · Intensidade do Rosa
// Substitui o antigo seletor multi-matiz (§5.6 da Especificação Visual v1).
// A marca é SEMPRE rosa — aqui só se ajusta a intensidade da cor de ação,
// sem nunca sair do rosa. Mantém apenas o eixo claro/escuro como tema.
// ============================================================

(function () {
  const KEY = 'oab_rose_intensity';

  // Cada nível ajusta apenas os tokens fixos da escala rosa (ação primária).
  const LEVELS = {
    sutil:    { '--rose-600': '#B83A6E', '--rose-500': '#CC4A7E' },
    couture:  { '--rose-600': '#C8336F', '--rose-500': '#D94B86' }, // padrão da marca
    vibrante: { '--rose-600': '#D6266F', '--rose-500': '#E84C8A' },
  };
  const ORDER = [
    ['sutil',    'Sutil'],
    ['couture',  'Couture'],
    ['vibrante', 'Vibrante'],
  ];

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
      b.style.borderColor = active ? 'var(--rose-600)' : 'var(--line)';
      b.style.color = active ? 'var(--rose-deep)' : 'var(--ink-soft)';
      b.style.fontWeight = active ? '600' : '500';
    });
  }

  function load() {
    let saved = 'couture';
    try { saved = localStorage.getItem(KEY) || 'couture'; } catch (e) {}
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
    toggle.style.cssText = 'display:flex;align-items:center;gap:.45rem;font-size:.78rem;padding:.4rem .75rem';
    toggle.title = 'Intensidade do rosa';
    toggle.innerHTML = '<span style="width:12px;height:12px;border-radius:50%;background:var(--rose-600);display:inline-block;flex-shrink:0"></span>Rosa';
    toggle.addEventListener('click', e => { e.stopPropagation(); _toggle(); });
    wrap.appendChild(toggle);

    const dd = document.createElement('div');
    dd.id = '_ri-dd';
    dd.style.cssText = [
      'display:none', 'position:absolute', 'top:calc(100% + 8px)', 'right:0',
      'background:var(--paper)', 'border:1px solid var(--line)', 'border-radius:var(--radius)',
      'box-shadow:var(--shadow-lg)', 'padding:1rem', 'min-width:200px', 'z-index:9999'
    ].join(';');
    dd.innerHTML = '<div style="font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-faded);margin-bottom:.7rem;font-weight:600">Intensidade do rosa</div>';

    const col = document.createElement('div');
    col.style.cssText = 'display:flex;flex-direction:column;gap:.4rem';
    ORDER.forEach(([lvl, label]) => {
      const b = document.createElement('button');
      b.className = '_ri-sw';
      b.dataset.level = lvl;
      b.style.cssText = 'display:flex;align-items:center;gap:.6rem;padding:.5rem .65rem;border:1px solid var(--line);border-radius:var(--radius-sm);background:var(--paper-tint);cursor:pointer;font-size:.82rem;color:var(--ink-soft);transition:all .2s;text-align:left';
      b.innerHTML = '<span style="width:14px;height:14px;border-radius:50%;background:' + LEVELS[lvl]['--rose-600'] + ';flex-shrink:0"></span>' + label;
      b.addEventListener('click', () => { apply(lvl); _toggle(false); });
      col.appendChild(b);
    });
    dd.appendChild(col);
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

  document.addEventListener('DOMContentLoaded', () => { buildControl(); load(); });

  // API compatível com chamadas externas existentes.
  window._coresOAB = { apply, reset: () => apply('couture') };
})();
