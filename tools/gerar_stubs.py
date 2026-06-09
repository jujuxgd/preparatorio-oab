# -*- coding: utf-8 -*-
"""Substitui stubs dos dias 14-120 no plano-vde.js com dados reais do cronograma VDE."""
import sys

PLANO_PATH = r'C:\Users\julia\OneDrive\Desktop\files\plano-vde.js'
MARKER_CLOSE = ']; // ════ fim dos dias com conteúdo completo'
MARKER_FUNCS  = '// ── Funções auxiliares'

# Mapa: dia -> (materia, titulo, emoji, cor, [topicos])
SCHEDULE = {
  14:("Direito Constitucional","Remédios Constitucionais","🏛️","lavender",["Habeas Corpus — preventivo e repressivo, legitimidade e prazo","Habeas Data — recusa da autoridade, prazos 10/15/15 dias","Mandado de Segurança — individual e coletivo, prazo decadencial 120 dias","Mandado de Injunção — omissão normativa e efeitos concretos","Ação Popular — legitimidade, objeto e gratuidade"]),
  15:("Direito do Trabalho","Empregado e Empregador","⚙️","sage",["Conceito de empregado — 5 requisitos SHOPP","Conceito de empregador — empresa e equiparados (art. 2 CLT)","Empregador doméstico — LC 150/2015","Grupo econômico — responsabilidade solidária","Trabalhadores especiais — autônomo, avulso, eventual, estagiário"]),
  16:("Direito Civil","Negócio Jurídico","📜","lavender",["Plano da existência, validade e eficácia — Escada Ponteana","Elementos essenciais do negócio jurídico","Vícios do consentimento — erro, dolo, coação, estado de perigo, lesão","Vícios sociais — fraude contra credores e simulação","Invalidade — nulidade absoluta vs anulabilidade e prazos"]),
  17:("Direito Tributário","Competência Tributária","💰","gold",["Competência privativa — impostos exclusivos de cada ente","Competência comum — taxas e contribuições de melhoria","Competência residual da União — novos impostos (art. 154 I CF)","Competência extraordinária — imposto de guerra","Repartição de receitas tributárias — FPE, FPM, ICMS 25%"]),
  18:("Processo do Trabalho","Despesas Processuais e Recursos","⚡","sage",["Custas processuais — cálculo e responsabilidade","Honorários advocatícios na JT — cabimento e percentual","Gratuidade de justiça — declaração de hipossuficiência","Depósito recursal — prazo, valor e dispensa","Agravo de instrumento trabalhista — cabimento"]),
  19:("Direito Penal","Fato Típico e Ilicitude","🔒","rose",["Conduta — ação e omissão; dolo e culpa","Resultado — naturalístico e normativo","Nexo de causalidade — teoria da equivalência dos antecedentes","Tipicidade formal e material","Ilicitude — excludentes: estado de necessidade, legítima defesa, estrito cumprimento"]),
  20:("Ética Profissional","Inscrição na OAB e Sociedades de Advogados","⚖️","lavender",["Requisitos para inscrição na OAB (art. 8 EOAB)","Cancelamento e suspensão da inscrição","Sociedades de advogados — vedações e registro","Advogado empregado — garantias e vedações","Advocacia pública e Defensoria Pública"]),
  21:("Processo Civil","Partes, Procuradores e Litisconsórcio","📋","lavender",["Capacidade processual e representação (arts. 70-76 CPC)","Substituição processual e legitimação extraordinária","Litisconsórcio — facultativo, necessário, simples e unitário","Intervenção de terceiros — denunciação, chamamento ao processo","Tutela Provisória — urgência (cautelar/antecipada) e evidência"]),
  22:("Direito Empresarial","Direito Societário","🏢","gold",["Sociedade Simples vs Sociedade Empresária","Sociedade Limitada — quotas, administração e responsabilidade","Sociedade Anônima — tipos, ações, órgãos e dissolução","Desconsideração da PJ — Teoria Maior (CC) e Menor (CDC)","Dissolução, liquidação e extinção das sociedades"]),
  23:("Processo Penal","Competência","🔍","rose",["Competência pela natureza da infração — federal x estadual","Competência pelo lugar da infração — teoria do resultado","Competência por prerrogativa de função (foro privilegiado)","Conexão e continência — unidade de processo","Conflito de competência — STJ e STF"]),
  24:("Direito Administrativo","Organização da Administração Pública","🏛️","sage",["Administração Direta — União, Estados, Municípios, DF","Administração Indireta — Autarquias, Fundações, EPs, SEMs","Distinção EP x SEM — capital, falência, foro","Agências Reguladoras — regime, estabilidade e quarentena","Consórcios Públicos — Lei 11.107/05"]),
  25:("Direito Constitucional","Nacionalidade e Direitos Políticos","🏛️","lavender",["Brasileiros natos — art. 12 I CF (jus soli + jus sanguinis)","Brasileiros naturalizados — requisitos e distinções","Perda e reaquisição da nacionalidade","Direitos políticos — sufrágio universal, voto e alistamento","Inalistáveis e inelegíveis — art. 14 parágrafos 2 e 4 CF"]),
  26:("Direito do Trabalho","Alteração, Interrupção e Suspensão do Contrato","⚙️","sage",["Alteração lícita e ilícita do contrato (art. 468 CLT)","Jus variandi — poder de alterar condições dentro dos limites","Interrupção — remuneração mantida (férias, afastamento médico)","Suspensão — sem remuneração (licença sem vencimento, layoff)","Teletrabalho — retorno ao presencial e requisitos"]),
  27:("Direito Civil","Obrigações: Modalidades e Transmissão","📜","lavender",["Obrigações de dar, fazer e não fazer — efeitos","Obrigações alternativas e facultativas","Obrigações divisíveis, indivisíveis e solidárias","Cessão de crédito — forma e notificação ao devedor","Assunção de dívida — consentimento do credor"]),
  28:("Direito Tributário","Imunidades Tributárias","💰","gold",["Imunidade recíproca (art. 150 VI a) — entes federativos","Imunidade de templos (art. 150 VI b)","Imunidade de partidos, sindicatos, educação e assistência","Imunidade de livros, jornais e periódicos","Diferença entre imunidade e isenção"]),
  29:("Processo do Trabalho","Ação Trabalhista e Audiência","⚡","sage",["Reclamação trabalhista — petição inicial e jus postulandi","Resposta do reclamado — contestação e exceções","Audiência trabalhista — fases e tentativa de conciliação","Revelia e confissão ficta no processo do trabalho","Instrução processual — provas e depoimentos"]),
  30:("Direito Previdenciário","Seguridade Social e RGPS","🛡️","lavender",["Seguridade Social — saúde, previdência, assistência (CF arts. 194-204)","Princípios da Seguridade Social (USECLADO)","Segurados obrigatórios do RGPS — empregado, avulso, autônomo","Segurado facultativo — quem pode se inscrever","Qualidade de segurado — carência e período de graça"]),
  31:("Direito Civil","Obrigações: Adimplemento e Extinção","📜","lavender",["Pagamento — regras gerais, quem paga e a quem se paga","Pagamento em consignação — hipóteses e procedimento","Compensação, novação e remissão de dívidas","Inadimplemento — mora do devedor e mora do credor","Cláusula penal — moratória e compensatória"]),
  32:("Direito Previdenciário","Custeio e Benefícios Previdenciários","🛡️","lavender",["Contribuições do empregado, empregador e autônomo","Salário de contribuição — teto e limite","Auxílio por incapacidade temporária — carência e prazo","Aposentadoria por incapacidade permanente","Salário-maternidade e auxílio-acidente"]),
  33:("Processo do Trabalho","Defesa do Réu e Audiência de Instrução","⚡","sage",["Defesa do réu na JT — contestação e exceções","Audiência de instrução — depoimentos e testemunhos","Inversão do ônus da prova na JT","Sentença trabalhista — liquidação","Honorários periciais e advocatícios na JT"]),
  34:("Direito Penal","Culpabilidade e Extinção da Punibilidade","🔒","rose",["Culpabilidade — imputabilidade, potencial consciência, exigibilidade","Inimputabilidade — doença mental, menoridade e embriaguez","Prescrição — prazos, causas suspensivas e interruptivas","Anistia, graça e indulto — distinções","Abolitio criminis — retroatividade da lei mais benéfica"]),
  35:("Ética Profissional","Prerrogativas e Imunidades do Advogado","⚖️","lavender",["Inviolabilidade do escritório e comunicações (art. 7 II EOAB)","Comunicação reservada com o preso","Imunidade material — manifestações técnicas","Prerrogativa de sustentação oral e vista dos autos","Prisão especial do advogado"]),
  36:("Processo Civil","Intervenção de Terceiros e Tutela Provisória","📋","lavender",["Assistência simples e litisconsorcial","Denunciação da lide — hipóteses do art. 125 CPC","Chamamento ao processo","Incidente de Desconsideração da PJ — art. 133 CPC","Estabilização da tutela antecipada antecedente"]),
  37:("Estatuto da Criança e do Adolescente (ECA)","Direitos Fundamentais e Família Substituta","👶","lavender",["Princípio da proteção integral e prioridade absoluta","Direitos fundamentais da criança e do adolescente","Família natural, extensa e substituta","Adoção — requisitos, estágio e irrevogabilidade","Ato infracional e medidas socioeducativas"]),
  38:("Processo Civil","Tutelas Provisórias e Recursos","📋","lavender",["Tutela de urgência — fumus boni iuris e periculum in mora","Tutela de evidência — hipóteses do art. 311 CPC","Apelação — cabimento, prazo 15 dias e efeitos","Agravo interno e agravo regimental","Embargos de declaração — prazo 5 dias e efeito interruptivo"]),
  39:("Direito Penal","Concurso de Pessoas e Penas","🔒","rose",["Concurso de pessoas — teoria monista x pluralista","Autoria e participação — espécies","Comunicabilidade de circunstâncias elementares","Penas privativas de liberdade — reclusão e detenção","Regime inicial de cumprimento — critérios"]),
  40:("Direito Civil","Obrigações: Inadimplemento e Responsabilidade Civil","📜","lavender",["Inadimplemento absoluto e relativo (mora)","Cláusula penal — moratória e compensatória; art. 412 CC","Responsabilidade civil subjetiva — culpa, dano e nexo","Responsabilidade civil objetiva — risco da atividade","Responsabilidade por fato de terceiro"]),
  41:("Direito do Consumidor","Política Nacional e Responsabilidade","🛒","gold",["Conceito de consumidor (art. 2 CDC) e equiparado","Conceito de fornecedor, produto e serviço","Responsabilidade pelo fato do produto — objetiva e solidária","Fato do serviço — acidentes de consumo","Excludentes de responsabilidade no CDC"]),
  42:("Direito Constitucional","Organização do Estado — Federalismo","🏛️","lavender",["Repartição de competências — arts. 21-25 CF","Competências privativas da União (art. 22)","Competências comuns (art. 23) — cooperação federativa","Competências concorrentes (art. 24) — normas gerais x suplementares","Competências dos Municípios (art. 30) — interesse local"]),
  43:("Processo do Trabalho","Provas e Duração do Trabalho","⚡","sage",["Ônus da prova na JT — art. 818 CLT","Prova documental e testemunhal","Jornada de trabalho — limites constitucionais (8h/44h)","Horas extras — adicional 50% e limite máximo","Banco de horas — condições e liquidação"]),
  44:("Direito Civil","Contratos em Geral","📜","lavender",["Princípios contratuais — autonomia, boa-fé, função social","Formação do contrato — proposta e aceitação","Vícios do consentimento nos contratos","Extinção dos contratos — resolução, rescisão, resilição","Contrato de adesão — cláusulas abusivas"]),
  45:("Direito Tributário","Conceito de Tributo e Espécies Tributárias","💰","gold",["Tributo — conceito do CTN art. 3","Impostos — fato gerador não vinculado a atividade estatal","Taxas — poder de polícia e serviço público","Contribuição de melhoria — valorização imobiliária e limite","Empréstimos compulsórios e contribuições especiais"]),
  46:("Direito Penal","Concurso de Crimes e Das Penas","🔒","rose",["Concurso material — cumulação de penas","Concurso formal — exasperação da pena (1/6 a 1/2)","Crime continuado — Súmula 711 STF (lei mais grave)","Pena de multa — dias-multa e cálculo","Penas restritivas de direitos — requisitos e espécies"]),
  47:("Ética Profissional","Incompatibilidades e Impedimentos","⚖️","lavender",["Incompatibilidades — quem não pode exercer a advocacia (art. 28 EOAB)","Impedimentos — restrições pontuais (art. 30 EOAB)","Vedação ao servidor público de exercer a advocacia","Prazo de quarentena — ex-magistrado e MP","Advocacia contra ex-empregador — prazo de 2 anos"]),
  48:("Processo Civil","Petição Inicial, Citação e Defesa do Réu","📋","lavender",["Petição inicial — requisitos do art. 319 CPC e emenda","Citação — formas, efeitos e nulidade","Defesa do réu — contestação, preliminares e reconvenção","Revelia — efeitos e exceções (art. 345 CPC)","Saneamento e organização do processo"]),
  49:("Processo Penal","Provas","🔍","rose",["Provas — conceito, ônus e inadmissibilidade (art. 157 CPP)","Prova ilícita e derivada — teoria do fruto da árvore envenenada","Confissão, testemunho e reconhecimento de pessoas","Interceptação telefônica — Lei 9.296/96","Questões incidentes — insanidade mental"]),
  50:("Direito Constitucional","Poder Executivo","🏛️","lavender",["Atribuições do Presidente — arts. 84-91 CF","Responsabilidade do Presidente — impeachment","Medidas Provisórias — requisitos, prazo e vedações","Conselho da República e Conselho de Defesa Nacional","Ministros de Estado — nomeação e exoneração"]),
  51:("Processo do Trabalho","Provas e Recursos no TST","⚡","sage",["Ônus da prova — distribuição e inversão","Prova pericial — honorários e impugnação","Recurso de revista (RR) — transcendência e cabimento","Embargos no TST — unificação de jurisprudência","Recurso adesivo no processo do trabalho"]),
  52:("Direito Civil","Contratos em Geral — Continuação","📜","lavender",["Contrato com pessoa a declarar — prazo de indicação","Estipulação em favor de terceiro","Promessa de fato de terceiro","Vício redibitório e evicção","Revisão contratual — onerosidade excessiva (art. 478 CC)"]),
  53:("Direito Tributário","Crédito Tributário: Lançamento","💰","gold",["Lançamento — conceito e espécies (ofício, declaração, homologação)","Decadência do crédito tributário — arts. 150 e 173 CTN","Prescrição da ação de cobrança — art. 174 CTN","Suspensão do crédito — MODEFI","Extinção do crédito — pagamento, compensação, remissão"]),
  54:("Direito Penal","Concurso de Crimes e Penas — Continuação","🔒","rose",["Progressão e regressão de regime","Remição de pena — trabalho e estudo","Livramento condicional — requisitos","Sursis — suspensão condicional da pena","Suspensão condicional do processo (art. 89 Lei 9.099/95)"]),
  55:("Direito Tributário","Obrigação Tributária e Responsabilidade","💰","gold",["Obrigação tributária principal e acessória","Fato gerador — aspectos material, temporal, espacial","Sujeito ativo e passivo — contribuinte e responsável","Responsabilidade por transferência — sucessão e terceiros","Responsabilidade por substituição — ICMS-ST"]),
  56:("Direito Penal","Crimes Contra a Honra e Contra a Vida","🔒","rose",["Calúnia, difamação e injúria — distinção e penas","Injúria racial — crime hediondo (Lei 14.532/2023)","Homicídio simples, qualificado e privilegiado","Induzimento, instigação e auxílio ao suicídio","Infanticídio e aborto — espécies e excludentes"]),
  57:("Ética Profissional","Ética do Advogado e Relações com o Cliente","⚖️","lavender",["Sigilo profissional — alcance e exceções absolutas","Conflito de interesses — partes opostas","Renúncia ao mandato — dupla comunicação e prazo 10 dias","Honorários — sucumbência, arbitramento e tabela","Responsabilidade disciplinar e civil do advogado"]),
  58:("Processo Penal","Prisão, Medidas Cautelares e Liberdade Provisória","🔍","rose",["Prisão em flagrante — modalidades e comunicação 24h","Prisão preventiva — requisitos do art. 312 CPP","Prisão temporária — Lei 7.960/89 e prazos","Medidas cautelares alternativas — art. 319 CPP","Liberdade provisória — com e sem fiança"]),
  59:("Direito Empresarial","Títulos de Crédito","🏢","gold",["Princípios — literalidade, autonomia, cartularidade","Cheque — tipos, endosso e prazo de apresentação","Nota promissória — natureza e requisitos","Duplicata — aceite, protesto e circulação","Letra de câmbio — saque, aceite e aval"]),
  60:("Direito Administrativo","Agentes Públicos","🏛️","sage",["Servidores estatutários e celetistas — regime e diferenças","Estabilidade do servidor — requisitos e perda","Cargo, emprego e função pública — distinção","Processo administrativo disciplinar — fases (Lei 8.112/90)","Acumulação de cargos — vedações e permissões"]),
  61:("Direito do Consumidor","Direitos Básicos e Proteção Contratual","🛒","gold",["Direitos básicos do consumidor — art. 6 CDC","Dever de informação — clareza e proibição de enganosa","Prazo de reflexão — 7 dias (fora do estabelecimento)","Cláusulas abusivas — rol do art. 51 CDC","Inversão do ônus da prova — critérios"]),
  62:("Direito Constitucional","Poder Executivo e Responsabilidade","🏛️","lavender",["Impeachment — crime de responsabilidade, rito e quórum","Responsabilidade por crimes comuns — STF","Estado de defesa e estado de sítio","Intervenção federal — hipóteses e decreto","Forças Armadas — missão e uso interno"]),
  63:("Direito do Trabalho","Estabilidade e Garantias de Emprego","⚙️","sage",["Gestante — garantia desde a concepção (Súmula 244 TST)","Acidentado — estabilidade de 12 meses após alta","Dirigente sindical — limites e extensão","Membro da CIPA — titular e suplente","FGTS — depósito e indenização compensatória"]),
  64:("Direito Previdenciário","Benefícios Previdenciários","🛡️","lavender",["Auxílio-doença — carência, cálculo e cessação","Pensão por morte — dependentes e cálculo","Salário-maternidade — seguradas e duração","BPC/LOAS — renda per capita e miserabilidade","RPPS — aposentadoria e pensão dos servidores"]),
  65:("Processo Civil","Sentença e Coisa Julgada","📋","lavender",["Sentença — elementos obrigatórios (relatório, fundamentação, dispositivo)","Coisa julgada material e formal — limites","Ação rescisória — cabimento, prazo 2 anos, art. 966 CPC","Apelação — prazo 15 dias, efeitos","REsp e RE — cabimento e pressupostos"]),
  66:("Direito Civil","Contratos em Espécie","📜","lavender",["Compra e venda — objeto, preço e cláusulas especiais","Locação de imóveis urbanos — Lei 8.245/91","Prestação de serviços — prazo máximo e extinção","Empreitada — responsabilidade do empreiteiro","Doação — regras, revogação e proibições"]),
  67:("Direito Civil","Contratos em Espécie — Continuação","📜","lavender",["Comodato e mútuo — gratuidade e juros","Depósito — responsabilidade e modalidades","Mandato — poderes especiais e extinção","Fiança — acessoriedade e benefício de ordem","Transação — concessões mútuas e efeito"]),
  68:("Direito Tributário","Crédito Tributário — Extinção e Exclusão","💰","gold",["Extinção do crédito — pagamento, compensação, novação","Remissão — perdão da dívida tributária","Prescrição e decadência — Súmulas STJ","Exclusão do crédito — isenção e anistia","Repetição do indébito — prazo 5 anos e correção"]),
  69:("Direito Penal","Crimes Contra a Dignidade Sexual e Fé Pública","🔒","rose",["Estupro — art. 213 CP e presunção de vulnerabilidade","Importunação sexual — Lei 13.718/2018","Moeda falsa e falsidade documental","Falsidade ideológica vs material — distinção","Uso de documento falso"]),
  70:("Processo Penal","Citação, Intimação e Procedimentos","🔍","rose",["Citação — modalidades, revelia e edital","Intimação — réu preso e solto; defensor","Procedimento comum ordinário — fases","Procedimento sumário e sumaríssimo (JECRIM)","Procedimentos especiais — lei de drogas e júri"]),
  71:("Ética Profissional","Processo Administrativo Disciplinar da OAB","⚖️","lavender",["Infrações disciplinares — rol do art. 34 EOAB","Sanções — advertência, censura, suspensão, exclusão","PAD — fases: instauração, instrução, defesa, julgamento","Prescrição disciplinar — prazos","Reabilitação do inscrito suspenso ou excluído"]),
  72:("Ética Profissional","Ética do Advogado — Relação com o Cliente","⚖️","lavender",["Sigilo profissional — alcance e limites","Dever de lealdade — não patrocinar interesse contrário","Contencioso judicial — comportamento ético","Relação com magistrados e ministério público","Publicidade advocatícia — limites do Código de Ética"]),
  73:("Processo Penal","Prisão e Liberdade Provisória — Revisão","🔍","rose",["Revisão de prisão em flagrante — modalidades","Audiência de custódia — prazo 24h e finalidade","Habeas corpus — cabimento e competência","Mandado de segurança no processo penal","Revisão criminal — fundamentos"]),
  74:("Direito Empresarial","Falência e Recuperação Judicial","🏢","gold",["Pressupostos da falência — impontualidade, execução frustrada","Legitimidade para requerer a falência","Recuperação judicial — plano, prazo e cram down","Stay period — blindagem de 180 dias","Recuperação extrajudicial — negociação privada"]),
  75:("Direito Administrativo","Improbidade Administrativa","🏛️","sage",["Sujeitos da improbidade — agente público e particular","Atos de improbidade — enriquecimento ilícito, dano ao erário","Sanções — suspensão, multa, ressarcimento, perda da função","Lei 8.429/92 com alterações da Lei 14.230/2021","Dolo específico exigido após a reforma de 2021"]),
  76:("Direito Administrativo","Intervenção na Propriedade e Responsabilidade do Estado","🏛️","sage",["Desapropriação — modalidades e indenização justa, prévia e em dinheiro","Tombamento — restrição ao direito de propriedade","Servidão administrativa — sem indenização se sem prejuízo","Requisição administrativa — situações de urgência","Responsabilidade civil objetiva do Estado — teoria do risco administrativo"]),
  77:("Direito Constitucional","Poder Legislativo e Processo Legislativo","🏛️","lavender",["Estrutura bicameral — Câmara, Senado e Congresso Nacional","Processo legislativo ordinário — fases e sanção/veto","Medida Provisória — requisitos, prazo e reedição","Lei delegada — solicitação ao CN e vedações","Resolução e decreto legislativo"]),
  78:("Processo Civil","Cumprimento de Sentença e Execução","📋","lavender",["Cumprimento de sentença — multa 10% e honorários 10%","Impugnação ao cumprimento — prazo e efeito suspensivo","Execução extrajudicial — títulos (art. 784 CPC)","Penhora — ordem legal e substituição","Hasta pública — modalidades e preço mínimo"]),
  79:("Direito Civil","Responsabilidade Civil","📜","lavender",["Responsabilidade subjetiva — culpa, dano e nexo causal","Responsabilidade objetiva — risco da atividade (art. 927 par. único CC)","Dano moral — arbitramento e cumulação","Responsabilidade por fato de terceiro — pais, empregadores","Excludentes — caso fortuito, força maior, culpa exclusiva"]),
  80:("Direito Constitucional","Poder Judiciário e Funções Essenciais","🏛️","lavender",["Estrutura do Judiciário — STF, STJ, TST, TRFs, TJs","Garantias dos magistrados — vitaliciedade, inamovibilidade, irredutibilidade","Ministério Público — princípios e atribuições (art. 127 CF)","Defensoria Pública — garantias constitucionais","Advocacia e OAB — indispensabilidade (art. 133 CF)"]),
  81:("Direito do Consumidor","Práticas Comerciais e Responsabilidade","🛒","gold",["Publicidade enganosa — omissão de informação essencial","Publicidade abusiva — discriminação e valores negativos","Banco de dados e cadastro do consumidor","Proibição de venda casada","SAC e prazos de atendimento ao consumidor"]),
  82:("Direito Eleitoral","Direitos Políticos e Partidos Políticos","🗳️","lavender",["Direitos políticos — condições de elegibilidade (art. 14 par. 3 CF)","Inelegibilidades constitucionais — parentesco, domicílio","Lei da ficha limpa — inelegibilidades infraconstitucionais","Registro de candidatura — prazo e documentos","Partidos políticos — fidelidade e cláusula de desempenho"]),
  83:("Direito Civil","Direito de Família — Aspectos Pessoais","📜","lavender",["Casamento — habilitação, impedimentos e causas suspensivas","Efeitos pessoais do casamento — deveres dos cônjuges","União estável — requisitos e conversão em casamento","Divórcio — unilateral e consensual (EC 66/2010)","Parentesco — graus, afinidade e consanguinidade"]),
  84:("Direito Civil","Direito de Família — Aspectos Patrimoniais","📜","lavender",["Regimes de bens — comunhão parcial (regra geral), universal, separação","Pacto antenupcial — forma e limitações","Alimentos — pressupostos, espécies e execução","Bem de família — impenhorabilidade e exceções","Guarda dos filhos — unilateral, compartilhada e alienação parental"]),
  85:("Direito Tributário","Impostos Federais, Estaduais e Municipais","💰","gold",["IR — fato gerador, contribuintes e isenções","IPI — não cumulatividade e seletividade","ICMS — regras gerais, imunidade e diferencial de alíquota","ISS — competência municipal e lista de serviços","IPTU — progressividade e imunidade"]),
  86:("Direito Constitucional","Defesa do Estado e Ordem Social","🏛️","lavender",["Estado de defesa — art. 136 CF, decreto presidencial e prazo","Estado de sítio — art. 137 CF, autorização do CN","Forças Armadas — missões constitucionais","Ordem social — saúde, previdência, assistência, educação","Comunicação social — vedação ao monopólio"]),
  87:("Direito Penal","Crimes Contra a Administração Pública","🔒","rose",["Peculato — apropriação, desvio e furto (art. 312 CP)","Concussão e corrupção passiva — distinção","Corrupção ativa — art. 333 CP","Prevaricação — interesse pessoal","Crimes praticados por particular contra a Adm. Pública"]),
  88:("Processo Penal","Recursos e Ações de Impugnação","🔍","rose",["RSE — cabimento taxativo (art. 581 CPP)","Apelação criminal — prazo 5 dias e fundamentação","Embargos de declaração no processo penal","Habeas corpus — preventivo e repressivo","Revisão criminal — fundamentos e competência"]),
  89:("Processo do Trabalho","Execução Trabalhista","⚡","sage",["Título executivo trabalhista — sentença e TAC","Liquidação — por cálculo, arbitramento e artigos","Penhora de bens — ordem e bem de família","Desconsideração da personalidade jurídica na JT","Execução provisória e definitiva"]),
  90:("Direito Civil","Direito das Sucessões: Sucessão em Geral","📜","lavender",["Abertura da sucessão — morte real e presumida","Herança — aceitação e renúncia (art. 1.804 CC)","Legitimidade para suceder — regras","Ordem de vocação hereditária","Herdeiro necessário — quota obrigatória (50%)"]),
  91:("Direito Constitucional","Controle de Constitucionalidade Concentrado","🏛️","lavender",["ADI — legitimados, objeto e efeitos (art. 103 CF)","ADC — presunção de constitucionalidade e efeito vinculante","ADPF — subsidiariedade e objeto amplo","ADI por Omissão — efeitos e prazo","Cautelar em ADI — maioria absoluta e efeitos retroativos"]),
  92:("Direito Penal","Crimes Contra o Patrimônio","🔒","rose",["Furto — simples, qualificado e privilégio","Roubo e extorsão — distinção e penas","Estelionato — fraude e Súmula 246 STJ","Receptação — própria e imprópria","Dano — elemento subjetivo e qualificadoras"]),
  93:("Processo Penal","Procedimentos Especiais","🔍","rose",["Procedimento do júri — 1a fase (pronúncia) e 2a fase","Quesitação no júri — soberania dos veredictos","JECRIM — transação penal e suspensão condicional","Procedimento da Lei de Drogas","Procedimento dos crimes de responsabilidade"]),
  94:("Ética Profissional","Estrutura da OAB e Eleições","⚖️","lavender",["Órgãos da OAB — Conselho Federal, Seccionais, Subseções","Eleições da OAB — mandato trienal e elegibilidade","Publicidade advocatícia — vedações do Código de Ética","Mercantilização da advocacia — proibições","OAB e poder disciplinar — alcance"]),
  95:("Processo Civil","Procedimentos Especiais e Recursos Extraordinários","📋","lavender",["Mandado de segurança — prazo 120 dias, legitimidade e liminar","Ação popular — objeto, legitimidade e sentença","Ação civil pública — legitimados e objeto","REsp — violação de lei federal e prequestionamento","RE — repercussão geral e casos admitidos"]),
  96:("Direito Civil","Direitos Reais: Posse e Propriedade","📜","lavender",["Posse — natureza jurídica, classificações e efeitos","Ações possessórias — reintegração, manutenção, interdito proibitório","Usucapião — espécies e requisitos","Propriedade — função social e limitações","Direitos reais de garantia — penhor, hipoteca, anticrese"]),
  97:("Direito Tributário","Suspensão, Extinção e Exclusão do Crédito","💰","gold",["Suspensão — MODEFI: moratória, depósito, defesa, liminar, parcelamento","Extinção — pagamento, compensação, transação, remissão","Conversão do depósito em renda","Pagamento antecipado e homologação","Exclusão — isenção e anistia"]),
  98:("Processo do Trabalho","Ações Especiais","⚡","sage",["Mandado de segurança na JT — cabimento e prazo","Ação monitória trabalhista","Tutelas de urgência no processo do trabalho","Ação rescisória trabalhista — prazo 2 anos","Ação anulatória de cláusula convencional"]),
  99:("Processo Penal","Nulidades e Recursos","🔍","rose",["Nulidades absolutas e relativas — instrumentalidade","Princípio do prejuízo — pas de nullite sans grief","RSE — rol taxativo e prazo 5 dias","Apelação criminal — efeito suspensivo","Embargos infringentes e de nulidade"]),
 100:("Direito do Trabalho","Direito Coletivo do Trabalho","⚙️","sage",["Sindicato — unicidade sindical e base territorial","Negociação coletiva — ACT e CCT","Hierarquia das fontes — art. 620 CLT","Greve — Lei 7.783/89, serviços essenciais","Arbitragem no direito coletivo"]),
 101:("Direito Civil","Direito de Família — Patrimonial e Alimentos","📜","lavender",["Regime da comunhão parcial — bens particulares e comuns","Regime da separação obrigatória — hipóteses","Alimentos — requisitos e ação de alimentos","Guarda dos filhos — critérios e alienação parental","Poder familiar — exercício e extinção"]),
 102:("Direito Administrativo","Consórcios Públicos, Serviços Públicos e PPP","🏛️","sage",["Concessão de serviço público — modalidades e extinção","Permissão — precariedade e revogabilidade","Parceria Público-Privada (PPP) — patrocinada e administrativa","Consórcios públicos — personalidade jurídica","Terceiro setor — OS e OSCIP"]),
 103:("Direito do Trabalho","Extinção do Contrato de Trabalho","⚙️","sage",["Dispensa sem justa causa — aviso prévio e verbas","Dispensa por justa causa — art. 482 CLT","Pedido de demissão — aviso e verbas","Rescisão indireta — falta grave do empregador (art. 483 CLT)","TRCT — prazos para pagamento"]),
 104:("Processo do Trabalho","Recursos Trabalhistas","⚡","sage",["Recurso ordinário (RO) — prazo 8 dias","Recurso de revista (RR) — transcendência e cabimento","Embargos no TST","Agravo de instrumento trabalhista","Recurso adesivo"]),
 105:("Direito Civil","Direito das Sucessões: Legítima e Testamentária","📜","lavender",["Herdeiros necessários — quota indisponível (50%)","Ordem da vocação hereditária — descendentes e cônjuge","Colação e redução — proteção do patrimônio","Testamento — formas (público, cerrado, particular)","Codicilo — limitações e objeto"]),
 106:("Direito Tributário","Execução Fiscal e Garantias do Crédito","💰","gold",["Execução fiscal — Lei 6.830/80","Citação na execução fiscal","Embargos à execução fiscal — prazo 30 dias","Prescrição intercorrente — Súmula 314 STJ","Garantias e privilégios do crédito tributário"]),
 107:("Direito Constitucional","Revisão — Poder Legislativo e Judiciário","🏛️","lavender",["Controle de constitucionalidade difuso e concentrado — revisão","Súmula vinculante — aprovação, revisão e cancelamento","IRDR e recursos repetitivos — efeito vinculante","Ação de inconstitucionalidade por omissão","Poder Judiciário — garantias e vedações"]),
 108:("Direito Penal","Legislação Penal Especial","🔒","rose",["Lei Maria da Penha — violência doméstica, medidas protetivas","Lei de Drogas (11.343/06) — usuário x traficante, tráfico privilegiado","Estatuto do Desarmamento — porte e posse","Crimes hediondos — Lei 8.072/90","Lei Anticorrupção (12.846/13) — responsabilidade da PJ"]),
 109:("Direito Constitucional","Revisão Final — Constitucional","🏛️","lavender",["Revisão de direitos e garantias individuais (art. 5 CF)","Remédios constitucionais — HC, HD, MS, MI, AP","Organização dos poderes — síntese","Controle de constitucionalidade — difuso e concentrado","Cláusulas pétreas e limites da reforma"]),
 110:("Direito Civil","Revisão Final — Civil","📜","lavender",["Revisão de obrigações — modalidades e extinção","Revisão de contratos — princípios e vícios","Responsabilidade civil — subjetiva, objetiva, excludentes","Direitos reais — posse, propriedade, usucapião","Família e sucessões — síntese"]),
 111:("Direito do Trabalho","Revisão Final — Trabalho e Processo do Trabalho","⚙️","sage",["Revisão de contrato de trabalho — modalidades e jornada","Rescisão — verbas e prazos","Processo do trabalho — competência, prazos, recursos","Sindicatos e negociação coletiva","Questões mais cobradas OAB — Trabalho"]),
 112:("Direito Tributário","Revisão Final — Tributário","💰","gold",["Revisão de princípios tributários — legalidade, anterioridade","Imunidades — recíproca, templos, cultural","Crédito tributário — lançamento, suspensão, extinção","Impostos federais, estaduais e municipais","Questões mais cobradas OAB — Tributário"]),
 113:("Direito Penal","Revisão Final — Penal e Processo Penal","🔒","rose",["Revisão de teoria do crime — fato típico, ilicitude, culpabilidade","Crimes contra a pessoa — homicídio, lesão, calúnia","Crimes contra o patrimônio — furto, roubo, estelionato","Crimes contra a Adm. Pública — peculato, corrupção","Legislação penal especial — Maria da Penha, Drogas"]),
 114:("Ética Profissional","Revisão Final — Ética Profissional","⚖️","lavender",["Revisão de atividades privativas e jus postulandi","Mandato, honorários e sigilo profissional","Infrações disciplinares — rol e sanções","Incompatibilidades e impedimentos","Questões mais cobradas OAB — Ética"]),
 115:("Revisão Final","Simulado Completo — 80 Questões","↻","lavender",["Simulado completo com 80 questões cronometrado (2h30)","Revisão dos erros do simulado","Leitura das súmulas mais cobradas","Revisão de lei seca dos principais artigos","Técnica de prova — gestão de tempo"]),
 116:("Revisão Final","Revisão — Processo Civil e Administrativo","↻","lavender",["Questões OAB — Proc. Civil (30 questões)","Questões OAB — Administrativo (30 questões)","Revisão de recursos no CPC","Revisão de atos administrativos e poderes","Flashcards das súmulas STF/STJ"]),
 117:("Revisão Final","Revisão — Civil, Trabalho e Empresarial","↻","lavender",["Questões OAB — Civil (30 questões)","Questões OAB — Trabalho (30 questões)","Revisão de contratos e responsabilidade civil","Revisão de CLT — jornada, rescisão, férias","Revisão de títulos de crédito e falência"]),
 118:("Revisão Final","Revisão — Penal, Proc. Penal e Tributário","↻","lavender",["Questões OAB — Penal (30 questões)","Questões OAB — Tributário (30 questões)","Revisão de crimes em espécie mais cobrados","Revisão de princípios tributários e imunidades","Revisão de prisão e liberdade provisória"]),
 119:("Revisão Final","Revisão — Ética, Matérias Especiais e Simulado","↻","lavender",["Questões OAB — Ética (30 questões)","Revisão de todos os simulados anteriores","Leitura rápida das pegadinhas de banca","500 Dicas — revisão turbo","Descanso e preparação mental"]),
 120:("Revisão Final","Véspera da Prova — Revisão Final","↻","lavender",["Revisão dos flashcards mais importantes","50 súmulas mais cobradas — leitura rápida","Verificar documentos e local de prova","Revisão rápida — Ética tem maior peso (10%)","Descanso, alimentação e boa noite de sono"]),
}

