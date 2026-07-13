// ============================================================
// OAB 48 · Plano de Revisão Ativa
// Método VDE 120 Dias — Ana Clara Fernandes
// Foco: tópicos de direcionamento + flashcards por dia
// ============================================================
// Reorganizado em 2026-07-12 para seguir fielmente a ordem e o
// agrupamento de temas do cronograma oficial VDE 120D (PDF).
// Mapeamento: dia N do projeto = N-ésimo dia de conteúdo NOVO
// do cronograma VDE (seg-sáb), pulando dias de folga, "Revisão
// Quinzenal", "Simulado" e as duas semanas 100% de revisão do
// VDE (dias 43-49 e 85-91 no calendário original). Do VDE só
// existem 72 dias de conteúdo novo — por isso dias 73-120 do
// projeto viram blocos de revisão espaçada própria (sem
// referência de dia específico no VDE). Cada comentário "VDE
// dia X" indica a origem exata no cronograma oficial.
// ============================================================

// ════════════════════════════════════════════════════════════
// PLANO_VDE — Array principal.
// getDadosDia usa .find() — primeiro match vence.
// ════════════════════════════════════════════════════════════
const _VDE_PDF_IDS = {
  1:  '1JU2DxXyW0uZ3mQ2BnVXsgg1VDHtuctRp',
  2:  '1kWdKghftTNhbLD03x1ROF3gtTGd6KiSR',
  3:  '1oiJ7e0ZCiAkmQbxqygNMZCGmTDUf2mtQ',
  4:  '1I8xd9IJRZzTtHHRqWhPkUnwIHkjhub5E',
  5:  '1smrTu6fkv5PgK2k-Sk81AMAEATjWX_aJ',
  6:  '1-dO-Pg5ZGS-VoAhOZgZBxs_1TSNxwnVw',
  7:  '1gn3JLmUH1sEujIDdTmNZLjMZEtejE_nL',
  8:  '1zgj6y79VZkaaF1V91IP5XsDowys3OogC',
  9:  '1AvBg3tRVFHYJJOV1ubayOSBD6v_Hjfvh',
  10: '1jzt2EzvCq8S0mHc9UZoUU05yiz6cL7cz',
  11: '1t3gMZCGy4e_pzQyAjrj73MAfv7cZW4Et',
  12: '1xH4JUZcCv3C3_BIUJRzPHP7InvTKQyEN',
  13: '1cflsheiFcZWx7R2XRwiYpNEiMSsQw6Q3',
  15: '1_AE4xeoSKsa6SbcnVqQmrJZ3kCupjKVB',
  16: '1vAt_1jny7Tbb7KJVaXCCBXGKh3mvYanG',
  17: '1FtRRU7O25Gui8CHs5c41esrnQr96xPZs',
  18: '1dUQgt_mZHvRNG9IJSn6pktUnxwaKwG_X',
  19: '1NX0fEpfFZwYrI-eLGFaQdW75-avXolxs',
  20: '1uH5T9KcXNuvo9Gl0azIHANODy358YRlm',
};

