// ============================================================
// OAB · Perfil do Usuário (nome + foto, salvos no localStorage)
// ============================================================

(function () {
  const NAME_KEY = 'oab_perfil_nome';
  const FOTO_KEY = 'oab_perfil_foto';
  const DEFAULT_NAME = 'Estudante';

  function getNome() {
    try { return (localStorage.getItem(NAME_KEY) || '').trim() || DEFAULT_NAME; } catch (e) { return DEFAULT_NAME; }
  }
  function getFoto() {
    try { return localStorage.getItem(FOTO_KEY) || ''; } catch (e) { return ''; }
  }
  function setNome(nome) {
    try { localStorage.setItem(NAME_KEY, (nome || '').trim() || DEFAULT_NAME); } catch (e) {}
  }
  function setFoto(dataUrl) {
    try {
      if (dataUrl) localStorage.setItem(FOTO_KEY, dataUrl);
      else localStorage.removeItem(FOTO_KEY);
    } catch (e) {}
  }

  function renderAvatar(container, nome, foto) {
    container.innerHTML = '';
    if (foto) {
      const img = document.createElement('img');
      img.src = foto;
      img.alt = nome;
      container.appendChild(img);
    } else {
      const img = document.createElement('img');
      img.src = 'foto-perfil.jpg';
      img.alt = nome;
      img.onerror = function () {
        this.remove();
        container.textContent = (nome.trim().charAt(0) || 'E').toUpperCase();
      };
      container.appendChild(img);
    }
  }

  function aplicarPerfil() {
    const nome = getNome();
    const foto = getFoto();
    document.querySelectorAll('.profile-card .name').forEach(el => { el.textContent = nome; });
    document.querySelectorAll('.profile-avatar').forEach(av => renderAvatar(av, nome, foto));
    document.querySelectorAll('[data-user-name]').forEach(el => { el.textContent = nome; });
  }

  // ── Compressão simples da foto via canvas (evita estourar o localStorage) ──
  function processarFoto(file, cb) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        const size = 220;
        const canvas = document.createElement('canvas');
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d');
        const scale = Math.max(size / img.width, size / img.height);
        const w = img.width * scale, h = img.height * scale;
        ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
        cb(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // ── Modal "Editar Perfil" ──
  let _fotoTmp = null;

  function construirModal() {
    if (document.getElementById('perfil-modal-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'perfil-modal-overlay';
    overlay.className = 'ju-modal-overlay';
    overlay.innerHTML = `
      <div class="ju-modal-panel">
        <div class="ju-modal-title">Editar Perfil</div>
        <div style="display:flex;justify-content:center;margin-bottom:1.2rem">
          <div style="position:relative">
            <div class="profile-avatar" id="perfil-modal-avatar" style="width:76px;height:76px;font-size:1.6rem"></div>
            <label for="perfil-modal-foto" style="position:absolute;bottom:-4px;right:-4px;width:26px;height:26px;border-radius:50%;background:var(--rose-600);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.72rem;border:2px solid var(--paper)" title="Trocar foto">✎</label>
            <input type="file" id="perfil-modal-foto" accept="image/*" style="display:none">
          </div>
        </div>
        <div class="ju-modal-field">
          <label for="perfil-modal-nome">Nome</label>
          <input type="text" id="perfil-modal-nome" maxlength="40" placeholder="Seu nome">
        </div>
        <div class="ju-modal-actions">
          <button class="btn" id="perfil-modal-cancelar">Cancelar</button>
          <button class="btn btn-primary" id="perfil-modal-salvar">Salvar</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', e => { if (e.target === overlay) fecharModal(); });
    document.getElementById('perfil-modal-cancelar').addEventListener('click', fecharModal);
    document.getElementById('perfil-modal-salvar').addEventListener('click', salvar);
    document.getElementById('perfil-modal-foto').addEventListener('change', e => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      processarFoto(file, dataUrl => {
        _fotoTmp = dataUrl;
        renderAvatar(document.getElementById('perfil-modal-avatar'), getNome(), _fotoTmp);
      });
    });
  }

  function abrirModal() {
    construirModal();
    _fotoTmp = getFoto();
    document.getElementById('perfil-modal-nome').value = getNome() === DEFAULT_NAME ? '' : getNome();
    renderAvatar(document.getElementById('perfil-modal-avatar'), getNome(), _fotoTmp);
    document.getElementById('perfil-modal-overlay').classList.add('active');
  }

  function fecharModal() {
    const overlay = document.getElementById('perfil-modal-overlay');
    if (overlay) overlay.classList.remove('active');
  }

  function salvar() {
    const nomeInput = document.getElementById('perfil-modal-nome').value;
    setNome(nomeInput);
    setFoto(_fotoTmp);
    aplicarPerfil();
    fecharModal();
  }

  // ── Botão de editar sobre o avatar da sidebar ──
  // (a .profile-avatar tem overflow:hidden para recortar a foto em círculo,
  // então o botão precisa ficar num wrapper irmão, não dentro dela.)
  function injetarBotaoEditar() {
    document.querySelectorAll('.profile-card').forEach(card => {
      if (card.querySelector('.perfil-edit-btn')) return;
      const avatar = card.querySelector('.profile-avatar');
      if (!avatar) return;
      const wrap = document.createElement('div');
      wrap.className = 'perfil-avatar-wrap';
      wrap.style.cssText = 'position:relative;flex-shrink:0';
      avatar.parentNode.insertBefore(wrap, avatar);
      wrap.appendChild(avatar);

      const btn = document.createElement('button');
      btn.className = 'perfil-edit-btn';
      btn.title = 'Editar perfil';
      btn.setAttribute('aria-label', 'Editar perfil');
      btn.style.cssText = 'position:absolute;bottom:-2px;right:-2px;width:18px;height:18px;border-radius:50%;background:var(--rose-600);color:#fff;border:2px solid var(--paper);display:flex;align-items:center;justify-content:center;font-size:.55rem;cursor:pointer;padding:0;line-height:1';
      btn.textContent = '✎';
      btn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); abrirModal(); });
      wrap.appendChild(btn);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    aplicarPerfil();
    injetarBotaoEditar();
  });

  window._perfilOAB = { getNome, getFoto, abrirModal };
})();
