# CLAUDE.md — Preparatório OAB 48 · Revisão Ativa
> Diretrizes permanentes do projeto. Leia antes de qualquer sessão de desenvolvimento.
> Atualizado: 2026-10-10

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

## 4. Flashcards = microresumos (fluxo real)

> **Desde 10/2026 os flashcards das Revisões VDE (seção 5.5) substituíram os microresumos:** o editor
> saiu da aba Hoje e `revisar.html` passou a ser a página desses flashcards. O texto abaixo é histórico.

Os flashcards NÃO vêm de `plano-vde.js`. Julia escreve o microresumo do dia na aba Hoje
(prompt de IA → editor, salvo em `microresumo_dia_N`) e `revisar.html` o transforma em cartão
de revisão. `flashcards[]` em `plano-vde.js` está vazio e **não precisa ser populado** —
é legado do plano antigo (idem o `REVIEW_CARDS` de `cards.js`, preenchido em runtime).

### (Legado) Status do plano de flashcards antigo

| Dias    | Flashcards | Tópicos |
|---------|------------|---------|
| 1–72    | ❌ Vazio (pendente) | ✅ Reorganizado fielmente ao cronograma VDE (2026-07-12) |
| 73–120  | ❌ Vazio (pendente) | ✅ Ciclo de revisão espaçada próprio (sem referência VDE) |

**Obsoleto:** a ideia de popular `flashcards[]` a partir dos PDFs foi abandonada em favor dos microresumos.

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
  em `notes` (165 questões têm ressalva). A alternativa do gabarito aparece sempre como "Gabarito" no comentário, mesmo quando o material a chama de errada (18/10/2026; ex.: 44º Q77 e provas XXVII–XXX com "X) Errado" em todas)
- `banco-questoes.html` → `formatarExplicacao()` entende as duas formas de abrir o
  comentário de cada alternativa: `A) Correto` e `A alternativa A está correta`

## 5.2 Simulado (`simulado.html` + `simulado.js`)

Sala de prova. Três telas numa página: escolher, fazer e corrigir.

- **Composição:** prova completa de um exame do banco (23 disponíveis) ou **treino rápido**
  de 20 questões em 1 hora (corte proporcional 10): "Como na prova" reparte as vagas pelo peso
  de cada matéria nas provas 41º+; "Minhas matérias fracas" usa só as 5 matérias com mais
  pontos a ganhar (mesmo cálculo do painel Rumo aos 40). Prioriza questões nunca resolvidas
  (no modo fracas, as que errou). Estado guarda `duracao`, `corte` e `treino`.
- **Ao finalizar**, cada questão entra em `oab_bq_respostas` (mesmo formato do Banco; em
  branco conta como erro) — é a fonte única de acerto por questão.
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
- **Desde 13/10/2026** o registro de simulados (antes `simulados.html`, que agora redireciona) é a seção **Simulados** de
  `estatisticas.html#simulados` — mesmos dados em `oab_simulados_v1`.

---

## 5.2.1 Sincronização (`sync.js`)

Um documento por usuário em `backups/{uid}`; push por chave com merge. Regras:
- Chaves só do aparelho (`SO_LOCAIS`: tema, `simulatedDate`, `oab_current_day`, login etc.)
  nunca vão à nuvem nem são aplicadas vindas dela.
- **Por chave (desde 11/10/2026):** cada chave gravada leva o horário em que mudou (`oab_sync_t`
  local, só do aparelho; campo `t` do documento na nuvem). Ao receber a nuvem vale a chave mais nova,
  uma a uma; `oab_fc_estado_v1`, `oab_bq_respostas` e `oab_ativo_check_v1` são **mesclados item a item**
  (`MESCLAR`). Antes valia o documento do aparelho com `oab_local_rev` maior — uma gravação no PC antes de
  ler a nuvem fazia ele ignorar e depois sobrescrever os flashcards feitos no celular.
- O envio de segurança (trocar de aba/fechar) só manda as chaves com horário local mais novo que o da
  nuvem, e só depois do primeiro snapshot. Chaves antigas sem horário seguem a regra da revisão.
- Todo código que grava no `localStorage` deve carimbar `oab_local_rev` e chamar
  `_syncOAB.notificarAlteracaoLocal(chave)`.
- Aviso discreto (pílula) só quando há falha, falta de conexão ou dados > 800 KB
  (limite do documento é 1 MB).

