# CLAUDE.md — Projeto Preparatório OAB 1ª Fase
> Diretrizes permanentes do projeto. Leia antes de qualquer sessão de desenvolvimento.
> Atualizado: 2026-06-07

---

## 1. Visão Geral

Site de estudos OAB 1ª Fase (Exame de Ordem) baseado na metodologia **VDE 120 Dias** de Ana Clara Fernandes (@viciodeumaestudante).

- **120 dias** de estudo divididos em **20 semanas × 6 dias**
- Progresso avança quando Julia marca o dia como concluído (`concluirDia()`)
- Todo conteúdo pedagógico vem dos **PDFs originais do VDE** — nunca gerado por IA

**Arquitetura frontend:** HTML estático + JS vanilla + CSS custom properties  
**Backend opcional:** Flask + SQLite em `backend/` (progresso, erros, destaques, comentários)

---

## 2. Diretriz de Fidelidade ao PDF (INEGOCIÁVEL)

**O PDF é sempre a fonte da verdade.**

Durante qualquer extração, transformação ou atualização de conteúdo:

### PROIBIDO
- Resumir
- Simplificar
- Condensar
- Reescrever ou parafrasear
- Omitir exemplos, observações, notas, OBS
- Omitir exceções ou ressalvas
- Omitir jurisprudência citada
- Omitir quadros ou tabelas
- Omitir pegadinhas da banca
- Remover conteúdo por considerar repetitivo
- "Sintetizar mantendo a profundidade" — qualquer síntese é proibida

### PERMITIDO (apenas melhorias de forma)
- Organização e hierarquia visual
- Marcação HTML/CSS para melhor legibilidade
- Navegação entre seções
- Formatação de tabelas e listas

### Método de extração correto
1. Ler o PDF com `mcp__claude_ai_Google_Drive__read_file_content`
2. Reproduzir o conteúdo **fielmente**, parágrafo por parágrafo
3. Aplicar apenas marcação HTML (classes `vde-*`) — sem alterar palavras
4. Preservar **todos** os `⚠️ IMPORTANTE`, `⚠️ PEGADINHA`, `⚠️ JURISPRUDÊNCIA`, tabelas e listas originais

---

## 3. Arquitetura dos Arquivos de Conteúdo

### Camada 1 — Teoria Completa (fiel ao PDF)
**`conteudo_vde.js`** → `CONTEUDO_VDE[N]`
- HTML completo extraído do PDF semana a semana
- Exibido na aba "Conteúdo" de `dia.html?dia=N`
- **Imutável após validação** — só abre novamente se houver erro factual
- Semana 01 (dias 1–6): extraída e validada
- Semanas 02–20: pendentes

### Camada 2 — Flashcards de Revisão
**`plano-vde.js`** → `PLANO_VDE[]`
- Array com 120 entradas, uma por dia
- Cada entrada: `{ dia, semana, titulo, materia, flashcards[], checklist[], sumula, incidencia, lei_seca }`
- Flashcards são derivados da Camada 1 (não são a fonte primária)
- Dias 1–13: flashcards completos
- Dias 14–120: stubs com tópicos (pendentes)
- Função principal: `getDadosDia(n)` retorna a entrada do dia N

### Camada 3 — Revisão Espaçada
**`cards.js`** → `REVIEW_CARDS`
- Micro-resumos para a aba Revisar
- Chave: `'dia_N_0'` (um card por dia)
- Formato: bullet points + pegadinha da banca

### Camada 4 — Lei Seca
**`cl-civil.js`, `cl-tributario.js`, `cl-administrativo.js`**, etc.
- Texto integral dos artigos por matéria
- `window.CL_MATERIA = \`<div class="cl-native-content">...\``
- Usado em `caderno-legislativo.html`
- Formato de artigo: `.cl-artigo` → `.cl-art-num` + `.cl-art-texto`
- Badges de incidência: `<span class="cl-oab-badge">Caiu OAB XX</span>`

---

## 4. IDs dos PDFs no Google Drive

Pasta mãe: `1ff-YhR1khjnnZwgM8XnvLQB1Msbrc0nF`