const PLANO_VDE = [

// ════════════════════════════════════════════════════
// SEMANA 01 — DIAS 1–6 · VDE dias 1–6 (sem deslocamento)
// ════════════════════════════════════════════════════

// DIA 01 — VDE dia 1 — Constitucional
{ dia:1, semana:1,
  titulo:'Constitucional · Teoria da Constituição e Direitos Fundamentais',
  descricao:'Poder Constituinte, classificação das constituições, eficácia das normas e Direitos e Garantias Fundamentais',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:[
      'Poder Constituinte Originário — inicial, ilimitado, autônomo e incondicionado',
      'Poder Constituinte Derivado — reformador e decorrente; limites formais, materiais (cláusulas pétreas) e circunstanciais',
      'Classificação das constituições — escrita/costumeira, rígida/flexível, dogmática/histórica, promulgada/outorgada',
      'Supremacia formal e material da Constituição; bloco de constitucionalidade',
      'Mutação constitucional vs reforma constitucional',
      'Recepção, repristinação e desconstitucionalização',
      'Eficácia das normas constitucionais (José Afonso da Silva) — plena, contida e limitada',
      'Dimensões dos direitos fundamentais — 1ª (liberdade), 2ª (igualdade), 3ª (fraternidade) e 4ª/5ª gerações',
      'Características dos direitos fundamentais — historicidade, universalidade, irrenunciabilidade, imprescritibilidade, relatividade',
      'Art. 5º CF — destinatários, rol exemplificativo (§2º) e aplicabilidade imediata (§1º)',
      'Tratados internacionais de direitos humanos — status supralegal vs equivalência a emenda constitucional (§3º, EC 45/04)',
      'Colisão de direitos fundamentais — proporcionalidade, razoabilidade e concordância prática'
    ],
    grupos:[
      { titulo:'Teoria da Constituição', qtd:7 },
      { titulo:'Direitos Fundamentais', qtd:5 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d1_c1',texto:'Poder Constituinte Originário — inicial, ilimitado, autônomo e incondicionado',feito:false},
  {id:'d1_c2',texto:'Poder Constituinte Derivado — limites formais, materiais e circunstanciais',feito:false},
  {id:'d1_c3',texto:'Classificação das constituições — escrita/costumeira, rígida/flexível, dogmática/histórica',feito:false},
  {id:'d1_c4',texto:'Supremacia da Constituição e bloco de constitucionalidade',feito:false},
  {id:'d1_c5',texto:'Mutação constitucional vs reforma constitucional',feito:false},
  {id:'d1_c6',texto:'Recepção, repristinação e desconstitucionalização',feito:false},
  {id:'d1_c7',texto:'Eficácia das normas constitucionais — plena, contida e limitada',feito:false},
  {id:'d1_c8',texto:'Dimensões dos direitos fundamentais (1ª, 2ª, 3ª, 4ª/5ª)',feito:false},
  {id:'d1_c9',texto:'Características dos direitos fundamentais',feito:false},
  {id:'d1_c10',texto:'Art. 5º CF — destinatários, rol exemplificativo e aplicabilidade imediata',feito:false},
  {id:'d1_c11',texto:'Tratados internacionais de DH — status supralegal vs equivalente a emenda',feito:false},
  {id:'d1_c12',texto:'Colisão de direitos fundamentais — proporcionalidade e concordância prática',feito:false}
  ],
  sumula:{ sigla:'Súmula Vinculante 25 · STF', texto:'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' },
  incidencia:95, pdf_id:_VDE_PDF_IDS[1], lei_seca:['CF arts. 5º, 60'] },

// DIA 02 — VDE dia 2 — Direito do Trabalho
{ dia:2, semana:1,
  titulo:'Trabalho · Relação de Trabalho e Contrato de Trabalho',
  descricao:'Relação de trabalho vs relação de emprego, requisitos SHOPP e modalidades de contrato de trabalho',
  emoji_principal:'👷', materia:'Direito do Trabalho',
  materias:[{ nome:'Direito do Trabalho', emoji:'👷', horas:4, cor:'sage',
    topicos:[
      'Relação de trabalho (gênero) vs relação de emprego (espécie)',
      'Requisitos da relação de emprego — pessoalidade, onerosidade, não eventualidade, subordinação, alteridade',
      'Trabalhador autônomo, eventual e avulso — diferenças e equiparação constitucional (art. 7º, XXXIV CF)',
      'Estagiário (Lei 11.788/08) — ausência de vínculo empregatício e seus limites',
      'Trabalho voluntário (Lei 9.608/98)',
      'Contrato de trabalho — conceito, natureza jurídica e princípio da primazia da realidade',
      'Elementos essenciais do contrato — agente capaz, objeto lícito, forma prescrita ou não defesa em lei',
      'Contrato por prazo determinado — hipóteses do art. 443 CLT e prazo máximo',
      'Contrato por prazo indeterminado — regra geral',
      'Contrato de experiência — prazo máximo de 90 dias e prorrogação única',
      'Sucessão trabalhista — arts. 10 e 448 CLT',
      'Alteração contratual — art. 468 CLT, mútuo consentimento e vedação ao prejuízo'
    ],
    grupos:[
      { titulo:'Relação de Trabalho', qtd:5 },
      { titulo:'Contrato de Trabalho', qtd:7 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d2_c1',texto:'Relação de trabalho vs relação de emprego',feito:false},
  {id:'d2_c2',texto:'Requisitos da relação de emprego — pessoalidade, onerosidade, não eventualidade, subordinação, alteridade',feito:false},
  {id:'d2_c3',texto:'Trabalhador autônomo, eventual e avulso',feito:false},
  {id:'d2_c4',texto:'Estagiário — Lei 11.788/08',feito:false},
  {id:'d2_c5',texto:'Trabalho voluntário — Lei 9.608/98',feito:false},
  {id:'d2_c6',texto:'Contrato de trabalho — natureza jurídica e primazia da realidade',feito:false},
  {id:'d2_c7',texto:'Elementos essenciais do contrato de trabalho',feito:false},
  {id:'d2_c8',texto:'Contrato por prazo determinado — art. 443 CLT',feito:false},
  {id:'d2_c9',texto:'Contrato por prazo indeterminado',feito:false},
  {id:'d2_c10',texto:'Contrato de experiência — prazo máximo 90 dias',feito:false},
  {id:'d2_c11',texto:'Sucessão trabalhista — arts. 10 e 448 CLT',feito:false},
  {id:'d2_c12',texto:'Alteração contratual — art. 468 CLT',feito:false}
  ],
  sumula:{ sigla:'Súmula 331 TST', texto:'Contrato de prestação de serviços — legalidade da terceirização e responsabilidade subsidiária do tomador.' },
  incidencia:90, pdf_id:_VDE_PDF_IDS[1], lei_seca:['CLT arts. 2º, 3º, 442-443, 448, 468'] },

// DIA 03 — VDE dia 3 — Direito Civil
{ dia:3, semana:1,
  titulo:'Civil · Parte Geral — Pessoa Natural e Pessoa Jurídica',
  descricao:'Personalidade e capacidade civil, incapacidade, emancipação e classificação das pessoas jurídicas',
  emoji_principal:'⚖️', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'⚖️', horas:4, cor:'rose',
    topicos:[
      'Personalidade civil — início com o nascimento com vida (teoria natalista) e a proteção do nascituro',
      'Capacidade de direito (gozo) vs capacidade de fato (exercício)',
      'Incapacidade absoluta — apenas os menores de 16 anos (redação da Lei 13.146/2015)',
      'Incapacidade relativa — maiores de 16 e menores de 18, ébrios habituais, viciados em tóxico, pródigos, pessoas com discernimento reduzido, indígenas',
      'Emancipação — voluntária, judicial e legal (rol do art. 5º, parágrafo único)',
      'Direitos da personalidade — características: irrenunciáveis, intransmissíveis, extrapatrimoniais',
      'Nome civil e domicílio — conceito e domicílio plúrimo',
      'Morte real, morte presumida (com e sem declaração de ausência) e comoriência',
      'Ausência — fases: curadoria dos bens, sucessão provisória e sucessão definitiva',
      'Pessoa jurídica — teoria da realidade técnica e início da personalidade com o registro do ato constitutivo',
      'Classificação das pessoas jurídicas de direito privado — associações, sociedades, fundações, organizações religiosas, partidos políticos',
      'Associações (sem fins econômicos) vs sociedades (fins econômicos) — distinção',
      'Fundações — só podem ter as finalidades do art. 62, parágrafo único (assistencial, cultural, religioso, etc.)',
      'Desconsideração da personalidade jurídica — Teoria Maior (art. 50 CC: abuso, desvio de finalidade ou confusão patrimonial) e desconsideração inversa'
    ],
    grupos:[
      { titulo:'Pessoa Natural', qtd:9 },
      { titulo:'Pessoa Jurídica', qtd:5 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d3_c1',texto:'Personalidade civil — nascimento com vida e proteção do nascituro',feito:false},
  {id:'d3_c2',texto:'Capacidade de direito vs capacidade de fato',feito:false},
  {id:'d3_c3',texto:'Incapacidade absoluta — apenas menores de 16 anos',feito:false},
  {id:'d3_c4',texto:'Incapacidade relativa — rol do art. 4º CC',feito:false},
  {id:'d3_c5',texto:'Emancipação — voluntária, judicial e legal',feito:false},
  {id:'d3_c6',texto:'Direitos da personalidade — características',feito:false},
  {id:'d3_c7',texto:'Nome civil e domicílio',feito:false},
  {id:'d3_c8',texto:'Morte real, morte presumida e comoriência',feito:false},
  {id:'d3_c9',texto:'Ausência — curadoria, sucessão provisória e definitiva',feito:false},
  {id:'d3_c10',texto:'Pessoa jurídica — teoria da realidade técnica',feito:false},
  {id:'d3_c11',texto:'Classificação das pessoas jurídicas de direito privado',feito:false},
  {id:'d3_c12',texto:'Associações vs sociedades',feito:false},
  {id:'d3_c13',texto:'Fundações — finalidades taxativas do art. 62 CC',feito:false},
  {id:'d3_c14',texto:'Desconsideração da personalidade jurídica — Teoria Maior (art. 50 CC)',feito:false}
  ],
  sumula:{ sigla:'Art. 50 CC', texto:'Em caso de abuso da personalidade jurídica, caracterizado pelo desvio de finalidade ou pela confusão patrimonial, pode o juiz decidir que os efeitos de certas e determinadas relações de obrigações sejam estendidos aos bens particulares de administradores ou sócios.' },
  incidencia:88, pdf_id:_VDE_PDF_IDS[1], lei_seca:['CC arts. 1º-10 (pessoa natural)', 'CC arts. 40-52 (pessoa jurídica)', 'CC art. 50 (desconsideração)'] },

// DIA 04 — VDE dia 4 — Direito Tributário
{ dia:4, semana:1,
  titulo:'Tributário · Princípios Tributários',
  descricao:'Legalidade, anterioridade, irretroatividade, isonomia, capacidade contributiva e demais limitações ao poder de tributar',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:[
      'Princípio da Legalidade tributária (art. 150, I CF) — reserva de lei para instituir ou majorar tributo',
      'Exceções à legalidade — alteração de alíquotas de II, IE, IPI, IOF, CIDE-combustíveis e ICMS-combustíveis',
      'Princípio da Anterioridade Anual (art. 150, III, b) — exceções por tributo',
      'Princípio da Anterioridade Nonagesimal (art. 150, III, c) — exceções por tributo e cumulação com a anterioridade anual',
      'Princípio da Irretroatividade tributária (art. 150, III, a)',
      'Princípio da Isonomia tributária (art. 150, II) — vedação a tratamento desigual entre contribuintes em situação equivalente',
      'Princípio da Capacidade Contributiva (art. 145, §1º)',
      'Princípio do Não Confisco',
      'Princípio da Liberdade de Tráfego (art. 150, V) — exceção do pedágio',
      'Princípio da Uniformidade Geográfica (art. 151, I)',
      'Princípio da Não Cumulatividade (ICMS e IPI) e da Seletividade (IPI obrigatório, ICMS facultativo)'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d4_c1',texto:'Princípio da Legalidade tributária — reserva de lei',feito:false},
  {id:'d4_c2',texto:'Exceções à legalidade — II, IE, IPI, IOF, CIDE e ICMS-combustíveis',feito:false},
  {id:'d4_c3',texto:'Anterioridade Anual — exceções por tributo',feito:false},
  {id:'d4_c4',texto:'Anterioridade Nonagesimal — exceções e cumulação',feito:false},
  {id:'d4_c5',texto:'Irretroatividade tributária',feito:false},
  {id:'d4_c6',texto:'Isonomia tributária',feito:false},
  {id:'d4_c7',texto:'Capacidade Contributiva',feito:false},
  {id:'d4_c8',texto:'Vedação ao Confisco',feito:false},
  {id:'d4_c9',texto:'Liberdade de Tráfego — exceção do pedágio',feito:false},
  {id:'d4_c10',texto:'Uniformidade Geográfica',feito:false},
  {id:'d4_c11',texto:'Não Cumulatividade e Seletividade',feito:false}
  ],
  sumula:{ sigla:'Súmula Vinculante 50 · STF', texto:'Norma legal que altera o prazo de recolhimento de obrigação tributária não se sujeita ao princípio da anterioridade.' },
  incidencia:92, pdf_id:_VDE_PDF_IDS[1], lei_seca:['CF art. 150 (limitações ao poder de tributar)', 'CF art. 145, §1º', 'CF art. 151'] },

// DIA 05 — VDE dia 5 — Processo do Trabalho
{ dia:5, semana:1,
  titulo:'Processo do Trabalho · Atos, Termos e Prazos Processuais; Competência',
  descricao:'Forma e prazos dos atos processuais trabalhistas e competência material, territorial e funcional da Justiça do Trabalho',
  emoji_principal:'⚖️', materia:'Processo do Trabalho',
  materias:[{ nome:'Processo do Trabalho', emoji:'⚖️', horas:4, cor:'sage',
    topicos:[
      'Atos processuais — forma, tempo e lugar de realização',
      'Prazos processuais trabalhistas contados em dias úteis (Lei 13.467/17)',
      'Prazo recursal de 8 dias — regra geral dos recursos trabalhistas',
      'Contagem de prazos — exclusão do dia do início e inclusão do dia do vencimento',
      'Preclusão — temporal, lógica e consumativa',
      'Atos das partes, do juiz e dos auxiliares da justiça',
      'Competência material da Justiça do Trabalho (art. 114 CF, EC 45/04)',
      'Competência territorial — regra do local da prestação de serviços (art. 651 CLT)',
      'Competência funcional e competência em razão da pessoa',
      'Conflito de competência — hipóteses e órgão competente para dirimir'
    ],
    grupos:[
      { titulo:'Atos, Termos e Prazos Processuais', qtd:6 },
      { titulo:'Competência', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d5_c1',texto:'Atos processuais — forma, tempo e lugar',feito:false},
  {id:'d5_c2',texto:'Prazos processuais em dias úteis',feito:false},
  {id:'d5_c3',texto:'Prazo recursal de 8 dias',feito:false},
  {id:'d5_c4',texto:'Contagem de prazos — exclusão/inclusão de dias',feito:false},
  {id:'d5_c5',texto:'Preclusão — temporal, lógica e consumativa',feito:false},
  {id:'d5_c6',texto:'Atos das partes, do juiz e dos auxiliares',feito:false},
  {id:'d5_c7',texto:'Competência material da Justiça do Trabalho — art. 114 CF',feito:false},
  {id:'d5_c8',texto:'Competência territorial — art. 651 CLT',feito:false},
  {id:'d5_c9',texto:'Competência funcional e em razão da pessoa',feito:false},
  {id:'d5_c10',texto:'Conflito de competência',feito:false}
  ],
  sumula:{ sigla:'Súmula 115 TST', texto:'A citação/notificação por edital é ineficaz se não observado o requisito da certeza da inacessibilidade do local de trabalho.' },
  incidencia:84, pdf_id:_VDE_PDF_IDS[1], lei_seca:['CLT arts. 770-782 (atos, termos e prazos)', 'CF art. 114', 'CLT art. 651'] },

// DIA 06 — VDE dia 6 — Direito Penal
{ dia:6, semana:1,
  titulo:'Penal · Eficácia da Lei Penal no Tempo e no Espaço',
  descricao:'Legalidade, retroatividade benigna, abolitio criminis, tempo e lugar do crime, territorialidade e extraterritorialidade',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:[
      'Princípio da Legalidade / reserva legal (art. 1º CP) — nullum crimen, nulla poena sine lege',
      'Irretroatividade da lei penal mais gravosa vs retroatividade da lei penal benéfica (art. 5º, XL CF)',
      'Abolitio criminis — efeitos sobre punibilidade e execução',
      'Novatio legis in mellius e novatio legis in pejus',
      'Lei intermediária e combinação de leis penais — divergência STF x STJ',
      'Tempo do crime — teoria da atividade (art. 4º CP)',
      'Lei excepcional e lei temporária — ultratividade (art. 3º CP)',
      'Territorialidade e extraterritorialidade da lei penal (arts. 5º a 7º CP)',
      'Lugar do crime — teoria da ubiquidade (art. 6º CP)',
      'Hipóteses de extraterritorialidade — princípios real/defesa, nacionalidade, justiça universal e representação'
    ],
    grupos:[
      { titulo:'Lei Penal no Tempo', qtd:7 },
      { titulo:'Lei Penal no Espaço', qtd:3 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d6_c1',texto:'Princípio da Legalidade — nullum crimen sine lege',feito:false},
  {id:'d6_c2',texto:'Irretroatividade vs retroatividade benigna (art. 5º, XL CF)',feito:false},
  {id:'d6_c3',texto:'Abolitio criminis',feito:false},
  {id:'d6_c4',texto:'Novatio legis in mellius e in pejus',feito:false},
  {id:'d6_c5',texto:'Lei intermediária e combinação de leis',feito:false},
  {id:'d6_c6',texto:'Tempo do crime — teoria da atividade (art. 4º CP)',feito:false},
  {id:'d6_c7',texto:'Lei excepcional e temporária — ultratividade',feito:false},
  {id:'d6_c8',texto:'Territorialidade e extraterritorialidade (arts. 5º-7º CP)',feito:false},
  {id:'d6_c9',texto:'Lugar do crime — teoria da ubiquidade (art. 6º CP)',feito:false},
  {id:'d6_c10',texto:'Hipóteses de extraterritorialidade — princípios aplicáveis',feito:false}
  ],
  sumula:{ sigla:'Art. 5º, XL CF', texto:'A lei penal não retroagirá, salvo para beneficiar o réu.' },
  incidencia:86, pdf_id:_VDE_PDF_IDS[1], lei_seca:['CP arts. 1º-12 (aplicação da lei penal)', 'CF art. 5º, XXXIX-XL'] },

// ════════════════════════════════════════════════════
// SEMANA 02 — DIAS 7–11 · VDE dias 8–12
// (VDE dia 7 = Day off, dia 13 = Revisão Quinzenal, dia 14 = Simulado — sem conteúdo novo, não mapeados)
// ════════════════════════════════════════════════════

// DIA 07 — VDE dia 8 — Ética Profissional
{ dia:7, semana:2,
  titulo:'Ética · Atividades da Advocacia e Mandato Judicial',
  descricao:'Funções privativas do advogado, atos nulos por irregularidade, mandato judicial, renúncia, revogação e substabelecimento',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'champagne',
    topicos:[
      'Atividades privativas de advocacia (art. 1º EOAB) — postulação e atividades de consultoria, assessoria e direção jurídicas',
      'Exceções ao jus postulandi — hipóteses em que a parte pode postular sem advogado',
      'Atos nulos por irregularidade do advogado ou ausência de capacidade postulatória',
      'Mandato judicial — outorga, prazo de apresentação e mandato tácito/apud acta',
      'Procuração com poderes especiais vs poderes gerais para o foro',
      'Renúncia do mandato — comunicação ao cliente e prazo de 10 dias de manutenção da representação',
      'Revogação do mandato pelo cliente — efeitos sobre honorários',
      'Substabelecimento com reserva de poderes vs sem reserva de poderes',
      'Consultoria e assessoria jurídicas — forma verbal ou escrita'
    ],
    grupos:[
      { titulo:'Atividades Privativas e Capacidade Postulatória', qtd:3 },
      { titulo:'Mandato Judicial', qtd:6 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d7_c1',texto:'Atividades privativas de advocacia — art. 1º EOAB',feito:false},
  {id:'d7_c2',texto:'Exceções ao jus postulandi',feito:false},
  {id:'d7_c3',texto:'Atos nulos por irregularidade do advogado',feito:false},
  {id:'d7_c4',texto:'Mandato judicial — outorga e mandato tácito/apud acta',feito:false},
  {id:'d7_c5',texto:'Procuração com poderes especiais vs poderes gerais',feito:false},
  {id:'d7_c6',texto:'Renúncia do mandato — prazo de 10 dias',feito:false},
  {id:'d7_c7',texto:'Revogação do mandato — efeitos sobre honorários',feito:false},
  {id:'d7_c8',texto:'Substabelecimento com e sem reserva de poderes',feito:false},
  {id:'d7_c9',texto:'Consultoria e assessoria jurídicas',feito:false}
  ],
  sumula:{ sigla:'Súmula 425 TST', texto:'O jus postulandi das partes limita-se às Varas do Trabalho e aos TRTs, não alcançando ação rescisória, cautelar, mandado de segurança e recursos de competência do TST.' },
  incidencia:92, pdf_id:_VDE_PDF_IDS[2], lei_seca:['EOAB arts. 1º, 5º, 11-12, 15'] },

// DIA 08 — VDE dia 9 — Processo Civil
{ dia:8, semana:2,
  titulo:'Processo Civil · Atos Processuais',
  descricao:'Tipologia, forma, tempo, lugar e nulidade dos atos processuais no CPC',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'sage',
    topicos:[
      'Atos processuais das partes, do juiz e dos auxiliares da justiça',
      'Forma dos atos processuais — princípio da instrumentalidade das formas',
      'Tempo dos atos processuais — dias úteis, horário e plantão judiciário',
      'Lugar dos atos processuais — regra da sede do juízo',
      'Publicidade dos atos processuais — regra e exceções (art. 189 CPC — segredo de justiça)',
      'Prazos processuais — próprios e impróprios, contagem em dias úteis',
      'Prazo em dobro — litisconsortes com procuradores distintos e defensoria/MP/Fazenda',
      'Nulidade absoluta vs relativa dos atos processuais — convalidação e princípio do prejuízo',
      'Preclusão temporal, lógica e consumativa no processo civil'
    ],
    grupos:[
      { titulo:'Forma, Tempo, Lugar e Publicidade dos Atos', qtd:5 },
      { titulo:'Prazos Processuais', qtd:2 },
      { titulo:'Nulidade e Preclusão', qtd:2 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d8_c1',texto:'Atos das partes, do juiz e dos auxiliares',feito:false},
  {id:'d8_c2',texto:'Forma dos atos — instrumentalidade das formas',feito:false},
  {id:'d8_c3',texto:'Tempo dos atos processuais — dias úteis e plantão',feito:false},
  {id:'d8_c4',texto:'Lugar dos atos processuais',feito:false},
  {id:'d8_c5',texto:'Publicidade — regra e segredo de justiça (art. 189 CPC)',feito:false},
  {id:'d8_c6',texto:'Prazos próprios e impróprios — contagem em dias úteis',feito:false},
  {id:'d8_c7',texto:'Prazo em dobro — litisconsortes, defensoria, MP e Fazenda',feito:false},
  {id:'d8_c8',texto:'Nulidade absoluta vs relativa — convalidação',feito:false},
  {id:'d8_c9',texto:'Preclusão temporal, lógica e consumativa',feito:false}
  ],
  sumula:{ sigla:'Art. 219 CPC', texto:'Na contagem de prazo em dias, estabelecido por lei ou pelo juiz, computar-se-ão somente os dias úteis.' },
  incidencia:88, pdf_id:_VDE_PDF_IDS[2], lei_seca:['CPC arts. 188-192 (atos processuais)', 'CPC art. 189 (publicidade)', 'CPC art. 219 (prazos)', 'CPC art. 229 (prazo em dobro)'] },

// DIA 09 — VDE dia 10 — Direito Empresarial
{ dia:9, semana:2,
  titulo:'Empresarial · Empresa, Empresário e Estabelecimento Empresarial',
  descricao:'Conceito de empresa e empresário, capacidade para empresariar, registro e estabelecimento empresarial',
  emoji_principal:'🏢', materia:'Direito Empresarial',
  materias:[{ nome:'Direito Empresarial', emoji:'🏢', horas:4, cor:'nude',
    topicos:[
      'Conceito de empresa (atividade) e de empresário (art. 966 CC)',
      'Atividade intelectual como elemento de empresa — regra de exclusão e exceção',
      'Empresário rural — opção de registro no RPEM',
      'Capacidade para ser empresário — regra geral e empresário incapaz (continuação de empresa)',
      'Sociedade entre cônjuges — restrições do art. 977 CC',
      'Impedimentos para o exercício da empresa',
      'Registro Público de Empresas Mercantis (RPEM) — natureza declaratória (regra) vs constitutiva (exceção: sociedade anônima)',
      'Estabelecimento empresarial — conceito, natureza jurídica e universalidade de fato',
      'Estabelecimento empresarial virtual',
      'Trespasse — requisitos de eficácia perante terceiros e responsabilidade por dívidas anteriores',
      'Cláusula de não concorrência — prazo legal de 5 anos após o trespasse',
      'Ponto empresarial e proteção pela ação renovatória (locação empresarial)'
    ],
    grupos:[
      { titulo:'Empresa e Empresário', qtd:6 },
      { titulo:'Estabelecimento Empresarial e Registro', qtd:6 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d9_c1',texto:'Conceito de empresa e empresário (art. 966 CC)',feito:false},
  {id:'d9_c2',texto:'Atividade intelectual como elemento de empresa',feito:false},
  {id:'d9_c3',texto:'Empresário rural — opção de registro',feito:false},
  {id:'d9_c4',texto:'Capacidade para ser empresário e empresário incapaz',feito:false},
  {id:'d9_c5',texto:'Sociedade entre cônjuges — art. 977 CC',feito:false},
  {id:'d9_c6',texto:'Impedimentos para o exercício da empresa',feito:false},
  {id:'d9_c7',texto:'RPEM — natureza declaratória vs constitutiva',feito:false},
  {id:'d9_c8',texto:'Estabelecimento empresarial — universalidade de fato',feito:false},
  {id:'d9_c9',texto:'Estabelecimento empresarial virtual',feito:false},
  {id:'d9_c10',texto:'Trespasse — eficácia e responsabilidade por dívidas',feito:false},
  {id:'d9_c11',texto:'Cláusula de não concorrência — 5 anos',feito:false},
  {id:'d9_c12',texto:'Ponto empresarial e ação renovatória',feito:false}
  ],
  sumula:{ sigla:'Art. 966 CC', texto:'Considera-se empresário quem exerce profissionalmente atividade econômica organizada para a produção ou a circulação de bens ou de serviços.' },
  incidencia:85, pdf_id:_VDE_PDF_IDS[2], lei_seca:['CC arts. 966-980 (empresário)', 'CC arts. 1.142-1.149 (estabelecimento)', 'CC art. 977 (sociedade entre cônjuges)'] },

// DIA 10 — VDE dia 11 — Processo Penal
{ dia:10, semana:2,
  titulo:'Processo Penal · Ação Penal e Inquérito Policial',
  descricao:'Características e prazos do IP, formas de instauração, arquivamento, tipos de ação penal e condições da ação',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:[
      'Inquérito Policial — natureza jurídica, características: discricionário, inquisitivo, sigiloso, indisponível, escrito, oficial, oficioso',
      'Formas de instauração — de ofício, requisição, requerimento do ofendido e flagrante delito',
      'Notitia criminis — de cognição imediata, mediata e coercitiva; denúncia anônima e procedimento correto',
      'Prazos do inquérito policial — 10 dias (preso) e 30 dias (solto), prazos especiais (Lei de Drogas, Lei 12.850/13)',
      'Arquivamento do inquérito — legitimidade do Ministério Público (art. 28 CPP) e desarquivamento por novas provas',
      'Juiz das Garantias — competência e limitações na fase de investigação',
      'Ação penal — condições genéricas (possibilidade jurídica, legitimidade, interesse de agir, justa causa)',
      'Ação Penal Pública Incondicionada e Condicionada (representação)',
      'Ação Penal Privada — exclusiva, personalíssima e subsidiária da pública',
      'Retratação da representação — CPP (até o oferecimento da denúncia) vs Lei Maria da Penha (perante o juiz)'
    ],
    grupos:[
      { titulo:'Inquérito Policial', qtd:6 },
      { titulo:'Ação Penal', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d10_c1',texto:'Inquérito Policial — natureza e características',feito:false},
  {id:'d10_c2',texto:'Formas de instauração do IP',feito:false},
  {id:'d10_c3',texto:'Notitia criminis e denúncia anônima',feito:false},
  {id:'d10_c4',texto:'Prazos do IP — 10 dias (preso) e 30 dias (solto)',feito:false},
  {id:'d10_c5',texto:'Arquivamento do IP — art. 28 CPP e desarquivamento',feito:false},
  {id:'d10_c6',texto:'Juiz das Garantias — competência e limitações',feito:false},
  {id:'d10_c7',texto:'Condições genéricas da ação penal',feito:false},
  {id:'d10_c8',texto:'Ação Penal Pública incondicionada e condicionada',feito:false},
  {id:'d10_c9',texto:'Ação Penal Privada — exclusiva, personalíssima e subsidiária',feito:false},
  {id:'d10_c10',texto:'Retratação da representação — CPP vs Lei Maria da Penha',feito:false}
  ],
  sumula:{ sigla:'Súmula 524 STF', texto:'Arquivado o inquérito policial, por falta de base para a denúncia, a autoridade policial poderá proceder a novas pesquisas, se de outras provas tiver notícia.' },
  incidencia:90, pdf_id:_VDE_PDF_IDS[2], lei_seca:['CPP arts. 4º-23 (inquérito policial)', 'CPP art. 28 (arquivamento)', 'CPP arts. 24-62 (ação penal)'] },

// DIA 11 — VDE dia 12 — Direito Administrativo
{ dia:11, semana:2,
  titulo:'Administrativo · Princípios e Poderes da Administração Pública',
  descricao:'Princípios expressos e implícitos da Administração Pública e os poderes hierárquico, disciplinar, de polícia e regulamentar',
  emoji_principal:'🏛️', materia:'Direito Administrativo',
  materias:[{ nome:'Direito Administrativo', emoji:'🏛️', horas:4, cor:'sage',
    topicos:[
      'Princípios expressos — LIMPE (Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência) — art. 37 CF',
      'Princípios implícitos — supremacia do interesse público, indisponibilidade, autotutela, continuidade do serviço público',
      'Súmula Vinculante 13 — vedação ao nepotismo e nepotismo cruzado',
      'Poder Vinculado vs Poder Discricionário — mérito administrativo e controle judicial',
      'Poder Hierárquico — delegação e avocação de competências, limites legais',
      'Poder Disciplinar — apuração de infrações funcionais de servidores e sujeitos a disciplina especial',
      'Poder de Polícia — conceito e atributos: discricionariedade, autoexecutoriedade e coercibilidade',
      'Poder Regulamentar — decreto regulamentar (art. 84, IV CF) vs decreto autônomo (art. 84, VI CF)',
      'Abuso de poder — excesso de poder e desvio de finalidade'
    ],
    grupos:[
      { titulo:'Princípios da Administração Pública', qtd:3 },
      { titulo:'Poderes Administrativos', qtd:6 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d11_c1',texto:'Princípios expressos — LIMPE (art. 37 CF)',feito:false},
  {id:'d11_c2',texto:'Princípios implícitos — supremacia, indisponibilidade, autotutela, continuidade',feito:false},
  {id:'d11_c3',texto:'Súmula Vinculante 13 — nepotismo e nepotismo cruzado',feito:false},
  {id:'d11_c4',texto:'Poder Vinculado vs Poder Discricionário',feito:false},
  {id:'d11_c5',texto:'Poder Hierárquico — delegação e avocação',feito:false},
  {id:'d11_c6',texto:'Poder Disciplinar — apuração de infrações funcionais',feito:false},
  {id:'d11_c7',texto:'Poder de Polícia — atributos',feito:false},
  {id:'d11_c8',texto:'Poder Regulamentar — decreto regulamentar vs autônomo',feito:false},
  {id:'d11_c9',texto:'Abuso de poder — excesso e desvio de finalidade',feito:false}
  ],
  sumula:{ sigla:'Súmula Vinculante 13 · STF', texto:'A nomeação de cônjuge, companheiro ou parente até o terceiro grau, inclusive, da autoridade nomeante ou de servidor da mesma pessoa jurídica investido em cargo de direção, chefia ou assessoramento, para o exercício de cargo em comissão ou de confiança [...] viola a Constituição Federal.' },
  incidencia:87, pdf_id:_VDE_PDF_IDS[2], lei_seca:['CF art. 37 (princípios)', 'CF art. 84, IV e VI (poder regulamentar)'] },

// ════════════════════════════════════════════════════
// SEMANA 03 — DIAS 12–17 · VDE dias 15–20
// (VDE dia 13 = Revisão Quinzenal, 14 = Simulado, 21 = Day off — não mapeados)
// ════════════════════════════════════════════════════

// DIA 12 — VDE dia 15 — Direito Constitucional
{ dia:12, semana:3,
  titulo:'Constitucional · Remédios Constitucionais',
  descricao:'Habeas Corpus, Habeas Data, Mandado de Segurança individual e coletivo, Mandado de Injunção e Ação Popular',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:[
      'Habeas Corpus — preventivo (salvo-conduto) e repressivo (alvará de soltura); legitimidade e gratuidade',
      'Habeas Data — finalidade, necessidade de prévio requerimento administrativo negado (interesse de agir)',
      'Mandado de Segurança individual — prazo decadencial de 120 dias e hipóteses de não cabimento (art. 5º Lei 12.016/09)',
      'Mandado de Segurança Coletivo — legitimidade ativa (partido político, organização sindical, entidade de classe, associação)',
      'Direitos tutelados pelo MS Coletivo — direitos coletivos e individuais homogêneos',
      'Mandado de Injunção — individual e coletivo; diferença para a Ação Direta de Inconstitucionalidade por Omissão',
      'Ação Popular — legitimidade exclusiva do cidadão, competência de 1ª instância e gratuidade (salvo má-fé)',
      'Direito de petição e direito de certidão — gratuidade e finalidade'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d12_c1',texto:'Habeas Corpus — preventivo e repressivo',feito:false},
  {id:'d12_c2',texto:'Habeas Data — interesse de agir e prévio requerimento negado',feito:false},
  {id:'d12_c3',texto:'Mandado de Segurança individual — prazo de 120 dias',feito:false},
  {id:'d12_c4',texto:'Mandado de Segurança Coletivo — legitimidade ativa',feito:false},
  {id:'d12_c5',texto:'MS Coletivo — direitos coletivos e individuais homogêneos',feito:false},
  {id:'d12_c6',texto:'Mandado de Injunção — individual e coletivo',feito:false},
  {id:'d12_c7',texto:'Ação Popular — legitimidade e competência',feito:false},
  {id:'d12_c8',texto:'Direito de petição e direito de certidão',feito:false}
  ],
  sumula:{ sigla:'Súmula 629 STF', texto:'A impetração de mandado de segurança coletivo por entidade de classe em favor dos associados independe da autorização destes.' },
  incidencia:88, pdf_id:_VDE_PDF_IDS[3], lei_seca:['CF art. 5º, LXVIII (HC)', 'CF art. 5º, LXIX-LXX (MS)', 'CF art. 5º, LXXI (MI)', 'CF art. 5º, LXXII (HD)', 'CF art. 5º, LXXIII (AP)', 'Lei 12.016/2009', 'Lei 9.507/1997'] },

// DIA 13 — VDE dia 16 — Direito do Trabalho
{ dia:13, semana:3,
  titulo:'Trabalho · Empregado e Empregador',
  descricao:'Modalidades especiais de empregado, poder diretivo e fiscalizatório do empregador, grupo econômico e sucessão',
  emoji_principal:'👷', materia:'Direito do Trabalho',
  materias:[{ nome:'Direito do Trabalho', emoji:'👷', horas:4, cor:'sage',
    topicos:[
      'Empregado hipersuficiente — requisito de diploma de nível superior e salário mínimo de 2x o teto do RGPS; cláusula compromissória de arbitragem',
      'Empregado doméstico (LC 150/2015) — requisitos, jornada, intervalo e extinção do contrato',
      'Trabalho do menor — vedações por faixa etária e contrato de aprendizagem (CF art. 7º, XXXIII)',
      'Trabalho da mulher — estabilidade da gestante, licença-maternidade e intervalos para amamentação',
      'Empregador — conceito e o poder diretivo, poder fiscalizatório (revista pessoal, câmeras) e poder disciplinar',
      'Grupo econômico trabalhista — requisitos e responsabilidade solidária (art. 2º, §2º CLT)',
      'Sucessão de empregadores — responsabilidade do sucessor pelas obrigações trabalhistas (arts. 10 e 448 CLT)',
      'Sócio retirante — responsabilidade subsidiária pelo prazo de 2 anos (art. 10-A CLT)',
      'Terceirização — Lei 6.019/74 e responsabilidade subsidiária da tomadora dos serviços'
    ],
    grupos:[
      { titulo:'Empregado', qtd:4 },
      { titulo:'Empregador', qtd:5 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d13_c1',texto:'Empregado hipersuficiente — requisitos e arbitragem',feito:false},
  {id:'d13_c2',texto:'Empregado doméstico — LC 150/2015',feito:false},
  {id:'d13_c3',texto:'Trabalho do menor — vedações e aprendizagem',feito:false},
  {id:'d13_c4',texto:'Trabalho da mulher — estabilidade e licença-maternidade',feito:false},
  {id:'d13_c5',texto:'Poderes do empregador — diretivo, fiscalizatório e disciplinar',feito:false},
  {id:'d13_c6',texto:'Grupo econômico trabalhista — art. 2º, §2º CLT',feito:false},
  {id:'d13_c7',texto:'Sucessão de empregadores — arts. 10 e 448 CLT',feito:false},
  {id:'d13_c8',texto:'Sócio retirante — art. 10-A CLT',feito:false},
  {id:'d13_c9',texto:'Terceirização — Lei 6.019/74',feito:false}
  ],
  sumula:{ sigla:'Súmula 129 TST', texto:'A prestação de serviços a mais de uma empresa do mesmo grupo econômico, durante a mesma jornada de trabalho, não caracteriza a coexistência de mais de um contrato de trabalho, salvo ajuste em contrário.' },
  incidencia:82, pdf_id:_VDE_PDF_IDS[3], lei_seca:['CLT art. 2º, §2º (grupo econômico)', 'CLT art. 10-A (sócio retirante)', 'CLT art. 444, parágrafo único (hipersuficiente)', 'CF art. 7º, XXXIII', 'LC 150/2015', 'Lei 6.019/74'] },

// DIA 14 — VDE dia 17 — Direito Civil
{ dia:14, semana:3,
  titulo:'Civil · Parte Geral — Negócio Jurídico',
  descricao:'Condição, termo e encargo; vícios de consentimento e vícios sociais; nulidade e anulabilidade do negócio jurídico',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'rose',
    topicos:[
      'Elementos do negócio jurídico — condição (evento futuro e incerto), termo (evento futuro e certo) e encargo/modo',
      'Condição suspensiva vs resolutiva — efeitos sobre a aquisição de direitos',
      'Vícios de consentimento — erro, dolo, coação moral, estado de perigo e lesão',
      'Distinção entre lesão e estado de perigo — dolo de aproveitamento da outra parte',
      'Fraude contra credores — ação pauliana e prazo decadencial de 4 anos',
      'Fraude contra credores vs fraude à execução — distinção quanto ao momento e efeitos',
      'Simulação — único vício social que gera nulidade absoluta do negócio jurídico',
      'Negócio jurídico nulo vs anulável — legitimidade para arguir, prazos e efeitos (ex tunc/ex nunc)',
      'Reserva mental e representação no negócio jurídico'
    ],
    grupos:[
      { titulo:'Elementos do Negócio Jurídico', qtd:2 },
      { titulo:'Vícios de Consentimento', qtd:2 },
      { titulo:'Vícios Sociais e Fraude', qtd:3 },
      { titulo:'Invalidade do Negócio Jurídico', qtd:2 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d14_c1',texto:'Condição, termo e encargo — distinção',feito:false},
  {id:'d14_c2',texto:'Condição suspensiva vs resolutiva',feito:false},
  {id:'d14_c3',texto:'Vícios de consentimento — erro, dolo, coação, estado de perigo, lesão',feito:false},
  {id:'d14_c4',texto:'Lesão vs estado de perigo',feito:false},
  {id:'d14_c5',texto:'Fraude contra credores — ação pauliana, prazo de 4 anos',feito:false},
  {id:'d14_c6',texto:'Fraude contra credores vs fraude à execução',feito:false},
  {id:'d14_c7',texto:'Simulação — nulidade absoluta',feito:false},
  {id:'d14_c8',texto:'Negócio jurídico nulo vs anulável',feito:false},
  {id:'d14_c9',texto:'Reserva mental e representação',feito:false}
  ],
  sumula:{ sigla:'Súmula 375 STJ', texto:'O reconhecimento da fraude à execução depende do registro da penhora do bem alienado ou da prova da má-fé do terceiro adquirente.' },
  incidencia:90, pdf_id:_VDE_PDF_IDS[3], lei_seca:['CC arts. 121-137 (condição, termo, encargo)', 'CC arts. 138-165 (defeitos do negócio jurídico)', 'CC arts. 166-184 (invalidade)'] },

// DIA 15 — VDE dia 18 — Direito Tributário
{ dia:15, semana:3,
  titulo:'Tributário · Competência Tributária',
  descricao:'Competência tributária vs capacidade tributária ativa, espécies de competência e impostos por ente federativo',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:[
      'Competência tributária — conceito e características: indelegável, irrenunciável, imprescritível, facultativa',
      'Capacidade tributária ativa — delegável (função de arrecadar e fiscalizar) via parafiscalidade',
      'Competência privativa — impostos nominados a cada ente federativo',
      'Competência comum — taxas e contribuições de melhoria (União, Estados, DF e Municípios)',
      'Competência residual — exclusiva da União, exige lei complementar e observância da não cumulatividade',
      'Competência cumulativa — impostos estaduais e municipais nos Territórios Federais e no DF (art. 147 CF)',
      'Competência extraordinária — Imposto Extraordinário de Guerra, exceção às anterioridades',
      'Empréstimo Compulsório — exige lei complementar, hipóteses do art. 148 CF (calamidade/guerra e investimento público urgente)',
      'Isenção heterônoma — vedada internamente (regra), admitida em tratados internacionais firmados pela União'
    ],
    grupos:[
      { titulo:'Competência Tributária e Capacidade Tributária Ativa', qtd:2 },
      { titulo:'Espécies de Competência', qtd:5 },
      { titulo:'Empréstimo Compulsório e Isenção Heterônoma', qtd:2 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d15_c1',texto:'Competência tributária — características',feito:false},
  {id:'d15_c2',texto:'Capacidade tributária ativa — parafiscalidade',feito:false},
  {id:'d15_c3',texto:'Competência privativa',feito:false},
  {id:'d15_c4',texto:'Competência comum — taxas e contribuição de melhoria',feito:false},
  {id:'d15_c5',texto:'Competência residual — lei complementar',feito:false},
  {id:'d15_c6',texto:'Competência cumulativa — art. 147 CF',feito:false},
  {id:'d15_c7',texto:'Competência extraordinária — Imposto de Guerra',feito:false},
  {id:'d15_c8',texto:'Empréstimo Compulsório — art. 148 CF',feito:false},
  {id:'d15_c9',texto:'Isenção heterônoma — regra e exceção dos tratados',feito:false}
  ],
  sumula:{ sigla:'CTN art. 7º', texto:'A competência tributária é indelegável, salvo atribuição das funções de arrecadar ou fiscalizar tributos, ou de executar leis, serviços, atos ou decisões administrativas em matéria tributária, conferida por uma pessoa jurídica de direito público a outra.' },
  incidencia:85, pdf_id:_VDE_PDF_IDS[3], lei_seca:['CF arts. 145-156 (Sistema Tributário Nacional)', 'CF art. 147 (competência cumulativa)', 'CF art. 148 (empréstimo compulsório)', 'CTN arts. 6º-8º'] },

// DIA 16 — VDE dia 19 — Processo do Trabalho
{ dia:16, semana:3,
  titulo:'Processo do Trabalho · Despesas Processuais',
  descricao:'Custas, depósito recursal, justiça gratuita, honorários advocatícios e periciais',
  emoji_principal:'⚖️', materia:'Processo do Trabalho',
  materias:[{ nome:'Processo do Trabalho', emoji:'⚖️', horas:4, cor:'sage',
    topicos:[
      'Custas processuais — alíquota de 2% e isenções (justiça gratuita, entes públicos, MPT, massa falida)',
      'Depósito recursal — função de garantia da execução, teto por instância, isentos e pagamento pela metade',
      'Depósito prévio na Ação Rescisória — 20% do valor da causa',
      'Justiça gratuita — critério de renda até 40% do teto do RGPS ou comprovação de insuficiência de recursos',
      'Honorários advocatícios sucumbenciais — percentual de 5% a 15% sobre o valor da condenação/proveito econômico (art. 791-A CLT)',
      'Honorários periciais — pagos pela parte sucumbente no objeto da perícia',
      'ADI 5766 — beneficiário da gratuidade de justiça não paga honorários sucumbenciais nem periciais; ônus assumido pela União',
      'Assistente técnico — honorários pagos por quem o contratar, independentemente do resultado'
    ],
    grupos:[
      { titulo:'Custas, Depósitos e Justiça Gratuita', qtd:4 },
      { titulo:'Honorários', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d16_c1',texto:'Custas processuais — alíquota e isenções',feito:false},
  {id:'d16_c2',texto:'Depósito recursal — função e isenções',feito:false},
  {id:'d16_c3',texto:'Depósito prévio na Ação Rescisória — 20%',feito:false},
  {id:'d16_c4',texto:'Justiça gratuita — critério de 40% do teto RGPS',feito:false},
  {id:'d16_c5',texto:'Honorários advocatícios — art. 791-A CLT',feito:false},
  {id:'d16_c6',texto:'Honorários periciais — sucumbência no objeto da perícia',feito:false},
  {id:'d16_c7',texto:'ADI 5766 — gratuidade e honorários',feito:false},
  {id:'d16_c8',texto:'Assistente técnico — quem paga',feito:false}
  ],
  sumula:{ sigla:'Súmula 457 TST', texto:'A União é responsável pelo pagamento dos honorários de perito quando a parte sucumbente no objeto da perícia for beneficiária da assistência judiciária gratuita.' },
  incidencia:80, pdf_id:_VDE_PDF_IDS[3], lei_seca:['CLT art. 789 (custas)', 'CLT art. 790 (justiça gratuita)', 'CLT art. 790-A (isentos de custas)', 'CLT art. 790-B (honorários periciais)', 'CLT art. 791-A (honorários advocatícios)'] },

// DIA 17 — VDE dia 20 — Direito Penal
{ dia:17, semana:3,
  titulo:'Penal · Fato Típico',
  descricao:'Conduta, resultado, nexo causal e tipicidade formal e material — elementos do fato típico',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:[
      'Fato típico — elementos: conduta, resultado, nexo de causalidade e tipicidade',
      'Conduta — ação e omissão (própria e imprópria/comissiva por omissão)',
      'Dolo — direto e eventual (teoria da vontade e teoria do assentimento)',
      'Culpa — imprudência, negligência e imperícia; culpa consciente vs inconsciente',
      'Resultado naturalístico vs resultado normativo/jurídico',
      'Crimes materiais, formais e de mera conduta — quanto ao resultado naturalístico',
      'Nexo de causalidade — teoria da equivalência dos antecedentes causais (conditio sine qua non, art. 13 CP)',
      'Causas absolutamente e relativamente independentes — superveniência causal (art. 13, §1º CP)',
      'Tipicidade formal — adequação típica direta e por subordinação mediata',
      'Tipicidade material e princípio da insignificância — requisitos jurisprudenciais'
    ],
    grupos:[
      { titulo:'Conduta e Elementos Subjetivos', qtd:4 },
      { titulo:'Resultado', qtd:2 },
      { titulo:'Nexo de Causalidade', qtd:2 },
      { titulo:'Tipicidade', qtd:2 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d17_c1',texto:'Fato típico — elementos',feito:false},
  {id:'d17_c2',texto:'Conduta — ação e omissão',feito:false},
  {id:'d17_c3',texto:'Dolo direto e eventual',feito:false},
  {id:'d17_c4',texto:'Culpa — imprudência, negligência, imperícia',feito:false},
  {id:'d17_c5',texto:'Resultado naturalístico vs normativo',feito:false},
  {id:'d17_c6',texto:'Crimes materiais, formais e de mera conduta',feito:false},
  {id:'d17_c7',texto:'Nexo de causalidade — teoria da equivalência dos antecedentes',feito:false},
  {id:'d17_c8',texto:'Causas absoluta/relativamente independentes — art. 13, §1º CP',feito:false},
  {id:'d17_c9',texto:'Tipicidade formal',feito:false},
  {id:'d17_c10',texto:'Tipicidade material e princípio da insignificância',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[3], lei_seca:['CP arts. 13-14 (relação de causalidade e crime consumado/tentado)', 'CP art. 18 (dolo e culpa)'] },

// ════════════════════════════════════════════════════
// SEMANA 04 — DIAS 18–20 · VDE dias 22–24
// (VDE dia 25 = Day off, dia 27 = Revisão Quinzenal, dia 28 = Simulado — não mapeados)
// ════════════════════════════════════════════════════

// DIA 18 — VDE dia 22 — Ética Profissional
{ dia:18, semana:4,
  titulo:'Ética · Inscrição na OAB e Sociedade de Advogados',
  descricao:'Requisitos e vedações à inscrição, advogado empregado e regras da sociedade de advogados',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'champagne',
    topicos:[
      'Requisitos para inscrição nos quadros da OAB (art. 8º EOAB) — capacidade civil, diploma, título de eleitor, aprovação no Exame de Ordem, idoneidade moral, compromisso',
      'Inidoneidade moral — presunção contrária em condenações por crimes infamantes, salvo reabilitação',
      'Inscrição principal, suplementar e por transferência',
      'Impedimentos ao exercício da advocacia — servidores da administração, membros de tribunais',
      'Incompatibilidade vs impedimento — distinção quanto à extensão da vedação (total vs parcial)',
      'Sociedade de Advogados — natureza, registro na OAB e vedação de sócio não advogado (Lei 13.247/16)',
      'Advogado empregado da sociedade — direitos e vedação de subordinação técnica',
      'Advogado associado — regime de participação nos resultados'
    ],
    grupos:[
      { titulo:'Inscrição na OAB', qtd:5 },
      { titulo:'Sociedade de Advogados e Advogado Empregado', qtd:3 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d18_c1',texto:'Requisitos para inscrição na OAB — art. 8º EOAB',feito:false},
  {id:'d18_c2',texto:'Inidoneidade moral — presunção e reabilitação',feito:false},
  {id:'d18_c3',texto:'Inscrição principal, suplementar e por transferência',feito:false},
  {id:'d18_c4',texto:'Impedimentos ao exercício da advocacia',feito:false},
  {id:'d18_c5',texto:'Incompatibilidade vs impedimento',feito:false},
  {id:'d18_c6',texto:'Sociedade de Advogados — registro e vedação de sócio não advogado',feito:false},
  {id:'d18_c7',texto:'Advogado empregado da sociedade',feito:false},
  {id:'d18_c8',texto:'Advogado associado',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[4], lei_seca:['EOAB arts. 8º-14 (inscrição)', 'EOAB arts. 15-17 (sociedade de advogados)', 'Lei 13.247/2016'] },

// DIA 19 — VDE dia 23 — Processo Civil
{ dia:19, semana:4,
  titulo:'Processo Civil · Das Partes e dos Procuradores',
  descricao:'Capacidade processual, litisconsórcio, deveres das partes e requisitos da procuração',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'sage',
    topicos:[
      'Capacidade de ser parte, capacidade processual e capacidade postulatória',
      'Substituição e sucessão processual — distinção',
      'Deveres das partes e procuradores — lealdade processual e litigância de má-fé (arts. 77-80 CPC)',
      'Litisconsórcio — classificação quanto à posição (ativo/passivo), momento (inicial/ulterior) e regime (unitário/simples)',
      'Litisconsórcio necessário vs facultativo — consequências da não formação',
      'Poderes do procurador — cláusula geral (ad judicia) e cláusula especial (poderes específicos do art. 105 CPC)',
      'Deveres do advogado no processo — art. 77 CPC',
      'Curador especial — hipóteses de nomeação (art. 72 CPC)'
    ],
    grupos:[
      { titulo:'Das Partes', qtd:3 },
      { titulo:'Litisconsórcio', qtd:2 },
      { titulo:'Dos Procuradores', qtd:3 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d19_c1',texto:'Capacidade de ser parte, processual e postulatória',feito:false},
  {id:'d19_c2',texto:'Substituição vs sucessão processual',feito:false},
  {id:'d19_c3',texto:'Deveres das partes — litigância de má-fé (arts. 77-80 CPC)',feito:false},
  {id:'d19_c4',texto:'Litisconsórcio — classificações',feito:false},
  {id:'d19_c5',texto:'Litisconsórcio necessário vs facultativo',feito:false},
  {id:'d19_c6',texto:'Poderes do procurador — cláusula geral e especial',feito:false},
  {id:'d19_c7',texto:'Deveres do advogado — art. 77 CPC',feito:false},
  {id:'d19_c8',texto:'Curador especial — art. 72 CPC',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[4], lei_seca:['CPC arts. 70-76 (partes e procuradores)', 'CPC arts. 77-80 (deveres e litigância de má-fé)', 'CPC arts. 113-118 (litisconsórcio)'] },

// DIA 20 — VDE dia 24 — Direito Empresarial
{ dia:20, semana:4,
  titulo:'Empresarial · Direito Societário',
  descricao:'Classificação das sociedades, personificação, responsabilidade dos sócios e tipos societários',
  emoji_principal:'🏢', materia:'Direito Empresarial',
  materias:[{ nome:'Direito Empresarial', emoji:'🏢', horas:4, cor:'nude',
    topicos:[
      'Sociedade — conceito e elementos: affectio societatis, pluralidade de sócios (regra), patrimônio comum',
      'Sociedade personificada vs não personificada — sociedade em comum e sociedade em conta de participação',
      'Sociedade simples vs sociedade empresária — critério do objeto social',
      'Classificação quanto à responsabilidade dos sócios — ilimitada, limitada e mista',
      'Sociedade Limitada — regência supletiva pelas normas da sociedade simples ou, por opção, da S.A.',
      'Quotas sociais — integralização, cessão e responsabilidade solidária pela integralização do capital',
      'Administração da sociedade limitada — sócio ou não sócio, designação em contrato ou ato separado',
      'Deliberações sociais — quóruns de instalação e votação',
      'Sociedade Anônima — natureza sempre empresária, capital dividido em ações',
      'Exclusão de sócio — justa causa e exclusão extrajudicial (art. 1.085 CC)',
      'Dissolução da sociedade — total vs parcial, causas'
    ],
    grupos:[
      { titulo:'Disposições Gerais das Sociedades', qtd:4 },
      { titulo:'Sociedade Limitada', qtd:4 },
      { titulo:'Sociedade Anônima', qtd:1 },
      { titulo:'Exclusão de Sócio e Dissolução', qtd:2 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d20_c1',texto:'Sociedade — conceito e affectio societatis',feito:false},
  {id:'d20_c2',texto:'Sociedade personificada vs não personificada',feito:false},
  {id:'d20_c3',texto:'Sociedade simples vs empresária — critério do objeto',feito:false},
  {id:'d20_c4',texto:'Responsabilidade dos sócios — ilimitada, limitada e mista',feito:false},
  {id:'d20_c5',texto:'Sociedade Limitada — regência supletiva',feito:false},
  {id:'d20_c6',texto:'Quotas sociais — integralização e responsabilidade solidária',feito:false},
  {id:'d20_c7',texto:'Administração da sociedade limitada',feito:false},
  {id:'d20_c8',texto:'Deliberações sociais — quóruns',feito:false},
  {id:'d20_c9',texto:'Sociedade Anônima — natureza sempre empresária',feito:false},
  {id:'d20_c10',texto:'Exclusão de sócio — art. 1.085 CC',feito:false},
  {id:'d20_c11',texto:'Dissolução total vs parcial da sociedade',feito:false}
  ],
  sumula:{ sigla:'Art. 982, parágrafo único CC', texto:'A sociedade por ações é sempre empresária, independentemente de seu objeto.' },
  incidencia:83, pdf_id:_VDE_PDF_IDS[4], lei_seca:['CC arts. 981-1.038 (sociedade simples)', 'CC arts. 1.052-1.087 (sociedade limitada)', 'Lei 6.404/76 (S.A.)'] },

// ════════════════════════════════════════════════════
// SEMANA 05 — DIA 21 · VDE dia 26 (2 matérias no mesmo dia)
// ════════════════════════════════════════════════════

// DIA 21 — VDE dia 26 — Administrativo + Processo Penal
{ dia:21, semana:5,
  titulo:'Administrativo · Organização da Administração Pública · Processo Penal · Competência',
  descricao:'Administração direta e indireta, entidades da administração indireta e competência no processo penal',
  emoji_principal:'🏛️', materia:'Direito Administrativo',
  materias:[
    { nome:'Direito Administrativo', emoji:'🏛️', horas:2, cor:'sage',
      topicos:[
        'Administração Pública direta e indireta — descentralização administrativa',
        'Autarquias — natureza jurídica de direito público, criação por lei específica e privilégios processuais',
        'Agências reguladoras e agências executivas — natureza autárquica especial',
        'Fundações públicas — de direito público (autárquicas) e de direito privado',
        'Empresas públicas e sociedades de economia mista — distinção quanto ao capital e à forma societária',
        'Regime jurídico das estatais — Lei 13.303/2016 (Lei das Estatais)',
        'Consórcios públicos e entidades paraestatais (serviços sociais autônomos)'
      ],
      grupos:[
        { titulo:'Administração Direta e Indireta', qtd:1 },
        { titulo:'Entidades da Administração Indireta', qtd:6 }
      ] },
    { nome:'Processo Penal', emoji:'🔍', horas:2, cor:'rose',
      topicos:[
        'Competência no processo penal — critérios ratione loci, ratione materiae e ratione personae',
        'Competência pelo lugar da infração — regra geral do art. 70 CPP e teoria do resultado',
        'Competência pelo domicílio do réu — critério subsidiário',
        'Competência por conexão e continência — reunião de processos e prevenção',
        'Foro por prerrogativa de função — hipóteses e limites (após a EC e jurisprudência do STF)',
        'Competência da Justiça Federal em matéria penal (art. 109 CF)'
      ],
      grupos:[
        { titulo:'Critérios de Competência', qtd:3 },
        { titulo:'Conexão, Continência e Foro Especial', qtd:3 }
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d21_c1',texto:'Administração direta e indireta — descentralização',feito:false},
  {id:'d21_c2',texto:'Autarquias — criação por lei e privilégios processuais',feito:false},
  {id:'d21_c3',texto:'Agências reguladoras e executivas',feito:false},
  {id:'d21_c4',texto:'Fundações públicas — direito público e direito privado',feito:false},
  {id:'d21_c5',texto:'Empresas públicas vs sociedades de economia mista',feito:false},
  {id:'d21_c6',texto:'Lei das Estatais — Lei 13.303/2016',feito:false},
  {id:'d21_c7',texto:'Consórcios públicos e entidades paraestatais',feito:false},
  {id:'d21_c8',texto:'Competência penal — ratione loci, materiae e personae',feito:false},
  {id:'d21_c9',texto:'Competência pelo lugar da infração — art. 70 CPP',feito:false},
  {id:'d21_c10',texto:'Competência pelo domicílio do réu',feito:false},
  {id:'d21_c11',texto:'Conexão e continência',feito:false},
  {id:'d21_c12',texto:'Foro por prerrogativa de função',feito:false},
  {id:'d21_c13',texto:'Competência da Justiça Federal — art. 109 CF',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[5], lei_seca:['DL 200/67 (organização administrativa)', 'Lei 13.303/2016', 'CPP arts. 69-91 (competência)', 'CF art. 109'] },

// ════════════════════════════════════════════════════
// SEMANA 06 — DIAS 22–27 · VDE dias 29–34
// ════════════════════════════════════════════════════

// DIA 22 — VDE dia 29 — Administrativo + Constitucional
{ dia:22, semana:6,
  titulo:'Administrativo · Atos Administrativos · Constitucional · Nacionalidade',
  descricao:'Conceito, atributos e elementos do ato administrativo; nacionalidade originária e derivada',
  emoji_principal:'🏛️', materia:'Direito Administrativo',
  materias:[
    { nome:'Direito Administrativo', emoji:'🏛️', horas:2, cor:'sage',
      topicos:[
        'Ato administrativo — conceito e diferença para fato administrativo',
        'Atributos do ato administrativo — presunção de legitimidade e veracidade, imperatividade, autoexecutoriedade, tipicidade',
        'Elementos/requisitos do ato administrativo — competência, finalidade, forma, motivo e objeto',
        'Vinculação e discricionariedade quanto aos elementos do ato',
        'Mérito administrativo — motivo e objeto nos atos discricionários',
        'Atos administrativos nulos e anuláveis — convalidação (motivo e finalidade não são convalidáveis)',
        'Revogação vs anulação vs cassação do ato administrativo — efeitos ex nunc e ex tunc'
      ],
      grupos:[
        { titulo:'Conceito e Elementos do Ato', qtd:3 },
        { titulo:'Vinculação, Discricionariedade e Mérito', qtd:2 },
        { titulo:'Invalidade e Extinção do Ato', qtd:2 }
      ] },
    { nome:'Direito Constitucional', emoji:'🏛️', horas:2, cor:'lavender',
      topicos:[
        'Nacionalidade — conceito e espécies: originária (primária) e secundária (derivada)',
        'Critérios de nacionalidade originária — ius sanguinis e ius soli (art. 12, I CF)',
        'Brasileiro nato — hipóteses do art. 12, I, "a", "b" e "c" CF',
        'Naturalização — ordinária e extraordinária (quinzenária), requisitos',
        'Português equiparado — quase-nacionalidade e reciprocidade',
        'Cargos privativos de brasileiro nato (art. 12, §3º CF)',
        'Perda da nacionalidade — cancelamento da naturalização e aquisição voluntária de outra nacionalidade'
      ],
      grupos:[
        { titulo:'Nacionalidade Originária', qtd:3 },
        { titulo:'Naturalização e Nacionalidade Derivada', qtd:2 },
        { titulo:'Cargos Privativos e Perda da Nacionalidade', qtd:2 }
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d22_c1',texto:'Ato administrativo — conceito',feito:false},
  {id:'d22_c2',texto:'Atributos do ato administrativo',feito:false},
  {id:'d22_c3',texto:'Elementos — competência, finalidade, forma, motivo, objeto',feito:false},
  {id:'d22_c4',texto:'Vinculação e discricionariedade dos elementos',feito:false},
  {id:'d22_c5',texto:'Mérito administrativo — motivo e objeto',feito:false},
  {id:'d22_c6',texto:'Atos nulos e anuláveis — convalidação',feito:false},
  {id:'d22_c7',texto:'Revogação vs anulação vs cassação',feito:false},
  {id:'d22_c8',texto:'Nacionalidade originária e derivada',feito:false},
  {id:'d22_c9',texto:'Ius sanguinis e ius soli — art. 12, I CF',feito:false},
  {id:'d22_c10',texto:'Brasileiro nato — art. 12, I, "a"-"c" CF',feito:false},
  {id:'d22_c11',texto:'Naturalização ordinária e extraordinária',feito:false},
  {id:'d22_c12',texto:'Português equiparado',feito:false},
  {id:'d22_c13',texto:'Cargos privativos de brasileiro nato — art. 12, §3º CF',feito:false},
  {id:'d22_c14',texto:'Perda da nacionalidade',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[5], lei_seca:['Lei 9.784/99 (atos e processo administrativo)', 'CF art. 12 (nacionalidade)'] },

// DIA 23 — VDE dia 30 — Direito do Trabalho
{ dia:23, semana:6,
  titulo:'Trabalho · Alteração, Interrupção e Suspensão do Contrato de Trabalho',
  descricao:'Alteração contratual lícita, jus variandi, e as hipóteses de interrupção e suspensão contratual',
  emoji_principal:'👷', materia:'Direito do Trabalho',
  materias:[{ nome:'Direito do Trabalho', emoji:'👷', horas:4, cor:'sage',
    topicos:[
      'Alteração do contrato de trabalho — regra do mútuo consentimento e vedação a prejuízo ao empregado (art. 468 CLT)',
      'Jus variandi do empregador — alterações lícitas unilaterais dentro do poder diretivo',
      'Reversão do cargo de confiança — hipótese de alteração unilateral lícita',
      'Transferência do empregado — vedação regra geral e exceções (art. 469 CLT) e adicional de transferência',
      'Interrupção do contrato de trabalho — conceito: suspensão da prestação de serviços com manutenção salarial e contagem de tempo',
      'Hipóteses de interrupção — férias, feriados, DSR, licença-paternidade, faltas justificadas (art. 473 CLT), primeiros 15 dias de afastamento por doença',
      'Suspensão do contrato de trabalho — conceito: cessação recíproca de obrigações, sem salário nem contagem de tempo (regra)',
      'Hipóteses de suspensão — afastamento por auxílio-doença/acidente após 15º dia, suspensão disciplinar, aposentadoria por invalidez, greve (regra)',
      'Efeitos sobre FGTS, férias e 13º durante interrupção e suspensão'
    ],
    grupos:[
      { titulo:'Alteração do Contrato', qtd:4 },
      { titulo:'Interrupção do Contrato', qtd:2 },
      { titulo:'Suspensão do Contrato e Efeitos', qtd:3 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d23_c1',texto:'Alteração contratual — art. 468 CLT',feito:false},
  {id:'d23_c2',texto:'Jus variandi do empregador',feito:false},
  {id:'d23_c3',texto:'Reversão do cargo de confiança',feito:false},
  {id:'d23_c4',texto:'Transferência do empregado — art. 469 CLT',feito:false},
  {id:'d23_c5',texto:'Interrupção — conceito e manutenção salarial',feito:false},
  {id:'d23_c6',texto:'Hipóteses de interrupção — art. 473 CLT e primeiros 15 dias de doença',feito:false},
  {id:'d23_c7',texto:'Suspensão — conceito: sem salário nem contagem de tempo',feito:false},
  {id:'d23_c8',texto:'Hipóteses de suspensão — auxílio-doença, suspensão disciplinar, greve',feito:false},
  {id:'d23_c9',texto:'Efeitos sobre FGTS, férias e 13º',feito:false}
  ],
  sumula:{ sigla:'Súmula 269 TST', texto:'O empregado eleito para ocupar cargo de confiança, uma vez reconduzido ao cargo efetivo, não faz jus a estabilidade.' },
  incidencia:81, pdf_id:_VDE_PDF_IDS[5], lei_seca:['CLT art. 468 (alteração)', 'CLT art. 469 (transferência)', 'CLT art. 471-476 (interrupção e suspensão)', 'CLT art. 473 (faltas justificadas)'] },

// DIA 24 — VDE dia 31 — Direito Civil
{ dia:24, semana:6,
  titulo:'Civil · Obrigações — Adimplemento, Extinção e Modalidades',
  descricao:'Pagamento e suas modalidades especiais, causas de extinção sem pagamento e classificação das obrigações',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'rose',
    topicos:[
      'Adimplemento — pagamento como forma natural de extinção da obrigação',
      'Sujeitos do pagamento — quem deve pagar (solvens) e a quem se deve pagar (accipiens)',
      'Objeto do pagamento — princípios da identidade e integralidade da prestação',
      'Pagamento em consignação — hipóteses de cabimento e requisitos',
      'Pagamento com sub-rogação — legal e convencional; efeitos sobre o crédito',
      'Imputação do pagamento — critérios quando há mais de uma dívida',
      'Dação em pagamento, novação, compensação, confusão e remissão de dívidas — extinção sem pagamento direto',
      'Obrigações quanto ao objeto — de dar (coisa certa/incerta), de fazer e de não fazer',
      'Obrigações de fazer — fungível vs infungível; execução específica e perdas e danos',
      'Obrigações quanto aos sujeitos — divisíveis e indivisíveis; solidariedade ativa e passiva',
      'Obrigação alternativa vs facultativa — distinção quanto à concentração e perecimento'
    ],
    grupos:[
      { titulo:'Adimplemento e Extinção das Obrigações', qtd:7 },
      { titulo:'Modalidades das Obrigações', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d24_c1',texto:'Adimplemento — pagamento como extinção natural',feito:false},
  {id:'d24_c2',texto:'Sujeitos do pagamento — solvens e accipiens',feito:false},
  {id:'d24_c3',texto:'Objeto do pagamento — identidade e integralidade',feito:false},
  {id:'d24_c4',texto:'Pagamento em consignação',feito:false},
  {id:'d24_c5',texto:'Pagamento com sub-rogação — legal e convencional',feito:false},
  {id:'d24_c6',texto:'Imputação do pagamento',feito:false},
  {id:'d24_c7',texto:'Dação, novação, compensação, confusão, remissão',feito:false},
  {id:'d24_c8',texto:'Obrigações de dar, fazer e não fazer',feito:false},
  {id:'d24_c9',texto:'Obrigação de fazer fungível vs infungível',feito:false},
  {id:'d24_c10',texto:'Obrigações divisíveis e indivisíveis; solidariedade',feito:false},
  {id:'d24_c11',texto:'Obrigação alternativa vs facultativa',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[5], lei_seca:['CC arts. 233-285 (modalidades das obrigações)', 'CC arts. 304-388 (adimplemento e extinção)'] },

// DIA 25 — VDE dia 32 — Previdenciário + Tributário
{ dia:25, semana:6,
  titulo:'Previdenciário · Beneficiários do RGPS e Seguridade Social · Tributário · Imunidades',
  descricao:'Segurados obrigatórios e dependentes do RGPS, princípios constitucionais da seguridade social e imunidades tributárias',
  emoji_principal:'🛡️', materia:'Direito Previdenciário',
  materias:[
    { nome:'Direito Previdenciário', emoji:'🛡️', horas:2, cor:'gold',
      topicos:[
        'Seguridade Social — tripé saúde, previdência e assistência social (art. 194 CF)',
        'Princípios constitucionais da seguridade social — universalidade, uniformidade, seletividade, irredutibilidade, equidade no custeio',
        'Regime Geral de Previdência Social (RGPS) — filiação obrigatória e contributividade',
        'Segurados obrigatórios — empregado, empregado doméstico, contribuinte individual, trabalhador avulso, segurado especial',
        'Segurado facultativo — quem pode se filiar e requisitos',
        'Qualidade de segurado — manutenção e período de graça (art. 15 Lei 8.213/91)',
        'Dependentes do RGPS — classes I, II e III e a presunção de dependência econômica'
      ],
      grupos:[
        { titulo:'Seguridade Social e Princípios Constitucionais', qtd:2 },
        { titulo:'Beneficiários do RGPS', qtd:5 }
      ] },
    { nome:'Direito Tributário', emoji:'💰', horas:2, cor:'gold',
      topicos:[
        'Imunidade tributária — conceito e distinção para isenção (imunidade é constitucional, isenção é legal)',
        'Imunidade recíproca — vedação a impostos entre entes federativos (art. 150, VI, a CF) e extensão às autarquias/fundações',
        'Imunidade religiosa — templos de qualquer culto (art. 150, VI, b CF)',
        'Imunidade dos partidos políticos, entidades sindicais dos trabalhadores, instituições de educação e assistência social sem fins lucrativos',
        'Imunidade cultural — livros, jornais, periódicos e o papel destinado à sua impressão (art. 150, VI, d CF)',
        'Imunidade musical — fonogramas e videofonogramas de obras musicais brasileiras (art. 150, VI, e CF)'
      ],
      grupos:[
        { titulo:'Imunidade Tributária — Conceito', qtd:1 },
        { titulo:'Espécies de Imunidades', qtd:5 }
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d25_c1',texto:'Seguridade Social — saúde, previdência e assistência',feito:false},
  {id:'d25_c2',texto:'Princípios constitucionais da seguridade social',feito:false},
  {id:'d25_c3',texto:'RGPS — filiação obrigatória',feito:false},
  {id:'d25_c4',texto:'Segurados obrigatórios do RGPS',feito:false},
  {id:'d25_c5',texto:'Segurado facultativo',feito:false},
  {id:'d25_c6',texto:'Qualidade de segurado — período de graça',feito:false},
  {id:'d25_c7',texto:'Dependentes do RGPS — classes I, II e III',feito:false},
  {id:'d25_c8',texto:'Imunidade vs isenção',feito:false},
  {id:'d25_c9',texto:'Imunidade recíproca — art. 150, VI, a CF',feito:false},
  {id:'d25_c10',texto:'Imunidade religiosa — templos de qualquer culto',feito:false},
  {id:'d25_c11',texto:'Imunidade de partidos, sindicatos e entidades sem fins lucrativos',feito:false},
  {id:'d25_c12',texto:'Imunidade cultural — livros, jornais e periódicos',feito:false},
  {id:'d25_c13',texto:'Imunidade musical — fonogramas brasileiros',feito:false}
  ],
  sumula:{ sigla:'Súmula Vinculante 52 · STF', texto:'Ainda quando alugado a terceiros, permanece imune ao IPTU o imóvel pertencente a qualquer das entidades referidas pelo art. 150, VI, c, da CF, desde que o valor dos aluguéis seja aplicado nas atividades para as quais tais entidades foram constituídas.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[5], lei_seca:['Lei 8.213/91 (segurados e dependentes)', 'CF art. 194', 'CF art. 150, VI (imunidades)'] },

// DIA 26 — VDE dia 33 — Processo do Trabalho
{ dia:26, semana:6,
  titulo:'Processo do Trabalho · Ação Trabalhista, Audiência e Defesa do Réu',
  descricao:'Petição inicial trabalhista, estrutura da audiência una e as modalidades de defesa do réu',
  emoji_principal:'⚖️', materia:'Processo do Trabalho',
  materias:[{ nome:'Processo do Trabalho', emoji:'⚖️', horas:4, cor:'sage',
    topicos:[
      'Reclamação trabalhista — requisitos da petição inicial (art. 840 CLT) e pedido líquido',
      'Prescrição trabalhista — bienal (extinção do contrato) e quinquenal (parcelas vencidas)',
      'Audiência Una — estrutura: abertura, proposta de conciliação, defesa, instrução e julgamento',
      'Ausência das partes na audiência — arquivamento (reclamante) e revelia/confissão (reclamada)',
      'Preposto — requisito de conhecimento dos fatos e dispensa da condição de empregado',
      'Defesa do réu — contestação, exceções (incompetência, suspeição, impedimento) e reconvenção',
      'Revelia — efeitos e hipóteses em que não se aplica a confissão ficta',
      'Conciliação — obrigatoriedade da proposta em todas as audiências trabalhistas'
    ],
    grupos:[
      { titulo:'Ação Trabalhista', qtd:2 },
      { titulo:'Audiência Una', qtd:3 },
      { titulo:'Defesa do Réu, Revelia e Conciliação', qtd:3 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d26_c1',texto:'Petição inicial trabalhista — art. 840 CLT',feito:false},
  {id:'d26_c2',texto:'Prescrição bienal e quinquenal',feito:false},
  {id:'d26_c3',texto:'Audiência Una — estrutura',feito:false},
  {id:'d26_c4',texto:'Ausência das partes — arquivamento e revelia',feito:false},
  {id:'d26_c5',texto:'Preposto — requisitos',feito:false},
  {id:'d26_c6',texto:'Defesa do réu — contestação, exceções, reconvenção',feito:false},
  {id:'d26_c7',texto:'Revelia — efeitos e exceções',feito:false},
  {id:'d26_c8',texto:'Conciliação obrigatória',feito:false}
  ],
  sumula:{ sigla:'Súmula 74 TST', texto:'Aplica-se a confissão à parte que, expressamente intimada com aquela cominação, não comparecer à audiência em prosseguimento, na qual deveria depor.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[6], lei_seca:['CLT arts. 837-852 (procedimento ordinário)', 'CLT art. 840 (petição inicial)', 'CLT art. 843 (audiência)'] },

// DIA 27 — VDE dia 34 — Direito Penal
{ dia:27, semana:6,
  titulo:'Penal · Culpabilidade e Ilicitude',
  descricao:'Elementos da culpabilidade, erro de proibição e as causas excludentes de ilicitude',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:[
      'Culpabilidade — conceito na teoria finalista (juízo de reprovação) e elementos: imputabilidade, potencial consciência da ilicitude, exigibilidade de conduta diversa',
      'Imputabilidade penal — inimputabilidade por doença mental, menoridade (18 anos) e embriaguez completa fortuita/força maior',
      'Semi-imputabilidade — redução de pena e possibilidade de substituição por medida de segurança',
      'Potencial consciência da ilicitude — erro de proibição direto e indireto (descriminantes putativas)',
      'Erro de proibição escusável (isenta de pena) vs inescusável (reduz a pena)',
      'Exigibilidade de conduta diversa — excludentes: coação moral irresistível e obediência hierárquica',
      'Ilicitude — conceito e excludentes (art. 23 CP): estado de necessidade, legítima defesa, estrito cumprimento do dever legal, exercício regular de direito',
      'Estado de necessidade — requisitos e teoria unitária adotada pelo CP',
      'Legítima defesa — requisitos: agressão injusta, atual ou iminente, uso moderado dos meios necessários',
      'Excesso doloso e culposo nas excludentes de ilicitude'
    ],
    grupos:[
      { titulo:'Culpabilidade', qtd:6 },
      { titulo:'Ilicitude', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d27_c1',texto:'Culpabilidade — teoria finalista e elementos',feito:false},
  {id:'d27_c2',texto:'Imputabilidade — inimputabilidade por doença mental e menoridade',feito:false},
  {id:'d27_c3',texto:'Semi-imputabilidade',feito:false},
  {id:'d27_c4',texto:'Erro de proibição — direto e indireto',feito:false},
  {id:'d27_c5',texto:'Erro de proibição escusável vs inescusável',feito:false},
  {id:'d27_c6',texto:'Exigibilidade de conduta diversa — coação e obediência hierárquica',feito:false},
  {id:'d27_c7',texto:'Excludentes de ilicitude — art. 23 CP',feito:false},
  {id:'d27_c8',texto:'Estado de necessidade — requisitos',feito:false},
  {id:'d27_c9',texto:'Legítima defesa — requisitos',feito:false},
  {id:'d27_c10',texto:'Excesso doloso e culposo',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[6], lei_seca:['CP arts. 20-22 (erro)', 'CP arts. 23-25 (excludentes de ilicitude)', 'CP arts. 26-28 (imputabilidade)'] },

// ════════════════════════════════════════════════════
// SEMANA 07 — DIAS 28–32 · VDE dias 36–40
// (VDE dia 35 = Day off, dia 41 = Day off, dia 42 = Simulado — não mapeados)
// ════════════════════════════════════════════════════

// DIA 28 — VDE dia 36 — Ética Profissional
{ dia:28, semana:7,
  titulo:'Ética · Direitos e Prerrogativas dos Advogados; Honorários Advocatícios',
  descricao:'Prerrogativas profissionais do art. 7º EOAB e as espécies de honorários advocatícios',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'champagne',
    topicos:[
      'Prerrogativas do advogado (art. 7º EOAB) — inviolabilidade do escritório e correspondência, comunicação com o cliente preso',
      'Prisão em flagrante do advogado — necessidade de comunicação imediata ao Conselho da OAB',
      'Sala de Estado Maior — prerrogativa até o trânsito em julgado',
      'Direito de retirar autos e vista fora de cartório',
      'Direito de ingressar livremente em salas de audiência e presídios',
      'Honorários contratuais — livre pactuação entre advogado e cliente',
      'Honorários sucumbenciais — pertencem ao advogado, natureza alimentar',
      'Honorários arbitrados judicialmente — critérios de fixação (art. 22 EOAB)',
      'Direito de retenção de autos e bens do cliente até a satisfação dos honorários'
    ],
    grupos:[
      { titulo:'Direitos e Prerrogativas dos Advogados', qtd:5 },
      { titulo:'Honorários Advocatícios', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d28_c1',texto:'Prerrogativas do art. 7º EOAB — inviolabilidade',feito:false},
  {id:'d28_c2',texto:'Prisão em flagrante do advogado — comunicação à OAB',feito:false},
  {id:'d28_c3',texto:'Sala de Estado Maior',feito:false},
  {id:'d28_c4',texto:'Direito de retirar autos e vista fora de cartório',feito:false},
  {id:'d28_c5',texto:'Direito de ingresso em salas de audiência e presídios',feito:false},
  {id:'d28_c6',texto:'Honorários contratuais — livre pactuação',feito:false},
  {id:'d28_c7',texto:'Honorários sucumbenciais — natureza alimentar',feito:false},
  {id:'d28_c8',texto:'Honorários arbitrados judicialmente — art. 22 EOAB',feito:false},
  {id:'d28_c9',texto:'Direito de retenção de autos e bens',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[6], lei_seca:['EOAB art. 7º (prerrogativas)', 'EOAB arts. 22-26 (honorários)'] },

// DIA 29 — VDE dia 37 — Processo Civil
{ dia:29, semana:7,
  titulo:'Processo Civil · Intervenção de Terceiros, Litisconsórcio e Tutela Provisória',
  descricao:'Modalidades de intervenção de terceiros e as tutelas provisórias de urgência e de evidência',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'sage',
    topicos:[
      'Assistência simples e litisconsorcial — legitimidade e limites de atuação do assistente',
      'Denunciação da lide — hipóteses do art. 125 CPC e direito de regresso',
      'Chamamento ao processo — hipóteses do art. 130 CPC (fiador, devedores solidários)',
      'Incidente de desconsideração da personalidade jurídica — natureza de intervenção de terceiros',
      'Amicus curiae — requisitos e limites de atuação',
      'Litisconsórcio — revisão: unitário/simples e necessário/facultativo (conexão com o dia anterior)',
      'Tutela provisória — gênero: tutela de urgência e tutela de evidência',
      'Tutela de urgência cautelar vs antecipada — requisitos comuns: probabilidade do direito e perigo de dano (art. 300 CPC)',
      'Tutela de urgência antecedente — estabilização da tutela antecipada (art. 304 CPC)',
      'Tutela de evidência — hipóteses do art. 311 CPC, dispensa de urgência'
    ],
    grupos:[
      { titulo:'Intervenção de Terceiros', qtd:5 },
      { titulo:'Litisconsórcio', qtd:1 },
      { titulo:'Tutela Provisória', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d29_c1',texto:'Assistência simples e litisconsorcial',feito:false},
  {id:'d29_c2',texto:'Denunciação da lide — art. 125 CPC',feito:false},
  {id:'d29_c3',texto:'Chamamento ao processo — art. 130 CPC',feito:false},
  {id:'d29_c4',texto:'Incidente de desconsideração da personalidade jurídica',feito:false},
  {id:'d29_c5',texto:'Amicus curiae',feito:false},
  {id:'d29_c6',texto:'Litisconsórcio unitário/simples e necessário/facultativo',feito:false},
  {id:'d29_c7',texto:'Tutela de urgência vs tutela de evidência',feito:false},
  {id:'d29_c8',texto:'Cautelar vs antecipada — art. 300 CPC',feito:false},
  {id:'d29_c9',texto:'Estabilização da tutela antecipada — art. 304 CPC',feito:false},
  {id:'d29_c10',texto:'Tutela de evidência — art. 311 CPC',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[6], lei_seca:['CPC arts. 119-138 (intervenção de terceiros)', 'CPC arts. 294-311 (tutela provisória)'] },

// DIA 30 — VDE dia 38 — Estatuto da Criança e do Adolescente
{ dia:30, semana:7,
  titulo:'ECA · Direitos Fundamentais, Família Substituta e Ato Infracional',
  descricao:'Direitos fundamentais da criança e do adolescente, guarda/tutela/adoção e medidas socioeducativas',
  emoji_principal:'👶', materia:'Estatuto da Criança e do Adolescente',
  materias:[{ nome:'Estatuto da Criança e do Adolescente', emoji:'👶', horas:4, cor:'champagne',
    topicos:[
      'Princípio da proteção integral e da prioridade absoluta (art. 227 CF e art. 4º ECA)',
      'Criança (até 12 anos incompletos) vs adolescente (12 a 18 anos) — distinção e regimes aplicáveis',
      'Direito à vida, à saúde, à liberdade, ao respeito e à dignidade — direitos fundamentais do ECA',
      'Direito à convivência familiar e comunitária — prioridade da família natural',
      'Família substituta — modalidades: guarda, tutela e adoção',
      'Guarda — regulariza a posse de fato, pode ser deferida liminarmente, não implica em destituição do poder familiar',
      'Tutela — pressupõe destituição ou suspensão do poder familiar, concedida a partir dos 18 anos incompletos',
      'Adoção — medida excepcional e irrevogável; adoção por estrangeiro como última alternativa; estágio de convivência',
      'Requisitos e impedimentos para adoção — diferença mínima de 16 anos entre adotante e adotando',
      'Ato infracional — conduta descrita como crime ou contravenção penal praticada por criança ou adolescente',
      'Medidas socioeducativas — advertência, obrigação de reparar o dano, prestação de serviços à comunidade, liberdade assistida, semiliberdade, internação',
      'Internação — princípios da excepcionalidade, brevidade e respeito à condição de pessoa em desenvolvimento; prazo máximo de 3 anos'
    ],
    grupos:[
      { titulo:'Direitos Fundamentais', qtd:4 },
      { titulo:'Família Substituta', qtd:5 },
      { titulo:'Ato Infracional e Medidas Socioeducativas', qtd:3 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d30_c1',texto:'Proteção integral e prioridade absoluta',feito:false},
  {id:'d30_c2',texto:'Criança vs adolescente — critério etário',feito:false},
  {id:'d30_c3',texto:'Direitos fundamentais do ECA',feito:false},
  {id:'d30_c4',texto:'Direito à convivência familiar e comunitária',feito:false},
  {id:'d30_c5',texto:'Família substituta — guarda, tutela, adoção',feito:false},
  {id:'d30_c6',texto:'Guarda — regularização da posse de fato',feito:false},
  {id:'d30_c7',texto:'Tutela — destituição do poder familiar',feito:false},
  {id:'d30_c8',texto:'Adoção — excepcionalidade e irrevogabilidade',feito:false},
  {id:'d30_c9',texto:'Requisitos e impedimentos para adoção',feito:false},
  {id:'d30_c10',texto:'Ato infracional — conceito',feito:false},
  {id:'d30_c11',texto:'Medidas socioeducativas — rol',feito:false},
  {id:'d30_c12',texto:'Internação — princípios e prazo máximo de 3 anos',feito:false}
  ],
  sumula:{ sigla:'Súmula 342 STJ', texto:'No procedimento para aplicação de medida sócio-educativa, é nula a desistência de outras provas em face da confissão do adolescente.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[6], lei_seca:['Lei 8.069/90 (ECA) arts. 1º-52 (direitos fundamentais e família substituta)', 'ECA arts. 103-125 (ato infracional e medidas socioeducativas)'] },

// DIA 31 — VDE dia 39 — Direito Penal
{ dia:31, semana:7,
  titulo:'Penal · Concurso de Pessoas e Extinção da Punibilidade',
  descricao:'Autoria, coautoria e participação no crime; causas de extinção da punibilidade',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:[
      'Concurso de pessoas — requisitos: pluralidade de agentes e condutas, relevância causal, liame subjetivo, identidade de infração',
      'Teoria monista (regra do art. 29 CP) vs pluralista (exceção — crimes de mão própria)',
      'Autoria — teoria restritiva vs teoria do domínio do fato',
      'Coautoria e participação — distinção quanto à execução do núcleo do tipo',
      'Participação de menor importância — causa de diminuição de pena (art. 29, §1º CP)',
      'Cooperação dolosamente distinta / desvio subjetivo de conduta (art. 29, §2º CP)',
      'Autoria colateral vs autoria incerta',
      'Extinção da punibilidade — rol do art. 107 CP: morte do agente, anistia/graça/indulto, abolitio criminis, prescrição',
      'Decadência e perempção — extinção da punibilidade nas ações penais privadas',
      'Renúncia e perdão do ofendido — distinção quanto ao momento (antes/depois do início da ação)',
      'Retratação do agente — hipóteses expressas em lei (calúnia, difamação, falso testemunho)',
      'Prescrição — da pretensão punitiva (abstrata, retroativa, intercorrente) e da pretensão executória'
    ],
    grupos:[
      { titulo:'Concurso de Pessoas', qtd:7 },
      { titulo:'Extinção da Punibilidade', qtd:5 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d31_c1',texto:'Concurso de pessoas — requisitos',feito:false},
  {id:'d31_c2',texto:'Teoria monista vs pluralista',feito:false},
  {id:'d31_c3',texto:'Autoria — teoria restritiva vs domínio do fato',feito:false},
  {id:'d31_c4',texto:'Coautoria vs participação',feito:false},
  {id:'d31_c5',texto:'Participação de menor importância — art. 29, §1º CP',feito:false},
  {id:'d31_c6',texto:'Cooperação dolosamente distinta — art. 29, §2º CP',feito:false},
  {id:'d31_c7',texto:'Autoria colateral vs autoria incerta',feito:false},
  {id:'d31_c8',texto:'Extinção da punibilidade — rol do art. 107 CP',feito:false},
  {id:'d31_c9',texto:'Decadência e perempção',feito:false},
  {id:'d31_c10',texto:'Renúncia vs perdão do ofendido',feito:false},
  {id:'d31_c11',texto:'Retratação do agente',feito:false},
  {id:'d31_c12',texto:'Prescrição da pretensão punitiva e executória',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[6], lei_seca:['CP arts. 29-31 (concurso de pessoas)', 'CP arts. 107-120 (extinção da punibilidade)'] },

// DIA 32 — VDE dia 40 — Civil + Consumidor
{ dia:32, semana:7,
  titulo:'Civil · Obrigações — Inadimplemento · Consumidor · Política Nacional das Relações de Consumo',
  descricao:'Mora, inadimplemento absoluto, cláusula penal e os princípios e objetivos da Política Nacional das Relações de Consumo',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[
    { nome:'Direito Civil', emoji:'📜', horas:2, cor:'rose',
      topicos:[
        'Inadimplemento das obrigações — absoluto (impossibilidade) vs relativo/mora (atraso)',
        'Mora do devedor (solvendi) e mora do credor (accipiendi) — requisitos e efeitos',
        'Purgação da mora — possibilidade de emenda',
        'Cláusula penal — moratória vs compensatória; função de pré-fixação de perdas e danos',
        'Perdas e danos — danos emergentes e lucros cessantes',
        'Juros legais, correção monetária e arras (confirmatórias e penitenciais)'
      ],
      grupos:[
        { titulo:'Inadimplemento e Mora', qtd:3 },
        { titulo:'Cláusula Penal, Perdas e Danos', qtd:3 }
      ] },
    { nome:'Direito do Consumidor', emoji:'🛒', horas:2, cor:'lavender',
      topicos:[
        'Política Nacional das Relações de Consumo — objetivo de atendimento das necessidades dos consumidores (art. 4º CDC)',
        'Princípios da Política Nacional — vulnerabilidade do consumidor, harmonização de interesses, boa-fé objetiva',
        'Instrumentos da Política Nacional — educação, informação e incentivo à criação de associações',
        'Direitos básicos do consumidor — rol do art. 6º CDC (visão introdutória)',
        'Conceito de consumidor — padrão (finalista) e por equiparação (arts. 2º, parágrafo único, 17 e 29 CDC)',
        'Conceito de fornecedor — amplitude da cadeia de fornecimento'
      ],
      grupos:[
        { titulo:'Política Nacional das Relações de Consumo', qtd:3 },
        { titulo:'Conceitos Básicos do CDC', qtd:3 }
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d32_c1',texto:'Inadimplemento absoluto vs mora',feito:false},
  {id:'d32_c2',texto:'Mora do devedor e mora do credor',feito:false},
  {id:'d32_c3',texto:'Purgação da mora',feito:false},
  {id:'d32_c4',texto:'Cláusula penal — moratória vs compensatória',feito:false},
  {id:'d32_c5',texto:'Perdas e danos — emergentes e lucros cessantes',feito:false},
  {id:'d32_c6',texto:'Arras confirmatórias e penitenciais',feito:false},
  {id:'d32_c7',texto:'Política Nacional das Relações de Consumo — art. 4º CDC',feito:false},
  {id:'d32_c8',texto:'Princípios da Política Nacional — vulnerabilidade e boa-fé',feito:false},
  {id:'d32_c9',texto:'Instrumentos da Política Nacional',feito:false},
  {id:'d32_c10',texto:'Direitos básicos do consumidor — art. 6º CDC',feito:false},
  {id:'d32_c11',texto:'Conceito de consumidor — padrão e por equiparação',feito:false},
  {id:'d32_c12',texto:'Conceito de fornecedor',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[6], lei_seca:['CC arts. 389-420 (inadimplemento)', 'CDC arts. 2º-6º'] },

// ════════════════════════════════════════════════════
// SEMANA 08 — DIAS 33–37 · VDE dias 50–54
// (VDE dias 43-49 = Semana de Revisão do VDE — sem conteúdo novo, não mapeados)
// ════════════════════════════════════════════════════

// DIA 33 — VDE dia 50 — Direito Constitucional
{ dia:33, semana:8,
  titulo:'Constitucional · Organização do Estado e Repartição de Competências',
  descricao:'Forma federativa de Estado, entes federativos e a repartição constitucional de competências',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:[
      'Forma de Estado — Federação (art. 1º e 18 CF) e características: indissolubilidade, autonomia dos entes',
      'Entes federativos — União, Estados, Distrito Federal e Municípios; auto-organização, autogoverno, autoadministração',
      'Vedações constitucionais aos entes federativos (art. 19 CF)',
      'Repartição de competências — critério da predominância do interesse',
      'Competência legislativa exclusiva vs privativa da União (arts. 21 e 22 CF) — delegação por lei complementar',
      'Competência legislativa concorrente (art. 24 CF) — normas gerais (União) vs normas específicas (Estados)',
      'Competência legislativa suplementar dos Estados e competência plena na ausência de norma geral',
      'Competência comum administrativa (art. 23 CF) — atuação material paralela de todos os entes',
      'Competência dos Municípios — interesse local e suplementar (art. 30 CF)',
      'Intervenção federal e estadual — hipóteses e limites (excepcionalidade)'
    ],
    grupos:[
      { titulo:'Organização do Estado', qtd:3 },
      { titulo:'Repartição de Competências', qtd:6 },
      { titulo:'Intervenção Federal e Estadual', qtd:1 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d33_c1',texto:'Forma federativa de Estado — art. 1º e 18 CF',feito:false},
  {id:'d33_c2',texto:'Entes federativos — autonomias',feito:false},
  {id:'d33_c3',texto:'Vedações constitucionais aos entes — art. 19 CF',feito:false},
  {id:'d33_c4',texto:'Repartição de competências — predominância do interesse',feito:false},
  {id:'d33_c5',texto:'Competência exclusiva vs privativa da União',feito:false},
  {id:'d33_c6',texto:'Competência concorrente — art. 24 CF',feito:false},
  {id:'d33_c7',texto:'Competência suplementar dos Estados',feito:false},
  {id:'d33_c8',texto:'Competência comum — art. 23 CF',feito:false},
  {id:'d33_c9',texto:'Competência dos Municípios — interesse local',feito:false},
  {id:'d33_c10',texto:'Intervenção federal e estadual',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[7], lei_seca:['CF arts. 1º, 18-19 (federação)', 'CF arts. 21-24 (competências legislativas)', 'CF art. 23 (competência comum)', 'CF art. 30 (Municípios)'] },

// DIA 34 — VDE dia 51 — Processo do Trabalho + Trabalho
{ dia:34, semana:8,
  titulo:'Processo do Trabalho · Provas · Trabalho · Duração do Trabalho',
  descricao:'Ônus da prova no processo do trabalho e o regramento constitucional/celetista da jornada de trabalho',
  emoji_principal:'⚖️', materia:'Processo do Trabalho',
  materias:[
    { nome:'Processo do Trabalho', emoji:'⚖️', horas:2, cor:'sage',
      topicos:[
        'Ônus da prova — regra geral: quem alega deve provar (art. 818 CLT c/c art. 373 CPC)',
        'Distribuição dinâmica do ônus da prova — inversão em razão da hipossuficiência ou impossibilidade',
        'Meios de prova no processo do trabalho — depoimento pessoal, testemunhal, documental, pericial',
        'Prova emprestada — requisitos de admissibilidade',
        'Confissão — ficta (revelia) e real (depoimento pessoal)'
      ],
      grupos:[
        { titulo:'Ônus da Prova', qtd:2 },
        { titulo:'Meios de Prova', qtd:3 }
      ] },
    { nome:'Direito do Trabalho', emoji:'👷', horas:2, cor:'sage',
      topicos:[
        'Duração do trabalho — jornada normal de 8h diárias e 44h semanais (art. 7º, XIII CF)',
        'Horas extras — adicional mínimo de 50% e limite de 2 horas diárias',
        'Banco de horas — compensação por acordo individual (até 6 meses) ou coletivo (até 1 ano)',
        'Intervalos intrajornada e interjornada — supressão e consequências',
        'Trabalho noturno — hora reduzida (52min30s) e adicional mínimo de 20%',
        'Regimes de compensação de jornada — 12x36 e sua previsão em lei (Lei 13.467/17)',
        'Sobreaviso e prontidão — remuneração diferenciada'
      ],
      grupos:[
        { titulo:'Jornada e Horas Extras', qtd:3 },
        { titulo:'Intervalos e Trabalho Noturno', qtd:2 },
        { titulo:'Regimes Especiais de Jornada', qtd:2 }
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d34_c1',texto:'Ônus da prova — art. 818 CLT',feito:false},
  {id:'d34_c2',texto:'Distribuição dinâmica do ônus da prova',feito:false},
  {id:'d34_c3',texto:'Meios de prova no processo do trabalho',feito:false},
  {id:'d34_c4',texto:'Prova emprestada',feito:false},
  {id:'d34_c5',texto:'Confissão ficta e real',feito:false},
  {id:'d34_c6',texto:'Jornada normal — 8h/44h (art. 7º, XIII CF)',feito:false},
  {id:'d34_c7',texto:'Horas extras — adicional de 50%',feito:false},
  {id:'d34_c8',texto:'Banco de horas',feito:false},
  {id:'d34_c9',texto:'Intervalos intra e interjornada',feito:false},
  {id:'d34_c10',texto:'Trabalho noturno — hora reduzida e adicional',feito:false},
  {id:'d34_c11',texto:'Regime 12x36',feito:false},
  {id:'d34_c12',texto:'Sobreaviso e prontidão',feito:false}
  ],
  sumula:{ sigla:'Súmula 338 TST', texto:'É ônus do empregador que conta com mais de 10 empregados o registro da jornada de trabalho, sendo relativa a presunção de veracidade da jornada da inicial se não apresentados os controles.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[7], lei_seca:['CLT art. 818', 'CPC art. 373', 'CF art. 7º, XIII', 'CLT arts. 58-75 (duração do trabalho)'] },

// DIA 35 — VDE dia 52 — Direito Civil
{ dia:35, semana:8,
  titulo:'Civil · Contratos — Disposições Gerais',
  descricao:'Princípios contratuais, formação, classificação e vícios redibitórios/evicção',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'rose',
    topicos:[
      'Princípios contratuais clássicos — autonomia da vontade, obrigatoriedade (pacta sunt servanda), relatividade dos efeitos',
      'Princípios contratuais sociais — função social do contrato, boa-fé objetiva, equilíbrio econômico',
      'Formação dos contratos — proposta (policitação) e aceitação; momento e lugar de formação',
      'Contrato preliminar — requisitos e direito à adjudicação compulsória',
      'Classificação dos contratos — bilaterais/unilaterais, onerosos/gratuitos, comutativos/aleatórios, consensuais/reais',
      'Vícios redibitórios — defeito oculto que torna a coisa imprópria ao uso ou diminui seu valor',
      'Evicção — perda da coisa por decisão judicial/administrativa que reconhece direito anterior de terceiro',
      'Extinção dos contratos — cumprimento, resilição (uni/bilateral), resolução e rescisão',
      'Exceção do contrato não cumprido (exceptio non adimpleti contractus)',
      'Teoria da imprevisão e onerosidade excessiva — art. 478 CC'
    ],
    grupos:[
      { titulo:'Princípios Contratuais', qtd:2 },
      { titulo:'Formação e Classificação dos Contratos', qtd:3 },
      { titulo:'Vícios Redibitórios e Evicção', qtd:2 },
      { titulo:'Extinção dos Contratos', qtd:3 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d35_c1',texto:'Princípios contratuais clássicos',feito:false},
  {id:'d35_c2',texto:'Princípios contratuais sociais — função social e boa-fé',feito:false},
  {id:'d35_c3',texto:'Formação dos contratos — proposta e aceitação',feito:false},
  {id:'d35_c4',texto:'Contrato preliminar — adjudicação compulsória',feito:false},
  {id:'d35_c5',texto:'Classificação dos contratos',feito:false},
  {id:'d35_c6',texto:'Vícios redibitórios',feito:false},
  {id:'d35_c7',texto:'Evicção',feito:false},
  {id:'d35_c8',texto:'Extinção dos contratos — resilição, resolução, rescisão',feito:false},
  {id:'d35_c9',texto:'Exceção do contrato não cumprido',feito:false},
  {id:'d35_c10',texto:'Teoria da imprevisão — art. 478 CC',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[7], lei_seca:['CC arts. 421-480 (disposições gerais dos contratos)', 'CC arts. 441-457 (vícios redibitórios e evicção)'] },

// DIA 36 — VDE dia 53 — Direito Tributário
{ dia:36, semana:8,
  titulo:'Tributário · Conceito de Tributo e Espécies Tributárias',
  descricao:'Definição legal de tributo (art. 3º CTN) e as cinco espécies tributárias reconhecidas pela CF',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:[
      'Conceito legal de tributo (art. 3º CTN) — prestação pecuniária, compulsória, que não constitua sanção, instituída em lei, cobrada por atividade administrativa vinculada',
      'Tributo não é sanção — distinção de multa tributária',
      'Espécies tributárias — teoria pentapartida adotada pelo STF: impostos, taxas, contribuições de melhoria, empréstimos compulsórios, contribuições especiais',
      'Impostos — tributo não vinculado a atividade estatal específica (art. 16 CTN)',
      'Taxas — vinculadas ao exercício do poder de polícia ou à prestação de serviço público específico e divisível',
      'Taxa vs preço público (tarifa) — distinção quanto à compulsoriedade e regime jurídico',
      'Contribuição de melhoria — vinculada à valorização imobiliária decorrente de obra pública',
      'Empréstimo compulsório — restituível, exige lei complementar',
      'Contribuições especiais — sociais, de intervenção no domínio econômico (CIDE), corporativas e de iluminação pública (COSIP)'
    ],
    grupos:[
      { titulo:'Conceito de Tributo', qtd:2 },
      { titulo:'Espécies Tributárias', qtd:7 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d36_c1',texto:'Conceito legal de tributo — art. 3º CTN',feito:false},
  {id:'d36_c2',texto:'Tributo não é sanção',feito:false},
  {id:'d36_c3',texto:'Teoria pentapartida — 5 espécies tributárias',feito:false},
  {id:'d36_c4',texto:'Impostos — tributo não vinculado',feito:false},
  {id:'d36_c5',texto:'Taxas — poder de polícia e serviço específico/divisível',feito:false},
  {id:'d36_c6',texto:'Taxa vs preço público',feito:false},
  {id:'d36_c7',texto:'Contribuição de melhoria',feito:false},
  {id:'d36_c8',texto:'Empréstimo compulsório — restituível',feito:false},
  {id:'d36_c9',texto:'Contribuições especiais — sociais, CIDE, corporativas, COSIP',feito:false}
  ],
  sumula:{ sigla:'Súmula Vinculante 19 · STF', texto:'A taxa cobrada exclusivamente em razão dos serviços públicos de coleta, remoção e tratamento ou destinação de lixo ou resíduos provenientes de imóveis não viola o artigo 145, II, da Constituição Federal.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[7], lei_seca:['CTN art. 3º (conceito de tributo)', 'CTN arts. 16-82 (espécies tributárias)', 'CF art. 145, 148, 149, 149-A'] },

// DIA 37 — VDE dia 54 — Direito Penal
{ dia:37, semana:8,
  titulo:'Penal · Concurso de Crimes e Das Penas',
  descricao:'Concurso material, formal e crime continuado; sistema de penas do Código Penal',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:[
      'Concurso material (real) — mais de uma conduta e mais de um resultado; sistema do cúmulo material',
      'Concurso formal (ideal) — uma conduta e mais de um resultado; sistema da exasperação (regra) e cúmulo material (exceção — desígnios autônomos)',
      'Crime continuado — pluralidade de condutas da mesma espécie, mesmas condições de tempo, lugar e maneira de execução',
      'Crime continuado específico — crimes contra vítimas diferentes com violência ou grave ameaça',
      'Penas privativas de liberdade — reclusão e detenção; regimes fechado, semiaberto e aberto',
      'Critérios de fixação do regime inicial — quantidade de pena, reincidência e circunstâncias judiciais',
      'Penas restritivas de direitos — espécies (prestação pecuniária, perda de bens, prestação de serviços, interdição temporária, limitação de fim de semana)',
      'Requisitos para substituição da pena privativa por restritiva (art. 44 CP)',
      'Pena de multa — critério do dia-multa e cálculo',
      'Dosimetria da pena — sistema trifásico (circunstâncias judiciais, atenuantes/agravantes, causas de aumento/diminuição)'
    ],
    grupos:[
      { titulo:'Concurso de Crimes', qtd:4 },
      { titulo:'Das Penas', qtd:6 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d37_c1',texto:'Concurso material — cúmulo material',feito:false},
  {id:'d37_c2',texto:'Concurso formal — exasperação vs cúmulo material',feito:false},
  {id:'d37_c3',texto:'Crime continuado — requisitos',feito:false},
  {id:'d37_c4',texto:'Crime continuado específico',feito:false},
  {id:'d37_c5',texto:'Penas privativas de liberdade — reclusão e detenção',feito:false},
  {id:'d37_c6',texto:'Regimes fechado, semiaberto e aberto',feito:false},
  {id:'d37_c7',texto:'Penas restritivas de direitos — espécies',feito:false},
  {id:'d37_c8',texto:'Requisitos de substituição — art. 44 CP',feito:false},
  {id:'d37_c9',texto:'Pena de multa — dia-multa',feito:false},
  {id:'d37_c10',texto:'Dosimetria — sistema trifásico',feito:false}
  ],
  sumula:{ sigla:'Súmula 711 STF', texto:'A lei penal mais grave aplica-se ao crime continuado ou ao crime permanente, se a sua vigência é anterior à cessação da continuidade ou da permanência.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[7], lei_seca:['CP arts. 69-71 (concurso de crimes)', 'CP arts. 32-52 (penas)', 'CP art. 59 (dosimetria)'] },

// ════════════════════════════════════════════════════
// SEMANA 09 — DIAS 38–42 · VDE dias 57–61
// (VDE dia 55 = Day off, dia 56 = Simulado — não mapeados)
// ════════════════════════════════════════════════════

// DIA 38 — VDE dia 57 — Ética Profissional
{ dia:38, semana:9,
  titulo:'Ética · Incompatibilidades e Impedimentos; Infrações e Sanções Disciplinares',
  descricao:'Rol de incompatibilidades e impedimentos do EOAB e o sistema de infrações e sanções disciplinares',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'champagne',
    topicos:[
      'Incompatibilidade — vedação total ao exercício da advocacia, ainda que em causa própria (art. 27 EOAB)',
      'Rol de incompatibilidades (art. 28 EOAB) — chefes do Executivo, membros do Legislativo com função executiva, magistrados, membros de tribunais de contas, militares, entre outros',
      'Impedimento — vedação parcial, limitada contra determinadas pessoas jurídicas de direito público (art. 30 EOAB)',
      'Infrações disciplinares — rol taxativo do art. 34 EOAB',
      'Sanções disciplinares — censura, suspensão, exclusão e multa (art. 35 EOAB)',
      'Censura — hipóteses de aplicação e possibilidade de conversão em advertência',
      'Suspensão — prazo de 30 dias a 12 meses e efeitos sobre o exercício profissional',
      'Exclusão — hipótese mais grave, exige procedimento específico e quórum qualificado',
      'Prescrição da pretensão disciplinar — prazo de 5 anos (art. 43 EOAB)',
      'Processo disciplinar — competência do Tribunal de Ética e Disciplina'
    ],
    grupos:[
      { titulo:'Incompatibilidades e Impedimentos', qtd:3 },
      { titulo:'Infrações e Sanções Disciplinares', qtd:7 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d38_c1',texto:'Incompatibilidade — vedação total',feito:false},
  {id:'d38_c2',texto:'Rol de incompatibilidades — art. 28 EOAB',feito:false},
  {id:'d38_c3',texto:'Impedimento — vedação parcial',feito:false},
  {id:'d38_c4',texto:'Infrações disciplinares — art. 34 EOAB',feito:false},
  {id:'d38_c5',texto:'Sanções — censura, suspensão, exclusão, multa',feito:false},
  {id:'d38_c6',texto:'Censura — conversão em advertência',feito:false},
  {id:'d38_c7',texto:'Suspensão — prazo de 30 dias a 12 meses',feito:false},
  {id:'d38_c8',texto:'Exclusão — quórum qualificado',feito:false},
  {id:'d38_c9',texto:'Prescrição da pretensão disciplinar — 5 anos',feito:false},
  {id:'d38_c10',texto:'Processo disciplinar — Tribunal de Ética',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[8], lei_seca:['EOAB arts. 27-30 (incompatibilidade e impedimento)', 'EOAB arts. 34-43 (infrações e sanções)'] },

// DIA 39 — VDE dia 58 — Processo Civil
{ dia:39, semana:9,
  titulo:'Processo Civil · Procedimento Comum',
  descricao:'Fases do procedimento comum — postulatória, saneadora, instrutória e decisória',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'sage',
    topicos:[
      'Procedimento comum — fases: postulatória, ordinatória/saneadora, instrutória e decisória',
      'Petição inicial — requisitos do art. 319 CPC e causas de indeferimento (art. 330 CPC)',
      'Emenda à petição inicial — prazo de 15 dias e extinção sem resolução de mérito por inércia',
      'Improcedência liminar do pedido (art. 332 CPC) — hipóteses de julgamento antecipado contrário ao autor',
      'Audiência de conciliação ou mediação — obrigatoriedade e hipóteses de dispensa',
      'Contestação — prazo, ônus da impugnação especificada e defesas processuais/de mérito',
      'Reconvenção — na própria contestação, conexão com a ação principal ou com fundamento de defesa',
      'Providências preliminares e saneamento do processo — julgamento conforme o estado do processo (art. 354-357 CPC)',
      'Julgamento antecipado do mérito (total e parcial) — hipóteses do art. 355-356 CPC',
      'Audiência de instrução e julgamento — estrutura e ordem dos atos'
    ],
    grupos:[
      { titulo:'Petição Inicial', qtd:4 },
      { titulo:'Audiência de Conciliação e Resposta do Réu', qtd:3 },
      { titulo:'Saneamento e Julgamento', qtd:3 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d39_c1',texto:'Fases do procedimento comum',feito:false},
  {id:'d39_c2',texto:'Petição inicial — requisitos e indeferimento',feito:false},
  {id:'d39_c3',texto:'Emenda à petição inicial — prazo de 15 dias',feito:false},
  {id:'d39_c4',texto:'Improcedência liminar — art. 332 CPC',feito:false},
  {id:'d39_c5',texto:'Audiência de conciliação/mediação',feito:false},
  {id:'d39_c6',texto:'Contestação — ônus da impugnação especificada',feito:false},
  {id:'d39_c7',texto:'Reconvenção',feito:false},
  {id:'d39_c8',texto:'Julgamento conforme o estado do processo',feito:false},
  {id:'d39_c9',texto:'Julgamento antecipado total e parcial do mérito',feito:false},
  {id:'d39_c10',texto:'Audiência de instrução e julgamento',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[8], lei_seca:['CPC arts. 318-333 (petição inicial e resposta)', 'CPC arts. 354-368 (julgamento conforme o estado do processo)'] },

// DIA 40 — VDE dia 59 — Direito Empresarial
{ dia:40, semana:9,
  titulo:'Empresarial · Títulos de Crédito',
  descricao:'Princípios cambiários e as espécies de títulos de crédito — letra de câmbio, nota promissória, cheque e duplicata',
  emoji_principal:'🏢', materia:'Direito Empresarial',
  materias:[{ nome:'Direito Empresarial', emoji:'🏢', horas:4, cor:'nude',
    topicos:[
      'Conceito de título de crédito (Vivante) — documento necessário para o exercício do direito literal e autônomo nele contido',
      'Princípio da cartularidade — necessidade do documento físico para exercício do direito',
      'Princípio da literalidade — vale o que está escrito no título',
      'Princípio da autonomia das obrigações cambiais — independência entre as obrigações assumidas no título',
      'Abstração — desvinculação do título em relação ao negócio jurídico subjacente após a circulação',
      'Endosso — próprio vs impróprio (caução e mandato); endosso em branco e em preto',
      'Aval — garantia pessoal cambiária; aval em branco e sucessivo; diferença para fiança',
      'Letra de câmbio — saque, aceite e vencimento',
      'Nota promissória — promessa direta de pagamento, dispensa de aceite',
      'Cheque — ordem de pagamento à vista, prazo de apresentação e sustação/revogação',
      'Duplicata — título causal, vinculado à compra e venda mercantil ou prestação de serviços; aceite obrigatório, presumido ou por comunicação'
    ],
    grupos:[
      { titulo:'Princípios Cambiários', qtd:5 },
      { titulo:'Endosso e Aval', qtd:2 },
      { titulo:'Títulos em Espécie', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d40_c1',texto:'Conceito de título de crédito — Vivante',feito:false},
  {id:'d40_c2',texto:'Princípio da cartularidade',feito:false},
  {id:'d40_c3',texto:'Princípio da literalidade',feito:false},
  {id:'d40_c4',texto:'Princípio da autonomia das obrigações cambiais',feito:false},
  {id:'d40_c5',texto:'Abstração do título',feito:false},
  {id:'d40_c6',texto:'Endosso próprio vs impróprio',feito:false},
  {id:'d40_c7',texto:'Aval — garantia cambiária vs fiança',feito:false},
  {id:'d40_c8',texto:'Letra de câmbio — saque, aceite, vencimento',feito:false},
  {id:'d40_c9',texto:'Nota promissória',feito:false},
  {id:'d40_c10',texto:'Cheque — prazo de apresentação e sustação',feito:false},
  {id:'d40_c11',texto:'Duplicata — título causal e aceite',feito:false}
  ],
  sumula:{ sigla:'Súmula 387 STF', texto:'A cambial emitida ou aceita com omissões, ou em branco, pode ser completada pelo credor de boa-fé antes da cobrança ou do protesto.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[8], lei_seca:['LUG (Decreto 57.663/66)', 'Lei 7.357/85 (cheque)', 'Lei 5.474/68 (duplicata)', 'CC arts. 887-926 (títulos de crédito)'] },

// DIA 41 — VDE dia 60 — Processo Penal
{ dia:41, semana:9,
  titulo:'Processo Penal · Provas; Questões e Processos Incidentes',
  descricao:'Sistema probatório do CPP, ônus da prova, provas ilícitas e os incidentes processuais',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:[
      'Sistema de apreciação da prova — livre convencimento motivado (persuasão racional)',
      'Ônus da prova — regra geral do art. 156 CPP; acusação prova o alegado',
      'Provas ilícitas e ilegítimas — distinção e a teoria dos frutos da árvore envenenada',
      'Provas ilícitas por derivação — exceções: fonte independente, descoberta inevitável, nexo causal atenuado',
      'Busca e apreensão — requisitos e limites (mandado judicial e exceções)',
      'Interceptação telefônica — Lei 9.296/96, requisitos e prazo',
      'Prova testemunhal — capacidade, deveres e vedações ao depoimento',
      'Reconhecimento de pessoas e coisas — procedimento do art. 226 CPP',
      'Exceções processuais — suspeição, incompetência, litispendência, ilegitimidade de parte, coisa julgada',
      'Conflito de competência e conflito de atribuições — distinção e órgão julgador',
      'Restituição de coisas apreendidas — procedimento incidental'
    ],
    grupos:[
      { titulo:'Provas', qtd:8 },
      { titulo:'Questões e Processos Incidentes', qtd:3 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d41_c1',texto:'Livre convencimento motivado',feito:false},
  {id:'d41_c2',texto:'Ônus da prova — art. 156 CPP',feito:false},
  {id:'d41_c3',texto:'Provas ilícitas — frutos da árvore envenenada',feito:false},
  {id:'d41_c4',texto:'Exceções à ilicitude por derivação',feito:false},
  {id:'d41_c5',texto:'Busca e apreensão — requisitos',feito:false},
  {id:'d41_c6',texto:'Interceptação telefônica — Lei 9.296/96',feito:false},
  {id:'d41_c7',texto:'Prova testemunhal — capacidade e vedações',feito:false},
  {id:'d41_c8',texto:'Reconhecimento de pessoas e coisas — art. 226 CPP',feito:false},
  {id:'d41_c9',texto:'Exceções processuais',feito:false},
  {id:'d41_c10',texto:'Conflito de competência vs conflito de atribuições',feito:false},
  {id:'d41_c11',texto:'Restituição de coisas apreendidas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[8], lei_seca:['CPP arts. 155-250 (prova)', 'CPP arts. 95-154 (questões e processos incidentes)', 'Lei 9.296/96'] },

// DIA 42 — VDE dia 61 — Direito Administrativo
{ dia:42, semana:9,
  titulo:'Administrativo · Agentes Públicos',
  descricao:'Classificação dos agentes públicos, cargo/emprego/função e regime jurídico dos servidores',
  emoji_principal:'🏛️', materia:'Direito Administrativo',
  materias:[{ nome:'Direito Administrativo', emoji:'🏛️', horas:4, cor:'sage',
    topicos:[
      'Agentes públicos — conceito amplo e classificação: agentes políticos, servidores estatais, particulares em colaboração',
      'Agentes políticos — membros dos Poderes, vínculo institucional/eletivo',
      'Servidores estatais — servidores públicos (estatutários) e empregados públicos (celetistas)',
      'Cargo público, emprego público e função pública — distinção quanto ao regime jurídico',
      'Provimento de cargo público — originário (nomeação) e derivado (promoção, readaptação, reversão, aproveitamento, reintegração, recondução)',
      'Concurso público — regra geral (art. 37, II CF), prazo de validade e prorrogação',
      'Estabilidade — requisitos (3 anos de efetivo exercício e avaliação especial de desempenho)',
      'Vacância — exoneração, demissão, aposentadoria, falecimento, promoção',
      'Acumulação de cargos públicos — regra da vedação e exceções constitucionais (art. 37, XVI CF)',
      'Responsabilidade do servidor — civil, penal e administrativa; independência das instâncias'
    ],
    grupos:[
      { titulo:'Classificação dos Agentes Públicos', qtd:3 },
      { titulo:'Cargo e Provimento', qtd:3 },
      { titulo:'Estabilidade, Vacância e Responsabilidade', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d42_c1',texto:'Agentes públicos — classificação',feito:false},
  {id:'d42_c2',texto:'Agentes políticos',feito:false},
  {id:'d42_c3',texto:'Servidores estatutários vs empregados celetistas',feito:false},
  {id:'d42_c4',texto:'Cargo, emprego e função pública',feito:false},
  {id:'d42_c5',texto:'Provimento originário e derivado',feito:false},
  {id:'d42_c6',texto:'Concurso público — art. 37, II CF',feito:false},
  {id:'d42_c7',texto:'Estabilidade — requisitos',feito:false},
  {id:'d42_c8',texto:'Vacância de cargo público',feito:false},
  {id:'d42_c9',texto:'Acumulação de cargos — art. 37, XVI CF',feito:false},
  {id:'d42_c10',texto:'Responsabilidade civil, penal e administrativa do servidor',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[8], lei_seca:['CF art. 37 (servidores públicos)', 'CF art. 41 (estabilidade)', 'Lei 8.112/90'] },

// ════════════════════════════════════════════════════
// SEMANA 10 — DIAS 43–47 · VDE dias 64–68
// (VDE dia 62 = Revisão Quinzenal, dia 63 = Day off — não mapeados)
// ════════════════════════════════════════════════════

// DIA 43 — VDE dia 64 — Consumidor + Processo Civil
{ dia:43, semana:10,
  titulo:'Consumidor · Direitos Básicos e Proteção Contratual · Processo Civil · Sentença e Coisa Julgada',
  descricao:'Direitos básicos do consumidor, cláusulas abusivas e os elementos da sentença civil e da coisa julgada',
  emoji_principal:'🛒', materia:'Direito do Consumidor',
  materias:[
    { nome:'Direito do Consumidor', emoji:'🛒', horas:2, cor:'lavender',
      topicos:[
        'Direitos básicos do consumidor (art. 6º CDC) — proteção à vida/saúde, educação, informação, proteção contratual',
        'Direito à informação — clareza, adequação e o dever de informação prévia sobre riscos',
        'Inversão do ônus da prova — critério da verossimilhança ou hipossuficiência (art. 6º, VIII CDC)',
        'Proteção contratual — interpretação mais favorável ao consumidor (art. 47 CDC)',
        'Cláusulas abusivas — rol exemplificativo do art. 51 CDC e nulidade de pleno direito',
        'Direito de arrependimento — 7 dias em contratações fora do estabelecimento comercial (art. 49 CDC)',
        'Contratos de adesão — limites e cláusulas que implicam limitação de direito (destaque obrigatório)'
      ],
      grupos:[
        { titulo:'Direitos Básicos do Consumidor', qtd:3 },
        { titulo:'Proteção Contratual', qtd:4 }
      ] },
    { nome:'Processo Civil', emoji:'📋', horas:2, cor:'sage',
      topicos:[
        'Sentença — conceito (art. 203, §1º CPC) e classificação quanto ao conteúdo (art. 487 CPC)',
        'Sentença com resolução de mérito vs sem resolução de mérito (arts. 485 e 487 CPC)',
        'Elementos da sentença — relatório, fundamentação e dispositivo',
        'Coisa julgada formal vs coisa julgada material — distinção quanto à imutabilidade',
        'Limites objetivos e subjetivos da coisa julgada',
        'Coisa julgada e questão prejudicial — extensão pelo art. 503, §1º CPC',
        'Relativização da coisa julgada — hipóteses excepcionais e ação rescisória'
      ],
      grupos:[
        { titulo:'Sentença', qtd:3 },
        { titulo:'Coisa Julgada', qtd:4 }
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d43_c1',texto:'Direitos básicos do consumidor — art. 6º CDC',feito:false},
  {id:'d43_c2',texto:'Direito à informação',feito:false},
  {id:'d43_c3',texto:'Inversão do ônus da prova — art. 6º, VIII CDC',feito:false},
  {id:'d43_c4',texto:'Proteção contratual — interpretação favorável ao consumidor',feito:false},
  {id:'d43_c5',texto:'Cláusulas abusivas — art. 51 CDC',feito:false},
  {id:'d43_c6',texto:'Direito de arrependimento — 7 dias',feito:false},
  {id:'d43_c7',texto:'Contratos de adesão',feito:false},
  {id:'d43_c8',texto:'Sentença — conceito e classificação',feito:false},
  {id:'d43_c9',texto:'Sentença com e sem resolução de mérito',feito:false},
  {id:'d43_c10',texto:'Elementos da sentença',feito:false},
  {id:'d43_c11',texto:'Coisa julgada formal vs material',feito:false},
  {id:'d43_c12',texto:'Limites objetivos e subjetivos da coisa julgada',feito:false},
  {id:'d43_c13',texto:'Coisa julgada e questão prejudicial — art. 503, §1º CPC',feito:false},
  {id:'d43_c14',texto:'Relativização da coisa julgada',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[9], lei_seca:['CDC arts. 6º, 47-54 (direitos básicos e proteção contratual)', 'CPC arts. 203, 485-508 (sentença e coisa julgada)'] },

// DIA 44 — VDE dia 65 — Constitucional + Previdenciário
{ dia:44, semana:10,
  titulo:'Constitucional · Intervenção e Poder Executivo · Previdenciário · Benefícios e Aposentadorias',
  descricao:'Intervenção federal/estadual, estrutura do Poder Executivo e as espécies de benefícios previdenciários',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[
    { nome:'Direito Constitucional', emoji:'🏛️', horas:2, cor:'lavender',
      topicos:[
        'Intervenção federal — hipóteses taxativas do art. 34 CF e caráter excepcional',
        'Intervenção estadual nos Municípios — hipóteses do art. 35 CF',
        'Procedimento da intervenção — decreto interventivo, controle político (Congresso/Assembleia) e controle jurisdicional',
        'Poder Executivo — chefia de Estado, de governo e da Administração',
        'Eleição, mandato e reeleição do Presidente da República',
        'Perda do mandato presidencial — crimes de responsabilidade e infrações penais comuns',
        'Ministros de Estado — atribuições e responsabilidade'
      ],
      grupos:[
        { titulo:'Intervenção Federal e Estadual', qtd:3 },
        { titulo:'Poder Executivo', qtd:4 }
      ] },
    { nome:'Direito Previdenciário', emoji:'🛡️', horas:2, cor:'gold',
      topicos:[
        'Aposentadoria por idade — requisitos etários e de carência (regras pós-EC 103/2019)',
        'Aposentadoria por tempo de contribuição — regras de transição após a Reforma da Previdência',
        'Aposentadoria por invalidez (incapacidade permanente) — requisitos e adicional de 25%',
        'Auxílio-doença (incapacidade temporária) — carência e período de graça',
        'Salário-maternidade — carência e beneficiárias',
        'Auxílio-acidente — natureza indenizatória, sem carência',
        'Pensão por morte — dependentes e requisitos após a Reforma da Previdência'
      ],
      grupos:[
        { titulo:'Aposentadorias', qtd:3 },
        { titulo:'Auxílios e Pensão por Morte', qtd:4 }
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d44_c1',texto:'Intervenção federal — art. 34 CF',feito:false},
  {id:'d44_c2',texto:'Intervenção estadual nos Municípios — art. 35 CF',feito:false},
  {id:'d44_c3',texto:'Procedimento da intervenção — controles',feito:false},
  {id:'d44_c4',texto:'Poder Executivo — chefias de Estado, governo e administração',feito:false},
  {id:'d44_c5',texto:'Eleição, mandato e reeleição presidencial',feito:false},
  {id:'d44_c6',texto:'Perda do mandato presidencial',feito:false},
  {id:'d44_c7',texto:'Ministros de Estado',feito:false},
  {id:'d44_c8',texto:'Aposentadoria por idade',feito:false},
  {id:'d44_c9',texto:'Aposentadoria por tempo de contribuição — transição',feito:false},
  {id:'d44_c10',texto:'Aposentadoria por invalidez',feito:false},
  {id:'d44_c11',texto:'Auxílio-doença',feito:false},
  {id:'d44_c12',texto:'Salário-maternidade',feito:false},
  {id:'d44_c13',texto:'Auxílio-acidente',feito:false},
  {id:'d44_c14',texto:'Pensão por morte',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[9], lei_seca:['CF arts. 34-36 (intervenção)', 'CF arts. 76-91 (Poder Executivo)', 'Lei 8.213/91 (benefícios)', 'EC 103/2019'] },

// DIA 45 — VDE dia 66 — Direito do Trabalho
{ dia:45, semana:10,
  titulo:'Trabalho · Estabilidade, Remuneração e Salário',
  descricao:'Hipóteses de estabilidade e garantia provisória de emprego; conceitos de salário e remuneração',
  emoji_principal:'👷', materia:'Direito do Trabalho',
  materias:[{ nome:'Direito do Trabalho', emoji:'👷', horas:4, cor:'sage',
    topicos:[
      'Estabilidade decenal — regra geral extinta com o FGTS (regime obrigatório desde 1988)',
      'Garantias provisórias de emprego — dirigente sindical, cipeiro, gestante, acidentado, membro de comissão de conciliação prévia',
      'Estabilidade da gestante — desde a confirmação da gravidez até 5 meses após o parto, independe de conhecimento do empregador',
      'Estabilidade do cipeiro — do registro da candidatura até 1 ano após o fim do mandato',
      'Estabilidade do dirigente sindical — art. 8º, VIII CF, do registro da candidatura até 1 ano após o mandato',
      'Estabilidade acidentária — 12 meses após a cessação do auxílio-doença acidentário',
      'Salário vs remuneração — remuneração = salário + gorjetas',
      'Salário-base, adicionais (insalubridade, periculosidade, noturno) e gratificações',
      'Salário complessivo — vedação (Súmula 91 TST)',
      'Salário in natura — utilidades e seus limites (art. 458 CLT)',
      'Equiparação salarial — requisitos do art. 461 CLT (mesma função, mesma localidade, diferença de tempo não superior a 4 anos)'
    ],
    grupos:[
      { titulo:'Estabilidade', qtd:6 },
      { titulo:'Remuneração e Salário', qtd:5 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d45_c1',texto:'Estabilidade decenal — regra extinta pelo FGTS',feito:false},
  {id:'d45_c2',texto:'Garantias provisórias de emprego — rol',feito:false},
  {id:'d45_c3',texto:'Estabilidade da gestante',feito:false},
  {id:'d45_c4',texto:'Estabilidade do cipeiro',feito:false},
  {id:'d45_c5',texto:'Estabilidade do dirigente sindical — art. 8º, VIII CF',feito:false},
  {id:'d45_c6',texto:'Estabilidade acidentária — 12 meses',feito:false},
  {id:'d45_c7',texto:'Salário vs remuneração',feito:false},
  {id:'d45_c8',texto:'Adicionais — insalubridade, periculosidade, noturno',feito:false},
  {id:'d45_c9',texto:'Vedação ao salário complessivo — Súmula 91 TST',feito:false},
  {id:'d45_c10',texto:'Salário in natura — art. 458 CLT',feito:false},
  {id:'d45_c11',texto:'Equiparação salarial — art. 461 CLT',feito:false}
  ],
  sumula:{ sigla:'Súmula 244 TST', texto:'O desconhecimento do estado gravídico pelo empregador não afasta o direito à estabilidade provisória.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[9], lei_seca:['CF art. 8º, VIII e art. 10, ADCT (estabilidades)', 'CLT arts. 457-461 (salário e remuneração)'] },

// DIA 46 — VDE dia 67 — Direito Civil
{ dia:46, semana:10,
  titulo:'Civil · Contratos em Espécie',
  descricao:'Compra e venda, doação, locação, comodato, mútuo, prestação de serviços e demais contratos típicos',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'rose',
    topicos:[
      'Compra e venda — elementos essenciais (coisa, preço, consenso) e cláusulas especiais (retrovenda, preempção, venda a contento)',
      'Troca/permuta — regras de aplicação subsidiária da compra e venda',
      'Doação — pura, remuneratória, com encargo; revogação por ingratidão e inadimplemento de encargo',
      'Doação inoficiosa — nulidade da parte que exceder a legítima dos herdeiros necessários',
      'Locação de coisas — direitos e obrigações do locador e locatário no CC (distinção da Lei do Inquilinato)',
      'Comodato — empréstimo gratuito de coisa infungível; comodato verbal e prazo presumido',
      'Mútuo — empréstimo de coisa fungível, com transferência de propriedade',
      'Prestação de serviços — prazo máximo de 4 anos e aviso prévio para resilição',
      'Empreitada — de lavor vs mista; responsabilidade do empreiteiro por solidez e segurança (art. 618 CC)',
      'Mandato — outorga, poderes, obrigações do mandatário e extinção',
      'Fiança — natureza acessória, benefício de ordem e exoneração do fiador'
    ],
    grupos:[
      { titulo:'Compra e Venda, Troca e Doação', qtd:4 },
      { titulo:'Locação, Comodato e Mútuo', qtd:3 },
      { titulo:'Prestação de Serviços e Empreitada', qtd:2 },
      { titulo:'Mandato e Fiança', qtd:2 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d46_c1',texto:'Compra e venda — elementos e cláusulas especiais',feito:false},
  {id:'d46_c2',texto:'Troca/permuta',feito:false},
  {id:'d46_c3',texto:'Doação — espécies e revogação por ingratidão',feito:false},
  {id:'d46_c4',texto:'Doação inoficiosa',feito:false},
  {id:'d46_c5',texto:'Locação de coisas — CC',feito:false},
  {id:'d46_c6',texto:'Comodato — empréstimo gratuito',feito:false},
  {id:'d46_c7',texto:'Mútuo — transferência de propriedade',feito:false},
  {id:'d46_c8',texto:'Prestação de serviços — prazo máximo de 4 anos',feito:false},
  {id:'d46_c9',texto:'Empreitada — responsabilidade do art. 618 CC',feito:false},
  {id:'d46_c10',texto:'Mandato — outorga e extinção',feito:false},
  {id:'d46_c11',texto:'Fiança — benefício de ordem',feito:false}
  ],
  sumula:{ sigla:'Art. 618 CC', texto:'Nos contratos de empreitada de edifícios ou outras construções consideráveis, o empreiteiro de materiais e execução responderá, durante o prazo irredutível de 5 anos, pela solidez e segurança do trabalho.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[9], lei_seca:['CC arts. 481-532 (compra e venda)', 'CC arts. 538-564 (doação)', 'CC arts. 565-578 (locação)', 'CC arts. 579-592 (comodato e mútuo)', 'CC arts. 593-609 (prestação de serviços)', 'CC arts. 610-626 (empreitada)', 'CC arts. 653-666 (mandato)', 'CC arts. 818-839 (fiança)'] },

// DIA 47 — VDE dia 68 — Direito Tributário
{ dia:47, semana:10,
  titulo:'Tributário · Obrigação Tributária e Responsabilidade Tributária',
  descricao:'Obrigação principal e acessória, fato gerador, sujeitos e as modalidades de responsabilidade tributária',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:[
      'Obrigação tributária principal — pagamento de tributo ou penalidade pecuniária',
      'Obrigação tributária acessória — prestações positivas ou negativas no interesse da fiscalização (deveres instrumentais)',
      'Fato gerador da obrigação principal e da obrigação acessória — distinção',
      'Fato gerador — aspectos material, temporal, espacial, pessoal e quantitativo',
      'Sujeito ativo — capacidade tributária ativa; sujeito passivo — contribuinte e responsável',
      'Solidariedade tributária — passiva, sem benefício de ordem',
      'Responsabilidade por substituição tributária — progressiva (para frente) e regressiva (para trás)',
      'Responsabilidade por transferência — sucessão empresarial, sucessão causa mortis, sucessão imobiliária',
      'Responsabilidade de terceiros (art. 134 CTN) — atuação regular vs irregular (art. 135 CTN)',
      'Responsabilidade pessoal dos administradores por atos com excesso de poder ou infração à lei'
    ],
    grupos:[
      { titulo:'Obrigação Tributária', qtd:5 },
      { titulo:'Responsabilidade Tributária', qtd:5 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d47_c1',texto:'Obrigação tributária principal',feito:false},
  {id:'d47_c2',texto:'Obrigação tributária acessória',feito:false},
  {id:'d47_c3',texto:'Fato gerador da principal e da acessória',feito:false},
  {id:'d47_c4',texto:'Aspectos do fato gerador',feito:false},
  {id:'d47_c5',texto:'Sujeito ativo e passivo — contribuinte e responsável',feito:false},
  {id:'d47_c6',texto:'Solidariedade tributária passiva',feito:false},
  {id:'d47_c7',texto:'Substituição tributária progressiva e regressiva',feito:false},
  {id:'d47_c8',texto:'Responsabilidade por transferência — sucessões',feito:false},
  {id:'d47_c9',texto:'Responsabilidade de terceiros — art. 134 CTN',feito:false},
  {id:'d47_c10',texto:'Responsabilidade pessoal dos administradores — art. 135 CTN',feito:false}
  ],
  sumula:{ sigla:'Súmula 430 STJ', texto:'O inadimplemento da obrigação tributária pela sociedade não gera, por si só, a responsabilidade solidária do sócio-gerente.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[9], lei_seca:['CTN arts. 113-118 (obrigação tributária)', 'CTN arts. 121-138 (responsabilidade tributária)'] },

// ════════════════════════════════════════════════════
// SEMANA 11 — DIAS 48–52 · VDE dias 71–75
// (VDE dia 69 = Day off, dia 70 = Simulado — não mapeados)
// ════════════════════════════════════════════════════

// DIA 48 — VDE dia 71 — Direito Penal
{ dia:48, semana:11,
  titulo:'Penal · Crimes Contra a Honra e Crimes Contra a Vida',
  descricao:'Calúnia, difamação, injúria e injúria racial; homicídio, induzimento ao suicídio, infanticídio e aborto',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:[
      'Calúnia — imputação falsa de fato definido como crime, admite exceção da verdade',
      'Difamação — imputação de fato ofensivo à reputação, exceção da verdade restrita (funcionário público)',
      'Injúria — ofensa à dignidade ou decoro, sem imputação de fato específico',
      'Injúria racial — Lei 14.532/2023 equiparou a crime de racismo (imprescritível e inafiançável)',
      'Distinção entre os três crimes contra a honra e o elemento subjetivo (animus injuriandi)',
      'Homicídio simples, privilegiado (motivo de relevante valor social/moral, violenta emoção) e qualificado (art. 121, §2º CP)',
      'Homicídio culposo — majorantes (inobservância de regra técnica, deixar de prestar socorro)',
      'Induzimento, instigação e auxílio ao suicídio ou automutilação (art. 122 CP, redação Lei 13.968/19)',
      'Infanticídio — sujeito ativo próprio (mãe), estado puerperal e durante ou logo após o parto',
      'Aborto — espécies (natural, criminoso, legal) e excludentes: aborto necessário e aborto sentimental/humanitário'
    ],
    grupos:[
      { titulo:'Crimes Contra a Honra', qtd:5 },
      { titulo:'Crimes Contra a Vida', qtd:5 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d48_c1',texto:'Calúnia — exceção da verdade',feito:false},
  {id:'d48_c2',texto:'Difamação — exceção da verdade restrita',feito:false},
  {id:'d48_c3',texto:'Injúria — sem imputação de fato',feito:false},
  {id:'d48_c4',texto:'Injúria racial — Lei 14.532/2023',feito:false},
  {id:'d48_c5',texto:'Distinção entre os crimes contra a honra',feito:false},
  {id:'d48_c6',texto:'Homicídio simples, privilegiado e qualificado',feito:false},
  {id:'d48_c7',texto:'Homicídio culposo — majorantes',feito:false},
  {id:'d48_c8',texto:'Induzimento, instigação e auxílio ao suicídio — art. 122 CP',feito:false},
  {id:'d48_c9',texto:'Infanticídio — requisitos',feito:false},
  {id:'d48_c10',texto:'Aborto — espécies e excludentes',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[10], lei_seca:['CP arts. 121-128 (crimes contra a vida)', 'CP arts. 138-140 (crimes contra a honra)', 'Lei 14.532/2023'] },

// DIA 49 — VDE dia 72 — Ética Profissional
{ dia:49, semana:11,
  titulo:'Ética · Ética do Advogado nas Relações com o Cliente; Processo Administrativo Disciplinar',
  descricao:'Sigilo profissional, conflito de interesses e o rito do processo disciplinar perante a OAB',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'champagne',
    topicos:[
      'Sigilo profissional — dever essencial, alcance amplo e exceções absolutas (grave ameaça ao direito à vida)',
      'Conflito de interesses — vedação de patrocínio de causas de partes contrárias por sócios do mesmo escritório',
      'Independência técnica do advogado — vedação a instruções que comprometam a defesa',
      'Publicidade da advocacia — moderação, discrição e vedação à mercantilização (Provimento 205/2021 OAB)',
      'Captação de clientela — vedação e configuração como infração disciplinar',
      'Processo Ético-Disciplinar — natureza, competência do Tribunal de Ética e Disciplina da Seccional',
      'Instauração do processo disciplinar — representação e denúncia (inclusive por terceiros)',
      'Direito de defesa — contraditório, ampla defesa e possibilidade de constituir defensor dativo',
      'Julgamento — recursos cabíveis das decisões do Tribunal de Ética (recurso ao Conselho Seccional e ao Conselho Federal)',
      'Prescrição da pretensão disciplinar — 5 anos (art. 43 EOAB)'
    ],
    grupos:[
      { titulo:'Ética do Advogado e Relações com o Cliente', qtd:5 },
      { titulo:'Processo Administrativo Disciplinar', qtd:5 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d49_c1',texto:'Sigilo profissional — alcance e exceções',feito:false},
  {id:'d49_c2',texto:'Conflito de interesses',feito:false},
  {id:'d49_c3',texto:'Independência técnica do advogado',feito:false},
  {id:'d49_c4',texto:'Publicidade da advocacia — Provimento 205/2021',feito:false},
  {id:'d49_c5',texto:'Captação de clientela — vedação',feito:false},
  {id:'d49_c6',texto:'Processo Ético-Disciplinar — competência',feito:false},
  {id:'d49_c7',texto:'Instauração — representação e denúncia',feito:false},
  {id:'d49_c8',texto:'Direito de defesa no processo disciplinar',feito:false},
  {id:'d49_c9',texto:'Recursos das decisões do Tribunal de Ética',feito:false},
  {id:'d49_c10',texto:'Prescrição da pretensão disciplinar — 5 anos',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[10], lei_seca:['Código de Ética e Disciplina da OAB', 'EOAB arts. 68-76 (processo disciplinar)', 'Provimento 205/2021 OAB (publicidade)'] },

// DIA 50 — VDE dia 73 — Processo Penal
{ dia:50, semana:11,
  titulo:'Processo Penal · Prisão, Medidas Cautelares e Liberdade Provisória',
  descricao:'Modalidades de prisão cautelar, medidas cautelares diversas da prisão e as hipóteses de liberdade provisória',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:[
      'Prisão em flagrante — modalidades: próprio, impróprio, presumido e esperado',
      'Comunicação da prisão em flagrante — 24 horas ao juiz, MP e família/pessoa indicada; audiência de custódia',
      'Prisão preventiva — requisitos do art. 312 CPP (garantia da ordem pública/econômica, conveniência da instrução, aplicação da lei penal)',
      'Pressupostos da preventiva — prova da materialidade e indícios de autoria (fumus comissi delicti)',
      'Prisão temporária — Lei 7.960/89, prazo de 5 dias (30 dias em crimes hediondos) e rol taxativo de crimes',
      'Medidas cautelares diversas da prisão — rol do art. 319 CPP (comparecimento periódico, proibições, monitoração eletrônica)',
      'Princípio da excepcionalidade da prisão cautelar e da homogeneidade',
      'Liberdade provisória — com e sem fiança; fiança como caução para responder ao processo em liberdade',
      'Relaxamento de prisão (ilegalidade) vs revogação (desaparecimento dos requisitos) vs concessão de liberdade provisória'
    ],
    grupos:[
      { titulo:'Prisão em Flagrante', qtd:2 },
      { titulo:'Prisão Preventiva e Temporária', qtd:3 },
      { titulo:'Medidas Cautelares Diversas da Prisão', qtd:2 },
      { titulo:'Liberdade Provisória', qtd:2 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d50_c1',texto:'Prisão em flagrante — modalidades',feito:false},
  {id:'d50_c2',texto:'Comunicação da prisão — 24h e audiência de custódia',feito:false},
  {id:'d50_c3',texto:'Prisão preventiva — requisitos do art. 312 CPP',feito:false},
  {id:'d50_c4',texto:'Pressupostos da preventiva',feito:false},
  {id:'d50_c5',texto:'Prisão temporária — Lei 7.960/89',feito:false},
  {id:'d50_c6',texto:'Medidas cautelares diversas — art. 319 CPP',feito:false},
  {id:'d50_c7',texto:'Excepcionalidade e homogeneidade da prisão cautelar',feito:false},
  {id:'d50_c8',texto:'Liberdade provisória com e sem fiança',feito:false},
  {id:'d50_c9',texto:'Relaxamento vs revogação vs liberdade provisória',feito:false}
  ],
  sumula:{ sigla:'Súmula Vinculante 56 · STF', texto:'A falta de estabelecimento penal adequado não autoriza a manutenção do condenado em regime prisional mais gravoso.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[10], lei_seca:['CPP arts. 282-350 (prisão, medidas cautelares e liberdade provisória)', 'Lei 7.960/89'] },

// DIA 51 — VDE dia 74 — Direito Empresarial
{ dia:51, semana:11,
  titulo:'Empresarial · Falência e Recuperação Judicial',
  descricao:'Pressupostos da falência, ordem de classificação dos créditos e os requisitos da recuperação judicial',
  emoji_principal:'🏢', materia:'Direito Empresarial',
  materias:[{ nome:'Direito Empresarial', emoji:'🏢', horas:4, cor:'nude',
    topicos:[
      'Lei 11.101/2005 — âmbito de aplicação e excluídos (empresas públicas, sociedades de economia mista, instituições financeiras)',
      'Falência — pressupostos: impontualidade injustificada (título executivo protestado ≥ 40 salários mínimos), execução frustrada, atos de falência',
      'Legitimidade para requerer a falência — próprio devedor (autofalência), credores, sócio, cotista, acionista',
      'Efeitos da decretação da falência — vencimento antecipado das dívidas, suspensão das ações e execuções, inabilitação empresarial',
      'Ordem de classificação dos créditos na falência — trabalhistas (limite 150 SM), com garantia real, tributários, com privilégio especial/geral, quirografários',
      'Administrador judicial — funções e responsabilidades',
      'Recuperação judicial — finalidade de superação da crise econômico-financeira e preservação da empresa',
      'Requisitos para requerer recuperação judicial — exercício regular há mais de 2 anos, não falido, não condenado por crime falimentar',
      'Plano de recuperação judicial — prazo de apresentação e aprovação pela assembleia geral de credores',
      'Recuperação extrajudicial — negociação prévia com credores e homologação judicial'
    ],
    grupos:[
      { titulo:'Falência', qtd:6 },
      { titulo:'Recuperação Judicial', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d51_c1',texto:'Lei 11.101/2005 — âmbito de aplicação',feito:false},
  {id:'d51_c2',texto:'Pressupostos da falência',feito:false},
  {id:'d51_c3',texto:'Legitimidade para requerer a falência',feito:false},
  {id:'d51_c4',texto:'Efeitos da decretação da falência',feito:false},
  {id:'d51_c5',texto:'Ordem de classificação dos créditos',feito:false},
  {id:'d51_c6',texto:'Administrador judicial',feito:false},
  {id:'d51_c7',texto:'Recuperação judicial — finalidade',feito:false},
  {id:'d51_c8',texto:'Requisitos para requerer recuperação judicial',feito:false},
  {id:'d51_c9',texto:'Plano de recuperação judicial',feito:false},
  {id:'d51_c10',texto:'Recuperação extrajudicial',feito:false}
  ],
  sumula:{ sigla:'Súmula 581 STJ', texto:'A recuperação judicial do devedor principal não impede o prosseguimento das ações e execuções ajuizadas contra terceiros devedores solidários ou coobrigados em geral, por garantia cambial, real ou fidejussória.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[10], lei_seca:['Lei 11.101/2005'] },

// DIA 52 — VDE dia 75 — Direito Administrativo
{ dia:52, semana:11,
  titulo:'Administrativo · Improbidade Administrativa',
  descricao:'Atos de improbidade que causam enriquecimento ilícito, prejuízo ao erário e violam princípios; sanções e prescrição',
  emoji_principal:'🏛️', materia:'Direito Administrativo',
  materias:[{ nome:'Direito Administrativo', emoji:'🏛️', horas:4, cor:'sage',
    topicos:[
      'Lei 8.429/92 (com redação da Lei 14.230/2021) — natureza civil da improbidade administrativa',
      'Sujeito ativo — agente público (lato sensu) e o particular que induza, concorra ou se beneficie do ato',
      'Atos que importam enriquecimento ilícito (art. 9º) — exigência de dolo',
      'Atos que causam prejuízo ao erário (art. 10) — exigência de dolo (fim da modalidade culposa após a Lei 14.230/2021)',
      'Atos que atentam contra os princípios da Administração Pública (art. 11) — rol taxativo após a reforma de 2021',
      'Elemento subjetivo — exigência expressa de dolo específico em todas as modalidades (fim da improbidade culposa)',
      'Sanções — perda da função pública, suspensão dos direitos políticos, multa civil, proibição de contratar com o Poder Público',
      'Individualização das sanções conforme a gravidade e proporcionalidade',
      'Prescrição — 8 anos, contados do fato ou da cessação da permanência/continuidade'
    ],
    grupos:[
      { titulo:'Disposições Gerais', qtd:2 },
      { titulo:'Atos de Improbidade', qtd:4 },
      { titulo:'Sanções e Prescrição', qtd:3 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d52_c1',texto:'Lei 8.429/92 — natureza civil',feito:false},
  {id:'d52_c2',texto:'Sujeito ativo — agente público e particular',feito:false},
  {id:'d52_c3',texto:'Atos de enriquecimento ilícito — art. 9º',feito:false},
  {id:'d52_c4',texto:'Atos que causam prejuízo ao erário — art. 10',feito:false},
  {id:'d52_c5',texto:'Atos contra princípios — art. 11',feito:false},
  {id:'d52_c6',texto:'Exigência de dolo específico — fim da improbidade culposa',feito:false},
  {id:'d52_c7',texto:'Sanções da improbidade',feito:false},
  {id:'d52_c8',texto:'Individualização das sanções',feito:false},
  {id:'d52_c9',texto:'Prescrição — 8 anos',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[10], lei_seca:['Lei 8.429/1992 (redação da Lei 14.230/2021)'] },

// ════════════════════════════════════════════════════
// SEMANA 12 — DIAS 53–57 · VDE dias 78–82
// (VDE dia 76 = Revisão Quinzenal, dia 77 = Day off — não mapeados)
// ════════════════════════════════════════════════════

// DIA 53 — VDE dia 78 — Processo Civil
{ dia:53, semana:12,
  titulo:'Processo Civil · Cumprimento de Sentença e Processo de Execução',
  descricao:'Cumprimento de sentença de obrigação de pagar, fazer/não fazer e entregar coisa; processo de execução autônomo',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'sage',
    topicos:[
      'Cumprimento de sentença — fase posterior ao processo de conhecimento, sincretismo processual',
      'Cumprimento de sentença de obrigação de pagar quantia certa — intimação, multa de 10% e honorários de 10% pelo não pagamento em 15 dias',
      'Impugnação ao cumprimento de sentença — prazo e matérias arguíveis (art. 525 CPC)',
      'Cumprimento de sentença de obrigação de fazer, não fazer e entregar coisa — tutela específica e astreintes',
      'Processo de execução autônomo (título extrajudicial) — pressupostos: título executivo, exigibilidade, liquidez e certeza',
      'Títulos executivos extrajudiciais — rol do art. 784 CPC',
      'Espécies de execução — por quantia certa, para entrega de coisa, de obrigação de fazer/não fazer',
      'Embargos à execução — meio de defesa do executado no processo autônomo, independe de garantia do juízo',
      'Penhora — ordem preferencial e bens impenhoráveis (art. 833 CPC)',
      'Expropriação — adjudicação, alienação por iniciativa particular e leilão judicial'
    ],
    grupos:[
      { titulo:'Cumprimento de Sentença', qtd:4 },
      { titulo:'Processo de Execução', qtd:6 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d53_c1',texto:'Cumprimento de sentença — sincretismo processual',feito:false},
  {id:'d53_c2',texto:'Cumprimento de obrigação de pagar — multa e honorários de 10%',feito:false},
  {id:'d53_c3',texto:'Impugnação ao cumprimento de sentença — art. 525 CPC',feito:false},
  {id:'d53_c4',texto:'Cumprimento de obrigação de fazer/não fazer/entregar coisa',feito:false},
  {id:'d53_c5',texto:'Processo de execução autônomo — pressupostos',feito:false},
  {id:'d53_c6',texto:'Títulos executivos extrajudiciais — art. 784 CPC',feito:false},
  {id:'d53_c7',texto:'Espécies de execução',feito:false},
  {id:'d53_c8',texto:'Embargos à execução',feito:false},
  {id:'d53_c9',texto:'Penhora — ordem e impenhorabilidade (art. 833 CPC)',feito:false},
  {id:'d53_c10',texto:'Expropriação — adjudicação, alienação, leilão',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[11], lei_seca:['CPC arts. 513-538 (cumprimento de sentença)', 'CPC arts. 771-925 (processo de execução)', 'CPC art. 833 (impenhorabilidade)'] },

// DIA 54 — VDE dia 79 — Direito Administrativo
{ dia:54, semana:12,
  titulo:'Administrativo · Intervenção do Estado na Propriedade e Responsabilidade Civil do Estado',
  descricao:'Desapropriação e demais formas de intervenção na propriedade; teoria do risco administrativo',
  emoji_principal:'🏛️', materia:'Direito Administrativo',
  materias:[{ nome:'Direito Administrativo', emoji:'🏛️', horas:4, cor:'sage',
    topicos:[
      'Formas de intervenção na propriedade — restritivas (servidão, requisição, ocupação temporária, limitação administrativa, tombamento) e supressiva (desapropriação)',
      'Desapropriação — conceito, competência (todos os entes) e modalidades (ordinária, por interesse social, sancionatória)',
      'Fases da desapropriação — declaratória (utilidade/necessidade pública) e executória',
      'Indenização na desapropriação — justa, prévia e em dinheiro (regra); exceções: reforma agrária (TDA) e imóvel urbano não edificado (título da dívida pública)',
      'Desapropriação indireta — apossamento administrativo sem processo regular',
      'Tombamento — proteção do patrimônio histórico/cultural, não gera indenização automática (regra)',
      'Responsabilidade civil do Estado — teoria do risco administrativo (regra, art. 37, §6º CF) e responsabilidade objetiva',
      'Excludentes de responsabilidade — culpa exclusiva da vítima, força maior, caso fortuito, fato de terceiro',
      'Responsabilidade por omissão do Estado — divergência entre responsabilidade subjetiva e objetiva',
      'Direito de regresso do Estado contra o agente causador do dano — exige dolo ou culpa (subjetiva)'
    ],
    grupos:[
      { titulo:'Intervenção do Estado na Propriedade', qtd:6 },
      { titulo:'Responsabilidade Civil do Estado', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d54_c1',texto:'Formas de intervenção — restritivas e supressiva',feito:false},
  {id:'d54_c2',texto:'Desapropriação — competência e modalidades',feito:false},
  {id:'d54_c3',texto:'Fases da desapropriação',feito:false},
  {id:'d54_c4',texto:'Indenização — justa, prévia, em dinheiro e exceções',feito:false},
  {id:'d54_c5',texto:'Desapropriação indireta',feito:false},
  {id:'d54_c6',texto:'Tombamento',feito:false},
  {id:'d54_c7',texto:'Responsabilidade objetiva — art. 37, §6º CF',feito:false},
  {id:'d54_c8',texto:'Excludentes de responsabilidade',feito:false},
  {id:'d54_c9',texto:'Responsabilidade por omissão do Estado',feito:false},
  {id:'d54_c10',texto:'Direito de regresso — responsabilidade subjetiva do agente',feito:false}
  ],
  sumula:{ sigla:'Art. 37, §6º CF', texto:'As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[11], lei_seca:['Decreto-Lei 3.365/41 (desapropriação)', 'CF art. 37, §6º', 'CF art. 5º, XXIV'] },

// DIA 55 — VDE dia 80 — Direito Constitucional
{ dia:55, semana:12,
  titulo:'Constitucional · Poder Legislativo e Processo Legislativo',
  descricao:'Estrutura do Congresso Nacional, funções do Legislativo e as espécies do processo legislativo',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:[
      'Poder Legislativo — bicameralismo federativo: Câmara dos Deputados (representação do povo) e Senado Federal (representação dos Estados)',
      'Funções do Congresso Nacional — legislativa, fiscalizatória e de julgamento (crimes de responsabilidade)',
      'Imunidades parlamentares — material (inviolabilidade por opiniões/votos) e formal (foro, prisão)',
      'Processo legislativo — espécies normativas do art. 59 CF: emendas, leis complementares, leis ordinárias, leis delegadas, medidas provisórias, decretos legislativos, resoluções',
      'Emenda constitucional — iniciativa, quórum de 3/5 em dois turnos em cada Casa, limites materiais (cláusulas pétreas) e circunstanciais',
      'Lei complementar vs lei ordinária — quórum de maioria absoluta vs relativa',
      'Processo legislativo ordinário — fases: iniciativa, discussão, votação, sanção/veto, promulgação, publicação',
      'Veto — total ou parcial, motivado (inconstitucionalidade ou contrariedade ao interesse público), prazo de 15 dias úteis',
      'Medida provisória — requisitos de relevância e urgência, prazo de 60+60 dias, vedações materiais (art. 62, §1º CF)',
      'Lei delegada — delegação do Congresso ao Presidente, matérias vedadas'
    ],
    grupos:[
      { titulo:'Poder Legislativo', qtd:3 },
      { titulo:'Processo Legislativo', qtd:7 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d55_c1',texto:'Bicameralismo federativo — Câmara e Senado',feito:false},
  {id:'d55_c2',texto:'Funções do Congresso Nacional',feito:false},
  {id:'d55_c3',texto:'Imunidades parlamentares — material e formal',feito:false},
  {id:'d55_c4',texto:'Espécies normativas — art. 59 CF',feito:false},
  {id:'d55_c5',texto:'Emenda constitucional — quórum e limites',feito:false},
  {id:'d55_c6',texto:'Lei complementar vs lei ordinária',feito:false},
  {id:'d55_c7',texto:'Fases do processo legislativo ordinário',feito:false},
  {id:'d55_c8',texto:'Veto — total, parcial e prazo',feito:false},
  {id:'d55_c9',texto:'Medida provisória — requisitos e vedações',feito:false},
  {id:'d55_c10',texto:'Lei delegada',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[11], lei_seca:['CF arts. 44-58 (Poder Legislativo)', 'CF arts. 59-69 (processo legislativo)', 'CF art. 62 (medida provisória)'] },

// DIA 56 — VDE dia 81 — Direito do Consumidor
{ dia:56, semana:12,
  titulo:'Consumidor · Práticas Comerciais e Responsabilidade Civil nas Relações de Consumo',
  descricao:'Oferta, publicidade, práticas abusivas, cobrança de dívidas e a responsabilidade objetiva do CDC',
  emoji_principal:'🛒', materia:'Direito do Consumidor',
  materias:[{ nome:'Direito do Consumidor', emoji:'🛒', horas:4, cor:'lavender',
    topicos:[
      'Oferta — princípio da vinculação, integra o contrato e obriga o fornecedor (art. 30 CDC)',
      'Publicidade enganosa — por ação ou omissão de dado essencial',
      'Publicidade abusiva — discriminatória, que explore medo/superstição, aproveite deficiência de julgamento da criança',
      'Princípio da identificação da publicidade — vedação ao publicidade subliminar/disfarçada',
      'Práticas abusivas — rol exemplificativo do art. 39 CDC (venda casada, recusa de venda, aproveitamento de vulnerabilidade)',
      'Cobrança de dívidas — vedação a exposição ao ridículo e ameaça (art. 42 CDC); repetição do indébito em dobro',
      'Bancos de dados e cadastros de consumidores (SPC/Serasa) — direito de acesso, comunicação prévia e prazo máximo de 5 anos',
      'Responsabilidade civil pelo fato do produto e do serviço — objetiva, acidente de consumo (arts. 12 e 14 CDC)',
      'Responsabilidade pelo vício do produto e do serviço — solidária entre a cadeia de fornecedores (arts. 18 e 20 CDC)',
      'Excludentes de responsabilidade do fornecedor — inexistência do defeito, culpa exclusiva do consumidor ou de terceiro',
      'Desconsideração da personalidade jurídica no CDC — Teoria Menor (art. 28, §5º CDC)'
    ],
    grupos:[
      { titulo:'Práticas Comerciais', qtd:7 },
      { titulo:'Responsabilidade Civil nas Relações de Consumo', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d56_c1',texto:'Oferta — princípio da vinculação',feito:false},
  {id:'d56_c2',texto:'Publicidade enganosa',feito:false},
  {id:'d56_c3',texto:'Publicidade abusiva',feito:false},
  {id:'d56_c4',texto:'Princípio da identificação da publicidade',feito:false},
  {id:'d56_c5',texto:'Práticas abusivas — art. 39 CDC',feito:false},
  {id:'d56_c6',texto:'Cobrança de dívidas — art. 42 CDC',feito:false},
  {id:'d56_c7',texto:'Bancos de dados — SPC/Serasa',feito:false},
  {id:'d56_c8',texto:'Responsabilidade pelo fato do produto/serviço — arts. 12 e 14',feito:false},
  {id:'d56_c9',texto:'Responsabilidade pelo vício — arts. 18 e 20',feito:false},
  {id:'d56_c10',texto:'Excludentes de responsabilidade do fornecedor',feito:false},
  {id:'d56_c11',texto:'Desconsideração — Teoria Menor (art. 28, §5º CDC)',feito:false}
  ],
  sumula:{ sigla:'Súmula 297 STJ', texto:'O Código de Defesa do Consumidor é aplicável às instituições financeiras.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[11], lei_seca:['CDC arts. 30-38 (oferta e publicidade)', 'CDC arts. 39-45 (práticas abusivas e cobrança)', 'CDC arts. 12-20 (responsabilidade civil)', 'CDC art. 28 (desconsideração)'] },

// DIA 57 — VDE dia 82 — Direito Civil + Direito Eleitoral
{ dia:57, semana:12,
  titulo:'Civil · Responsabilidade Civil · Eleitoral · Direitos Políticos e Partidos Políticos',
  descricao:'Pressupostos da responsabilidade civil subjetiva e objetiva; direitos políticos e regime dos partidos',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[
    { nome:'Direito Civil', emoji:'📜', horas:2, cor:'rose',
      topicos:[
        'Responsabilidade civil subjetiva — pressupostos: conduta, culpa/dolo, nexo causal, dano (art. 186 CC)',
        'Responsabilidade civil objetiva — teoria do risco, independe de culpa (art. 927, parágrafo único CC)',
        'Abuso de direito como ato ilícito — art. 187 CC',
        'Responsabilidade contratual vs extracontratual (aquiliana)',
        'Dano moral, material e estético — cumulação (Súmula 387 STJ)',
        'Excludentes de responsabilidade — culpa exclusiva da vítima, caso fortuito, força maior, fato de terceiro',
        'Responsabilidade por fato de terceiro e por fato da coisa/animal (arts. 932-936 CC)'
      ],
      grupos:[
        { titulo:'Responsabilidade Subjetiva e Objetiva', qtd:4 },
        { titulo:'Dano e Excludentes de Responsabilidade', qtd:3 }
      ] },
    { nome:'Direito Eleitoral', emoji:'🗳️', horas:2, cor:'lavender',
      topicos:[
        'Direitos políticos positivos — capacidade eleitoral ativa (votar) e passiva (ser votado)',
        'Alistamento eleitoral — obrigatório (18-70 anos), facultativo (16-18, maiores de 70, analfabetos)',
        'Condições de elegibilidade — nacionalidade, alistamento, domicílio eleitoral, filiação partidária, idade mínima por cargo',
        'Inelegibilidades absolutas e relativas — inalistáveis, analfabetos, reeleição e desincompatibilização',
        'Direitos políticos negativos — perda e suspensão dos direitos políticos (art. 15 CF, vedado o cassação)',
        'Partidos políticos — natureza jurídica de direito privado, liberdade de criação, autonomia e fidelidade partidária',
        'Filiação partidária como condição de elegibilidade e prazo mínimo exigido'
      ],
      grupos:[
        { titulo:'Direitos Políticos', qtd:5 },
        { titulo:'Partidos Políticos', qtd:2 }
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d57_c1',texto:'Responsabilidade civil subjetiva — art. 186 CC',feito:false},
  {id:'d57_c2',texto:'Responsabilidade civil objetiva — art. 927, parágrafo único CC',feito:false},
  {id:'d57_c3',texto:'Abuso de direito — art. 187 CC',feito:false},
  {id:'d57_c4',texto:'Responsabilidade contratual vs extracontratual',feito:false},
  {id:'d57_c5',texto:'Dano moral, material e estético — cumulação',feito:false},
  {id:'d57_c6',texto:'Excludentes de responsabilidade civil',feito:false},
  {id:'d57_c7',texto:'Responsabilidade por fato de terceiro, coisa e animal',feito:false},
  {id:'d57_c8',texto:'Capacidade eleitoral ativa e passiva',feito:false},
  {id:'d57_c9',texto:'Alistamento eleitoral — obrigatório e facultativo',feito:false},
  {id:'d57_c10',texto:'Condições de elegibilidade',feito:false},
  {id:'d57_c11',texto:'Inelegibilidades absolutas e relativas',feito:false},
  {id:'d57_c12',texto:'Perda e suspensão dos direitos políticos — art. 15 CF',feito:false},
  {id:'d57_c13',texto:'Partidos políticos — natureza e fidelidade partidária',feito:false},
  {id:'d57_c14',texto:'Filiação partidária como condição de elegibilidade',feito:false}
  ],
  sumula:{ sigla:'Súmula 387 STJ', texto:'São cumuláveis as indenizações por dano material e dano moral oriundas do mesmo fato.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[11], lei_seca:['CC arts. 186-188, 927-954 (responsabilidade civil)', 'CF arts. 14-17 (direitos políticos e partidos)', 'Lei 9.096/95 (partidos políticos)'] },

// ════════════════════════════════════════════════════
// SEMANA 13 — DIAS 58–63 · VDE dias 92–97
// (VDE dia 83 = Day off, dia 84 = Simulado, dias 85-91 = Semana de Revisão do VDE — não mapeados)
// ════════════════════════════════════════════════════

// DIA 58 — VDE dia 92 — Constitucional + Ética
{ dia:58, semana:13,
  titulo:'Constitucional · Controle de Constitucionalidade e Poder Judiciário · Ética · Estrutura da OAB e Publicidade',
  descricao:'Espécies de controle de constitucionalidade, estrutura do Judiciário, órgãos da OAB e publicidade profissional',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[
    { nome:'Direito Constitucional', emoji:'🏛️', horas:2, cor:'lavender',
      topicos:[
        'Controle de constitucionalidade — pressupostos: rigidez constitucional e supremacia da Constituição',
        'Controle difuso (concreto) vs controle concentrado (abstrato) — quanto ao órgão competente',
        'Controle concentrado — ADI, ADC, ADPF e ADO; legitimados do art. 103 CF',
        'Efeitos das decisões no controle concentrado — erga omnes, vinculante e, regra, ex tunc',
        'Modulação de efeitos — art. 27 Lei 9.868/99, exceção por segurança jurídica ou excepcional interesse social',
        'Poder Judiciário — órgãos do art. 92 CF e princípio do juiz natural',
        'Garantias da magistratura — vitaliciedade, inamovibilidade, irredutibilidade de subsídio',
        'Súmula vinculante — requisitos (2/3 dos membros do STF, reiteradas decisões) e efeito vinculante'
      ],
      grupos:[
        { titulo:'Controle de Constitucionalidade', qtd:5 },
        { titulo:'Poder Judiciário', qtd:3 }
      ] },
    { nome:'Ética Profissional', emoji:'⚖️', horas:2, cor:'champagne',
      topicos:[
        'Estrutura da OAB — Conselho Federal, Conselhos Seccionais, Subseções e Caixas de Assistência',
        'Eleições da OAB — chapas, mandato de 3 anos, vedação à reeleição do mesmo cargo',
        'Competências privativas do Conselho Federal — elaboração do Código de Ética, Regulamento Geral e Provimentos',
        'Publicidade profissional — princípios da moderação, discrição e sobriedade (art. 39 CED)',
        'Vedações na publicidade — captação de clientela, mercantilização, comparação entre profissionais',
        'Meios permitidos de publicidade — placas, cartões, sítios eletrônicos e redes sociais, com limites'
      ],
      grupos:[
        { titulo:'Estrutura da OAB e Eleições', qtd:3 },
        { titulo:'Publicidade Profissional', qtd:3 }
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d58_c1',texto:'Pressupostos do controle de constitucionalidade',feito:false},
  {id:'d58_c2',texto:'Controle difuso vs concentrado',feito:false},
  {id:'d58_c3',texto:'ADI, ADC, ADPF e ADO — legitimados',feito:false},
  {id:'d58_c4',texto:'Efeitos das decisões no controle concentrado',feito:false},
  {id:'d58_c5',texto:'Modulação de efeitos — art. 27 Lei 9.868/99',feito:false},
  {id:'d58_c6',texto:'Órgãos do Poder Judiciário — art. 92 CF',feito:false},
  {id:'d58_c7',texto:'Garantias da magistratura',feito:false},
  {id:'d58_c8',texto:'Súmula vinculante — requisitos',feito:false},
  {id:'d58_c9',texto:'Estrutura da OAB — órgãos',feito:false},
  {id:'d58_c10',texto:'Eleições da OAB',feito:false},
  {id:'d58_c11',texto:'Competências do Conselho Federal',feito:false},
  {id:'d58_c12',texto:'Publicidade profissional — moderação e discrição',feito:false},
  {id:'d58_c13',texto:'Vedações na publicidade — captação de clientela',feito:false},
  {id:'d58_c14',texto:'Meios permitidos de publicidade',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[12], lei_seca:['CF arts. 92-126 (Poder Judiciário)', 'CF art. 102, 103 (controle concentrado)', 'Lei 9.868/99', 'EOAB arts. 45-67 (estrutura da OAB)', 'Provimento 205/2021 OAB'] },

// DIA 59 — VDE dia 93 — Direito Penal
{ dia:59, semana:13,
  titulo:'Penal · Crimes Contra a Dignidade Sexual, Fé Pública e Patrimônio',
  descricao:'Estupro e crimes correlatos, falsidade documental/ideológica e furto/roubo/estelionato/apropriação indébita',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:[
      'Estupro — conjunção carnal ou outro ato libidinoso mediante violência ou grave ameaça (art. 213 CP)',
      'Estupro de vulnerável — presunção absoluta de violência com menor de 14 anos (Súmula 593 STJ)',
      'Importunação sexual — Lei 13.718/18, distinção do estupro pela ausência de violência/grave ameaça',
      'Ação penal nos crimes contra a dignidade sexual — pública incondicionada (regra, após a Lei 13.718/18)',
      'Falsidade documental — falsificação de documento público e particular (arts. 297-298 CP)',
      'Falsidade ideológica — documento formalmente perfeito com conteúdo falso (art. 299 CP)',
      'Uso de documento falso — consunção com o crime de falsificação (Súmula 17 STJ)',
      'Furto simples, qualificado e privilegiado (pequeno valor + réu primário)',
      'Roubo — subtração mediante violência/grave ameaça; causas de aumento (art. 157, §2º CP)',
      'Estelionato — fraude, ardil ou meio fraudulento para obter vantagem ilícita; ação penal pública condicionada (regra, Lei 13.964/19)',
      'Apropriação indébita — inversão da posse lícita em propriedade ilícita'
    ],
    grupos:[
      { titulo:'Crimes Contra a Dignidade Sexual', qtd:4 },
      { titulo:'Crimes Contra a Fé Pública', qtd:3 },
      { titulo:'Crimes Contra o Patrimônio', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d59_c1',texto:'Estupro — art. 213 CP',feito:false},
  {id:'d59_c2',texto:'Estupro de vulnerável — Súmula 593 STJ',feito:false},
  {id:'d59_c3',texto:'Importunação sexual — Lei 13.718/18',feito:false},
  {id:'d59_c4',texto:'Ação penal nos crimes sexuais — pública incondicionada',feito:false},
  {id:'d59_c5',texto:'Falsidade documental — arts. 297-298 CP',feito:false},
  {id:'d59_c6',texto:'Falsidade ideológica — art. 299 CP',feito:false},
  {id:'d59_c7',texto:'Uso de documento falso — Súmula 17 STJ',feito:false},
  {id:'d59_c8',texto:'Furto simples, qualificado e privilegiado',feito:false},
  {id:'d59_c9',texto:'Roubo — causas de aumento',feito:false},
  {id:'d59_c10',texto:'Estelionato — ação penal condicionada',feito:false},
  {id:'d59_c11',texto:'Apropriação indébita',feito:false}
  ],
  sumula:{ sigla:'Súmula 593 STJ', texto:'O crime de estupro de vulnerável se configura com a conjunção carnal ou prática de ato libidinoso com menor de 14 anos, sendo irrelevante o consentimento da vítima.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[12], lei_seca:['CP arts. 213-234-C (dignidade sexual)', 'CP arts. 297-311 (fé pública)', 'CP arts. 155-180 (patrimônio)'] },

// DIA 60 — VDE dia 94 — Processo Penal
{ dia:60, semana:13,
  titulo:'Processo Penal · Citação, Intimação e Procedimentos no CPP',
  descricao:'Modalidades de citação e intimação e os ritos comum ordinário, sumário e sumaríssimo',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:[
      'Citação — pessoal (regra) e por edital (réu não encontrado); efeitos e suspensão do processo/prescrição',
      'Citação por hora certa — aplicação subsidiária do CPC ao processo penal',
      'Intimação — do réu, defensor e demais sujeitos processuais; formas',
      'Procedimento comum ordinário — crimes com pena máxima igual ou superior a 4 anos',
      'Procedimento comum sumário — crimes com pena máxima inferior a 4 anos',
      'Procedimento comum sumaríssimo — infrações de menor potencial ofensivo (Lei 9.099/95), pena máxima até 2 anos',
      'Rito do Tribunal do Júri — fases: sumário de culpa (juízo de admissibilidade) e juízo de mérito (plenário)',
      'Pronúncia, impronúncia, absolvição sumária e desclassificação — decisões da 1ª fase do júri',
      'Procedimentos especiais — crimes de responsabilidade de funcionários públicos, crimes contra a honra de competência originária'
    ],
    grupos:[
      { titulo:'Citação e Intimação', qtd:3 },
      { titulo:'Procedimentos no CPP', qtd:6 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d60_c1',texto:'Citação pessoal e por edital',feito:false},
  {id:'d60_c2',texto:'Citação por hora certa',feito:false},
  {id:'d60_c3',texto:'Intimação — formas',feito:false},
  {id:'d60_c4',texto:'Procedimento comum ordinário',feito:false},
  {id:'d60_c5',texto:'Procedimento comum sumário',feito:false},
  {id:'d60_c6',texto:'Procedimento sumaríssimo — Lei 9.099/95',feito:false},
  {id:'d60_c7',texto:'Rito do Júri — sumário de culpa e plenário',feito:false},
  {id:'d60_c8',texto:'Pronúncia, impronúncia, absolvição sumária, desclassificação',feito:false},
  {id:'d60_c9',texto:'Procedimentos especiais',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[12], lei_seca:['CPP arts. 351-372 (citações e intimações)', 'CPP arts. 394-405 (procedimento comum)', 'CPP arts. 406-497 (Tribunal do Júri)', 'Lei 9.099/95'] },

// DIA 61 — VDE dia 95 — Processo Civil
{ dia:61, semana:13,
  titulo:'Processo Civil · Procedimentos Especiais; Recursos e Ações Autônomas de Impugnação',
  descricao:'Ação de consignação em pagamento, possessórias, monitória e o sistema recursal do CPC',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'sage',
    topicos:[
      'Procedimentos especiais — consignação em pagamento, exigir contas, possessórias, monitória, inventário e partilha',
      'Ação de consignação em pagamento — hipóteses de cabimento (recusa/mora do credor) e depósito',
      'Ações possessórias — interditos possessórios (manutenção, reintegração, interdito proibitório) e fungibilidade',
      'Ação monitória — título sem eficácia executiva, embargos monitórios e conversão em título executivo',
      'Recursos — pressupostos de admissibilidade: cabimento, legitimidade, interesse, tempestividade, preparo, regularidade formal',
      'Princípios recursais — duplo grau de jurisdição, taxatividade, unirrecorribilidade, fungibilidade, non reformatio in pejus',
      'Efeitos dos recursos — devolutivo (regra) e suspensivo (exceção)',
      'Apelação, agravo de instrumento, embargos de declaração, recurso especial e extraordinário — cabimento',
      'Ação rescisória — hipóteses do art. 966 CPC e prazo decadencial de 2 anos',
      'Mandado de segurança contra ato judicial — cabimento excepcional'
    ],
    grupos:[
      { titulo:'Procedimentos Especiais', qtd:4 },
      { titulo:'Recursos e Ações Autônomas de Impugnação', qtd:6 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d61_c1',texto:'Procedimentos especiais — rol',feito:false},
  {id:'d61_c2',texto:'Ação de consignação em pagamento',feito:false},
  {id:'d61_c3',texto:'Ações possessórias — fungibilidade',feito:false},
  {id:'d61_c4',texto:'Ação monitória — embargos monitórios',feito:false},
  {id:'d61_c5',texto:'Pressupostos de admissibilidade recursal',feito:false},
  {id:'d61_c6',texto:'Princípios recursais',feito:false},
  {id:'d61_c7',texto:'Efeito devolutivo e suspensivo',feito:false},
  {id:'d61_c8',texto:'Apelação, agravo, embargos de declaração, REsp, RE',feito:false},
  {id:'d61_c9',texto:'Ação rescisória — art. 966 CPC, prazo de 2 anos',feito:false},
  {id:'d61_c10',texto:'Mandado de segurança contra ato judicial',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[12], lei_seca:['CPC arts. 539-538, 554-568 (consignação e possessórias)', 'CPC arts. 700-702 (monitória)', 'CPC arts. 994-1044 (recursos)', 'CPC art. 966 (rescisória)'] },

// DIA 62 — VDE dia 96 — Direito Civil + Processo do Trabalho
{ dia:62, semana:13,
  titulo:'Civil · Direitos Reais — Posse e Propriedade · Processo do Trabalho · Ações Especiais e Execução',
  descricao:'Classificação da posse, aquisição/perda da propriedade e o procedimento de execução trabalhista',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[
    { nome:'Direito Civil', emoji:'📜', horas:2, cor:'rose',
      topicos:[
        'Posse — teoria objetiva de Ihering, adotada pelo CC (art. 1.196)',
        'Classificação da posse — justa/injusta, de boa-fé/má-fé, direta/indireta, nova/velha',
        'Composse e detenção — distinção quanto à autonomia da posse',
        'Efeitos da posse — percepção de frutos, indenização por benfeitorias e direito de retenção',
        'Aquisição da propriedade imóvel — registro (regra) e usucapião (originária)',
        'Modalidades de usucapião — extraordinária, ordinária, especial urbana, especial rural, familiar',
        'Aquisição da propriedade móvel — tradição, usucapião, achado do tesouro, especificação'
      ],
      grupos:[
        { titulo:'Posse', qtd:4 },
        { titulo:'Propriedade', qtd:3 }
      ] },
    { nome:'Processo do Trabalho', emoji:'⚖️', horas:2, cor:'sage',
      topicos:[
        'Ações especiais trabalhistas — inquérito para apuração de falta grave, ação de cumprimento, dissídio coletivo',
        'Inquérito judicial para apuração de falta grave — exigido para dispensa de empregado estável',
        'Execução trabalhista — título executivo judicial (regra) e extrajudicial (TAC do MPT, termo de conciliação da CCP)',
        'Liquidação de sentença — por cálculo, arbitramento ou artigos',
        'Citação do executado para pagamento em 48h ou garantia da execução',
        'Embargos à execução trabalhista — prazo de 5 dias, exige garantia do juízo',
        'Impenhorabilidade de bens na execução trabalhista'
      ],
      grupos:[
        { titulo:'Ações Especiais Trabalhistas', qtd:2 },
        { titulo:'Execução Trabalhista', qtd:5 }
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d62_c1',texto:'Posse — teoria objetiva de Ihering',feito:false},
  {id:'d62_c2',texto:'Classificação da posse',feito:false},
  {id:'d62_c3',texto:'Composse e detenção',feito:false},
  {id:'d62_c4',texto:'Efeitos da posse — frutos e benfeitorias',feito:false},
  {id:'d62_c5',texto:'Aquisição da propriedade imóvel — registro e usucapião',feito:false},
  {id:'d62_c6',texto:'Modalidades de usucapião',feito:false},
  {id:'d62_c7',texto:'Aquisição da propriedade móvel',feito:false},
  {id:'d62_c8',texto:'Ações especiais trabalhistas — rol',feito:false},
  {id:'d62_c9',texto:'Inquérito para apuração de falta grave',feito:false},
  {id:'d62_c10',texto:'Execução trabalhista — títulos executivos',feito:false},
  {id:'d62_c11',texto:'Liquidação de sentença',feito:false},
  {id:'d62_c12',texto:'Citação do executado — 48h',feito:false},
  {id:'d62_c13',texto:'Embargos à execução trabalhista',feito:false},
  {id:'d62_c14',texto:'Impenhorabilidade de bens na execução',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[12], lei_seca:['CC arts. 1.196-1.224 (posse)', 'CC arts. 1.238-1.259 (aquisição da propriedade)', 'CLT arts. 876-892 (execução)', 'CLT arts. 853-855 (inquérito)'] },

// DIA 63 — VDE dia 97 — Direito Tributário
{ dia:63, semana:13,
  titulo:'Tributário · Impostos Federais, Estaduais e Municipais · Suspensão, Extinção e Exclusão do Crédito Tributário',
  descricao:'Principais impostos por ente federativo e as hipóteses do CTN que afetam o crédito tributário',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:[
      'Impostos federais — II, IE, IR, IPI, IOF, ITR, IGF (ainda não instituído)',
      'Impostos estaduais — ICMS, IPVA, ITCMD',
      'Impostos municipais — IPTU, ITBI, ISS',
      'Fato gerador e sujeito passivo dos principais impostos (IR, ICMS, IPTU, ISS)',
      'Suspensão do crédito tributário — rol do art. 151 CTN: moratória, depósito integral, reclamações/recursos administrativos, liminar/tutela antecipada, parcelamento',
      'Extinção do crédito tributário — rol do art. 156 CTN: pagamento, compensação, transação, remissão, prescrição, decadência, conversão de depósito em renda',
      'Decadência tributária — prazo de 5 anos para constituir o crédito (lançamento)',
      'Prescrição tributária — prazo de 5 anos para cobrar o crédito já constituído',
      'Exclusão do crédito tributário — isenção e anistia (art. 175 CTN)',
      'Isenção — dispensa legal do pagamento antes do fato gerador; anistia — perdão de infrações/penalidades'
    ],
    grupos:[
      { titulo:'Impostos Federais, Estaduais e Municipais', qtd:4 },
      { titulo:'Suspensão, Extinção e Exclusão do Crédito Tributário', qtd:6 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d63_c1',texto:'Impostos federais — II, IE, IR, IPI, IOF, ITR, IGF',feito:false},
  {id:'d63_c2',texto:'Impostos estaduais — ICMS, IPVA, ITCMD',feito:false},
  {id:'d63_c3',texto:'Impostos municipais — IPTU, ITBI, ISS',feito:false},
  {id:'d63_c4',texto:'Fato gerador dos principais impostos',feito:false},
  {id:'d63_c5',texto:'Suspensão do crédito tributário — art. 151 CTN',feito:false},
  {id:'d63_c6',texto:'Extinção do crédito tributário — art. 156 CTN',feito:false},
  {id:'d63_c7',texto:'Decadência tributária — 5 anos',feito:false},
  {id:'d63_c8',texto:'Prescrição tributária — 5 anos',feito:false},
  {id:'d63_c9',texto:'Exclusão do crédito — isenção e anistia',feito:false},
  {id:'d63_c10',texto:'Isenção vs anistia',feito:false}
  ],
  sumula:{ sigla:'Súmula 555 STJ', texto:'Quando não houver declaração do débito, o prazo decadencial quinquenal para o Fisco constituir o crédito tributário conta-se exclusivamente na forma do art. 173, I, do CTN.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[12], lei_seca:['CF arts. 153-156 (impostos)', 'CTN art. 151 (suspensão)', 'CTN art. 156 (extinção)', 'CTN art. 175 (exclusão)'] },

// ════════════════════════════════════════════════════
// SEMANA 14 — DIAS 64–69 · VDE dias 99–104
// (VDE dia 98 = Simulado — não mapeado)
// ════════════════════════════════════════════════════

// DIA 64 — VDE dia 99 — Processo Penal
{ dia:64, semana:14,
  titulo:'Processo Penal · Nulidades; Recursos e Ações Autônomas de Impugnação',
  descricao:'Sistema de nulidades do CPP e o rol de recursos e ações autônomas de impugnação criminal',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:[
      'Nulidade absoluta vs relativa no processo penal — interesse público vs interesse da parte',
      'Princípio do prejuízo (pas de nullité sans grief) — art. 563 CPP',
      'Princípio da instrumentalidade das formas e da convalidação',
      'Momento de arguição da nulidade — preclusão e hipóteses de nulidade insanável',
      'Recursos no processo penal — RESE (rol taxativo do art. 581 CPP), apelação, embargos infringentes/de nulidade, embargos de declaração',
      'Recurso em Sentido Estrito — hipóteses de cabimento e prazo de 5 dias',
      'Apelação criminal — cabimento residual e prazo de 5 dias',
      'Habeas Corpus como ação autônoma de impugnação — cabimento contra constrangimento ilegal',
      'Revisão criminal — hipóteses do art. 621 CPP, sem prazo (pode ser proposta a qualquer tempo, inclusive após a morte do réu)',
      'Mandado de segurança em matéria criminal — cabimento residual'
    ],
    grupos:[
      { titulo:'Nulidades', qtd:4 },
      { titulo:'Recursos e Ações Autônomas de Impugnação', qtd:6 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d64_c1',texto:'Nulidade absoluta vs relativa',feito:false},
  {id:'d64_c2',texto:'Princípio do prejuízo — art. 563 CPP',feito:false},
  {id:'d64_c3',texto:'Instrumentalidade das formas e convalidação',feito:false},
  {id:'d64_c4',texto:'Momento de arguição da nulidade',feito:false},
  {id:'d64_c5',texto:'Recursos no processo penal — rol geral',feito:false},
  {id:'d64_c6',texto:'RESE — rol do art. 581 CPP',feito:false},
  {id:'d64_c7',texto:'Apelação criminal — cabimento residual',feito:false},
  {id:'d64_c8',texto:'Habeas Corpus como ação autônoma',feito:false},
  {id:'d64_c9',texto:'Revisão criminal — art. 621 CPP, sem prazo',feito:false},
  {id:'d64_c10',texto:'Mandado de segurança em matéria criminal',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[13], lei_seca:['CPP arts. 563-573 (nulidades)', 'CPP arts. 574-609 (recursos)', 'CPP arts. 621-631 (revisão criminal)'] },

// DIA 65 — VDE dia 100 — Direito do Trabalho
{ dia:65, semana:14,
  titulo:'Trabalho · Direito Coletivo do Trabalho e Extinção do Contrato de Trabalho',
  descricao:'Convenções e acordos coletivos, greve, e as modalidades de extinção do contrato de trabalho',
  emoji_principal:'👷', materia:'Direito do Trabalho',
  materias:[{ nome:'Direito do Trabalho', emoji:'👷', horas:4, cor:'sage',
    topicos:[
      'Liberdade sindical — unicidade sindical (regra brasileira) e sistema confederativo',
      'Convenção coletiva de trabalho — celebrada entre sindicatos (categoria patronal e profissional)',
      'Acordo coletivo de trabalho — celebrado entre sindicato profissional e empresa(s)',
      'Hierarquia entre CCT e ACT — prevalência do mais específico (regra do "conglobamento")',
      'Negociado sobre o legislado — art. 611-A CLT (Reforma Trabalhista) e limites do art. 611-B',
      'Direito de greve — art. 9º CF, exercício e limites (serviços essenciais, Lei 7.783/89)',
      'Extinção do contrato por iniciativa do empregador — dispensa sem justa causa e dispensa por justa causa (art. 482 CLT)',
      'Extinção do contrato por iniciativa do empregado — pedido de demissão e rescisão indireta (art. 483 CLT)',
      'Extinção por culpa recíproca, força maior e término do contrato a termo',
      'Verbas rescisórias por modalidade de extinção — tabela comparativa (aviso prévio, multa FGTS, seguro-desemprego)',
      'Homologação da rescisão e prazo para pagamento (art. 477 CLT)'
    ],
    grupos:[
      { titulo:'Direito Coletivo do Trabalho', qtd:6 },
      { titulo:'Extinção do Contrato de Trabalho', qtd:5 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d65_c1',texto:'Unicidade sindical e sistema confederativo',feito:false},
  {id:'d65_c2',texto:'Convenção coletiva de trabalho',feito:false},
  {id:'d65_c3',texto:'Acordo coletivo de trabalho',feito:false},
  {id:'d65_c4',texto:'Hierarquia entre CCT e ACT',feito:false},
  {id:'d65_c5',texto:'Negociado sobre o legislado — art. 611-A CLT',feito:false},
  {id:'d65_c6',texto:'Direito de greve — art. 9º CF e Lei 7.783/89',feito:false},
  {id:'d65_c7',texto:'Dispensa sem e com justa causa — art. 482 CLT',feito:false},
  {id:'d65_c8',texto:'Pedido de demissão e rescisão indireta — art. 483 CLT',feito:false},
  {id:'d65_c9',texto:'Culpa recíproca, força maior, termo do contrato',feito:false},
  {id:'d65_c10',texto:'Verbas rescisórias por modalidade de extinção',feito:false},
  {id:'d65_c11',texto:'Homologação e prazo do art. 477 CLT',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[13], lei_seca:['CF art. 9º (greve)', 'Lei 7.783/89', 'CLT arts. 477, 482-484 (extinção)', 'CLT art. 611-A/611-B (negociado sobre legislado)'] },

// DIA 66 — VDE dia 101 — Direito Civil
{ dia:66, semana:14,
  titulo:'Civil · Direito de Família — Direito Patrimonial e Direito Pessoal',
  descricao:'Regimes de bens, alimentos, poder familiar e as relações pessoais entre cônjuges/companheiros',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'rose',
    topicos:[
      'Casamento — natureza jurídica, capacidade núbil e impedimentos matrimoniais (art. 1.521 CC)',
      'Regimes de bens — comunhão parcial (regra legal supletiva), comunhão universal, participação final nos aquestos, separação de bens',
      'Separação obrigatória de bens — hipóteses do art. 1.641 CC (Súmula 377 STF quanto à comunicação dos aquestos)',
      'Pacto antenupcial — forma pública, exigido para regimes diversos da comunhão parcial',
      'União estável — requisitos, regime de bens supletivo (comunhão parcial) e distinção do concubinato',
      'Poder familiar — titularidade conjunta, conteúdo e hipóteses de suspensão/destituição',
      'Alimentos — pressupostos (binômio necessidade/possibilidade), características (irrenunciabilidade, imprescritibilidade)',
      'Alimentos gravídicos — Lei 11.804/2008',
      'Divórcio — direto, sem necessidade de prévia separação ou prazo mínimo (EC 66/2010)',
      'Dissolução da união estável — reconhecimento e partilha de bens'
    ],
    grupos:[
      { titulo:'Direito Patrimonial — Regimes de Bens', qtd:5 },
      { titulo:'Direito Pessoal — Poder Familiar, Alimentos e Dissolução', qtd:5 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d66_c1',texto:'Casamento — capacidade núbil e impedimentos',feito:false},
  {id:'d66_c2',texto:'Regimes de bens — comunhão parcial, universal, participação, separação',feito:false},
  {id:'d66_c3',texto:'Separação obrigatória — art. 1.641 CC e Súmula 377 STF',feito:false},
  {id:'d66_c4',texto:'Pacto antenupcial',feito:false},
  {id:'d66_c5',texto:'União estável — requisitos e regime supletivo',feito:false},
  {id:'d66_c6',texto:'Poder familiar — conteúdo e suspensão/destituição',feito:false},
  {id:'d66_c7',texto:'Alimentos — binômio necessidade/possibilidade',feito:false},
  {id:'d66_c8',texto:'Alimentos gravídicos — Lei 11.804/2008',feito:false},
  {id:'d66_c9',texto:'Divórcio direto — EC 66/2010',feito:false},
  {id:'d66_c10',texto:'Dissolução da união estável',feito:false}
  ],
  sumula:{ sigla:'Súmula 377 STF', texto:'No regime de separação legal de bens, comunicam-se os adquiridos na constância do casamento.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[13], lei_seca:['CC arts. 1.511-1.582 (casamento)', 'CC arts. 1.639-1.688 (regime de bens)', 'CC arts. 1.723-1.727 (união estável)', 'CC arts. 1.694-1.710 (alimentos)'] },

// DIA 67 — VDE dia 102 — Direito Administrativo
{ dia:67, semana:14,
  titulo:'Administrativo · Consórcios Públicos e Serviços Públicos — Concessão, Permissão e PPP',
  descricao:'Cooperação federativa via consórcios e as formas de delegação da prestação de serviços públicos',
  emoji_principal:'🏛️', materia:'Direito Administrativo',
  materias:[{ nome:'Direito Administrativo', emoji:'🏛️', horas:4, cor:'sage',
    topicos:[
      'Consórcios públicos — Lei 11.107/2005, associação voluntária entre entes federativos',
      'Personalidade jurídica dos consórcios — associação pública (direito público) ou pessoa jurídica de direito privado',
      'Protocolo de intenções e contrato de consórcio — formalização',
      'Serviço público — conceito e princípios (continuidade, mutabilidade, generalidade, modicidade tarifária)',
      'Execução direta vs indireta do serviço público — delegação a particulares',
      'Concessão de serviço público — Lei 8.987/95, licitação na modalidade concorrência, prazo determinado',
      'Permissão de serviço público — precariedade, revogabilidade unilateral, também exige licitação',
      'Autorização de serviço público — ato unilateral, discricionário e precário',
      'Parceria Público-Privada (PPP) — Lei 11.079/2004, modalidades patrocinada e administrativa',
      'PPP — contraprestação pecuniária da Administração, prazo de 5 a 35 anos, valor mínimo do contrato'
    ],
    grupos:[
      { titulo:'Consórcios Públicos', qtd:3 },
      { titulo:'Serviços Públicos e Parceria Público-Privada', qtd:7 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d67_c1',texto:'Consórcios públicos — Lei 11.107/2005',feito:false},
  {id:'d67_c2',texto:'Personalidade jurídica dos consórcios',feito:false},
  {id:'d67_c3',texto:'Protocolo de intenções e contrato de consórcio',feito:false},
  {id:'d67_c4',texto:'Princípios do serviço público',feito:false},
  {id:'d67_c5',texto:'Execução direta vs indireta',feito:false},
  {id:'d67_c6',texto:'Concessão de serviço público — Lei 8.987/95',feito:false},
  {id:'d67_c7',texto:'Permissão de serviço público — precariedade',feito:false},
  {id:'d67_c8',texto:'Autorização de serviço público',feito:false},
  {id:'d67_c9',texto:'PPP — modalidades patrocinada e administrativa',feito:false},
  {id:'d67_c10',texto:'PPP — prazos e contraprestação pecuniária',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[13], lei_seca:['Lei 11.107/2005 (consórcios)', 'Lei 8.987/95 (concessões e permissões)', 'Lei 11.079/2004 (PPP)'] },

// DIA 68 — VDE dia 103 — Processo do Trabalho
{ dia:68, semana:14,
  titulo:'Processo do Trabalho · Recursos',
  descricao:'Sistema recursal trabalhista — recurso ordinário, agravo, recurso de revista e embargos',
  emoji_principal:'⚖️', materia:'Processo do Trabalho',
  materias:[{ nome:'Processo do Trabalho', emoji:'⚖️', horas:4, cor:'sage',
    topicos:[
      'Princípios recursais trabalhistas — irrecorribilidade das decisões interlocutórias (regra, Súmula 214 TST)',
      'Recurso Ordinário — cabível contra sentenças definitivas ou terminativas, prazo de 8 dias',
      'Agravo de Petição — cabível na fase de execução, prazo de 8 dias, exige delimitação de matérias e valores impugnados',
      'Agravo de Instrumento — cabível contra despacho que denega seguimento a recurso',
      'Recurso de Revista — cabível de acórdãos de TRT ao TST, exige violação de lei ou divergência jurisprudencial (transcendência)',
      'Requisito da transcendência no Recurso de Revista — econômica, política, social ou jurídica (art. 896-A CLT)',
      'Embargos ao TST — de declaração e de divergência (SDI)',
      'Recurso de Embargos de Declaração — hipóteses: omissão, contradição, obscuridade, erro material',
      'Prazo recursal trabalhista uniforme de 8 dias e depósito recursal como pressuposto extrínseco'
    ],
    grupos:[
      { titulo:'Recursos Ordinários e Agravos', qtd:4 },
      { titulo:'Recurso de Revista e Transcendência', qtd:2 },
      { titulo:'Embargos ao TST', qtd:2 },
      { titulo:'Prazo e Depósito Recursal', qtd:1 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d68_c1',texto:'Irrecorribilidade das interlocutórias — Súmula 214 TST',feito:false},
  {id:'d68_c2',texto:'Recurso Ordinário — prazo de 8 dias',feito:false},
  {id:'d68_c3',texto:'Agravo de Petição — execução',feito:false},
  {id:'d68_c4',texto:'Agravo de Instrumento — denegação de seguimento',feito:false},
  {id:'d68_c5',texto:'Recurso de Revista — violação de lei/divergência',feito:false},
  {id:'d68_c6',texto:'Transcendência — art. 896-A CLT',feito:false},
  {id:'d68_c7',texto:'Embargos ao TST — declaração e divergência',feito:false},
  {id:'d68_c8',texto:'Embargos de declaração — hipóteses',feito:false},
  {id:'d68_c9',texto:'Prazo uniforme de 8 dias e depósito recursal',feito:false}
  ],
  sumula:{ sigla:'Súmula 214 TST', texto:'Na Justiça do Trabalho, das decisões interlocutórias não cabe recurso de imediato, salvo nas hipóteses de exceção taxativamente previstas.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[13], lei_seca:['CLT arts. 893-902 (recursos)', 'CLT art. 896 (recurso de revista)', 'CLT art. 896-A (transcendência)'] },

// DIA 69 — VDE dia 104 — Direito Civil
{ dia:69, semana:14,
  titulo:'Civil · Sucessões — Sucessão em Geral, Legítima e Testamentária',
  descricao:'Abertura da sucessão, ordem de vocação hereditária e as regras da sucessão testamentária',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'rose',
    topicos:[
      'Abertura da sucessão — princípio da saisine (transmissão automática com a morte, art. 1.784 CC)',
      'Sucessão legítima vs testamentária — coexistência e prevalência da vontade do testador nos limites da legítima',
      'Herança — universalidade, indivisibilidade até a partilha e natureza de bem imóvel para fins legais',
      'Aceitação e renúncia da herança — formas e efeitos (a renúncia deve ser expressa e por instrumento público)',
      'Herdeiros necessários — descendentes, ascendentes e cônjuge (não podem ser excluídos, salvo indignidade/deserdação)',
      'Ordem de vocação hereditária (art. 1.829 CC) — descendentes, ascendentes, cônjuge/companheiro, colaterais',
      'Concorrência do cônjuge/companheiro com descendentes e ascendentes — regras por regime de bens',
      'Direito de representação — hipóteses e efeitos na partilha',
      'Testamento — formas ordinárias (público, cerrado, particular) e especiais (marítimo, aeronáutico, militar)',
      'Legítima — metade indisponível do patrimônio quando há herdeiros necessários (art. 1.846 CC)',
      'Deserdação — exige testamento e causa expressa, mais ampla que a indignidade'
    ],
    grupos:[
      { titulo:'Sucessão em Geral', qtd:4 },
      { titulo:'Sucessão Legítima', qtd:4 },
      { titulo:'Sucessão Testamentária', qtd:3 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d69_c1',texto:'Princípio da saisine — art. 1.784 CC',feito:false},
  {id:'d69_c2',texto:'Sucessão legítima vs testamentária',feito:false},
  {id:'d69_c3',texto:'Herança — universalidade e indivisibilidade',feito:false},
  {id:'d69_c4',texto:'Aceitação e renúncia da herança',feito:false},
  {id:'d69_c5',texto:'Herdeiros necessários',feito:false},
  {id:'d69_c6',texto:'Ordem de vocação hereditária — art. 1.829 CC',feito:false},
  {id:'d69_c7',texto:'Concorrência do cônjuge/companheiro',feito:false},
  {id:'d69_c8',texto:'Direito de representação',feito:false},
  {id:'d69_c9',texto:'Formas de testamento',feito:false},
  {id:'d69_c10',texto:'Legítima — art. 1.846 CC',feito:false},
  {id:'d69_c11',texto:'Deserdação vs indignidade',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[13], lei_seca:['CC arts. 1.784-1.828 (sucessão em geral)', 'CC art. 1.829 (vocação hereditária)', 'CC arts. 1.857-1.990 (sucessão testamentária)'] },

// ════════════════════════════════════════════════════
// SEMANA 15 — DIAS 70–72 · VDE dias 106–108
// Últimos dias de conteúdo NOVO do cronograma VDE.
// (VDE dia 105 = Revisão Nocaute, dias 109-111 = Revisão Nocaute,
//  dia 112 = Dia da Aprovação/prova — não mapeados; ver dias 73-120)
// ════════════════════════════════════════════════════

// DIA 70 — VDE dia 106 — Direito Penal
{ dia:70, semana:15,
  titulo:'Penal · Crimes Contra a Administração Pública e Legislação Penal Especial',
  descricao:'Peculato, corrupção, concussão e as principais leis penais especiais cobradas na 1ª fase',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:[
      'Peculato — apropriação, desvio (doloso, art. 312 CP) e culposo (art. 312, §2º CP)',
      'Peculato-furto e peculato mediante erro de outrem (peculato estelionato)',
      'Corrupção passiva — solicitar ou receber vantagem indevida em razão da função (art. 317 CP)',
      'Corrupção ativa — oferecer ou prometer vantagem a funcionário público (art. 333 CP)',
      'Concussão — exigir vantagem indevida, distinção da corrupção passiva (exigir vs solicitar/receber)',
      'Prevaricação — satisfazer interesse ou sentimento pessoal',
      'Crimes praticados por particular contra a Administração — desacato, resistência, desobediência',
      'Lei de Drogas (Lei 11.343/06) — distinção entre uso e tráfico, natureza jurídica do art. 28',
      'Lei Maria da Penha (Lei 11.340/06) — medidas protetivas de urgência e vedação a penas alternativas isoladas',
      'Estatuto do Desarmamento (Lei 10.826/03) — porte e posse ilegal de arma de fogo',
      'Lei de Crimes Hediondos (Lei 8.072/90) — rol e consequências (regime inicial, progressão, livramento)'
    ],
    grupos:[
      { titulo:'Crimes Contra a Administração Pública', qtd:7 },
      { titulo:'Legislação Penal Especial', qtd:4 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d70_c1',texto:'Peculato doloso e culposo',feito:false},
  {id:'d70_c2',texto:'Peculato-furto e peculato-estelionato',feito:false},
  {id:'d70_c3',texto:'Corrupção passiva — art. 317 CP',feito:false},
  {id:'d70_c4',texto:'Corrupção ativa — art. 333 CP',feito:false},
  {id:'d70_c5',texto:'Concussão — distinção da corrupção passiva',feito:false},
  {id:'d70_c6',texto:'Prevaricação',feito:false},
  {id:'d70_c7',texto:'Desacato, resistência e desobediência',feito:false},
  {id:'d70_c8',texto:'Lei de Drogas — uso vs tráfico',feito:false},
  {id:'d70_c9',texto:'Lei Maria da Penha — medidas protetivas',feito:false},
  {id:'d70_c10',texto:'Estatuto do Desarmamento',feito:false},
  {id:'d70_c11',texto:'Lei de Crimes Hediondos',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[15], lei_seca:['CP arts. 312-337-A (crimes contra a Administração)', 'Lei 11.343/06', 'Lei 11.340/06', 'Lei 10.826/03', 'Lei 8.072/90'] },

// DIA 71 — VDE dia 107 — Direito Constitucional
{ dia:71, semana:15,
  titulo:'Constitucional · Defesa do Estado e Ordem Social',
  descricao:'Estado de defesa, estado de sítio, forças armadas, segurança pública e seguridade social na CF',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:[
      'Sistema constitucional das crises — estado de defesa e estado de sítio (arts. 136-141 CF)',
      'Estado de defesa — decretação pelo Presidente, controle imediato do Congresso, prazo de 30 dias prorrogável',
      'Estado de sítio — hipóteses mais graves, exige autorização prévia do Congresso, prazo de 30 dias (ou até o fim da guerra)',
      'Forças Armadas — Marinha, Exército e Aeronáutica; destinação constitucional (defesa da pátria, garantia dos poderes constitucionais)',
      'Segurança pública — órgãos do art. 144 CF: polícia federal, rodoviária/ferroviária federal, civil, militar, corpo de bombeiros militar',
      'Ordem Social — base do primado do trabalho e objetivo do bem-estar e justiça sociais (art. 193 CF)',
      'Seguridade social na CF — arts. 194-204, tripé saúde/previdência/assistência (revisão sistêmica)',
      'Saúde — princípios do SUS: universalidade, integralidade, descentralização, participação da comunidade',
      'Assistência social — independe de contribuição, para quem dela necessitar (art. 203 CF), benefício de prestação continuada (BPC/LOAS)',
      'Educação, cultura, desporto, ciência e tecnologia, meio ambiente, família — direitos sociais previstos na Ordem Social'
    ],
    grupos:[
      { titulo:'Defesa do Estado', qtd:5 },
      { titulo:'Ordem Social', qtd:5 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d71_c1',texto:'Estado de defesa e estado de sítio — arts. 136-141 CF',feito:false},
  {id:'d71_c2',texto:'Estado de defesa — decretação e controle',feito:false},
  {id:'d71_c3',texto:'Estado de sítio — hipóteses e autorização do Congresso',feito:false},
  {id:'d71_c4',texto:'Forças Armadas — destinação constitucional',feito:false},
  {id:'d71_c5',texto:'Segurança pública — órgãos do art. 144 CF',feito:false},
  {id:'d71_c6',texto:'Ordem Social — primado do trabalho, art. 193 CF',feito:false},
  {id:'d71_c7',texto:'Seguridade social — arts. 194-204 CF',feito:false},
  {id:'d71_c8',texto:'Princípios do SUS',feito:false},
  {id:'d71_c9',texto:'Assistência social — BPC/LOAS',feito:false},
  {id:'d71_c10',texto:'Direitos sociais da Ordem Social',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[15], lei_seca:['CF arts. 136-144 (defesa do Estado)', 'CF arts. 193-232 (ordem social)'] },

// DIA 72 — VDE dia 108 — Direito Tributário
{ dia:72, semana:15,
  titulo:'Tributário · Execução Fiscal',
  descricao:'Certidão de Dívida Ativa, procedimento da execução fiscal e os meios de defesa do executado',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:[
      'Lei 6.830/80 (LEF) — regência do processo de execução fiscal, aplicação subsidiária do CPC',
      'Certidão de Dívida Ativa (CDA) — título executivo extrajudicial, requisitos e presunção de liquidez e certeza',
      'Inscrição em dívida ativa — momento e efeitos; prazo de suspensão da prescrição por 180 dias (art. 2º, §3º LEF)',
      'Legitimidade passiva — devedor, fiadores, responsáveis tributários e sucessores',
      'Citação na execução fiscal — pelo correio (regra) e efeitos sobre a interrupção da prescrição',
      'Penhora na execução fiscal — ordem de bens e possibilidade de indicação pelo executado',
      'Embargos à execução fiscal — prazo de 30 dias, exige garantia do juízo (penhora, depósito ou fiança)',
      'Exceção de pré-executividade — defesa sem necessidade de garantia, restrita a matérias de ordem pública cognoscíveis de ofício',
      'Redirecionamento da execução fiscal — hipóteses do art. 135 CTN (dissolução irregular, Súmula 435 STJ)',
      'Prescrição intercorrente — Súmula 314 STJ, suspensão por 1 ano e arquivamento sem baixa'
    ],
    grupos:[
      { titulo:'Certidão de Dívida Ativa e Legitimidade', qtd:4 },
      { titulo:'Citação, Penhora e Embargos', qtd:3 },
      { titulo:'Defesas e Incidentes na Execução Fiscal', qtd:3 }
    ] }],
  flashcards:[],
  checklist:[
  {id:'d72_c1',texto:'Lei 6.830/80 — regência da execução fiscal',feito:false},
  {id:'d72_c2',texto:'Certidão de Dívida Ativa — requisitos',feito:false},
  {id:'d72_c3',texto:'Inscrição em dívida ativa — suspensão de 180 dias',feito:false},
  {id:'d72_c4',texto:'Legitimidade passiva na execução fiscal',feito:false},
  {id:'d72_c5',texto:'Citação — pelo correio e interrupção da prescrição',feito:false},
  {id:'d72_c6',texto:'Penhora — ordem de bens',feito:false},
  {id:'d72_c7',texto:'Embargos à execução fiscal — prazo de 30 dias',feito:false},
  {id:'d72_c8',texto:'Exceção de pré-executividade',feito:false},
  {id:'d72_c9',texto:'Redirecionamento — Súmula 435 STJ',feito:false},
  {id:'d72_c10',texto:'Prescrição intercorrente — Súmula 314 STJ',feito:false}
  ],
  sumula:{ sigla:'Súmula 435 STJ', texto:'Presume-se dissolvida irregularmente a empresa que deixar de funcionar no seu domicílio fiscal, sem comunicação aos órgãos competentes, legitimando o redirecionamento da execução fiscal para o sócio-gerente.' },
  incidencia:0, pdf_id:_VDE_PDF_IDS[15], lei_seca:['Lei 6.830/80 (LEF)', 'CTN art. 135 (redirecionamento)'] },

// ════════════════════════════════════════════════════════════
// DIAS 73–120 — Revisão Espaçada (sem referência de dia no VDE)
// O cronograma VDE só fornece 72 dias de conteúdo NOVO (mapeados
// acima). Os dias 73-120 formam o ciclo de revisão ativa próprio
// do projeto: 1º ciclo por matéria (73-89), 2º ciclo com foco em
// questões e jurisprudência (90-106), reta final (107-120).
// ════════════════════════════════════════════════════════════

// ── CICLO DE REVISÃO 1 — DIAS 73–89 ──

// DIA 73 — Revisão · Direito Constitucional
{ dia:73, semana:16,
  titulo:'Revisão · Direito Constitucional (Dias 1, 12, 22, 33, 44, 55, 58, 71)',
  descricao:'Revisão ativa de todo o conteúdo de Constitucional estudado: teoria da constituição, remédios, nacionalidade, organização do Estado, poderes e controle de constitucionalidade',
  emoji_principal:'🔄', materia:'Revisão · Constitucional',
  materias:[{ nome:'Revisão · Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:[
      'Reler e refazer o checklist dos dias 1, 12, 22, 33, 44, 55, 58 e 71',
      'Refazer os flashcards de Teoria da Constituição e Direitos Fundamentais (dia 1)',
      'Refazer os flashcards de Remédios Constitucionais (dia 12) — quadro comparativo HC/HD/MS/MI/AP',
      'Refazer os flashcards de Nacionalidade (dia 22) e Organização do Estado (dia 33)',
      'Refazer os flashcards de Poder Executivo/Legislativo (dias 44, 55) e Controle de Constitucionalidade (dia 58)',
      'Refazer os flashcards de Defesa do Estado e Ordem Social (dia 71)',
      'Resolver 20 questões de provas anteriores da OAB sobre Constitucional',
      'Anotar os 3 erros mais recorrentes e revisar a súmula relacionada'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d73_c1',texto:'Revisar checklist dos dias 1, 12, 22, 33, 44, 55, 58, 71',feito:false},
  {id:'d73_c2',texto:'Flashcards — Teoria da Constituição e Direitos Fundamentais',feito:false},
  {id:'d73_c3',texto:'Flashcards — Remédios Constitucionais',feito:false},
  {id:'d73_c4',texto:'Flashcards — Nacionalidade e Organização do Estado',feito:false},
  {id:'d73_c5',texto:'Flashcards — Poderes Executivo/Legislativo e Controle de Constitucionalidade',feito:false},
  {id:'d73_c6',texto:'Flashcards — Defesa do Estado e Ordem Social',feito:false},
  {id:'d73_c7',texto:'20 questões OAB — Constitucional',feito:false},
  {id:'d73_c8',texto:'Anotar erros recorrentes',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 74 — Revisão · Direito do Trabalho
{ dia:74, semana:16,
  titulo:'Revisão · Direito do Trabalho (Dias 2, 13, 23, 34, 45, 65)',
  descricao:'Revisão ativa de relação de trabalho, empregado/empregador, alteração contratual, jornada, estabilidade e direito coletivo',
  emoji_principal:'🔄', materia:'Revisão · Trabalho',
  materias:[{ nome:'Revisão · Direito do Trabalho', emoji:'👷', horas:4, cor:'sage',
    topicos:[
      'Reler e refazer o checklist dos dias 2, 13, 23, 34, 45 e 65',
      'Refazer os flashcards de Relação e Contrato de Trabalho (dia 2)',
      'Refazer os flashcards de Empregado e Empregador (dia 13)',
      'Refazer os flashcards de Alteração, Interrupção e Suspensão contratual (dia 23)',
      'Refazer os flashcards de Duração do Trabalho (dia 34)',
      'Refazer os flashcards de Estabilidade e Remuneração (dia 45)',
      'Refazer os flashcards de Direito Coletivo e Extinção do Contrato (dia 65)',
      'Resolver 20 questões de provas anteriores da OAB sobre Trabalho',
      'Montar tabela comparativa de verbas rescisórias por modalidade de extinção'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d74_c1',texto:'Revisar checklist dos dias 2, 13, 23, 34, 45, 65',feito:false},
  {id:'d74_c2',texto:'Flashcards — Relação e Contrato de Trabalho',feito:false},
  {id:'d74_c3',texto:'Flashcards — Empregado e Empregador',feito:false},
  {id:'d74_c4',texto:'Flashcards — Alteração, Interrupção e Suspensão',feito:false},
  {id:'d74_c5',texto:'Flashcards — Duração do Trabalho',feito:false},
  {id:'d74_c6',texto:'Flashcards — Estabilidade e Remuneração',feito:false},
  {id:'d74_c7',texto:'Flashcards — Direito Coletivo e Extinção do Contrato',feito:false},
  {id:'d74_c8',texto:'20 questões OAB — Trabalho',feito:false},
  {id:'d74_c9',texto:'Tabela de verbas rescisórias por modalidade',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 75 — Revisão · Direito Civil (Parte Geral e Obrigações)
{ dia:75, semana:16,
  titulo:'Revisão · Direito Civil — Parte Geral e Obrigações (Dias 3, 14, 24, 31)',
  descricao:'Revisão ativa de pessoa natural/jurídica, negócio jurídico e o regime das obrigações',
  emoji_principal:'🔄', materia:'Revisão · Civil',
  materias:[{ nome:'Revisão · Direito Civil', emoji:'📜', horas:4, cor:'rose',
    topicos:[
      'Reler e refazer o checklist dos dias 3, 14, 24 e 31',
      'Refazer os flashcards de Pessoa Natural e Pessoa Jurídica (dia 3)',
      'Refazer os flashcards de Negócio Jurídico — vícios e invalidade (dia 14)',
      'Refazer os flashcards de Adimplemento e Extinção das Obrigações (dia 24)',
      'Refazer os flashcards de Modalidades das Obrigações (dia 31)',
      'Resolver 20 questões de provas anteriores da OAB sobre Civil — Parte Geral e Obrigações',
      'Revisar prazos decadenciais e prescricionais mais cobrados (fraude contra credores, anulabilidade)'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d75_c1',texto:'Revisar checklist dos dias 3, 14, 24, 31',feito:false},
  {id:'d75_c2',texto:'Flashcards — Pessoa Natural e Pessoa Jurídica',feito:false},
  {id:'d75_c3',texto:'Flashcards — Negócio Jurídico',feito:false},
  {id:'d75_c4',texto:'Flashcards — Adimplemento e Extinção das Obrigações',feito:false},
  {id:'d75_c5',texto:'Flashcards — Modalidades das Obrigações',feito:false},
  {id:'d75_c6',texto:'20 questões OAB — Civil (Parte Geral e Obrigações)',feito:false},
  {id:'d75_c7',texto:'Revisar prazos decadenciais e prescricionais',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 76 — Revisão · Direito Tributário
{ dia:76, semana:16,
  titulo:'Revisão · Direito Tributário (Dias 4, 15, 25, 36, 47, 63, 72)',
  descricao:'Revisão ativa de princípios, competência, imunidades, espécies tributárias, obrigação/responsabilidade e execução fiscal',
  emoji_principal:'🔄', materia:'Revisão · Tributário',
  materias:[{ nome:'Revisão · Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:[
      'Reler e refazer o checklist dos dias 4, 15, 25, 36, 47, 63 e 72',
      'Refazer os flashcards de Princípios Tributários (dia 4) e Competência Tributária (dia 15)',
      'Refazer os flashcards de Imunidades (dia 25) e Espécies Tributárias (dia 36)',
      'Refazer os flashcards de Obrigação e Responsabilidade Tributária (dia 47)',
      'Refazer os flashcards de Impostos e Suspensão/Extinção/Exclusão do Crédito (dia 63)',
      'Refazer os flashcards de Execução Fiscal (dia 72)',
      'Resolver 20 questões de provas anteriores da OAB sobre Tributário',
      'Montar tabela de exceções às anterioridades anual e nonagesimal por tributo'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d76_c1',texto:'Revisar checklist dos dias 4, 15, 25, 36, 47, 63, 72',feito:false},
  {id:'d76_c2',texto:'Flashcards — Princípios e Competência Tributária',feito:false},
  {id:'d76_c3',texto:'Flashcards — Imunidades e Espécies Tributárias',feito:false},
  {id:'d76_c4',texto:'Flashcards — Obrigação e Responsabilidade Tributária',feito:false},
  {id:'d76_c5',texto:'Flashcards — Impostos e Crédito Tributário',feito:false},
  {id:'d76_c6',texto:'Flashcards — Execução Fiscal',feito:false},
  {id:'d76_c7',texto:'20 questões OAB — Tributário',feito:false},
  {id:'d76_c8',texto:'Tabela de exceções às anterioridades',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 77 — Revisão · Processo do Trabalho
{ dia:77, semana:16,
  titulo:'Revisão · Processo do Trabalho (Dias 5, 16, 26, 34, 62, 68)',
  descricao:'Revisão ativa de atos/competência, despesas processuais, ação trabalhista, provas, execução e recursos',
  emoji_principal:'🔄', materia:'Revisão · Processo do Trabalho',
  materias:[{ nome:'Revisão · Processo do Trabalho', emoji:'⚖️', horas:4, cor:'sage',
    topicos:[
      'Reler e refazer o checklist dos dias 5, 16, 26, 34, 62 e 68',
      'Refazer os flashcards de Atos/Prazos e Competência (dia 5)',
      'Refazer os flashcards de Despesas Processuais (dia 16)',
      'Refazer os flashcards de Ação Trabalhista e Audiência (dia 26)',
      'Refazer os flashcards de Provas (dia 34) e Ações Especiais/Execução (dia 62)',
      'Refazer os flashcards de Recursos Trabalhistas (dia 68)',
      'Resolver 15 questões de provas anteriores da OAB sobre Processo do Trabalho',
      'Montar tabela de prazos recursais e depósito recursal por instância'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d77_c1',texto:'Revisar checklist dos dias 5, 16, 26, 34, 62, 68',feito:false},
  {id:'d77_c2',texto:'Flashcards — Atos, Prazos e Competência',feito:false},
  {id:'d77_c3',texto:'Flashcards — Despesas Processuais',feito:false},
  {id:'d77_c4',texto:'Flashcards — Ação Trabalhista e Audiência',feito:false},
  {id:'d77_c5',texto:'Flashcards — Provas, Ações Especiais e Execução',feito:false},
  {id:'d77_c6',texto:'Flashcards — Recursos Trabalhistas',feito:false},
  {id:'d77_c7',texto:'15 questões OAB — Processo do Trabalho',feito:false},
  {id:'d77_c8',texto:'Tabela de prazos recursais',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 78 — Revisão · Direito Penal (Teoria do Crime)
{ dia:78, semana:16,
  titulo:'Revisão · Direito Penal — Teoria do Crime (Dias 6, 17, 27, 31, 37)',
  descricao:'Revisão ativa de eficácia da lei penal, fato típico, ilicitude, culpabilidade, concurso de pessoas/crimes e penas',
  emoji_principal:'🔄', materia:'Revisão · Penal',
  materias:[{ nome:'Revisão · Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:[
      'Reler e refazer o checklist dos dias 6, 17, 27, 31 e 37',
      'Refazer os flashcards de Eficácia da Lei Penal no Tempo e no Espaço (dia 6)',
      'Refazer os flashcards de Fato Típico (dia 17)',
      'Refazer os flashcards de Culpabilidade e Ilicitude (dia 27)',
      'Refazer os flashcards de Concurso de Pessoas e Extinção da Punibilidade (dia 31)',
      'Refazer os flashcards de Concurso de Crimes e Penas (dia 37)',
      'Resolver 20 questões de provas anteriores da OAB sobre Teoria do Crime',
      'Montar quadro comparativo das excludentes de ilicitude e de culpabilidade'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d78_c1',texto:'Revisar checklist dos dias 6, 17, 27, 31, 37',feito:false},
  {id:'d78_c2',texto:'Flashcards — Eficácia da Lei Penal',feito:false},
  {id:'d78_c3',texto:'Flashcards — Fato Típico',feito:false},
  {id:'d78_c4',texto:'Flashcards — Culpabilidade e Ilicitude',feito:false},
  {id:'d78_c5',texto:'Flashcards — Concurso de Pessoas e Extinção da Punibilidade',feito:false},
  {id:'d78_c6',texto:'Flashcards — Concurso de Crimes e Penas',feito:false},
  {id:'d78_c7',texto:'20 questões OAB — Teoria do Crime',feito:false},
  {id:'d78_c8',texto:'Quadro de excludentes de ilicitude e culpabilidade',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 79 — Revisão · Ética Profissional
{ dia:79, semana:16,
  titulo:'Revisão · Ética Profissional (Dias 7, 18, 28, 38, 49, 58)',
  descricao:'Revisão ativa de mandato, inscrição/sociedade, prerrogativas/honorários, incompatibilidades, sigilo e estrutura da OAB',
  emoji_principal:'🔄', materia:'Revisão · Ética',
  materias:[{ nome:'Revisão · Ética Profissional', emoji:'⚖️', horas:4, cor:'champagne',
    topicos:[
      'Reler e refazer o checklist dos dias 7, 18, 28, 38, 49 e 58 (parte Ética)',
      'Refazer os flashcards de Atividades da Advocacia e Mandato (dia 7)',
      'Refazer os flashcards de Inscrição na OAB e Sociedade de Advogados (dia 18)',
      'Refazer os flashcards de Prerrogativas e Honorários (dia 28)',
      'Refazer os flashcards de Incompatibilidades e Infrações/Sanções (dia 38)',
      'Refazer os flashcards de Sigilo e Processo Disciplinar (dia 49)',
      'Refazer os flashcards de Estrutura da OAB e Publicidade Profissional (dia 58)',
      'Resolver 20 questões de provas anteriores da OAB sobre Ética — matéria de maior peso relativo na prova'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d79_c1',texto:'Revisar checklist dos dias 7, 18, 28, 38, 49, 58',feito:false},
  {id:'d79_c2',texto:'Flashcards — Atividades da Advocacia e Mandato',feito:false},
  {id:'d79_c3',texto:'Flashcards — Inscrição na OAB e Sociedade de Advogados',feito:false},
  {id:'d79_c4',texto:'Flashcards — Prerrogativas e Honorários',feito:false},
  {id:'d79_c5',texto:'Flashcards — Incompatibilidades e Sanções Disciplinares',feito:false},
  {id:'d79_c6',texto:'Flashcards — Sigilo e Processo Disciplinar',feito:false},
  {id:'d79_c7',texto:'Flashcards — Estrutura da OAB e Publicidade',feito:false},
  {id:'d79_c8',texto:'20 questões OAB — Ética Profissional',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 80 — Revisão · Processo Civil (Parte Geral)
{ dia:80, semana:16,
  titulo:'Revisão · Processo Civil — Parte Geral (Dias 8, 19, 29, 39)',
  descricao:'Revisão ativa de atos processuais, partes/procuradores, intervenção de terceiros/tutela provisória e procedimento comum',
  emoji_principal:'🔄', materia:'Revisão · Processo Civil',
  materias:[{ nome:'Revisão · Processo Civil', emoji:'📋', horas:4, cor:'sage',
    topicos:[
      'Reler e refazer o checklist dos dias 8, 19, 29 e 39',
      'Refazer os flashcards de Atos Processuais (dia 8)',
      'Refazer os flashcards de Partes e Procuradores (dia 19)',
      'Refazer os flashcards de Intervenção de Terceiros e Tutela Provisória (dia 29)',
      'Refazer os flashcards de Procedimento Comum (dia 39)',
      'Resolver 20 questões de provas anteriores da OAB sobre Processo Civil — Parte Geral',
      'Montar linha do tempo das fases do procedimento comum'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d80_c1',texto:'Revisar checklist dos dias 8, 19, 29, 39',feito:false},
  {id:'d80_c2',texto:'Flashcards — Atos Processuais',feito:false},
  {id:'d80_c3',texto:'Flashcards — Partes e Procuradores',feito:false},
  {id:'d80_c4',texto:'Flashcards — Intervenção de Terceiros e Tutela Provisória',feito:false},
  {id:'d80_c5',texto:'Flashcards — Procedimento Comum',feito:false},
  {id:'d80_c6',texto:'20 questões OAB — Processo Civil (Parte Geral)',feito:false},
  {id:'d80_c7',texto:'Linha do tempo do procedimento comum',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 81 — Revisão · Direito Empresarial
{ dia:81, semana:16,
  titulo:'Revisão · Direito Empresarial (Dias 9, 20, 40, 51)',
  descricao:'Revisão ativa de empresa/empresário, direito societário, títulos de crédito e falência/recuperação judicial',
  emoji_principal:'🔄', materia:'Revisão · Empresarial',
  materias:[{ nome:'Revisão · Direito Empresarial', emoji:'🏢', horas:4, cor:'nude',
    topicos:[
      'Reler e refazer o checklist dos dias 9, 20, 40 e 51',
      'Refazer os flashcards de Empresa, Empresário e Estabelecimento (dia 9)',
      'Refazer os flashcards de Direito Societário (dia 20)',
      'Refazer os flashcards de Títulos de Crédito (dia 40)',
      'Refazer os flashcards de Falência e Recuperação Judicial (dia 51)',
      'Resolver 15 questões de provas anteriores da OAB sobre Empresarial',
      'Montar tabela comparativa dos tipos societários mais cobrados'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d81_c1',texto:'Revisar checklist dos dias 9, 20, 40, 51',feito:false},
  {id:'d81_c2',texto:'Flashcards — Empresa, Empresário e Estabelecimento',feito:false},
  {id:'d81_c3',texto:'Flashcards — Direito Societário',feito:false},
  {id:'d81_c4',texto:'Flashcards — Títulos de Crédito',feito:false},
  {id:'d81_c5',texto:'Flashcards — Falência e Recuperação Judicial',feito:false},
  {id:'d81_c6',texto:'15 questões OAB — Empresarial',feito:false},
  {id:'d81_c7',texto:'Tabela comparativa de tipos societários',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 82 — Revisão · Processo Penal
{ dia:82, semana:16,
  titulo:'Revisão · Processo Penal (Dias 10, 21, 41, 50, 60, 64)',
  descricao:'Revisão ativa de inquérito/ação penal, competência, provas, prisão/liberdade, citação/ritos e recursos/nulidades',
  emoji_principal:'🔄', materia:'Revisão · Processo Penal',
  materias:[{ nome:'Revisão · Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:[
      'Reler e refazer o checklist dos dias 10, 21, 41, 50, 60 e 64',
      'Refazer os flashcards de Inquérito Policial e Ação Penal (dia 10)',
      'Refazer os flashcards de Competência (dia 21)',
      'Refazer os flashcards de Provas e Incidentes (dia 41)',
      'Refazer os flashcards de Prisão e Liberdade Provisória (dia 50)',
      'Refazer os flashcards de Citação, Intimação e Ritos (dia 60)',
      'Refazer os flashcards de Nulidades e Recursos (dia 64)',
      'Resolver 20 questões de provas anteriores da OAB sobre Processo Penal'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d82_c1',texto:'Revisar checklist dos dias 10, 21, 41, 50, 60, 64',feito:false},
  {id:'d82_c2',texto:'Flashcards — Inquérito Policial e Ação Penal',feito:false},
  {id:'d82_c3',texto:'Flashcards — Competência',feito:false},
  {id:'d82_c4',texto:'Flashcards — Provas e Incidentes',feito:false},
  {id:'d82_c5',texto:'Flashcards — Prisão e Liberdade Provisória',feito:false},
  {id:'d82_c6',texto:'Flashcards — Citação, Intimação e Ritos',feito:false},
  {id:'d82_c7',texto:'Flashcards — Nulidades e Recursos',feito:false},
  {id:'d82_c8',texto:'20 questões OAB — Processo Penal',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 83 — Revisão · Direito Administrativo
{ dia:83, semana:16,
  titulo:'Revisão · Direito Administrativo (Dias 11, 21, 22, 42, 52, 54, 67)',
  descricao:'Revisão ativa de princípios/poderes, organização administrativa, atos, agentes públicos, improbidade, intervenção e serviços públicos',
  emoji_principal:'🔄', materia:'Revisão · Administrativo',
  materias:[{ nome:'Revisão · Direito Administrativo', emoji:'🏛️', horas:4, cor:'sage',
    topicos:[
      'Reler e refazer o checklist dos dias 11, 21, 22, 42, 52, 54 e 67',
      'Refazer os flashcards de Princípios e Poderes Administrativos (dia 11)',
      'Refazer os flashcards de Organização da Administração Indireta (dia 21)',
      'Refazer os flashcards de Atos Administrativos (dia 22)',
      'Refazer os flashcards de Agentes Públicos (dia 42) e Improbidade Administrativa (dia 52)',
      'Refazer os flashcards de Intervenção na Propriedade/Responsabilidade Civil (dia 54)',
      'Refazer os flashcards de Consórcios e Serviços Públicos/PPP (dia 67)',
      'Resolver 20 questões de provas anteriores da OAB sobre Administrativo'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d83_c1',texto:'Revisar checklist dos dias 11, 21, 22, 42, 52, 54, 67',feito:false},
  {id:'d83_c2',texto:'Flashcards — Princípios e Poderes Administrativos',feito:false},
  {id:'d83_c3',texto:'Flashcards — Organização da Administração Indireta',feito:false},
  {id:'d83_c4',texto:'Flashcards — Atos Administrativos',feito:false},
  {id:'d83_c5',texto:'Flashcards — Agentes Públicos e Improbidade',feito:false},
  {id:'d83_c6',texto:'Flashcards — Intervenção na Propriedade e Responsabilidade Civil',feito:false},
  {id:'d83_c7',texto:'Flashcards — Consórcios e Serviços Públicos/PPP',feito:false},
  {id:'d83_c8',texto:'20 questões OAB — Administrativo',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 84 — Revisão · Previdenciário e Consumidor
{ dia:84, semana:16,
  titulo:'Revisão · Previdenciário e Consumidor (Dias 25, 32, 43, 44, 56)',
  descricao:'Revisão ativa de segurados/benefícios do RGPS e direitos básicos/responsabilidade civil do consumidor',
  emoji_principal:'🔄', materia:'Revisão · Previdenciário e Consumidor',
  materias:[
    { nome:'Revisão · Direito Previdenciário', emoji:'🛡️', horas:2, cor:'gold',
      topicos:[
        'Refazer os flashcards de Segurados e Seguridade Social (dia 25)',
        'Refazer os flashcards de Benefícios e Aposentadorias (dia 44)',
        'Resolver 10 questões de provas anteriores da OAB sobre Previdenciário'
      ] },
    { nome:'Revisão · Direito do Consumidor', emoji:'🛒', horas:2, cor:'lavender',
      topicos:[
        'Refazer os flashcards de Política Nacional das Relações de Consumo (dia 32)',
        'Refazer os flashcards de Direitos Básicos e Proteção Contratual (dia 43)',
        'Refazer os flashcards de Práticas Comerciais e Responsabilidade Civil (dia 56)',
        'Resolver 15 questões de provas anteriores da OAB sobre Consumidor'
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d84_c1',texto:'Flashcards — Segurados e Seguridade Social',feito:false},
  {id:'d84_c2',texto:'Flashcards — Benefícios e Aposentadorias',feito:false},
  {id:'d84_c3',texto:'10 questões OAB — Previdenciário',feito:false},
  {id:'d84_c4',texto:'Flashcards — Política Nacional das Relações de Consumo',feito:false},
  {id:'d84_c5',texto:'Flashcards — Direitos Básicos e Proteção Contratual',feito:false},
  {id:'d84_c6',texto:'Flashcards — Práticas Comerciais e Responsabilidade Civil',feito:false},
  {id:'d84_c7',texto:'15 questões OAB — Consumidor',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 85 — Revisão · ECA e Direito Eleitoral
{ dia:85, semana:16,
  titulo:'Revisão · ECA e Direito Eleitoral (Dias 30, 57)',
  descricao:'Revisão ativa de direitos fundamentais/família substituta/ato infracional e direitos políticos/partidos',
  emoji_principal:'🔄', materia:'Revisão · ECA e Eleitoral',
  materias:[
    { nome:'Revisão · ECA', emoji:'👶', horas:2, cor:'champagne',
      topicos:[
        'Refazer os flashcards de Direitos Fundamentais e Família Substituta (dia 30)',
        'Refazer os flashcards de Ato Infracional e Medidas Socioeducativas (dia 30)',
        'Resolver 10 questões de provas anteriores da OAB sobre ECA'
      ] },
    { nome:'Revisão · Direito Eleitoral', emoji:'🗳️', horas:2, cor:'lavender',
      topicos:[
        'Refazer os flashcards de Direitos Políticos e Partidos Políticos (dia 57)',
        'Revisar condições de elegibilidade e inelegibilidades',
        'Resolver 10 questões de provas anteriores da OAB sobre Eleitoral'
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d85_c1',texto:'Flashcards — Direitos Fundamentais e Família Substituta (ECA)',feito:false},
  {id:'d85_c2',texto:'Flashcards — Ato Infracional e Medidas Socioeducativas',feito:false},
  {id:'d85_c3',texto:'10 questões OAB — ECA',feito:false},
  {id:'d85_c4',texto:'Flashcards — Direitos Políticos e Partidos Políticos',feito:false},
  {id:'d85_c5',texto:'Revisar elegibilidade e inelegibilidades',feito:false},
  {id:'d85_c6',texto:'10 questões OAB — Eleitoral',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 86 — Revisão Geral 1 — Constitucional, Civil e Penal
{ dia:86, semana:16,
  titulo:'Revisão Geral 1 · Constitucional, Civil e Penal',
  descricao:'Revisão cruzada das três matérias de maior carga horária no cronograma — questões integradas',
  emoji_principal:'↻', materia:'Revisão Geral',
  materias:[{ nome:'Revisão Geral', emoji:'↻', horas:4, cor:'lavender',
    topicos:[
      'Revisão cruzada de Constitucional — todos os 8 dias de conteúdo',
      'Revisão cruzada de Civil — todos os 10 dias de conteúdo',
      'Revisão cruzada de Penal — todos os 8 dias de conteúdo',
      'Resolver 30 questões mistas das 3 matérias',
      'Listar os 10 pontos que mais geram dúvida e priorizar para a próxima revisão'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d86_c1',texto:'Revisão cruzada — Constitucional',feito:false},
  {id:'d86_c2',texto:'Revisão cruzada — Civil',feito:false},
  {id:'d86_c3',texto:'Revisão cruzada — Penal',feito:false},
  {id:'d86_c4',texto:'30 questões mistas',feito:false},
  {id:'d86_c5',texto:'Lista de pontos de dúvida recorrente',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 87 — Revisão Geral 2 — Trabalho, Proc. Trabalho e Tributário
{ dia:87, semana:16,
  titulo:'Revisão Geral 2 · Trabalho, Processo do Trabalho e Tributário',
  descricao:'Revisão cruzada das matérias trabalhistas e tributária — questões integradas',
  emoji_principal:'↻', materia:'Revisão Geral',
  materias:[{ nome:'Revisão Geral', emoji:'↻', horas:4, cor:'sage',
    topicos:[
      'Revisão cruzada de Trabalho — todos os 6 dias de conteúdo',
      'Revisão cruzada de Processo do Trabalho — todos os 6 dias de conteúdo',
      'Revisão cruzada de Tributário — todos os 7 dias de conteúdo',
      'Resolver 30 questões mistas das 3 matérias',
      'Listar os 10 pontos que mais geram dúvida e priorizar para a próxima revisão'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d87_c1',texto:'Revisão cruzada — Trabalho',feito:false},
  {id:'d87_c2',texto:'Revisão cruzada — Processo do Trabalho',feito:false},
  {id:'d87_c3',texto:'Revisão cruzada — Tributário',feito:false},
  {id:'d87_c4',texto:'30 questões mistas',feito:false},
  {id:'d87_c5',texto:'Lista de pontos de dúvida recorrente',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 88 — Simulado Geral 1
{ dia:88, semana:16,
  titulo:'Simulado Geral 1 — 80 Questões (todas as matérias)',
  descricao:'Simulado cronometrado nos moldes da prova da OAB, cobrindo todas as matérias já estudadas',
  emoji_principal:'📝', materia:'Simulado',
  materias:[{ nome:'Simulado', emoji:'📝', horas:5, cor:'lavender',
    topicos:[
      'Simulado de 80 questões, tempo cronometrado de 5 horas (formato da prova real)',
      'Ambiente sem consulta, sem pausas — simular condição real de prova',
      'Marcar as questões com dúvida para revisão detalhada no dia seguinte',
      'Calcular percentual de acerto por matéria'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d88_c1',texto:'Realizar simulado de 80 questões cronometrado',feito:false},
  {id:'d88_c2',texto:'Ambiente sem consulta, sem pausas',feito:false},
  {id:'d88_c3',texto:'Marcar questões com dúvida',feito:false},
  {id:'d88_c4',texto:'Calcular percentual de acerto por matéria',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 89 — Revisão dos Erros do Simulado 1
{ dia:89, semana:16,
  titulo:'Revisão dos Erros — Simulado Geral 1',
  descricao:'Correção detalhada do simulado, com estudo dirigido das matérias de menor desempenho',
  emoji_principal:'🔄', materia:'Revisão',
  materias:[{ nome:'Revisão dos Erros', emoji:'🔄', horas:4, cor:'lavender',
    topicos:[
      'Corrigir todas as questões erradas do Simulado Geral 1, com justificativa de cada alternativa',
      'Identificar as 3 matérias de menor desempenho no simulado',
      'Reler os flashcards das matérias de menor desempenho',
      'Refazer as questões erradas após 24h, sem consultar o gabarito'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d89_c1',texto:'Corrigir questões erradas com justificativa',feito:false},
  {id:'d89_c2',texto:'Identificar 3 matérias de menor desempenho',feito:false},
  {id:'d89_c3',texto:'Reler flashcards das matérias mais fracas',feito:false},
  {id:'d89_c4',texto:'Refazer questões erradas sem gabarito',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// ── CICLO DE REVISÃO 2 — DIAS 90–106 (foco em questões e jurisprudência) ──

// DIA 90 — Revisão 2 · Constitucional — Questões e Súmulas
{ dia:90, semana:17,
  titulo:'Revisão 2 · Constitucional — Questões e Súmulas',
  descricao:'Segunda passada: banco de questões e súmulas mais cobradas de Direito Constitucional',
  emoji_principal:'🔄', materia:'Revisão · Constitucional',
  materias:[{ nome:'Revisão · Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:[
      'Resolver 30 questões de provas anteriores da OAB sobre Constitucional',
      'Ler as 15 súmulas de STF mais cobradas em Constitucional',
      'Revisar jurisprudência recente do STF sobre direitos fundamentais e controle de constitucionalidade',
      'Refazer os flashcards das questões erradas na primeira revisão (dia 73)'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d90_c1',texto:'30 questões OAB — Constitucional',feito:false},
  {id:'d90_c2',texto:'15 súmulas STF mais cobradas',feito:false},
  {id:'d90_c3',texto:'Jurisprudência recente do STF',feito:false},
  {id:'d90_c4',texto:'Refazer flashcards de questões erradas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 91 — Revisão 2 · Trabalho — Questões e Súmulas
{ dia:91, semana:17,
  titulo:'Revisão 2 · Trabalho — Questões e Súmulas',
  descricao:'Segunda passada: banco de questões e súmulas do TST mais cobradas',
  emoji_principal:'🔄', materia:'Revisão · Trabalho',
  materias:[{ nome:'Revisão · Direito do Trabalho', emoji:'👷', horas:4, cor:'sage',
    topicos:[
      'Resolver 30 questões de provas anteriores da OAB sobre Trabalho',
      'Ler as 15 súmulas do TST mais cobradas',
      'Revisar as principais alterações da Reforma Trabalhista (Lei 13.467/17)',
      'Refazer os flashcards das questões erradas na primeira revisão (dia 74)'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d91_c1',texto:'30 questões OAB — Trabalho',feito:false},
  {id:'d91_c2',texto:'15 súmulas TST mais cobradas',feito:false},
  {id:'d91_c3',texto:'Revisar Reforma Trabalhista',feito:false},
  {id:'d91_c4',texto:'Refazer flashcards de questões erradas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 92 — Revisão 2 · Civil — Questões e Súmulas
{ dia:92, semana:17,
  titulo:'Revisão 2 · Civil — Questões e Súmulas',
  descricao:'Segunda passada: banco de questões e súmulas de STJ mais cobradas em Civil',
  emoji_principal:'🔄', materia:'Revisão · Civil',
  materias:[{ nome:'Revisão · Direito Civil', emoji:'📜', horas:4, cor:'rose',
    topicos:[
      'Resolver 30 questões de provas anteriores da OAB sobre Civil',
      'Ler as 15 súmulas do STJ mais cobradas em Civil',
      'Revisar prazos prescricionais e decadenciais do CC em tabela única',
      'Refazer os flashcards das questões erradas na primeira revisão (dia 75)'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d92_c1',texto:'30 questões OAB — Civil',feito:false},
  {id:'d92_c2',texto:'15 súmulas STJ mais cobradas',feito:false},
  {id:'d92_c3',texto:'Tabela única de prazos prescricionais/decadenciais',feito:false},
  {id:'d92_c4',texto:'Refazer flashcards de questões erradas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 93 — Revisão 2 · Tributário — Questões e Súmulas
{ dia:93, semana:17,
  titulo:'Revisão 2 · Tributário — Questões e Súmulas',
  descricao:'Segunda passada: banco de questões e súmulas vinculantes de matéria tributária',
  emoji_principal:'🔄', materia:'Revisão · Tributário',
  materias:[{ nome:'Revisão · Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:[
      'Resolver 30 questões de provas anteriores da OAB sobre Tributário',
      'Ler as súmulas vinculantes de matéria tributária',
      'Revisar tabela de impostos por ente federativo com fato gerador e sujeito passivo',
      'Refazer os flashcards das questões erradas na primeira revisão (dia 76)'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d93_c1',texto:'30 questões OAB — Tributário',feito:false},
  {id:'d93_c2',texto:'Súmulas vinculantes tributárias',feito:false},
  {id:'d93_c3',texto:'Tabela de impostos por ente federativo',feito:false},
  {id:'d93_c4',texto:'Refazer flashcards de questões erradas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 94 — Revisão 2 · Processo do Trabalho — Questões
{ dia:94, semana:17,
  titulo:'Revisão 2 · Processo do Trabalho — Questões e Súmulas',
  descricao:'Segunda passada: banco de questões e súmulas de processo trabalhista',
  emoji_principal:'🔄', materia:'Revisão · Processo do Trabalho',
  materias:[{ nome:'Revisão · Processo do Trabalho', emoji:'⚖️', horas:4, cor:'sage',
    topicos:[
      'Resolver 25 questões de provas anteriores da OAB sobre Processo do Trabalho',
      'Ler as súmulas do TST mais cobradas em processo',
      'Revisar tabela de prazos processuais trabalhistas',
      'Refazer os flashcards das questões erradas na primeira revisão (dia 77)'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d94_c1',texto:'25 questões OAB — Processo do Trabalho',feito:false},
  {id:'d94_c2',texto:'Súmulas TST — processo',feito:false},
  {id:'d94_c3',texto:'Tabela de prazos processuais trabalhistas',feito:false},
  {id:'d94_c4',texto:'Refazer flashcards de questões erradas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 95 — Revisão 2 · Penal — Questões e Súmulas
{ dia:95, semana:17,
  titulo:'Revisão 2 · Penal — Questões e Súmulas',
  descricao:'Segunda passada: banco de questões e súmulas de teoria do crime e penas',
  emoji_principal:'🔄', materia:'Revisão · Penal',
  materias:[{ nome:'Revisão · Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:[
      'Resolver 30 questões de provas anteriores da OAB sobre Penal (teoria do crime)',
      'Ler as súmulas de STF/STJ mais cobradas em Penal',
      'Revisar quadro-resumo das causas de aumento e diminuição de pena mais cobradas',
      'Refazer os flashcards das questões erradas na primeira revisão (dia 78)'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d95_c1',texto:'30 questões OAB — Penal',feito:false},
  {id:'d95_c2',texto:'Súmulas STF/STJ — Penal',feito:false},
  {id:'d95_c3',texto:'Quadro de causas de aumento/diminuição de pena',feito:false},
  {id:'d95_c4',texto:'Refazer flashcards de questões erradas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 96 — Revisão 2 · Ética — Questões
{ dia:96, semana:17,
  titulo:'Revisão 2 · Ética Profissional — Questões',
  descricao:'Segunda passada: banco de questões de Ética — matéria de maior peso relativo na prova',
  emoji_principal:'🔄', materia:'Revisão · Ética',
  materias:[{ nome:'Revisão · Ética Profissional', emoji:'⚖️', horas:4, cor:'champagne',
    topicos:[
      'Resolver 30 questões de provas anteriores da OAB sobre Ética',
      'Reler o Código de Ética e Disciplina da OAB na íntegra (leitura rápida)',
      'Revisar quadro-resumo das sanções disciplinares e seus prazos',
      'Refazer os flashcards das questões erradas na primeira revisão (dia 79)'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d96_c1',texto:'30 questões OAB — Ética',feito:false},
  {id:'d96_c2',texto:'Releitura rápida do Código de Ética e Disciplina',feito:false},
  {id:'d96_c3',texto:'Quadro de sanções disciplinares',feito:false},
  {id:'d96_c4',texto:'Refazer flashcards de questões erradas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 97 — Revisão 2 · Processo Civil — Questões
{ dia:97, semana:17,
  titulo:'Revisão 2 · Processo Civil — Questões e Súmulas',
  descricao:'Segunda passada: banco de questões e súmulas de processo civil',
  emoji_principal:'🔄', materia:'Revisão · Processo Civil',
  materias:[{ nome:'Revisão · Processo Civil', emoji:'📋', horas:4, cor:'sage',
    topicos:[
      'Resolver 30 questões de provas anteriores da OAB sobre Processo Civil',
      'Ler as súmulas de STJ mais cobradas em processo civil',
      'Revisar tabela de recursos cíveis — prazos e cabimento',
      'Refazer os flashcards das questões erradas na primeira revisão (dia 80)'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d97_c1',texto:'30 questões OAB — Processo Civil',feito:false},
  {id:'d97_c2',texto:'Súmulas STJ — processo civil',feito:false},
  {id:'d97_c3',texto:'Tabela de recursos cíveis',feito:false},
  {id:'d97_c4',texto:'Refazer flashcards de questões erradas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 98 — Revisão 2 · Empresarial — Questões
{ dia:98, semana:17,
  titulo:'Revisão 2 · Empresarial — Questões',
  descricao:'Segunda passada: banco de questões de Direito Empresarial',
  emoji_principal:'🔄', materia:'Revisão · Empresarial',
  materias:[{ nome:'Revisão · Direito Empresarial', emoji:'🏢', horas:4, cor:'nude',
    topicos:[
      'Resolver 20 questões de provas anteriores da OAB sobre Empresarial',
      'Revisar quadro-resumo dos títulos de crédito (LC, NP, cheque, duplicata)',
      'Revisar ordem de classificação dos créditos na falência',
      'Refazer os flashcards das questões erradas na primeira revisão (dia 81)'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d98_c1',texto:'20 questões OAB — Empresarial',feito:false},
  {id:'d98_c2',texto:'Quadro-resumo de títulos de crédito',feito:false},
  {id:'d98_c3',texto:'Ordem de classificação dos créditos na falência',feito:false},
  {id:'d98_c4',texto:'Refazer flashcards de questões erradas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 99 — Revisão 2 · Processo Penal — Questões
{ dia:99, semana:17,
  titulo:'Revisão 2 · Processo Penal — Questões e Súmulas',
  descricao:'Segunda passada: banco de questões e súmulas de processo penal',
  emoji_principal:'🔄', materia:'Revisão · Processo Penal',
  materias:[{ nome:'Revisão · Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:[
      'Resolver 30 questões de provas anteriores da OAB sobre Processo Penal',
      'Ler as súmulas de STF/STJ mais cobradas em processo penal',
      'Revisar tabela de prazos de prisão temporária, IP e recursos criminais',
      'Refazer os flashcards das questões erradas na primeira revisão (dia 82)'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d99_c1',texto:'30 questões OAB — Processo Penal',feito:false},
  {id:'d99_c2',texto:'Súmulas STF/STJ — processo penal',feito:false},
  {id:'d99_c3',texto:'Tabela de prazos — IP, prisão temporária e recursos',feito:false},
  {id:'d99_c4',texto:'Refazer flashcards de questões erradas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 100 — Revisão 2 · Administrativo — Questões
{ dia:100, semana:17,
  titulo:'Revisão 2 · Administrativo — Questões e Súmulas',
  descricao:'Segunda passada: banco de questões e súmulas vinculantes de Direito Administrativo',
  emoji_principal:'🔄', materia:'Revisão · Administrativo',
  materias:[{ nome:'Revisão · Direito Administrativo', emoji:'🏛️', horas:4, cor:'sage',
    topicos:[
      'Resolver 30 questões de provas anteriores da OAB sobre Administrativo',
      'Ler as súmulas vinculantes de Direito Administrativo',
      'Revisar quadro-resumo dos poderes administrativos e suas características',
      'Refazer os flashcards das questões erradas na primeira revisão (dia 83)'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d100_c1',texto:'30 questões OAB — Administrativo',feito:false},
  {id:'d100_c2',texto:'Súmulas vinculantes administrativas',feito:false},
  {id:'d100_c3',texto:'Quadro-resumo dos poderes administrativos',feito:false},
  {id:'d100_c4',texto:'Refazer flashcards de questões erradas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 101 — Revisão 2 · Previdenciário e Consumidor — Questões
{ dia:101, semana:17,
  titulo:'Revisão 2 · Previdenciário e Consumidor — Questões',
  descricao:'Segunda passada: banco de questões de Previdenciário e Consumidor',
  emoji_principal:'🔄', materia:'Revisão · Previdenciário e Consumidor',
  materias:[
    { nome:'Revisão · Direito Previdenciário', emoji:'🛡️', horas:2, cor:'gold',
      topicos:[
        'Resolver 15 questões de provas anteriores da OAB sobre Previdenciário',
        'Revisar quadro-resumo dos benefícios do RGPS e requisitos'
      ] },
    { nome:'Revisão · Direito do Consumidor', emoji:'🛒', horas:2, cor:'lavender',
      topicos:[
        'Resolver 15 questões de provas anteriores da OAB sobre Consumidor',
        'Revisar súmulas do STJ mais cobradas em Consumidor'
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d101_c1',texto:'15 questões OAB — Previdenciário',feito:false},
  {id:'d101_c2',texto:'Quadro-resumo dos benefícios do RGPS',feito:false},
  {id:'d101_c3',texto:'15 questões OAB — Consumidor',feito:false},
  {id:'d101_c4',texto:'Súmulas STJ — Consumidor',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 102 — Revisão 2 · ECA e Eleitoral — Questões
{ dia:102, semana:17,
  titulo:'Revisão 2 · ECA e Eleitoral — Questões',
  descricao:'Segunda passada: banco de questões de ECA e Direito Eleitoral',
  emoji_principal:'🔄', materia:'Revisão · ECA e Eleitoral',
  materias:[
    { nome:'Revisão · ECA', emoji:'👶', horas:2, cor:'champagne',
      topicos:[
        'Resolver 15 questões de provas anteriores da OAB sobre ECA',
        'Revisar tabela de medidas socioeducativas e limites de prazo'
      ] },
    { nome:'Revisão · Direito Eleitoral', emoji:'🗳️', horas:2, cor:'lavender',
      topicos:[
        'Resolver 10 questões de provas anteriores da OAB sobre Eleitoral',
        'Revisar rol de inelegibilidades absolutas e relativas'
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d102_c1',texto:'15 questões OAB — ECA',feito:false},
  {id:'d102_c2',texto:'Tabela de medidas socioeducativas',feito:false},
  {id:'d102_c3',texto:'10 questões OAB — Eleitoral',feito:false},
  {id:'d102_c4',texto:'Rol de inelegibilidades',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 103 — Revisão Geral 3 — Ética, Administrativo e Processo Civil
{ dia:103, semana:17,
  titulo:'Revisão Geral 3 · Ética, Administrativo e Processo Civil',
  descricao:'Revisão cruzada das matérias com maior peso relativo — questões integradas',
  emoji_principal:'↻', materia:'Revisão Geral',
  materias:[{ nome:'Revisão Geral', emoji:'↻', horas:4, cor:'champagne',
    topicos:[
      'Revisão cruzada de Ética — todos os dias de conteúdo',
      'Revisão cruzada de Administrativo — todos os dias de conteúdo',
      'Revisão cruzada de Processo Civil — todos os dias de conteúdo',
      'Resolver 30 questões mistas das 3 matérias'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d103_c1',texto:'Revisão cruzada — Ética',feito:false},
  {id:'d103_c2',texto:'Revisão cruzada — Administrativo',feito:false},
  {id:'d103_c3',texto:'Revisão cruzada — Processo Civil',feito:false},
  {id:'d103_c4',texto:'30 questões mistas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 104 — Revisão Geral 4 — Penal, Processo Penal e Empresarial
{ dia:104, semana:17,
  titulo:'Revisão Geral 4 · Penal, Processo Penal e Empresarial',
  descricao:'Revisão cruzada das matérias penais e empresarial — questões integradas',
  emoji_principal:'↻', materia:'Revisão Geral',
  materias:[{ nome:'Revisão Geral', emoji:'↻', horas:4, cor:'rose',
    topicos:[
      'Revisão cruzada de Penal — todos os dias de conteúdo',
      'Revisão cruzada de Processo Penal — todos os dias de conteúdo',
      'Revisão cruzada de Empresarial — todos os dias de conteúdo',
      'Resolver 30 questões mistas das 3 matérias'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d104_c1',texto:'Revisão cruzada — Penal',feito:false},
  {id:'d104_c2',texto:'Revisão cruzada — Processo Penal',feito:false},
  {id:'d104_c3',texto:'Revisão cruzada — Empresarial',feito:false},
  {id:'d104_c4',texto:'30 questões mistas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 105 — Simulado Geral 2
{ dia:105, semana:17,
  titulo:'Simulado Geral 2 — 80 Questões (todas as matérias)',
  descricao:'Segundo simulado cronometrado, comparando evolução em relação ao Simulado Geral 1',
  emoji_principal:'📝', materia:'Simulado',
  materias:[{ nome:'Simulado', emoji:'📝', horas:5, cor:'lavender',
    topicos:[
      'Simulado de 80 questões, tempo cronometrado de 5 horas',
      'Ambiente sem consulta, sem pausas',
      'Comparar percentual de acerto por matéria com o Simulado Geral 1 (dia 88)',
      'Marcar as questões com dúvida para revisão detalhada'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d105_c1',texto:'Realizar simulado de 80 questões cronometrado',feito:false},
  {id:'d105_c2',texto:'Ambiente sem consulta, sem pausas',feito:false},
  {id:'d105_c3',texto:'Comparar evolução com Simulado Geral 1',feito:false},
  {id:'d105_c4',texto:'Marcar questões com dúvida',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 106 — Revisão dos Erros do Simulado 2
{ dia:106, semana:17,
  titulo:'Revisão dos Erros — Simulado Geral 2',
  descricao:'Correção detalhada do segundo simulado, com estudo dirigido das matérias de menor desempenho',
  emoji_principal:'🔄', materia:'Revisão',
  materias:[{ nome:'Revisão dos Erros', emoji:'🔄', horas:4, cor:'lavender',
    topicos:[
      'Corrigir todas as questões erradas do Simulado Geral 2, com justificativa de cada alternativa',
      'Comparar matérias de menor desempenho entre os dois simulados',
      'Reler os flashcards das matérias ainda fracas',
      'Montar lista final de pontos críticos para a reta final'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d106_c1',texto:'Corrigir questões erradas com justificativa',feito:false},
  {id:'d106_c2',texto:'Comparar desempenho entre os dois simulados',feito:false},
  {id:'d106_c3',texto:'Reler flashcards das matérias fracas',feito:false},
  {id:'d106_c4',texto:'Lista final de pontos críticos',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// ── RETA FINAL — DIAS 107–120 ──

// DIA 107 — Reta Final · Ética (peso relativo maior na prova)
{ dia:107, semana:18,
  titulo:'Reta Final · Ética Profissional — Leitura Rápida',
  descricao:'Releitura integral do EOAB e Código de Ética; matéria de maior peso relativo na 1ª fase',
  emoji_principal:'⚡', materia:'Reta Final',
  materias:[{ nome:'Reta Final · Ética', emoji:'⚖️', horas:3, cor:'champagne',
    topicos:[
      'Releitura rápida do Estatuto da Advocacia e da OAB (Lei 8.906/94) na íntegra',
      'Releitura rápida do Código de Ética e Disciplina da OAB na íntegra',
      'Revisão dos flashcards de todos os dias de Ética (7, 18, 28, 38, 49, 58)',
      '15 questões de fixação'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d107_c1',texto:'Releitura do EOAB',feito:false},
  {id:'d107_c2',texto:'Releitura do Código de Ética e Disciplina',feito:false},
  {id:'d107_c3',texto:'Revisão de todos os flashcards de Ética',feito:false},
  {id:'d107_c4',texto:'15 questões de fixação',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 108 — Reta Final · Direito Constitucional
{ dia:108, semana:18,
  titulo:'Reta Final · Direito Constitucional — Leitura Rápida',
  descricao:'Revisão condensada de todos os temas de Constitucional estudados',
  emoji_principal:'⚡', materia:'Reta Final',
  materias:[{ nome:'Reta Final · Constitucional', emoji:'🏛️', horas:3, cor:'lavender',
    topicos:[
      'Revisão dos flashcards de todos os dias de Constitucional (1, 12, 22, 33, 44, 55, 58, 71)',
      'Releitura do quadro-resumo de remédios constitucionais e das dimensões dos direitos fundamentais',
      'Releitura do quadro-resumo de repartição de competências e processo legislativo',
      '15 questões de fixação'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d108_c1',texto:'Revisão de todos os flashcards de Constitucional',feito:false},
  {id:'d108_c2',texto:'Quadro de remédios constitucionais e direitos fundamentais',feito:false},
  {id:'d108_c3',texto:'Quadro de competências e processo legislativo',feito:false},
  {id:'d108_c4',texto:'15 questões de fixação',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 109 — Reta Final · Direito Civil
{ dia:109, semana:18,
  titulo:'Reta Final · Direito Civil — Leitura Rápida',
  descricao:'Revisão condensada de parte geral, obrigações, contratos, família e sucessões',
  emoji_principal:'⚡', materia:'Reta Final',
  materias:[{ nome:'Reta Final · Civil', emoji:'📜', horas:3, cor:'rose',
    topicos:[
      'Revisão dos flashcards de todos os dias de Civil (3, 14, 24, 31, 32, 35, 46, 57, 62, 66, 69)',
      'Releitura do quadro-resumo de prazos prescricionais/decadenciais',
      'Releitura do quadro-resumo de regimes de bens e ordem de vocação hereditária',
      '15 questões de fixação'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d109_c1',texto:'Revisão de todos os flashcards de Civil',feito:false},
  {id:'d109_c2',texto:'Quadro de prazos prescricionais/decadenciais',feito:false},
  {id:'d109_c3',texto:'Quadro de regimes de bens e vocação hereditária',feito:false},
  {id:'d109_c4',texto:'15 questões de fixação',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 110 — Reta Final · Direito do Trabalho
{ dia:110, semana:18,
  titulo:'Reta Final · Direito do Trabalho — Leitura Rápida',
  descricao:'Revisão condensada de contrato, jornada, estabilidade e direito coletivo',
  emoji_principal:'⚡', materia:'Reta Final',
  materias:[{ nome:'Reta Final · Trabalho', emoji:'👷', horas:3, cor:'sage',
    topicos:[
      'Revisão dos flashcards de todos os dias de Trabalho (2, 13, 23, 34, 45, 65)',
      'Releitura do quadro-resumo de garantias provisórias de emprego',
      'Releitura do quadro-resumo de verbas rescisórias por modalidade de extinção',
      '15 questões de fixação'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d110_c1',texto:'Revisão de todos os flashcards de Trabalho',feito:false},
  {id:'d110_c2',texto:'Quadro de garantias provisórias de emprego',feito:false},
  {id:'d110_c3',texto:'Quadro de verbas rescisórias',feito:false},
  {id:'d110_c4',texto:'15 questões de fixação',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 111 — Reta Final · Direito Penal
{ dia:111, semana:18,
  titulo:'Reta Final · Direito Penal — Leitura Rápida',
  descricao:'Revisão condensada de teoria do crime, penas e crimes em espécie mais cobrados',
  emoji_principal:'⚡', materia:'Reta Final',
  materias:[{ nome:'Reta Final · Penal', emoji:'🔒', horas:3, cor:'rose',
    topicos:[
      'Revisão dos flashcards de todos os dias de Penal (6, 17, 27, 31, 37, 48, 59, 70)',
      'Releitura do quadro-resumo de excludentes de ilicitude e culpabilidade',
      'Releitura do quadro-resumo de crimes contra honra, vida, patrimônio e Administração Pública',
      '15 questões de fixação'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d111_c1',texto:'Revisão de todos os flashcards de Penal',feito:false},
  {id:'d111_c2',texto:'Quadro de excludentes de ilicitude e culpabilidade',feito:false},
  {id:'d111_c3',texto:'Quadro de crimes em espécie mais cobrados',feito:false},
  {id:'d111_c4',texto:'15 questões de fixação',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 112 — Reta Final · Direito Administrativo
{ dia:112, semana:18,
  titulo:'Reta Final · Direito Administrativo — Leitura Rápida',
  descricao:'Revisão condensada de organização administrativa, atos, agentes, improbidade e responsabilidade do Estado',
  emoji_principal:'⚡', materia:'Reta Final',
  materias:[{ nome:'Reta Final · Administrativo', emoji:'🏛️', horas:3, cor:'sage',
    topicos:[
      'Revisão dos flashcards de todos os dias de Administrativo (11, 21, 22, 42, 52, 54, 67)',
      'Releitura do quadro-resumo dos poderes administrativos e atributos do ato administrativo',
      'Releitura do quadro-resumo de improbidade administrativa (art. 9º, 10 e 11)',
      '15 questões de fixação'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d112_c1',texto:'Revisão de todos os flashcards de Administrativo',feito:false},
  {id:'d112_c2',texto:'Quadro de poderes e atos administrativos',feito:false},
  {id:'d112_c3',texto:'Quadro de improbidade administrativa',feito:false},
  {id:'d112_c4',texto:'15 questões de fixação',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 113 — Reta Final · Processo Civil
{ dia:113, semana:18,
  titulo:'Reta Final · Processo Civil — Leitura Rápida',
  descricao:'Revisão condensada de atos processuais, procedimento comum, execução e recursos',
  emoji_principal:'⚡', materia:'Reta Final',
  materias:[{ nome:'Reta Final · Processo Civil', emoji:'📋', horas:3, cor:'sage',
    topicos:[
      'Revisão dos flashcards de todos os dias de Processo Civil (8, 19, 29, 39, 43, 53, 61)',
      'Releitura do quadro-resumo de prazos e recursos cíveis',
      'Releitura do quadro-resumo de tutela provisória e execução',
      '15 questões de fixação'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d113_c1',texto:'Revisão de todos os flashcards de Processo Civil',feito:false},
  {id:'d113_c2',texto:'Quadro de prazos e recursos cíveis',feito:false},
  {id:'d113_c3',texto:'Quadro de tutela provisória e execução',feito:false},
  {id:'d113_c4',texto:'15 questões de fixação',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 114 — Reta Final · Processo Penal
{ dia:114, semana:18,
  titulo:'Reta Final · Processo Penal — Leitura Rápida',
  descricao:'Revisão condensada de inquérito, prisão cautelar, provas, ritos e recursos criminais',
  emoji_principal:'⚡', materia:'Reta Final',
  materias:[{ nome:'Reta Final · Processo Penal', emoji:'🔍', horas:3, cor:'rose',
    topicos:[
      'Revisão dos flashcards de todos os dias de Processo Penal (10, 21, 41, 50, 60, 64)',
      'Releitura do quadro-resumo de prisão cautelar e liberdade provisória',
      'Releitura do quadro-resumo de ritos e recursos criminais',
      '15 questões de fixação'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d114_c1',texto:'Revisão de todos os flashcards de Processo Penal',feito:false},
  {id:'d114_c2',texto:'Quadro de prisão cautelar e liberdade provisória',feito:false},
  {id:'d114_c3',texto:'Quadro de ritos e recursos criminais',feito:false},
  {id:'d114_c4',texto:'15 questões de fixação',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 115 — Reta Final · Tributário e Processo do Trabalho
{ dia:115, semana:18,
  titulo:'Reta Final · Tributário e Processo do Trabalho — Leitura Rápida',
  descricao:'Revisão condensada de princípios/espécies tributárias e de processo trabalhista',
  emoji_principal:'⚡', materia:'Reta Final',
  materias:[
    { nome:'Reta Final · Tributário', emoji:'💰', horas:1.5, cor:'gold',
      topicos:[
        'Revisão dos flashcards de todos os dias de Tributário (4, 15, 25, 36, 47, 63, 72)',
        'Releitura do quadro-resumo de princípios, imunidades e espécies tributárias'
      ] },
    { nome:'Reta Final · Processo do Trabalho', emoji:'⚖️', horas:1.5, cor:'sage',
      topicos:[
        'Revisão dos flashcards de todos os dias de Processo do Trabalho (5, 16, 26, 34, 62, 68)',
        'Releitura do quadro-resumo de prazos e recursos trabalhistas'
      ] }
  ],
  flashcards:[],
  checklist:[
  {id:'d115_c1',texto:'Revisão de todos os flashcards de Tributário',feito:false},
  {id:'d115_c2',texto:'Quadro de princípios e espécies tributárias',feito:false},
  {id:'d115_c3',texto:'Revisão de todos os flashcards de Processo do Trabalho',feito:false},
  {id:'d115_c4',texto:'Quadro de prazos e recursos trabalhistas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 116 — Reta Final · Empresarial
{ dia:116, semana:18,
  titulo:'Reta Final · Direito Empresarial — Leitura Rápida',
  descricao:'Revisão condensada de empresa, sociedades, títulos de crédito e falência/recuperação',
  emoji_principal:'⚡', materia:'Reta Final',
  materias:[{ nome:'Reta Final · Empresarial', emoji:'🏢', horas:3, cor:'nude',
    topicos:[
      'Revisão dos flashcards de todos os dias de Empresarial (9, 20, 40, 51)',
      'Releitura do quadro-resumo de tipos societários e títulos de crédito',
      'Releitura do quadro-resumo de ordem de créditos na falência',
      '15 questões de fixação'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d116_c1',texto:'Revisão de todos os flashcards de Empresarial',feito:false},
  {id:'d116_c2',texto:'Quadro de tipos societários e títulos de crédito',feito:false},
  {id:'d116_c3',texto:'Quadro de ordem de créditos na falência',feito:false},
  {id:'d116_c4',texto:'15 questões de fixação',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 117 — Reta Final · Matérias Especiais (Previdenciário, Consumidor, ECA, Eleitoral)
{ dia:117, semana:18,
  titulo:'Reta Final · Previdenciário, Consumidor, ECA e Eleitoral — Leitura Rápida',
  descricao:'Revisão condensada das matérias especiais de menor carga horária no cronograma',
  emoji_principal:'⚡', materia:'Reta Final',
  materias:[{ nome:'Reta Final · Matérias Especiais', emoji:'⚡', horas:4, cor:'lavender',
    topicos:[
      'Revisão dos flashcards de Previdenciário (dias 25, 44)',
      'Revisão dos flashcards de Consumidor (dias 32, 43, 56)',
      'Revisão dos flashcards de ECA (dia 30)',
      'Revisão dos flashcards de Direito Eleitoral (dia 57)',
      '20 questões de fixação mistas'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d117_c1',texto:'Revisão de flashcards de Previdenciário',feito:false},
  {id:'d117_c2',texto:'Revisão de flashcards de Consumidor',feito:false},
  {id:'d117_c3',texto:'Revisão de flashcards de ECA',feito:false},
  {id:'d117_c4',texto:'Revisão de flashcards de Eleitoral',feito:false},
  {id:'d117_c5',texto:'20 questões de fixação mistas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 118 — Revisão de Súmulas Mais Cobradas (todas as matérias)
{ dia:118, semana:18,
  titulo:'Reta Final · As 50 Súmulas Mais Cobradas na OAB',
  descricao:'Leitura rápida e ativa das súmulas de STF, STJ e TST com maior incidência histórica na prova',
  emoji_principal:'⚡', materia:'Reta Final',
  materias:[{ nome:'Reta Final · Súmulas', emoji:'📖', horas:4, cor:'lavender',
    topicos:[
      'Reler todas as súmulas destacadas nos dias 1 a 72 do plano',
      'Priorizar as súmulas marcadas com maior incidência (campo "incidencia" de cada dia)',
      'Fazer autoteste oral: ler a sigla da súmula e tentar recitar o conteúdo antes de conferir',
      'Anotar as 10 súmulas com maior dificuldade de memorização para revisão na véspera'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d118_c1',texto:'Reler todas as súmulas destacadas no plano',feito:false},
  {id:'d118_c2',texto:'Priorizar súmulas de maior incidência',feito:false},
  {id:'d118_c3',texto:'Autoteste oral de súmulas',feito:false},
  {id:'d118_c4',texto:'Lista das 10 súmulas mais difíceis',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 119 — Simulado Final
{ dia:119, semana:18,
  titulo:'Simulado Final — 80 Questões e Correção Completa',
  descricao:'Último simulado cronometrado antes da prova, com correção imediata e revisão dos erros no mesmo dia',
  emoji_principal:'📝', materia:'Simulado',
  materias:[{ nome:'Simulado Final', emoji:'📝', horas:6, cor:'lavender',
    topicos:[
      'Simulado de 80 questões, tempo cronometrado de 5 horas, condição idêntica à prova real',
      'Correção completa no mesmo dia, com justificativa de cada questão errada',
      'Comparar evolução com os Simulados Gerais 1 e 2 (dias 88 e 105)',
      'Fechar a lista definitiva de pontos de atenção para a véspera'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d119_c1',texto:'Realizar simulado final cronometrado',feito:false},
  {id:'d119_c2',texto:'Correção completa com justificativa',feito:false},
  {id:'d119_c3',texto:'Comparar evolução com simulados anteriores',feito:false},
  {id:'d119_c4',texto:'Fechar lista de pontos de atenção',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] },

// DIA 120 — Véspera da Prova
{ dia:120, semana:18,
  titulo:'Véspera da Prova — Revisão Final e Organização',
  descricao:'Revisão leve dos pontos de atenção, organização prática para o dia da prova e descanso',
  emoji_principal:'🎯', materia:'Véspera da Prova',
  materias:[{ nome:'Véspera da Prova', emoji:'🎯', horas:2, cor:'lavender',
    topicos:[
      'Revisão leve e rápida da lista final de pontos de atenção (não estudar conteúdo novo)',
      'Reler as 10 súmulas mais difíceis apontadas no dia 118',
      'Revisão rápida de Ética — maior peso relativo na prova',
      'Separar documento oficial com foto e organizar o material permitido para a prova',
      'Verificar local e horário da prova com antecedência',
      'Priorizar descanso, alimentação leve e uma boa noite de sono'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d120_c1',texto:'Revisão leve da lista final de pontos de atenção',feito:false},
  {id:'d120_c2',texto:'Reler as 10 súmulas mais difíceis',feito:false},
  {id:'d120_c3',texto:'Revisão rápida de Ética',feito:false},
  {id:'d120_c4',texto:'Separar documento oficial e material permitido',feito:false},
  {id:'d120_c5',texto:'Verificar local e horário da prova',feito:false},
  {id:'d120_c6',texto:'Descanso, alimentação leve e boa noite de sono',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:null, lei_seca:[] }

]; // ════ fim PLANO_VDE — 120 dias ════


// ── Funções auxiliares ──────────────────────────────

function getDadosDia(numDia) {
  return PLANO_VDE.find(function(d) { return d.dia === parseInt(numDia); }) || null;
}

function getProgressoGeral() {
  if (typeof obterDia !== 'function') return { concluidos: 0, total: 120, pct: 0 };
  var concluidos = PLANO_VDE.filter(function(d) {
    var p = obterDia(d.dia);
    return p && p.concluido === true;
  }).length;
  return { concluidos: concluidos, total: 120, pct: Math.round((concluidos / 120) * 100) };
}

function toMatKey(nome) {
  if (!nome) return 'outro';
  if (nome.includes('Ética'))               return 'etica';
  if (nome.includes('Processual Penal') || nome.includes('Processo Penal'))   return 'proc-penal';
  if (nome.includes('Processual do Trab') || nome.includes('Processo do Trab')) return 'proc-trabalho';
  if (nome.includes('Processual Civil') || nome.includes('Processo Civil'))   return 'proc-civil';
  if (nome.includes('Penal'))               return 'penal';
  if (nome.includes('Constitucional'))      return 'constitucional';
  if (nome.includes('Civil'))               return 'civil';
  if (nome.includes('Trabalho'))            return 'trabalho';
  if (nome.includes('Tributário'))          return 'tributario';
  if (nome.includes('Administrativo'))      return 'administrativo';
  if (nome.includes('Empresarial'))         return 'empresarial';
  return 'outro';
}

// Compatibilidade com código que referencia PLANO_OAB
var PLANO_OAB = PLANO_VDE;
