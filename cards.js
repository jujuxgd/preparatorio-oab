// ============================================================
// OAB · Micro-Resumos de Revisão — Método VDE 120 Dias
// Estrutura: REVIEW_CARDS['dia_mIdx'] = { titulo, pontos, pegadinha }
// Dias 1-6 populados com conteúdo da Semana 01 VDE
// Dias 7+ usam fallback para mat.topicos do plano-vde.js
// ============================================================

const REVIEW_CARDS = {

// ════════════════════════════════════════════════════════════
// SEMANA 01 (Dias 1–6)  ·  PDF: Resumo - Semana 01 (120 dias)
// ════════════════════════════════════════════════════════════

// DIA 1 · Direito Constitucional
'1_0': {
  titulo: 'Constitucional · Teoria da Constituição e DFs',
  emoji: '🏛️', materia: 'Direito Constitucional',
  pontos: [
    '<strong>PCO:</strong> inicial, autônomo, ilimitado, incondicionado — normas têm presunção <strong>absoluta</strong> de constitucionalidade (não cabem em ADI)',
    '<strong>PEC (art. 60):</strong> 3/5 em 2 turnos em CADA casa · promulgada pelas Mesas · <strong>SEM sanção/veto presidencial</strong>',
    '<strong>Cláusulas pétreas (art. 60, §4):</strong> forma federativa · voto direto/secreto/universal/periódico · separação dos Poderes · DGs individuais',
    '<strong>Voto obrigatório NÃO é cláusula pétrea</strong> — pode ser extinto por EC · PEC inconstitucional antes: MS preventivo · depois: ADI',
    '<strong>Eficácia:</strong> plena (integral) · contida (restringível por lei) · limitada (depende de lei — programática/institutiva)',
    '<strong>Tratados DH:</strong> rito especial (2 turnos + 3/5) = status de EC · rito ordinário = eficácia <strong>supralegal</strong>',
    '<strong>Reunião pacífica:</strong> sem autorização estatal · aviso prévio: CF exige / STF (RE 806.339) não exige',
    '<strong>CPI:</strong> pode quebrar sigilo bancário/fiscal/dados telefônicos · <strong>NÃO</strong> pode autorizar grampo (interceptação telefônica)',
    '<strong>EC 115/2022:</strong> proteção de dados pessoais = direito fundamental (art. 5º, LXXIX CF)'
  ],
  pegadinha: 'Presidente NÃO veta EC — promulgada pelas Mesas do CN sem participação do Presidente. Voto OBRIGATÓRIO não é cláusula pétrea (pode ser extinto por EC). Cláusula pétrea só veda ABOLIR, não modificar para ampliar.'
},

// DIA 2 · Direito do Trabalho
'2_0': {
  titulo: 'Trabalho · Relação de Emprego e Contratos',
  emoji: '⚙️', materia: 'Direito do Trabalho',
  pontos: [
    '<strong>Vínculo empregatício — SHOPP:</strong> Subordinação · Habitualidade · Onerosidade · Pessoalidade · Pessoa Física (TODOS simultâneos)',
    '<strong>Art. 442-B CLT:</strong> autônomo com ou sem exclusividade NÃO gera vínculo — o essencial é ausência de subordinação',
    '<strong>Teletrabalho por produção/tarefa:</strong> sem controle de jornada → sem horas extras, sem intervalos obrigatórios',
    '<strong>Mudança de regime:</strong> presencial→remoto = mútuo acordo · remoto→presencial = decisão unilateral do empregador + 15 dias de adaptação',
    '<strong>Contrato de experiência:</strong> máx. 90 dias · apenas <strong>UMA</strong> prorrogação · após = prazo indeterminado automático',
    '<strong>Trabalho intermitente:</strong> convocação 3 dias corridos · resposta 1 dia útil · silêncio = recusa · multa 50% da remuneração em 30 dias',
    '<strong>Contrato temporário (Lei 6.019):</strong> máx. 180 + 90 dias · obrigatoriamente escrito · nula cláusula que proíba contratação posterior',
    '<strong>Aprendiz:</strong> 14 a 24 anos (sem limite para deficientes) · prazo máx. 2 anos',
    '<strong>Teletrabalho para estagiário/aprendiz:</strong> permitido (art. 75-B, §6 CLT)'
  ],
  pegadinha: 'Teletrabalho por PRODUÇÃO = sem jornada, sem horas extras. Teletrabalho por JORNADA = tem horas extras. Contrato de experiência só UMA prorrogação — na segunda vira prazo indeterminado.'
},

// DIA 3 · Direito Civil
'3_0': {
  titulo: 'Civil · Pessoas Naturais e Jurídicas',
  emoji: '📜', materia: 'Direito Civil',
  pontos: [
    '<strong>Capacidade de direito:</strong> toda pessoa possui · <strong>Capacidade de fato:</strong> exercício pessoal dos atos da vida civil — nem todos',
    '<strong>Absolutamente incapaz:</strong> APENAS menor de 16 anos (representado) · <strong>Deficiência NÃO gera mais incapacidade</strong> (EPD, Lei 13.146/2015)',
    '<strong>Relativamente incapaz (assistido):</strong> 16-18 anos · ébrios habituais/viciados · quem não pode exprimir vontade · pródigos',
    '<strong>Emancipação voluntária:</strong> responsabilidade parental PERMANECE solidariamente pelos atos ilícitos · Na legal/judicial: cessa',
    '<strong>Tutor NÃO emancipa</strong> — apenas requer ao juiz; o juiz concede (emancipação judicial)',
    '<strong>Emancipação é irrevogável</strong> — divórcio dos pais não a desfaz',
    '<strong>Direito ao esquecimento:</strong> INCOMPATÍVEL com a CF (STF, RE 1.010.606/RJ, 2021)',
    '<strong>Morte presumida por ausência:</strong> curatela → sucessão provisória (1/3 anos) → sucessão definitiva (10 anos após provisória)',
    '<strong>Desconsideração PJ — Teoria Maior (CC art. 50):</strong> abuso = desvio de finalidade OU confusão patrimonial · Encerramento irregular sozinho NÃO autoriza',
    '<strong>Teoria Menor (CDC/Lei Ambiental):</strong> basta o prejuízo ao credor / insolvência'
  ],
  pegadinha: 'Na emancipação VOLUNTÁRIA, os pais MANTÊM responsabilidade solidária pelos atos ilícitos do emancipado. Na legal/judicial, cessa. Deficiência NÃO gera incapacidade automaticamente (mudança do EPD 2015).'
},

// DIA 4 · Direito Tributário
'4_0': {
  titulo: 'Tributário · Princípios e Limitações Constitucionais',
  emoji: '💰', materia: 'Direito Tributário',
  pontos: [
    '<strong>Aplicação imediata (sem anterioridade):</strong> II · IE · IOF · IEG · Empréstimo Compulsório (guerra/calamidade)',
    '<strong>Anterioridade anual:</strong> só produz efeitos no exercício seguinte · Exceções: II, IE, IOF, IEG, EC calamidade/guerra, CIDE/ICMS-combustíveis (restabelecimento)',
    '<strong>Anterioridade nonagesimal:</strong> + 90 dias além do próximo exercício · Exceções (sem os 90 dias): IR, II, IE, IOF, IEG, EC, base de cálculo do IPVA e IPTU',
    '<strong>IPI:</strong> exceção à anual (entra no mesmo exercício) · MAS respeita a nonagesimal (90 dias)',
    '<strong>SV 50:</strong> lei que altera só o prazo de recolhimento NÃO se sujeita à anterioridade',
    '<strong>Legalidade — ato do Executivo (sem lei):</strong> alíquotas do II, IE, IPI, IOF, CIDE-combustíveis, ICMS-combustíveis · Correção monetária dentro da inflação: também não precisa de lei',
    '<strong>LC obrigatória:</strong> Contribuição Social Residual · Empréstimo Compulsório · IGF · Imposto Residual · Imposto Seletivo · IBS · CBS',
    '<strong>Irretroatividade — exceções (art. 106 CTN):</strong> lei interpretativa sem penalidade · deixa de definir ato como infração · penalidade menos severa (ato não definitivamente julgado)',
    '<strong>Pecunia non olet (art. 118 CTN):</strong> ilicitude do negócio não afasta a tributação'
  ],
  pegadinha: 'II, IE, IOF = sem NENHUMA anterioridade. IPI = só precisa dos 90 dias (nonagesimal). IR = só precisa esperar o próximo exercício (sem 90 dias). A banca embaralha essas exceções!'
},

// DIA 5 · Processo do Trabalho
'5_0': {
  titulo: 'Processo do Trabalho · Competência e Prazos',
  emoji: '⚖️', materia: 'Direito Processual do Trabalho',
  pontos: [
    '<strong>Competência territorial (art. 651 CLT):</strong> local da PRESTAÇÃO DE SERVIÇOS · Agente/viajante: domicílio ou agência/filial',
    '<strong>JT NÃO é competente para:</strong> servidores estatutários (Justiça Federal/Estadual) · previdência complementar privada (Justiça Comum) · ações penais',
    '<strong>Falência/recuperação judicial:</strong> JT = fase de conhecimento · execução = juízo universal da falência',
    '<strong>Dano moral por acidente de trabalho:</strong> JT (art. 114, VI CF)',
    '<strong>Horário dos atos (art. 770 CLT):</strong> dias úteis 6h–20h · Audiências: 8h–18h · Penhora em domingo/feriado: com autorização judicial',
    '<strong>Prazos (art. 775 CLT):</strong> DIAS ÚTEIS · regra geral: 8 dias · Embargos de Declaração: 5 dias · Recurso Extraordinário: 15 dias',
    '<strong>Prazo diferenciado (DL 779/69):</strong> dobro para recorrer + quádruplo para contestar = União, Estados, DF, Municípios, Autarquias e FPs que não exploram atividade econômica',
    '<strong>SEM prazo diferenciado:</strong> empresas públicas e sociedades de economia mista',
    '<strong>Incompetência territorial:</strong> autos apartados em 5 dias úteis · processo suspenso · remessa ao juízo competente'
  ],
  pegadinha: 'Empresa pública (ex: Caixa) e Sociedade de Economia Mista (ex: Petrobras) NÃO têm prazo em dobro/quádruplo na JT. Penhora em domingo É permitida com autorização do juiz.'
},

// DIA 6 · Direito Penal
'6_0': {
  titulo: 'Penal · Eficácia da Lei Penal no Tempo e Espaço',
  emoji: '⚔️', materia: 'Direito Penal',
  pontos: [
    '<strong>Retroatividade da lei benéfica (lex mitior):</strong> retroage SEMPRE, mesmo com sentença transitada em julgado → requer ao juízo de execução',
    '<strong>Abolitio criminis:</strong> apaga todos efeitos PENAIS (sem pena, sem reincidência, sem antecedentes) · subsistem efeitos CIVIS · causa de extinção da punibilidade',
    '<strong>Tempo do crime — Teoria da Atividade:</strong> momento da ação/omissão · Mnemônico LUTA: LUgar = Ubiquidade; TAmpo = Atividade',
    '<strong>Lugar do crime — Teoria da Ubiquidade:</strong> onde ocorreu ação/omissão OU onde se produziu o resultado · Exceção: plurilocais no Brasil = Teoria do Resultado (CPP art. 70)',
    '<strong>Súmula 711 STF:</strong> crime permanente/continuado → aplica-se a lei mais grave vigente antes da cessação',
    '<strong>Leis temporária e excepcional — ultratividade:</strong> aplicam-se aos fatos praticados durante sua vigência, mesmo após revogadas → exceção à retroatividade benéfica',
    '<strong>Extraterritorialidade incondicionada (art. 7, I CP):</strong> crimes contra vida/liberdade do Presidente · patrimônio/fé pública de entes públicos · genocídio por brasileiro',
    '<strong>Extraterritorialidade condicionada:</strong> 5 condições cumulativas: entrar no Brasil · fato punível no estrangeiro · previsto em extradição · não absolvido/condenado · não perdoado/extinta punibilidade',
    '<strong>Violência doméstica:</strong> lesão corporal = ação pública INCONDICIONADA'
  ],
  pegadinha: 'Crime permanente com menor que atinge a maioridade = IMPUTÁVEL (consumação ocorreu quando já era maior). Lei temporária/excepcional tem ULTRATIVIDADE — não retroage lei benéfica posterior. Lugar do crime dentro do Brasil: Teoria do RESULTADO (art. 70 CPP), não ubiquidade!'
}

}; // fim REVIEW_CARDS
