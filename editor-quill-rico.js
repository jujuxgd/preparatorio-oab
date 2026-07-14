// ============================================================
// OAB · Editor de texto rico (Quill) — motor compartilhado
// Extraído de hoje.html pra ser reaproveitado em dia.html também,
// evitando ter duas cópias divergentes do mesmo setup complexo
// (blots customizados de tabela/separador/caixa de destaque, os
// 7 botões de destaque semântico, paste de tabela, etc.)
//
// Cada página continua responsável pela sua própria orquestração de
// UI (toggle modo leitura/edição, abas, botão salvar) — este arquivo
// só cuida do "motor": criar a instância do Quill com os blots
// certos, e salvar/carregar do localStorage no formato {html, delta}.
// ============================================================
(function () {
  if (typeof Quill === 'undefined') return;

  // Separador horizontal — embed de bloco simples
  const BlockEmbed = Quill.import('blots/block/embed');
  class HrBlot extends BlockEmbed {}
  HrBlot.blotName = 'hr';
  HrBlot.tagName = 'hr';
  Quill.register(HrBlot);

  // Caixa de destaque — bloco com classe própria, igual ao blockquote nativo
  // (linhas consecutivas com o mesmo formato se agrupam automaticamente).
  const Block = Quill.import('blots/block');
  class CalloutBlot extends Block {}
  CalloutBlot.blotName = 'callout';
  CalloutBlot.tagName = 'div';
  CalloutBlot.className = 'ql-callout';
  Quill.register(CalloutBlot);

  // Tabela simples — table > tbody > tr > td, células editáveis (sem
  // merge de células nem redimensionar coluna: fora do escopo de "tabela
  // simples"). Quill não tem suporte a tabela nenhum nativamente.
  const Container  = Quill.import('blots/container');
  const Parchment  = Quill.import('parchment');
  class TableCell extends Block {}
  TableCell.blotName = 'table-cell';
  TableCell.tagName = 'td';

  // blots/container não tem scope padrão (só blots/block e blots/block/embed
  // têm) — sem setar isso, Quill.register() falha em silêncio e o blot some
  // do registro (era a causa da tabela não renderizar nenhuma vez).
  class TableRow extends Container {}
  TableRow.blotName = 'table-row';
  TableRow.tagName = 'tr';
  TableRow.scope = Parchment.Scope.BLOCK_BLOT;
  TableRow.allowedChildren = [TableCell];

  class TableBody extends Container {}
  TableBody.blotName = 'table-body';
  TableBody.tagName = 'tbody';
  TableBody.scope = Parchment.Scope.BLOCK_BLOT;
  TableBody.allowedChildren = [TableRow];

  class TableContainer extends Container {}
  TableContainer.blotName = 'table-container';
  TableContainer.tagName = 'table';
  TableContainer.scope = Parchment.Scope.BLOCK_BLOT;
  TableContainer.allowedChildren = [TableBody];

  TableCell.requiredContainer = TableRow;
  TableRow.requiredContainer = TableBody;
  TableBody.requiredContainer = TableContainer;

  Quill.register(TableCell);
  Quill.register(TableRow);
  Quill.register(TableBody);
  Quill.register(TableContainer);

  // ── Destaques semânticos: cor + fundo + negrito num só clique ──
  // Usa var(--hl-*) como valor de cor/fundo, então o realce fica correto
  // automaticamente no modo claro e escuro (a variável resolve na hora de
  // renderizar, tanto no editor quanto no card de revisão).
  const HL_MAP = {
    conceito:       { text: 'var(--dest-conceito-text)',       bg: 'var(--dest-conceito-bg)' },
    lei:            { text: 'var(--dest-lei-text)',            bg: 'var(--dest-lei-bg)' },
    excecao:        { text: 'var(--dest-excecao-text)',        bg: 'var(--dest-excecao-bg)' },
    pegadinha:      { text: 'var(--dest-pegadinha-text)',      bg: 'var(--dest-pegadinha-bg)' },
    jurisprudencia: { text: 'var(--dest-jurisprudencia-text)', bg: 'var(--dest-jurisprudencia-bg)' },
    prazo:          { text: 'var(--dest-prazo-text)',          bg: 'var(--dest-prazo-bg)' },
    palavrachave:   { text: 'var(--dest-palavrachave-text)',   bg: 'var(--dest-palavrachave-bg)' }
  };

  // Insere uma tabela rows×cols na posição indicada (ou no cursor, se
  // `atIndex` não vier). `cellText`, se vier, preenche cada célula.
  function _qlInsertTable(quill, rows, cols, cellText, atIndex) {
    const index = atIndex != null ? atIndex
      : (quill.getSelection(true) || { index: quill.getLength() - 1 }).index;
    const [line] = quill.getLine(index);
    // Quill 1.3.7 não tem quill.scroll.create() (isso é da v2) — a criação
    // de blot nessa versão é via Parchment.create(), registrada acima.
    const table = Parchment.create('table-container');
    const body  = Parchment.create('table-body');
    table.appendChild(body);
    for (let r = 0; r < rows; r++) {
      const row = Parchment.create('table-row');
      body.appendChild(row);
      for (let c = 0; c < cols; c++) {
        const cell = Parchment.create('table-cell');
        const txt  = (cellText && cellText[r] && cellText[r][c]) || '';
        if (txt) cell.domNode.appendChild(document.createTextNode(txt));
        else cell.appendChild(Parchment.create('break'));
        row.appendChild(cell);
      }
    }
    // Insere antes da linha em `index` — não precisa criar linha extra depois:
    // a linha que já existia ali continua existindo logo após a tabela.
    quill.scroll.insertBefore(table, line);
    quill.update(Quill.sources.USER);
    if (atIndex == null) quill.setSelection(index, 0, Quill.sources.SILENT);
  }

  // Insere um HTML que pode conter <table> preservando a ORDEM original —
  // ao contrário de deixar o Quill converter tudo de uma vez (onde a tabela
  // vira parágrafos soltos) e inserir a tabela de verdade depois via
  // setTimeout, o que a jogava pro fim do texto (o cursor já tinha avançado
  // com o resto do conteúdo colado). Aqui percorremos os nós de nível
  // superior do HTML em ordem e inserimos cada um na posição certa, uma
  // tabela de cada vez, tudo síncrono.
  function _inserirConteudoComTabelas(quill, html, index) {
    const container = document.createElement('div');
    container.innerHTML = html;
    let idx = index;
    Array.from(container.childNodes).forEach(node => {
      if (node.nodeType === 1 && node.tagName === 'TABLE') {
        const grid = Array.from(node.rows || []).map(row =>
          Array.from(row.cells || []).map(cell => (cell.innerText || '').replace(/\s+/g, ' ').trim())
        );
        if (!grid.length || !grid[0].length) return;
        // Garante uma quebra de linha antes da tabela: sem isso, quando `idx`
        // cai bem na borda final do parágrafo anterior, quill.getLine(idx)
        // (usado dentro de _qlInsertTable) resolve pra ESSE parágrafo, e a
        // tabela acaba inserida ANTES dele em vez de depois — era a causa da
        // tabela "pular" pro início e do texto ao redor virar uma bagunça.
        if (idx > 0) {
          quill.insertText(idx, '\n', Quill.sources.SILENT);
          idx += 1;
        }
        const before = quill.getLength();
        _qlInsertTable(quill, grid.length, grid[0].length, grid, idx);
        idx += quill.getLength() - before;
      } else {
        const frag = node.nodeType === 1 ? node.outerHTML : node.textContent;
        if (!frag || !frag.trim()) return;
        const before = quill.getLength();
        quill.clipboard.dangerouslyPasteHTML(idx, frag, 'silent');
        idx += quill.getLength() - before;
      }
    });
    quill.setSelection(idx, 0, Quill.sources.SILENT);
  }

  function _wireToolbarButtons(quill, toolbarEl) {
    toolbarEl.querySelectorAll('.hl-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const hl = HL_MAP[btn.dataset.hl];
        if (!hl) return;
        quill.format('color', hl.text);
        quill.format('background', hl.bg);
        quill.format('bold', true);
      });
    });
    const clearBtn = toolbarEl.querySelector('.hl-clear-btn');
    if (clearBtn) clearBtn.addEventListener('click', () => {
      quill.format('color', false);
      quill.format('background', false);
      quill.format('bold', false);
    });
    const hrBtn = toolbarEl.querySelector('.rt-hr-btn');
    if (hrBtn) hrBtn.addEventListener('click', () => {
      const range = quill.getSelection(true);
      quill.insertText(range.index, '\n', Quill.sources.USER);
      quill.insertEmbed(range.index + 1, 'hr', true, Quill.sources.USER);
      quill.setSelection(range.index + 2, 0, Quill.sources.SILENT);
    });
    const calloutBtn = toolbarEl.querySelector('.rt-callout-btn');
    if (calloutBtn) calloutBtn.addEventListener('click', () => {
      const range = quill.getSelection(true);
      const fmt = quill.getFormat(range);
      quill.format('callout', !fmt.callout);
    });
    const tableBtn = toolbarEl.querySelector('.rt-table-btn');
    if (tableBtn) tableBtn.addEventListener('click', () => _qlInsertTable(quill, 3, 3));
  }

  function _wireClipboardMatchers(quill) {
    const Delta = Quill.import('delta');
    // <hr> colado vira o blot de separador direto via Delta — isso é
    // síncrono e mantém a posição certa (BlockEmbed cabe num único op).
    quill.clipboard.addMatcher('hr', () => new Delta().insert({ hr: true }));

    // <table> colada: Quill não tem formato de tabela nativo pra
    // representar via Delta, e tentar consertar depois com setTimeout
    // jogava a tabela pro fim do texto (o resto do paste já tinha
    // avançado o cursor). Em vez de deixar o Quill processar o paste,
    // interceptamos o evento ANTES dele (capture:true) quando o HTML
    // colado tem <table>, e inserimos tudo nós mesmos, em ordem.
    quill.root.addEventListener('paste', (e) => {
      const html = e.clipboardData && e.clipboardData.getData('text/html');
      if (!html || !/<table/i.test(html)) return; // sem tabela, deixa o Quill cuidar normalmente
      e.preventDefault();
      e.stopImmediatePropagation();
      const range = quill.getSelection(true) || { index: quill.getLength() - 1, length: 0 };
      if (range.length) quill.deleteText(range.index, range.length, Quill.sources.USER);
      _inserirConteudoComTabelas(quill, html, range.index);
    }, true);
  }

  // Cria um editor Quill num container, com sua própria toolbar customizada
  // (HTML já presente na página) e os destaques/blots acima.
  window._criarEditorRico = function (editorId, toolbarId) {
    const quill = new Quill('#' + editorId, {
      theme: 'snow',
      placeholder: 'Cole aqui um resumo em HTML gerado pelo ChatGPT/Claude, ou escreva diretamente...',
      modules: {
        toolbar: '#' + toolbarId,
        clipboard: { matchVisual: false }
      }
    });
    _wireToolbarButtons(quill, document.getElementById(toolbarId));
    _wireClipboardMatchers(quill);
    return quill;
  };
  window._inserirConteudoComTabelas = _inserirConteudoComTabelas;
})();

