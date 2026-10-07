# CLAUDE.md — Preparatório OAB 48 · Revisão Ativa
> Diretrizes permanentes do projeto. Leia antes de qualquer sessão de desenvolvimento.
> Atualizado: 2026-07-12

---

## 1. Visão Geral

Site de **direcionamento e revisão ativa** para o OAB 48 (1ª Fase).  
Foco exclusivo: **tópicos curtos de direcionamento + flashcards de Q&A** por dia.  
Teoria densa é estudada por fora (PDFs VDE, livros) — o app não exibe teoria extensa.

**Cronograma:**
- **Estudo regular:** 10 jul 2026 → 01 jan 2027 · **Seg–Sex apenas** · ~126 dias úteis
- **Revisão estratégica:** 04–08 jan 2027 (sem conteúdo novo — apenas blocos de revisão)
- **Dia da prova:** 10 jan 2027 · OAB 48

**Arquitetura frontend:** HTML estático + JS vanilla + CSS custom properties  
**Dados:** `localStorage` como fonte principal, sincronizado por conta no Firestore (`sync.js`, `firebase-init.js`). Não há backend próprio (a pasta `backend/` Flask foi removida)

### Lógica de calendário (script.js)
- `STUDY_START = new Date(2026, 6, 10)` — 10 de julho de 2026
- `EXAM_DATE   = new Date(2027, 0, 10)` — 10 de janeiro de 2027
- `isWeekday(date)` — retorna true para seg–sex
- `getStudyDayForDate(date)` — nº do dia de estudo (conta só dias úteis desde 10/jul)
- `getStudyDay()` — retorna o dia atual (fins de semana retornam o último dia útil)
- `isRevisaoEstrategica()` — true para 04–08 jan 2027
- `isDiaProva()` — true para 10 jan 2027

---

## 2. O Que Foi Removido (Pivot Jul 2026)

Os seguintes arquivos foram **deletados** na simplificação arquitetural de 10/07/2026:
- `conteudo_vde.js`, `data/conteudo_s02.js`, `data/conteudo_s03.js` — teoria extensa dos PDFs
- `teoria_dia.js` — teoria por dia
- `cl-civil.js`, `cl-tributario.js`, `cl-proc_civil.js`, `cl-proc_penal.js`, `cl-proc_trabalho.js`, `cl-trabalho.js`, `cl-administrativo.js`, `cl-cdc.js` — cadernos legislativos
- `caderno-legislativo.html`, `biblioteca.html`, `fichamentos.html` — páginas removidas
- `highlighter.js`, `plano-oab.js` — funcionalidades descontinuadas
- `videoaulas.js` foi **reescrito** (não removido) — página própria `videoaulas.html` com player e filtro por matéria
- `tools/` — scripts Python de extração de PDF
- `backend/routes/resumos.py`, `highlights.py`, `comments.py` — rotas descontinuadas

**Nota (2026-10):** os cadernos `cl-*.js` e `caderno-legislativo.html` voltaram ao projeto e estão em uso (seção 9). Os demais itens da lista continuam removidos — não recriar sem pedido explícito.

---

## 3. Arquitetura dos Arquivos de Conteúdo

### Arquivo principal de dados
**`plano-vde.js`** → `PLANO_VDE[]` + `getDadosDia(n)`
- Array com 120 entradas, uma por dia de estudo
- Cada entrada: `{ dia, semana, titulo, materia, materias[], flashcards[], checklist[] }`
- `materias[].topicos[]` — lista curta de tópicos a estudar no dia
- `flashcards[]` — Q&A de revisão ativa: `{ id, frente, verso, pegadinha?, caiu? }`
- **Função principal:** `getDadosDia(n)` retorna a entrada do dia N

**Reorganização de 2026-07-12 (fonte: cronograma oficial VDE 120D em PDF):**
O cronograma VDE só define **72 dias de conteúdo novo** (o resto das 16 semanas do PDF
são dias de folga, "Revisão Quinzenal", "Simulado" ou as 2 semanas 100% de revisão nos
dias 43–49 e 85–91 do calendário original do VDE). Dia N do projeto = N-ésimo dia de
conteúdo novo do VDE em ordem (pulando os dias sem conteúdo), documentado em comentário
`// VDE dia X` acima de cada entrada.
- **Dias 1–72:** conteúdo, `materias[].topicos[]` e `checklist[]` reescritos para bater
  exatamente com o tema atribuído a cada dia no cronograma oficial — sem antecipar nem
  agrupar temas de dias diferentes. Múltiplas matérias no mesmo dia (ex.: dia 21 =
  Administrativo + Processo Penal) refletem dias em que o próprio VDE junta 2 matérias.
