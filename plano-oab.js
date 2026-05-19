// ============================================
// OAB 1ª FASE · Plano de Estudos — 60 Dias
// 1 Jun → 30 Jul 2026 · 4h/dia · 2-3 matérias
// ============================================

const PLANO_OAB = [

// ════════════════════════════════════════════
// BLOCO 1 — BASE (Dias 1–10)
// ════════════════════════════════════════════

{ dia:1, titulo:"Ética · Órgãos e Legislação", descricao:"Estrutura orgânica da OAB, natureza jurídica e sistema eleitoral", emoji_principal:"⚖️",
  materias:[
    { nome:"Ética Profissional", emoji:"⚖️", horas:2.5, cor:"rose",
      topicos:["Legislação e natureza jurídica da OAB (sui generis, ADI 3.026)","Conselho Federal, Seccionais, Subseções — composição e tipo de voto","Eleições e Mandatos: requisitos, duração, reeleição"] },
    { nome:"Direito Constitucional", emoji:"🏛️", horas:1.5, cor:"lavender",
      topicos:["Poder Constituinte Originário e Derivado","Eficácia das normas: plena, contida, limitada"] }
  ],
  checklist:[
    {id:"c1-1",texto:"Ler teoria: Ética — Órgãos e Legislação (1h30)"},
    {id:"c1-2",texto:"Ler teoria: Ética — Eleições e Mandatos (1h)"},
    {id:"c1-3",texto:"Ler teoria: Constitucional — Poder Constituinte (1h30)"},
    {id:"c1-4",texto:"Resolver 8 questões de Ética"},
    {id:"c1-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"ADI 3.026/DF · STF", texto:"A OAB é um serviço público independente, categoria ímpar no direito brasileiro. Não se sujeita ao TCU." },
  incidencia:87, arquivo:"dia-01", lei_seca:["Lei 8.906/94 arts. 1-15"] },

{ dia:2, titulo:"Constitucional · Direitos Fundamentais + Penal · Lei Penal", descricao:"Princípios fundamentais, direitos individuais e aplicação da lei penal no tempo e espaço", emoji_principal:"🏛️",
  materias:[
    { nome:"Direito Constitucional", emoji:"🏛️", horas:2, cor:"lavender",
      topicos:["Princípios fundamentais arts. 1-4 CF","Teoria geral dos Direitos Fundamentais: dimensões, características, destinatários","Vida, igualdade, liberdades e inviolabilidade do domicílio"] },
    { nome:"Direito Penal", emoji:"⚔️", horas:2, cor:"rose",
      topicos:["Lei Penal no Tempo: lex gravior, lex mitior, abolitio criminis","Territorialidade e extraterritorialidade (condicionada/incondicionada)","Lugar do crime (ubiquidade) vs. tempo do crime (atividade)"] }
  ],
  checklist:[
    {id:"c2-1",texto:"Ler teoria: Constitucional — Princípios e DFs (2h)"},
    {id:"c2-2",texto:"Ler teoria: Penal — Lei Penal no Tempo/Espaço (2h)"},
    {id:"c2-3",texto:"Resolver 6 questões de Constitucional"},
    {id:"c2-4",texto:"Resolver 6 questões de Penal"},
    {id:"c2-5",texto:"Revisar resumo do Dia 1"}
  ],
  sumula:{ sigla:"Súmula 711 · STF", texto:"A lei penal mais grave aplica-se ao crime continuado ou permanente, se vigente antes da cessação da continuidade ou da permanência." },
  incidencia:74, arquivo:"dia-02", lei_seca:["CP arts. 1-12","CF/88 arts. 1-5"] },

{ dia:3, titulo:"Civil · Parte Geral + Penal · Iter Criminis", descricao:"Pessoa natural, bens, negócio jurídico e teoria do iter criminis", emoji_principal:"📜",
  materias:[
    { nome:"Direito Civil", emoji:"📜", horas:2, cor:"champagne",
      topicos:["Pessoa natural: capacidade, incapacidade absoluta/relativa, emancipação","Bens jurídicos: imóveis, móveis, fungíveis, consumíveis, bem de família","Negócio jurídico: planos, defeitos (erro, dolo, coação, lesão, estado perigo), invalidade","Prescrição e decadência: conceito, prazo, suspensão, interrupção"] },
    { nome:"Direito Penal", emoji:"⚔️", horas:2, cor:"rose",
      topicos:["Iter criminis: cogitação, preparação, execução, consumação","Tentativa: perfeita/imperfeita, pena","Desistência voluntária, arrependimento eficaz, arrependimento posterior","Crime doloso e culposo; crimes omissivos próprios e impróprios"] }
  ],
  checklist:[
    {id:"c3-1",texto:"Ler teoria: Civil — Parte Geral (2h)"},
    {id:"c3-2",texto:"Ler teoria: Penal — Iter Criminis (2h)"},
    {id:"c3-3",texto:"Resolver 6 questões de Civil"},
    {id:"c3-4",texto:"Resolver 6 questões de Penal"},
    {id:"c3-5",texto:"Revisar Ética do Dia 1 (15min)"}
  ],
  sumula:{ sigla:"Art. 14 CP", texto:"Diz-se o crime tentado, quando, iniciada a execução, não se consuma por circunstâncias alheias à vontade do agente." },
  incidencia:71, arquivo:"dia-03", lei_seca:["CC arts. 1-78","CP arts. 13-25"] },

{ dia:4, titulo:"Processo Penal · IP e Ação Penal + Trabalho · Relação de Emprego", descricao:"Inquérito policial, ação penal e fundamentos da relação de emprego", emoji_principal:"📋",
  materias:[
    { nome:"Direito Processual Penal", emoji:"📋", horas:2, cor:"sage",
      topicos:["Inquérito Policial: natureza, características, peças, prazo, arquivamento","ANPP — Acordo de Não Persecução Penal: requisitos, não cabimento","Ação Penal: pública (condicionada/incondicionada) e privada; condições de procedibilidade","Competência e jurisdição: regras, critérios, conexão e continência"] },
    { nome:"Direito do Trabalho", emoji:"⚙️", horas:2, cor:"champagne",
      topicos:["Relação de emprego vs. relação de trabalho: distinção","CTPS: obrigatoriedade, anotações, sanções","Empregado e empregador: conceitos, poderes do empregador","Terceirização e trabalho temporário; contrato de trabalho: tipos e alteração contratual"] }
  ],
  checklist:[
    {id:"c4-1",texto:"Ler teoria: Processo Penal — IP e Ação Penal (2h)"},
    {id:"c4-2",texto:"Ler teoria: Trabalho — Relação de Emprego (2h)"},
    {id:"c4-3",texto:"Resolver 6 questões de Processo Penal"},
    {id:"c4-4",texto:"Resolver 5 questões de Trabalho"},
    {id:"c4-5",texto:"Revisar Penal do Dia 2 (15min)"}
  ],
  sumula:{ sigla:"Súmula 331 · TST", texto:"A contratação de trabalhadores por empresa interposta é ilegal, formando-se o vínculo diretamente com o tomador dos serviços, salvo no caso de trabalho temporário." },
  incidencia:68, arquivo:"dia-04", lei_seca:["CPP arts. 4-24","CLT arts. 2-9"] },

{ dia:5, titulo:"Ética · Inscrição e Atividades Privativas + Constitucional · Direitos Políticos", descricao:"Inscrição na OAB, atividades exclusivas do advogado e direitos políticos", emoji_principal:"⚖️",
  materias:[
    { nome:"Ética Profissional", emoji:"⚖️", horas:2, cor:"rose",
      topicos:["Inscrição: condição de advogado, exame OAB, inscrição suplementar","Cancelamento, licenciamento e suspensão da inscrição","Atividades privativas do advogado: postulação, consultoria","Advogado empregado: jornada, benefícios, sigilo"] },
    { nome:"Direito Constitucional", emoji:"🏛️", horas:2, cor:"lavender",
      topicos:["Direitos políticos: voto, elegibilidade, inelegibilidade (art. 14)","Partidos políticos: criação, fusão, dissolução, fidelidade","Federalismo: conceito, repartição de competências (arts. 21-30)","Noções de intervenção federal (art. 34)"] }
  ],
  checklist:[
    {id:"c5-1",texto:"Ler teoria: Ética — Inscrição (1h30)"},
    {id:"c5-2",texto:"Ler teoria: Constitucional — Políticos e Federalismo (2h)"},
    {id:"c5-3",texto:"Resolver 8 questões de Ética"},
    {id:"c5-4",texto:"Resolver 6 questões de Constitucional"},
    {id:"c5-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Art. 8º EOAB", texto:"A condição de advogado se adquire com a INSCRIÇÃO na OAB — não com a aprovação no Exame da Ordem." },
  incidencia:78, arquivo:"dia-05", lei_seca:["Lei 8.906/94 arts. 8-14","CF/88 arts. 14-17"] },

{ dia:6, titulo:"Civil · Obrigações Teoria Geral + Penal · Excludentes", descricao:"Teoria das obrigações e causas excludentes de tipicidade, ilicitude e culpabilidade", emoji_principal:"📜",
  materias:[
    { nome:"Direito Civil", emoji:"📜", horas:2, cor:"champagne",
      topicos:["Obrigações de dar, fazer e não fazer: conceito e espécies","Obrigações alternativas, facultativas, divisíveis, indivisíveis","Obrigações solidárias ativas e passivas: características, efeitos","Transmissão das obrigações: cessão de crédito, cessão de débito"] },
    { nome:"Direito Penal", emoji:"⚔️", horas:2, cor:"rose",
      topicos:["Erro de tipo essencial e acidental; erro de proibição","Coação moral irresistível e obediência hierárquica","Excludentes de ilicitude: estado de necessidade, legítima defesa, estrito cumprimento, exercício regular","Imputabilidade: enfermidade mental, embriaguez completa e acidental"] }
  ],
  checklist:[
    {id:"c6-1",texto:"Ler teoria: Civil — Obrigações Teoria Geral (2h)"},
    {id:"c6-2",texto:"Ler teoria: Penal — Excludentes (2h)"},
    {id:"c6-3",texto:"Resolver 6 questões de Civil"},
    {id:"c6-4",texto:"Resolver 6 questões de Penal"},
    {id:"c6-5",texto:"Revisar DFs do Dia 2 (15min)"}
  ],
  sumula:{ sigla:"Art. 23 CP", texto:"Não há crime quando o agente pratica o fato em: estado de necessidade; legítima defesa; estrito cumprimento do dever legal; exercício regular de direito." },
  incidencia:70, arquivo:"dia-06", lei_seca:["CC arts. 233-286","CP arts. 18-28"] },

{ dia:7, titulo:"Processo Trabalho · Teoria Geral + Constitucional · Competências e Intervenção", descricao:"Organização da JT, competência e repartição constitucional de competências", emoji_principal:"⚙️",
  materias:[
    { nome:"Direito Processual do Trabalho", emoji:"⚙️", horas:2, cor:"champagne",
      topicos:["Teoria geral do Processo do Trabalho","Organização e competência da JT: TRT, TST","Partes e procuradores; custas e justiça gratuita","Petição inicial, contestação e audiência trabalhista; provas"] },
    { nome:"Direito Constitucional", emoji:"🏛️", horas:2, cor:"lavender",
      topicos:["Competências exclusivas, privativas, comuns e concorrentes (arts. 21-24)","Intervenção federal: hipóteses, procedimento (arts. 34-36)","Estado de defesa e estado de sítio: pressupostos, efeitos (arts. 136-141)"] }
  ],
  checklist:[
    {id:"c7-1",texto:"Ler teoria: Processo Trabalho (2h)"},
    {id:"c7-2",texto:"Ler teoria: Constitucional — Competências e Intervenção (2h)"},
    {id:"c7-3",texto:"Resolver 5 questões de Processo Trabalho"},
    {id:"c7-4",texto:"Resolver 6 questões de Constitucional"},
    {id:"c7-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Art. 114 CF", texto:"Compete à Justiça do Trabalho processar e julgar as ações oriundas da relação de trabalho, abrangidos os entes de direito público externo e da administração pública direta e indireta." },
  incidencia:64, arquivo:"dia-07", lei_seca:["CLT arts. 643-769","CF/88 arts. 21-24"] },

{ dia:8, titulo:"Processo Penal · Provas e Prisões + Trabalho · Jornada", descricao:"Sistema probatório, prisões cautelares e jornada de trabalho", emoji_principal:"📋",
  materias:[
    { nome:"Direito Processual Penal", emoji:"📋", horas:2, cor:"sage",
      topicos:["Provas: sistema de valoração, princípio da ampla defesa, prova ilícita","Prisão em flagrante: conceito, espécies, relaxamento","Prisão preventiva: fundamentos, prazo, revogação","Medidas cautelares diversas; medidas assecuratórias patrimoniais"] },
    { nome:"Direito do Trabalho", emoji:"⚙️", horas:2, cor:"champagne",
      topicos:["Jornada de trabalho: normal, extraordinária, banco de horas","Horas extras: requisitos, pagamento, limitação","Hora noturna reduzida e adicional noturno","Intervalos intrajornada e interjornada; sobreaviso e prontidão"] }
  ],
  checklist:[
    {id:"c8-1",texto:"Ler teoria: Processo Penal — Provas e Prisões (2h)"},
    {id:"c8-2",texto:"Ler teoria: Trabalho — Jornada (2h)"},
    {id:"c8-3",texto:"Resolver 6 questões de Processo Penal"},
    {id:"c8-4",texto:"Resolver 5 questões de Trabalho"},
    {id:"c8-5",texto:"Revisar Civil — Obrigações do Dia 6 (15min)"}
  ],
  sumula:{ sigla:"SV 11 · STF", texto:"Só é lícito o uso de algemas em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, por parte do preso ou de terceiros." },
  incidencia:67, arquivo:"dia-08", lei_seca:["CPP arts. 155-250","CLT arts. 57-75"] },

{ dia:9, titulo:"Constitucional · Legislativo + Ética · Honorários e Sociedade", descricao:"Poder Legislativo, processo legislativo e honorários advocatícios", emoji_principal:"🏛️",
  materias:[
    { nome:"Direito Constitucional", emoji:"🏛️", horas:2, cor:"lavender",
      topicos:["Estrutura e composição do Legislativo (arts. 44-57)","Processo legislativo: espécies normativas, PL ordinário, emendas","Medidas provisórias: pressupostos, vedações, trancamento","Veto e sanção presidencial; decreto legislativo e resoluções"] },
    { nome:"Ética Profissional", emoji:"⚖️", horas:2, cor:"rose",
      topicos:["Honorários contratuais, arbitrados e de sucumbência","Honorários na execução; cobrança; tabela da OAB","Sociedade de advogados: registro, espécies, responsabilidade","Procuração e mandato: substabelecimento, revogação, renúncia; advocacia pro bono"] }
  ],
  checklist:[
    {id:"c9-1",texto:"Ler teoria: Constitucional — Legislativo e Processo Legislativo (2h)"},
    {id:"c9-2",texto:"Ler teoria: Ética — Honorários e Sociedade (2h)"},
    {id:"c9-3",texto:"Resolver 6 questões de Constitucional"},
    {id:"c9-4",texto:"Resolver 8 questões de Ética"},
    {id:"c9-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Súmula 306 · STJ", texto:"Os honorários advocatícios devem ser compensados quando houver sucumbência recíproca, assegurado o direito autônomo do advogado à execução do saldo." },
  incidencia:72, arquivo:"dia-09", lei_seca:["CF/88 arts. 44-75","Lei 8.906/94 arts. 22-27"] },

{ dia:10, titulo:"Civil · Obrigações Adimplemento e Extinção + Penal · Imputabilidade e Concurso", descricao:"Extinção das obrigações e concurso de pessoas no direito penal", emoji_principal:"📜",
  materias:[
    { nome:"Direito Civil", emoji:"📜", horas:2, cor:"champagne",
      topicos:["Adimplemento: pagamento, lugar, tempo, imputação, quitação","Extinção: consignação, sub-rogação, dação em pagamento, novação, compensação, confusão, remissão","Inadimplemento: mora, perdas e danos, multa, correção, juros","Cláusula penal: função, espécies, limites"] },
    { nome:"Direito Penal", emoji:"⚔️", horas:2, cor:"rose",
      topicos:["Imputabilidade: enfermidade mental (semi-imputabilidade), menoridade, embriaguez","Concurso de pessoas: autoria, coautoria, participação, comunicabilidade","Punibilidade e extinção: anistia, graça, indulto, prescrição (espécies)"] }
  ],
  checklist:[
    {id:"c10-1",texto:"Ler teoria: Civil — Extinção das Obrigações (2h)"},
    {id:"c10-2",texto:"Ler teoria: Penal — Imputabilidade e Concurso (2h)"},
    {id:"c10-3",texto:"Resolver 6 questões de Civil"},
    {id:"c10-4",texto:"Resolver 6 questões de Penal"},
    {id:"c10-5",texto:"Revisão e questões semana 1 (30min)"}
  ],
  sumula:{ sigla:"Art. 107 CP", texto:"Extingue-se a punibilidade: I — pela morte do agente; II — pela anistia, graça ou indulto; IV — pela prescrição, decadência ou perempção..." },
  incidencia:65, arquivo:"dia-10", lei_seca:["CC arts. 304-420","CP arts. 29-120"] },

// ════════════════════════════════════════════
// BLOCO 2 — EXPANSÃO (Dias 11–20)
// ════════════════════════════════════════════

{ dia:11, titulo:"Processo Penal · Procedimentos e Júri + Trabalho · Remuneração", descricao:"Procedimentos penais, Tribunal do Júri e sistema remuneratório trabalhista", emoji_principal:"📋",
  materias:[
    { nome:"Direito Processual Penal", emoji:"📋", horas:2, cor:"sage",
      topicos:["Procedimento comum ordinário: fase instrutória, alegações, sentença","Procedimento sumário e sumaríssimo (JECrim)","Tribunal do Júri: 1ª fase (pronúncia/impronúncia/absolvição sumária) e 2ª fase","Procedimentos especiais: crimes funcionais, Lei de Drogas"] },
    { nome:"Direito do Trabalho", emoji:"⚙️", horas:2, cor:"champagne",
      topicos:["Remuneração vs salário: distinção, parcelas salariais e não salariais","Salário mínimo, piso salarial, equiparação salarial","Adicionais: hora extra, noturno, insalubridade, periculosidade","Comissões, gorjetas, gratificações; desconto salarial; FGTS"] }
  ],
  checklist:[
    {id:"c11-1",texto:"Ler teoria: Processo Penal — Procedimentos e Júri (2h)"},
    {id:"c11-2",texto:"Ler teoria: Trabalho — Remuneração (2h)"},
    {id:"c11-3",texto:"Resolver 6 questões de Processo Penal"},
    {id:"c11-4",texto:"Resolver 5 questões de Trabalho"},
    {id:"c11-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Súmula 228 · TST", texto:"É inadmissível a equanimidade salarial em atividade de chefia." },
  incidencia:63, arquivo:"dia-11", lei_seca:["CPP arts. 394-497","CLT arts. 76-130"] },

{ dia:12, titulo:"Constitucional · Executivo e Funções Essenciais + Ética · Infrações Disciplinares", descricao:"Poder Executivo, funções essenciais à justiça e processo disciplinar da OAB", emoji_principal:"🏛️",
  materias:[
    { nome:"Direito Constitucional", emoji:"🏛️", horas:2, cor:"lavender",
      topicos:["Poder Executivo: composição, atribuições do Presidente (art. 84)","Responsabilidade presidencial: crime comum vs. crime de responsabilidade","Funções essenciais à justiça: MP, DPU, AGU, Advocacia (arts. 127-135)","Art. 133 CF: indispensabilidade e inviolabilidade do advogado"] },
    { nome:"Ética Profissional", emoji:"⚖️", horas:2, cor:"rose",
      topicos:["Responsabilidades do advogado: civil, criminal, disciplinar","Infrações disciplinares: rol do art. 34 EOAB","Sanções disciplinares: censura, suspensão, exclusão, multa","Processo disciplinar: instauração, instrução, julgamento; prescrição"] }
  ],
  checklist:[
    {id:"c12-1",texto:"Ler teoria: Constitucional — Executivo (2h)"},
    {id:"c12-2",texto:"Ler teoria: Ética — Infrações e Processo Disciplinar (2h)"},
    {id:"c12-3",texto:"Resolver 6 questões de Constitucional"},
    {id:"c12-4",texto:"Resolver 8 questões de Ética"},
    {id:"c12-5",texto:"Revisar Constitucional — DFs do Dia 2 (15min)"}
  ],
  sumula:{ sigla:"Art. 34, I EOAB", texto:"Constitui infração disciplinar: I — exercer a profissão, quando impedido de fazê-lo, ou facilitar, por qualquer meio, o seu exercício aos não inscritos, proibidos ou suspensos." },
  incidencia:74, arquivo:"dia-12", lei_seca:["CF/88 arts. 76-92","Lei 8.906/94 arts. 34-43"] },

{ dia:13, titulo:"Civil · Contratos Teoria Geral + Penal · Aplicação da Pena", descricao:"Teoria geral dos contratos civis e dosimetria da pena", emoji_principal:"📜",
  materias:[
    { nome:"Direito Civil", emoji:"📜", horas:2, cor:"champagne",
      topicos:["Contratos: formação (proposta, aceitação), lugar e tempo de celebração","Defeitos contratuais: lesão, estado de perigo, resolução, resilição","Contratos em espécie: compra e venda (preço, sinal), locação, comodato, mandato, fiança, empreitada","Extinção dos contratos: resolução por inadimplemento, cláusula resolutória"] },
    { nome:"Direito Penal", emoji:"⚔️", horas:2, cor:"rose",
      topicos:["Dosimetria da pena: 3 fases (art. 68 CP)","1ª fase: circunstâncias judiciais art. 59; 2ª fase: agravantes/atenuantes; 3ª fase: causas de aumento/diminuição","Regime inicial de cumprimento: fechado, semiaberto, aberto","Penas restritivas de direitos: espécies, requisitos, conversão; Pena de multa"] }
  ],
  checklist:[
    {id:"c13-1",texto:"Ler teoria: Civil — Contratos Teoria Geral (2h)"},
    {id:"c13-2",texto:"Ler teoria: Penal — Aplicação da Pena (2h)"},
    {id:"c13-3",texto:"Resolver 6 questões de Civil"},
    {id:"c13-4",texto:"Resolver 6 questões de Penal"},
    {id:"c13-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Art. 68 CP", texto:"A pena-base será fixada atendendo ao critério do art. 59 deste Código; em seguida serão consideradas as circunstâncias atenuantes e agravantes; por último, as causas de diminuição e de aumento." },
  incidencia:66, arquivo:"dia-13", lei_seca:["CC arts. 421-480","CP arts. 59-76"] },

{ dia:14, titulo:"Tributário · Fundamentos + Processo Trabalho · Recursos", descricao:"Conceito de tributo, espécies, princípios, imunidades e recursos trabalhistas", emoji_principal:"💰",
  materias:[
    { nome:"Direito Tributário", emoji:"💰", horas:2, cor:"champagne",
      topicos:["Conceito e natureza do tributo (art. 3 CTN)","Espécies tributárias: impostos, taxas, contribuição melhoria, empréstimos compulsórios, contribuições especiais","Competência tributária: privativa, comum, residual, extraordinária","Princípios: legalidade, anterioridade, irretroatividade, isonomia, capacidade contributiva, não confisco","Imunidades tributárias: recíproca, templos, partidos, sindicatos, jornais"] },
    { nome:"Direito Processual do Trabalho", emoji:"⚙️", horas:2, cor:"champagne",
      topicos:["Recurso Ordinário: cabimento, prazo, efeitos","Recurso de Revista: transcendência, conhecimento, julgamento","Agravo de Instrumento; Embargos de Declaração; Embargos ao TST","Agravo de Petição; Recurso Extraordinário trabalhista"] }
  ],
  checklist:[
    {id:"c14-1",texto:"Ler teoria: Tributário — Fundamentos (2h)"},
    {id:"c14-2",texto:"Ler teoria: Processo Trabalho — Recursos (2h)"},
    {id:"c14-3",texto:"Resolver 5 questões de Tributário"},
    {id:"c14-4",texto:"Resolver 5 questões de Processo Trabalho"},
    {id:"c14-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Art. 150, VI CF", texto:"Sem prejuízo de outras garantias asseguradas ao contribuinte, é vedado à União, aos Estados, ao DF e aos Municípios: VI — instituir impostos sobre: a) patrimônio, renda ou serviços, uns dos outros..." },
  incidencia:68, arquivo:"dia-14", lei_seca:["CTN arts. 1-10","CF/88 arts. 145-162"] },

{ dia:15, titulo:"Administrativo · Organização e Princípios + Civil · Responsabilidade Civil", descricao:"Organização administrativa, princípios da Administração e responsabilidade civil", emoji_principal:"🏛️",
  materias:[
    { nome:"Direito Administrativo", emoji:"🏛️", horas:2, cor:"lavender",
      topicos:["Organização: Adm. direta e indireta; autarquias, fundações, EP, SEM, paraestatais","OAB no contexto do Adm. (ADI 3.026: não é autarquia)","Princípios: LIMPE (legalidade, impessoalidade, moralidade, publicidade, eficiência)","Princípios implícitos: proporcionalidade, razoabilidade, segurança jurídica, autotutela","Poderes da Administração: vinculado, discricionário, regulamentar, hierárquico, polícia"] },
    { nome:"Direito Civil", emoji:"📜", horas:2, cor:"champagne",
      topicos:["Responsabilidade civil subjetiva: culpa, nexo causal, dano","Responsabilidade civil objetiva: teoria do risco; Código Civil e CC especiais","Responsabilidade por fato de terceiro; do incapaz; solidariedade","Indenização: extensão, dano moral, lucro cessante; excludentes"] }
  ],
  checklist:[
    {id:"c15-1",texto:"Ler teoria: Administrativo — Organização e Princípios (2h)"},
    {id:"c15-2",texto:"Ler teoria: Civil — Responsabilidade Civil (2h)"},
    {id:"c15-3",texto:"Resolver 5 questões de Administrativo"},
    {id:"c15-4",texto:"Resolver 6 questões de Civil"},
    {id:"c15-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Art. 37, §6º CF", texto:"As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso..." },
  incidencia:67, arquivo:"dia-15", lei_seca:["CC arts. 927-954","CF/88 art. 37"] },

{ dia:16, titulo:"Processo Penal · Recursos e HC + Trabalho · Aviso Prévio e Rescisão", descricao:"Sistema recursal penal, habeas corpus e rescisão do contrato de trabalho", emoji_principal:"📋",
  materias:[
    { nome:"Direito Processual Penal", emoji:"📋", horas:2, cor:"sage",
      topicos:["RESE: hipóteses do art. 581 CPP","Apelação: cabimento, prazo, efeitos","Embargos infringentes e de nulidade; embargos de declaração","Habeas corpus: natureza, legitimidade, impetração, efeitos, cabimento; Mandado de segurança criminal"] },
    { nome:"Direito do Trabalho", emoji:"⚙️", horas:2, cor:"champagne",
      topicos:["Aviso prévio: prazo, proporcionalidade, indenização","Verbas rescisórias: cálculo por tipo de dispensa","Rescisão sem justa causa vs. com justa causa; dispensa por pedido","PDV, força maior, rescisão indireta, distrato, morte do empregador"] }
  ],
  checklist:[
    {id:"c16-1",texto:"Ler teoria: Processo Penal — Recursos e HC (2h)"},
    {id:"c16-2",texto:"Ler teoria: Trabalho — Rescisão e Aviso Prévio (2h)"},
    {id:"c16-3",texto:"Resolver 6 questões de Processo Penal"},
    {id:"c16-4",texto:"Resolver 5 questões de Trabalho"},
    {id:"c16-5",texto:"Revisar Ética — Infrações do Dia 12 (15min)"}
  ],
  sumula:{ sigla:"Súmula 441 · STJ", texto:"A falta grave cometida pelo preso no curso da execução penal interrompe o prazo para a obtenção da progressão no regime de cumprimento da pena, o livramento condicional e outros benefícios." },
  incidencia:65, arquivo:"dia-16", lei_seca:["CPP arts. 574-667","CLT arts. 477-502"] },

{ dia:17, titulo:"Constitucional · Judiciário e Controle Difuso + Civil · Posse e Propriedade", descricao:"Poder Judiciário, STF, controle difuso e direitos reais", emoji_principal:"🏛️",
  materias:[
    { nome:"Direito Constitucional", emoji:"🏛️", horas:2, cor:"lavender",
      topicos:["Poder Judiciário: organização, garantias e vedações","STF: composição, competências originárias e recursais","STJ, Justiça Federal, Estadual, do Trabalho, Eleitoral e Militar","Controle difuso de constitucionalidade: cláusula reserva plenário (SV 10)"] },
    { nome:"Direito Civil", emoji:"📜", horas:2, cor:"champagne",
      topicos:["Posse: conceito, teorias (subjetiva/objetiva), classificação, aquisição, efeitos","Ações possessórias: reintegração, manutenção, interdito proibitório","Propriedade: conceito, função social, restrições","Usucapião: espécies (ordinária, extraordinária, especial urbana/rural, indígena, coletiva)"] }
  ],
  checklist:[
    {id:"c17-1",texto:"Ler teoria: Constitucional — Judiciário (2h)"},
    {id:"c17-2",texto:"Ler teoria: Civil — Posse e Propriedade (2h)"},
    {id:"c17-3",texto:"Resolver 6 questões de Constitucional"},
    {id:"c17-4",texto:"Resolver 6 questões de Civil"},
    {id:"c17-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"SV 10 · STF", texto:"Viola a cláusula de reserva de plenário (CF, artigo 97) a decisão de órgão fracionário de tribunal que, embora não declare expressamente a inconstitucionalidade de lei ou ato normativo do poder público, afasta sua incidência no todo ou em parte." },
  incidencia:69, arquivo:"dia-17", lei_seca:["CF/88 arts. 92-126","CC arts. 1.196-1.368"] },

{ dia:18, titulo:"Tributário · Crédito Tributário + Administrativo · Agentes Públicos", descricao:"Obrigação tributária, lançamento, responsabilidade e regime jurídico dos agentes", emoji_principal:"💰",
  materias:[
    { nome:"Direito Tributário", emoji:"💰", horas:2, cor:"champagne",
      topicos:["Obrigação tributária: principal e acessória; fato gerador; sujeito ativo/passivo","Crédito tributário: constituição e lançamento (de ofício, por declaração, homologação)","Responsabilidade tributária: contribuinte vs. responsável; responsabilidade dos sócios (art. 135 CTN)","Substituição tributária para frente e para trás"] },
    { nome:"Direito Administrativo", emoji:"🏛️", horas:2, cor:"lavender",
      topicos:["Agentes públicos: categorias (políticos, servidores, particulares colaboração)","Cargos públicos: provimento, vacância, remoção, redistribuição","Concurso público: prazo de validade, direito de nomeação, aprovados além das vagas","Estabilidade, disponibilidade, teto remuneratório, acumulação lícita de cargos (art. 37 CF)"] }
  ],
  checklist:[
    {id:"c18-1",texto:"Ler teoria: Tributário — Crédito e Responsabilidade (2h)"},
    {id:"c18-2",texto:"Ler teoria: Administrativo — Agentes Públicos (2h)"},
    {id:"c18-3",texto:"Resolver 5 questões de Tributário"},
    {id:"c18-4",texto:"Resolver 5 questões de Administrativo"},
    {id:"c18-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Súmula 331 · STF", texto:"O prazo de validade do concurso público pode ser prorrogado uma vez, por igual período." },
  incidencia:64, arquivo:"dia-18", lei_seca:["CTN arts. 113-138","CF/88 arts. 37-38"] },

{ dia:19, titulo:"Constitucional · Controle Concentrado + Ética · Publicidade e TAC", descricao:"ADI, ADC, ADPF e regras de publicidade profissional do advogado", emoji_principal:"🏛️",
  materias:[
    { nome:"Direito Constitucional", emoji:"🏛️", horas:2, cor:"lavender",
      topicos:["Controle concentrado: ADI (legitimados, efeitos erga omnes e vinculante, medida cautelar)","ADC, ADPF (subsidiariedade, efeito vinculante), ADO","Súmula vinculante: elaboração, revisão, cancelamento (art. 103-A CF)","Efeitos das decisões: ex nunc vs. ex tunc; modulação de efeitos"] },
    { nome:"Ética Profissional", emoji:"⚖️", horas:2, cor:"rose",
      topicos:["Sigilo profissional: conceito, extensão, exceções","Publicidade profissional: vedações (CED arts. 39-47), o que é permitido","TAC — Termo de Ajustamento de Conduta: Provimento 200/2020","Incompatibilidade (art. 28 EOAB) e impedimento (art. 30 EOAB): distinção e efeitos"] }
  ],
  checklist:[
    {id:"c19-1",texto:"Ler teoria: Constitucional — Controle Concentrado (2h)"},
    {id:"c19-2",texto:"Ler teoria: Ética — Publicidade e TAC (2h)"},
    {id:"c19-3",texto:"Resolver 6 questões de Constitucional"},
    {id:"c19-4",texto:"Resolver 6 questões de Ética"},
    {id:"c19-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Art. 103-A CF", texto:"O Supremo Tribunal Federal poderá, de ofício ou por provocação, mediante decisão de dois terços dos seus membros, após reiteradas decisões sobre matéria constitucional, aprovar súmula que, a partir de sua publicação na imprensa oficial, terá efeito vinculante em relação aos demais órgãos do Poder Judiciário e à administração pública direta e indireta..." },
  incidencia:71, arquivo:"dia-19", lei_seca:["CF/88 arts. 102-103-A","CED arts. 39-47"] },

{ dia:20, titulo:"Civil · Direito de Família + Processo Trabalho · Execução", descricao:"Casamento, regimes de bens, filiação e execução trabalhista", emoji_principal:"📜",
  materias:[
    { nome:"Direito Civil", emoji:"📜", horas:2, cor:"champagne",
      topicos:["Casamento: impedimentos absolutos e causas suspensivas, celebração, habilitação","Regimes de bens: comunhão parcial (regra), comunhão universal, separação, participação final","Parentesco: consanguíneo, civil (adoção), afinidade; alimentos: espécies, requisitos","Dissolução: separação, divórcio, morte; guarda compartilhada vs. unilateral"] },
    { nome:"Direito Processual do Trabalho", emoji:"⚙️", horas:2, cor:"champagne",
      topicos:["Execução trabalhista: título executivo, liquidação","Penhora e avaliação; adjudicação, alienação","Embargos à execução; exceção de pré-executividade","Ação rescisória trabalhista: hipóteses, prazo, competência TST"] }
  ],
  checklist:[
    {id:"c20-1",texto:"Ler teoria: Civil — Família (2h)"},
    {id:"c20-2",texto:"Ler teoria: Processo Trabalho — Execução (2h)"},
    {id:"c20-3",texto:"Resolver 6 questões de Civil"},
    {id:"c20-4",texto:"Resolver 5 questões de Processo Trabalho"},
    {id:"c20-5",texto:"Revisão e questões semana 2 (30min)"}
  ],
  sumula:{ sigla:"Súmula 197 · STJ", texto:"O divórcio direto pode ser concedido sem que haja prévia partilha dos bens." },
  incidencia:63, arquivo:"dia-20", lei_seca:["CC arts. 1.511-1.783","CLT arts. 876-900"] },

// ════════════════════════════════════════════
// BLOCO 3 — NOVOS TEMAS (Dias 21–30)
// ════════════════════════════════════════════

{ dia:21, titulo:"Processo Civil · Competência e Tutelas + Penal · Concurso de Crimes e Prescrição", descricao:"Competência processual civil, tutelas provisórias e extinção da punibilidade", emoji_principal:"⚖️",
  materias:[
    { nome:"Direito Processual Civil", emoji:"⚖️", horas:2, cor:"rose",
      topicos:["Competência: absoluta vs. relativa; critérios (matéria, pessoa, valor, território, funcional)","Conexão, continência, litisconsórcio necessário e facultativo; litispendência","Partes: capacidade, legitimidade, representação; procuradores e honorários","Tutelas provisórias: urgência (cautelar/antecipada) e evidência; estabilização"] },
    { nome:"Direito Penal", emoji:"⚔️", horas:2, cor:"rose",
      topicos:["Concurso material (art. 69), formal (art. 70) e continuado (art. 71 CP)","Extinção da punibilidade: causas e efeitos (art. 107 CP)","Prescrição: da pretensão punitiva (antes/depois da sentença) e da pretensão executória","Prescrição retroativa, intercorrente, virtual; causas suspensivas e interruptivas"] }
  ],
  checklist:[
    {id:"c21-1",texto:"Ler teoria: Processo Civil — Competência e Tutelas (2h)"},
    {id:"c21-2",texto:"Ler teoria: Penal — Concurso e Prescrição (2h)"},
    {id:"c21-3",texto:"Resolver 6 questões de Processo Civil"},
    {id:"c21-4",texto:"Resolver 6 questões de Penal"},
    {id:"c21-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Súmula 452 · STF", texto:"A extinção da punibilidade, por qualquer de suas causas, não impede a imposição de pena acessória." },
  incidencia:66, arquivo:"dia-21", lei_seca:["CPC arts. 42-68","CP arts. 69-120"] },

{ dia:22, titulo:"Administrativo · Atos Administrativos + Tributário · Extinção e Exclusão do Crédito", descricao:"Teoria dos atos administrativos e extinção/exclusão do crédito tributário", emoji_principal:"🏛️",
  materias:[
    { nome:"Direito Administrativo", emoji:"🏛️", horas:2, cor:"lavender",
      topicos:["Atos administrativos: conceito, atributos (presunção legalidade, imperatividade, autoexecutoriedade, tipicidade)","Elementos: competência, forma, motivo, objeto, finalidade","Vícios: incompetência, vício de forma, desvio de finalidade, ilegalidade do objeto","Extinção dos atos: anulação, revogação, cassação, caducidade; convalidação"] },
    { nome:"Direito Tributário", emoji:"💰", horas:2, cor:"champagne",
      topicos:["Suspensão da exigibilidade: moratória, parcelamento, depósito, liminar, tutela antecipada","Extinção do crédito: pagamento, compensação, transação, remissão, prescrição e decadência","Exclusão do crédito: isenção e anistia — distinção e efeitos","Certidão negativa e positiva com efeito de negativa; responsabilidade por certidão falsa"] }
  ],
  checklist:[
    {id:"c22-1",texto:"Ler teoria: Administrativo — Atos Adm. (2h)"},
    {id:"c22-2",texto:"Ler teoria: Tributário — Extinção e Exclusão (2h)"},
    {id:"c22-3",texto:"Resolver 5 questões de Administrativo"},
    {id:"c22-4",texto:"Resolver 5 questões de Tributário"},
    {id:"c22-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Súmula 346 · STF", texto:"A Administração Pública pode declarar a nulidade dos seus próprios atos." },
  incidencia:62, arquivo:"dia-22", lei_seca:["CTN arts. 151-182","CF/88 art. 37"] },

{ dia:23, titulo:"Processo Civil · Petição Inicial e Contestação + Penal · Crimes Contra a Vida", descricao:"Fase postulatória do processo civil e crimes contra a pessoa", emoji_principal:"⚖️",
  materias:[
    { nome:"Direito Processual Civil", emoji:"⚖️", horas:2, cor:"rose",
      topicos:["Petição inicial: requisitos (art. 319 CPC), indeferimento, improcedência liminar","Emenda à petição inicial; distribuição e registro","Contestação: impugnação específica, ônus da impugnação; revelia e seus efeitos","Audiência de mediação/conciliação; reconvenção; réplica"] },
    { nome:"Direito Penal", emoji:"⚔️", horas:2, cor:"rose",
      topicos:["Homicídio simples, qualificado (causas qualificadoras), privilegiado","Feminicídio: conceito, qualificadora","Induzimento ao suicídio; infanticídio; aborto (modalidades, punibilidade)","Lesões corporais: simples, grave, gravíssima, dolosa/culposa; concurso agentes"] }
  ],
  checklist:[
    {id:"c23-1",texto:"Ler teoria: Processo Civil — Fase Postulatória (2h)"},
    {id:"c23-2",texto:"Ler teoria: Penal — Crimes Contra a Vida (2h)"},
    {id:"c23-3",texto:"Resolver 6 questões de Processo Civil"},
    {id:"c23-4",texto:"Resolver 6 questões de Penal"},
    {id:"c23-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Súmula 722 · STF", texto:"São da competência legislativa da União a definição dos crimes de responsabilidade e o estabelecimento das respectivas normas de processo e julgamento." },
  incidencia:65, arquivo:"dia-23", lei_seca:["CPC arts. 319-341","CP arts. 121-129"] },

{ dia:24, titulo:"Empresarial · Fundamentos + Tributário · Garantias e Administração Tributária", descricao:"Direito empresarial: empresário, estabelecimento, e administração tributária", emoji_principal:"🏢",
  materias:[
    { nome:"Direito Empresarial", emoji:"🏢", horas:2, cor:"champagne",
      topicos:["Empresário: conceito (art. 966 CC), atividade econômica organizada, requisitos","Estabelecimento empresarial: elementos, trespasse, proteção, ponto comercial","Registro empresarial: JUCRE, obrigatoriedade, atos registráveis","Livros comerciais e fiscais: diário, razão, obrigatoriedade, eficácia probatória","Nome empresarial: firma, denominação, proteção"] },
    { nome:"Direito Tributário", emoji:"💰", horas:2, cor:"champagne",
      topicos:["Garantias e privilégios do crédito tributário (arts. 183-193 CTN)","Dívida ativa: inscrição, certidão (CDA), presunção de liquidez e certeza","Execução fiscal (Lei 6.830/80): penhora, embargos, SELIC","Administração tributária: fiscalização, sigilo fiscal, dever de informar"] }
  ],
  checklist:[
    {id:"c24-1",texto:"Ler teoria: Empresarial — Fundamentos (2h)"},
    {id:"c24-2",texto:"Ler teoria: Tributário — Garantias e Administração (2h)"},
    {id:"c24-3",texto:"Resolver 4 questões de Empresarial"},
    {id:"c24-4",texto:"Resolver 5 questões de Tributário"},
    {id:"c24-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Art. 966 CC", texto:"Considera-se empresário quem exerce profissionalmente atividade econômica organizada para a produção ou a circulação de bens ou de serviços." },
  incidencia:60, arquivo:"dia-24", lei_seca:["CC arts. 966-980","CTN arts. 183-208"] },

{ dia:25, titulo:"Processo Civil · Sentença e Coisa Julgada + Administrativo · Improbidade", descricao:"Decisão judicial, trânsito em julgado e improbidade administrativa", emoji_principal:"⚖️",
  materias:[
    { nome:"Direito Processual Civil", emoji:"⚖️", horas:2, cor:"rose",
      topicos:["Sentença: conceito, requisitos (relatório, fundamentação, dispositivo)","Coisa julgada: material e formal; limites objetivos e subjetivos","Ação rescisória: hipóteses (art. 966 CPC), prazo 2 anos, competência","Liquidação de sentença: cálculo, arbitramento, artigos"] },
    { nome:"Direito Administrativo", emoji:"🏛️", horas:2, cor:"lavender",
      topicos:["Improbidade administrativa Lei 8.429/92 (com alterações Lei 14.230/21)","Atos de improbidade: arts. 9 (enriquecimento ilícito), 10 (lesão ao erário), 11 (violação princípios)","Sujeitos ativo e passivo; sanções (suspensão direitos políticos, multa, ressarcimento, proibição contratos)","Ação de improbidade: legitimidade exclusiva MP, elemento subjetivo dolo, prescrição 8 anos"] }
  ],
  checklist:[
    {id:"c25-1",texto:"Ler teoria: Processo Civil — Sentença e CJ (2h)"},
    {id:"c25-2",texto:"Ler teoria: Administrativo — Improbidade (2h)"},
    {id:"c25-3",texto:"Resolver 6 questões de Processo Civil"},
    {id:"c25-4",texto:"Resolver 5 questões de Administrativo"},
    {id:"c25-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Art. 1º Lei 8.429/92", texto:"O sistema de responsabilização por atos de improbidade administrativa visa a responsabilizar os agentes públicos que praticarem atos ímprobos no exercício de mandato, cargo, emprego ou função na administração pública direta ou indireta..." },
  incidencia:63, arquivo:"dia-25", lei_seca:["CPC arts. 485-512","Lei 8.429/92 arts. 1-12"] },

{ dia:26, titulo:"Civil · Direito das Sucessões + Penal · Crimes Patrimoniais", descricao:"Sucessão legítima, testamentária e crimes contra o patrimônio", emoji_principal:"📜",
  materias:[
    { nome:"Direito Civil", emoji:"📜", horas:2, cor:"champagne",
      topicos:["Abertura da sucessão: princípio da saisine, transmissão automática, comoriência","Herdeiros legítimos vs. testamentários; herdeiros necessários; legítima","Aceitação e renúncia; exclusão da sucessão por indignidade e deserdação","Sucessão legítima: ordem da vocação (art. 1829 CC); Testamento: espécies, codicilo, rompimento"] },
    { nome:"Direito Penal", emoji:"⚔️", horas:2, cor:"rose",
      topicos:["Furto: simples, qualificado, privilegiado, de uso","Roubo: conceito, latrocínio, extorsão, extorsão mediante sequestro","Estelionato: figuras, qualificadoras, condição de procedibilidade","Apropriação indébita; receptação; dano; esbulho possessório"] }
  ],
  checklist:[
    {id:"c26-1",texto:"Ler teoria: Civil — Sucessões (2h)"},
    {id:"c26-2",texto:"Ler teoria: Penal — Crimes Patrimoniais (2h)"},
    {id:"c26-3",texto:"Resolver 6 questões de Civil"},
    {id:"c26-4",texto:"Resolver 6 questões de Penal"},
    {id:"c26-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Art. 1.829 CC", texto:"A sucessão legítima defere-se na ordem seguinte: I — aos descendentes, em concorrência com o cônjuge sobrevivente; II — aos ascendentes, em concorrência com o cônjuge; III — ao cônjuge sobrevivente; IV — aos colaterais." },
  incidencia:64, arquivo:"dia-26", lei_seca:["CC arts. 1.784-1.996","CP arts. 155-183"] },

{ dia:27, titulo:"Empresarial · Sociedades + Administrativo · Controle da Administração", descricao:"Sociedades empresárias (ltda e SA) e controle externo da Administração Pública", emoji_principal:"🏢",
  materias:[
    { nome:"Direito Empresarial", emoji:"🏢", horas:2, cor:"champagne",
      topicos:["Sociedade Limitada: capital social, cotas, sócio e responsabilidade, administração, dissolução","Sociedade Anônima: capital social, ações (ordinárias/preferenciais), órgãos (AGO, CA, Diretoria, CF)","Desconsideração da personalidade jurídica: teoria maior e menor","Operações societárias: fusão, incorporação, cisão, transformação"] },
    { nome:"Direito Administrativo", emoji:"🏛️", horas:2, cor:"lavender",
      topicos:["Controle interno: autotutela, supervisão ministerial; controle externo: TCU, CNJ","Controle judicial: mandado de segurança individual/coletivo, ação popular, ACP","Processo administrativo federal (Lei 9.784/99): princípios, fases, recursos, prazos","Serviços públicos: conceito, princípios, formas de prestação, concessão e permissão"] }
  ],
  checklist:[
    {id:"c27-1",texto:"Ler teoria: Empresarial — Sociedades (2h)"},
    {id:"c27-2",texto:"Ler teoria: Administrativo — Controle (2h)"},
    {id:"c27-3",texto:"Resolver 4 questões de Empresarial"},
    {id:"c27-4",texto:"Resolver 5 questões de Administrativo"},
    {id:"c27-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Súmula 392 · STJ", texto:"A Fazenda Pública pode substituir a certidão de dívida ativa (CDA) até a prolação da sentença de embargos, quando se tratar de correção de erro material ou formal, vedada a modificação do sujeito passivo da execução." },
  incidencia:60, arquivo:"dia-27", lei_seca:["CC arts. 1.052-1.195","Lei 9.784/99"] },

{ dia:28, titulo:"Processo Civil · Recursos + Penal · Crimes Funcionais e Honra", descricao:"Sistema recursal no CPC e crimes contra a Administração Pública e honra", emoji_principal:"⚖️",
  materias:[
    { nome:"Direito Processual Civil", emoji:"⚖️", horas:2, cor:"rose",
      topicos:["Teoria geral dos recursos: requisitos de admissibilidade, efeitos (devolutivo, suspensivo, regressivo)","Apelação: cabimento, prazo, processamento, julgamento, efeitos","Agravo de instrumento: hipóteses do art. 1.015 CPC; agravo interno","Embargos de declaração; REsp e RExt; juizado especial cível"] },
    { nome:"Direito Penal", emoji:"⚔️", horas:2, cor:"rose",
      topicos:["Crimes contra honra: calúnia, difamação, injúria — distinção, imunidade do advogado","Crimes contra a fé pública: moeda falsa, falsidade documental, falsidade ideológica","Crimes contra a Administração Pública: peculato, concussão, corrupção passiva/ativa, prevaricação","Crimes contra a Administração da Justiça: favorecimento pessoal/real, falso testemunho, fraude processual"] }
  ],
  checklist:[
    {id:"c28-1",texto:"Ler teoria: Processo Civil — Recursos (2h)"},
    {id:"c28-2",texto:"Ler teoria: Penal — Crimes Funcionais e Honra (2h)"},
    {id:"c28-3",texto:"Resolver 6 questões de Processo Civil"},
    {id:"c28-4",texto:"Resolver 6 questões de Penal"},
    {id:"c28-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Art. 7º, §2º EOAB", texto:"O advogado tem imunidade profissional, não constituindo injúria, difamação ou desacato puníveis qualquer manifestação de sua parte, no exercício de sua atividade, em juízo ou fora dele..." },
  incidencia:63, arquivo:"dia-28", lei_seca:["CPC arts. 994-1.044","CP arts. 138-154, 312-359-H"] },

{ dia:29, titulo:"Trabalho · Estabilidade e Direito Coletivo + Empresarial · Títulos de Crédito", descricao:"Estabilidades trabalhistas, sindicatos, negociação coletiva e títulos de crédito", emoji_principal:"⚙️",
  materias:[
    { nome:"Direito do Trabalho", emoji:"⚙️", horas:2, cor:"champagne",
      topicos:["Estabilidade: gestante, CIPA, doença ocupacional, acidente trabalho, dirigente sindical","FGTS: natureza, depósito, saque, rescisão, complementação","Saúde e segurança: conceito, NRs, acidente trabalho vs. doença ocupacional","Direito coletivo: sindicatos (unicidade, contribuição), negociação coletiva, CCT vs. ACT, greve"] },
    { nome:"Direito Empresarial", emoji:"🏢", horas:2, cor:"champagne",
      topicos:["Princípios cambiários: cartularidade, literalidade, autonomia, abstração","Letra de câmbio: aceite, endosso, aval, protesto","Nota promissória: emissão, requisitos; duplicata: emissão, aceite ficto, protesto","Cheque: conceitos, tipos, sustação, prazos de apresentação e de prescrição"] }
  ],
  checklist:[
    {id:"c29-1",texto:"Ler teoria: Trabalho — Estabilidade e Direito Coletivo (2h)"},
    {id:"c29-2",texto:"Ler teoria: Empresarial — Títulos de Crédito (2h)"},
    {id:"c29-3",texto:"Resolver 5 questões de Trabalho"},
    {id:"c29-4",texto:"Resolver 4 questões de Empresarial"},
    {id:"c29-5",texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:"Súmula 443 · TST", texto:"Presume-se discriminatória a despedida de empregado portador do vírus HIV ou de outra doença grave que cause estigma ou preconceito. Inválido o ato, o empregado tem direito à reintegração no emprego." },
  incidencia:62, arquivo:"dia-29", lei_seca:["CLT arts. 543-549","Lei Cambiária"] },

{ dia:30, titulo:"Administrativo · Licitação + Tributário · Impostos em Espécie", descricao:"Licitação (Lei 14.133/21), contratos administrativos e impostos em espécie", emoji_principal:"🏛️",
  materias:[
    { nome:"Direito Administrativo", emoji:"🏛️", horas:2, cor:"lavender",
      topicos:["Licitação Lei 14.133/21: princípios, modalidades (pregão, concorrência, concurso, leilão, diálogo competitivo)","Dispensa e inexigibilidade de licitação: hipóteses","Contratos administrativos: cláusulas exorbitantes, equilíbrio econômico-financeiro, alteração unilateral, rescisão","Bens públicos: classificação (dominicais, de uso especial, uso comum do povo); afetação e desafetação"] },
    { nome:"Direito Tributário", emoji:"💰", horas:2, cor:"champagne",
      topicos:["Impostos federais: II, IE, IR, IPI, IOF, ITR","Impostos estaduais: ICMS (fato gerador, contribuinte, imunidades, LC 87/96), ITCMD, IPVA","Impostos municipais: ISS (fato gerador, LC 116/03), IPTU (função social), ITBI","Contribuições especiais: PIS, COFINS, CSLL, INSS patronal; Simples Nacional"] }
  ],
  checklist:[
    {id:"c30-1",texto:"Ler teoria: Administrativo — Licitação e Contratos (2h)"},
    {id:"c30-2",texto:"Ler teoria: Tributário — Impostos em Espécie (2h)"},
    {id:"c30-3",texto:"Resolver 5 questões de Administrativo"},
    {id:"c30-4",texto:"Resolver 5 questões de Tributário"},
    {id:"c30-5",texto:"Revisão e questões semana 3 (30min)"}
  ],
  sumula:{ sigla:"Súmula Vinculante 52 · STF", texto:"Ainda quando alugado a terceiros, permanece imune ao IPTU o imóvel pertencente a qualquer das entidades referidas pelo art. 150, VI, c, da Constituição Federal, desde que o valor dos aluguéis seja aplicado nas atividades para as quais tais entidades foram constituídas." },
  incidencia:61, arquivo:"dia-30", lei_seca:["Lei 14.133/21","CTN arts. 153-162"] },

// ════════════════════════════════════════════
// BLOCO 4 — MATÉRIAS SECUNDÁRIAS (Dias 31–40)
// ════════════════════════════════════════════

...[
  { d:31, t:"Previdenciário · RGPS e Contribuições + Eleitoral · Fundamentos", em:"🛡️",
    m1:"Direito Previdenciário", m1t:["Seguridade Social: conceito CF, saúde, assistência, previdência","RGPS: segurados obrigatórios (empregado, doméstico, contribuinte individual, avulso, segurado especial)","Segurados facultativos: conceito, vedações","Manutenção e perda da qualidade de segurado; dependentes: classes, concorrência","Salário de contribuição: conceito, limites, parcelas integrantes e não integrantes"],
    m2:"Direito Eleitoral", m2t:["Princípios do Direito Eleitoral","Sistema eleitoral: majoritário (1 e 2 turnos), proporcional, misto","Organização e competência da JE: TSE, TRE, Juízes Eleitorais","Partidos políticos: criação, registro, fidelidade, financiamento"],
    sumS:"Art. 194 CF", sumT:"A seguridade social compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade, destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência social.", inc:52 },
  { d:32, t:"Financeiro · Orçamento e LRF + Empresarial · Falência e Recuperação", em:"💰",
    m1:"Direito Financeiro", m1t:["Atividade financeira do Estado: receitas, despesas, crédito público","Orçamento: princípios (legalidade, anualidade, universalidade, exclusividade, não vinculação)","PPA, LDO, LOA: conceitos e inter-relação","Lei de Responsabilidade Fiscal (LC 101/00): princípios, metas fiscais, transparência"],
    m2:"Direito Empresarial", m2t:["Recuperação judicial: requisitos, legitimidade, stay period, plano, cram down","Plano especial de recuperação para ME/EPP; recuperação extrajudicial","Falência: requerimento, decretação, efeitos, arrecadação, classificação credores","Encerramento e extinção das obrigações do falido"],
    sumS:"Art. 167, §3º CF", sumT:"A abertura de crédito extraordinário somente será admitida para atender a despesas imprevisíveis e urgentes, como as decorrentes de guerra, comoção interna ou calamidade pública...", inc:50 },
  { d:33, t:"Direitos Humanos · Sistemas Internacionais + Internacional · Tratados", em:"🌍",
    m1:"Direitos Humanos", m1t:["Conceito, teorias (universalismo vs. relativismo) e dimensões","ONU: estrutura, DUDH (1948): conteúdo, natureza jurídica","Pacto Internacional DCP (1966) e Pacto DESC (1966)","Sistema interamericano: OEA, CIDH (petições individuais, medidas cautelares), Corte IDH (competência, reparações)","Convenção Americana (PSJCR): direitos civis e políticos, restrições"],
    m2:"Direito Internacional", m2t:["Direito dos Tratados: celebração, vigência, reservas, interpretação, extinção","LINDB no DIP: personalidade, casamento, domicílio, obrigações, sucessões, competência JB","Homologação de decisão estrangeira: STJ, LINDB art. 15; Apostila de Haia","DI Público: personalidade jurídica, fontes (tratados, costumes, princípios)"],
    sumS:"Art. 5º, §2º CF", sumT:"Os direitos e garantias expressos nesta Constituição não excluem outros decorrentes do regime e dos princípios por ela adotados, ou dos tratados internacionais em que a República Federativa do Brasil seja parte.", inc:55 },
  { d:34, t:"ECA · Direitos e Ato Infracional + CDC · Responsabilidade e Proteção", em:"👶",
    m1:"Direito da Criança e do Adolescente (ECA)", m1t:["Direitos fundamentais: vida, liberdade, educação, saúde, profissionalização","Família substituta: guarda, tutela, adoção (processo, habilitação)","Medidas de proteção (art. 101); medidas socioeducativas (arts. 112-125)","Ato infracional: garantias processuais; internação: critérios e limites; Conselho Tutelar"],
    m2:"Direito do Consumidor (CDC)", m2t:["Relação de consumo: conceito de consumidor (teorias) e fornecedor","Responsabilidade por fato do produto/serviço (defeito): objetiva, inversão ônus, excludentes","Responsabilidade por vício do produto/serviço: solidária, prazo decadencial","Práticas comerciais: oferta (vinculante), publicidade abusiva/enganosa, práticas abusivas (art. 39 CDC)"],
    sumS:"Art. 227 CF", sumT:"É dever da família, da sociedade e do Estado assegurar à criança, ao adolescente e ao jovem, com absoluta prioridade, o direito à vida, à saúde, à alimentação, à educação, ao lazer, à profissionalização, à cultura, à dignidade...", inc:57 },
  { d:35, t:"Ambiental · Fundamentos e Crimes + Filosofia do Direito", em:"🌿",
    m1:"Direito Ambiental", m1t:["CF art. 225: direito ao meio ambiente, princípio do poluidor-pagador, educação ambiental","Competências ambientais: legislativa e administrativa","PNMA (Lei 6.938/81): instrumentos (EIA/RIMA, licenciamento trifásico, SISNAMA, CONAMA)","Crimes ambientais Lei 9.605/98: responsabilidade penal da PJ (art. 3º), desconsideração, penas"],
    m2:"Filosofia do Direito", m2t:["Platão (idealismo), Aristóteles (teleologia, ética nicomaqueia)","Contratualistas: Hobbes (soberania absoluta), Locke (propriedade), Rousseau (vontade geral)","Kant: imperativo categórico, autonomia da vontade; Utilitarismo: Bentham/Mill","Positivismo jurídico: Kelsen (norma fundamental, escalonamento), Hart (regras primárias/secundárias)","Jusnaturalismo; Dworkin (direitos como trunfos, integridade); Miguel Reale (tridimensionalismo)"],
    sumS:"Art. 225, §3º CF", sumT:"As condutas e atividades consideradas lesivas ao meio ambiente sujeitarão os infratores, pessoas físicas ou jurídicas, a sanções penais e administrativas, independentemente da obrigação de reparar os danos causados.", inc:53 },
  { d:36, t:"Processo Penal · Execução Penal + Processo Civil · Execução e Procedimentos Especiais", em:"📋",
    m1:"Direito Processual Penal", m1t:["LEP: individualização da pena, direitos e deveres do preso","Regimes: fechado, semiaberto, aberto — requisitos e progressão/regressão","Remição, saída temporária, monitoramento eletrônico, prisão domiciliar","RDD — Regime Disciplinar Diferenciado: hipóteses, prazo; livramento condicional"],
    m2:"Direito Processual Civil", m2t:["Cumprimento de sentença: quantia certa (impugnação), obrigação de fazer/entregar","Ação de execução de título extrajudicial; embargos do executado; penhora e avaliação","Procedimentos especiais: ação de alimentos, possessórias, dissolução de sociedade","Ação monitória, consignação em pagamento, embargos de terceiro; juizado especial cível"],
    sumS:"Súmula 659 · STJ", sumT:"É possível a regressão cautelar de regime prisional, sem prévia oitiva do apenado, em caso de situação emergencial.", inc:60 },
  { d:37, t:"Previdenciário · Benefícios em Espécie + Eleitoral · Elegibilidade e Propaganda", em:"🛡️",
    m1:"Direito Previdenciário", m1t:["Auxílio por incapacidade temporária (auxílio-doença): carência, DID, cessação","Aposentadoria por incapacidade permanente (invalidez)","Aposentadoria programada, especial, PcD","Pensão por morte; salário-maternidade; BPC/LOAS (LOAS); salário-família; auxílio-acidente"],
    m2:"Direito Eleitoral", m2t:["Condições de elegibilidade (art. 14, §3º CF): alistamento, domicílio, filiação, idade","Inelegibilidades absolutas e relativas; LC 64/90: FICHA LIMPA","Propaganda eleitoral: início, meios lícitos, vedações, crimes de propaganda","Financiamento de campanha: doação, prestação de contas, aprovação/desaprovação"],
    sumS:"Art. 14, §9º CF", sumT:"Lei complementar estabelecerá outros casos de inelegibilidade e os prazos de sua cessação, a fim de proteger a probidade administrativa, a moralidade para o exercício de mandato, considerada a vida pregressa do candidato...", inc:50 },
  { d:38, t:"Direitos Humanos · Sistemas e Proteção + Internacional · Migração e Diplomacia", em:"🌍",
    m1:"Direitos Humanos", m1t:["CIDH: funções, petições individuais, medidas cautelares, relatórios, casos contenciosos","Corte IDH: jurisdição contenciosa e consultiva, reparações","PNDH 3: estrutura e eixos","Direitos especiais: idoso (Lei 10.741/03), PcD (Lei 13.146/15), igualdade racial (Lei 12.288/10), LGBTQIA+, refugiados"],
    m2:"Direito Internacional", m2t:["Lei de Migração (Lei 13.445/17): princípios, direitos e garantias do migrante","Documentos: visto, autorização residência","Retirada compulsória: deportação (irregular), expulsão (crime), extradição (cooperação), repatriação","Missões diplomáticas: imunidade de jurisdição e execução; privilégios consulares; Convenções de Viena"],
    sumS:"Súmula 420 · STJ", sumT:"Inadmissível, em mandado de segurança, o deferimento de efeito suspensivo a recurso especial interposto em mandado de segurança, pois o writ não admite dilação probatória.", inc:48 },
  { d:39, t:"CDC · Proteção Contratual e Defesa em Juízo + ECA · Crimes e Infrações", em:"👶",
    m1:"Direito do Consumidor", m1t:["Proteção contratual: cláusulas abusivas (art. 51 CDC, lista, não exaustiva)","Direito de arrependimento (art. 49): prazo 7 dias, devoluções, fora do estabelecimento","Garantia contratual e legal; cobrança de dívidas (art. 42 e 42-A)","Defesa do consumidor em juízo: ação civil pública, legitimidade, inversão ônus prova (art. 6º, VIII)"],
    m2:"Direito da Criança e do Adolescente", m2t:["Crimes praticados contra criança e adolescente: arts. 228-244-B ECA","Crimes de exploração sexual; corrupção de menores; abandono","Infrações administrativas: arts. 245-258 ECA","Sistema recursal ECA; competência das varas de infância; rol de prioridade absoluta"],
    sumS:"Art. 51 CDC", sumT:"São nulas de pleno direito, entre outras, as cláusulas contratuais relativas ao fornecimento de produtos e serviços que: I — impossibilitem, exonerem ou atenuem a responsabilidade do fornecedor por vícios de qualquer natureza dos produtos e serviços ou impliquem renúncia ou disposição de direitos...", inc:51 },
  { d:40, t:"Ambiental · Código Florestal e SNUC + Filosofia · Contemporâneos", em:"🌿",
    m1:"Direito Ambiental", m1t:["Código Florestal (Lei 12.651/12): APP (margens de rios, encostas, topo morro), reserva legal, CAR","SNUC (Lei 9.985/00): unidades de proteção integral vs. uso sustentável","Política Nacional Resíduos Sólidos (Lei 12.305/10): logística reversa, responsabilidade compartilhada","Política Nacional Mudança do Clima; recursos hídricos (Lei 9.433/97): outorga, cobrança"],
    m2:"Filosofia do Direito", m2t:["Rudolf von Ihering: luta pelo direito, interesse","Neil MacCormick: argumentação jurídica","John Rawls: véu da ignorância, princípios da justiça","Hannah Arendt: banalidade do mal, esfera pública, direito a ter direitos","Michel Foucault: poder-saber, biopoder, disciplina; Montesquieu: separação dos poderes"],
    sumS:"Art. 3º, I Lei 12.651/12", sumT:"Área de Preservação Permanente - APP: área protegida, coberta ou não por vegetação nativa, com a função ambiental de preservar os recursos hídricos, a paisagem, a estabilidade geológica e a biodiversidade...", inc:52 }
].map(x => ({
  dia: x.d, titulo: x.t, descricao: `${x.m1} e ${x.m2} — bloco de matérias secundárias`, emoji_principal: x.em,
  materias:[
    { nome:x.m1, emoji:x.em, horas:2, cor:"rose", topicos:x.m1t },
    { nome:x.m2, emoji:"📖", horas:2, cor:"lavender", topicos:x.m2t }
  ],
  checklist:[
    {id:`c${x.d}-1`,texto:`Ler teoria: ${x.m1.split(' ')[x.m1.split(' ').length-1]} (2h)`},
    {id:`c${x.d}-2`,texto:`Ler teoria: ${x.m2} (2h)`},
    {id:`c${x.d}-3`,texto:`Resolver 4 questões de ${x.m1.split(' ')[x.m1.split(' ').length-1]}`},
    {id:`c${x.d}-4`,texto:`Resolver 4 questões de ${x.m2.split(' ')[x.m2.split(' ').length-1]}`},
    {id:`c${x.d}-5`,texto:"Escrever resumo do dia"}
  ],
  sumula:{ sigla:x.sumS, texto:x.sumT },
  incidencia:x.inc, arquivo:`dia-${String(x.d).padStart(2,'0')}`, lei_seca:[]
})),

// ════════════════════════════════════════════
// BLOCO 5 — REVISÃO ATIVA (Dias 41–50)
// ════════════════════════════════════════════

...[
  {d:41,t:"Simulado 01 — 80 Questões Completo",tp:["Todas as matérias estudadas nos dias 1-40","80 questões no padrão FGV (5 horas)","Simular condições reais de prova: tempo, concentração","Não consultar material durante a prova"],isS:true},
  {d:42,t:"Correção Simulado 01 + Banco de Erros",tp:["Corrigir e analisar cada erro do simulado","Classificar erros: desatenção vs. desconhecimento","Registrar todos os erros no Banco de Erros","Identificar as 3 matérias com pior desempenho para reforço"]},
  {d:43,t:"Revisão Ética Profissional Completa",tp:["Rever Estatuto da OAB (Lei 8.906/94) artigo por artigo","Rever CED: publicidade, sigilo, honorários, infrações","Fazer 20 questões de Ética focadas em pegadinhas FGV","Revisar anotações do banco de erros de Ética"]},
  {d:44,t:"Revisão Constitucional Completa",tp:["Rever Poder Constituinte, eficácia normas, DFs (art. 5)","Rever organização do Estado: Legislativo, Executivo, Judiciário","Rever controle de constitucionalidade (difuso e concentrado)","20 questões de Constitucional — foco em temas mais cobrados"]},
  {d:45,t:"Revisão Direito Civil Completa",tp:["Rever Parte Geral: pessoa natural, NJ, bens, prescrição","Rever Direito das Obrigações e Contratos","Rever Responsabilidade Civil, Família e Sucessões","20 questões de Civil — foco em casos práticos FGV"]},
  {d:46,t:"Revisão Direito Penal Completo",tp:["Rever Parte Geral: iter criminis, excludentes, pena","Rever Parte Especial: crimes mais cobrados (vida, patrimônio, honra, funcionais)","Rever concurso de crimes, extinção punibilidade, prescrição","20 questões de Penal"]},
  {d:47,t:"Revisão Processo Civil + Processo Penal",tp:["Rever competência, tutelas, petição inicial, sentença, recursos CPC","Rever IP, ação penal, provas, prisões, procedimentos, recursos CPP","20 questões de Processo Civil + 20 de Processo Penal","Revisar banco de erros de ambas as matérias"]},
  {d:48,t:"Revisão Trabalho + Processo Trabalho",tp:["Rever relação de emprego, contrato, jornada, remuneração, rescisão","Rever estabilidade, FGTS, direito coletivo, saúde e segurança","Rever JT: competência, procedimento, recursos, execução","20 questões de Trabalho + 10 de Processo Trabalho"]},
  {d:49,t:"Revisão Tributário + Administrativo",tp:["Rever tributos: conceito, espécies, princípios, imunidades, crédito tributário","Rever organização adm., atos adm., agentes, licitação, contratos, improbidade","Rever impostos em espécie e execução fiscal","20 questões de Tributário + 15 de Administrativo"]},
  {d:50,t:"Revisão Empresarial + Todas as Secundárias",tp:["Rever Empresarial: empresário, sociedades, títulos, falência","Resumo de cada matéria secundária (DH, Internacional, Ambiental, ECA, CDC, Filosofia, Financeiro, Eleitoral, Previdenciário)","10 questões de cada: Empresarial + mix de secundárias","Revisão geral do banco de erros acumulado"]}
].map(x => ({
  dia:x.d, titulo:x.t, descricao: x.isS ? "Prova completa no padrão FGV — 80 questões — 5 horas" : "Sessão de revisão ativa + questões", emoji_principal:"🔁",
  materias:[{ nome: x.isS ? "Simulado Completo" : "Revisão", emoji: x.isS ? "📝" : "🔁", horas:4, cor:"rose", topicos:x.tp }],
  checklist: x.tp.slice(0,4).map((t,i) => ({id:`c${x.d}-${i+1}`,texto:t})).concat([{id:`c${x.d}-5`,texto:"Atualizar banco de erros e resumos"}]),
  sumula:{ sigla: x.isS ? "Meta" : "Revisão", texto: x.isS ? "Simule as condições reais da prova — ambiente silencioso, sem consultas, com cronômetro." : "A revisão ativa (se testar a si própria) é 3x mais eficaz do que a releitura passiva." },
  incidencia:80, arquivo: x.isS ? `dia-${String(x.d).padStart(2,'0')}-simulado` : `dia-${String(x.d).padStart(2,'0')}-revisao`, lei_seca:[]
})),

// ════════════════════════════════════════════
// BLOCO 6 — RETA FINAL (Dias 51–60)
// ════════════════════════════════════════════

...[
  {d:51,t:"Simulado 02 — 80 Questões Completo",tp:["Prova completa 80 questões padrão FGV","Atenção ao tempo: 5 horas, calcule 3,75 min/questão","Estratégia: responder todas, marcar as dúvidas, revisar ao final","Objetivo: superar o resultado do Simulado 01"],isS:true},
  {d:52,t:"Correção Simulado 02 + Reforço Pontos Críticos",tp:["Analisar cada erro do simulado 02","Comparar com erros do simulado 01: há padrão?","Reforçar intensamente as 3 matérias com pior desempenho","Atualizar banco de erros e fazer questões das matérias críticas"]},
  {d:53,t:"Revisão por Incidência — Últimos 5 Exames FGV",tp:["Analisar quais temas foram cobrados nos exames 38-42","Focar nos temas que aparecem em pelo menos 3 dos 5 últimos exames","Fazer questões específicas desses temas","Priorizar: Ética (10%), DFs CF, Contratos Civil, Crimes patrimoniais Penal"]},
  {d:54,t:"Lei Seca Essencial — CF, EOAB, CP, CLT",tp:["Art. 5º CF: ler todos os incisos e parágrafos (I-LXXVIII)","EOAB: arts. 1, 2, 7, 8, 22, 34, 36-38 e 43 (prazos prescricionais)","CP: arts. 1-12 (Parte Geral), 121-130 (vida e honra), 155-160 (patrimônio)","CLT: arts. 1-10, 29-31, 442-448, 457-467, 477-500"]},
  {d:55,t:"Pegadinhas Clássicas FGV por Matéria",tp:["Ética: OAB não é autarquia; inscrição ≠ aprovação; mandato 3 anos; Subseção ≥15 advogados","Constitucional: fundamentos vs. objetivos; reunião = notificação, não autorização; controle difuso = qualquer juiz","Civil: negócio jurídico: nulo ≠ anulável; prescrição ≠ decadência; usucapião não se declara, se reconhece","Penal: atividade ≠ ubiquidade; lei mais benéfica retroage SEMPRE; crime continuado → Súmula 711"]},
  {d:56,t:"Simulado 03 — 80 Questões Final",tp:["Prova final completa — simular o dia da prova OAB","Acordar cedo, ambientar-se como dia de prova","80 questões em 5h: disciplina máxima","Registrar todas as dúvidas para revisão final"],isS:true},
  {d:57,t:"Correção Simulado 03 + Reforço Final",tp:["Analisar erros do simulado 03","Foco nos erros que se repetiram em todos os 3 simulados","Questões cirúrgicas nos pontos críticos persistentes","Preparação mental: confiança baseada no trabalho realizado"]},
  {d:58,t:"Súmulas e Jurisprudência Recente",tp:["Súmulas STF aplicáveis à OAB: revisão das principais","Súmulas STJ em matéria civil e processual civil","Súmulas TST em matéria trabalhista","Jurisprudência recente: decisões OAB nos últimos 2 anos que alteraram entendimento"]},
  {d:59,t:"Revisão Leve + Descanso Estratégico",tp:["2 horas de revisão leve: reler apenas os resumos escritos","Rever banco de erros: apenas os erros mais graves","NÃO estudar conteúdo novo — apenas consolidar","Dormir bem, alimentar-se bem: performance cognitiva é física"]},
  {d:60,t:"🎉 Conclusão do Plano — Revisão de Confiança",tp:["Parabéns — 60 dias concluídos!","Revisão rápida de pontos-chave (máximo 2h)","Relembre sua motivação: por que você quer a OAB?","Confie no trabalho realizado. Você está preparada!"]}
].map(x => ({
  dia:x.d, titulo:x.t, descricao: x.isS ? "Simulado completo 80 questões padrão FGV — 5 horas" : "Bloco de reta final", emoji_principal: x.isS ? "📝" : "⭐",
  materias:[{ nome: x.isS ? "Simulado Completo" : "Reta Final", emoji: x.isS ? "📝" : "⭐", horas: x.isS ? 5 : 4, cor:"rose", topicos:x.tp }],
  checklist: x.tp.slice(0,4).map((t,i) => ({id:`c${x.d}-${i+1}`,texto:t})).concat([{id:`c${x.d}-5`,texto:"Marcar dia como concluído ✓"}]),
  sumula:{ sigla: x.isS ? "Atenção" : x.d === 60 ? "🌸 Você conseguiu!" : "Reta final", texto: x.isS ? "Estratégia de prova: questões fáceis primeiro, marque as difíceis, revise no final. Não deixe nenhuma em branco." : x.d === 60 ? "60 dias de dedicação. A OAB está esperando por você. Vai ser gigante, Ju!" : "Cada dia de revisão vale 3 de estudo passivo." },
  incidencia: x.isS ? 100 : 85, arquivo: x.isS ? `dia-${String(x.d).padStart(2,'0')}-simulado` : `dia-${String(x.d).padStart(2,'0')}`, lei_seca:[]
}))

];

// ── Funções auxiliares ──────────────────────

function getDadosDia(numDia) {
  return PLANO_OAB.find(d => d.dia === numDia) || null;
}

function getProgressoGeral() {
  const concluidos = PLANO_OAB.filter(d => {
    const p = obterDia(d.dia);
    return p && p.concluido === true;
  }).length;
  return { concluidos, total: 60, pct: Math.round((concluidos / 60) * 100) };
}