// ── Salvar/carregar (localStorage, formato {html, delta}) ──
// Compartilhado entre hoje.html e dia.html — mesma chave, mesmo
// formato, pra um microresumo escrito num dia aparecer certinho
// no outro lugar também.
function _editorSalvar(quill, keyPrefix, dia, labelId) {
  if (!quill) return;
  const payload = JSON.stringify({ html: quill.root.innerHTML, delta: quill.getContents() });
  localStorage.setItem(keyPrefix + dia, payload);
  const lbl = document.getElementById(labelId);
  if (lbl) { lbl.textContent = 'Salvo'; setTimeout(() => { lbl.textContent = ''; }, 1500); }
}

function _editorCarregar(quill, keyPrefix, dia) {
  if (!quill) return;
  const raw = localStorage.getItem(keyPrefix + dia);
  quill.setContents([], 'silent');
  if (!raw) return;
  let parsed = null;
  try { parsed = JSON.parse(raw); } catch (e) {}
  if (parsed && typeof parsed.html === 'string' && /<table/i.test(parsed.html) && typeof window._inserirConteudoComTabelas === 'function') {
    // A tabela é um blot customizado sem representação em Delta — ao passar
    // por quill.getContents(), cada célula vira um op solto e perde o texto
    // (some por completo). dangerouslyPasteHTML também não serve aqui: o
    // conversor padrão do Quill não conhece esse blot e transforma a
    // tabela em parágrafos soltos. Reconstrói pelo HTML salvo usando o
    // mesmo caminho do paste/"inserir código", que sabe montar os blots.
    window._inserirConteudoComTabelas(quill, parsed.html, 0);
  } else if (parsed && parsed.delta) {
    quill.setContents(parsed.delta, 'silent');
  } else if (parsed && typeof parsed.html === 'string') {
    quill.clipboard.dangerouslyPasteHTML(parsed.html, 'silent');
  } else if (raw.trim()) {
    // Valor legado: texto puro salvo antes do editor rico
    const escapado = raw.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
    quill.clipboard.dangerouslyPasteHTML(escapado, 'silent');
  }
}