- **Dias 73–120:** sem correspondência no VDE (que só tem 72 dias de conteúdo). Viraram
  ciclo de revisão espaçada próprio do projeto — 2 ciclos por matéria (dias 73–89 e
  90–106) + reta final com simulados (dias 107–120).
- `flashcards[]` **continua vazio em todos os dias** — popular o Q&A é tarefa futura
  separada, não afetada por esta reorganização.
- `sumula` e `lei_seca` foram atualizados quando havia alta confiança na referência: não
  foram auditados linha a linha contra os PDFs semanais (ver seção 5).

### Revisão espaçada
**`cards.js`** → `REVIEW_CARDS`
- Micro-resumos para a aba Revisar (`revisar.html`)
- Chave: `'dia_N_mIdx'` (um card por matéria por dia)
- Formato: `{ titulo, pontos[], pegadinha }`

---

## 4. Status do Plano de Flashcards

| Dias    | Flashcards | Tópicos |
|---------|------------|---------|
| 1–72    | ❌ Vazio (pendente) | ✅ Reorganizado fielmente ao cronograma VDE (2026-07-12) |
| 73–120  | ❌ Vazio (pendente) | ✅ Ciclo de revisão espaçada próprio (sem referência VDE) |

**Próxima sessão:** popular `flashcards[]` (Q&A) dia a dia a partir dos PDFs semanais do VDE — os
tópicos de cada dia (`materias[].topicos[]`) já servem de roteiro exato do que cada flashcard deve
cobrir, já que foram reorganizados para bater com o cronograma oficial.

---

## 5. OBSOLETO — seção removida

| Semana | Teoria `conteudo_vde.js` | Flashcards `plano-vde.js` | Flashcards auditados | Teoria auditada |
|--------|--------------------------|---------------------------|----------------------|-----------------|
| 01 (dias 1–6)   | ✅ Extraída    | ✅ Completo | ✅ Jun 2026 (PDF local) | ✅ Jun 2026 (PDF local) |
| 02 (dias 7–12)  | ⏳ Parcial     | ✅ Completo | ✅ Jun 2026             | ❌ Pendente |
| 03 (dias 13–18) | ⏳ Parcial     | ✅ Completo | ✅ Jun 2026             | ❌ Pendente |
| 04–20           | ❌ Pendente    | ❌ Stubs apenas | ❌               | ❌ |

**Nota sobre a auditoria de teoria:** Os flashcards das semanas 1–3 foram auditados e corrigidos quanto à fidelidade ao PDF original. A teoria da **Semana 01 (dias 1–6) foi auditada em Jun 2026** — comparada linha a linha com o PDF local (`Resumo - Semana 01 (120 dias).pdf`), com omissões corrigidas nos dias 1, 2, 3, 4 e 6. O conteúdo teórico das **semanas 02–03** (`conteudo_vde.js`, dias 7–18) **ainda não foi auditado** — existe extração, mas ela nunca foi comparada linha a linha com os PDFs. Essa auditoria fica reservada para uma **sessão dedicada futura**.

**Regra:** Não prosseguir para novas extrações de teoria enquanto houver semanas com auditoria de teoria pendente.

---

## 5.1 Banco de Questões (`questoes-banco.js`)

`window.BANCO_QUESTOES` — 1.794 questões de 1ª fase, 23 exames de 2017 a 2026:

| Exames | Fonte |
|--------|-------|
| XXII–XXX, XXXI–XXXIII, 37º (2017–2023) | *1.280 Questões Comentadas de OAB Anteriores* |
| 38º–47º (2023–2026) | Provas comentadas do Estratégia OAB, uma por exame |

O segundo material tem formato próprio (`QUESTÃO NN.`, alternativas `a)` ou `(A)`,
cabeçalho `Comentários`/`Comentários curtos`, gabarito em `A alternativa correta é a
letra X` ou nos vereditos `A alternativa X está correta`) e **não traz a matéria de
cada questão** — ela foi determinada pelo conteúdo.

21 campos por questão: `id`, `exam`, `exam_number`, `year`, `phase`, `question_number`,
`discipline`, `topic`, `subtopic`, `difficulty`, `statement`, `alternative_a..d`,
`correct_answer`, `explanation`, `legal_basis`, `duplicate_group`, `source_file`, `notes`.

**Regras:**
- `correct_answer` e `explanation` vêm literalmente do material — nunca reescritos
- `legal_basis` é extraído do texto da própria explicação, nunca de memória; sem citação
  segura fica `null`
- `topic` é reutilizável (até ~12 por matéria) e alimenta o filtro de Assunto, que só
  habilita depois de escolher a Disciplina; `subtopic` é livre
- `difficulty` ∈ `facil` | `media` | `dificil`
- `notes` registra divergência do material consigo mesmo (prefixo `CONFERIR`) e
  alternativas remontadas
