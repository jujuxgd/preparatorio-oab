# -*- coding: utf-8 -*-
# Reconstructs the 120-day cronograma from the (scrambled) PDF text anchors.

EMOJI = {
    "Direito Constitucional": "🏛️",
    "Direito Administrativo": "🏛️",
    "Direito Civil": "📜",
    "Direito Penal": "⚔️",
    "Direito do Trabalho": "👷",
    "Direito Tributário": "💰",
    "Direito Empresarial": "🏢",
    "Direito do Consumidor": "🛒",
    "Ética": "⚖️",
    "Processo Civil": "⚖️",
    "Processo Penal": "📋",
    "Processo do Trabalho": "📋",
    "Estatuto da Criança e do Adolescente": "👶",
    "Direito Previdenciário": "🛡️",
    "Direito Eleitoral": "🗳️",
    "Revisão Geral": "🔄",
}

# day -> list of (materia, [topicos])
# Reconstructed from PDF anchors. Day 7 of each week (multiples of 7) = Revisão.
DAYS = {
    1:  [("Direito Constitucional", ["Direitos e Garantias Fundamentais", "Teoria da Constituição"])],
    2:  [("Direito do Trabalho", ["Contrato de Trabalho", "Relação de Trabalho"])],
    3:  [("Direito Civil", ["Parte Geral: Pessoas Jurídicas", "Parte Geral: Pessoas Naturais"])],
    4:  [("Direito Tributário", ["Princípios Tributários"])],
    5:  [("Processo do Trabalho", ["Atos, Termos e Prazos Processuais", "Competência"])],
    6:  [("Direito Penal", ["Eficácia da Lei Penal no Tempo e no Espaço"])],
    7:  [("Revisão Geral", [])],

    8:  [("Ética", ["Atividades da Advocacia e Mandato Judicial"])],
    9:  [("Processo Civil", ["Atos Processuais"])],
    10: [("Direito Empresarial", ["Empresa e Empresário", "Estabelecimento Empresarial e Registro"])],
    11: [("Processo Penal", ["Ação Penal", "Inquérito Policial"])],
    12: [("Direito Administrativo", ["Poderes Administrativos", "Princípios da Administração Pública"])],
    13: [("A definir", [])],
    14: [("Revisão Geral", [])],

    15: [("Direito Constitucional", ["Remédios Constitucionais"])],
    16: [("Direito do Trabalho", ["Empregado", "Empregador"])],
    17: [("Direito Civil", ["Parte Geral: Negócio Jurídico"])],
    18: [("Direito Tributário", ["Competência Tributária"])],
    19: [("Processo do Trabalho", ["Despesas Processuais"])],
    20: [("Direito Penal", ["Fato Típico"])],
    21: [("Revisão Geral", [])],

    22: [("Ética", ["Inscrição na OAB", "Sociedade de Advogados e Advogado Empregado"])],
    23: [("Processo Civil", ["Das Partes e dos Procuradores"])],
    24: [("Direito Empresarial", ["Direito Societário"])],
    25: [("Processo Penal", ["Competência"])],
    26: [("Direito Administrativo", ["Organização da Administração Pública"])],
    27: [("A definir", [])],
    28: [("Revisão Geral", [])],

    29: [("Direito Administrativo", ["Atos Administrativos"])],
    30: [("Direito do Trabalho", ["Alteração do Contrato de Trabalho", "Interrupção e Suspensão do Contrato de Trabalho"])],
    31: [("Direito Constitucional", ["Nacionalidade"])],
    32: [("Direito Previdenciário", ["Beneficiários do RGPS e qualidade de segurado", "Seguridade Social e Princípios Constitucionais"])],
    33: [("Processo do Trabalho", ["Ação Trabalhista", "Audiência Trabalhista", "Defesa do Réu"])],
    34: [("Direito Penal", ["Culpabilidade", "Ilicitude"])],
    35: [("Revisão Geral", [])],

    36: [("Ética", ["Direitos e das Prerrogativas dos Advogados", "Honorários Advocatícios"])],
    37: [("Processo Civil", ["Intervenção de Terceiros e Litisconsórcio", "Tutela Provisória"])],
    38: [("Estatuto da Criança e do Adolescente", ["Direitos Fundamentais", "Família Substituta: Guarda, Tutela e Adoção", "Política de Ato Infracional e Medidas Socioeducativas"])],
    39: [("Direito Penal", ["Concurso de Pessoas", "Extinção da Punibilidade"])],
    40: [("Direito Civil", ["Obrigações: Inadimplemento das Obrigações"])],
    41: [("Direito do Consumidor", ["Política Nacional das Relações de Consumo"])],
    42: [("Revisão Geral", [])],

    43: [("A definir", [])],
    44: [("A definir", [])],
    45: [("A definir", [])],
    46: [("A definir", [])],
    47: [("A definir", [])],
    48: [("A definir", [])],
    49: [("Revisão Geral", [])],

    50: [("Direito Constitucional", ["Organização do Estado e Entes Federativos", "Repartição de Competência"])],
    51: [("Processo do Trabalho", ["Provas Trabalho", "Duração do Trabalho"])],
    52: [("Direito Civil", ["Contratos: Dos Contratos em Geral"])],
    53: [("Direito Tributário", ["Conceito de Tributo", "Espécies Tributárias"])],
    54: [("Direito Penal", ["Concurso de Crimes", "Das Penas"])],
    55: [("A definir", [])],
    56: [("Revisão Geral", [])],

    57: [("Ética", ["Incompatibilidades e Impedimentos", "Infrações e Sanções Disciplinares"])],
    58: [("Processo Civil", ["Procedimento Comum"])],
    59: [("Direito Empresarial", ["Títulos de Crédito"])],
    60: [("Processo Penal", ["Provas", "Questões e Processos Incidentes"])],
    61: [("Direito Administrativo", ["Agentes Públicos"])],
    62: [("A definir", [])],
    63: [("Revisão Geral", [])],

    64: [("Direito do Consumidor", ["Direitos Básicos do Consumidor", "Proteção Contratual"])],
    65: [("Direito Constitucional", ["Intervenção", "Poder Executivo"])],
    66: [("Processo Civil", ["Sentença e da Coisa Julgada"])],
    67: [("Direito Civil", ["Contratos: Contratos em Espécie"])],
    68: [("Direito Tributário", ["Obrigação Tributária", "Responsabilidade Tributária"])],
    69: [("Direito do Trabalho", ["Estabilidade", "Remuneração e Salário"])],
    70: [("Revisão Geral", [])],

    71: [("Direito Penal", ["Crimes Contra a Honra", "Crimes Contra a Vida"])],
    72: [("Ética", ["Ética do Advogado e Relações com o Cliente", "Processo Administrativo Disciplinar"])],
    73: [("Direito Previdenciário", ["Benefícios e Aposentadorias em Espécie"])],
    74: [("Direito Empresarial", ["Falência e Recuperação Judicial"])],
    75: [("Direito Administrativo", ["Improbidade Administrativa"])],
    76: [("Processo Penal", ["Prisão, Medidas Cautelares e Liberdade Provisória"])],
    77: [("Revisão Geral", [])],

    78: [("Processo Civil", ["Cumprimento de Sentença e Processo de Execução"])],
    79: [("Direito Administrativo", ["Intervenção do Estado na Propriedade", "Responsabilidade Civil do Estado"])],
    80: [("Direito Constitucional", ["Poder Legislativo", "Processo Legislativo"])],
    81: [("Direito do Consumidor", ["Práticas Comerciais", "Responsabilidade Civil de Relações de Consumo"])],
    82: [("Direito Civil", ["Responsabilidade Civil"])],
    83: [("Direito Eleitoral", ["Direitos Políticos", "Partidos Políticos"])],
    84: [("Revisão Geral", [])],

    85: [("A definir", [])],
    86: [("A definir", [])],
    87: [("A definir", [])],
    88: [("A definir", [])],
    89: [("A definir", [])],
    90: [("A definir", [])],
    91: [("Revisão Geral", [])],

    92: [("Direito Constitucional", ["Controle de Constitucionalidade", "Poder Judiciário"])],
    93: [("Direito Penal", ["Crimes Contra a Dignidade Sexual", "Crimes Contra a Fé Pública", "Crimes Contra o Patrimônio"])],
    94: [("Ética", ["Estrutura da OAB e Eleições", "Publicidade Profissional"])],
    95: [("Processo Civil", ["Procedimentos Especiais", "Recursos e Ações Autônomas de Impugnação"])],
    96: [("Direito Civil", ["Direitos Reais: Posse", "Direitos Reais: Propriedade"])],
    97: [("Direito Tributário", ["Impostos Federais, Estaduais e Municipais", "Suspensão, Extinção e Exclusão do Crédito Tributário"])],
    98: [("Revisão Geral", [])],

    99:  [("Processo Penal", ["Citação e Intimação", "Procedimentos no CPP"])],
    100: [("Direito do Trabalho", ["Direito Coletivo do Trabalho", "Extinção do Contrato de Trabalho"])],
    101: [("Direito Civil", ["Família: Direito Patrimonial", "Família: Direito Pessoal"])],
    102: [("Direito Administrativo", ["Consórcios Públicos", "Serviços Públicos e Parceria Público Privada"])],
    103: [("Processo do Trabalho", ["Recursos"])],
    104: [("Direito Civil", ["Sucessões: Sucessão em Geral", "Sucessões: Sucessão Legítima", "Sucessões: Sucessão Testamentária"])],
    105: [("Revisão Geral", [])],

    106: [("Direito Penal", ["Crimes Contra a Administração Pública", "Legislação Penal Especial"])],
    107: [("Processo Penal", ["Nulidades no Processo Penal", "Recursos e Ações Autônomas de Impugnação"])],
    108: [("Direito Constitucional", ["Defesa do Estado", "Ordem Social"])],
    109: [("Direito Tributário", ["Execução Fiscal"])],
    110: [("Processo do Trabalho", ["Ações Especiais", "Execução"])],
    111: [("A definir", [])],
    112: [("Revisão Geral", [])],

    # Days 113-120 are beyond the PDF text extraction (it ends 30 AGOSTO / day 112).
    113: [("A definir", [])],
    114: [("A definir", [])],
    115: [("A definir", [])],
    116: [("A definir", [])],
    117: [("A definir", [])],
    118: [("A definir", [])],
    119: [("A definir", [])],
    120: [("Revisão Geral", [])],
}