// ── Gerenciador de UI (leitura/edição, botões, código HTML) ──
// Cada página cria o seu próprio gerenciador passando uma função que
// devolve o número do dia atual (hoje.html usa o dia "de hoje" com
// possível avanço manual; dia.html usa o ?dia=N fixo da URL).
function criarGerenciadorEditores(diaAtualFn) {
  const registro = {}; // key -> { quill, keyPrefix, labelId }

  function configEditor(key) { return registro[key]; }

  function iniciarEditor(key, containerId, toolbarId, keyPrefix, labelId) {
    if (typeof Quill === 'undefined' || typeof window._criarEditorRico !== 'function') return null;
    const quill = window._criarEditorRico(containerId, toolbarId);
    registro[key] = { quill, keyPrefix, labelId };
    let timer;
    quill.on('text-change', (_d, _o, source) => {
      if (source !== 'user') return;
      clearTimeout(timer);
      timer = setTimeout(() => _editorSalvar(quill, keyPrefix, diaAtualFn(), labelId), 600);
    });
    _editorCarregar(quill, keyPrefix, diaAtualFn());
    return quill;
  }

  function card(key) { return document.querySelector(`.rt-card[data-editor="${key}"]`); }

  function entrarModoEdicao(key) {
    const c = card(key);
    if (!c) return;
    c.querySelector('.rt-view-wrap').style.display = 'none';
    c.querySelector('.rt-edit-wrap').style.display = 'block';
    c.querySelector('.rt-view-actions').style.display = 'none';
    c.querySelector('.rt-edit-actions').style.display = 'flex';
    const cfg = configEditor(key);
    if (cfg && cfg.quill) setTimeout(() => cfg.quill.focus(), 50);
  }

  // Mostra a versão somente-leitura (estado vazio ou o HTML salvo) e volta
  // os botões do cabeçalho pro grupo de visualização.
  function atualizarModoVisualizacao(key) {
    const c = card(key);
    if (!c) return;
    const cfg = configEditor(key);
    const html = cfg && cfg.quill ? cfg.quill.root.innerHTML : '';
    const vazio = !html || !html.replace(/<[^>]*>/g, '').trim();
    c.querySelector('.rt-view-wrap').style.display = 'block';
    c.querySelector('.rt-edit-wrap').style.display = 'none';
    c.querySelector('.rt-view-actions').style.display = 'flex';
    c.querySelector('.rt-edit-actions').style.display = 'none';
    const empty = c.querySelector('.rt-view-empty');
    const content = c.querySelector('.rt-view-content');
    if (vazio) { empty.style.display = 'block'; content.style.display = 'none'; }
    else { empty.style.display = 'none'; content.style.display = 'block'; content.innerHTML = html; }
    const editBtn = c.querySelector('.rt-edit-btn');
    if (editBtn) editBtn.style.display = vazio ? 'none' : 'inline-block';
  }

  let botoesWired = false;
  function wireBotoes() {
    if (botoesWired) return;
    botoesWired = true;

    document.querySelectorAll('.rt-save-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cfg = configEditor(btn.dataset.editor);
        if (cfg) _editorSalvar(cfg.quill, cfg.keyPrefix, diaAtualFn(), cfg.labelId);
      });
    });

    document.querySelectorAll('.rt-code-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const painel = document.querySelector(`.rt-code-panel[data-editor="${btn.dataset.editor}"]`);
        if (!painel) return;
        const aberto = painel.style.display !== 'none';
        painel.style.display = aberto ? 'none' : 'block';
        if (!aberto) painel.querySelector('.rt-code-textarea').focus();
      });
    });
    document.querySelectorAll('.rt-code-cancel').forEach(btn => {
      btn.addEventListener('click', () => {
        const painel = btn.closest('.rt-code-panel');
        painel.style.display = 'none';
        painel.querySelector('.rt-code-textarea').value = '';
      });
    });
    document.querySelectorAll('.rt-code-apply').forEach(btn => {
      btn.addEventListener('click', () => {
        const painel = btn.closest('.rt-code-panel');
        const codigo = painel.querySelector('.rt-code-textarea').value;
        if (!codigo.trim()) return;
        const cfg = configEditor(painel.dataset.editor);
        if (!cfg || !cfg.quill) return;
        const range = cfg.quill.getSelection(true) || { index: cfg.quill.getLength() };
        if (typeof window._inserirConteudoComTabelas === 'function') {
          window._inserirConteudoComTabelas(cfg.quill, codigo, range.index);
        } else {
          cfg.quill.clipboard.dangerouslyPasteHTML(range.index, codigo, 'user');
        }
        painel.style.display = 'none';
        painel.querySelector('.rt-code-textarea').value = '';
      });
    });

    document.querySelectorAll('.rt-edit-btn, .rt-add-btn').forEach(btn => {
      btn.addEventListener('click', () => entrarModoEdicao(btn.dataset.editor));
    });
    document.querySelectorAll('.rt-done-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cfg = configEditor(btn.dataset.editor);
        if (cfg) _editorSalvar(cfg.quill, cfg.keyPrefix, diaAtualFn(), cfg.labelId);
        atualizarModoVisualizacao(btn.dataset.editor);
      });
    });
  }

  return { iniciarEditor, configEditor, entrarModoEdicao, atualizarModoVisualizacao, wireBotoes, card };
}

window.criarGerenciadorEditores = criarGerenciadorEditores;
