// ============================================================
// OAB 48 · Plano de Revisão Ativa
// Método VDE 120 Dias — Ana Clara Fernandes
// Foco: tópicos de direcionamento + flashcards por dia
// ============================================================

// ════════════════════════════════════════════════════════════
// PLANO_VDE — Array principal. Dias com conteúdo completo
// ficam AQUI (inline). Stubs p/ dias pendentes são gerados
// pela IIFE ao final. getDadosDia usa .find() — primeiro
// match vence, portanto entradas reais DEVEM vir antes da IIFE.
// ════════════════════════════════════════════════════════════
// Resumos VDE por semana (Google Drive) — dia N usa _VDE_PDF_IDS[semana(N)].
// Semana 14 não tem PDF mapeado; getDadosDia cai no link da pasta partilhada.
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
// SEMANA 01 — DIAS 1–6
// PDF: 1fubBaoKYuxSn7s9nNG5DNyDIbPHgM6mL
// Matérias: Constitucional, Trabalho, Civil,
//           Tributário, Proc. Trabalho, Penal
// ════════════════════════════════════════════════════

// DIA 01 — Constitucional
{ dia:1, semana:1,
  titulo:'Constitucional · Teoria da Constituição e Direitos Fundamentais',
  descricao:'Poder Constituinte, Cláusulas Pétreas, Eficácia das Normas e Tratados Internacionais de DH',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:['Poder Constituinte Originário — inicial, autônomo, ilimitado, incondicionado',
             'Poder Constituinte Derivado — limitações formal, material e circunstancial',
             'Cláusulas Pétreas (art. 60, §4 CF) — o que é e o que não é pétreo',
             'Eficácia das normas: plena, contida, limitada (José Afonso da Silva)',
             'Recepção constitucional e mutação constitucional',
             'Dimensões dos Direitos Fundamentais (1ª, 2ª, 3ª)',
             'Tratados Internacionais de DH — status normativo (supralegal vs constitucional)',
             'Art. 5 CF — rol não exaustivo, aplicabilidade imediata'] }],
  flashcards:[],
  checklist:[
  {id:'d1_c1',texto:'Poder Constituinte Originário — inicial, autônomo, ilimitado, incondicionado',feito:false},
  {id:'d1_c2',texto:'Poder Constituinte Derivado — limitações formal, material e circunstancial',feito:false},
  {id:'d1_c3',texto:'Cláusulas Pétreas (art. 60, §4 CF) — o que é e o que não é pétreo',feito:false},
  {id:'d1_c4',texto:'Eficácia das normas: plena, contida, limitada (José Afonso da Silva)',feito:false},
  {id:'d1_c5',texto:'Recepção constitucional e mutação constitucional',feito:false},
  {id:'d1_c6',texto:'Dimensões dos Direitos Fundamentais (1ª, 2ª, 3ª)',feito:false},
  {id:'d1_c7',texto:'Tratados Internacionais de DH — status normativo (supralegal vs constitucional)',feito:false},
  {id:'d1_c8',texto:'Art. 5 CF — rol não exaustivo, aplicabilidade imediata',feito:false}
  ],
  sumula:{ sigla:'Súmula Vinculante 25 · STF', texto:'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' },
  incidencia:95, pdf_id:_VDE_PDF_IDS[1], lei_seca:['CF arts. 5, 60, 102'] },

// DIA 02 — Direito do Trabalho
{ dia:2, semana:1,
  titulo:'Trabalho · Relação de Emprego e Contrato de Trabalho',
  descricao:'Vínculo empregatício, tipos de contrato, jornada e verbas rescisórias',
  emoji_principal:'👷', materia:'Direito do Trabalho',
  materias:[{ nome:'Direito do Trabalho', emoji:'👷', horas:4, cor:'nude',
    topicos:['Vínculo empregatício — 5 requisitos SHOPP',
             'Relação de trabalho vs relação de emprego — diferença',
             'Trabalhador autônomo, eventual, avulso, estagiário',
             'Contrato de trabalho — prazo determinado e indeterminado',
             'Jornada de trabalho — regras, horas extras e banco de horas',
             'Salário vs Remuneração — conceito e diferenças',
             'Verbas rescisórias — TRCT e prazo de pagamento',
             'FGTS — alíquota, depósito e saque'] }],
  flashcards:[],
  checklist:[
  {id:'d2_c1',texto:'Vínculo empregatício — 5 requisitos SHOPP',feito:false},
  {id:'d2_c2',texto:'Relação de trabalho vs relação de emprego — diferença',feito:false},
  {id:'d2_c3',texto:'Trabalhador autônomo, eventual, avulso, estagiário',feito:false},
  {id:'d2_c4',texto:'Contrato de trabalho — prazo determinado e indeterminado',feito:false},
  {id:'d2_c5',texto:'Jornada de trabalho — regras, horas extras e banco de horas',feito:false},
  {id:'d2_c6',texto:'Salário vs Remuneração — conceito e diferenças',feito:false},
  {id:'d2_c7',texto:'Verbas rescisórias — TRCT e prazo de pagamento',feito:false},
  {id:'d2_c8',texto:'FGTS — alíquota, depósito e saque',feito:false}
  ],
  sumula:{ sigla:'Súmula 423 TST', texto:'Estabelecida a jornada superior a seis horas e limitada a oito horas por meio de regular negociação coletiva, os empregados submetidos a turnos ininterruptos de revezamento não têm direito ao pagamento da 7ª e 8ª horas como extras.' },
  incidencia:90, pdf_id:_VDE_PDF_IDS[1], lei_seca:['CLT arts. 2, 3, 443, 444, 58, 59','CF art. 7','Lei 13.467/17'] },

// DIA 03 — Direito Civil
{ dia:3, semana:1,
  titulo:'Civil · Responsabilidade Civil e Desconsideração da PJ',
  descricao:'Responsabilidade subjetiva e objetiva, dano moral, teorias da desconsideração e negócios jurídicos',
  emoji_principal:'⚖️', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'⚖️', horas:4, cor:'rose',
    topicos:['Responsabilidade Civil subjetiva — CC art. 186 (culpa + dano + nexo)',
             'Responsabilidade Civil objetiva — CC art. 927 e parágrafo único',
             'Responsabilidade pelo fato do produto e do serviço (CDC)',
             'Dano moral — arbitramento e cumulação com dano material',
             'Desconsideração da PJ — Teoria Maior e Teoria Menor',
             'Negócios jurídicos — vícios do consentimento e sociais',
             'Prescrição vs Decadência — diferenças e prazos críticos',
             'Obrigações — solidariedade ativa e passiva'] }],
  flashcards:[],
  checklist:[
  {id:'d3_c1',texto:'Responsabilidade Civil subjetiva — CC art. 186 (culpa + dano + nexo)',feito:false},
  {id:'d3_c2',texto:'Responsabilidade Civil objetiva — CC art. 927 e parágrafo único',feito:false},
  {id:'d3_c3',texto:'Responsabilidade pelo fato do produto e do serviço (CDC)',feito:false},
  {id:'d3_c4',texto:'Dano moral — arbitramento e cumulação com dano material',feito:false},
  {id:'d3_c5',texto:'Desconsideração da PJ — Teoria Maior e Teoria Menor',feito:false},
  {id:'d3_c6',texto:'Negócios jurídicos — vícios do consentimento e sociais',feito:false},
  {id:'d3_c7',texto:'Prescrição vs Decadência — diferenças e prazos críticos',feito:false},
  {id:'d3_c8',texto:'Obrigações — solidariedade ativa e passiva',feito:false}
  ],
  sumula:{ sigla:'Súmula 37 STJ', texto:'São cumuláveis as indenizações por dano material e dano moral oriundas do mesmo fato.' },
  incidencia:88, pdf_id:_VDE_PDF_IDS[1], lei_seca:['CC arts. 50, 186, 187, 927, 205-206','CDC arts. 12-14, 28'] },

// DIA 04 — Direito Tributário
{ dia:4, semana:1,
  titulo:'Tributário · Limitações ao Poder de Tributar e Tributos em Espécie',
  descricao:'Princípios tributários, imunidades, espécies tributárias e competências',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'champagne',
    topicos:['Princípio da Legalidade tributária — reserva de lei',
             'Anterioridade Anual e Nonagesimal — exceções por tributo',
             'Irretroatividade tributária',
             'Imunidades tributárias — recíproca, religiosa, partidos, sindicatos, livros',
             'Espécies tributárias — 5 espécies (CTN + CF)',
             'Competência tributária — privativa, comum, residual, extraordinária',
             'ICMS vs ISS — conflito de incidência',
             'Lançamento tributário — tipos: de ofício, por declaração, por homologação'] }],
  flashcards:[],
  checklist:[
  {id:'d4_c1',texto:'Princípio da Legalidade tributária — reserva de lei',feito:false},
  {id:'d4_c2',texto:'Anterioridade Anual e Nonagesimal — exceções por tributo',feito:false},
  {id:'d4_c3',texto:'Irretroatividade tributária',feito:false},
  {id:'d4_c4',texto:'Imunidades tributárias — recíproca, religiosa, partidos, sindicatos, livros',feito:false},
  {id:'d4_c5',texto:'Espécies tributárias — 5 espécies (CTN + CF)',feito:false},
  {id:'d4_c6',texto:'Competência tributária — privativa, comum, residual, extraordinária',feito:false},
  {id:'d4_c7',texto:'ICMS vs ISS — conflito de incidência',feito:false},
  {id:'d4_c8',texto:'Lançamento tributário — tipos: de ofício, por declaração, por homologação',feito:false}
  ],
  sumula:{ sigla:'Súmula Vinculante 29 STF', texto:'É constitucional a adoção, no cálculo do valor de taxa, de um ou mais elementos da base de cálculo própria de determinado imposto, desde que não haja integral identidade entre uma base e outra.' },
  incidencia:92, pdf_id:_VDE_PDF_IDS[1], lei_seca:['CTN arts. 3, 96, 113, 142, 149-150','CF arts. 145-156'] },

// DIA 05 — Processo do Trabalho
{ dia:5, semana:1,
  titulo:'Processo do Trabalho · Competência, Prazos e Recursos',
  descricao:'Competência da JT, reclamação trabalhista, prazos, recursos e execução trabalhista',
  emoji_principal:'⚖️', materia:'Processo do Trabalho',
  materias:[{ nome:'Processo do Trabalho', emoji:'⚖️', horas:4, cor:'sage',
    topicos:['Competência material e territorial da Justiça do Trabalho',
             'Jus postulandi na JT — limites (Súmula 425 TST)',
             'Reclamação trabalhista — prescrição bienal e quinquenal',
             'Prazos no processo trabalhista (em minutos e dias)',
             'Recursos trabalhistas — prazo 8 dias, depósito recursal',
             'Recurso Ordinário, de Revista e Agravo',
             'Execução trabalhista — SATED e impenhorabilidade',
             'Comissão de Conciliação Prévia (CCP)'] }],
  flashcards:[],
  checklist:[
  {id:'d5_c1',texto:'Competência material e territorial da Justiça do Trabalho',feito:false},
  {id:'d5_c2',texto:'Jus postulandi na JT — limites (Súmula 425 TST)',feito:false},
  {id:'d5_c3',texto:'Reclamação trabalhista — prescrição bienal e quinquenal',feito:false},
  {id:'d5_c4',texto:'Prazos no processo trabalhista (em minutos e dias)',feito:false},
  {id:'d5_c5',texto:'Recursos trabalhistas — prazo 8 dias, depósito recursal',feito:false},
  {id:'d5_c6',texto:'Recurso Ordinário, de Revista e Agravo',feito:false},
  {id:'d5_c7',texto:'Execução trabalhista — SATED e impenhorabilidade',feito:false},
  {id:'d5_c8',texto:'Comissão de Conciliação Prévia (CCP)',feito:false}
  ],
  sumula:{ sigla:'Súmula 425 TST', texto:'O jus postulandi das partes, estabelecido no art. 791 da CLT, limita-se às Varas do Trabalho e aos Tribunais Regionais do Trabalho, não alcançando a ação rescisória, a ação cautelar, o mandado de segurança e os recursos de competência do Tribunal Superior do Trabalho.' },
  incidencia:84, pdf_id:_VDE_PDF_IDS[1], lei_seca:['CLT arts. 440, 477, 840','Lei 5.584/70 art. 6','CF art. 111-A'] },

// DIA 06 — Direito Penal
{ dia:6, semana:1,
  titulo:'Penal · Aplicação da Lei Penal no Tempo e Teoria do Crime',
  descricao:'Irretroatividade, ultratividade, tempo do crime, iter criminis e concurso de crimes',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:['Princípio da Legalidade — nullum crimen sine lege',
             'Lei penal no tempo — retroatividade benigna e irretroatividade',
             'Abolitio criminis vs Novatio legis in pejus',
             'Tempo do crime — teoria da atividade (art. 4 CP)',
             'Lugar do crime — teoria da ubiquidade (art. 6 CP)',
             'Iter criminis — cogitação, preparação, execução, consumação',
             'Tentativa — punição e desistência voluntária vs arrependimento eficaz',
             'Concurso de crimes — material, formal e crime continuado'] }],
  flashcards:[],
  checklist:[
  {id:'d6_c1',texto:'Princípio da Legalidade — nullum crimen sine lege',feito:false},
  {id:'d6_c2',texto:'Lei penal no tempo — retroatividade benigna e irretroatividade',feito:false},
  {id:'d6_c3',texto:'Abolitio criminis vs Novatio legis in pejus',feito:false},
  {id:'d6_c4',texto:'Tempo do crime — teoria da atividade (art. 4 CP)',feito:false},
  {id:'d6_c5',texto:'Lugar do crime — teoria da ubiquidade (art. 6 CP)',feito:false},
  {id:'d6_c6',texto:'Iter criminis — cogitação, preparação, execução, consumação',feito:false},
  {id:'d6_c7',texto:'Tentativa — punição e desistência voluntária vs arrependimento eficaz',feito:false},
  {id:'d6_c8',texto:'Concurso de crimes — material, formal e crime continuado',feito:false}
  ],
  sumula:{ sigla:'Súmula 711 STF', texto:'A lei penal mais grave aplica-se ao crime continuado ou ao crime permanente, se a sua vigência é anterior à cessação da continuidade ou da permanência.' },
  incidencia:86, pdf_id:_VDE_PDF_IDS[1], lei_seca:['CP arts. 1-12, 69-71','CF art. 5, XXXIX-XL'] },

// ════════════════════════════════════════════════════
// SEMANA 02 — DIAS 7–13
// PDF: 1kWdKghftTNhbLD03x1ROF3gtTGd6KiSR
// DIA 07: revisão / DIA 08: Ética / DIA 09: Proc. Civil
// DIA 10: revisão / DIA 11: Proc. Penal / DIA 12: Empresarial
// DIA 13: Administrativo (primeiro da sequência da Semana 02)
// ════════════════════════════════════════════════════

// DIA 07 — Revisão Semana 01 + Questões
{ dia:7, semana:2,
  titulo:'Revisão Semana 01 · Questões',
  descricao:'Dia de fixação: revise os 6 dias e resolva questões das 6 matérias da Semana 01',
  emoji_principal:'🔄', materia:'Revisão',
  materias:[{ nome:'Revisão Geral', emoji:'🔄', horas:4, cor:'lavender',
    topicos:['Revisão: Constitucional — PCO vs PCD e eficácias',
             'Revisão: Trabalho — SHOPP e tipos de contrato',
             'Revisão: Civil — responsabilidade e desconsideração PJ',
             'Revisão: Tributário — anterioridades e imunidades',
             'Revisão: Processo do Trabalho — prazos e recursos',
             'Revisão: Penal — tempo do crime e lei penal no tempo'] }],
  flashcards:[],
  checklist:[
  {id:'d7_c1',texto:'Revisão: Constitucional — PCO vs PCD e eficácias',feito:false},
  {id:'d7_c2',texto:'Revisão: Trabalho — SHOPP e tipos de contrato',feito:false},
  {id:'d7_c3',texto:'Revisão: Civil — responsabilidade e desconsideração PJ',feito:false},
  {id:'d7_c4',texto:'Revisão: Tributário — anterioridades e imunidades',feito:false},
  {id:'d7_c5',texto:'Revisão: Processo do Trabalho — prazos e recursos',feito:false},
  {id:'d7_c6',texto:'Revisão: Penal — tempo do crime e lei penal no tempo',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[2], lei_seca:[] },

// DIA 08 — Ética — Atividades da Advocacia e Mandato Judicial
{ dia:8, semana:2,
  titulo:'Ética · Atividades da Advocacia e Mandato Judicial',
  descricao:'Funções privativas, atos nulos, mandato, renúncia, revogação e substabelecimento',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'champagne',
    topicos:['Funções privativas do advogado — exceções ao jus postulandi',
             'Atos nulos por irregularidade do advogado',
             'Mandato judicial — prazo, aceitação e urgência',
             'Renúncia do mandato — 10 dias e dupla comunicação',
             'Revogação do mandato — honorários e extinção',
             'Substabelecimento com e sem reserva de poderes',
             'Consultoria e assessoria — verbal ou escrita'] }],
  flashcards:[],
  checklist:[
  {id:'d8_c1',texto:'Funções privativas do advogado — exceções ao jus postulandi',feito:false},
  {id:'d8_c2',texto:'Atos nulos por irregularidade do advogado',feito:false},
  {id:'d8_c3',texto:'Mandato judicial — prazo, aceitação e urgência',feito:false},
  {id:'d8_c4',texto:'Renúncia do mandato — 10 dias e dupla comunicação',feito:false},
  {id:'d8_c5',texto:'Revogação do mandato — honorários e extinção',feito:false},
  {id:'d8_c6',texto:'Substabelecimento com e sem reserva de poderes',feito:false},
  {id:'d8_c7',texto:'Consultoria e assessoria — verbal ou escrita',feito:false}
  ],
  sumula:{ sigla:'Súmula 425 TST', texto:'O jus postulandi das partes limita-se às Varas do Trabalho e aos TRTs, não alcançando ação rescisória, cautelar, MS e recursos de competência do TST.' },
  incidencia:92, pdf_id:_VDE_PDF_IDS[2], lei_seca:['EOAB arts. 1, 5, 11-12, 24-26, 28-29'] },

// DIA 09 — Processo Civil — Atos Processuais e Citação
{ dia:9, semana:2,
  titulo:'Processo Civil · Atos Processuais e Citação',
  descricao:'Tipologia dos atos, nulidades, prazos em dias úteis, publicidade e modalidades de citação',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'sage',
    topicos:['Tipos de atos processuais: partes, magistrados, auxiliares',
             'Nulidade absoluta vs relativa — convalidação',
             'Publicidade — regra e exceções (art. 189 CPC)',
             'Prazos em dias úteis — prazo em dobro e calendário processual',
             'Citação — conceito, efeitos e prazo de 45 dias (Lei 14.195/21)',
             'Modalidades: eletrônica, correios, oficial, hora certa, edital',
             'Vedações à citação — situações protegidas'] }],
  flashcards:[],
  checklist:[
  {id:'d9_c1',texto:'Tipos de atos processuais: partes, magistrados, auxiliares',feito:false},
  {id:'d9_c2',texto:'Nulidade absoluta vs relativa — convalidação',feito:false},
  {id:'d9_c3',texto:'Publicidade — regra e exceções (art. 189 CPC)',feito:false},
  {id:'d9_c4',texto:'Prazos em dias úteis — prazo em dobro e calendário processual',feito:false},
  {id:'d9_c5',texto:'Citação — conceito, efeitos e prazo de 45 dias (Lei 14.195/21)',feito:false},
  {id:'d9_c6',texto:'Modalidades: eletrônica, correios, oficial, hora certa, edital',feito:false},
  {id:'d9_c7',texto:'Vedações à citação — situações protegidas',feito:false}
  ],
  sumula:{ sigla:'Art. 238 CPC (Lei 14.195/21)', texto:'A citação será efetivada em até 45 dias a partir da propositura da ação.' },
  incidencia:88, pdf_id:_VDE_PDF_IDS[2], lei_seca:['CPC arts. 188-189, 200, 203, 229, 231, 238, 246'] },