import math, json

def esc(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')

lines = []
lines.append("// Cronograma 120 dias VDE — extraído do PDF oficial (15XIBOu2W9e66hhzOPSekcxDyCZ4Qlkyv).")
lines.append("// Fonte única para as páginas Matérias e Cronograma.")
lines.append("const CRONOGRAMA_120 = {")
for d in range(1, 121):
    semana = math.ceil(d / 7)  # 7-day weeks (6 study + 1 review)
    materias = DAYS[d]
    mat_strs = []
    for nome, topicos in materias:
        emoji = EMOJI.get(nome, "📚")
        tops = ", ".join('"%s"' % esc(t) for t in topicos)
        mat_strs.append('{ nome: "%s", emoji: "%s", topicos: [%s] }' % (esc(nome), emoji, tops))
    lines.append("  %d: { semana: %d, materias: [ %s ] }," % (d, semana, ", ".join(mat_strs)))
lines.append("};")
lines.append("if (typeof window !== 'undefined') window.CRONOGRAMA_120 = CRONOGRAMA_120;")
lines.append("")

with open(r"C:\Users\julia\OneDrive\Desktop\files\cronograma_120.js", "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

# stats
real = sum(1 for d in range(1,121) if DAYS[d][0][0] not in ("A definir",))
adef = sum(1 for d in range(1,121) if DAYS[d][0][0] == "A definir")
withtop = sum(1 for d in range(1,121) if any(t for _,t in DAYS[d]))
notop = 120 - withtop
print("real subjects (incl Revisão):", real)
print("A definir:", adef)
print("days with topics:", withtop)
print("days empty topics:", notop)