## 5.2.2 Rumo aos 40 (`rumo40.html`) e regras comuns (`estudo-core.js`)

`window.ESTUDO`: `disciplinaDoBanco(nomeDoPlano)` (tira "Revisão · "/"Reta Final · " e mapeia
para o nome do banco), `pesosRecentes(banco, 41)` (média de questões por disciplina nos exames
41º+, soma 80), `statsPorDisciplina` (lê `oab_bq_respostas`; vale a última resposta),
`acertoEstimado` = (acertos+2)/(respondidas+4), `extraDaSemana()` e `linkBanco(disc, situacao)`.
- **Painel:** nota provável = Σ peso × acerto estimado; "pontos mais baratos" = peso ×
  (75% − acerto estimado). Registros só do Tracker não entram (não dizem quais questões).
- **Matérias fora do plano** (`EXTRAS`): Filosofia, Direitos Humanos, Internacional,
  Ambiental e Financeiro — não aparecem nos 120 dias e valem 10 questões por prova. Uma por
  semana em rodízio a partir de 05/10/2026; aparece no painel e na aba Hoje.
- **Banco aceita filtro pela URL:** `banco-questoes.html?disciplina=...&situacao=nao|errei|acertei|favoritas`.
- **Aba Hoje:** card "Questões do dia" com as disciplinas do dia (não resolvidas / refazer
  erradas) e a matéria extra da semana.

## 5.2.3 App instalável e offline (`manifest.webmanifest` + `sw.js`)

`topnav.js` injeta manifesto, ícones (`icon-192.png`, `icon-512.png`, `apple-touch-icon.png`)
e registra `sw.js` em todas as páginas. O service worker é **rede primeiro** (com 4s de
espera antes de usar a cópia) e guarda as páginas e scripts do site e o SDK do Firebase;
banco e cadernos legislativos entram no cache na primeira abertura online. Login/Firestore
(googleapis), Drive e YouTube nunca passam pelo cache. Página nova: acrescentar em
`ESSENCIAIS` no `sw.js`. **iPhone instalado (18/10/2026):** depois do teclado/tela cheia a área visível fica deslocada e a barra
de baixo flutua; `topnav.js` desfaz o deslocamento (`visualViewport`) e prende `.tn-links` na borda visível (o cache em uso também pega sozinho na primeira visita).

## 5.3 Revisão espaçada do Caderno de Erros (`erros-core.js`)

Cada erro tem `proxima_revisao`, `nivel`, `acertos_seguidos` e, quando veio do banco ou
do Simulado, `questao_id` (a questão é refeita a partir de `BANCO_QUESTOES`, carregado
sob demanda em `erros.html`). Escada de intervalos 3→7→15 dias (era 1→7→15; 3 dias desde 13/10/2026 para não acumular; cortada para
caber antes de 09/01/2027); errar volta ao nível 0; 3 acertos seguidos = `dominada`. Erros com
`flashcard_id` (vindos da sessão do dia) ficam fora desta fila — são revisados na sessão. Fila de
no máximo 15 por dia, mais atrasados primeiro. Erros sem `proxima_revisao` (antigos)
vencem no primeiro dia. Cartões sem `questao_id` aparecem como "mostrar resposta →
lembrei / não lembrei". `hoje.html` mostra o aviso do dia; a revisão em si é em `erros.html`.
`erros_add` com `questao_id` já pendente reinicia o nível em vez de duplicar.
**Justificar na hora (13/10/2026):** `erros_html_justificar()`/`erros_ler_justificar()` (erros-core) montam o bloco "Por que você
errou?" (motivo + o que faltou). No Hoje o erro já vai ao caderno e o bloco grava a justificativa (`justificada: true`); no Banco,
errar abre o bloco e só "Salvar no caderno" registra (acerto/chute: botão "+ Caderno de Erros"). A referência da questão fica em
`origem` (registros antigos a tinham em `o_que_faltou`; `erros.html` reconhece). Cartão do caderno: Refazer agora (revisão só
daquele item), ✓ Dominei, ↻ Preciso praticar mais (`erros_praticar`: nível 0, volta em 3 dias; também reabre dominada).

---

## 5.4 Biblioteca de revisão (`revisao.html` + `revisao-biblioteca.js`)