// DIA 10 — Revisão Dias 8-9 + Questões
{ dia:10, semana:2,
  titulo:'Revisão Dias 8-9 · Questões Ética e Proc. Civil',
  descricao:'Fixação: questões e revisão de Ética (Mandato) e Processo Civil (Atos e Citação)',
  emoji_principal:'🔄', materia:'Revisão',
  materias:[{ nome:'Revisão Semana 02', emoji:'🔄', horas:4, cor:'lavender',
    topicos:['Revisão: Funções privativas e exceções ao jus postulandi',
             'Revisão: Renúncia vs Revogação vs Substabelecimento — tabela',
             'Revisão: Atos processuais e nulidades',
             'Revisão: Modalidades de citação e prazos',
             'Questões QConcursos — Ética e Proc. Civil'] }],
  flashcards:[],
  checklist:[
  {id:'d10_c1',texto:'Revisão: Funções privativas e exceções ao jus postulandi',feito:false},
  {id:'d10_c2',texto:'Revisão: Renúncia vs Revogação vs Substabelecimento — tabela',feito:false},
  {id:'d10_c3',texto:'Revisão: Atos processuais e nulidades',feito:false},
  {id:'d10_c4',texto:'Revisão: Modalidades de citação e prazos',feito:false},
  {id:'d10_c5',texto:'Questões QConcursos — Ética e Proc. Civil',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[2], lei_seca:[] },

// DIA 11 — Processo Penal — Inquérito Policial e Ação Penal
{ dia:11, semana:2,
  titulo:'Processo Penal · Inquérito Policial e Ação Penal',
  descricao:'Características e prazos do IP, arquivamento, Juiz das Garantias, tipos de ação penal e ANPP',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:['Inquérito Policial: características — DISSIDE-O',
             'Denúncia anônima — procedimento correto',
             'Prazos do IP por tipo de crime',
             'Arquivamento e desarquivamento',
             'Juiz das Garantias — papel e limitações',
             'Ação Penal Pública e Privada — tipos e peças',
             'ANPP — requisitos, condições e impedimentos',
             'Retratação da representação: CPP vs Lei Maria da Penha'] }],
  flashcards:[],
  checklist:[
  {id:'d11_c1',texto:'Inquérito Policial: características — DISSIDE-O',feito:false},
  {id:'d11_c2',texto:'Denúncia anônima — procedimento correto',feito:false},
  {id:'d11_c3',texto:'Prazos do IP por tipo de crime',feito:false},
  {id:'d11_c4',texto:'Arquivamento e desarquivamento',feito:false},
  {id:'d11_c5',texto:'Juiz das Garantias — papel e limitações',feito:false},
  {id:'d11_c6',texto:'Ação Penal Pública e Privada — tipos e peças',feito:false},
  {id:'d11_c7',texto:'ANPP — requisitos, condições e impedimentos',feito:false},
  {id:'d11_c8',texto:'Retratação da representação: CPP vs Lei Maria da Penha',feito:false}
  ],
  sumula:{ sigla:'Súmula 524 STF', texto:'Arquivado o inquérito policial, por falta de base para a denúncia, a autoridade policial poderá proceder a novas pesquisas, se de outras provas tiver notícia.' },
  incidencia:90, pdf_id:_VDE_PDF_IDS[2], lei_seca:['CPP arts. 10, 16, 25, 28-A, 60','Lei 11.343/06 art. 51'] },

// DIA 12 — Empresarial — Empresa, Empresário e Estabelecimento
{ dia:12, semana:2,
  titulo:'Empresarial · Empresa, Empresário e Estabelecimento',
  descricao:'Conceito, capacidade, registro, estabelecimento, trespasse e cláusula de não concorrência',
  emoji_principal:'🏢', materia:'Direito Empresarial',
  materias:[{ nome:'Direito Empresarial', emoji:'🏢', horas:4, cor:'nude',
    topicos:['Conceito de empresa e empresário (art. 966 CC)',
             'Atividade intelectual como elemento de empresa — exceção',
             'Empresário incapaz — condições para exercício',
             'Sociedade entre cônjuges — restrições',
             'Inscrição no RPEM — declaratória vs constitutiva',
             'Estabelecimento empresarial — físico e virtual',
             'Trespasse — requisitos e responsabilidade por dívidas',
             'Cláusula de não concorrência (5 anos)'] }],
  flashcards:[],
  checklist:[
  {id:'d12_c1',texto:'Conceito de empresa e empresário (art. 966 CC)',feito:false},
  {id:'d12_c2',texto:'Atividade intelectual como elemento de empresa — exceção',feito:false},
  {id:'d12_c3',texto:'Empresário incapaz — condições para exercício',feito:false},
  {id:'d12_c4',texto:'Sociedade entre cônjuges — restrições',feito:false},
  {id:'d12_c5',texto:'Inscrição no RPEM — declaratória vs constitutiva',feito:false},
  {id:'d12_c6',texto:'Estabelecimento empresarial — físico e virtual',feito:false},
  {id:'d12_c7',texto:'Trespasse — requisitos e responsabilidade por dívidas',feito:false},
  {id:'d12_c8',texto:'Cláusula de não concorrência (5 anos)',feito:false}
  ],
  sumula:{ sigla:'Art. 966 CC', texto:'Considera-se empresário quem exerce profissionalmente atividade econômica organizada para a produção ou a circulação de bens ou de serviços.' },
  incidencia:85, pdf_id:_VDE_PDF_IDS[2], lei_seca:['CC arts. 966-1.195','Lei 14.195/2021','Lei 14.382/2022'] },

// DIA 13 — Administrativo — Princípios e Poderes da Administração
{ dia:13, semana:3,
  titulo:'Administrativo · Princípios e Poderes da Administração',
  descricao:'Princípios implícitos e LIMPE, autotutela, SV 13, poderes hierárquico, disciplinar, de polícia e regulamentar',
  emoji_principal:'🏛️', materia:'Direito Administrativo',
  materias:[{ nome:'Direito Administrativo', emoji:'🏛️', horas:4, cor:'sage',
    topicos:['Princípios implícitos: supremacia, indisponibilidade, autotutela, continuidade',
             'Princípios LIMPE — CF art. 37',
             'Súmula Vinculante 13 — nepotismo e nepotismo cruzado',
             'Poder Hierárquico — delegação, avocação e limites',
             'Poder Disciplinar — apuração de infrações funcionais',
             'Poder de Polícia — atributos: discricionariedade, autoexecutoriedade, coercibilidade',
             'Poder Regulamentar — decreto regulamentar vs decreto autônomo',
             'Poder Vinculado vs Poder Discricionário'] }],
  flashcards:[],
  checklist:[
  {id:'d13_c1',texto:'Princípios implícitos: supremacia, indisponibilidade, autotutela, continuidade',feito:false},
  {id:'d13_c2',texto:'Princípios LIMPE — CF art. 37',feito:false},
  {id:'d13_c3',texto:'Súmula Vinculante 13 — nepotismo e nepotismo cruzado',feito:false},
  {id:'d13_c4',texto:'Poder Hierárquico — delegação, avocação e limites',feito:false},
  {id:'d13_c5',texto:'Poder Disciplinar — apuração de infrações funcionais',feito:false},
  {id:'d13_c6',texto:'Poder de Polícia — atributos: discricionariedade, autoexecutoriedade, coercibilidade',feito:false},
  {id:'d13_c7',texto:'Poder Regulamentar — decreto regulamentar vs decreto autônomo',feito:false},
  {id:'d13_c8',texto:'Poder Vinculado vs Poder Discricionário',feito:false}
  ],
  sumula:{ sigla:'Súmula Vinculante 13 · STF', texto:'A nomeação de cônjuge, companheiro ou parente até o terceiro grau [...] para cargo em comissão ou de confiança [...] viola a Constituição Federal.' },
  incidencia:87, pdf_id:_VDE_PDF_IDS[2], lei_seca:['CF art. 37','Lei 8.112/90 arts. 143, 117','Lei 8.987/95 art. 6'] },

// ════ DIAS 14–120: a partir do cronograma VDE 120D ════

// DIA 14 — Direito Constitucional
{ dia:14, semana:3,
  titulo:'Remédios Constitucionais',
  descricao:'HC, Habeas Data, Mandado de Segurança (individual e coletivo), Mandado de Injunção, Ação Popular e ACP',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:[
      'Habeas Data — finalidade, prova do interesse de agir, prazos administrativos',
      'Habeas Corpus — preventivo (salvo-conduto) e repressivo (alvará de soltura)',
      'Mandado de Segurança — prazo decadencial de 120 dias, hipóteses de não cabimento',
      'MS Coletivo — legitimidade ativa, direitos coletivos e individuais homogêneos',
      'Mandado de Injunção — individual e coletivo, diferença com ADO',
      'Ação Popular — legitimidade exclusiva do cidadão, competência 1ª instância',
      'Ação Civil Pública — legitimados, bens tutelados',
      'Direito de petição e certidão — gratuidade e remédios cabíveis'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d14_c1',texto:'Habeas Data — finalidade, prova do interesse de agir, prazos administrativos',feito:false},
  {id:'d14_c2',texto:'Habeas Corpus — preventivo (salvo-conduto) e repressivo (alvará de soltura)',feito:false},
  {id:'d14_c3',texto:'Mandado de Segurança — prazo decadencial de 120 dias, hipóteses de não cabimento',feito:false},
  {id:'d14_c4',texto:'MS Coletivo — legitimidade ativa, direitos coletivos e individuais homogêneos',feito:false},
  {id:'d14_c5',texto:'Mandado de Injunção — individual e coletivo, diferença com ADO',feito:false},
  {id:'d14_c6',texto:'Ação Popular — legitimidade exclusiva do cidadão, competência 1ª instância',feito:false},
  {id:'d14_c7',texto:'Ação Civil Pública — legitimados, bens tutelados',feito:false},
  {id:'d14_c8',texto:'Direito de petição e certidão — gratuidade e remédios cabíveis',feito:false}
  ],
  sumula:{ sigla:'Súmula 629 STF', texto:'A impetração de mandado de segurança coletivo por entidade de classe em favor dos associados independe da autorização destes.' },
  incidencia:88, pdf_id:_VDE_PDF_IDS[3], lei_seca:['CF art. 5º LXVIII (HC)', 'CF art. 5º LXIX-LXX (MS)', 'CF art. 5º LXXI (MI)', 'CF art. 5º LXXII (HD)', 'CF art. 5º LXXIII (AP)', 'CF art. 5º XXXIII-XXXIV', 'Lei 12.016/2009 (MS)', 'Lei 9.507/1997 (HD)'] },