def esc(s):
    return s.replace("'", "\\'")

def make_entry(dia, materia, titulo, emoji, cor, topicos):
    semana = (dia - 1) // 6 + 1
    tops_js = ',\n               '.join(f"'{esc(t)}'" for t in topicos)
    return (
        f"// DIA {dia} — {materia}\n"
        f"{{ dia:{dia}, semana:{semana},\n"
        f"  titulo:'{esc(titulo)}',\n"
        f"  descricao:'{esc('; '.join(topicos[:2]))}',\n"
        f"  emoji_principal:'{emoji}', materia:'{esc(materia)}',\n"
        f"  materias:[{{ nome:'{esc(materia)}', emoji:'{emoji}', horas:4, cor:'{cor}',\n"
        f"    topicos:[{tops_js}] }}],\n"
        f"  flashcards:[],\n"
        f"  checklist:[\n"
        f"    {{id:'c{dia}-1',texto:'Estudar {esc(materia)} — {esc(titulo)}'}},\n"
        f"    {{id:'c{dia}-2',texto:'Resolver 10 questões no QConcursos'}},\n"
        f"    {{id:'c{dia}-3',texto:'Revisão rápida do dia anterior (15 min)'}}\n"
        f"  ],\n"
        f"  sumula:null, incidencia:0, pdf_id:_VDE_PDF_IDS[{semana}]||null, lei_seca:[] }}"
    )