Visualizador dos PDFs de revisão do VDE (Revisões 1–3 em tabelas), da trilha de Trabalho
(2ª fase) e das peças — todos no Drive de Julia, abertos por `drive.google.com/file/d/ID/preview`.
A lista de arquivos (97) está embutida em `window.BIBLIOTECA_REVISAO` (`{id, g, a, b, n?}`:
`g` = rev|trab|peca; `a` = matéria/tema/peça; `b` = rodada/tipo). Não há importação manual.
**Atenção:** o repositório é público e os arquivos têm link aberto, então esses IDs ficam
públicos; os PDFs trazem marca d'água com dados de terceiros — não commitar o texto dos PDFs.
Para adicionar material novo, acrescente linhas em `revisao-biblioteca.js`.
**Desde 11/10/2026:** o visualizador usa o leitor com grifos (`leitor-pdf.js`, rolagem dentro do painel), o
rodapé tem "Flashcards desta revisão" (`revisar.html?materia=…&rev=N`) e cada card de matéria mostra flashcards
vistos e nº de grifos. Nos dias `revisao` do calendário (fase 2 e revisões extras), o Conteúdo do Hoje abre a
próxima Revisão ainda não feita (1→2→3) de cada matéria em foco, com "Marcar como feita" (grava aqui e no checklist).
Estado em `oab_revisao_status_v1` (`{id: {s:'lendo'|'feito', d}}`); data da 2ª fase em
`oab_segunda_fase_data`. Layout escolhido por Julia (2026-10): Revisões = quadro matéria ×
Revisão 1/2/3 (redesenho 11/10/2026: célula vazia = não lida, meio preenchida = lendo, cheia na cor `--mat-*-deep`
= feita; só a próxima da fila tem contorno; última coluna = flashcards vistos e "Treinar"); Trabalhista = trilha
numerada com as revisões como paradas; Peças = agrupadas por tipo (`GRUPOS_PECA`).
**Aba Treinos (2ª fase):** registro de peça treinada em `oab_pecas_treino_v1`
(`{id, data, peca, tempo(min), nota(0–5)|null, crit:{peca,partes,fundamentos,pedidos,fechamento:
'ok'|'parcial'|'faltou'}, obs}`), com cronômetro (`oab_pecas_cron`, só do aparelho), resumo
(tempo médio, nota média, critério que mais falha, contagem por peça) e histórico.

## 5.5 Revisão ativa a partir de 12/10/2026 (`hoje.html` + `sessao-core.js`)

Pedido de Julia (10/10/2026): parar a teoria extensa e só revisitar + praticar até a prova.
O plano de 120 dias (`plano-vde.js`, `hoje.html`, `dia.html`) continua no ar e com o progresso
salvo; a sessão nova é a rotina do dia e aparece como cartão no topo do Hoje.

- **`calendario-ativo.js`** → `CAL_ATIVO.dias[]`, 12/10/2026 → 10/01/2027. **Fase 1 (até 20/12, refeita em
  10/10/2026 a pedido de Julia):** seg–sáb = os **PDFs do dia do VDE** em ordem (89 PDFs em 60 dias; 29 dias
  juntam os dois PDFs mais curtos vizinhos, de matérias diferentes); domingo = simulado completo (47º → 38º).
  Cada tópico: `n` = DIA do VDE (arquivo "Dia n - Matéria.pdf"), `d`, `s` = tema, `q` = tópicos do banco,
  `k`/`g` herdados do Gabaritaço quando o tópico do banco coincide. **14/10/2026:** as faixas `k` foram conferidas DICA a DICA contra os títulos nos PDFs do Gabaritaço e 26 foram corrigidas (ex.: Contratos em geral 23–27 × em espécie 28–35; Fato típico 7–15 × Ilicitude 16–23; Serviços públicos/PPP 95–102). As páginas de `gabaritaco.js` batem 100% com os PDFs. Sem a semana 14 do VDE (Julia não tem); da
  semana 08 (escaneada) entram os dias 53–55 que Julia dividiu. Todos os dias do calendário têm PDF no Drive
  (a aba Conteúdo avisa se faltar algum). PyMuPDF lê os cabeçalhos "DIA N" melhor que pypdf.
  Fase 2 (21/12–08/01): revisão diária (caderno, flashcards, 20 questões de Ética), simulado parcial nos dias
  úteis e completo em 26/12 e 02/01; 24–25/12 e 31/12–01/01 leves; 09/01 só flashcards. Gerado por script fora
  do repo (tabela de dias com tema e tópicos do banco): para mudar, edite os dados direto mantendo o formato.