| Semana | Dias   | ID do PDF |
|--------|--------|-----------|
| 01 | 1–6    | `1fubBaoKYuxSn7s9nNG5DNyDIbPHgM6mL` |
| 02 | 7–12   | `1kWdKghftTNhbLD03x1ROF3gtTGd6KiSR` |
| 03 | 13–18  | `1oiJ7e0ZCiAkmQbxqygNMZCGmTDUf2mtQ` |
| 04 | 19–24  | `1I8xd9IJRZzTtHHRqWhPkUnwIHkjhub5E` |
| 05 | 25–30  | `1smrTu6fkv5PgK2k-Sk81AMAEATjWX_aJ` |
| 06 | 31–36  | `1-dO-Pg5ZGS-VoAhOZgZBxs_1TSNxwnVw` |
| 07 | 37–42  | `1gn3JLmUH1sEujIDdTmNZLjMZEtejE_nL` |
| 08 | 43–48  | `1zgj6y79VZkaaF1V91IP5XsDowys3OogC` |
| 09 | 49–54  | `1AvBg3tRVFHYJJOV1ubayOSBD6v_Hjfvh` |
| 10 | 55–60  | `1jzt2EzvCq8S0mHc9UZoUU05yiz6cL7cz` |
| 11 | 61–66  | `1t3gMZCGy4e_pzQyAjrj73MAfv7cZW4Et` |
| 12 | 67–72  | `1xH4JUZcCv3C3_BIUJRzPHP7InvTKQyEN` |
| 13 | 73–78  | `1cflsheiFcZWx7R2XRwiYpNEiMSsQw6Q3` |
| 14 | 79–84  | *(ausente no Drive)* |
| 15 | 85–90  | `1_AE4xeoSKsa6SbcnVqQmrJZ3kCupjKVB` |
| 16 | 91–96  | `1vAt_1jny7Tbb7KJVaXCCBXGKh3mvYanG` |
| 17 | 97–102 | `1FtRRU7O25Gui8CHs5c41esrnQr96xPZs` |
| 18 | 103–108| `1dUQgt_mZHvRNG9IJSn6pktUnxwaKwG_X` |
| 19 | 109–114| `1NX0fEpfFZwYrI-eLGFaQdW75-avXolxs` |
| 20 | 115–120| `1uH5T9KcXNuvo9Gl0azIHANODy358YRlm` |

---

## 5. Status de Extração (atualizar após cada sessão)

| Semana | Teoria `conteudo_vde.js` | Flashcards `plano-vde.js` | Flashcards auditados | Teoria auditada |
|--------|--------------------------|---------------------------|----------------------|-----------------|
| 01 (dias 1–6)   | ✅ Extraída    | ✅ Completo | ✅ Jun 2026 (PDF local) | ✅ Jun 2026 (PDF local) |
| 02 (dias 7–12)  | ⏳ Parcial     | ✅ Completo | ✅ Jun 2026             | ❌ Pendente |
| 03 (dias 13–18) | ⏳ Parcial     | ✅ Completo | ✅ Jun 2026             | ❌ Pendente |
| 04–20           | ❌ Pendente    | ❌ Stubs apenas | ❌               | ❌ |

**Nota sobre a auditoria de teoria:** Os flashcards das semanas 1–3 foram auditados e corrigidos quanto à fidelidade ao PDF original. A teoria da **Semana 01 (dias 1–6) foi auditada em Jun 2026** — comparada linha a linha com o PDF local (`Resumo - Semana 01 (120 dias).pdf`), com omissões corrigidas nos dias 1, 2, 3, 4 e 6. O conteúdo teórico das **semanas 02–03** (`conteudo_vde.js`, dias 7–18) **ainda não foi auditado** — existe extração, mas ela nunca foi comparada linha a linha com os PDFs. Essa auditoria fica reservada para uma **sessão dedicada futura**.

**Regra:** Não prosseguir para novas extrações de teoria enquanto houver semanas com auditoria de teoria pendente.

---

## 6. Design System

