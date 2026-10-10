// Calendário até a prova (12/10/2026 → 10/01/2027).
// Fase 1 (até 20/12): cada dia de seg a sáb é um ou dois PDFs do dia do VDE (n = DIA do VDE, arquivo
// "Dia n - Matéria.pdf" em vde-dias.js), na ordem do VDE; nos dias com dois, os PDFs mais curtos.
// Domingo: simulado completo. q = tópicos do banco; k = faixa de DICAS do Gabaritaço; g = questões
// "Como já caiu" do Gabaritaço no banco. Fase 2: revisão (inalterada). Sem a semana 14 do VDE.
window.CAL_ATIVO = {
"curto": {
"Ética Profissional": "Ética",
"Direito Constitucional": "Constitucional",
"Direito Civil": "Civil",
"Direito Processual Civil": "Proc. Civil",
"Direito Penal": "Penal",
"Direito Processual Penal": "Proc. Penal",
"Direito do Trabalho": "Trabalho",
"Direito Processual do Trabalho": "Proc. Trabalho",
"Direito Administrativo": "Administrativo",
"Direito Tributário": "Tributário",
"Direito Empresarial": "Empresarial",
"ECA": "ECA",
"Direito do Consumidor": "Consumidor",
"Direito Previdenciário": "Previdenciário",
"Direito Eleitoral": "Eleitoral"
},
"dias": [
{
"d": "2026-10-12",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Constitucional",
"s": "Teoria da Constituição e direitos fundamentais",
"n": 1,
"q": [
"Teoria da constituição",
"Direitos e garantias fundamentais"
],
"k": [
1,
14
],
"g": [
"oab_000232",
"oab_000854",
"oab_000930"
]
}
]
},
{
"d": "2026-10-13",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito do Trabalho",
"s": "Relação de trabalho e contrato de trabalho",
"n": 2,
"q": [
"Contrato de trabalho"
],
"k": [
1,
7
],
"g": [
"oab_000830"
]
}
]
},
{
"d": "2026-10-14",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Civil",
"s": "Parte geral: pessoas naturais e jurídicas",
"n": 3,
"q": [
"Parte geral"
],
"k": [
1,
6
],
"g": [
"oab_001432"
]
}
]
},
{
"d": "2026-10-15",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Tributário",
"s": "Princípios tributários",
"n": 4,
"q": [
"Princípios tributários"
],
"k": [
1,
14
],
"g": [
"oab_000556",
"oab_001020"
]
},
{
"d": "Direito Processual do Trabalho",
"s": "Competência; atos, termos e prazos",
"n": 5,
"q": [
"Competência da Justiça do Trabalho"
],
"k": [
1,
11
],
"g": [
"oab_001232",
"oab_001230",
"oab_000995",
"oab_001391"
]
}
]
},
{
"d": "2026-10-16",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Penal",
"s": "Lei penal no tempo e no espaço",
"n": 6,
"q": [
"Aplicação da lei penal"
],
"k": [
1,
6
],
"g": [
"oab_000357",
"oab_000746"
]
}
]
},
{
"d": "2026-10-17",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Ética Profissional",
"s": "Atividades da advocacia e mandato judicial",
"n": 8,
"q": [
"Atividade privativa de advocacia",
"Mandato e procuração"
],
"k": [
1,
6
],
"g": [
"oab_001321",
"oab_001158"
]
},
{
"d": "Direito Processual Civil",
"s": "Atos processuais",
"n": 9,
"q": [
"Atos processuais e nulidades"
],
"k": [
1,
7
]
}
]
},
{
"d": "2026-10-18",
"f": 1,
"tipo": "simulado",
"sim": {
"exame": 47,
"modo": "completo"
}
},
{
"d": "2026-10-19",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Processual Penal",
"s": "Inquérito policial e ação penal",
"n": 11,
"q": [
"Inquérito policial",
"Ação penal"
],
"k": [
1,
15
],
"g": [
"oab_000440",
"oab_000824"
]
}
]
},
{
"d": "2026-10-20",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Empresarial",
"s": "Empresa, empresário e estabelecimento",
"n": 12,
"q": [
"Teoria geral da empresa",
"Estabelecimento empresarial",
"Nome empresarial"
]
},
{
"d": "Direito Administrativo",
"s": "Princípios e poderes da Administração",
"n": 13,
"q": [
"Poderes administrativos"
],
"k": [
10,
15
],
"g": [
"oab_001027",
"oab_000636"
]
}
]
},
{
"d": "2026-10-21",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Constitucional",
"s": "Remédios constitucionais",
"n": 15,
"q": [
"Remédios constitucionais"
],
"k": [
15,
21
],
"g": [
"oab_001087"
]
},
{
"d": "Direito do Trabalho",
"s": "Empregado e empregador",
"n": 16,
"q": [
"Contrato de trabalho",
"Terceirização e responsabilidade"
],
"k": [
1,
16
],
"g": [
"oab_000830",
"oab_000754"
]
}
]
},
{
"d": "2026-10-22",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Civil",
"s": "Negócio jurídico",
"n": 17,
"q": [
"Negócio jurídico"
],
"k": [
7,
11
],
"g": [
"oab_001274"
]
},
{
"d": "Direito Tributário",
"s": "Competência tributária",
"n": 18,
"q": [
"Competência tributária"
],
"k": [
15,
24
],
"g": [
"oab_001022",
"oab_001179",
"oab_001182",
"oab_001183",
"oab_001104"
]
}
]
},
{
"d": "2026-10-23",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Penal",
"s": "Fato típico",
"n": 19,
"q": [
"Teoria do crime"
],
"k": [
7,
23
],
"g": [
"oab_000060",
"oab_001136",
"oab_001137"
]
},
{
"d": "Direito Processual do Trabalho",
"s": "Despesas processuais",
"n": 20,
"q": [
"Custas e honorários"
],
"k": [
1,
11
],
"g": [
"oab_001232",
"oab_001230",
"oab_000995",
"oab_001391"
]
}
]
},
{
"d": "2026-10-24",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Ética Profissional",
"s": "Inscrição na OAB, sociedade de advogados e advogado empregado",
"n": 22,
"q": [
"Inscrição na OAB",
"Estágio profissional",
"Sociedade de advogados",
"Advogado empregado"
],
"k": [
7,
26
],
"g": [
"oab_001003",
"oab_001080",
"oab_000224"
]
}
]
},
{
"d": "2026-10-25",
"f": 1,
"tipo": "simulado",
"sim": {
"exame": 46,
"modo": "completo"
}
},
{
"d": "2026-10-26",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Processual Civil",
"s": "Partes e procuradores; intervenção de terceiros e litisconsórcio",
"n": 23,
"q": [
"Partes e procuradores",
"Intervenção de terceiros",
"Litisconsórcio"
],
"k": [
8,
23
],
"g": [
"oab_000660",
"oab_000508",
"oab_001127",
"oab_000051"
]
}
]
},
{
"d": "2026-10-27",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Administrativo",
"s": "Organização da Administração Pública",
"n": 24,
"q": [
"Organização administrativa",
"Terceiro setor"
],
"k": [
16,
26
],
"g": [
"oab_000029"
]
}
]
},
{
"d": "2026-10-28",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Processual Penal",
"s": "Competência",
"n": 25,
"q": [
"Competência"
],
"k": [
16,
23
],
"g": [
"oab_000519",
"oab_000598"
]
}
]
},
{
"d": "2026-10-29",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Constitucional",
"s": "Nacionalidade e direitos políticos",
"n": 26,
"q": [
"Nacionalidade",
"Direitos políticos"
],
"k": [
22,
31
],
"g": [
"oab_000234"
]
},
{
"d": "Direito do Trabalho",
"s": "Alteração, interrupção e suspensão do contrato",
"n": 27,
"q": [
"Alteração, suspensão e interrupção do contrato"
],
"k": [
17,
26
],
"g": [
"oab_000833"
]
}
]
},
{
"d": "2026-10-30",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Civil",
"s": "Obrigações: modalidades, adimplemento e inadimplemento",
"n": 28,
"q": [
"Obrigações"
],
"k": [
12,
22
]
}
]
},
{
"d": "2026-10-31",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Tributário",
"s": "Imunidades tributárias",
"n": 29,
"q": [
"Imunidades tributárias"
],
"k": [
25,
31
]
}
]
},
{
"d": "2026-11-01",
"f": 1,
"tipo": "simulado",
"sim": {
"exame": 45,
"modo": "completo"
}
},
{
"d": "2026-11-02",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Ética Profissional",
"s": "Direitos e prerrogativas do advogado",
"n": 30,
"q": [
"Direitos e prerrogativas do advogado"
],
"k": [
14,
21
],
"g": [
"oab_001161",
"oab_001078",
"oab_001162"
]
},
{
"d": "Direito Penal",
"s": "Ilicitude e culpabilidade",
"n": 31,
"q": [
"Teoria do crime"
],
"k": [
7,
23
],
"g": [
"oab_000060",
"oab_001136",
"oab_001137"
]
}
]
},
{
"d": "2026-11-03",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Processual do Trabalho",
"s": "Ação trabalhista, defesa do réu e audiência",
"n": 32,
"q": [
"Petição inicial e resposta do réu",
"Audiência e revelia",
"Procedimento sumaríssimo",
"Jus postulandi e representação processual"
],
"k": [
12,
29
],
"g": [
"oab_000680"
]
},
{
"d": "Direito Processual Civil",
"s": "Tutela provisória",
"n": 36,
"q": [
"Tutela provisória"
],
"k": [
24,
30
],
"g": [
"oab_000895",
"oab_000889"
]
}
]
},
{
"d": "2026-11-04",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Administrativo",
"s": "Atos administrativos",
"n": 37,
"q": [
"Atos administrativos"
],
"k": [
27,
35
],
"g": [
"oab_000710"
]
},
{
"d": "Ética Profissional",
"s": "Honorários advocatícios",
"n": 38,
"q": [
"Honorários advocatícios"
],
"k": [
27,
32
],
"g": [
"oab_000147",
"oab_000996"
]
}
]
},
{
"d": "2026-11-05",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "ECA",
"s": "Direitos fundamentais e família substituta",
"n": 39,
"q": [
"Direitos fundamentais da criança e do adolescente",
"Adoção e família substituta"
]
},
{
"d": "Direito Penal",
"s": "Extinção da punibilidade e concurso de pessoas",
"n": 40,
"q": [
"Extinção da punibilidade",
"Concurso de pessoas"
],
"k": [
24,
39
],
"g": [
"oab_000433",
"oab_001133"
]
}
]
},
{
"d": "2026-11-06",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Empresarial",
"s": "Direito societário",
"n": 41,
"q": [
"Sociedades"
]
},
{
"d": "Direito Constitucional",
"s": "Organização do Estado e repartição de competências",
"n": 49,
"q": [
"Organização do Estado"
],
"k": [
32,
45
],
"g": [
"oab_000850",
"oab_001086"
]
}
]
},
{
"d": "2026-11-07",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Processual do Trabalho",
"s": "Provas",
"n": 57,
"q": [
"Provas no processo do trabalho"
],
"k": [
30,
34
]
},
{
"d": "Direito Constitucional",
"s": "Intervenção",
"n": 57,
"q": [
"Organização do Estado"
],
"k": [
32,
45
],
"g": [
"oab_000850",
"oab_001086"
]
}
]
},
{
"d": "2026-11-08",
"f": 1,
"tipo": "simulado",
"sim": {
"exame": 44,
"modo": "completo"
}
},
{
"d": "2026-11-09",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Processual Civil",
"s": "Procedimento comum",
"n": 58,
"q": [
"Petição inicial e resposta do réu",
"Conciliação e mediação",
"Provas"
],
"k": [
31,
39
]
}
]
},
{
"d": "2026-11-10",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Administrativo",
"s": "Agentes públicos",
"n": 59,
"q": [
"Agentes públicos"
],
"k": [
36,
45
],
"g": [
"oab_001267"
]
}
]
},
{
"d": "2026-11-11",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Civil",
"s": "Contratos em geral",
"n": 60,
"q": [
"Contratos"
],
"k": [
23,
35
],
"g": [
"oab_001272"
]
}
]
},
{
"d": "2026-11-12",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Tributário",
"s": "Obrigação e responsabilidade tributária",
"n": 61,
"q": [
"Obrigação tributária",
"Responsabilidade tributária"
],
"k": [
40,
52
]
}
]
},
{
"d": "2026-11-13",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Penal",
"s": "Penas e concurso de crimes",
"n": 64,
"q": [
"Teoria da pena",
"Dosimetria da pena",
"Concurso de crimes"
],
"k": [
29,
44
],
"g": [
"oab_001133",
"oab_000587"
]
}
]
},
{
"d": "2026-11-14",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Processual Penal",
"s": "Questões e processos incidentes; provas",
"n": 65,
"q": [
"Questões e processos incidentes",
"Provas"
],
"k": [
24,
31
],
"g": [
"oab_000597"
]
}
]
},
{
"d": "2026-11-15",
"f": 1,
"tipo": "simulado",
"sim": {
"exame": 43,
"modo": "completo"
}
},
{
"d": "2026-11-16",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Empresarial",
"s": "Títulos de crédito",
"n": 66,
"q": [
"Títulos de crédito"
]
}
]
},
{
"d": "2026-11-17",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Constitucional",
"s": "Poder Legislativo e processo legislativo",
"n": 67,
"q": [
"Poder Legislativo",
"Processo legislativo"
],
"k": [
46,
61
],
"g": [
"oab_000779",
"oab_000695",
"oab_001006",
"oab_001325"
]
}
]
},
{
"d": "2026-11-18",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito do Trabalho",
"s": "Estabilidade",
"n": 68,
"q": [
"Estabilidade e garantias de emprego"
],
"k": [
36,
40
]
},
{
"d": "Direito Processual Civil",
"s": "Sentença e coisa julgada",
"n": 69,
"q": [
"Sentença e coisa julgada"
],
"k": [
40,
44
]
}
]
},
{
"d": "2026-11-19",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Civil",
"s": "Contratos em espécie",
"n": 71,
"q": [
"Contratos"
],
"k": [
23,
35
],
"g": [
"oab_001272"
]
}
]
},
{
"d": "2026-11-20",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Administrativo",
"s": "Improbidade administrativa",
"n": 72,
"q": [
"Improbidade administrativa"
],
"k": [
46,
53
]
},
{
"d": "Ética Profissional",
"s": "Infrações e sanções disciplinares",
"n": 73,
"q": [
"Infrações e sanções disciplinares",
"Incompatibilidades e impedimentos"
],
"k": [
33,
43
],
"g": [
"oab_001157"
]
}
]
},
{
"d": "2026-11-21",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito do Consumidor",
"s": "Política nacional e direitos básicos do consumidor",
"n": 74,
"q": [
"Relação de consumo",
"Direitos básicos do consumidor"
]
}
]
},
{
"d": "2026-11-22",
"f": 1,
"tipo": "simulado",
"sim": {
"exame": 42,
"modo": "completo"
}
},
{
"d": "2026-11-23",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Penal",
"s": "Crimes contra a vida e contra a honra",
"n": 75,
"q": [
"Crimes contra a pessoa"
],
"k": [
45,
55
],
"g": [
"oab_001054",
"oab_000743"
]
},
{
"d": "Direito Constitucional",
"s": "Poder Executivo e Poder Judiciário",
"n": 78,
"q": [
"Poder Executivo",
"Poder Judiciário"
],
"k": [
62,
70
],
"g": [
"oab_001089"
]
}
]
},
{
"d": "2026-11-24",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Processual Civil",
"s": "Cumprimento de sentença e execução",
"n": 79,
"q": [
"Cumprimento de sentença",
"Execução"
],
"k": [
45,
52
]
}
]
},
{
"d": "2026-11-25",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Empresarial",
"s": "Falência e recuperação judicial",
"n": 80,
"q": [
"Falência",
"Recuperação judicial e extrajudicial"
]
},
{
"d": "Direito do Trabalho",
"s": "Remuneração e salário",
"n": 81,
"q": [
"Remuneração e salário"
],
"k": [
41,
45
],
"g": [
"oab_000909"
]
}
]
},
{
"d": "2026-11-26",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Administrativo",
"s": "Intervenção do Estado na propriedade",
"n": 82,
"q": [
"Intervenção na propriedade"
],
"k": [
54,
64
],
"g": [
"oab_001344"
]
},
{
"d": "Direito Processual Penal",
"s": "Prisão, medidas cautelares e liberdade provisória",
"n": 85,
"q": [
"Prisões e medidas cautelares"
],
"k": [
32,
38
],
"g": [
"oab_001143",
"oab_001222"
]
}
]
},
{
"d": "2026-11-27",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito do Consumidor",
"s": "Responsabilidade civil nas relações de consumo",
"n": 86,
"q": [
"Responsabilidade pelo fato do produto e do serviço",
"Responsabilidade pelo vício do produto e do serviço"
]
},
{
"d": "Direito Eleitoral",
"s": "Direitos políticos",
"n": 86,
"q": [
"Registro de candidatura e inelegibilidades",
"Alistamento e domicílio eleitoral"
]
}
]
},
{
"d": "2026-11-28",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Civil",
"s": "Responsabilidade civil",
"n": 87,
"q": [
"Responsabilidade civil"
],
"k": [
36,
43
],
"g": [
"oab_000877"
]
},
{
"d": "Ética Profissional",
"s": "Processo disciplinar e relações com o cliente",
"n": 88,
"q": [
"Processo disciplinar",
"Deveres e vedações éticas do advogado",
"Relações com o cliente"
],
"k": [
44,
61
],
"g": [
"oab_001237",
"oab_000688"
]
}
]
},
{
"d": "2026-11-29",
"f": 1,
"tipo": "simulado",
"sim": {
"exame": 41,
"modo": "completo"
}
},
{
"d": "2026-11-30",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Previdenciário",
"s": "Seguridade social, beneficiários e qualidade de segurado",
"n": 89,
"q": [
"Segurados e filiação",
"Qualidade de segurado e carência"
]
},
{
"d": "Direito Civil",
"s": "Direitos reais: posse e propriedade",
"n": 99,
"q": [
"Direitos reais"
],
"k": [
44,
53
],
"g": [
"oab_000181"
]
}
]
},
{
"d": "2026-12-01",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Processual Penal",
"s": "Citação, intimação e procedimentos",
"n": 100,
"q": [
"Citações e intimações",
"Procedimentos"
],
"k": [
39,
44
],
"g": [
"oab_000752"
]
}
]
},
{
"d": "2026-12-02",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Penal",
"s": "Crimes contra o patrimônio e a dignidade sexual",
"n": 101,
"q": [
"Crimes contra o patrimônio",
"Crimes contra a dignidade sexual"
],
"k": [
56,
74
],
"g": [
"oab_000130"
]
}
]
},
{
"d": "2026-12-03",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Tributário",
"s": "Impostos federais, estaduais e municipais",
"n": 102,
"q": [
"Impostos em espécie"
],
"k": [
53,
66
],
"g": [
"oab_001024",
"oab_001102",
"oab_000628",
"oab_000630",
"oab_001020",
"oab_001180"
]
},
{
"d": "Direito Processual do Trabalho",
"s": "Execução trabalhista",
"n": 102,
"q": [
"Execução trabalhista"
],
"k": [
35,
41
],
"g": [
"oab_001231"
]
}
]
},
{
"d": "2026-12-04",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Processual Civil",
"s": "Recursos e ações autônomas de impugnação",
"n": 103,
"q": [
"Recursos"
],
"k": [
53,
61
],
"g": [
"oab_000738"
]
}
]
},
{
"d": "2026-12-05",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito do Trabalho",
"s": "Extinção do contrato e direito coletivo",
"n": 106,
"q": [
"Extinção do contrato de trabalho",
"FGTS e verbas rescisórias",
"Direito coletivo do trabalho"
],
"k": [
46,
53
]
},
{
"d": "Direito Penal",
"s": "Crimes contra a fé pública e a Administração Pública",
"n": 107,
"q": [
"Crimes contra a fé pública",
"Crimes contra a Administração Pública"
],
"k": [
62,
74
],
"g": [
"oab_000130"
]
}
]
},
{
"d": "2026-12-06",
"f": 1,
"tipo": "simulado",
"sim": {
"exame": 40,
"modo": "completo"
}
},
{
"d": "2026-12-07",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Administrativo",
"s": "Responsabilidade civil do Estado",
"n": 108,
"q": [
"Responsabilidade civil do Estado"
],
"k": [
65,
69
],
"g": [
"oab_000947"
]
},
{
"d": "ECA",
"s": "Tutela jurisdicional da criança e do adolescente",
"n": 109,
"q": [
"Procedimentos e recursos no ECA",
"Crimes e infrações administrativas no ECA"
]
}
]
},
{
"d": "2026-12-08",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Civil",
"s": "Família: direito pessoal e patrimonial",
"n": 116,
"q": [
"Direito de família"
],
"k": [
54,
64
],
"g": [
"oab_001191"
]
}
]
},
{
"d": "2026-12-09",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Tributário",
"s": "Suspensão, extinção e exclusão do crédito",
"n": 117,
"q": [
"Suspensão, extinção e exclusão do crédito",
"Crédito tributário e lançamento"
],
"k": [
67,
76
],
"g": [
"oab_001341",
"oab_000101"
]
},
{
"d": "Direito Processual do Trabalho",
"s": "Recursos trabalhistas",
"n": 120,
"q": [
"Recursos trabalhistas",
"Depósito recursal"
],
"k": [
47,
49
],
"g": [
"oab_000762"
]
}
]
},
{
"d": "2026-12-10",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Administrativo",
"s": "Licitações e contratos administrativos",
"n": 121,
"q": [
"Licitações",
"Contratos administrativos"
],
"k": [
70,
97
],
"g": [
"oab_001107",
"oab_001028",
"oab_001348"
]
}
]
},
{
"d": "2026-12-11",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Processual do Trabalho",
"s": "Ações especiais",
"n": 122,
"q": [
"Ações especiais no processo do trabalho",
"Dissídio coletivo e ação de cumprimento"
],
"k": [
42,
46
],
"g": [
"oab_001392"
]
},
{
"d": "Direito Processual Civil",
"s": "Procedimentos especiais",
"n": 122,
"q": [
"Procedimentos especiais"
],
"k": [
62,
66
],
"g": [
"oab_000970"
]
},
{
"d": "Direito Civil",
"s": "Sucessões: sucessão em geral e legítima",
"n": 123,
"q": [
"Direito das sucessões"
],
"k": [
65,
79
]
}
]
},
{
"d": "2026-12-12",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Ética Profissional",
"s": "Estrutura da OAB, eleições e publicidade",
"n": 124,
"q": [
"Órgãos da OAB",
"Publicidade na advocacia"
],
"k": [
50,
59
],
"g": [
"oab_000609",
"oab_000685",
"oab_001155",
"oab_000840",
"oab_000999"
]
},
{
"d": "Direito Constitucional",
"s": "Controle de constitucionalidade",
"n": 127,
"q": [
"Controle de constitucionalidade"
],
"k": [
71,
78
],
"g": [
"oab_001090"
]
}
]
},
{
"d": "2026-12-13",
"f": 1,
"tipo": "simulado",
"sim": {
"exame": 39,
"modo": "completo"
}
},
{
"d": "2026-12-14",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Penal",
"s": "Legislação penal especial",
"n": 128,
"q": [
"Legislação penal especial"
],
"k": [
75,
82
]
}
]
},
{
"d": "2026-12-15",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Eleitoral",
"s": "Partidos políticos",
"n": 129,
"q": [
"Partidos políticos e coligações",
"Financiamento de campanha e prestação de contas"
]
},
{
"d": "Direito do Consumidor",
"s": "Proteção contratual e práticas comerciais",
"n": 130,
"q": [
"Proteção contratual",
"Práticas comerciais e publicidade"
]
}
]
},
{
"d": "2026-12-16",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Previdenciário",
"s": "Carência, salário de benefício e aposentadorias",
"n": 131,
"q": [
"Qualidade de segurado e carência",
"Benefícios por incapacidade e reabilitação profissional",
"Pensão por morte e dependentes"
]
},
{
"d": "Direito Constitucional",
"s": "Defesa do Estado e ordem social",
"n": 134,
"q": [
"Defesa do Estado e das instituições democráticas",
"Ordem social"
],
"k": [
79,
90
],
"g": [
"oab_001165",
"oab_001249"
]
}
]
},
{
"d": "2026-12-17",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Processual Penal",
"s": "Nulidades, recursos e ações de impugnação",
"n": 135,
"q": [
"Nulidades",
"Recursos"
],
"k": [
45,
51
],
"g": [
"oab_001218",
"oab_000594"
]
}
]
},
{
"d": "2026-12-18",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Administrativo",
"s": "Serviços públicos, PPP e consórcios",
"n": 136,
"q": [
"Serviços públicos"
],
"k": [
65,
69
],
"g": [
"oab_000947"
]
}
]
},
{
"d": "2026-12-19",
"f": 1,
"tipo": "estudo",
"top": [
{
"d": "Direito Civil",
"s": "Sucessão testamentária",
"n": 137,
"q": [
"Direito das sucessões"
],
"k": [
65,
79
]
},
{
"d": "Direito Tributário",
"s": "Execução fiscal",
"n": 137,
"q": [
"Processo tributário"
],
"k": [
77,
82
],
"g": [
"oab_000941",
"oab_001100",
"oab_001339"
]
},
{
"d": "ECA",
"s": "Ato infracional e medidas socioeducativas",
"n": 138,
"q": [
"Ato infracional",
"Medidas de proteção"
]
}
]
},
{
"d": "2026-12-20",
"f": 1,
"tipo": "simulado",
"sim": {
"exame": 38,
"modo": "completo"
}
},
{
"d": "2026-12-21",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Constitucional",
"Direito Civil"
],
"sim": {
"modo": "parcial"
}
},
{
"d": "2026-12-22",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Processual Civil",
"Direito Penal"
],
"sim": {
"modo": "parcial"
}
},
{
"d": "2026-12-23",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Processual Penal",
"Direito do Trabalho"
],
"sim": {
"modo": "parcial"
}
},
{
"d": "2026-12-24",
"f": 2,
"tipo": "leve"
},
{
"d": "2026-12-25",
"f": 2,
"tipo": "leve"
},
{
"d": "2026-12-26",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Processual do Trabalho",
"Direito Administrativo"
],
"sim": {
"exame": 37,
"modo": "completo"
}
},
{
"d": "2026-12-27",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Tributário",
"Direito Empresarial"
]
},
{
"d": "2026-12-28",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Constitucional",
"Direito Civil"
],
"sim": {
"modo": "parcial"
}
},
{
"d": "2026-12-29",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Processual Civil",
"Direito Penal"
],
"sim": {
"modo": "parcial"
}
},
{
"d": "2026-12-30",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Processual Penal",
"Direito do Trabalho"
],
"sim": {
"modo": "parcial"
}
},
{
"d": "2026-12-31",
"f": 2,
"tipo": "leve"
},
{
"d": "2027-01-01",
"f": 2,
"tipo": "leve"
},
{
"d": "2027-01-02",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Processual do Trabalho",
"Direito Administrativo"
],
"sim": {
"exame": 33,
"modo": "completo"
}
},
{
"d": "2027-01-03",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Tributário",
"Direito Empresarial"
]
},
{
"d": "2027-01-04",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Constitucional",
"Direito Civil"
],
"sim": {
"modo": "parcial"
}
},
{
"d": "2027-01-05",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Processual Civil",
"Direito Penal"
],
"sim": {
"modo": "parcial"
}
},
{
"d": "2027-01-06",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Processual Penal",
"Direito do Trabalho"
],
"sim": {
"modo": "parcial"
}
},
{
"d": "2027-01-07",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Processual do Trabalho",
"Direito Administrativo"
],
"sim": {
"modo": "parcial"
}
},
{
"d": "2027-01-08",
"f": 2,
"tipo": "revisao",
"foco": [
"Direito Tributário",
"Direito Empresarial"
],
"sim": {
"modo": "parcial"
}
},
{
"d": "2027-01-09",
"f": 2,
"tipo": "vespera"
},
{
"d": "2027-01-10",
"f": 0,
"tipo": "prova"
}
]
};