- **`plano-dinamico.js`** (carregar logo depois de `calendario-ativo.js`) → `window.PLANO`. A fase 1 vira uma fila de
  PDFs (`n`); "Adiantar" no Conteúdo do Hoje grava `oab_adiantado_v1 {n: data}`. Desde 13/10/2026 é uma fila corrida
  desde o 1º dia: cada dia de estudo pega as próximas vagas (1 ou 2 PDFs) da fila sem os adiantados, mais o que foi adiantado
  nele — adiantar o PDF de amanhã puxa todo o resto um dia para trás (antes o dia seguinte ficava vazio); `dataPrevista`/`proximo`
  usam a data recalculada. Dia de estudo que sobra no fim vira `revisao` com `extra: true` (foco = matérias vistas 7 dias antes). Reescreve
  `CAL_ATIVO.dias` em memória, então Hoje, Calendário e Revisar enxergam o plano já reorganizado.
- **`leitor-pdf.js`/`.css`** → `window.LEITOR.montar(el, idDrive)`: PDF.js 3.11.174 (cdnjs) lendo o arquivo pela API
  do Drive (`?alt=media&key=` — chave só com Google Drive API e referenciadores `*.vercel.app`); sem acesso, cai no
  preview do Drive. Grifos por seleção (4 cores), "grifar área" (arrastar, para escaneados), anotação por grifo e
  lista lateral. Usado em **todo PDF do site** (Hoje, Biblioteca, Materiais extras, Apostila do Início, `dia.html`); em
  modais, o contêiner com classe `.lp-rola` é passado como `rolagem`. Margem branca lateral é cortada (`medirMargem`, pelo texto das 3 primeiras páginas, até 12%); a lista de grifos fica escondida atrás do botão "✎ Grifos N". Opção `caixa: true` (usada no Hoje) prende as páginas numa caixa de até 78vh (72svh no celular) com rolagem própria; o botão "⛶ Tela cheia" abre o leitor por cima de tudo (`.lp-cheia`, Esc fecha) e mantém a página onde estava. `oab_grifos_v1 {"idArquivo|idGrifo": {p, r:[[x,y,w,h] 0–1], c, t, n, u, x?}}`, mesclado por `u`.
- **`vde-dias.js`** → `VDE_DIAS {n: idDoDrive}` dos PDFs do dia (pasta "Dividido" = `VDE_PASTA` no Drive de Julia). Desde
  11/10/2026 a pasta é listada pela API do Drive a cada 6 h (`LEITOR.listarPasta`, cache só do aparelho em `oab_vde_pasta`):
  dia que falta ou arquivo que sumiu da pasta é trocado pelo "Dia N - ….pdf" de lá, sem editar o arquivo. Aba **Conteúdo** do Hoje abre o PDF pelo preview do Drive. Os PDFs têm marca
  d'água com dados de terceiros: só IDs e temas entram no repo, nunca texto.
- **`gabaritaco.js`** → `GABARITACO {disciplina: {id, paginas, dica:[página onde começa cada DICA]}}`, lido dos 10 PDFs
  com PyMuPDF. O Conteúdo do Hoje mostra, sob demanda ("Abrir o trecho"), o Gabaritaço do tema no leitor com grifos,
  só nas páginas das DICAS `k` do tópico. Os PDFs (6–12 MB) ficam no Cache Storage do navegador (`oab-pdfs-v1`).
- **`fc-*.js`** (11 arquivos, 631 cartões) → `window.FC_VDE`, das **Revisões 1–3 do VDE**
  (`revisao-biblioteca.js`). Campos: `id, d` (disciplina do banco), `r` (revisão), `t` (tema),
  `f` frente, `v` verso curto, `b` dispositivo **só se citado na revisão** (sem `b` = "conferir"),
  `p` pegadinha, `c`/`n` = divergência da revisão com a lei, anotada no cartão. Texto reescrito,
  nunca copiado; nada da marca d'água dos PDFs entra no repo. Carregados sob demanda pela lista
  `ARQUIVOS` em `ativo-core.js` (cartão novo: acrescentar o arquivo lá e em `ESSENCIAIS` do `sw.js`).