// DIA 15 — Direito do Trabalho
{ dia:15, semana:3,
  titulo:'Empregado e Empregador',
  descricao:'Empregado hipersuficiente, doméstico, trabalho do menor e da mulher; empregador, grupo econômico, sucessão, sócio retirante e terceirização',
  emoji_principal:'⚙️', materia:'Direito do Trabalho',
  materias:[{ nome:'Direito do Trabalho', emoji:'⚙️', horas:4, cor:'sage',
    topicos:[
      'Empregado hipersuficiente — requisitos e cláusula compromissória de arbitragem',
      'Empregado doméstico — requisitos, jornada, intervalo e extinção do contrato',
      'Trabalho do menor — vedações por faixa etária e aprendiz',
      'Trabalho da mulher — estabilidade gestante, licença maternidade, amamentação',
      'Empregador — fiscalização, revista pessoal, câmeras, exame toxicológico',
      'Grupo econômico — requisitos e responsabilidade solidária',
      'Sucessão de empregadores — responsabilidade do sucessor',
      'Sócio retirante — responsabilidade subsidiária, prazo de 2 anos',
      'Terceirização — responsabilidade subsidiária da tomadora'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d15_c1',texto:'Empregado hipersuficiente — requisitos e cláusula compromissória de arbitragem',feito:false},
  {id:'d15_c2',texto:'Empregado doméstico — requisitos, jornada, intervalo e extinção do contrato',feito:false},
  {id:'d15_c3',texto:'Trabalho do menor — vedações por faixa etária e aprendiz',feito:false},
  {id:'d15_c4',texto:'Trabalho da mulher — estabilidade gestante, licença maternidade, amamentação',feito:false},
  {id:'d15_c5',texto:'Empregador — fiscalização, revista pessoal, câmeras, exame toxicológico',feito:false},
  {id:'d15_c6',texto:'Grupo econômico — requisitos e responsabilidade solidária',feito:false},
  {id:'d15_c7',texto:'Sucessão de empregadores — responsabilidade do sucessor',feito:false},
  {id:'d15_c8',texto:'Sócio retirante — responsabilidade subsidiária, prazo de 2 anos',feito:false},
  {id:'d15_c9',texto:'Terceirização — responsabilidade subsidiária da tomadora',feito:false}
  ],
  sumula:{ sigla:'Súmula 129 TST', texto:'A prestação de serviços a mais de uma empresa do mesmo grupo econômico, durante a mesma jornada de trabalho, não caracteriza a coexistência de mais de um contrato de trabalho, salvo ajuste em contrário.' },
  incidencia:82, pdf_id:_VDE_PDF_IDS[3], lei_seca:['CLT art. 2º (empregador)', 'CLT art. 2º §2º (grupo econômico)', 'CLT art. 10-A (sócio retirante)', 'CLT art. 444 §único (hipersuficiente)', 'CLT art. 507-A (arbitragem)', 'CF art. 7º XXXIII (trabalho do menor)', 'LC 150/2015 art. 1º (doméstico)', 'Lei 6.019/74 (terceirização)'] },

// DIA 16 — Direito Civil
{ dia:16, semana:3,
  titulo:'Negócio Jurídico — Defeitos e Invalidade',
  descricao:'Condição, termo, encargo; vícios de consentimento (erro, dolo, coação, estado de perigo, lesão); vícios sociais (fraude, simulação); nulidade e anulabilidade',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:[
      'Condição (futuro e incerto), termo (futuro e certo) e encargo',
      'Condição suspensiva vs resolutiva — efeitos e direito adquirido',
      'Vícios de consentimento: erro, dolo, coação moral, estado de perigo, lesão',
      'Distinção lesão vs estado de perigo — dolo de aproveitamento',
      'Fraude contra credores — ação pauliana, prazo de 4 anos',
      'Fraude contra credores vs fraude à execução',
      'Simulação — único defeito que causa nulidade absoluta',
      'Negócio jurídico nulo vs anulável — prazos e efeitos'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d16_c1',texto:'Condição (futuro e incerto), termo (futuro e certo) e encargo',feito:false},
  {id:'d16_c2',texto:'Condição suspensiva vs resolutiva — efeitos e direito adquirido',feito:false},
  {id:'d16_c3',texto:'Vícios de consentimento: erro, dolo, coação moral, estado de perigo, lesão',feito:false},
  {id:'d16_c4',texto:'Distinção lesão vs estado de perigo — dolo de aproveitamento',feito:false},
  {id:'d16_c5',texto:'Fraude contra credores — ação pauliana, prazo de 4 anos',feito:false},
  {id:'d16_c6',texto:'Fraude contra credores vs fraude à execução',feito:false},
  {id:'d16_c7',texto:'Simulação — único defeito que causa nulidade absoluta',feito:false},
  {id:'d16_c8',texto:'Negócio jurídico nulo vs anulável — prazos e efeitos',feito:false}
  ],
  sumula:{ sigla:'Súmula 375 STJ', texto:'O reconhecimento da fraude à execução depende do registro da penhora do bem alienado ou da prova da má-fé do terceiro adquirente.' },
  incidencia:90, pdf_id:_VDE_PDF_IDS[3], lei_seca:['CC art. 121-137 (condição, termo, encargo)', 'CC art. 138-165 (vícios do NJ)', 'CC art. 166-167 (nulidade)', 'CC art. 171-179 (anulabilidade)', 'CC art. 108 (escritura pública imóvel)', 'CC art. 156-157 (estado de perigo e lesão)', 'CC art. 158-165 (fraude contra credores)'] },

// DIA 17 — Direito Tributário
{ dia:17, semana:3,
  titulo:'Competência Tributária',
  descricao:'Competência tributária vs capacidade tributária ativa; competências privativa, comum, residual, cumulativa e extraordinária; impostos por ente; empréstimo compulsório',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'champagne',
    topicos:[
      'Competência tributária — conceito, características (indelegável, irrenunciável, imprescritível)',
      'Capacidade tributária ativa — delegável, administrativa',
      'Competência privativa, comum, residual e cumulativa',
      'Impostos da União, Estados e Municípios em espécie',
      'Competência extraordinária — Imposto Extraordinário de Guerra',
      'Empréstimo Compulsório — lei complementar, hipóteses, anterioridade',
      'Competência residual — lei complementar, vedada aos Estados',
      'Isenção heterônoma — vedada internamente, admitida em tratados'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d17_c1',texto:'Competência tributária — conceito, características (indelegável, irrenunciável, imprescritível)',feito:false},
  {id:'d17_c2',texto:'Capacidade tributária ativa — delegável, administrativa',feito:false},
  {id:'d17_c3',texto:'Competência privativa, comum, residual e cumulativa',feito:false},
  {id:'d17_c4',texto:'Impostos da União, Estados e Municípios em espécie',feito:false},
  {id:'d17_c5',texto:'Competência extraordinária — Imposto Extraordinário de Guerra',feito:false},
  {id:'d17_c6',texto:'Empréstimo Compulsório — lei complementar, hipóteses, anterioridade',feito:false},
  {id:'d17_c7',texto:'Competência residual — lei complementar, vedada aos Estados',feito:false},
  {id:'d17_c8',texto:'Isenção heterônoma — vedada internamente, admitida em tratados',feito:false}
  ],
  sumula:{ sigla:'CTN art. 7º', texto:'A competência tributária é indelegável, salvo atribuição das funções de arrecadar ou fiscalizar tributos, ou de executar leis, serviços, atos ou decisões administrativas em matéria tributária, conferida por uma pessoa jurídica de direito público a outra.' },
  incidencia:85, pdf_id:_VDE_PDF_IDS[3], lei_seca:['CF art. 145-162 (Sistema Tributário Nacional)', 'CF art. 147 (competência cumulativa)', 'CF art. 148 (empréstimo compulsório)', 'CF art. 153 (impostos da União)', 'CF art. 154 (competência residual e extraordinária)', 'CF art. 155 (impostos dos Estados)', 'CF art. 156 (impostos dos Municípios)', 'CTN art. 6º-8º (competência tributária)'] },

// DIA 18 — Processo do Trabalho
{ dia:18, semana:3,
  titulo:'Despesas Processuais no Processo do Trabalho',
  descricao:'Custas processuais, depósito recursal (isentos e pagantes de metade), justiça gratuita, honorários advocatícios, periciais e ADI 5766',
  emoji_principal:'⚖️', materia:'Processo do Trabalho',
  materias:[{ nome:'Processo do Trabalho', emoji:'⚖️', horas:4, cor:'sage',
    topicos:[
      'Custas processuais — alíquota de 2%, isentos (gratuidade, entes públicos, MPT, massa falida)',
      'Depósito recursal — função de garantia, isentos e quem paga metade',
      'Depósito prévio na Ação Rescisória — 20% do valor da causa',
      'Justiça gratuita — critério de 40% do teto RGPS ou comprovação de insuficiência',
      'Honorários advocatícios — 5% a 15% (CLT) vs 10% a 20% (CPC)',
      'Honorários periciais — parte sucumbente no objeto da perícia, isenção para gratuidade',
      'ADI 5766 — beneficiário da gratuidade não paga honorários sucumbenciais; União paga perito',
      'Assistente técnico — paga quem contratar, sempre, mesmo vencedor'
    ] }],
  flashcards:[],
  checklist:[
  {id:'d18_c1',texto:'Custas processuais — alíquota de 2%, isentos (gratuidade, entes públicos, MPT, massa falida)',feito:false},
  {id:'d18_c2',texto:'Depósito recursal — função de garantia, isentos e quem paga metade',feito:false},
  {id:'d18_c3',texto:'Depósito prévio na Ação Rescisória — 20% do valor da causa',feito:false},
  {id:'d18_c4',texto:'Justiça gratuita — critério de 40% do teto RGPS ou comprovação de insuficiência',feito:false},
  {id:'d18_c5',texto:'Honorários advocatícios — 5% a 15% (CLT) vs 10% a 20% (CPC)',feito:false},
  {id:'d18_c6',texto:'Honorários periciais — parte sucumbente no objeto da perícia, isenção para gratuidade',feito:false},
  {id:'d18_c7',texto:'ADI 5766 — beneficiário da gratuidade não paga honorários sucumbenciais; União paga perito',feito:false},
  {id:'d18_c8',texto:'Assistente técnico — paga quem contratar, sempre, mesmo vencedor',feito:false}
  ],
  sumula:{ sigla:'Súmula 457 TST', texto:'A União é responsável pelo pagamento dos honorários de perito quando a parte sucumbente no objeto da perícia for beneficiária da assistência judiciária gratuita.' },
  incidencia:80, pdf_id:_VDE_PDF_IDS[3], lei_seca:['CLT art. 789 (custas)', 'CLT art. 790 (justiça gratuita)', 'CLT art. 790-A (isentos de custas)', 'CLT art. 790-B (honorários periciais)', 'CLT art. 791-A (honorários advocatícios)', 'CLT art. 836 (ação rescisória)', 'TST Súmula 341 (assistente técnico)', 'TST Súmula 457 (honorários periciais — gratuidade)'] },

// DIA 19 — Direito Penal
{ dia:19, semana:4,
  titulo:'Fato Típico e Ilicitude',
  descricao:'Conduta — ação e omissão; dolo e culpa; Resultado — naturalístico e normativo',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:['Conduta — ação e omissão; dolo e culpa',
               'Resultado — naturalístico e normativo',
               'Nexo de causalidade — teoria da equivalência dos antecedentes',
               'Tipicidade formal e material',
               'Ilicitude — excludentes: estado de necessidade, legítima defesa, estrito cumprimento'] }],
  flashcards:[],
  checklist:[
  {id:'d19_c1',texto:'Conduta — ação e omissão; dolo e culpa',feito:false},
  {id:'d19_c2',texto:'Resultado — naturalístico e normativo',feito:false},
  {id:'d19_c3',texto:'Nexo de causalidade — teoria da equivalência dos antecedentes',feito:false},
  {id:'d19_c4',texto:'Tipicidade formal e material',feito:false},
  {id:'d19_c5',texto:'Ilicitude — excludentes: estado de necessidade, legítima defesa, estrito cumprimento',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[4]||null, lei_seca:[] },

// DIA 20 — Ética Profissional
{ dia:20, semana:4,
  titulo:'Inscrição na OAB e Sociedades de Advogados',
  descricao:'Requisitos para inscrição na OAB (art. 8 EOAB); Cancelamento e suspensão da inscrição',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'lavender',
    topicos:['Requisitos para inscrição na OAB (art. 8 EOAB)',
               'Cancelamento e suspensão da inscrição',
               'Sociedades de advogados — vedações e registro',
               'Advogado empregado — garantias e vedações',
               'Advocacia pública e Defensoria Pública'] }],
  flashcards:[],
  checklist:[
  {id:'d20_c1',texto:'Requisitos para inscrição na OAB (art. 8 EOAB)',feito:false},
  {id:'d20_c2',texto:'Cancelamento e suspensão da inscrição',feito:false},
  {id:'d20_c3',texto:'Sociedades de advogados — vedações e registro',feito:false},
  {id:'d20_c4',texto:'Advogado empregado — garantias e vedações',feito:false},
  {id:'d20_c5',texto:'Advocacia pública e Defensoria Pública',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[4]||null, lei_seca:[] },

// DIA 21 — Direito Processual Civil
{ dia:21, semana:4,
  titulo:'Partes, Procuradores e Litisconsórcio',
  descricao:'Capacidade processual e representação (arts. 70-76 CPC); Substituição processual e legitimação extraordinária',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'lavender',
    topicos:['Capacidade processual e representação (arts. 70-76 CPC)',
               'Substituição processual e legitimação extraordinária',
               'Litisconsórcio — facultativo, necessário, simples e unitário',
               'Intervenção de terceiros — denunciação, chamamento ao processo',
               'Tutela Provisória — urgência (cautelar/antecipada) e evidência'] }],
  flashcards:[],
  checklist:[
  {id:'d21_c1',texto:'Capacidade processual e representação (arts. 70-76 CPC)',feito:false},
  {id:'d21_c2',texto:'Substituição processual e legitimação extraordinária',feito:false},
  {id:'d21_c3',texto:'Litisconsórcio — facultativo, necessário, simples e unitário',feito:false},
  {id:'d21_c4',texto:'Intervenção de terceiros — denunciação, chamamento ao processo',feito:false},
  {id:'d21_c5',texto:'Tutela Provisória — urgência (cautelar/antecipada) e evidência',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[4]||null, lei_seca:[] },

// DIA 22 — Direito Empresarial
{ dia:22, semana:4,
  titulo:'Direito Societário',
  descricao:'Sociedade Simples vs Sociedade Empresária; Sociedade Limitada — quotas, administração e responsabilidade',
  emoji_principal:'🏢', materia:'Direito Empresarial',
  materias:[{ nome:'Direito Empresarial', emoji:'🏢', horas:4, cor:'gold',
    topicos:['Sociedade Simples vs Sociedade Empresária',
               'Sociedade Limitada — quotas, administração e responsabilidade',
               'Sociedade Anônima — tipos, ações, órgãos e dissolução',
               'Desconsideração da PJ — Teoria Maior (CC) e Menor (CDC)',
               'Dissolução, liquidação e extinção das sociedades'] }],
  flashcards:[],
  checklist:[
  {id:'d22_c1',texto:'Sociedade Simples vs Sociedade Empresária',feito:false},
  {id:'d22_c2',texto:'Sociedade Limitada — quotas, administração e responsabilidade',feito:false},
  {id:'d22_c3',texto:'Sociedade Anônima — tipos, ações, órgãos e dissolução',feito:false},
  {id:'d22_c4',texto:'Desconsideração da PJ — Teoria Maior (CC) e Menor (CDC)',feito:false},
  {id:'d22_c5',texto:'Dissolução, liquidação e extinção das sociedades',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[4]||null, lei_seca:[] },

// DIA 23 — Direito Processual Penal
{ dia:23, semana:4,
  titulo:'Competência',
  descricao:'Competência pela natureza da infração — federal x estadual; Competência pelo lugar da infração — teoria do resultado',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:['Competência pela natureza da infração — federal x estadual',
               'Competência pelo lugar da infração — teoria do resultado',
               'Competência por prerrogativa de função (foro privilegiado)',
               'Conexão e continência — unidade de processo',
               'Conflito de competência — STJ e STF'] }],
  flashcards:[],
  checklist:[
  {id:'d23_c1',texto:'Competência pela natureza da infração — federal x estadual',feito:false},
  {id:'d23_c2',texto:'Competência pelo lugar da infração — teoria do resultado',feito:false},
  {id:'d23_c3',texto:'Competência por prerrogativa de função (foro privilegiado)',feito:false},
  {id:'d23_c4',texto:'Conexão e continência — unidade de processo',feito:false},
  {id:'d23_c5',texto:'Conflito de competência — STJ e STF',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[4]||null, lei_seca:[] },

// DIA 24 — Direito Administrativo
{ dia:24, semana:4,
  titulo:'Organização da Administração Pública',
  descricao:'Administração Direta — União, Estados, Municípios, DF; Administração Indireta — Autarquias, Fundações, EPs, SEMs',
  emoji_principal:'🏛️', materia:'Direito Administrativo',
  materias:[{ nome:'Direito Administrativo', emoji:'🏛️', horas:4, cor:'sage',
    topicos:['Administração Direta — União, Estados, Municípios, DF',
               'Administração Indireta — Autarquias, Fundações, EPs, SEMs',
               'Distinção EP x SEM — capital, falência, foro',
               'Agências Reguladoras — regime, estabilidade e quarentena',
               'Consórcios Públicos — Lei 11.107/05'] }],
  flashcards:[],
  checklist:[
  {id:'d24_c1',texto:'Administração Direta — União, Estados, Municípios, DF',feito:false},
  {id:'d24_c2',texto:'Administração Indireta — Autarquias, Fundações, EPs, SEMs',feito:false},
  {id:'d24_c3',texto:'Distinção EP x SEM — capital, falência, foro',feito:false},
  {id:'d24_c4',texto:'Agências Reguladoras — regime, estabilidade e quarentena',feito:false},
  {id:'d24_c5',texto:'Consórcios Públicos — Lei 11.107/05',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[4]||null, lei_seca:[] },

// DIA 25 — Direito Constitucional
{ dia:25, semana:5,
  titulo:'Nacionalidade e Direitos Políticos',
  descricao:'Brasileiros natos — art. 12 I CF (jus soli + jus sanguinis); Brasileiros naturalizados — requisitos e distinções',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:['Brasileiros natos — art. 12 I CF (jus soli + jus sanguinis)',
               'Brasileiros naturalizados — requisitos e distinções',
               'Perda e reaquisição da nacionalidade',
               'Direitos políticos — sufrágio universal, voto e alistamento',
               'Inalistáveis e inelegíveis — art. 14 parágrafos 2 e 4 CF'] }],
  flashcards:[],
  checklist:[
  {id:'d25_c1',texto:'Brasileiros natos — art. 12 I CF (jus soli + jus sanguinis)',feito:false},
  {id:'d25_c2',texto:'Brasileiros naturalizados — requisitos e distinções',feito:false},
  {id:'d25_c3',texto:'Perda e reaquisição da nacionalidade',feito:false},
  {id:'d25_c4',texto:'Direitos políticos — sufrágio universal, voto e alistamento',feito:false},
  {id:'d25_c5',texto:'Inalistáveis e inelegíveis — art. 14 parágrafos 2 e 4 CF',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[5]||null, lei_seca:[] },

// DIA 26 — Direito do Trabalho
{ dia:26, semana:5,
  titulo:'Alteração, Interrupção e Suspensão do Contrato',
  descricao:'Alteração lícita e ilícita do contrato (art. 468 CLT); Jus variandi — poder de alterar condições dentro dos limites',
  emoji_principal:'⚙️', materia:'Direito do Trabalho',
  materias:[{ nome:'Direito do Trabalho', emoji:'⚙️', horas:4, cor:'sage',
    topicos:['Alteração lícita e ilícita do contrato (art. 468 CLT)',
               'Jus variandi — poder de alterar condições dentro dos limites',
               'Interrupção — remuneração mantida (férias, afastamento médico)',
               'Suspensão — sem remuneração (licença sem vencimento, layoff)',
               'Teletrabalho — retorno ao presencial e requisitos'] }],
  flashcards:[],
  checklist:[
  {id:'d26_c1',texto:'Alteração lícita e ilícita do contrato (art. 468 CLT)',feito:false},
  {id:'d26_c2',texto:'Jus variandi — poder de alterar condições dentro dos limites',feito:false},
  {id:'d26_c3',texto:'Interrupção — remuneração mantida (férias, afastamento médico)',feito:false},
  {id:'d26_c4',texto:'Suspensão — sem remuneração (licença sem vencimento, layoff)',feito:false},
  {id:'d26_c5',texto:'Teletrabalho — retorno ao presencial e requisitos',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[5]||null, lei_seca:[] },

// DIA 27 — Direito Civil
{ dia:27, semana:5,
  titulo:'Obrigações: Modalidades e Transmissão',
  descricao:'Obrigações de dar, fazer e não fazer — efeitos; Obrigações alternativas e facultativas',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Obrigações de dar, fazer e não fazer — efeitos',
               'Obrigações alternativas e facultativas',
               'Obrigações divisíveis, indivisíveis e solidárias',
               'Cessão de crédito — forma e notificação ao devedor',
               'Assunção de dívida — consentimento do credor'] }],
  flashcards:[],
  checklist:[
  {id:'d27_c1',texto:'Obrigações de dar, fazer e não fazer — efeitos',feito:false},
  {id:'d27_c2',texto:'Obrigações alternativas e facultativas',feito:false},
  {id:'d27_c3',texto:'Obrigações divisíveis, indivisíveis e solidárias',feito:false},
  {id:'d27_c4',texto:'Cessão de crédito — forma e notificação ao devedor',feito:false},
  {id:'d27_c5',texto:'Assunção de dívida — consentimento do credor',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[5]||null, lei_seca:[] },

// DIA 28 — Direito Tributário
{ dia:28, semana:5,
  titulo:'Imunidades Tributárias',
  descricao:'Imunidade recíproca (art. 150 VI a) — entes federativos; Imunidade de templos (art. 150 VI b)',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:['Imunidade recíproca (art. 150 VI a) — entes federativos',
               'Imunidade de templos (art. 150 VI b)',
               'Imunidade de partidos, sindicatos, educação e assistência',
               'Imunidade de livros, jornais e periódicos',
               'Diferença entre imunidade e isenção'] }],
  flashcards:[],
  checklist:[
  {id:'d28_c1',texto:'Imunidade recíproca (art. 150 VI a) — entes federativos',feito:false},
  {id:'d28_c2',texto:'Imunidade de templos (art. 150 VI b)',feito:false},
  {id:'d28_c3',texto:'Imunidade de partidos, sindicatos, educação e assistência',feito:false},
  {id:'d28_c4',texto:'Imunidade de livros, jornais e periódicos',feito:false},
  {id:'d28_c5',texto:'Diferença entre imunidade e isenção',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[5]||null, lei_seca:[] },

// DIA 29 — Processo do Trabalho
{ dia:29, semana:5,
  titulo:'Ação Trabalhista e Audiência',
  descricao:'Reclamação trabalhista — petição inicial e jus postulandi; Resposta do reclamado — contestação e exceções',
  emoji_principal:'⚡', materia:'Processo do Trabalho',
  materias:[{ nome:'Processo do Trabalho', emoji:'⚡', horas:4, cor:'sage',
    topicos:['Reclamação trabalhista — petição inicial e jus postulandi',
               'Resposta do reclamado — contestação e exceções',
               'Audiência trabalhista — fases e tentativa de conciliação',
               'Revelia e confissão ficta no processo do trabalho',
               'Instrução processual — provas e depoimentos'] }],
  flashcards:[],
  checklist:[
  {id:'d29_c1',texto:'Reclamação trabalhista — petição inicial e jus postulandi',feito:false},
  {id:'d29_c2',texto:'Resposta do reclamado — contestação e exceções',feito:false},
  {id:'d29_c3',texto:'Audiência trabalhista — fases e tentativa de conciliação',feito:false},
  {id:'d29_c4',texto:'Revelia e confissão ficta no processo do trabalho',feito:false},
  {id:'d29_c5',texto:'Instrução processual — provas e depoimentos',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[5]||null, lei_seca:[] },

// DIA 30 — Direito Previdenciário
{ dia:30, semana:5,
  titulo:'Seguridade Social e RGPS',
  descricao:'Seguridade Social — saúde, previdência, assistência (CF arts. 194-204); Princípios da Seguridade Social (USECLADO)',
  emoji_principal:'🛡️', materia:'Direito Previdenciário',
  materias:[{ nome:'Direito Previdenciário', emoji:'🛡️', horas:4, cor:'lavender',
    topicos:['Seguridade Social — saúde, previdência, assistência (CF arts. 194-204)',
               'Princípios da Seguridade Social (USECLADO)',
               'Segurados obrigatórios do RGPS — empregado, avulso, autônomo',
               'Segurado facultativo — quem pode se inscrever',
               'Qualidade de segurado — carência e período de graça'] }],
  flashcards:[],
  checklist:[
  {id:'d30_c1',texto:'Seguridade Social — saúde, previdência, assistência (CF arts. 194-204)',feito:false},
  {id:'d30_c2',texto:'Princípios da Seguridade Social (USECLADO)',feito:false},
  {id:'d30_c3',texto:'Segurados obrigatórios do RGPS — empregado, avulso, autônomo',feito:false},
  {id:'d30_c4',texto:'Segurado facultativo — quem pode se inscrever',feito:false},
  {id:'d30_c5',texto:'Qualidade de segurado — carência e período de graça',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[5]||null, lei_seca:[] },

// DIA 31 — Direito Civil
{ dia:31, semana:6,
  titulo:'Obrigações: Adimplemento e Extinção',
  descricao:'Pagamento — regras gerais, quem paga e a quem se paga; Pagamento em consignação — hipóteses e procedimento',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Pagamento — regras gerais, quem paga e a quem se paga',
               'Pagamento em consignação — hipóteses e procedimento',
               'Compensação, novação e remissão de dívidas',
               'Inadimplemento — mora do devedor e mora do credor',
               'Cláusula penal — moratória e compensatória'] }],
  flashcards:[],
  checklist:[
  {id:'d31_c1',texto:'Pagamento — regras gerais, quem paga e a quem se paga',feito:false},
  {id:'d31_c2',texto:'Pagamento em consignação — hipóteses e procedimento',feito:false},
  {id:'d31_c3',texto:'Compensação, novação e remissão de dívidas',feito:false},
  {id:'d31_c4',texto:'Inadimplemento — mora do devedor e mora do credor',feito:false},
  {id:'d31_c5',texto:'Cláusula penal — moratória e compensatória',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[6]||null, lei_seca:[] },

// DIA 32 — Direito Previdenciário
{ dia:32, semana:6,
  titulo:'Custeio e Benefícios Previdenciários',
  descricao:'Contribuições do empregado, empregador e autônomo; Salário de contribuição — teto e limite',
  emoji_principal:'🛡️', materia:'Direito Previdenciário',
  materias:[{ nome:'Direito Previdenciário', emoji:'🛡️', horas:4, cor:'lavender',
    topicos:['Contribuições do empregado, empregador e autônomo',
               'Salário de contribuição — teto e limite',
               'Auxílio por incapacidade temporária — carência e prazo',
               'Aposentadoria por incapacidade permanente',
               'Salário-maternidade e auxílio-acidente'] }],
  flashcards:[],
  checklist:[
  {id:'d32_c1',texto:'Contribuições do empregado, empregador e autônomo',feito:false},
  {id:'d32_c2',texto:'Salário de contribuição — teto e limite',feito:false},
  {id:'d32_c3',texto:'Auxílio por incapacidade temporária — carência e prazo',feito:false},
  {id:'d32_c4',texto:'Aposentadoria por incapacidade permanente',feito:false},
  {id:'d32_c5',texto:'Salário-maternidade e auxílio-acidente',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[6]||null, lei_seca:[] },

// DIA 33 — Processo do Trabalho
{ dia:33, semana:6,
  titulo:'Defesa do Réu e Audiência de Instrução',
  descricao:'Defesa do réu na JT — contestação e exceções; Audiência de instrução — depoimentos e testemunhos',
  emoji_principal:'⚡', materia:'Processo do Trabalho',
  materias:[{ nome:'Processo do Trabalho', emoji:'⚡', horas:4, cor:'sage',
    topicos:['Defesa do réu na JT — contestação e exceções',
               'Audiência de instrução — depoimentos e testemunhos',
               'Inversão do ônus da prova na JT',
               'Sentença trabalhista — liquidação',
               'Honorários periciais e advocatícios na JT'] }],
  flashcards:[],
  checklist:[
  {id:'d33_c1',texto:'Defesa do réu na JT — contestação e exceções',feito:false},
  {id:'d33_c2',texto:'Audiência de instrução — depoimentos e testemunhos',feito:false},
  {id:'d33_c3',texto:'Inversão do ônus da prova na JT',feito:false},
  {id:'d33_c4',texto:'Sentença trabalhista — liquidação',feito:false},
  {id:'d33_c5',texto:'Honorários periciais e advocatícios na JT',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[6]||null, lei_seca:[] },

// DIA 34 — Direito Penal
{ dia:34, semana:6,
  titulo:'Culpabilidade e Extinção da Punibilidade',
  descricao:'Culpabilidade — imputabilidade, potencial consciência, exigibilidade; Inimputabilidade — doença mental, menoridade e embriaguez',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:['Culpabilidade — imputabilidade, potencial consciência, exigibilidade',
               'Inimputabilidade — doença mental, menoridade e embriaguez',
               'Prescrição — prazos, causas suspensivas e interruptivas',
               'Anistia, graça e indulto — distinções',
               'Abolitio criminis — retroatividade da lei mais benéfica'] }],
  flashcards:[],
  checklist:[
  {id:'d34_c1',texto:'Culpabilidade — imputabilidade, potencial consciência, exigibilidade',feito:false},
  {id:'d34_c2',texto:'Inimputabilidade — doença mental, menoridade e embriaguez',feito:false},
  {id:'d34_c3',texto:'Prescrição — prazos, causas suspensivas e interruptivas',feito:false},
  {id:'d34_c4',texto:'Anistia, graça e indulto — distinções',feito:false},
  {id:'d34_c5',texto:'Abolitio criminis — retroatividade da lei mais benéfica',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[6]||null, lei_seca:[] },

// DIA 35 — Ética Profissional
{ dia:35, semana:6,
  titulo:'Prerrogativas e Imunidades do Advogado',
  descricao:'Inviolabilidade do escritório e comunicações (art. 7 II EOAB); Comunicação reservada com o preso',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'lavender',
    topicos:['Inviolabilidade do escritório e comunicações (art. 7 II EOAB)',
               'Comunicação reservada com o preso',
               'Imunidade material — manifestações técnicas',
               'Prerrogativa de sustentação oral e vista dos autos',
               'Prisão especial do advogado'] }],
  flashcards:[],
  checklist:[
  {id:'d35_c1',texto:'Inviolabilidade do escritório e comunicações (art. 7 II EOAB)',feito:false},
  {id:'d35_c2',texto:'Comunicação reservada com o preso',feito:false},
  {id:'d35_c3',texto:'Imunidade material — manifestações técnicas',feito:false},
  {id:'d35_c4',texto:'Prerrogativa de sustentação oral e vista dos autos',feito:false},
  {id:'d35_c5',texto:'Prisão especial do advogado',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[6]||null, lei_seca:[] },

// DIA 36 — Direito Processual Civil
{ dia:36, semana:6,
  titulo:'Intervenção de Terceiros e Tutela Provisória',
  descricao:'Assistência simples e litisconsorcial; Denunciação da lide — hipóteses do art. 125 CPC',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'lavender',
    topicos:['Assistência simples e litisconsorcial',
               'Denunciação da lide — hipóteses do art. 125 CPC',
               'Chamamento ao processo',
               'Incidente de Desconsideração da PJ — art. 133 CPC',
               'Estabilização da tutela antecipada antecedente'] }],
  flashcards:[],
  checklist:[
  {id:'d36_c1',texto:'Assistência simples e litisconsorcial',feito:false},
  {id:'d36_c2',texto:'Denunciação da lide — hipóteses do art. 125 CPC',feito:false},
  {id:'d36_c3',texto:'Chamamento ao processo',feito:false},
  {id:'d36_c4',texto:'Incidente de Desconsideração da PJ — art. 133 CPC',feito:false},
  {id:'d36_c5',texto:'Estabilização da tutela antecipada antecedente',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[6]||null, lei_seca:[] },

// DIA 37 — Estatuto da Criança e do Adolescente
{ dia:37, semana:7,
  titulo:'Direitos Fundamentais e Família Substituta',
  descricao:'Princípio da proteção integral e prioridade absoluta; Direitos fundamentais da criança e do adolescente',
  emoji_principal:'👶', materia:'Estatuto da Criança e do Adolescente (ECA)',
  materias:[{ nome:'Estatuto da Criança e do Adolescente (ECA)', emoji:'👶', horas:4, cor:'lavender',
    topicos:['Princípio da proteção integral e prioridade absoluta',
               'Direitos fundamentais da criança e do adolescente',
               'Família natural, extensa e substituta',
               'Adoção — requisitos, estágio e irrevogabilidade',
               'Ato infracional e medidas socioeducativas'] }],
  flashcards:[],
  checklist:[
  {id:'d37_c1',texto:'Princípio da proteção integral e prioridade absoluta',feito:false},
  {id:'d37_c2',texto:'Direitos fundamentais da criança e do adolescente',feito:false},
  {id:'d37_c3',texto:'Família natural, extensa e substituta',feito:false},
  {id:'d37_c4',texto:'Adoção — requisitos, estágio e irrevogabilidade',feito:false},
  {id:'d37_c5',texto:'Ato infracional e medidas socioeducativas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[7]||null, lei_seca:[] },

// DIA 38 — Direito Processual Civil
{ dia:38, semana:7,
  titulo:'Tutelas Provisórias e Recursos',
  descricao:'Tutela de urgência — fumus boni iuris e periculum in mora; Tutela de evidência — hipóteses do art. 311 CPC',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'lavender',
    topicos:['Tutela de urgência — fumus boni iuris e periculum in mora',
               'Tutela de evidência — hipóteses do art. 311 CPC',
               'Apelação — cabimento, prazo 15 dias e efeitos',
               'Agravo interno e agravo regimental',
               'Embargos de declaração — prazo 5 dias e efeito interruptivo'] }],
  flashcards:[],
  checklist:[
  {id:'d38_c1',texto:'Tutela de urgência — fumus boni iuris e periculum in mora',feito:false},
  {id:'d38_c2',texto:'Tutela de evidência — hipóteses do art. 311 CPC',feito:false},
  {id:'d38_c3',texto:'Apelação — cabimento, prazo 15 dias e efeitos',feito:false},
  {id:'d38_c4',texto:'Agravo interno e agravo regimental',feito:false},
  {id:'d38_c5',texto:'Embargos de declaração — prazo 5 dias e efeito interruptivo',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[7]||null, lei_seca:[] },

// DIA 39 — Direito Penal
{ dia:39, semana:7,
  titulo:'Concurso de Pessoas e Penas',
  descricao:'Concurso de pessoas — teoria monista x pluralista; Autoria e participação — espécies',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:['Concurso de pessoas — teoria monista x pluralista',
               'Autoria e participação — espécies',
               'Comunicabilidade de circunstâncias elementares',
               'Penas privativas de liberdade — reclusão e detenção',
               'Regime inicial de cumprimento — critérios'] }],
  flashcards:[],
  checklist:[
  {id:'d39_c1',texto:'Concurso de pessoas — teoria monista x pluralista',feito:false},
  {id:'d39_c2',texto:'Autoria e participação — espécies',feito:false},
  {id:'d39_c3',texto:'Comunicabilidade de circunstâncias elementares',feito:false},
  {id:'d39_c4',texto:'Penas privativas de liberdade — reclusão e detenção',feito:false},
  {id:'d39_c5',texto:'Regime inicial de cumprimento — critérios',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[7]||null, lei_seca:[] },

// DIA 40 — Direito Civil
{ dia:40, semana:7,
  titulo:'Obrigações: Inadimplemento e Responsabilidade Civil',
  descricao:'Inadimplemento absoluto e relativo (mora); Cláusula penal — moratória e compensatória; art. 412 CC',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Inadimplemento absoluto e relativo (mora)',
               'Cláusula penal — moratória e compensatória; art. 412 CC',
               'Responsabilidade civil subjetiva — culpa, dano e nexo',
               'Responsabilidade civil objetiva — risco da atividade',
               'Responsabilidade por fato de terceiro'] }],
  flashcards:[],
  checklist:[
  {id:'d40_c1',texto:'Inadimplemento absoluto e relativo (mora)',feito:false},
  {id:'d40_c2',texto:'Cláusula penal — moratória e compensatória; art. 412 CC',feito:false},
  {id:'d40_c3',texto:'Responsabilidade civil subjetiva — culpa, dano e nexo',feito:false},
  {id:'d40_c4',texto:'Responsabilidade civil objetiva — risco da atividade',feito:false},
  {id:'d40_c5',texto:'Responsabilidade por fato de terceiro',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[7]||null, lei_seca:[] },

// DIA 41 — Direito do Consumidor
{ dia:41, semana:7,
  titulo:'Política Nacional e Responsabilidade',
  descricao:'Conceito de consumidor (art. 2 CDC) e equiparado; Conceito de fornecedor, produto e serviço',
  emoji_principal:'🛒', materia:'Direito do Consumidor',
  materias:[{ nome:'Direito do Consumidor', emoji:'🛒', horas:4, cor:'gold',
    topicos:['Conceito de consumidor (art. 2 CDC) e equiparado',
               'Conceito de fornecedor, produto e serviço',
               'Responsabilidade pelo fato do produto — objetiva e solidária',
               'Fato do serviço — acidentes de consumo',
               'Excludentes de responsabilidade no CDC'] }],
  flashcards:[],
  checklist:[
  {id:'d41_c1',texto:'Conceito de consumidor (art. 2 CDC) e equiparado',feito:false},
  {id:'d41_c2',texto:'Conceito de fornecedor, produto e serviço',feito:false},
  {id:'d41_c3',texto:'Responsabilidade pelo fato do produto — objetiva e solidária',feito:false},
  {id:'d41_c4',texto:'Fato do serviço — acidentes de consumo',feito:false},
  {id:'d41_c5',texto:'Excludentes de responsabilidade no CDC',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[7]||null, lei_seca:[] },

// DIA 42 — Direito Constitucional
{ dia:42, semana:7,
  titulo:'Organização do Estado — Federalismo',
  descricao:'Repartição de competências — arts. 21-25 CF; Competências privativas da União (art. 22)',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:['Repartição de competências — arts. 21-25 CF',
               'Competências privativas da União (art. 22)',
               'Competências comuns (art. 23) — cooperação federativa',
               'Competências concorrentes (art. 24) — normas gerais x suplementares',
               'Competências dos Municípios (art. 30) — interesse local'] }],
  flashcards:[],
  checklist:[
  {id:'d42_c1',texto:'Repartição de competências — arts. 21-25 CF',feito:false},
  {id:'d42_c2',texto:'Competências privativas da União (art. 22)',feito:false},
  {id:'d42_c3',texto:'Competências comuns (art. 23) — cooperação federativa',feito:false},
  {id:'d42_c4',texto:'Competências concorrentes (art. 24) — normas gerais x suplementares',feito:false},
  {id:'d42_c5',texto:'Competências dos Municípios (art. 30) — interesse local',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[7]||null, lei_seca:[] },

// DIA 43 — Processo do Trabalho
{ dia:43, semana:8,
  titulo:'Provas e Duração do Trabalho',
  descricao:'Ônus da prova na JT — art. 818 CLT; Prova documental e testemunhal',
  emoji_principal:'⚡', materia:'Processo do Trabalho',
  materias:[{ nome:'Processo do Trabalho', emoji:'⚡', horas:4, cor:'sage',
    topicos:['Ônus da prova na JT — art. 818 CLT',
               'Prova documental e testemunhal',
               'Jornada de trabalho — limites constitucionais (8h/44h)',
               'Horas extras — adicional 50% e limite máximo',
               'Banco de horas — condições e liquidação'] }],
  flashcards:[],
  checklist:[
  {id:'d43_c1',texto:'Ônus da prova na JT — art. 818 CLT',feito:false},
  {id:'d43_c2',texto:'Prova documental e testemunhal',feito:false},
  {id:'d43_c3',texto:'Jornada de trabalho — limites constitucionais (8h/44h)',feito:false},
  {id:'d43_c4',texto:'Horas extras — adicional 50% e limite máximo',feito:false},
  {id:'d43_c5',texto:'Banco de horas — condições e liquidação',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[8]||null, lei_seca:[] },

// DIA 44 — Direito Civil
{ dia:44, semana:8,
  titulo:'Contratos em Geral',
  descricao:'Princípios contratuais — autonomia, boa-fé, função social; Formação do contrato — proposta e aceitação',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Princípios contratuais — autonomia, boa-fé, função social',
               'Formação do contrato — proposta e aceitação',
               'Vícios do consentimento nos contratos',
               'Extinção dos contratos — resolução, rescisão, resilição',
               'Contrato de adesão — cláusulas abusivas'] }],
  flashcards:[],
  checklist:[
  {id:'d44_c1',texto:'Princípios contratuais — autonomia, boa-fé, função social',feito:false},
  {id:'d44_c2',texto:'Formação do contrato — proposta e aceitação',feito:false},
  {id:'d44_c3',texto:'Vícios do consentimento nos contratos',feito:false},
  {id:'d44_c4',texto:'Extinção dos contratos — resolução, rescisão, resilição',feito:false},
  {id:'d44_c5',texto:'Contrato de adesão — cláusulas abusivas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[8]||null, lei_seca:[] },

// DIA 45 — Direito Tributário
{ dia:45, semana:8,
  titulo:'Conceito de Tributo e Espécies Tributárias',
  descricao:'Tributo — conceito do CTN art. 3; Impostos — fato gerador não vinculado a atividade estatal',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:['Tributo — conceito do CTN art. 3',
               'Impostos — fato gerador não vinculado a atividade estatal',
               'Taxas — poder de polícia e serviço público',
               'Contribuição de melhoria — valorização imobiliária e limite',
               'Empréstimos compulsórios e contribuições especiais'] }],
  flashcards:[],
  checklist:[
  {id:'d45_c1',texto:'Tributo — conceito do CTN art. 3',feito:false},
  {id:'d45_c2',texto:'Impostos — fato gerador não vinculado a atividade estatal',feito:false},
  {id:'d45_c3',texto:'Taxas — poder de polícia e serviço público',feito:false},
  {id:'d45_c4',texto:'Contribuição de melhoria — valorização imobiliária e limite',feito:false},
  {id:'d45_c5',texto:'Empréstimos compulsórios e contribuições especiais',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[8]||null, lei_seca:[] },

// DIA 46 — Direito Penal
{ dia:46, semana:8,
  titulo:'Concurso de Crimes e Das Penas',
  descricao:'Concurso material — cumulação de penas; Concurso formal — exasperação da pena (1/6 a 1/2)',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:['Concurso material — cumulação de penas',
               'Concurso formal — exasperação da pena (1/6 a 1/2)',
               'Crime continuado — Súmula 711 STF (lei mais grave)',
               'Pena de multa — dias-multa e cálculo',
               'Penas restritivas de direitos — requisitos e espécies'] }],
  flashcards:[],
  checklist:[
  {id:'d46_c1',texto:'Concurso material — cumulação de penas',feito:false},
  {id:'d46_c2',texto:'Concurso formal — exasperação da pena (1/6 a 1/2)',feito:false},
  {id:'d46_c3',texto:'Crime continuado — Súmula 711 STF (lei mais grave)',feito:false},
  {id:'d46_c4',texto:'Pena de multa — dias-multa e cálculo',feito:false},
  {id:'d46_c5',texto:'Penas restritivas de direitos — requisitos e espécies',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[8]||null, lei_seca:[] },

// DIA 47 — Ética Profissional
{ dia:47, semana:8,
  titulo:'Incompatibilidades e Impedimentos',
  descricao:'Incompatibilidades — quem não pode exercer a advocacia (art. 28 EOAB); Impedimentos — restrições pontuais (art. 30 EOAB)',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'lavender',
    topicos:['Incompatibilidades — quem não pode exercer a advocacia (art. 28 EOAB)',
               'Impedimentos — restrições pontuais (art. 30 EOAB)',
               'Vedação ao servidor público de exercer a advocacia',
               'Prazo de quarentena — ex-magistrado e MP',
               'Advocacia contra ex-empregador — prazo de 2 anos'] }],
  flashcards:[],
  checklist:[
  {id:'d47_c1',texto:'Incompatibilidades — quem não pode exercer a advocacia (art. 28 EOAB)',feito:false},
  {id:'d47_c2',texto:'Impedimentos — restrições pontuais (art. 30 EOAB)',feito:false},
  {id:'d47_c3',texto:'Vedação ao servidor público de exercer a advocacia',feito:false},
  {id:'d47_c4',texto:'Prazo de quarentena — ex-magistrado e MP',feito:false},
  {id:'d47_c5',texto:'Advocacia contra ex-empregador — prazo de 2 anos',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[8]||null, lei_seca:[] },

// DIA 48 — Direito Processual Civil
{ dia:48, semana:8,
  titulo:'Petição Inicial, Citação e Defesa do Réu',
  descricao:'Petição inicial — requisitos do art. 319 CPC e emenda; Citação — formas, efeitos e nulidade',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'lavender',
    topicos:['Petição inicial — requisitos do art. 319 CPC e emenda',
               'Citação — formas, efeitos e nulidade',
               'Defesa do réu — contestação, preliminares e reconvenção',
               'Revelia — efeitos e exceções (art. 345 CPC)',
               'Saneamento e organização do processo'] }],
  flashcards:[],
  checklist:[
  {id:'d48_c1',texto:'Petição inicial — requisitos do art. 319 CPC e emenda',feito:false},
  {id:'d48_c2',texto:'Citação — formas, efeitos e nulidade',feito:false},
  {id:'d48_c3',texto:'Defesa do réu — contestação, preliminares e reconvenção',feito:false},
  {id:'d48_c4',texto:'Revelia — efeitos e exceções (art. 345 CPC)',feito:false},
  {id:'d48_c5',texto:'Saneamento e organização do processo',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[8]||null, lei_seca:[] },

// DIA 49 — Direito Processual Penal
{ dia:49, semana:9,
  titulo:'Provas',
  descricao:'Provas — conceito, ônus e inadmissibilidade (art. 157 CPP); Prova ilícita e derivada — teoria do fruto da árvore envenenada',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:['Provas — conceito, ônus e inadmissibilidade (art. 157 CPP)',
               'Prova ilícita e derivada — teoria do fruto da árvore envenenada',
               'Confissão, testemunho e reconhecimento de pessoas',
               'Interceptação telefônica — Lei 9.296/96',
               'Questões incidentes — insanidade mental'] }],
  flashcards:[],
  checklist:[
  {id:'d49_c1',texto:'Provas — conceito, ônus e inadmissibilidade (art. 157 CPP)',feito:false},
  {id:'d49_c2',texto:'Prova ilícita e derivada — teoria do fruto da árvore envenenada',feito:false},
  {id:'d49_c3',texto:'Confissão, testemunho e reconhecimento de pessoas',feito:false},
  {id:'d49_c4',texto:'Interceptação telefônica — Lei 9.296/96',feito:false},
  {id:'d49_c5',texto:'Questões incidentes — insanidade mental',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[9]||null, lei_seca:[] },

// DIA 50 — Direito Constitucional
{ dia:50, semana:9,
  titulo:'Poder Executivo',
  descricao:'Atribuições do Presidente — arts. 84-91 CF; Responsabilidade do Presidente — impeachment',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:['Atribuições do Presidente — arts. 84-91 CF',
               'Responsabilidade do Presidente — impeachment',
               'Medidas Provisórias — requisitos, prazo e vedações',
               'Conselho da República e Conselho de Defesa Nacional',
               'Ministros de Estado — nomeação e exoneração'] }],
  flashcards:[],
  checklist:[
  {id:'d50_c1',texto:'Atribuições do Presidente — arts. 84-91 CF',feito:false},
  {id:'d50_c2',texto:'Responsabilidade do Presidente — impeachment',feito:false},
  {id:'d50_c3',texto:'Medidas Provisórias — requisitos, prazo e vedações',feito:false},
  {id:'d50_c4',texto:'Conselho da República e Conselho de Defesa Nacional',feito:false},
  {id:'d50_c5',texto:'Ministros de Estado — nomeação e exoneração',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[9]||null, lei_seca:[] },

// DIA 51 — Processo do Trabalho
{ dia:51, semana:9,
  titulo:'Provas e Recursos no TST',
  descricao:'Ônus da prova — distribuição e inversão; Prova pericial — honorários e impugnação',
  emoji_principal:'⚡', materia:'Processo do Trabalho',
  materias:[{ nome:'Processo do Trabalho', emoji:'⚡', horas:4, cor:'sage',
    topicos:['Ônus da prova — distribuição e inversão',
               'Prova pericial — honorários e impugnação',
               'Recurso de revista (RR) — transcendência e cabimento',
               'Embargos no TST — unificação de jurisprudência',
               'Recurso adesivo no processo do trabalho'] }],
  flashcards:[],
  checklist:[
  {id:'d51_c1',texto:'Ônus da prova — distribuição e inversão',feito:false},
  {id:'d51_c2',texto:'Prova pericial — honorários e impugnação',feito:false},
  {id:'d51_c3',texto:'Recurso de revista (RR) — transcendência e cabimento',feito:false},
  {id:'d51_c4',texto:'Embargos no TST — unificação de jurisprudência',feito:false},
  {id:'d51_c5',texto:'Recurso adesivo no processo do trabalho',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[9]||null, lei_seca:[] },

// DIA 52 — Direito Civil
{ dia:52, semana:9,
  titulo:'Contratos em Geral — Continuação',
  descricao:'Contrato com pessoa a declarar — prazo de indicação; Estipulação em favor de terceiro',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Contrato com pessoa a declarar — prazo de indicação',
               'Estipulação em favor de terceiro',
               'Promessa de fato de terceiro',
               'Vício redibitório e evicção',
               'Revisão contratual — onerosidade excessiva (art. 478 CC)'] }],
  flashcards:[],
  checklist:[
  {id:'d52_c1',texto:'Contrato com pessoa a declarar — prazo de indicação',feito:false},
  {id:'d52_c2',texto:'Estipulação em favor de terceiro',feito:false},
  {id:'d52_c3',texto:'Promessa de fato de terceiro',feito:false},
  {id:'d52_c4',texto:'Vício redibitório e evicção',feito:false},
  {id:'d52_c5',texto:'Revisão contratual — onerosidade excessiva (art. 478 CC)',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[9]||null, lei_seca:[] },

// DIA 53 — Direito Tributário
{ dia:53, semana:9,
  titulo:'Crédito Tributário: Lançamento',
  descricao:'Lançamento — conceito e espécies (ofício, declaração, homologação); Decadência do crédito tributário — arts. 150 e 173 CTN',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:['Lançamento — conceito e espécies (ofício, declaração, homologação)',
               'Decadência do crédito tributário — arts. 150 e 173 CTN',
               'Prescrição da ação de cobrança — art. 174 CTN',
               'Suspensão do crédito — MODEFI',
               'Extinção do crédito — pagamento, compensação, remissão'] }],
  flashcards:[],
  checklist:[
  {id:'d53_c1',texto:'Lançamento — conceito e espécies (ofício, declaração, homologação)',feito:false},
  {id:'d53_c2',texto:'Decadência do crédito tributário — arts. 150 e 173 CTN',feito:false},
  {id:'d53_c3',texto:'Prescrição da ação de cobrança — art. 174 CTN',feito:false},
  {id:'d53_c4',texto:'Suspensão do crédito — MODEFI',feito:false},
  {id:'d53_c5',texto:'Extinção do crédito — pagamento, compensação, remissão',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[9]||null, lei_seca:[] },

// DIA 54 — Direito Penal
{ dia:54, semana:9,
  titulo:'Concurso de Crimes e Penas — Continuação',
  descricao:'Progressão e regressão de regime; Remição de pena — trabalho e estudo',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:['Progressão e regressão de regime',
               'Remição de pena — trabalho e estudo',
               'Livramento condicional — requisitos',
               'Sursis — suspensão condicional da pena',
               'Suspensão condicional do processo (art. 89 Lei 9.099/95)'] }],
  flashcards:[],
  checklist:[
  {id:'d54_c1',texto:'Progressão e regressão de regime',feito:false},
  {id:'d54_c2',texto:'Remição de pena — trabalho e estudo',feito:false},
  {id:'d54_c3',texto:'Livramento condicional — requisitos',feito:false},
  {id:'d54_c4',texto:'Sursis — suspensão condicional da pena',feito:false},
  {id:'d54_c5',texto:'Suspensão condicional do processo (art. 89 Lei 9.099/95)',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[9]||null, lei_seca:[] },

// DIA 55 — Direito Tributário
{ dia:55, semana:10,
  titulo:'Obrigação Tributária e Responsabilidade',
  descricao:'Obrigação tributária principal e acessória; Fato gerador — aspectos material, temporal, espacial',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:['Obrigação tributária principal e acessória',
               'Fato gerador — aspectos material, temporal, espacial',
               'Sujeito ativo e passivo — contribuinte e responsável',
               'Responsabilidade por transferência — sucessão e terceiros',
               'Responsabilidade por substituição — ICMS-ST'] }],
  flashcards:[],
  checklist:[
  {id:'d55_c1',texto:'Obrigação tributária principal e acessória',feito:false},
  {id:'d55_c2',texto:'Fato gerador — aspectos material, temporal, espacial',feito:false},
  {id:'d55_c3',texto:'Sujeito ativo e passivo — contribuinte e responsável',feito:false},
  {id:'d55_c4',texto:'Responsabilidade por transferência — sucessão e terceiros',feito:false},
  {id:'d55_c5',texto:'Responsabilidade por substituição — ICMS-ST',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[10]||null, lei_seca:[] },

// DIA 56 — Direito Penal
{ dia:56, semana:10,
  titulo:'Crimes Contra a Honra e Contra a Vida',
  descricao:'Calúnia, difamação e injúria — distinção e penas; Injúria racial — crime hediondo (Lei 14.532/2023)',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:['Calúnia, difamação e injúria — distinção e penas',
               'Injúria racial — crime hediondo (Lei 14.532/2023)',
               'Homicídio simples, qualificado e privilegiado',
               'Induzimento, instigação e auxílio ao suicídio',
               'Infanticídio e aborto — espécies e excludentes'] }],
  flashcards:[],
  checklist:[
  {id:'d56_c1',texto:'Calúnia, difamação e injúria — distinção e penas',feito:false},
  {id:'d56_c2',texto:'Injúria racial — crime hediondo (Lei 14.532/2023)',feito:false},
  {id:'d56_c3',texto:'Homicídio simples, qualificado e privilegiado',feito:false},
  {id:'d56_c4',texto:'Induzimento, instigação e auxílio ao suicídio',feito:false},
  {id:'d56_c5',texto:'Infanticídio e aborto — espécies e excludentes',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[10]||null, lei_seca:[] },

// DIA 57 — Ética Profissional
{ dia:57, semana:10,
  titulo:'Ética do Advogado e Relações com o Cliente',
  descricao:'Sigilo profissional — alcance e exceções absolutas; Conflito de interesses — partes opostas',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'lavender',
    topicos:['Sigilo profissional — alcance e exceções absolutas',
               'Conflito de interesses — partes opostas',
               'Renúncia ao mandato — dupla comunicação e prazo 10 dias',
               'Honorários — sucumbência, arbitramento e tabela',
               'Responsabilidade disciplinar e civil do advogado'] }],
  flashcards:[],
  checklist:[
  {id:'d57_c1',texto:'Sigilo profissional — alcance e exceções absolutas',feito:false},
  {id:'d57_c2',texto:'Conflito de interesses — partes opostas',feito:false},
  {id:'d57_c3',texto:'Renúncia ao mandato — dupla comunicação e prazo 10 dias',feito:false},
  {id:'d57_c4',texto:'Honorários — sucumbência, arbitramento e tabela',feito:false},
  {id:'d57_c5',texto:'Responsabilidade disciplinar e civil do advogado',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[10]||null, lei_seca:[] },

// DIA 58 — Direito Processual Penal
{ dia:58, semana:10,
  titulo:'Prisão, Medidas Cautelares e Liberdade Provisória',
  descricao:'Prisão em flagrante — modalidades e comunicação 24h; Prisão preventiva — requisitos do art. 312 CPP',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:['Prisão em flagrante — modalidades e comunicação 24h',
               'Prisão preventiva — requisitos do art. 312 CPP',
               'Prisão temporária — Lei 7.960/89 e prazos',
               'Medidas cautelares alternativas — art. 319 CPP',
               'Liberdade provisória — com e sem fiança'] }],
  flashcards:[],
  checklist:[
  {id:'d58_c1',texto:'Prisão em flagrante — modalidades e comunicação 24h',feito:false},
  {id:'d58_c2',texto:'Prisão preventiva — requisitos do art. 312 CPP',feito:false},
  {id:'d58_c3',texto:'Prisão temporária — Lei 7.960/89 e prazos',feito:false},
  {id:'d58_c4',texto:'Medidas cautelares alternativas — art. 319 CPP',feito:false},
  {id:'d58_c5',texto:'Liberdade provisória — com e sem fiança',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[10]||null, lei_seca:[] },

// DIA 59 — Direito Empresarial
{ dia:59, semana:10,
  titulo:'Títulos de Crédito',
  descricao:'Princípios — literalidade, autonomia, cartularidade; Cheque — tipos, endosso e prazo de apresentação',
  emoji_principal:'🏢', materia:'Direito Empresarial',
  materias:[{ nome:'Direito Empresarial', emoji:'🏢', horas:4, cor:'gold',
    topicos:['Princípios — literalidade, autonomia, cartularidade',
               'Cheque — tipos, endosso e prazo de apresentação',
               'Nota promissória — natureza e requisitos',
               'Duplicata — aceite, protesto e circulação',
               'Letra de câmbio — saque, aceite e aval'] }],
  flashcards:[],
  checklist:[
  {id:'d59_c1',texto:'Princípios — literalidade, autonomia, cartularidade',feito:false},
  {id:'d59_c2',texto:'Cheque — tipos, endosso e prazo de apresentação',feito:false},
  {id:'d59_c3',texto:'Nota promissória — natureza e requisitos',feito:false},
  {id:'d59_c4',texto:'Duplicata — aceite, protesto e circulação',feito:false},
  {id:'d59_c5',texto:'Letra de câmbio — saque, aceite e aval',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[10]||null, lei_seca:[] },

// DIA 60 — Direito Administrativo
{ dia:60, semana:10,
  titulo:'Agentes Públicos',
  descricao:'Servidores estatutários e celetistas — regime e diferenças; Estabilidade do servidor — requisitos e perda',
  emoji_principal:'🏛️', materia:'Direito Administrativo',
  materias:[{ nome:'Direito Administrativo', emoji:'🏛️', horas:4, cor:'sage',
    topicos:['Servidores estatutários e celetistas — regime e diferenças',
               'Estabilidade do servidor — requisitos e perda',
               'Cargo, emprego e função pública — distinção',
               'Processo administrativo disciplinar — fases (Lei 8.112/90)',
               'Acumulação de cargos — vedações e permissões'] }],
  flashcards:[],
  checklist:[
  {id:'d60_c1',texto:'Servidores estatutários e celetistas — regime e diferenças',feito:false},
  {id:'d60_c2',texto:'Estabilidade do servidor — requisitos e perda',feito:false},
  {id:'d60_c3',texto:'Cargo, emprego e função pública — distinção',feito:false},
  {id:'d60_c4',texto:'Processo administrativo disciplinar — fases (Lei 8.112/90)',feito:false},
  {id:'d60_c5',texto:'Acumulação de cargos — vedações e permissões',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[10]||null, lei_seca:[] },

// DIA 61 — Direito do Consumidor
{ dia:61, semana:11,
  titulo:'Direitos Básicos e Proteção Contratual',
  descricao:'Direitos básicos do consumidor — art. 6 CDC; Dever de informação — clareza e proibição de enganosa',
  emoji_principal:'🛒', materia:'Direito do Consumidor',
  materias:[{ nome:'Direito do Consumidor', emoji:'🛒', horas:4, cor:'gold',
    topicos:['Direitos básicos do consumidor — art. 6 CDC',
               'Dever de informação — clareza e proibição de enganosa',
               'Prazo de reflexão — 7 dias (fora do estabelecimento)',
               'Cláusulas abusivas — rol do art. 51 CDC',
               'Inversão do ônus da prova — critérios'] }],
  flashcards:[],
  checklist:[
  {id:'d61_c1',texto:'Direitos básicos do consumidor — art. 6 CDC',feito:false},
  {id:'d61_c2',texto:'Dever de informação — clareza e proibição de enganosa',feito:false},
  {id:'d61_c3',texto:'Prazo de reflexão — 7 dias (fora do estabelecimento)',feito:false},
  {id:'d61_c4',texto:'Cláusulas abusivas — rol do art. 51 CDC',feito:false},
  {id:'d61_c5',texto:'Inversão do ônus da prova — critérios',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[11]||null, lei_seca:[] },

// DIA 62 — Direito Constitucional
{ dia:62, semana:11,
  titulo:'Poder Executivo e Responsabilidade',
  descricao:'Impeachment — crime de responsabilidade, rito e quórum; Responsabilidade por crimes comuns — STF',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:['Impeachment — crime de responsabilidade, rito e quórum',
               'Responsabilidade por crimes comuns — STF',
               'Estado de defesa e estado de sítio',
               'Intervenção federal — hipóteses e decreto',
               'Forças Armadas — missão e uso interno'] }],
  flashcards:[],
  checklist:[
  {id:'d62_c1',texto:'Impeachment — crime de responsabilidade, rito e quórum',feito:false},
  {id:'d62_c2',texto:'Responsabilidade por crimes comuns — STF',feito:false},
  {id:'d62_c3',texto:'Estado de defesa e estado de sítio',feito:false},
  {id:'d62_c4',texto:'Intervenção federal — hipóteses e decreto',feito:false},
  {id:'d62_c5',texto:'Forças Armadas — missão e uso interno',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[11]||null, lei_seca:[] },

// DIA 63 — Direito do Trabalho
{ dia:63, semana:11,
  titulo:'Estabilidade e Garantias de Emprego',
  descricao:'Gestante — garantia desde a concepção (Súmula 244 TST); Acidentado — estabilidade de 12 meses após alta',
  emoji_principal:'⚙️', materia:'Direito do Trabalho',
  materias:[{ nome:'Direito do Trabalho', emoji:'⚙️', horas:4, cor:'sage',
    topicos:['Gestante — garantia desde a concepção (Súmula 244 TST)',
               'Acidentado — estabilidade de 12 meses após alta',
               'Dirigente sindical — limites e extensão',
               'Membro da CIPA — titular e suplente',
               'FGTS — depósito e indenização compensatória'] }],
  flashcards:[],
  checklist:[
  {id:'d63_c1',texto:'Gestante — garantia desde a concepção (Súmula 244 TST)',feito:false},
  {id:'d63_c2',texto:'Acidentado — estabilidade de 12 meses após alta',feito:false},
  {id:'d63_c3',texto:'Dirigente sindical — limites e extensão',feito:false},
  {id:'d63_c4',texto:'Membro da CIPA — titular e suplente',feito:false},
  {id:'d63_c5',texto:'FGTS — depósito e indenização compensatória',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[11]||null, lei_seca:[] },

// DIA 64 — Direito Previdenciário
{ dia:64, semana:11,
  titulo:'Benefícios Previdenciários',
  descricao:'Auxílio-doença — carência, cálculo e cessação; Pensão por morte — dependentes e cálculo',
  emoji_principal:'🛡️', materia:'Direito Previdenciário',
  materias:[{ nome:'Direito Previdenciário', emoji:'🛡️', horas:4, cor:'lavender',
    topicos:['Auxílio-doença — carência, cálculo e cessação',
               'Pensão por morte — dependentes e cálculo',
               'Salário-maternidade — seguradas e duração',
               'BPC/LOAS — renda per capita e miserabilidade',
               'RPPS — aposentadoria e pensão dos servidores'] }],
  flashcards:[],
  checklist:[
  {id:'d64_c1',texto:'Auxílio-doença — carência, cálculo e cessação',feito:false},
  {id:'d64_c2',texto:'Pensão por morte — dependentes e cálculo',feito:false},
  {id:'d64_c3',texto:'Salário-maternidade — seguradas e duração',feito:false},
  {id:'d64_c4',texto:'BPC/LOAS — renda per capita e miserabilidade',feito:false},
  {id:'d64_c5',texto:'RPPS — aposentadoria e pensão dos servidores',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[11]||null, lei_seca:[] },

// DIA 65 — Direito Processual Civil
{ dia:65, semana:11,
  titulo:'Sentença e Coisa Julgada',
  descricao:'Sentença — elementos obrigatórios (relatório, fundamentação, dispositivo); Coisa julgada material e formal — limites',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'lavender',
    topicos:['Sentença — elementos obrigatórios (relatório, fundamentação, dispositivo)',
               'Coisa julgada material e formal — limites',
               'Ação rescisória — cabimento, prazo 2 anos, art. 966 CPC',
               'Apelação — prazo 15 dias, efeitos',
               'REsp e RE — cabimento e pressupostos'] }],
  flashcards:[],
  checklist:[
  {id:'d65_c1',texto:'Sentença — elementos obrigatórios (relatório, fundamentação, dispositivo)',feito:false},
  {id:'d65_c2',texto:'Coisa julgada material e formal — limites',feito:false},
  {id:'d65_c3',texto:'Ação rescisória — cabimento, prazo 2 anos, art. 966 CPC',feito:false},
  {id:'d65_c4',texto:'Apelação — prazo 15 dias, efeitos',feito:false},
  {id:'d65_c5',texto:'REsp e RE — cabimento e pressupostos',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[11]||null, lei_seca:[] },

// DIA 66 — Direito Civil
{ dia:66, semana:11,
  titulo:'Contratos em Espécie',
  descricao:'Compra e venda — objeto, preço e cláusulas especiais; Locação de imóveis urbanos — Lei 8.245/91',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Compra e venda — objeto, preço e cláusulas especiais',
               'Locação de imóveis urbanos — Lei 8.245/91',
               'Prestação de serviços — prazo máximo e extinção',
               'Empreitada — responsabilidade do empreiteiro',
               'Doação — regras, revogação e proibições'] }],
  flashcards:[],
  checklist:[
  {id:'d66_c1',texto:'Compra e venda — objeto, preço e cláusulas especiais',feito:false},
  {id:'d66_c2',texto:'Locação de imóveis urbanos — Lei 8.245/91',feito:false},
  {id:'d66_c3',texto:'Prestação de serviços — prazo máximo e extinção',feito:false},
  {id:'d66_c4',texto:'Empreitada — responsabilidade do empreiteiro',feito:false},
  {id:'d66_c5',texto:'Doação — regras, revogação e proibições',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[11]||null, lei_seca:[] },

// DIA 67 — Direito Civil
{ dia:67, semana:12,
  titulo:'Contratos em Espécie — Continuação',
  descricao:'Comodato e mútuo — gratuidade e juros; Depósito — responsabilidade e modalidades',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Comodato e mútuo — gratuidade e juros',
               'Depósito — responsabilidade e modalidades',
               'Mandato — poderes especiais e extinção',
               'Fiança — acessoriedade e benefício de ordem',
               'Transação — concessões mútuas e efeito'] }],
  flashcards:[],
  checklist:[
  {id:'d67_c1',texto:'Comodato e mútuo — gratuidade e juros',feito:false},
  {id:'d67_c2',texto:'Depósito — responsabilidade e modalidades',feito:false},
  {id:'d67_c3',texto:'Mandato — poderes especiais e extinção',feito:false},
  {id:'d67_c4',texto:'Fiança — acessoriedade e benefício de ordem',feito:false},
  {id:'d67_c5',texto:'Transação — concessões mútuas e efeito',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[12]||null, lei_seca:[] },

// DIA 68 — Direito Tributário
{ dia:68, semana:12,
  titulo:'Crédito Tributário — Extinção e Exclusão',
  descricao:'Extinção do crédito — pagamento, compensação, novação; Remissão — perdão da dívida tributária',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:['Extinção do crédito — pagamento, compensação, novação',
               'Remissão — perdão da dívida tributária',
               'Prescrição e decadência — Súmulas STJ',
               'Exclusão do crédito — isenção e anistia',
               'Repetição do indébito — prazo 5 anos e correção'] }],
  flashcards:[],
  checklist:[
  {id:'d68_c1',texto:'Extinção do crédito — pagamento, compensação, novação',feito:false},
  {id:'d68_c2',texto:'Remissão — perdão da dívida tributária',feito:false},
  {id:'d68_c3',texto:'Prescrição e decadência — Súmulas STJ',feito:false},
  {id:'d68_c4',texto:'Exclusão do crédito — isenção e anistia',feito:false},
  {id:'d68_c5',texto:'Repetição do indébito — prazo 5 anos e correção',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[12]||null, lei_seca:[] },

// DIA 69 — Direito Penal
{ dia:69, semana:12,
  titulo:'Crimes Contra a Dignidade Sexual e Fé Pública',
  descricao:'Estupro — art. 213 CP e presunção de vulnerabilidade; Importunação sexual — Lei 13.718/2018',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:['Estupro — art. 213 CP e presunção de vulnerabilidade',
               'Importunação sexual — Lei 13.718/2018',
               'Moeda falsa e falsidade documental',
               'Falsidade ideológica vs material — distinção',
               'Uso de documento falso'] }],
  flashcards:[],
  checklist:[
  {id:'d69_c1',texto:'Estupro — art. 213 CP e presunção de vulnerabilidade',feito:false},
  {id:'d69_c2',texto:'Importunação sexual — Lei 13.718/2018',feito:false},
  {id:'d69_c3',texto:'Moeda falsa e falsidade documental',feito:false},
  {id:'d69_c4',texto:'Falsidade ideológica vs material — distinção',feito:false},
  {id:'d69_c5',texto:'Uso de documento falso',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[12]||null, lei_seca:[] },

// DIA 70 — Direito Processual Penal
{ dia:70, semana:12,
  titulo:'Citação, Intimação e Procedimentos',
  descricao:'Citação — modalidades, revelia e edital; Intimação — réu preso e solto; defensor',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:['Citação — modalidades, revelia e edital',
               'Intimação — réu preso e solto; defensor',
               'Procedimento comum ordinário — fases',
               'Procedimento sumário e sumaríssimo (JECRIM)',
               'Procedimentos especiais — lei de drogas e júri'] }],
  flashcards:[],
  checklist:[
  {id:'d70_c1',texto:'Citação — modalidades, revelia e edital',feito:false},
  {id:'d70_c2',texto:'Intimação — réu preso e solto; defensor',feito:false},
  {id:'d70_c3',texto:'Procedimento comum ordinário — fases',feito:false},
  {id:'d70_c4',texto:'Procedimento sumário e sumaríssimo (JECRIM)',feito:false},
  {id:'d70_c5',texto:'Procedimentos especiais — lei de drogas e júri',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[12]||null, lei_seca:[] },

// DIA 71 — Ética Profissional
{ dia:71, semana:12,
  titulo:'Processo Administrativo Disciplinar da OAB',
  descricao:'Infrações disciplinares — rol do art. 34 EOAB; Sanções — advertência, censura, suspensão, exclusão',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'lavender',
    topicos:['Infrações disciplinares — rol do art. 34 EOAB',
               'Sanções — advertência, censura, suspensão, exclusão',
               'PAD — fases: instauração, instrução, defesa, julgamento',
               'Prescrição disciplinar — prazos',
               'Reabilitação do inscrito suspenso ou excluído'] }],
  flashcards:[],
  checklist:[
  {id:'d71_c1',texto:'Infrações disciplinares — rol do art. 34 EOAB',feito:false},
  {id:'d71_c2',texto:'Sanções — advertência, censura, suspensão, exclusão',feito:false},
  {id:'d71_c3',texto:'PAD — fases: instauração, instrução, defesa, julgamento',feito:false},
  {id:'d71_c4',texto:'Prescrição disciplinar — prazos',feito:false},
  {id:'d71_c5',texto:'Reabilitação do inscrito suspenso ou excluído',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[12]||null, lei_seca:[] },

// DIA 72 — Ética Profissional
{ dia:72, semana:12,
  titulo:'Ética do Advogado — Relação com o Cliente',
  descricao:'Sigilo profissional — alcance e limites; Dever de lealdade — não patrocinar interesse contrário',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'lavender',
    topicos:['Sigilo profissional — alcance e limites',
               'Dever de lealdade — não patrocinar interesse contrário',
               'Contencioso judicial — comportamento ético',
               'Relação com magistrados e ministério público',
               'Publicidade advocatícia — limites do Código de Ética'] }],
  flashcards:[],
  checklist:[
  {id:'d72_c1',texto:'Sigilo profissional — alcance e limites',feito:false},
  {id:'d72_c2',texto:'Dever de lealdade — não patrocinar interesse contrário',feito:false},
  {id:'d72_c3',texto:'Contencioso judicial — comportamento ético',feito:false},
  {id:'d72_c4',texto:'Relação com magistrados e ministério público',feito:false},
  {id:'d72_c5',texto:'Publicidade advocatícia — limites do Código de Ética',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[12]||null, lei_seca:[] },

// DIA 73 — Direito Processual Penal
{ dia:73, semana:13,
  titulo:'Prisão e Liberdade Provisória — Revisão',
  descricao:'Revisão de prisão em flagrante — modalidades; Audiência de custódia — prazo 24h e finalidade',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:['Revisão de prisão em flagrante — modalidades',
               'Audiência de custódia — prazo 24h e finalidade',
               'Habeas corpus — cabimento e competência',
               'Mandado de segurança no processo penal',
               'Revisão criminal — fundamentos'] }],
  flashcards:[],
  checklist:[
  {id:'d73_c1',texto:'Revisão de prisão em flagrante — modalidades',feito:false},
  {id:'d73_c2',texto:'Audiência de custódia — prazo 24h e finalidade',feito:false},
  {id:'d73_c3',texto:'Habeas corpus — cabimento e competência',feito:false},
  {id:'d73_c4',texto:'Mandado de segurança no processo penal',feito:false},
  {id:'d73_c5',texto:'Revisão criminal — fundamentos',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[13]||null, lei_seca:[] },

// DIA 74 — Direito Empresarial
{ dia:74, semana:13,
  titulo:'Falência e Recuperação Judicial',
  descricao:'Pressupostos da falência — impontualidade, execução frustrada; Legitimidade para requerer a falência',
  emoji_principal:'🏢', materia:'Direito Empresarial',
  materias:[{ nome:'Direito Empresarial', emoji:'🏢', horas:4, cor:'gold',
    topicos:['Pressupostos da falência — impontualidade, execução frustrada',
               'Legitimidade para requerer a falência',
               'Recuperação judicial — plano, prazo e cram down',
               'Stay period — blindagem de 180 dias',
               'Recuperação extrajudicial — negociação privada'] }],
  flashcards:[],
  checklist:[
  {id:'d74_c1',texto:'Pressupostos da falência — impontualidade, execução frustrada',feito:false},
  {id:'d74_c2',texto:'Legitimidade para requerer a falência',feito:false},
  {id:'d74_c3',texto:'Recuperação judicial — plano, prazo e cram down',feito:false},
  {id:'d74_c4',texto:'Stay period — blindagem de 180 dias',feito:false},
  {id:'d74_c5',texto:'Recuperação extrajudicial — negociação privada',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[13]||null, lei_seca:[] },

// DIA 75 — Direito Administrativo
{ dia:75, semana:13,
  titulo:'Improbidade Administrativa',
  descricao:'Sujeitos da improbidade — agente público e particular; Atos de improbidade — enriquecimento ilícito, dano ao erário',
  emoji_principal:'🏛️', materia:'Direito Administrativo',
  materias:[{ nome:'Direito Administrativo', emoji:'🏛️', horas:4, cor:'sage',
    topicos:['Sujeitos da improbidade — agente público e particular',
               'Atos de improbidade — enriquecimento ilícito, dano ao erário',
               'Sanções — suspensão, multa, ressarcimento, perda da função',
               'Lei 8.429/92 com alterações da Lei 14.230/2021',
               'Dolo específico exigido após a reforma de 2021'] }],
  flashcards:[],
  checklist:[
  {id:'d75_c1',texto:'Sujeitos da improbidade — agente público e particular',feito:false},
  {id:'d75_c2',texto:'Atos de improbidade — enriquecimento ilícito, dano ao erário',feito:false},
  {id:'d75_c3',texto:'Sanções — suspensão, multa, ressarcimento, perda da função',feito:false},
  {id:'d75_c4',texto:'Lei 8.429/92 com alterações da Lei 14.230/2021',feito:false},
  {id:'d75_c5',texto:'Dolo específico exigido após a reforma de 2021',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[13]||null, lei_seca:[] },

// DIA 76 — Direito Administrativo
{ dia:76, semana:13,
  titulo:'Intervenção na Propriedade e Responsabilidade do Estado',
  descricao:'Desapropriação — modalidades e indenização justa, prévia e em dinheiro; Tombamento — restrição ao direito de propriedade',
  emoji_principal:'🏛️', materia:'Direito Administrativo',
  materias:[{ nome:'Direito Administrativo', emoji:'🏛️', horas:4, cor:'sage',
    topicos:['Desapropriação — modalidades e indenização justa, prévia e em dinheiro',
               'Tombamento — restrição ao direito de propriedade',
               'Servidão administrativa — sem indenização se sem prejuízo',
               'Requisição administrativa — situações de urgência',
               'Responsabilidade civil objetiva do Estado — teoria do risco administrativo'] }],
  flashcards:[],
  checklist:[
  {id:'d76_c1',texto:'Desapropriação — modalidades e indenização justa, prévia e em dinheiro',feito:false},
  {id:'d76_c2',texto:'Tombamento — restrição ao direito de propriedade',feito:false},
  {id:'d76_c3',texto:'Servidão administrativa — sem indenização se sem prejuízo',feito:false},
  {id:'d76_c4',texto:'Requisição administrativa — situações de urgência',feito:false},
  {id:'d76_c5',texto:'Responsabilidade civil objetiva do Estado — teoria do risco administrativo',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[13]||null, lei_seca:[] },

// DIA 77 — Direito Constitucional
{ dia:77, semana:13,
  titulo:'Poder Legislativo e Processo Legislativo',
  descricao:'Estrutura bicameral — Câmara, Senado e Congresso Nacional; Processo legislativo ordinário — fases e sanção/veto',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:['Estrutura bicameral — Câmara, Senado e Congresso Nacional',
               'Processo legislativo ordinário — fases e sanção/veto',
               'Medida Provisória — requisitos, prazo e reedição',
               'Lei delegada — solicitação ao CN e vedações',
               'Resolução e decreto legislativo'] }],
  flashcards:[],
  checklist:[
  {id:'d77_c1',texto:'Estrutura bicameral — Câmara, Senado e Congresso Nacional',feito:false},
  {id:'d77_c2',texto:'Processo legislativo ordinário — fases e sanção/veto',feito:false},
  {id:'d77_c3',texto:'Medida Provisória — requisitos, prazo e reedição',feito:false},
  {id:'d77_c4',texto:'Lei delegada — solicitação ao CN e vedações',feito:false},
  {id:'d77_c5',texto:'Resolução e decreto legislativo',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[13]||null, lei_seca:[] },

// DIA 78 — Direito Processual Civil
{ dia:78, semana:13,
  titulo:'Cumprimento de Sentença e Execução',
  descricao:'Cumprimento de sentença — multa 10% e honorários 10%; Impugnação ao cumprimento — prazo e efeito suspensivo',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'lavender',
    topicos:['Cumprimento de sentença — multa 10% e honorários 10%',
               'Impugnação ao cumprimento — prazo e efeito suspensivo',
               'Execução extrajudicial — títulos (art. 784 CPC)',
               'Penhora — ordem legal e substituição',
               'Hasta pública — modalidades e preço mínimo'] }],
  flashcards:[],
  checklist:[
  {id:'d78_c1',texto:'Cumprimento de sentença — multa 10% e honorários 10%',feito:false},
  {id:'d78_c2',texto:'Impugnação ao cumprimento — prazo e efeito suspensivo',feito:false},
  {id:'d78_c3',texto:'Execução extrajudicial — títulos (art. 784 CPC)',feito:false},
  {id:'d78_c4',texto:'Penhora — ordem legal e substituição',feito:false},
  {id:'d78_c5',texto:'Hasta pública — modalidades e preço mínimo',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[13]||null, lei_seca:[] },

// DIA 79 — Direito Civil
{ dia:79, semana:14,
  titulo:'Responsabilidade Civil',
  descricao:'Responsabilidade subjetiva — culpa, dano e nexo causal; Responsabilidade objetiva — risco da atividade (art. 927 par. único CC)',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Responsabilidade subjetiva — culpa, dano e nexo causal',
               'Responsabilidade objetiva — risco da atividade (art. 927 par. único CC)',
               'Dano moral — arbitramento e cumulação',
               'Responsabilidade por fato de terceiro — pais, empregadores',
               'Excludentes — caso fortuito, força maior, culpa exclusiva'] }],
  flashcards:[],
  checklist:[
  {id:'d79_c1',texto:'Responsabilidade subjetiva — culpa, dano e nexo causal',feito:false},
  {id:'d79_c2',texto:'Responsabilidade objetiva — risco da atividade (art. 927 par. único CC)',feito:false},
  {id:'d79_c3',texto:'Dano moral — arbitramento e cumulação',feito:false},
  {id:'d79_c4',texto:'Responsabilidade por fato de terceiro — pais, empregadores',feito:false},
  {id:'d79_c5',texto:'Excludentes — caso fortuito, força maior, culpa exclusiva',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[14]||null, lei_seca:[] },

// DIA 80 — Direito Constitucional
{ dia:80, semana:14,
  titulo:'Poder Judiciário e Funções Essenciais',
  descricao:'Estrutura do Judiciário — STF, STJ, TST, TRFs, TJs; Garantias dos magistrados — vitaliciedade, inamovibilidade, irredutibilidade',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:['Estrutura do Judiciário — STF, STJ, TST, TRFs, TJs',
               'Garantias dos magistrados — vitaliciedade, inamovibilidade, irredutibilidade',
               'Ministério Público — princípios e atribuições (art. 127 CF)',
               'Defensoria Pública — garantias constitucionais',
               'Advocacia e OAB — indispensabilidade (art. 133 CF)'] }],
  flashcards:[],
  checklist:[
  {id:'d80_c1',texto:'Estrutura do Judiciário — STF, STJ, TST, TRFs, TJs',feito:false},
  {id:'d80_c2',texto:'Garantias dos magistrados — vitaliciedade, inamovibilidade, irredutibilidade',feito:false},
  {id:'d80_c3',texto:'Ministério Público — princípios e atribuições (art. 127 CF)',feito:false},
  {id:'d80_c4',texto:'Defensoria Pública — garantias constitucionais',feito:false},
  {id:'d80_c5',texto:'Advocacia e OAB — indispensabilidade (art. 133 CF)',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[14]||null, lei_seca:[] },

// DIA 81 — Direito do Consumidor
{ dia:81, semana:14,
  titulo:'Práticas Comerciais e Responsabilidade',
  descricao:'Publicidade enganosa — omissão de informação essencial; Publicidade abusiva — discriminação e valores negativos',
  emoji_principal:'🛒', materia:'Direito do Consumidor',
  materias:[{ nome:'Direito do Consumidor', emoji:'🛒', horas:4, cor:'gold',
    topicos:['Publicidade enganosa — omissão de informação essencial',
               'Publicidade abusiva — discriminação e valores negativos',
               'Banco de dados e cadastro do consumidor',
               'Proibição de venda casada',
               'SAC e prazos de atendimento ao consumidor'] }],
  flashcards:[],
  checklist:[
  {id:'d81_c1',texto:'Publicidade enganosa — omissão de informação essencial',feito:false},
  {id:'d81_c2',texto:'Publicidade abusiva — discriminação e valores negativos',feito:false},
  {id:'d81_c3',texto:'Banco de dados e cadastro do consumidor',feito:false},
  {id:'d81_c4',texto:'Proibição de venda casada',feito:false},
  {id:'d81_c5',texto:'SAC e prazos de atendimento ao consumidor',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[14]||null, lei_seca:[] },

// DIA 82 — Direito Eleitoral
{ dia:82, semana:14,
  titulo:'Direitos Políticos e Partidos Políticos',
  descricao:'Direitos políticos — condições de elegibilidade (art. 14 par. 3 CF); Inelegibilidades constitucionais — parentesco, domicílio',
  emoji_principal:'🗳️', materia:'Direito Eleitoral',
  materias:[{ nome:'Direito Eleitoral', emoji:'🗳️', horas:4, cor:'lavender',
    topicos:['Direitos políticos — condições de elegibilidade (art. 14 par. 3 CF)',
               'Inelegibilidades constitucionais — parentesco, domicílio',
               'Lei da ficha limpa — inelegibilidades infraconstitucionais',
               'Registro de candidatura — prazo e documentos',
               'Partidos políticos — fidelidade e cláusula de desempenho'] }],
  flashcards:[],
  checklist:[
  {id:'d82_c1',texto:'Direitos políticos — condições de elegibilidade (art. 14 par. 3 CF)',feito:false},
  {id:'d82_c2',texto:'Inelegibilidades constitucionais — parentesco, domicílio',feito:false},
  {id:'d82_c3',texto:'Lei da ficha limpa — inelegibilidades infraconstitucionais',feito:false},
  {id:'d82_c4',texto:'Registro de candidatura — prazo e documentos',feito:false},
  {id:'d82_c5',texto:'Partidos políticos — fidelidade e cláusula de desempenho',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[14]||null, lei_seca:[] },

// DIA 83 — Direito Civil
{ dia:83, semana:14,
  titulo:'Direito de Família — Aspectos Pessoais',
  descricao:'Casamento — habilitação, impedimentos e causas suspensivas; Efeitos pessoais do casamento — deveres dos cônjuges',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Casamento — habilitação, impedimentos e causas suspensivas',
               'Efeitos pessoais do casamento — deveres dos cônjuges',
               'União estável — requisitos e conversão em casamento',
               'Divórcio — unilateral e consensual (EC 66/2010)',
               'Parentesco — graus, afinidade e consanguinidade'] }],
  flashcards:[],
  checklist:[
  {id:'d83_c1',texto:'Casamento — habilitação, impedimentos e causas suspensivas',feito:false},
  {id:'d83_c2',texto:'Efeitos pessoais do casamento — deveres dos cônjuges',feito:false},
  {id:'d83_c3',texto:'União estável — requisitos e conversão em casamento',feito:false},
  {id:'d83_c4',texto:'Divórcio — unilateral e consensual (EC 66/2010)',feito:false},
  {id:'d83_c5',texto:'Parentesco — graus, afinidade e consanguinidade',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[14]||null, lei_seca:[] },

// DIA 84 — Direito Civil
{ dia:84, semana:14,
  titulo:'Direito de Família — Aspectos Patrimoniais',
  descricao:'Regimes de bens — comunhão parcial (regra geral), universal, separação; Pacto antenupcial — forma e limitações',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Regimes de bens — comunhão parcial (regra geral), universal, separação',
               'Pacto antenupcial — forma e limitações',
               'Alimentos — pressupostos, espécies e execução',
               'Bem de família — impenhorabilidade e exceções',
               'Guarda dos filhos — unilateral, compartilhada e alienação parental'] }],
  flashcards:[],
  checklist:[
  {id:'d84_c1',texto:'Regimes de bens — comunhão parcial (regra geral), universal, separação',feito:false},
  {id:'d84_c2',texto:'Pacto antenupcial — forma e limitações',feito:false},
  {id:'d84_c3',texto:'Alimentos — pressupostos, espécies e execução',feito:false},
  {id:'d84_c4',texto:'Bem de família — impenhorabilidade e exceções',feito:false},
  {id:'d84_c5',texto:'Guarda dos filhos — unilateral, compartilhada e alienação parental',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[14]||null, lei_seca:[] },

// DIA 85 — Direito Tributário
{ dia:85, semana:15,
  titulo:'Impostos Federais, Estaduais e Municipais',
  descricao:'IR — fato gerador, contribuintes e isenções; IPI — não cumulatividade e seletividade',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:['IR — fato gerador, contribuintes e isenções',
               'IPI — não cumulatividade e seletividade',
               'ICMS — regras gerais, imunidade e diferencial de alíquota',
               'ISS — competência municipal e lista de serviços',
               'IPTU — progressividade e imunidade'] }],
  flashcards:[],
  checklist:[
  {id:'d85_c1',texto:'IR — fato gerador, contribuintes e isenções',feito:false},
  {id:'d85_c2',texto:'IPI — não cumulatividade e seletividade',feito:false},
  {id:'d85_c3',texto:'ICMS — regras gerais, imunidade e diferencial de alíquota',feito:false},
  {id:'d85_c4',texto:'ISS — competência municipal e lista de serviços',feito:false},
  {id:'d85_c5',texto:'IPTU — progressividade e imunidade',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[15]||null, lei_seca:[] },

// DIA 86 — Direito Constitucional
{ dia:86, semana:15,
  titulo:'Defesa do Estado e Ordem Social',
  descricao:'Estado de defesa — art. 136 CF, decreto presidencial e prazo; Estado de sítio — art. 137 CF, autorização do CN',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:['Estado de defesa — art. 136 CF, decreto presidencial e prazo',
               'Estado de sítio — art. 137 CF, autorização do CN',
               'Forças Armadas — missões constitucionais',
               'Ordem social — saúde, previdência, assistência, educação',
               'Comunicação social — vedação ao monopólio'] }],
  flashcards:[],
  checklist:[
  {id:'d86_c1',texto:'Estado de defesa — art. 136 CF, decreto presidencial e prazo',feito:false},
  {id:'d86_c2',texto:'Estado de sítio — art. 137 CF, autorização do CN',feito:false},
  {id:'d86_c3',texto:'Forças Armadas — missões constitucionais',feito:false},
  {id:'d86_c4',texto:'Ordem social — saúde, previdência, assistência, educação',feito:false},
  {id:'d86_c5',texto:'Comunicação social — vedação ao monopólio',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[15]||null, lei_seca:[] },

// DIA 87 — Direito Penal
{ dia:87, semana:15,
  titulo:'Crimes Contra a Administração Pública',
  descricao:'Peculato — apropriação, desvio e furto (art. 312 CP); Concussão e corrupção passiva — distinção',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:['Peculato — apropriação, desvio e furto (art. 312 CP)',
               'Concussão e corrupção passiva — distinção',
               'Corrupção ativa — art. 333 CP',
               'Prevaricação — interesse pessoal',
               'Crimes praticados por particular contra a Adm. Pública'] }],
  flashcards:[],
  checklist:[
  {id:'d87_c1',texto:'Peculato — apropriação, desvio e furto (art. 312 CP)',feito:false},
  {id:'d87_c2',texto:'Concussão e corrupção passiva — distinção',feito:false},
  {id:'d87_c3',texto:'Corrupção ativa — art. 333 CP',feito:false},
  {id:'d87_c4',texto:'Prevaricação — interesse pessoal',feito:false},
  {id:'d87_c5',texto:'Crimes praticados por particular contra a Adm. Pública',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[15]||null, lei_seca:[] },

// DIA 88 — Direito Processual Penal
{ dia:88, semana:15,
  titulo:'Recursos e Ações de Impugnação',
  descricao:'RSE — cabimento taxativo (art. 581 CPP); Apelação criminal — prazo 5 dias e fundamentação',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:['RSE — cabimento taxativo (art. 581 CPP)',
               'Apelação criminal — prazo 5 dias e fundamentação',
               'Embargos de declaração no processo penal',
               'Habeas corpus — preventivo e repressivo',
               'Revisão criminal — fundamentos e competência'] }],
  flashcards:[],
  checklist:[
  {id:'d88_c1',texto:'RSE — cabimento taxativo (art. 581 CPP)',feito:false},
  {id:'d88_c2',texto:'Apelação criminal — prazo 5 dias e fundamentação',feito:false},
  {id:'d88_c3',texto:'Embargos de declaração no processo penal',feito:false},
  {id:'d88_c4',texto:'Habeas corpus — preventivo e repressivo',feito:false},
  {id:'d88_c5',texto:'Revisão criminal — fundamentos e competência',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[15]||null, lei_seca:[] },

// DIA 89 — Processo do Trabalho
{ dia:89, semana:15,
  titulo:'Execução Trabalhista',
  descricao:'Título executivo trabalhista — sentença e TAC; Liquidação — por cálculo, arbitramento e artigos',
  emoji_principal:'⚡', materia:'Processo do Trabalho',
  materias:[{ nome:'Processo do Trabalho', emoji:'⚡', horas:4, cor:'sage',
    topicos:['Título executivo trabalhista — sentença e TAC',
               'Liquidação — por cálculo, arbitramento e artigos',
               'Penhora de bens — ordem e bem de família',
               'Desconsideração da personalidade jurídica na JT',
               'Execução provisória e definitiva'] }],
  flashcards:[],
  checklist:[
  {id:'d89_c1',texto:'Título executivo trabalhista — sentença e TAC',feito:false},
  {id:'d89_c2',texto:'Liquidação — por cálculo, arbitramento e artigos',feito:false},
  {id:'d89_c3',texto:'Penhora de bens — ordem e bem de família',feito:false},
  {id:'d89_c4',texto:'Desconsideração da personalidade jurídica na JT',feito:false},
  {id:'d89_c5',texto:'Execução provisória e definitiva',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[15]||null, lei_seca:[] },

// DIA 90 — Direito Civil
{ dia:90, semana:15,
  titulo:'Direito das Sucessões: Sucessão em Geral',
  descricao:'Abertura da sucessão — morte real e presumida; Herança — aceitação e renúncia (art. 1.804 CC)',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Abertura da sucessão — morte real e presumida',
               'Herança — aceitação e renúncia (art. 1.804 CC)',
               'Legitimidade para suceder — regras',
               'Ordem de vocação hereditária',
               'Herdeiro necessário — quota obrigatória (50%)'] }],
  flashcards:[],
  checklist:[
  {id:'d90_c1',texto:'Abertura da sucessão — morte real e presumida',feito:false},
  {id:'d90_c2',texto:'Herança — aceitação e renúncia (art. 1.804 CC)',feito:false},
  {id:'d90_c3',texto:'Legitimidade para suceder — regras',feito:false},
  {id:'d90_c4',texto:'Ordem de vocação hereditária',feito:false},
  {id:'d90_c5',texto:'Herdeiro necessário — quota obrigatória (50%)',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[15]||null, lei_seca:[] },

// DIA 91 — Direito Constitucional
{ dia:91, semana:16,
  titulo:'Controle de Constitucionalidade Concentrado',
  descricao:'ADI — legitimados, objeto e efeitos (art. 103 CF); ADC — presunção de constitucionalidade e efeito vinculante',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:['ADI — legitimados, objeto e efeitos (art. 103 CF)',
               'ADC — presunção de constitucionalidade e efeito vinculante',
               'ADPF — subsidiariedade e objeto amplo',
               'ADI por Omissão — efeitos e prazo',
               'Cautelar em ADI — maioria absoluta e efeitos retroativos'] }],
  flashcards:[],
  checklist:[
  {id:'d91_c1',texto:'ADI — legitimados, objeto e efeitos (art. 103 CF)',feito:false},
  {id:'d91_c2',texto:'ADC — presunção de constitucionalidade e efeito vinculante',feito:false},
  {id:'d91_c3',texto:'ADPF — subsidiariedade e objeto amplo',feito:false},
  {id:'d91_c4',texto:'ADI por Omissão — efeitos e prazo',feito:false},
  {id:'d91_c5',texto:'Cautelar em ADI — maioria absoluta e efeitos retroativos',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[16]||null, lei_seca:[] },

// DIA 92 — Direito Penal
{ dia:92, semana:16,
  titulo:'Crimes Contra o Patrimônio',
  descricao:'Furto — simples, qualificado e privilégio; Roubo e extorsão — distinção e penas',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:['Furto — simples, qualificado e privilégio',
               'Roubo e extorsão — distinção e penas',
               'Estelionato — fraude e Súmula 246 STJ',
               'Receptação — própria e imprópria',
               'Dano — elemento subjetivo e qualificadoras'] }],
  flashcards:[],
  checklist:[
  {id:'d92_c1',texto:'Furto — simples, qualificado e privilégio',feito:false},
  {id:'d92_c2',texto:'Roubo e extorsão — distinção e penas',feito:false},
  {id:'d92_c3',texto:'Estelionato — fraude e Súmula 246 STJ',feito:false},
  {id:'d92_c4',texto:'Receptação — própria e imprópria',feito:false},
  {id:'d92_c5',texto:'Dano — elemento subjetivo e qualificadoras',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[16]||null, lei_seca:[] },

// DIA 93 — Direito Processual Penal
{ dia:93, semana:16,
  titulo:'Procedimentos Especiais',
  descricao:'Procedimento do júri — 1a fase (pronúncia) e 2a fase; Quesitação no júri — soberania dos veredictos',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:['Procedimento do júri — 1a fase (pronúncia) e 2a fase',
               'Quesitação no júri — soberania dos veredictos',
               'JECRIM — transação penal e suspensão condicional',
               'Procedimento da Lei de Drogas',
               'Procedimento dos crimes de responsabilidade'] }],
  flashcards:[],
  checklist:[
  {id:'d93_c1',texto:'Procedimento do júri — 1a fase (pronúncia) e 2a fase',feito:false},
  {id:'d93_c2',texto:'Quesitação no júri — soberania dos veredictos',feito:false},
  {id:'d93_c3',texto:'JECRIM — transação penal e suspensão condicional',feito:false},
  {id:'d93_c4',texto:'Procedimento da Lei de Drogas',feito:false},
  {id:'d93_c5',texto:'Procedimento dos crimes de responsabilidade',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[16]||null, lei_seca:[] },

// DIA 94 — Ética Profissional
{ dia:94, semana:16,
  titulo:'Estrutura da OAB e Eleições',
  descricao:'Órgãos da OAB — Conselho Federal, Seccionais, Subseções; Eleições da OAB — mandato trienal e elegibilidade',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'lavender',
    topicos:['Órgãos da OAB — Conselho Federal, Seccionais, Subseções',
               'Eleições da OAB — mandato trienal e elegibilidade',
               'Publicidade advocatícia — vedações do Código de Ética',
               'Mercantilização da advocacia — proibições',
               'OAB e poder disciplinar — alcance'] }],
  flashcards:[],
  checklist:[
  {id:'d94_c1',texto:'Órgãos da OAB — Conselho Federal, Seccionais, Subseções',feito:false},
  {id:'d94_c2',texto:'Eleições da OAB — mandato trienal e elegibilidade',feito:false},
  {id:'d94_c3',texto:'Publicidade advocatícia — vedações do Código de Ética',feito:false},
  {id:'d94_c4',texto:'Mercantilização da advocacia — proibições',feito:false},
  {id:'d94_c5',texto:'OAB e poder disciplinar — alcance',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[16]||null, lei_seca:[] },

// DIA 95 — Direito Processual Civil
{ dia:95, semana:16,
  titulo:'Procedimentos Especiais e Recursos Extraordinários',
  descricao:'Mandado de segurança — prazo 120 dias, legitimidade e liminar; Ação popular — objeto, legitimidade e sentença',
  emoji_principal:'📋', materia:'Processo Civil',
  materias:[{ nome:'Processo Civil', emoji:'📋', horas:4, cor:'lavender',
    topicos:['Mandado de segurança — prazo 120 dias, legitimidade e liminar',
               'Ação popular — objeto, legitimidade e sentença',
               'Ação civil pública — legitimados e objeto',
               'REsp — violação de lei federal e prequestionamento',
               'RE — repercussão geral e casos admitidos'] }],
  flashcards:[],
  checklist:[
  {id:'d95_c1',texto:'Mandado de segurança — prazo 120 dias, legitimidade e liminar',feito:false},
  {id:'d95_c2',texto:'Ação popular — objeto, legitimidade e sentença',feito:false},
  {id:'d95_c3',texto:'Ação civil pública — legitimados e objeto',feito:false},
  {id:'d95_c4',texto:'REsp — violação de lei federal e prequestionamento',feito:false},
  {id:'d95_c5',texto:'RE — repercussão geral e casos admitidos',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[16]||null, lei_seca:[] },

// DIA 96 — Direito Civil
{ dia:96, semana:16,
  titulo:'Direitos Reais: Posse e Propriedade',
  descricao:'Posse — natureza jurídica, classificações e efeitos; Ações possessórias — reintegração, manutenção, interdito proibitório',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Posse — natureza jurídica, classificações e efeitos',
               'Ações possessórias — reintegração, manutenção, interdito proibitório',
               'Usucapião — espécies e requisitos',
               'Propriedade — função social e limitações',
               'Direitos reais de garantia — penhor, hipoteca, anticrese'] }],
  flashcards:[],
  checklist:[
  {id:'d96_c1',texto:'Posse — natureza jurídica, classificações e efeitos',feito:false},
  {id:'d96_c2',texto:'Ações possessórias — reintegração, manutenção, interdito proibitório',feito:false},
  {id:'d96_c3',texto:'Usucapião — espécies e requisitos',feito:false},
  {id:'d96_c4',texto:'Propriedade — função social e limitações',feito:false},
  {id:'d96_c5',texto:'Direitos reais de garantia — penhor, hipoteca, anticrese',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[16]||null, lei_seca:[] },

// DIA 97 — Direito Tributário
{ dia:97, semana:17,
  titulo:'Suspensão, Extinção e Exclusão do Crédito',
  descricao:'Suspensão — MODEFI: moratória, depósito, defesa, liminar, parcelamento; Extinção — pagamento, compensação, transação, remissão',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:['Suspensão — MODEFI: moratória, depósito, defesa, liminar, parcelamento',
               'Extinção — pagamento, compensação, transação, remissão',
               'Conversão do depósito em renda',
               'Pagamento antecipado e homologação',
               'Exclusão — isenção e anistia'] }],
  flashcards:[],
  checklist:[
  {id:'d97_c1',texto:'Suspensão — MODEFI: moratória, depósito, defesa, liminar, parcelamento',feito:false},
  {id:'d97_c2',texto:'Extinção — pagamento, compensação, transação, remissão',feito:false},
  {id:'d97_c3',texto:'Conversão do depósito em renda',feito:false},
  {id:'d97_c4',texto:'Pagamento antecipado e homologação',feito:false},
  {id:'d97_c5',texto:'Exclusão — isenção e anistia',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[17]||null, lei_seca:[] },

// DIA 98 — Processo do Trabalho
{ dia:98, semana:17,
  titulo:'Ações Especiais',
  descricao:'Mandado de segurança na JT — cabimento e prazo; Ação monitória trabalhista',
  emoji_principal:'⚡', materia:'Processo do Trabalho',
  materias:[{ nome:'Processo do Trabalho', emoji:'⚡', horas:4, cor:'sage',
    topicos:['Mandado de segurança na JT — cabimento e prazo',
               'Ação monitória trabalhista',
               'Tutelas de urgência no processo do trabalho',
               'Ação rescisória trabalhista — prazo 2 anos',
               'Ação anulatória de cláusula convencional'] }],
  flashcards:[],
  checklist:[
  {id:'d98_c1',texto:'Mandado de segurança na JT — cabimento e prazo',feito:false},
  {id:'d98_c2',texto:'Ação monitória trabalhista',feito:false},
  {id:'d98_c3',texto:'Tutelas de urgência no processo do trabalho',feito:false},
  {id:'d98_c4',texto:'Ação rescisória trabalhista — prazo 2 anos',feito:false},
  {id:'d98_c5',texto:'Ação anulatória de cláusula convencional',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[17]||null, lei_seca:[] },

// DIA 99 — Direito Processual Penal
{ dia:99, semana:17,
  titulo:'Nulidades e Recursos',
  descricao:'Nulidades absolutas e relativas — instrumentalidade; Princípio do prejuízo — pas de nullite sans grief',
  emoji_principal:'🔍', materia:'Processo Penal',
  materias:[{ nome:'Processo Penal', emoji:'🔍', horas:4, cor:'rose',
    topicos:['Nulidades absolutas e relativas — instrumentalidade',
               'Princípio do prejuízo — pas de nullite sans grief',
               'RSE — rol taxativo e prazo 5 dias',
               'Apelação criminal — efeito suspensivo',
               'Embargos infringentes e de nulidade'] }],
  flashcards:[],
  checklist:[
  {id:'d99_c1',texto:'Nulidades absolutas e relativas — instrumentalidade',feito:false},
  {id:'d99_c2',texto:'Princípio do prejuízo — pas de nullite sans grief',feito:false},
  {id:'d99_c3',texto:'RSE — rol taxativo e prazo 5 dias',feito:false},
  {id:'d99_c4',texto:'Apelação criminal — efeito suspensivo',feito:false},
  {id:'d99_c5',texto:'Embargos infringentes e de nulidade',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[17]||null, lei_seca:[] },

// DIA 100 — Direito do Trabalho
{ dia:100, semana:17,
  titulo:'Direito Coletivo do Trabalho',
  descricao:'Sindicato — unicidade sindical e base territorial; Negociação coletiva — ACT e CCT',
  emoji_principal:'⚙️', materia:'Direito do Trabalho',
  materias:[{ nome:'Direito do Trabalho', emoji:'⚙️', horas:4, cor:'sage',
    topicos:['Sindicato — unicidade sindical e base territorial',
               'Negociação coletiva — ACT e CCT',
               'Hierarquia das fontes — art. 620 CLT',
               'Greve — Lei 7.783/89, serviços essenciais',
               'Arbitragem no direito coletivo'] }],
  flashcards:[],
  checklist:[
  {id:'d100_c1',texto:'Sindicato — unicidade sindical e base territorial',feito:false},
  {id:'d100_c2',texto:'Negociação coletiva — ACT e CCT',feito:false},
  {id:'d100_c3',texto:'Hierarquia das fontes — art. 620 CLT',feito:false},
  {id:'d100_c4',texto:'Greve — Lei 7.783/89, serviços essenciais',feito:false},
  {id:'d100_c5',texto:'Arbitragem no direito coletivo',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[17]||null, lei_seca:[] },

// DIA 101 — Direito Civil
{ dia:101, semana:17,
  titulo:'Direito de Família — Patrimonial e Alimentos',
  descricao:'Regime da comunhão parcial — bens particulares e comuns; Regime da separação obrigatória — hipóteses',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Regime da comunhão parcial — bens particulares e comuns',
               'Regime da separação obrigatória — hipóteses',
               'Alimentos — requisitos e ação de alimentos',
               'Guarda dos filhos — critérios e alienação parental',
               'Poder familiar — exercício e extinção'] }],
  flashcards:[],
  checklist:[
  {id:'d101_c1',texto:'Regime da comunhão parcial — bens particulares e comuns',feito:false},
  {id:'d101_c2',texto:'Regime da separação obrigatória — hipóteses',feito:false},
  {id:'d101_c3',texto:'Alimentos — requisitos e ação de alimentos',feito:false},
  {id:'d101_c4',texto:'Guarda dos filhos — critérios e alienação parental',feito:false},
  {id:'d101_c5',texto:'Poder familiar — exercício e extinção',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[17]||null, lei_seca:[] },

// DIA 102 — Direito Administrativo
{ dia:102, semana:17,
  titulo:'Consórcios Públicos, Serviços Públicos e PPP',
  descricao:'Concessão de serviço público — modalidades e extinção; Permissão — precariedade e revogabilidade',
  emoji_principal:'🏛️', materia:'Direito Administrativo',
  materias:[{ nome:'Direito Administrativo', emoji:'🏛️', horas:4, cor:'sage',
    topicos:['Concessão de serviço público — modalidades e extinção',
               'Permissão — precariedade e revogabilidade',
               'Parceria Público-Privada (PPP) — patrocinada e administrativa',
               'Consórcios públicos — personalidade jurídica',
               'Terceiro setor — OS e OSCIP'] }],
  flashcards:[],
  checklist:[
  {id:'d102_c1',texto:'Concessão de serviço público — modalidades e extinção',feito:false},
  {id:'d102_c2',texto:'Permissão — precariedade e revogabilidade',feito:false},
  {id:'d102_c3',texto:'Parceria Público-Privada (PPP) — patrocinada e administrativa',feito:false},
  {id:'d102_c4',texto:'Consórcios públicos — personalidade jurídica',feito:false},
  {id:'d102_c5',texto:'Terceiro setor — OS e OSCIP',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[17]||null, lei_seca:[] },

// DIA 103 — Direito do Trabalho
{ dia:103, semana:18,
  titulo:'Extinção do Contrato de Trabalho',
  descricao:'Dispensa sem justa causa — aviso prévio e verbas; Dispensa por justa causa — art. 482 CLT',
  emoji_principal:'⚙️', materia:'Direito do Trabalho',
  materias:[{ nome:'Direito do Trabalho', emoji:'⚙️', horas:4, cor:'sage',
    topicos:['Dispensa sem justa causa — aviso prévio e verbas',
               'Dispensa por justa causa — art. 482 CLT',
               'Pedido de demissão — aviso e verbas',
               'Rescisão indireta — falta grave do empregador (art. 483 CLT)',
               'TRCT — prazos para pagamento'] }],
  flashcards:[],
  checklist:[
  {id:'d103_c1',texto:'Dispensa sem justa causa — aviso prévio e verbas',feito:false},
  {id:'d103_c2',texto:'Dispensa por justa causa — art. 482 CLT',feito:false},
  {id:'d103_c3',texto:'Pedido de demissão — aviso e verbas',feito:false},
  {id:'d103_c4',texto:'Rescisão indireta — falta grave do empregador (art. 483 CLT)',feito:false},
  {id:'d103_c5',texto:'TRCT — prazos para pagamento',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[18]||null, lei_seca:[] },

// DIA 104 — Processo do Trabalho
{ dia:104, semana:18,
  titulo:'Recursos Trabalhistas',
  descricao:'Recurso ordinário (RO) — prazo 8 dias; Recurso de revista (RR) — transcendência e cabimento',
  emoji_principal:'⚡', materia:'Processo do Trabalho',
  materias:[{ nome:'Processo do Trabalho', emoji:'⚡', horas:4, cor:'sage',
    topicos:['Recurso ordinário (RO) — prazo 8 dias',
               'Recurso de revista (RR) — transcendência e cabimento',
               'Embargos no TST',
               'Agravo de instrumento trabalhista',
               'Recurso adesivo'] }],
  flashcards:[],
  checklist:[
  {id:'d104_c1',texto:'Recurso ordinário (RO) — prazo 8 dias',feito:false},
  {id:'d104_c2',texto:'Recurso de revista (RR) — transcendência e cabimento',feito:false},
  {id:'d104_c3',texto:'Embargos no TST',feito:false},
  {id:'d104_c4',texto:'Agravo de instrumento trabalhista',feito:false},
  {id:'d104_c5',texto:'Recurso adesivo',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[18]||null, lei_seca:[] },

// DIA 105 — Direito Civil
{ dia:105, semana:18,
  titulo:'Direito das Sucessões: Legítima e Testamentária',
  descricao:'Herdeiros necessários — quota indisponível (50%); Ordem da vocação hereditária — descendentes e cônjuge',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Herdeiros necessários — quota indisponível (50%)',
               'Ordem da vocação hereditária — descendentes e cônjuge',
               'Colação e redução — proteção do patrimônio',
               'Testamento — formas (público, cerrado, particular)',
               'Codicilo — limitações e objeto'] }],
  flashcards:[],
  checklist:[
  {id:'d105_c1',texto:'Herdeiros necessários — quota indisponível (50%)',feito:false},
  {id:'d105_c2',texto:'Ordem da vocação hereditária — descendentes e cônjuge',feito:false},
  {id:'d105_c3',texto:'Colação e redução — proteção do patrimônio',feito:false},
  {id:'d105_c4',texto:'Testamento — formas (público, cerrado, particular)',feito:false},
  {id:'d105_c5',texto:'Codicilo — limitações e objeto',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[18]||null, lei_seca:[] },

// DIA 106 — Direito Tributário
{ dia:106, semana:18,
  titulo:'Execução Fiscal e Garantias do Crédito',
  descricao:'Execução fiscal — Lei 6.830/80; Citação na execução fiscal',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:['Execução fiscal — Lei 6.830/80',
               'Citação na execução fiscal',
               'Embargos à execução fiscal — prazo 30 dias',
               'Prescrição intercorrente — Súmula 314 STJ',
               'Garantias e privilégios do crédito tributário'] }],
  flashcards:[],
  checklist:[
  {id:'d106_c1',texto:'Execução fiscal — Lei 6.830/80',feito:false},
  {id:'d106_c2',texto:'Citação na execução fiscal',feito:false},
  {id:'d106_c3',texto:'Embargos à execução fiscal — prazo 30 dias',feito:false},
  {id:'d106_c4',texto:'Prescrição intercorrente — Súmula 314 STJ',feito:false},
  {id:'d106_c5',texto:'Garantias e privilégios do crédito tributário',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[18]||null, lei_seca:[] },

// DIA 107 — Direito Constitucional
{ dia:107, semana:18,
  titulo:'Revisão — Poder Legislativo e Judiciário',
  descricao:'Controle de constitucionalidade difuso e concentrado — revisão; Súmula vinculante — aprovação, revisão e cancelamento',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:['Controle de constitucionalidade difuso e concentrado — revisão',
               'Súmula vinculante — aprovação, revisão e cancelamento',
               'IRDR e recursos repetitivos — efeito vinculante',
               'Ação de inconstitucionalidade por omissão',
               'Poder Judiciário — garantias e vedações'] }],
  flashcards:[],
  checklist:[
  {id:'d107_c1',texto:'Controle de constitucionalidade difuso e concentrado — revisão',feito:false},
  {id:'d107_c2',texto:'Súmula vinculante — aprovação, revisão e cancelamento',feito:false},
  {id:'d107_c3',texto:'IRDR e recursos repetitivos — efeito vinculante',feito:false},
  {id:'d107_c4',texto:'Ação de inconstitucionalidade por omissão',feito:false},
  {id:'d107_c5',texto:'Poder Judiciário — garantias e vedações',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[18]||null, lei_seca:[] },

// DIA 108 — Direito Penal
{ dia:108, semana:18,
  titulo:'Legislação Penal Especial',
  descricao:'Lei Maria da Penha — violência doméstica, medidas protetivas; Lei de Drogas (11.343/06) — usuário x traficante, tráfico privilegiado',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:['Lei Maria da Penha — violência doméstica, medidas protetivas',
               'Lei de Drogas (11.343/06) — usuário x traficante, tráfico privilegiado',
               'Estatuto do Desarmamento — porte e posse',
               'Crimes hediondos — Lei 8.072/90',
               'Lei Anticorrupção (12.846/13) — responsabilidade da PJ'] }],
  flashcards:[],
  checklist:[
  {id:'d108_c1',texto:'Lei Maria da Penha — violência doméstica, medidas protetivas',feito:false},
  {id:'d108_c2',texto:'Lei de Drogas (11.343/06) — usuário x traficante, tráfico privilegiado',feito:false},
  {id:'d108_c3',texto:'Estatuto do Desarmamento — porte e posse',feito:false},
  {id:'d108_c4',texto:'Crimes hediondos — Lei 8.072/90',feito:false},
  {id:'d108_c5',texto:'Lei Anticorrupção (12.846/13) — responsabilidade da PJ',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[18]||null, lei_seca:[] },

// DIA 109 — Direito Constitucional
{ dia:109, semana:19,
  titulo:'Revisão Final — Constitucional',
  descricao:'Revisão de direitos e garantias individuais (art. 5 CF); Remédios constitucionais — HC, HD, MS, MI, AP',
  emoji_principal:'🏛️', materia:'Direito Constitucional',
  materias:[{ nome:'Direito Constitucional', emoji:'🏛️', horas:4, cor:'lavender',
    topicos:['Revisão de direitos e garantias individuais (art. 5 CF)',
               'Remédios constitucionais — HC, HD, MS, MI, AP',
               'Organização dos poderes — síntese',
               'Controle de constitucionalidade — difuso e concentrado',
               'Cláusulas pétreas e limites da reforma'] }],
  flashcards:[],
  checklist:[
  {id:'d109_c1',texto:'Revisão de direitos e garantias individuais (art. 5 CF)',feito:false},
  {id:'d109_c2',texto:'Remédios constitucionais — HC, HD, MS, MI, AP',feito:false},
  {id:'d109_c3',texto:'Organização dos poderes — síntese',feito:false},
  {id:'d109_c4',texto:'Controle de constitucionalidade — difuso e concentrado',feito:false},
  {id:'d109_c5',texto:'Cláusulas pétreas e limites da reforma',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[19]||null, lei_seca:[] },

// DIA 110 — Direito Civil
{ dia:110, semana:19,
  titulo:'Revisão Final — Civil',
  descricao:'Revisão de obrigações — modalidades e extinção; Revisão de contratos — princípios e vícios',
  emoji_principal:'📜', materia:'Direito Civil',
  materias:[{ nome:'Direito Civil', emoji:'📜', horas:4, cor:'lavender',
    topicos:['Revisão de obrigações — modalidades e extinção',
               'Revisão de contratos — princípios e vícios',
               'Responsabilidade civil — subjetiva, objetiva, excludentes',
               'Direitos reais — posse, propriedade, usucapião',
               'Família e sucessões — síntese'] }],
  flashcards:[],
  checklist:[
  {id:'d110_c1',texto:'Revisão de obrigações — modalidades e extinção',feito:false},
  {id:'d110_c2',texto:'Revisão de contratos — princípios e vícios',feito:false},
  {id:'d110_c3',texto:'Responsabilidade civil — subjetiva, objetiva, excludentes',feito:false},
  {id:'d110_c4',texto:'Direitos reais — posse, propriedade, usucapião',feito:false},
  {id:'d110_c5',texto:'Família e sucessões — síntese',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[19]||null, lei_seca:[] },

// DIA 111 — Direito do Trabalho
{ dia:111, semana:19,
  titulo:'Revisão Final — Trabalho e Processo do Trabalho',
  descricao:'Revisão de contrato de trabalho — modalidades e jornada; Rescisão — verbas e prazos',
  emoji_principal:'⚙️', materia:'Direito do Trabalho',
  materias:[{ nome:'Direito do Trabalho', emoji:'⚙️', horas:4, cor:'sage',
    topicos:['Revisão de contrato de trabalho — modalidades e jornada',
               'Rescisão — verbas e prazos',
               'Processo do trabalho — competência, prazos, recursos',
               'Sindicatos e negociação coletiva',
               'Questões mais cobradas OAB — Trabalho'] }],
  flashcards:[],
  checklist:[
  {id:'d111_c1',texto:'Revisão de contrato de trabalho — modalidades e jornada',feito:false},
  {id:'d111_c2',texto:'Rescisão — verbas e prazos',feito:false},
  {id:'d111_c3',texto:'Processo do trabalho — competência, prazos, recursos',feito:false},
  {id:'d111_c4',texto:'Sindicatos e negociação coletiva',feito:false},
  {id:'d111_c5',texto:'Questões mais cobradas OAB — Trabalho',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[19]||null, lei_seca:[] },

// DIA 112 — Direito Tributário
{ dia:112, semana:19,
  titulo:'Revisão Final — Tributário',
  descricao:'Revisão de princípios tributários — legalidade, anterioridade; Imunidades — recíproca, templos, cultural',
  emoji_principal:'💰', materia:'Direito Tributário',
  materias:[{ nome:'Direito Tributário', emoji:'💰', horas:4, cor:'gold',
    topicos:['Revisão de princípios tributários — legalidade, anterioridade',
               'Imunidades — recíproca, templos, cultural',
               'Crédito tributário — lançamento, suspensão, extinção',
               'Impostos federais, estaduais e municipais',
               'Questões mais cobradas OAB — Tributário'] }],
  flashcards:[],
  checklist:[
  {id:'d112_c1',texto:'Revisão de princípios tributários — legalidade, anterioridade',feito:false},
  {id:'d112_c2',texto:'Imunidades — recíproca, templos, cultural',feito:false},
  {id:'d112_c3',texto:'Crédito tributário — lançamento, suspensão, extinção',feito:false},
  {id:'d112_c4',texto:'Impostos federais, estaduais e municipais',feito:false},
  {id:'d112_c5',texto:'Questões mais cobradas OAB — Tributário',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[19]||null, lei_seca:[] },

// DIA 113 — Direito Penal
{ dia:113, semana:19,
  titulo:'Revisão Final — Penal e Processo Penal',
  descricao:'Revisão de teoria do crime — fato típico, ilicitude, culpabilidade; Crimes contra a pessoa — homicídio, lesão, calúnia',
  emoji_principal:'🔒', materia:'Direito Penal',
  materias:[{ nome:'Direito Penal', emoji:'🔒', horas:4, cor:'rose',
    topicos:['Revisão de teoria do crime — fato típico, ilicitude, culpabilidade',
               'Crimes contra a pessoa — homicídio, lesão, calúnia',
               'Crimes contra o patrimônio — furto, roubo, estelionato',
               'Crimes contra a Adm. Pública — peculato, corrupção',
               'Legislação penal especial — Maria da Penha, Drogas'] }],
  flashcards:[],
  checklist:[
  {id:'d113_c1',texto:'Revisão de teoria do crime — fato típico, ilicitude, culpabilidade',feito:false},
  {id:'d113_c2',texto:'Crimes contra a pessoa — homicídio, lesão, calúnia',feito:false},
  {id:'d113_c3',texto:'Crimes contra o patrimônio — furto, roubo, estelionato',feito:false},
  {id:'d113_c4',texto:'Crimes contra a Adm. Pública — peculato, corrupção',feito:false},
  {id:'d113_c5',texto:'Legislação penal especial — Maria da Penha, Drogas',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[19]||null, lei_seca:[] },

// DIA 114 — Ética Profissional
{ dia:114, semana:19,
  titulo:'Revisão Final — Ética Profissional',
  descricao:'Revisão de atividades privativas e jus postulandi; Mandato, honorários e sigilo profissional',
  emoji_principal:'⚖️', materia:'Ética Profissional',
  materias:[{ nome:'Ética Profissional', emoji:'⚖️', horas:4, cor:'lavender',
    topicos:['Revisão de atividades privativas e jus postulandi',
               'Mandato, honorários e sigilo profissional',
               'Infrações disciplinares — rol e sanções',
               'Incompatibilidades e impedimentos',
               'Questões mais cobradas OAB — Ética'] }],
  flashcards:[],
  checklist:[
  {id:'d114_c1',texto:'Revisão de atividades privativas e jus postulandi',feito:false},
  {id:'d114_c2',texto:'Mandato, honorários e sigilo profissional',feito:false},
  {id:'d114_c3',texto:'Infrações disciplinares — rol e sanções',feito:false},
  {id:'d114_c4',texto:'Incompatibilidades e impedimentos',feito:false},
  {id:'d114_c5',texto:'Questões mais cobradas OAB — Ética',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[19]||null, lei_seca:[] },

// DIA 115 — Revisão Final
{ dia:115, semana:20,
  titulo:'Simulado Completo — 80 Questões',
  descricao:'Simulado completo com 80 questões cronometrado (2h30); Revisão dos erros do simulado',
  emoji_principal:'↻', materia:'Revisão Final',
  materias:[{ nome:'Revisão Final', emoji:'↻', horas:4, cor:'lavender',
    topicos:['Simulado completo com 80 questões cronometrado (2h30)',
               'Revisão dos erros do simulado',
               'Leitura das súmulas mais cobradas',
               'Revisão de lei seca dos principais artigos',
               'Técnica de prova — gestão de tempo'] }],
  flashcards:[],
  checklist:[
  {id:'d115_c1',texto:'Simulado completo com 80 questões cronometrado (2h30)',feito:false},
  {id:'d115_c2',texto:'Revisão dos erros do simulado',feito:false},
  {id:'d115_c3',texto:'Leitura das súmulas mais cobradas',feito:false},
  {id:'d115_c4',texto:'Revisão de lei seca dos principais artigos',feito:false},
  {id:'d115_c5',texto:'Técnica de prova — gestão de tempo',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[20]||null, lei_seca:[] },

// DIA 116 — Revisão Final
{ dia:116, semana:20,
  titulo:'Revisão — Processo Civil e Administrativo',
  descricao:'Questões OAB — Proc. Civil (30 questões); Questões OAB — Administrativo (30 questões)',
  emoji_principal:'↻', materia:'Revisão Final',
  materias:[{ nome:'Revisão Final', emoji:'↻', horas:4, cor:'lavender',
    topicos:['Questões OAB — Proc. Civil (30 questões)',
               'Questões OAB — Administrativo (30 questões)',
               'Revisão de recursos no CPC',
               'Revisão de atos administrativos e poderes',
               'Flashcards das súmulas STF/STJ'] }],
  flashcards:[],
  checklist:[
  {id:'d116_c1',texto:'Questões OAB — Proc. Civil (30 questões)',feito:false},
  {id:'d116_c2',texto:'Questões OAB — Administrativo (30 questões)',feito:false},
  {id:'d116_c3',texto:'Revisão de recursos no CPC',feito:false},
  {id:'d116_c4',texto:'Revisão de atos administrativos e poderes',feito:false},
  {id:'d116_c5',texto:'Flashcards das súmulas STF/STJ',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[20]||null, lei_seca:[] },

// DIA 117 — Revisão Final
{ dia:117, semana:20,
  titulo:'Revisão — Civil, Trabalho e Empresarial',
  descricao:'Questões OAB — Civil (30 questões); Questões OAB — Trabalho (30 questões)',
  emoji_principal:'↻', materia:'Revisão Final',
  materias:[{ nome:'Revisão Final', emoji:'↻', horas:4, cor:'lavender',
    topicos:['Questões OAB — Civil (30 questões)',
               'Questões OAB — Trabalho (30 questões)',
               'Revisão de contratos e responsabilidade civil',
               'Revisão de CLT — jornada, rescisão, férias',
               'Revisão de títulos de crédito e falência'] }],
  flashcards:[],
  checklist:[
  {id:'d117_c1',texto:'Questões OAB — Civil (30 questões)',feito:false},
  {id:'d117_c2',texto:'Questões OAB — Trabalho (30 questões)',feito:false},
  {id:'d117_c3',texto:'Revisão de contratos e responsabilidade civil',feito:false},
  {id:'d117_c4',texto:'Revisão de CLT — jornada, rescisão, férias',feito:false},
  {id:'d117_c5',texto:'Revisão de títulos de crédito e falência',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[20]||null, lei_seca:[] },

// DIA 118 — Revisão Final
{ dia:118, semana:20,
  titulo:'Revisão — Penal, Proc. Penal e Tributário',
  descricao:'Questões OAB — Penal (30 questões); Questões OAB — Tributário (30 questões)',
  emoji_principal:'↻', materia:'Revisão Final',
  materias:[{ nome:'Revisão Final', emoji:'↻', horas:4, cor:'lavender',
    topicos:['Questões OAB — Penal (30 questões)',
               'Questões OAB — Tributário (30 questões)',
               'Revisão de crimes em espécie mais cobrados',
               'Revisão de princípios tributários e imunidades',
               'Revisão de prisão e liberdade provisória'] }],
  flashcards:[],
  checklist:[
  {id:'d118_c1',texto:'Questões OAB — Penal (30 questões)',feito:false},
  {id:'d118_c2',texto:'Questões OAB — Tributário (30 questões)',feito:false},
  {id:'d118_c3',texto:'Revisão de crimes em espécie mais cobrados',feito:false},
  {id:'d118_c4',texto:'Revisão de princípios tributários e imunidades',feito:false},
  {id:'d118_c5',texto:'Revisão de prisão e liberdade provisória',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[20]||null, lei_seca:[] },

// DIA 119 — Revisão Final
{ dia:119, semana:20,
  titulo:'Revisão — Ética, Matérias Especiais e Simulado',
  descricao:'Questões OAB — Ética (30 questões); Revisão de todos os simulados anteriores',
  emoji_principal:'↻', materia:'Revisão Final',
  materias:[{ nome:'Revisão Final', emoji:'↻', horas:4, cor:'lavender',
    topicos:['Questões OAB — Ética (30 questões)',
               'Revisão de todos os simulados anteriores',
               'Leitura rápida das pegadinhas de banca',
               '500 Dicas — revisão turbo',
               'Descanso e preparação mental'] }],
  flashcards:[],
  checklist:[
  {id:'d119_c1',texto:'Questões OAB — Ética (30 questões)',feito:false},
  {id:'d119_c2',texto:'Revisão de todos os simulados anteriores',feito:false},
  {id:'d119_c3',texto:'Leitura rápida das pegadinhas de banca',feito:false},
  {id:'d119_c4',texto:'500 Dicas — revisão turbo',feito:false},
  {id:'d119_c5',texto:'Descanso e preparação mental',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[20]||null, lei_seca:[] },

// DIA 120 — Revisão Final
{ dia:120, semana:20,
  titulo:'Véspera da Prova — Revisão Final',
  descricao:'Revisão dos flashcards mais importantes; 50 súmulas mais cobradas — leitura rápida',
  emoji_principal:'↻', materia:'Revisão Final',
  materias:[{ nome:'Revisão Final', emoji:'↻', horas:4, cor:'lavender',
    topicos:['Revisão dos flashcards mais importantes',
               '50 súmulas mais cobradas — leitura rápida',
               'Verificar documentos e local de prova',
               'Revisão rápida — Ética tem maior peso (10%)',
               'Descanso, alimentação e boa noite de sono'] }],
  flashcards:[],
  checklist:[
  {id:'d120_c1',texto:'Revisão dos flashcards mais importantes',feito:false},
  {id:'d120_c2',texto:'50 súmulas mais cobradas — leitura rápida',feito:false},
  {id:'d120_c3',texto:'Verificar documentos e local de prova',feito:false},
  {id:'d120_c4',texto:'Revisão rápida — Ética tem maior peso (10%)',feito:false},
  {id:'d120_c5',texto:'Descanso, alimentação e boa noite de sono',feito:false}
  ],
  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[20]||null, lei_seca:[] }

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