### Paleta de Cores (style.css :root)
```css
--rose: #c4978f          /* accent principal, dusty rose */
--rose-deep: #8e5c56     /* títulos, ênfase */
--rose-soft: #f2e8e4     /* tags, badges suaves */
--bg: #f9f7f4            /* fundo geral, off-white quente */
--paper: #ffffff         /* cards e painéis */
--ink: #2c2420           /* texto principal, warm charcoal */
--ink-faded: #a8988c     /* texto secundário */
--sage: #dce8d8          /* matérias Trabalho, Proc. Trabalho, Admin */
--lavender: #e2dff0      /* matérias Constitucional, Ética, Civil */
--gold: #b89050          /* matérias Tributário, Empresarial */
--champagne: #f0e5d0     /* matérias Ética (alternativo) */
```

### Tipografia
- **Títulos:** Playfair Display (serif) ou Cormorant Garamond
- **Corpo:** Inter (sans-serif)
- **Anotações/handwriting:** Caveat

### Raios e Sombras
- `--radius-sm: 8px` | `--radius: 14px` | `--radius-lg: 20px`
- Sombras: neutrals quentes `rgba(44, 36, 32, …)` — nunca tons rosados

### Modo Escuro
- Variáveis redefinidas em `[data-theme="dark"]`
- Toggle via `data-theme` no `<html>`

---

## 7. Padrão da Aba Hoje (`hoje.html`)

A aba Hoje mostra o dia de estudo atual com:
1. **Day Hero** — gradiente blush→rose-soft→lavender, número do dia em Playfair Display
2. **Matéria(s) do dia** — card com progresso e checklist
3. **Flashcards de revisão** — micro-resumos com bullet points e pegadinha (NÃO flip-cards)
4. **Ações rápidas** — marcar dia como concluído, ir para dia completo

**Regras:**
- Aba "Anotações" foi **removida definitivamente** (Quill.js não está mais no hoje.html)
- Conteúdo aparece visível de imediato (sem flip/reveal)
- Progresso dos dias vem de `getDadosDia()` + localStorage

---

## 8. Padrão da Página de Dia (`dia.html?dia=N`)

Layout em grid 2 colunas (1fr 260px), colapsa para 1 coluna em mobile.

### Tabs disponíveis
1. **Conteúdo** — HTML de `CONTEUDO_VDE[N]` (teoria completa do PDF)
2. **Flashcards** — cards de `getDadosDia(N).flashcards`
3. **Lei Seca** — artigos de `cl-materia.js`
4. **Checklist** — tarefas do dia de `getDadosDia(N).checklist`

### Classes CSS das semanas VDE
Conteúdo extraído usa classes prefixadas `.vde-*`:
- `.vde-content` — container raiz
- `.vde-h2`, `.vde-h3` — títulos de seção
- `.vde-label` — rótulos de subseção (`→ 1.1 Poder Constituinte…`)
- `.vde-list` — listas de pontos
- `.vde-texto` — parágrafos
- `.vde-atencao` — callout de atenção/pegadinha (⚠️)
- `.vde-table` — tabelas comparativas
- `.vde-block` — agrupa label + lista + atencao relacionados
- `.vde-oab-badge` — badge "Caiu OAB XX"

---

## 9. Padrão dos Cadernos Legislativos

Cada matéria tem um arquivo `cl-materia.js` com o texto dos artigos:

```js
window.CL_CIVIL = `
<div class="cl-native-content">
  <h2 class="cl-part">PARTE GERAL</h2>
  <h3 class="cl-section">TÍTULO — SUBTÍTULO</h3>
  <div class="cl-artigo">
    <strong class="cl-art-num">Art. N CC.</strong>
    <span class="cl-art-texto">Texto literal do artigo...</span>
  </div>
  <p class="cl-inciso"><span class="cl-inc-num">I –</span>inciso...</p>
  <p class="cl-paragrafo"><strong>§ 1°</strong> parágrafo...</p>
</div>`;
```