- **`ativo-core.js`** → `window.ATIVO`. Estado em `oab_fc_estado_v1` (`{id: {iv, prox, fora, h, erros}}`). **Desde 14/10/2026,
  4 botões como o Anki** (escolha de Julia): errei → 1 dia · difícil → max(3, 1,2× último) · bom → 7 ou 2,5× · fácil → 15 ou 3,5×;
  fácil com intervalo ≥15 ou bom com ≥30 tira da rotação; cada botão mostra quando o cartão volta (`ATIVO.previa`). `h` guarda
  'e'/'d'/'b'/'f' (antigos: 's'/'e'); estados antigos só com degrau `n` (escada 3→7→15) viram intervalo por `intervaloAtual`.
  **Flashcard errado não vai mais para o Caderno de Erros** (os registros antigos com `flashcard_id` ficam guardados mas
  ocultos em `erros.html` e fora de `erros_stats`). Novos: até 10 por matéria do dia.
- **Planos mesclados (10/10/2026):** não há escolha de plano. A aba Hoje, o Calendário e o Revisar seguem
  `CAL_ATIVO`; o plano de 120 dias (`plano-vde.js`) fica só como dado legado (Início, Matérias, `dia.html`,
  PDFs da semana na Reta Final).
- **`sessao-core.js`** → `window.SESSAO`: dia por `?data=AAAA-MM-DD` (padrão hoje, preso ao intervalo do
  calendário), fila de flashcards, player inline `montarFlashcards(el, cartões)` (frente → "mostrar
  resposta" → sei/errei, sem virar o cartão), questões por tópico (banco carregado sob demanda; respostas em
  `oab_bq_respostas`; errou ou "foi chute" → caderno), checklist do dia, calendário e painel de erros.
  Checklist e "Estudei hoje" em `oab_ativo_check_v1` (`{data: {fc, t0, t1, etica, cad, sim, feito}}`);
  flashcards concluídos e bloco de questões todo respondido marcam o item sozinhos. Estilos em `sessao.css`.
  Questões sorteadas em `oab_ativo_dia` (só do aparelho; `{dias: {data: {n, sel}}}`, últimas 21 datas — desde 13/10/2026; questão respondida a partir da data volta primeiro no sorteio, então outro aparelho mostra as mesmas já feitas); quantidade por tópico em
  `oab_ativo_questoes_por_topico` (padrão 10).
- **Páginas:** `hoje.html` (abas Conteúdo · Flashcards · Questões · Checklist · Videoaulas), `calendario.html`
  (escolha de Julia, 11/10/2026: **mês grande**, um por vez com ‹ › e "Hoje"; grade num cartão só (linhas finas entre semanas),
  número do dia em Fraunces, etiquetas pastel só com a matéria (`--mat-*` + `--mat-*-deep`; tema completo fica no painel),
  hoje num círculo `--rose`, Simulado/Revisão/Leve/Prova como etiqueta, sem legenda; semanas inteiras fora do plano não aparecem; clicar abre o
  painel do dia ao lado com "Abrir este dia"; no celular os dias viram pontos coloridos), `revisar.html` (flashcards por matéria ou vencidos).
  `sessao.html` só redireciona.
- **Menu (11/10/2026):** Início · Hoje · Calendário · **Estudar** (Flashcards, Biblioteca de revisão, Videoaulas,
  Caderno legislativo, Materiais extras = `reta-final.html`) · **Treino** (`treino.html`: Rumo aos 40 em destaque,
  Banco, Simulado, Caderno de erros, Estatísticas). O Painel de erros vive dentro de `erros.html`
  (bloco "Onde você mais erra", `#painel`). `desempenho.html`, `plano.html`, `painel-erros.html`, `simulados.html` e `questoes.html` (Tracker, removido em 13/10/2026; os registros
  antigos continuam somando nas estatísticas) só redirecionam. **Estatísticas** (Treino): números do topo, "Como você está" (leitura em
  frases), Questões (acerto por matéria + taxa), Simulados, Rotina (dias e Pomodoro) e Flashcards; sem Favorita, Resumo e Conquistas.
- **Início, Matérias, Estatísticas e Perfil (11/10/2026):** Julia prefere o **visual antigo** do Início — não redesenhar
  páginas sem perguntar antes. Início, Matérias e Estatísticas mantêm o visual, mas os números vêm do `CAL_ATIVO`
  (dia N de 91, dias marcados em "Estudei hoje", PDFs do VDE estudados = item `p<n>` do checklist ou dia marcado,
  questões = `oab_bq_respostas` + Tracker). O Início ganhou os blocos Para revisar hoje, Próximos dias e Conteúdo do VDE.
  O streak global (`streakOAB()`/`atualizarStreak()` em `script.js`, usados por Início, Estatísticas, Perfil e `.streak-pill .count`) conta os dias seguidos com `feito` em `oab_ativo_check_v1`; hoje sem marca e dias leve/véspera não quebram; atualiza na hora ao marcar "Estudei hoje" (18/10/2026 — antes o Perfil e o aviso usavam o contador antigo `ju_oab_streak`).
  Perfil é enxuto (cartão, humor, configurações); `perfil-ui.js` esconde Resumo, Conquistas, Insights e gráficos.
