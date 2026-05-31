// ============================================================
// OAB · Cards de Revisão — Resumos por Matéria/Dia
// Estrutura: REVIEW_CARDS['dia_mIdx'] = { ...cardData }
// ============================================================

const REVIEW_CARDS = {

// ── DIA 1 ────────────────────────────────────────────────────

'1_0': {
  titulo: 'Ética — Órgãos e Legislação da OAB',
  emoji: '⚖️', materia: 'Ética Profissional',
  pontos: [
    'OAB = entidade <strong>sui generis</strong> (ADI 3.026/STF) — NÃO é autarquia; não se sujeita ao TCU, concurso público (art. 37 CF) nem ao CADE',
    '<strong>Art. 45 EOAB — 4 órgãos:</strong> I Conselho Federal · II Conselhos Seccionais · III Subseções · IV CAA (TED = art. 72, NÃO está no art. 45!)',
    'Conselho Federal: voto <strong>por delegação</strong> (proporcional ao nº de inscritos) ≠ Seccional: voto <strong>unipessoal</strong>',
    'Subseção: mínimo <strong>15 advogados</strong> (art. 60 EOAB) · CAA: criada quando Seccional tem +<strong>1.500 inscritos</strong> (única com personalidade jurídica própria)',
    'Mandato: <strong>3 anos</strong> · Reeleição: <strong>1 vez consecutiva</strong> · Candidato a Conselheiro: +<strong>3 anos</strong> efetivos · Presidente/Diretoria: +<strong>5 anos</strong>',
    'Débito de anuidade: veda <strong>votar E candidatar</strong> · Eleições: <strong>novembro</strong>, suspensas 90 dias antes de pleito geral'
  ],
  pegadinha: 'A banca coloca TED entre os órgãos do art. 45 — ele NÃO está lá! É órgão disciplinar (art. 72). Voto por delegação é do CF; Seccional = unipessoal.'
},

'1_1': {
  titulo: 'Constitucional — Poder Constituinte e Eficácia das Normas',
  emoji: '🏛️', materia: 'Direito Constitucional',
  pontos: [
    'PCO: inicial · autônomo · ilimitado juridicamente · incondicionado · permanente · limite <strong>suprapositivo</strong> = tratados de DH',
    'PEC (art. 60 CF): iniciativa (1/3 Dep. ou Sen. · Presidente · +metade das ALs = 14 de 27) + <strong>3/5 em 2 turnos em CADA casa</strong>',
    'PEC: promulgada pelas <strong>Mesas da Câmara + Senado</strong> — SEM sanção/veto presidencial · NÃO pode ser reapresentada na mesma sessão legislativa',
    'Cláusulas pétreas (art. 60, §4º): <strong>forma federativa · voto · separação dos Poderes · direitos e garantias individuais</strong> — vedado ABOLIR (não modificar)',
    'Revisão (art. 3º ADCT): <strong>exaurida</strong> — não pode ser convocada de novo (ADI 981/STF)',
    'Eficácia: <strong>plena</strong> (não restringível) · <strong>contida</strong> (restringível por lei — "nos termos da lei") · <strong>limitada</strong> (depende de lei integrativa)'
  ],
  pegadinha: 'Norma contida tem eficácia PLENA enquanto não houver lei restritiva. "Contida" não significa "fraca" — só se a lei restringir é que o alcance é reduzido.'
},

// ── DIA 2 ────────────────────────────────────────────────────

'2_0': {
  titulo: 'Civil — Parte Geral: Pessoa, Bens, NJ e Prescrição',
  emoji: '📜', materia: 'Direito Civil',
  pontos: [
    'Capacidade: plena (18 anos ou emancipado) · incapaz absoluto (menores de 16) representado · incapaz relativo (16-18, pródigos, alcoólatras habituais) assistido',
    'Emancipação: voluntária (16 anos + pais), judicial, legal (casamento, emprego, colação de grau) — <strong>irrevogável</strong>',
    'NJ defeitos: <strong>erro</strong> (falsa representação) · <strong>dolo</strong> (induzimento) · <strong>coação</strong> (violência/ameaça) · <strong>lesão</strong> (urgência + inexperiência) · <strong>estado de perigo</strong> (risco à vida + prestação excessiva)',
    'Nulo (art. 166): não produz efeitos, não convalesce · Anulável (art. 171): produz efeitos até decretação, convalesce',
    'Prescrição: perde pretensão. Decadência: perde direito. Prescrição suspende/interrompe; <strong>decadência não interrompe</strong>',
    'Lei 8.009/90 art. 3º: fiança locatícia = <strong>inciso VII</strong> (bem do fiador PODE ser penhorado — Súmula 549 STJ)'
  ],
  pegadinha: 'Lesão = urgência + inexperiência → anulável. Estado de perigo = risco à vida/honra + obrigação excessiva → anulável. A banca confunde os dois.'
},

'2_1': {
  titulo: 'Penal — Iter Criminis e Tentativa',
  emoji: '⚔️', materia: 'Direito Penal',
  pontos: [
    'Iter criminis: <strong>cogitação → preparação → execução → consumação</strong> · Só execução e consumação são puníveis (regra)',
    'Tentativa (art. 14, II CP): iniciada execução, não se consuma por circunstâncias <strong>alheias à vontade</strong> do agente · Pena: de 1/3 a 2/3 (art. 14, §ú)',
    'Desistência voluntária (art. 15): agente abandona voluntariamente a execução → responde pelos atos já praticados (não tentativa)',
    'Arrependimento eficaz (art. 15): após execução, impede o resultado → responde pelos atos já praticados',
    'Arrependimento posterior (art. 16): reparação do dano <strong>antes do recebimento da denúncia</strong> → reduz pena de 1/3 a 2/3',
    'Crime culposo: imprudência · negligência · imperícia — só punível quando lei expressamente prevê (art. 18, §ú CP)'
  ],
  pegadinha: 'Desistência voluntária e arrependimento eficaz afastam a TENTATIVA — mas não afastam a responsabilidade pelos atos já praticados (crime menos grave consumado).'
},

// ── DIA 3 ────────────────────────────────────────────────────

'3_0': {
  titulo: 'Constitucional — Direitos Fundamentais (arts. 1-5 CF)',
  emoji: '🏛️', materia: 'Direito Constitucional',
  pontos: [
    'DFs: características = <strong>universalidade · inalienabilidade · imprescritibilidade · irrenunciabilidade · relatividade</strong> (podem colidir)',
    'Art. 5º, XI: inviolabilidade do domicílio — <strong>de DIA</strong>: mandado judicial, flagrante, desastre, socorro · <strong>À NOITE</strong>: SÓ flagrante, desastre, socorro (mandado judicial NÃO!)',
    'Art. 5º, XII: sigilo de comunicações (carta, dado, telefone, telegráfico) — excepcionado por ordem judicial para investigação criminal ou instrução penal',
    'Art. 5º, XIII: livre exercício de profissão "atendidas as qualificações que a lei estabelecer" = <strong>eficácia contida</strong> (lei pode criar requisitos: OAB, CRM)',
    'Art. 5º, LXVIII: HC = liberdade de locomoção · LXIX: MS = direito líquido e certo · LXX: MS coletivo · LXXI: MI (omissão legislativa)',
    'Teoria dos quatro status de Jellinek: passivo · negativo · positivo · ativo'
  ],
  pegadinha: 'À NOITE não cabe mandado judicial para busca domiciliar — apenas de DIA! Questão frequente inverte DIA/NOITE ou adiciona "mandado judicial" à lista noturna.'
},

'3_1': {
  titulo: 'Penal — Lei Penal no Tempo e no Espaço',
  emoji: '⚔️', materia: 'Direito Penal',
  pontos: [
    'Lei penal no tempo: teoria da <strong>atividade</strong> (art. 4º CP) — tempo do crime = momento da conduta',
    '<strong>Irretroatividade</strong> (regra) · <strong>Retroatividade</strong> da lei mais benéfica (abolitio criminis ou novatio legis in mellius) — retroage mesmo após trânsito em julgado',
    'Abolitio criminis: extingue punibilidade, apaga efeitos penais (NÃO os efeitos civis)',
    '<strong>Súmula 711 STF:</strong> "A lei penal mais grave aplica-se ao crime continuado ou permanente, se vigente antes da cessação da continuidade ou da permanência"',
    'Lei penal no espaço: teoria da <strong>ubiquidade</strong> (art. 6º CP) — lugar do crime = onde ocorreu a conduta OU onde se produziu/deveria produzir-se o resultado',
    'Extraterritorialidade: condicionada (art. 7º, II CP — depende de outras condições) · incondicionada (art. 7º, I — crimes contra a vida/liberdade do Presidente)'
  ],
  pegadinha: 'Tempo do crime = ATIVIDADE (quando agiu). Lugar do crime = UBIQUIDADE (onde agiu OU onde produziu resultado). A banca inverte: diz que tempo é ubiquidade — ERRADO.'
},

// ── DIA 4 ────────────────────────────────────────────────────

'4_0': {
  titulo: 'Processo Penal — Inquérito Policial e Ação Penal',
  emoji: '📋', materia: 'Direito Processual Penal',
  pontos: [
    'IP: natureza <strong>administrativa</strong> · inquisitório (sem contraditório pleno) · dispensável · sigiloso · escrito · indisponível (arquivado, não extinto)',
    'Prazos IP: 30 dias solto / 10 dias preso (crime comum federal: 15/30 dias) · Tráfico: 90/30 dias (duplicáveis)',
    '<strong>ANPP</strong> (art. 28-A CPP): pena mínima < 4 anos · crime sem violência ou grave ameaça · réu primário · confessado · não alcançado pelo benefício há 5 anos',
    'Ação penal pública incondicionada = regra · Condicionada: lesão corporal leve/culposa, ameaça · <strong>Crimes sexuais: INCONDICIONADA desde Lei 13.718/2018</strong>',
    'SV 14 STF: advogado tem acesso amplo aos elementos de prova <strong>já documentados</strong> no IP — não aos em andamento',
    'Competência: ratione materiae (matéria) · ratione personae (prerrogativa de foro) · ratione loci (lugar do crime — teoria do resultado: art. 70 CPP)'
  ],
  pegadinha: 'Crimes sexuais hoje são de ação pública INCONDICIONADA (Lei 13.718/2018 alterou o art. 225 CP). A regra anterior (condicionada, salvo menor/incapaz) está revogada!'
},

'4_1': {
  titulo: 'Trabalho — Relação de Emprego e Contrato de Trabalho',
  emoji: '⚙️', materia: 'Direito do Trabalho',
  pontos: [
    '5 requisitos da relação de emprego: <strong>pessoa física · pessoalidade · não-eventualidade (habitualidade) · subordinação jurídica · onerosidade</strong>',
    'Subordinação é o elemento mais importante (distingue de autônomo). Preso é trabalhador — sem subordinação típica, mas com os outros requisitos.',
    'CTPS: obrigatória — anotação no 1º dia de trabalho; falta de anotação gera vínculo e multa; CTPS digital (desde 2019) tem mesma força',
    'Poderes do empregador: diretivo (organizar) · regulamentar (editar normas internas) · disciplinar (punir) · fiscalizatório',
    'Terceirização (Lei 13.429/17 + Reforma 2017): lícita em qualquer atividade (inclusive-fim) · tomador responde subsidiariamente pelos créditos trabalhistas',
    'Contrato de experiência: máx. <strong>90 dias</strong> (podendo ser prorrogado 1 vez) · ultrapassado sem renovação: vira por prazo indeterminado'
  ],
  pegadinha: 'Terceirização na atividade-fim é LÍCITA desde a Lei 13.429/2017 e Reforma Trabalhista. A Súmula 331 TST (que vedava) foi superada — não aplicar mais para atividade-fim.'
},

// ── DIA 5 ────────────────────────────────────────────────────

'5_0': {
  titulo: 'Ética — Inscrição, Atividades Privativas e Advogado Empregado',
  emoji: '⚖️', materia: 'Ética Profissional',
  pontos: [
    'Inscrição (art. 8 EOAB): capacidade civil + bacharel em Direito + aprovação no Exame + idoneidade moral + juramento',
    'Inscrição suplementar (art. 10 EOAB): para atuar em Seccional diferente da principal — não precisa para STF, STJ, TST, STM, TRF',
    'Incompatibilidade (art. 28 EOAB): <strong>proíbe advocacia</strong> (magistrados, MPs, delegados, militares ativos, chefes do Executivo)',
    'Impedimento (art. 30 EOAB): <strong>proíbe em causas específicas</strong> (ex: juiz no foro de seu tribunal; servidor público na repartição onde serve)',
    'Atividades privativas (art. 1, I EOAB): postulação judicial em qualquer instância · consultoria jurídica',
    'Advogado empregado (art. 20 EOAB): jornada <strong>4h diárias / 20h semanais</strong> (pode ser acrescida por convenção); salário-base (não por produtividade); sigilo mantido'
  ],
  pegadinha: 'Incompatibilidade ≠ impedimento: incompatibilidade PROÍBE toda advocacia; impedimento proíbe apenas em causas específicas. A banca usa os termos como sinônimos — ERRADO.'
},

'5_1': {
  titulo: 'Constitucional — Direitos Políticos e Federalismo',
  emoji: '🏛️', materia: 'Direito Constitucional',
  pontos: [
    'Direito ao voto: obrigatório (18-70 anos) · facultativo (16-18, +70 anos, analfabetos) · direto, secreto, universal e periódico',
    'Inelegibilidade reflexa (art. 14, §7º CF): cônjuge/parente até 2º grau do titular não pode se candidatar a <strong>qualquer cargo eletivo na circunscrição</strong> do titular',
    'Federalismo brasileiro: 3 esferas (União, Estados, Municípios + DF) · rígido · cooperativo · art. 1º CF: forma federativa = cláusula pétrea',
    'Competências: <strong>exclusivas</strong> (só União, art. 21) · <strong>privativas</strong> (União, delegáveis por LC, art. 22) · <strong>comuns</strong> (todos, art. 23) · <strong>concorrentes</strong> (União + Estados, art. 24)',
    'Intervenção federal (art. 34 CF): manter integridade nacional · repelir invasão estrangeira · pôr fim a grave comprometimento da ordem pública · garantir livre exercício dos poderes',
    'Partido político (art. 17 CF): liberdade de criação · caráter nacional · financiamento público (Fundo Eleitoral) · vedado financiamento por entidade estrangeira'
  ],
  pegadinha: 'Competência privativa da União (art. 22) PODE ser delegada por Lei Complementar aos Estados. Competência exclusiva (art. 21) NÃO pode ser delegada. A banca inverte!'
},

// ── DIA 6 ────────────────────────────────────────────────────

'6_0': {
  titulo: 'Civil — Obrigações: Teoria Geral e Solidariedade',
  emoji: '📜', materia: 'Direito Civil',
  pontos: [
    'Obrigações de dar coisa certa: acessório segue o principal (frutos) · devedor assume riscos até tradição (res perit domino)',
    'Obrigação de fazer: infungível (personalíssima — só o devedor pode) · fungível (pode ser executada por terceiro à custa do devedor)',
    'Obrigações alternativas (art. 252 CC): 2+ prestações, basta uma · escolha = do devedor (regra)',
    'Solidariedade ativa: qualquer credor cobra tudo · pagamento feito a um extingue para todos · devedor se libera pagando a qualquer credor',
    'Solidariedade passiva: credor cobra de qualquer devedor o total · devedor que paga tem ação de regresso contra os demais',
    '<strong>Solidariedade não se presume</strong> (art. 265 CC) — deve decorrer de lei ou convenção'
  ],
  pegadinha: 'Solidariedade NÃO se presume — precisa estar em lei ou contrato. Questão que diz que "sócios são sempre solidários entre si" está errada (depende do tipo societário e do caso).'
},

'6_1': {
  titulo: 'Penal — Excludentes de Ilicitude e Culpabilidade',
  emoji: '⚔️', materia: 'Direito Penal',
  pontos: [
    'Excludentes de ilicitude (art. 23 CP): <strong>estado de necessidade · legítima defesa · estrito cumprimento do dever legal · exercício regular de direito</strong>',
    'Legítima defesa: <strong>agressão injusta · atual ou iminente · direito próprio ou alheio · meios necessários + moderação</strong>',
    'Estado de necessidade: perigo atual · não provocado voluntariamente · sacrifício de bem menor para salvar maior · impossibilidade de evitar de outra forma',
    'Erro de tipo essencial (art. 20 CP): recai sobre elementar do tipo → exclui dolo; se evitável → culpa (se prevista); se inevitável → isenta de pena',
    'Erro de proibição (art. 21 CP): desconhece a ilicitude do fato → se inevitável: isenta de pena; se evitável: reduz pena de 1/6 a 1/3',
    'Embriaguez acidental completa (art. 28, §1º CP): isenta de pena · acidental incompleta: reduz pena de 1/3 a 2/3'
  ],
  pegadinha: 'Embriaguez VOLUNTÁRIA não isenta de pena (teoria actio libera in causa). Só a ACIDENTAL (caso fortuito ou força maior) e COMPLETA isenta. A banca cria situações de embriaguez voluntária e pergunta se isenta — NÃO isenta!'
},

// ── DIA 7 ────────────────────────────────────────────────────

'7_0': {
  titulo: 'Processo do Trabalho — Teoria Geral e Competência',
  emoji: '⚙️', materia: 'Direito Processual do Trabalho',
  pontos: [
    'Competência JT (art. 114 CF): relações de trabalho (não apenas relação de emprego) · danos morais e patrimoniais decorrentes · greve · representação sindical · mandado de segurança trabalhista',
    'Estrutura: Varas do Trabalho → <strong>24 TRTs</strong> (mín. 7 membros) → TST (27 ministros)',
    'Princípios próprios do processo do trabalho: <strong>proteção · oralidade · concentração · celeridade · simplicidade · jus postulandi</strong> (parte pode atuar sem advogado)',
    'Jus postulandi (art. 791 CLT): empregado e empregador podem postular pessoalmente nas Varas e TRTs — mas NÃO no TST (Súmula 425 TST)',
    'Reclamação trabalhista: petição inicial (pode ser verbal) → audiência una (tentativa de conciliação obrigatória → instrução → julgamento)',
    'Prescrição trabalhista (art. 7º, XXIX CF): <strong>5 anos durante o contrato · 2 anos após a extinção</strong>'
  ],
  pegadinha: 'Jus postulandi NÃO se aplica ao TST! Súmula 425 TST: é necessária a representação por advogado no TST. A banca estende o jus postulandi até o TST — ERRADO.'
},

'7_1': {
  titulo: 'Constitucional — Competências e Intervenção Federal',
  emoji: '🏛️', materia: 'Direito Constitucional',
  pontos: [
    'Art. 21 CF: competência exclusiva da União (administrativa) — <strong>NÃO delegável</strong>: declarar guerra, emitir moeda, manter forças armadas',
    'Art. 22 CF: competência privativa da União (legislativa) — <strong>delegável por LC</strong> aos Estados: direito civil, penal, processo, eleitoral, agrário, marítimo, aeronáutico, espacial, do trabalho',
    'Art. 23 CF: competência material <strong>comum</strong> (União + Estados + DF + Municípios): zelar pela saúde, combater pobreza, proteger o meio ambiente',
    'Art. 24 CF: competência legislativa <strong>concorrente</strong> (União + Estados + DF): direito tributário, financeiro, penitenciário, econômico, urbanístico',
    'Intervenção federal (art. 34 CF): manter integridade territorial · repelir invasão · pôr fim a grave comprometimento da ordem pública · livre exercício dos Poderes · reorganização financeira · princípios constitucionais sensíveis',
    'Estado de defesa (art. 136): emergência interna · prazo <strong>30 dias + 30 dias</strong> (prorrogável 1 vez) · decretado pelo Presidente + referendado pelo CN'
  ],
  pegadinha: 'Na competência concorrente (art. 24), a União estabelece <strong>normas gerais</strong>; Estados, normas suplementares. Se a União não legislar, Estados exercem competência plena. Se a União legislar depois, suspende (não revoga!) a lei estadual no que contrariar.'
},

// ── DIA 8 ────────────────────────────────────────────────────

'8_0': {
  titulo: 'Processo Penal — Provas e Prisões Cautelares',
  emoji: '📋', materia: 'Direito Processual Penal',
  pontos: [
    'Sistema de valoração de provas: <strong>livre convicção motivada</strong> (persuasão racional) — juiz decide livremente, mas deve fundamentar',
    'Prova ilícita (art. 5º, LVI CF): inadmissível · teoria dos frutos da árvore envenenada (prova ilícita contamina as derivadas)',
    'Prisão em flagrante: próprio (cometendo) · impróprio (acabou de cometer) · presumido (perseguido/encontrado logo depois) · preparado = crime impossível (NÃO é flagrante lícito)',
    '<strong>Prisão preventiva</strong> (art. 312 CPP): fumus comissi delicti + periculum libertatis (garantia da ordem pública · conveniência da instrução criminal · assegurar aplicação da lei penal)',
    'Preventiva NÃO cabe para crimes culposos nem para contravenções · Prazo: deve ser revisada a cada 90 dias (Pacote Anticrime)',
    'Medidas cautelares diversas da prisão (art. 319 CPP): monitoramento eletrônico · comparecimento periódico · proibição de se ausentar · fiança'
  ],
  pegadinha: 'SV 11 STF: uso de algemas só em casos de RESISTÊNCIA, RISCO DE FUGA ou PERIGO À INTEGRIDADE (própria ou alheia). Uso rotineiro ou por humilhação = abuso de autoridade + ilegalidade.'
},

'8_1': {
  titulo: 'Trabalho — Jornada, Horas Extras e Intervalos',
  emoji: '⚙️', materia: 'Direito do Trabalho',
  pontos: [
    'Jornada normal (art. 7º, XIII CF): <strong>8h diárias · 44h semanais</strong> — excedido = hora extra',
    'Hora extra: adicional mínimo de <strong>50%</strong> (art. 7º, XVI CF) sobre o valor da hora normal; acordo de compensação: banco de horas com convenção coletiva',
    'Adicional noturno urbano: <strong>20%</strong> sobre hora diurna · hora noturna = <strong>52 min e 30 seg</strong> (hora ficta reduzida) · noite: 22h às 5h',
    'Intervalos: intrajornada (dentro da jornada) — +6h: mínimo 1h / máx 2h · 4h a 6h: 15 min · Violação = hora extra (adicional 50%) — <strong>NÃO é "em dobro"!</strong>',
    'Interjornada (art. 66 CLT): mínimo <strong>11 horas consecutivas</strong> entre jornadas · violação = hora extra (Súmula 110 TST)',
    'Sobreaviso (Súmula 428 TST): só há sobreaviso com uso de aparelho de comunicação que impossibilite o livre uso do tempo — mero plantão sem controle = não é sobreaviso'
  ],
  pegadinha: 'Violação do intervalo intrajornada = horas extras com adicional de 50% (não "em dobro"). "Em dobro" é para DSR trabalhado. A banca usa "pagamento em dobro" para intervalo — ERRADO.'
},

// ── DIA 9 ────────────────────────────────────────────────────

'9_0': {
  titulo: 'Constitucional — Poder Legislativo e Processo Legislativo',
  emoji: '🏛️', materia: 'Direito Constitucional',
  pontos: [
    'Câmara: <strong>513</strong> Deputados (mín. 8, máx. 70 por Estado) · mandato 4 anos · renovação total · sufrágio proporcional',
    'Senado: <strong>81</strong> Senadores (3 por Estado + DF) · mandato 8 anos · renovação de 1/3 e 2/3 alternadamente · sufrágio majoritário',
    'Espécies normativas (art. 59 CF): EC · lei complementar · lei ordinária · lei delegada · medida provisória · decreto legislativo · resolução',
    '<strong>Medida Provisória</strong> (art. 62 CF): edita o Presidente · <strong>60 + 60 dias</strong> · tranca pauta após 45 dias · não cabe MP sobre: nacionalidade, eleitoral, penal, processual civil/penal, organização do Judiciário/MP',
    'Veto presidencial: político (interesse público) ou jurídico (inconstitucional) · <strong>15 dias</strong> para vetar · prazo não exercido = sanção tácita · veto pode ser derrubado por CN (maioria absoluta, votação secreta)',
    'Lei Delegada: Presidente solicita delegação ao Congresso via resolução · vedada delegação de: EC · matérias de lei complementar · organização do Judiciário · planos plurianuais'
  ],
  pegadinha: 'MP não converte em lei automaticamente — precisa de aprovação do CN. Se não apreciada no prazo: perde eficácia e as relações jurídicas constituídas devem ser reguladas por decreto legislativo do CN.'
},

'9_1': {
  titulo: 'Ética — Honorários e Sociedade de Advogados',
  emoji: '⚖️', materia: 'Ética Profissional',
  pontos: [
    'Honorários contratuais: fixados livremente entre advogado e cliente · forma escrita recomendada · podem ser fixos, percentuais ou mistos',
    'Honorários arbitrados: quando não há contrato, o juiz fixa por equidade observando a tabela da OAB · arts. 22-27 EOAB + art. 85 CPC',
    'Honorários sucumbenciais (art. 85 CPC): 10% a 20% do valor da condenação (critérios: grau de zelo, lugar, natureza, tempo, importância) · pertencem ao <strong>advogado</strong> (não à parte)',
    'Sociedade de advogados: registro no Conselho Seccional · NÃO pode ter por sócio: pessoa jurídica · pessoa não inscrita na OAB · pessoa inscrita em outro cargo incompatível',
    'Responsabilidade: o advogado responde individualmente por seus atos · a sociedade responde subsidiariamente',
    'Advocacia pro bono (Provimento 188/2018 CFOAB): prestação gratuita de serviços · não pode ser remunerada disfarçadamente · vedada captação de clientela'
  ],
  pegadinha: 'Honorários sucumbenciais pertencem ao ADVOGADO (não à parte) — é direito autônomo do profissional (art. 23 EOAB + Súmula 306 STJ). A parte não pode renunciar a eles sem autorização do advogado.'
},

// ── DIA 10 ────────────────────────────────────────────────────

'10_0': {
  titulo: 'Civil — Extinção das Obrigações, Mora e Cláusula Penal',
  emoji: '📜', materia: 'Direito Civil',
  pontos: [
    'Extinção: <strong>pagamento · consignação · sub-rogação · dação em pagamento · novação · compensação · confusão · remissão</strong>',
    'Novação: extinção da obrigação anterior e criação de nova — acessórios se extinguem (salvo ressalva expressa)',
    'Compensação: dívidas líquidas, vencidas e homogêneas entre as mesmas partes — opera de pleno direito (art. 368 CC)',
    'Mora do devedor (art. 394 CC): não paga no tempo, lugar e forma convencionados → responde por perdas e danos + juros + atualização + honorários',
    'Mora do credor: recusa injustificada de receber ou dar quitação → devedor pode consignar em pagamento',
    'Cláusula penal (arts. 408-416 CC): moratória (pelo retardamento) — NÃO acumula com perdas e danos gerais · compensatória (pelo inadimplemento total) — substitui as perdas e danos'
  ],
  pegadinha: 'Cláusula penal compensatória SUBSTITUI as perdas e danos (art. 416 CC) — credor não pode pedir ambas. Cláusula penal moratória NÃO impede cobrar, além dela, as perdas e danos gerais (art. 416, pú).'
},

'10_1': {
  titulo: 'Penal — Imputabilidade e Concurso de Pessoas',
  emoji: '⚔️', materia: 'Direito Penal',
  pontos: [
    'Inimputabilidade (art. 26 CP): doença mental / desenvolvimento mental incompleto/retardado + sem entender ou autodeterminar → isenção de pena, aplicação de medida de segurança',
    'Semi-imputabilidade (art. 26, pú CP): capacidade reduzida → redução de pena de 1/3 a 2/3 OU medida de segurança (sistema vicariante — não se acumulam)',
    'Menoridade penal: menor de 18 anos = inimputável (art. 27 CP + art. 228 CF) · Medida socioeducativa via ECA',
    'Concurso de pessoas (art. 29 CP): <strong>autoria · coautoria · participação</strong> — todos respondem pelo mesmo crime, na medida de sua culpabilidade',
    'Comunicabilidade (art. 30 CP): circunstâncias <strong>pessoais/subjetivas</strong> NÃO se comunicam (ex: reincidência) · circunstâncias <strong>objetivas</strong> se comunicam quando o coautor as conhece',
    '<strong>Súmula 231 STJ:</strong> atenuantes não podem reduzir a pena abaixo do mínimo legal — NENHUMA exceção (nem menoridade, nem confissão)'
  ],
  pegadinha: 'Súmula 231 STJ é clara: NENHUMA atenuante (nem menoridade, nem confissão espontânea) reduz a pena abaixo do mínimo legal. Apenas causas de diminuição (3ª fase) podem ir abaixo do mínimo.'
},

// ── DIA 11 ────────────────────────────────────────────────────

'11_0': {
  titulo: 'Processo Penal — Procedimentos e Tribunal do Júri',
  emoji: '📋', materia: 'Direito Processual Penal',
  pontos: [
    'Procedimento ordinário: pena máxima ≥ 4 anos · até sentença: denúncia → resposta preliminar → audiência de instrução e julgamento → alegações finais → sentença',
    'Procedimento sumário: pena máxima < 4 anos (e ≥ 2 anos) · rito mais célere · menos fases',
    'JECrim (Lei 9.099/95): pena máxima ≤ 2 anos · transação penal e suspensão condicional do processo',
    'Tribunal do Júri: 25 convocados → quórum mínimo 15 para instalar → sorteados 7 → Conselho de Sentença · votação secreta · maioria simples (4 × 3)',
    '1ª fase (sumário de culpa): pronúncia (admite ao Júri) · impronúncia (não admite — RESE) · absolvição sumária · desclassificação (RESE ou Apelação)',
    'Pronúncia: exige <strong>materialidade + indícios de autoria</strong> — não precisa de certeza (é juízo de probabilidade)'
  ],
  pegadinha: 'Pronúncia → RESE. Absolvição sumária → APELAÇÃO. Impronúncia → RESE. Desclassificação → RESE (se para crime da competência da Vara) ou RESE (pelo MP). A banca embaralha os recursos!'
},

'11_1': {
  titulo: 'Trabalho — Remuneração, Salário e Adicionais',
  emoji: '⚙️', materia: 'Direito do Trabalho',
  pontos: [
    'Remuneração = salário + gorjetas ·<strong> Salário</strong> = contraprestação direta do empregador · Gorjetas: integram a remuneração para todos os fins',
    'Equiparação salarial (art. 461 CLT): mesma função · mesmo empregador · mesmo local de trabalho · diferença de tempo na função ≤ 4 anos · diferença de tempo de empresa ≤ 2 anos',
    'Insalubridade: 10% (grau mínimo) · 20% (grau médio) · 40% (grau máximo) — base: <strong>salário mínimo</strong> (Súmula 228 TST + RE 565.714/STF)',
    'Periculosidade: <strong>30%</strong> sobre o salário base (NÃO acumula com insalubridade — empregado escolhe)',
    'FGTS: <strong>8%</strong> do salário + verbas salariais (hora extra, adicional noturno etc.) — recolhido até o dia <strong>20</strong> de cada mês',
    'Participação nos lucros (PLR — Lei 10.101/00): não tem natureza salarial · não integra o salário para fins trabalhistas · livre negociação'
  ],
  pegadinha: 'Adicionais de insalubridade e periculosidade NÃO se acumulam — empregado escolhe o mais favorável (Súmula 191 TST). A banca cria situações onde o empregado recebe os dois — ERRADO como regra geral.'
},

// ── DIA 12 ────────────────────────────────────────────────────

'12_0': {
  titulo: 'Constitucional — Poder Executivo e Funções Essenciais',
  emoji: '🏛️', materia: 'Direito Constitucional',
  pontos: [
    'Presidente: eleito por sufrágio universal direto · mandato 4 anos · 1 reeleição · posse em 1º de janeiro',
    'Requisitos: nato · >35 anos · exercício pleno dos direitos políticos · alistamento eleitoral · domicílio no Brasil · filiação partidária',
    'Responsabilidade: crime comum → STF (após autorização da Câmara 2/3) · crime de responsabilidade → Senado (após autorização da Câmara 2/3) · afastamento por 180 dias durante julgamento',
    'Art. 133 CF: o advogado é indispensável à administração da Justiça · inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei',
    'Funções essenciais (arts. 127-135 CF): MP · Advocacia Pública (AGU, PGE) · Defensoria Pública · Advocacia (OAB)',
    'MP: uma das funções mais cobradas — <strong>independência funcional</strong> · promotor natural · vedado: exercer advocacia · receber honorários (salvo magistério)'
  ],
  pegadinha: 'Art. 133 CF protege o advogado por "atos e manifestações no exercício da profissão" — NÃO por qualquer ato! Insultos fora da atuação profissional não estão protegidos. Calúnia não está coberta pela imunidade (ADI 1.127/STF).'
},

'12_1': {
  titulo: 'Ética — Infrações Disciplinares e Processo Disciplinar',
  emoji: '⚖️', materia: 'Ética Profissional',
  pontos: [
    'Infrações disciplinares: art. 34 EOAB (rol exemplificativo) · as mais cobradas: exercer a profissão quando impedido/suspenso · apropriar-se de valores do cliente · abandonar a causa · reter autos',
    'Sanções (art. 35 EOAB): <strong>censura · suspensão (30 dias a 12 meses) · exclusão · multa</strong>',
    'Censura: aplicada em casos de menor potencial ofensivo + sem antecedentes + boa conduta · não impede o exercício da advocacia',
    'Suspensão: impede o exercício durante o prazo · reabilitação possível após cumprimento',
    'Processo disciplinar: instaurado por representação ou de ofício · sigilo durante a instrução (violação = infração disciplinar) · defesa obrigatória',
    '<strong>Prescrição disciplinar</strong> (art. 43 EOAB): 5 anos contados da infração (ou da cessação, se permanente/continuada)'
  ],
  pegadinha: 'Censura NÃO impede o exercício da advocacia (é advertência registrada). Suspensão SIM impede. A banca cria situações de censura e afirma que o advogado está impedido de advogar — ERRADO.'
},

// ── DIA 13 ────────────────────────────────────────────────────

'13_0': {
  titulo: 'Civil — Contratos: Teoria Geral e Espécies',
  emoji: '📜', materia: 'Direito Civil',
  pontos: [
    'Formação: proposta + aceitação · Proposta vincula o proponente (art. 427 CC) · Aceitação fora do prazo = nova proposta',
    'Princípios: autonomia privada · função social (art. 421 CC) · boa-fé objetiva (art. 422 CC) · equilíbrio econômico',
    'Lesão (art. 157 CC): prestação excessiva + urgência ou inexperiência do lesionado → anulável · prazo de 4 anos',
    'Compra e venda: obrigação de dar (entrega do bem pelo vendedor / pagamento pelo comprador) · sinal/arras: se desistir quem deu = perde; quem recebeu = devolve em dobro',
    'Mandato (art. 653 CC): outorga de poderes para praticar atos em nome do mandante · pode ser verbal (salvo para atos que exijam forma) · substabelecimento possível',
    'Locação (Lei 8.245/91): 30 meses → findo o prazo, locatário pode ser despejado · +30 meses → locatário adquire preferência · fiança + locação > 10 anos: exige outorga conjugal'
  ],
  pegadinha: 'Boa-fé objetiva (art. 422 CC) aplica-se à FORMAÇÃO e EXECUÇÃO do contrato — inclui a fase pré-contratual. A banca diz que só aplica durante a execução — ERRADO.'
},

'13_1': {
  titulo: 'Penal — Dosimetria da Pena (3 Fases)',
  emoji: '⚔️', materia: 'Direito Penal',
  pontos: [
    '1ª fase: <strong>pena-base</strong> — parte do mínimo legal e aplica as 8 circunstâncias judiciais do art. 59 CP (culpabilidade, antecedentes, conduta social, personalidade, motivos, circunstâncias, consequências, comportamento da vítima)',
    '2ª fase: <strong>agravantes e atenuantes</strong> (arts. 61-65 CP) — NÃO ultrapassam os limites mínimo/máximo do tipo (Súmula 231 STJ)',
    '3ª fase: <strong>causas de aumento e diminuição</strong> — PODEM ultrapassar os limites do tipo (ex: tentativa = 1/3 a 2/3 de redução)',
    'Regime inicial: fechado (pena > 8 anos ou reincidente em crime doloso > 4 anos) · semiaberto (> 4 até 8 anos, não reincidente) · aberto (≤ 4 anos, não reincidente)',
    'Substituição por restritiva de direitos: crime doloso ≤ 4 anos SEM violência ou grave ameaça + réu não reincidente específico · culposo: qualquer pena',
    'Restritivas de direitos: prestação pecuniária · prestação de serviços à comunidade · interdição temporária de direitos · perda de bens · limitação de fim de semana'
  ],
  pegadinha: 'Atenuantes (2ª fase) NUNCA reduzem abaixo do mínimo (Súmula 231 STJ). Causas de diminuição (3ª fase) PODEM ir abaixo do mínimo. Isso é cobrado como pegadinha: "a atenuante da menoridade pode reduzir abaixo do mínimo" → FALSO!'
},

// ── DIA 14 ────────────────────────────────────────────────────

'14_0': {
  titulo: 'Tributário — Conceito de Tributo, Espécies e Princípios',
  emoji: '💰', materia: 'Direito Tributário',
  pontos: [
    'Tributo (art. 3º CTN): prestação pecuniária compulsória · em moeda ou cujo valor nela se possa exprimir · instituída por lei · cobrada mediante atividade administrativa plenamente vinculada',
    'Espécies: <strong>impostos · taxas · contribuições de melhoria · empréstimos compulsórios · contribuições especiais</strong> (teoria pentapartida — STF)',
    'Princípio da legalidade: tributo só por lei · exceções (decreto presidencial pode alterar alíquota): II, IE, IPI, IOF',
    'Anterioridade do exercício (art. 150, III, b CF): lei publicada em 2025 só vale a partir de 1/1/2026 · exceções: II, IE, IPI, IOF, IEG, EC para calamidade/guerra',
    'Noventena (art. 150, III, c CF): 90 dias entre a lei e a eficácia · exceções: IR, IPTU (base de cálculo), IPVA (base de cálculo)',
    'Imunidade recíproca (art. 150, VI, a CF): imóvel da autarquia alugado perde imunidade se não usado para suas finalidades (Súmula 724 STF)'
  ],
  pegadinha: 'IPI tem exceção à anterioridade do exercício (pode ser cobrado imediatamente), mas NÃO tem exceção à noventena (precisa esperar 90 dias). A banca diz que IPI pode ser cobrado de imediato — ERRADO quanto à noventena!'
},

'14_1': {
  titulo: 'Processo do Trabalho — Recursos',
  emoji: '⚙️', materia: 'Direito Processual do Trabalho',
  pontos: [
    'Recurso Ordinário (RO): das decisões das Varas para os TRTs · prazo <strong>8 dias</strong> · depósito recursal (para empregador)',
    'Recurso de Revista (RR): dos TRTs para o TST · exige <strong>transcendência</strong> (econômica, política, social ou jurídica) · hipóteses: violação de CF/lei federal/divergência jurisprudencial',
    'Agravo de Instrumento: contra decisão que nega seguimento ao RR · transforma o AI em RR se provido',
    'Embargos de Declaração: omissão · obscuridade · contradição · efeito <strong>interruptivo</strong> (não suspensivo como no processo civil — suspende no CPC, <strong>interrompe</strong> na CLT)',
    'Depósito recursal: empregador deve depositar o valor da condenação (ou parte) para recorrer · ausência = deserção (não conhecimento)',
    'Execução trabalhista: título executivo = sentença trabalhista + termo de conciliação · penhora · embargos à execução (30 dias)'
  ],
  pegadinha: 'Embargos de declaração na CLT têm efeito INTERRUPTIVO (recomeça o prazo do zero) — diferente do CPC onde têm efeito suspensivo (para o prazo e retoma). A banca usa "suspensivo" no processo trabalhista — ERRADO.'
},

// ── DIA 15 ────────────────────────────────────────────────────

'15_0': {
  titulo: 'Administrativo — Organização, Princípios LIMPE e Poderes',
  emoji: '🏛️', materia: 'Direito Administrativo',
  pontos: [
    'Administração direta: Presidente + Ministérios + órgãos · Indireta: <strong>autarquias · fundações públicas · empresas públicas · sociedades de economia mista</strong>',
    'OAB: entidade sui generis (NÃO é autarquia de regime especial como o CRM — ADI 3.026/STF)',
    'Princípios LIMPE (art. 37 CF): <strong>Legalidade · Impessoalidade · Moralidade · Publicidade · Eficiência</strong> · implícitos: razoabilidade, proporcionalidade, autotutela, segurança jurídica',
    'Poder vinculado: lei prevê todos os elementos do ato (competência, forma, objeto, motivo, finalidade) — sem margem de escolha',
    'Poder discricionário: lei deixa margem de mérito (conveniência e oportunidade) — objeto e motivo variáveis, mas nos limites da lei',
    'Poder de polícia: limitar/condicionar atividades particulares em prol do interesse público · sempre com previsão legal · coercitivo'
  ],
  pegadinha: 'Autarquias têm personalidade jurídica de direito PÚBLICO. Empresas públicas e SEM têm personalidade jurídica de direito PRIVADO — mas se submetem ao Direito Público em licitação, concurso e responsabilidade.'
},

'15_1': {
  titulo: 'Civil — Responsabilidade Civil (Subjetiva e Objetiva)',
  emoji: '📜', materia: 'Direito Civil',
  pontos: [
    'Responsabilidade subjetiva (art. 186 CC): <strong>ato ilícito + culpa + dano + nexo causal</strong> — necessita de culpa (imprudência, negligência, imperícia)',
    'Responsabilidade objetiva (art. 927, pú CC): <strong>atividade de risco</strong> — prescinde de culpa; basta provar o ato + dano + nexo',
    'Art. 37, §6º CF: Estado responde OBJETIVAMENTE pelos danos causados por seus agentes · ação de regresso contra o agente por dolo ou culpa',
    'Excludentes do nexo causal: <strong>caso fortuito/força maior · fato exclusivo da vítima · fato exclusivo de terceiro</strong> — rompem o nexo',
    'Dano moral: não precisa de prova do prejuízo patrimonial — basta a violação do direito da personalidade (dano in re ipsa em alguns casos)',
    'Dano estético: autônomo e cumulável com dano moral (Súmula 387 STJ): "É lícita a cumulação das indenizações de dano estético e dano moral"'
  ],
  pegadinha: 'A responsabilidade do Estado pelo ato de seus agentes é OBJETIVA (art. 37, §6º CF). Mas a ação de regresso contra o AGENTE é SUBJETIVA (exige dolo ou culpa). A banca mistura as duas — são regras diferentes para sujeitos diferentes!'
},

// ── DIA 16 ────────────────────────────────────────────────────

'16_0': {
  titulo: 'Processo Penal — Recursos e Habeas Corpus',
  emoji: '📋', materia: 'Direito Processual Penal',
  pontos: [
    'RESE (art. 581 CPP): rol taxativo · 5 dias · juízo de retratação · hipóteses: não recebimento da denúncia · pronúncia · impronúncia · extinção da punibilidade',
    'Apelação (art. 593 CPP): decisões definitivas de 1º grau · 5 dias interposição + 8 dias razões · fundamentos do Júri: nulidade / contrariedade à prova / erro de dosimetria / contrariedade à lei',
    'Embargos infringentes (art. 609, pú CPP): acórdão não unânime · 10 dias · <strong>EXISTEM no CPP</strong> — foram extintos só no CPC/2015',
    'HC (art. 5º, LXVIII CF): ação · gratuita · qualquer pessoa impetra · liberdade de locomoção ameaçada ou cerceada · liberatório / preventivo (salvo-conduto) / suspensivo (trancamento)',
    'HC NÃO cabe: punição disciplinar militar (mérito) · PJ como paciente · matéria de prova · após trânsito em julgado (salvo ilegalidade manifesta)',
    'Non reformatio in pejus: em recurso exclusivo do réu, o tribunal NÃO pode piorar sua situação'
  ],
  pegadinha: 'Pronúncia = RESE pelo réu. Absolvição sumária = APELAÇÃO pelo MP. Embargos infringentes EXISTEM no CPP (extintos só no CPC). HC = AÇÃO (não recurso), impetrada por qualquer pessoa.'
},

'16_1': {
  titulo: 'Trabalho — Aviso Prévio, Rescisão e Verbas',
  emoji: '⚙️', materia: 'Direito do Trabalho',
  pontos: [
    'Aviso prévio proporcional (Lei 12.506/2011): <strong>30 dias base + 3 dias/ano</strong> de serviço (máx. 90 dias) · beneficia APENAS o empregado (empregador que dispensa = 90 dias máx.)',
    'Justa causa (art. 482 CLT): ato de improbidade · desídia · abandono de emprego (30 dias + intenção = Súmula 32 TST) · embriaguez habitual em serviço · improbidade',
    'Sem justa causa: aviso prévio + 13º prop. + férias prop.+1/3 + férias vencidas+1/3 + saldo + <strong>FGTS levantamento + 40% multa</strong> + seguro-desemprego',
    'Com justa causa: saldo + 13º prop. + férias <strong>vencidas</strong>+1/3 · férias proporcionais = <strong>perdidas</strong> · sem FGTS/multa/seguro',
    'Distrato (art. 484-A CLT — Reforma 2017): 50% aviso prévio + <strong>20% multa FGTS</strong> (não 40%) + liberação de 80% do FGTS + demais verbas integrais',
    'Rescisão indireta (art. 483 CLT): culpa do empregador → verbas como dispensa sem justa causa (40% FGTS etc.)'
  ],
  pegadinha: 'No distrato a multa do FGTS é 20% (metade). Férias proporcionais são perdidas na justa causa. Abandono de emprego = 30 dias + intenção (não 3 nem 15 dias). Aviso prévio proporcional só beneficia o empregado.'
},

// ── DIA 17 ────────────────────────────────────────────────────

'17_0': {
  titulo: 'Constitucional — Judiciário e Controle Difuso',
  emoji: '🏛️', materia: 'Direito Constitucional',
  pontos: [
    'STF: <strong>11 ministros</strong> · nomeados pelo Presidente + aprovação pelo Senado (maioria absoluta) · >35 e <65 anos · aposentadoria compulsória: 75 anos',
    'STJ: <strong>mín. 33 ministros</strong> · 1/3 TRF + 1/3 TJ + 1/3 advogados e MP',
    'Garantias dos magistrados (art. 95 CF): <strong>vitaliciedade</strong> (2 anos no 1º grau; posse no tribunal) · <strong>inamovibilidade</strong> · <strong>irredutibilidade de subsídio</strong>',
    'Vedações: outra função (exceto magistério) · atividade político-partidária · <strong>advocacia: quarentena de 3 anos</strong> no juízo em que atuou',
    'Controle difuso: qualquer juiz ou tribunal · incidental · efeito <strong>inter partes</strong> · Senado (art. 52, X CF): pode suspender lei para efeito erga omnes',
    '<strong>Art. 97 CF + SV 10 STF:</strong> órgão fracionário de tribunal NÃO pode afastar lei por inconstitucionalidade (nem implicitamente) sem remeter ao pleno/órgão especial'
  ],
  pegadinha: 'Vitaliciedade no 1º grau = após 2 anos; no tribunal = desde a posse. SV 10: afastar a lei implicitamente também viola a reserva de plenário. Súmula vinculante NÃO vincula o Poder Legislativo.'
},

'17_1': {
  titulo: 'Civil — Posse e Propriedade (Usucapião)',
  emoji: '📜', materia: 'Direito Civil',
  pontos: [
    'Teoria objetiva de Ihering (adotada pelo CC/02 — art. 1.196): posse = exercício de fato dos poderes da propriedade · detenção (fâmulo da posse) ≠ posse',
    'Ações possessórias (fungíveis): esbulho → <strong>reintegração</strong> · turbação → <strong>manutenção</strong> · ameaça → <strong>interdito proibitório</strong>',
    'Liminar possessória: cabível sem audiência do réu apenas na força <strong>nova</strong> (< 1 ano e 1 dia) · força velha: rito ordinário, sem liminar automática',
    'Usucapião ordinária: <strong>10 anos</strong> + justo título + boa-fé (reduz para 5 anos com moradia/obras + registro cancelado)',
    'Usucapião extraordinária: <strong>15 anos</strong> sem JT/BF (reduz para <strong>10 anos</strong> com moradia habitual ou obra/trabalho produtivo)',
    'Usucapião especial urbana: <strong>5 anos · ≤ 250 m²</strong> · moradia · sem outro imóvel · Especial rural: <strong>5 anos · ≤ 50 ha</strong> · moradia + trabalho · sem outro imóvel · Bens públicos: <strong>NUNCA</strong> (SV 23 STF)'
  ],
  pegadinha: 'Usucapião urbana = 250 m². Rural = 50 ha. A banca inverte! Bens públicos são imprescritíveis — qualquer espécie de usucapião, sem exceção. Caseiro/detentor não pode usucapir (não tem posse, tem detenção).'
}

}; // fim REVIEW_CARDS