**Regras:**
- Texto dos artigos é **literal** — nunca adaptado
- Badges de incidência adicionados onde já constam nos PDFs: `<span class="cl-oab-badge">Caiu OAB XX</span>`
- Matérias disponíveis: Civil, Tributário, Proc. Civil, Proc. Penal, Proc. Trabalho, Trabalho, Administrativo, CDC

---

## 10. Padrão dos Flashcards (`plano-vde.js`)

```js
{
  id: 'd1_f1',                         // 'd{dia}_f{num}' — único
  frente: 'Pergunta clara e direta',
  verso: 'Resposta completa...',
  pegadinha: 'Armadilha da banca...',  // opcional
  caiu: 'OAB 35, 27'                  // opcional — exames em que caiu
}
```

**Regras:**
- `verso` deve ser completo — nunca encurtado para caber em 1 linha
- `pegadinha` só quando o PDF destaca uma exceção ou armadilha real
- `caiu` vem do PDF original — nunca inventado

---

## 11. Arquitetura Pendente de Decisão

A migração de `plano-vde.js` (monolítico) para arquivos `data/semana-XX.js` por semana foi **proposta mas não implementada**. Aguarda:
1. Resultado completo da auditoria das semanas 1–3
2. Decisão explícita de Julia

Não implementar a migração sem confirmação.

---

## 12. Regras de Desenvolvimento

- **Editar arquivos diretamente** — sem explicações passo-a-passo antes de agir
- **Não criar comentários** no código, exceto onde o "porquê" for não-óbvio
- **Não adicionar funcionalidades não pedidas** — zero scope creep
- **Não usar flip-cards** em nenhuma hipótese — usar micro-resumos visíveis
- **Quill.js 1.3.7** via cdnjs se editor rich text for necessário (com `matchVisual: false`)
- **Backend Flask** em `backend/` — não criar rotas sem pedido explícito
- Semanas validadas são **conteúdo estável** — não alterar sem motivo factual
- Ao extrair novos dias: lançar 2 agentes em paralelo (um por matéria) para PDFs grandes (>50KB)

---

## 13. Fontes Auxiliares (Drive — uso secundário)

Complementam os PDFs VDE quando precisar de profundidade extra:

| Fonte | ID Drive |
|-------|----------|
| Vade Mecum Doutrina OAB Foco 2023 | `1SZxbf_aHQi5z4wVopCNRTirEHKgrwq75` |
| Resumo Constitucional Fabiana Nascimento | `1oToi-3Q06ZkFWacDpHl3QPatwywYkzU2` |
| Resumão Estratégia OAB 40 | `1BbVL9HT9_tPDerFYUsWkbHutQ4Q-Qj6e` |
| OAB Esquematizado Pedro Lenza 2024 | `1Be6j_WYjuxhKCoA-5Hpd7ccr8opLfJD-` |
| Penal Geral resumo | `1pGzjc1JZzm_zblGPtgAso_JXZ2oQNoie` |
| CEISC 40 OAB (mapa mental) | `1cHuV9FCJ0m_48fga3TPmNhni8MXl7yqL` |

**Atenção:** Estas fontes são auxiliares. O PDF VDE da semana correspondente tem sempre prioridade.

---

## 14. PDFs Locais — Prioridade em Auditorias

Os PDFs VDE estão disponíveis localmente em:

```
C:\Users\julia\Downloads\Personalizado\Resumos\
```

Padrão de nome: `Resumo - Semana XX (120 dias).pdf`

**Regra obrigatória:** Quando existirem PDFs locais validados neste diretório, eles devem ser **PRIORIZADOS** sobre os IDs do Google Drive para todas as auditorias e validações futuras. Os PDFs do Drive podem estar bloqueados para IA generativa ("ineligible for generative AI contexts").

**Como extrair localmente (pdfplumber):**
```python
import pdfplumber, sys
sys.stdout = open('output.txt', 'w', encoding='utf-8')
with pdfplumber.open(r'C:\Users\julia\Downloads\Personalizado\Resumos\Resumo - Semana XX (120 dias).pdf') as pdf:
    for i, page in enumerate(pdf.pages):
        print(f'=== PAGE {i+1} ===')
        print(page.extract_text() or '')
```