- **Dias atrasados (17/10/2026, escolha de Julia):** dia já passado do `CAL_ATIVO` (menos leve/véspera/prova) sem `feito` em
  `oab_ativo_check_v1` = atrasado (`SESSAO.atrasados()`). O calendário não muda: o Hoje mostra "N dias atrasados" com link para cada
  um, o dia atrasado aberto troca o botão por "Marcar como estudado", e o `calendario.html` pinta a célula de vermelho ("atrasado")
  até o dia ser marcado.
- **Fluxo de entrega:** Julia pede merge a cada item terminado (PR + merge na `main` para aparecer no Vercel).

---

## 5.6 2ª fase · Direito do Trabalho (`segunda-fase.html` + `segunda-fase.js` + `f2-dados.js`) — desde 13/10/2026

Prova prático-profissional do OAB 48 em **28/02/2027** (cronograma da OAB). Julia escolheu Trabalho; o plano começa em 11/01/2027.
- **Chave de fase** no topo (`topnav.js`, `.tn-fase`): `oab_fase` = '1' | '2' em **sessionStorage** (desde 13/10/2026, a pedido de Julia: abrir o site sempre começa na 1ª fase; não sincroniza). No modo 2 o menu vira Hoje · Plano ·
  Estudar · Peças · Treino · Guia (`segunda-fase.html?aba=…`), a contagem aponta para 28/02, e `index/hoje/calendario/estudar/treino.html`
  redirecionam para a área da 2ª fase. Voltar para "1ª" leva ao Início.
- **`f2-dados.js`** → `window.F2`: `MATERIAIS` (IDs do Drive de Julia: livro de Processo do Trabalho 23 cap., livro de Direito do
  Trabalho 20 cap., 11 aulas de Processo, Revisões 1–3 do VDE, súmulas/OJs, cadernos legislativos; a trilha VDE `trab` de
  `revisao-biblioteca.js` entra em runtime), `PECAS` (13 peças: para quem, quando, prazo, base legal, endereçamento, estrutura —
  resumo da CLT/CPC, "conferir no Vade Mecum") e `plano()` (seg–sex 2 capítulos + esqueleto de peça; sáb peça completa; dom
  discursivas; reta final 15–26/02 com peça diária; simulado 20/02; véspera 27/02).
- Estado: `oab_f2_check_v1 {data:{k:true}}`, `oab_f2_feito_v1 {idDrive:data}`, `oab_f2_disc_v1 [...]`, `oab_f2_sim_v1 [...]`; peças
  treinadas continuam em `oab_pecas_treino_v1`. A Biblioteca de revisão perdeu as abas Trabalhista e Treinos (viraram esta área).

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

Dia da revisão ativa (seção 5.5), por data. Hero com data, tópicos do dia, Pomodoro e "Estudei Hoje"
(marca o dia no calendário e conta no streak). Abas:
0. **Conteúdo** (padrão nos dias com PDF) — PDF(s) do dia do VDE
1. **Flashcards** — vencidos primeiro, depois novos do tema de cada PDF (`t` do cartão × tema do dia; só sem casamento, × tópicos `q`).
   Palavra do nome da matéria ("penal", "tribut…") não basta para casar; tema sem cartão não puxa outros da matéria
   (18/10/2026 — antes "penal" trazia Legislação penal especial no dia de Lei penal no tempo). `SINONIMOS` cobre tema sem palavra em comum
2. **Questões** — blocos por tópico do Gabaritaço, simulado do dia e matéria extra da semana
3. **Checklist** — pontos do dia do `CAL_ATIVO`, com link para as DICAS do Gabaritaço
4. **Videoaulas** — aulas das matérias do dia (`videoaulas.js`), destacando as do tópico

**Removidos (10/2026):** Microresumo, Resumo do Dia (editores Quill), aba Revisões e aba PDF da Semana
(os PDFs foram para a Reta Final). Não usar flip-cards; conteúdo visível sem virar o cartão.

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