- Questões **anuladas** (sem gabarito) ficam fora: 8 em 2020+ e 19 em 2017–2019
- Um gabarito foi corrigido (XXXI Q28, de B para D) por desalinhamento dos rótulos no
  material de origem. A varredura do mesmo defeito nos demais exames não achou outro caso
- Matérias corrigidas onde o cabeçalho não aparece no PDF (XXII Constitucional e
  Tributário, XXIII Consumidor, XXVI Processo do Trabalho) — registrado em `notes`
- O exame XXX não tem cabeçalho próprio no PDF: abre com a ficha
  `Ano: AAAA – Banca: FGV – Órgão: OAB – Exame: XXX`, reconhecida pelo extrator
- **O outro PDF** (*OAB Como Passar 21ª ed.*) foi avaliado e descartado: 85% das questões
  são de 2007–2010, 280 usam o formato extinto de 5 alternativas e nenhuma é de 2020+
- **Direito Eleitoral, Financeiro e Previdenciário** só existem nos exames 38º+ — a OAB
  passou a cobrá-los em blocos fixos (questões 19–20, 23–24 e 69–70). São 20, 20 e 19
  questões. A atribuição confere posição do bloco E conteúdo antes de trocar a matéria
- Quando o material discorda do gabarito da banca, vale o **oficial**, com a divergência
  em `notes` (164 questões têm ressalva)
- `banco-questoes.html` → `formatarExplicacao()` entende as duas formas de abrir o
  comentário de cada alternativa: `A) Correto` e `A alternativa A está correta`

## 5.2 Simulado (`simulado.html` + `simulado.js`)

Sala de prova. Três telas numa página: escolher, fazer e corrigir.

- **Composição:** prova completa de um exame do banco (23 disponíveis). Outras formas de
  montagem ficam para quando Julia definir.
- **Cronômetro:** 5 horas, como a 1ª fase. Conta o tempo em que a prova esteve aberta —
  sair da aba ou fechar o navegador congela o relógio; voltar retoma dali. O tempo já
  gasto nunca é devolvido e o tempo fora não é cobrado. Zerou, finaliza sozinho.
- **Durante a prova não há gabarito nem comentário.** Nenhum verde ou vermelho: só
  "respondida" e "marcada para revisar". Clicar de novo na mesma alternativa desmarca —
  em branco é resposta válida.
- **Estado em `oab_simulado_atual`**, salvo a cada resposta. Recarregar oferece retomar.
- **Correção:** nota sobre o corte de 40, aproveitamento, tempo, desempenho por matéria
  (ordenado da pior para a melhor) e as erradas com comentário por alternativa.
- **Integra em vez de duplicar:** "Registrar em Meus Simulados" grava em
  `oab_simulados_v1` no formato que `simulados.html` já lê; "Mandar erros para o Caderno"
  chama `erros_add()` de `erros-core.js`.
- `simulados.html` continua sendo só o **registro** de simulados feitos em qualquer lugar.

---

## 5.2.1 Sincronização (`sync.js`)

Um documento por usuário em `backups/{uid}`; push por chave com merge. Regras:
- Chaves só do aparelho (`SO_LOCAIS`: tema, `simulatedDate`, `oab_current_day`, login etc.)
  nunca vão à nuvem nem são aplicadas vindas dela.
- O envio de segurança (trocar de aba/fechar) só roda se `oab_local_rev` local > nuvem e
  nunca faz a revisão da nuvem retroceder.
- Todo código que grava no `localStorage` deve carimbar `oab_local_rev` e chamar
  `_syncOAB.notificarAlteracaoLocal(chave)`.
- Aviso discreto (pílula) só quando há falha, falta de conexão ou dados > 800 KB
  (limite do documento é 1 MB).

## 5.3 Revisão espaçada do Caderno de Erros (`erros-core.js`)

Cada erro tem `proxima_revisao`, `nivel`, `acertos_seguidos` e, quando veio do banco ou
do Simulado, `questao_id` (a questão é refeita a partir de `BANCO_QUESTOES`, carregado
sob demanda em `erros.html`). Escada de intervalos 1→3→7→14→30 dias (cortada para caber
antes de 09/01/2027); errar volta ao nível 0; 5 acertos seguidos = `dominada`. Fila de
no máximo 15 por dia, mais atrasados primeiro. Erros sem `proxima_revisao` (antigos)
vencem no primeiro dia. Cartões sem `questao_id` aparecem como "mostrar resposta →
lembrei / não lembrei". `hoje.html` mostra o aviso do dia; a revisão em si é em `erros.html`.
`erros_add` com `questao_id` já pendente reinicia o nível em vez de duplicar.

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