# ── Ler arquivo ──────────────────────────────────────────────
with open(PLANO_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

idx_close = content.find(MARKER_CLOSE)
if idx_close == -1:
    print("ERRO: MARKER_CLOSE nao encontrado"); sys.exit(1)

idx_funcs = content.find(MARKER_FUNCS)
if idx_funcs == -1:
    print("ERRO: MARKER_FUNCS nao encontrado"); sys.exit(1)

# Parte inicial: tudo até (sem incluir) a linha ]; de fechamento
cabecalho = content[:idx_close].rstrip()

# Funções auxiliares originais
sufixo = '\n\n' + content[idx_funcs:]

# ── Gerar dias 14-120 ────────────────────────────────────────
partes = [',\n\n// ════ DIAS 14–120: a partir do cronograma VDE 120D ════\n\n']
for dia in range(14, 121):
    sep = '' if dia == 14 else ',\n\n'
    if dia in SCHEDULE:
        mat, tit, em, cor, tops = SCHEDULE[dia]
        partes.append(sep + make_entry(dia, mat, tit, em, cor, tops))
    else:
        semana = (dia - 1) // 6 + 1
        partes.append(
            sep +
            f"{{ dia:{dia}, semana:{semana}, stub:true,\n"
            f"  titulo:'Revisão · Semana {semana}',\n"
            f"  descricao:'Revisão e consolidação',\n"
            f"  emoji_principal:'↻', materia:'Revisão',\n"
            f"  materias:[{{ nome:'Revisão', emoji:'↻', horas:4, cor:'lavender',\n"
            f"    topicos:['Revisão dos flashcards','Questões no QConcursos'] }}],\n"
            f"  flashcards:[], checklist:[], sumula:null, incidencia:0,\n"
            f"  pdf_id:_VDE_PDF_IDS[{semana}]||null, lei_seca:[] }}"
        )

novo_arquivo = (
    cabecalho
    + ''.join(partes)
    + '\n\n]; // ════ fim PLANO_VDE — 120 dias ════\n'
    + sufixo
)

with open(PLANO_PATH, 'w', encoding='utf-8') as f:
    f.write(novo_arquivo)

print(f"OK — plano-vde.js atualizado. {len(SCHEDULE)} dias com conteúdo (14-120).")
