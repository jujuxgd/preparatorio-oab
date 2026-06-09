import sqlite3
import os
from datetime import date, timedelta

DB_PATH = os.path.join(os.path.dirname(__file__), '..', 'oab.db')


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def init_db():
    conn = get_db()
    c = conn.cursor()

    c.executescript("""
    CREATE TABLE IF NOT EXISTS days (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        numero INTEGER UNIQUE NOT NULL,
        data DATE NOT NULL,
        materia VARCHAR(200) NOT NULL,
        topico VARCHAR(400) NOT NULL,
        titulo VARCHAR(300),
        emoji VARCHAR(10),
        incidencia INTEGER DEFAULT 0,
        dificuldade VARCHAR(20) DEFAULT 'media',
        arquivo VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS progress (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        day_id INTEGER UNIQUE NOT NULL,
        completo BOOLEAN DEFAULT 0,
        tempo_estudado INTEGER DEFAULT 0,
        data_conclusao TIMESTAMP,
        ultima_revisao DATE,
        nota TEXT,
        checklist TEXT DEFAULT '{}',
        FOREIGN KEY (day_id) REFERENCES days(id)
    );

    CREATE TABLE IF NOT EXISTS errors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        day_id INTEGER,
        questao_id VARCHAR(50),
        materia VARCHAR(100),
        assunto VARCHAR(200),
        enunciado TEXT,
        data_erro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        dominada BOOLEAN DEFAULT 0,
        data_dominada TIMESTAMP,
        FOREIGN KEY (day_id) REFERENCES days(id)
    );

    CREATE TABLE IF NOT EXISTS highlights (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        day_id INTEGER NOT NULL,
        texto TEXT NOT NULL,
        cor VARCHAR(50) NOT NULL,
        pagina VARCHAR(200),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (day_id) REFERENCES days(id)
    );

    CREATE TABLE IF NOT EXISTS comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        day_id INTEGER NOT NULL,
        texto TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (day_id) REFERENCES days(id)
    );

    CREATE TABLE IF NOT EXISTS resumos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        day_id INTEGER UNIQUE NOT NULL,
        texto TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP,
        FOREIGN KEY (day_id) REFERENCES days(id)
    );

    CREATE TABLE IF NOT EXISTS moods (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        data DATE UNIQUE NOT NULL,
        emoji VARCHAR(20) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS review_cards (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        day_id INTEGER NOT NULL,
        intervalo INTEGER NOT NULL DEFAULT 1,
        proxima_revisao DATE NOT NULL,
        ultimo_feedback VARCHAR(20),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP,
        FOREIGN KEY (day_id) REFERENCES days(id)
    );

    CREATE TABLE IF NOT EXISTS user_config (
        id INTEGER PRIMARY KEY CHECK (id = 1),
        nome VARCHAR(100) DEFAULT 'Júlia',
        foto_perfil VARCHAR(255),
        theme VARCHAR(10) DEFAULT 'light',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS drive_pdfs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        file_id VARCHAR(100) UNIQUE NOT NULL,
        nome VARCHAR(255) NOT NULL,
        caminho VARCHAR(500),
        materia VARCHAR(100),
        fonte VARCHAR(100),
        tamanho INTEGER,
        indexed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """)

    # Seed user config
    c.execute("INSERT OR IGNORE INTO user_config (id) VALUES (1)")

    # Seed 60 days from study plan
    _seed_days(c)

    conn.commit()
    conn.close()


PLANO = [
    (1,  "Ética Profissional · Direito Constitucional", "Órgãos OAB, Legislação, Eleições · Poder Constituinte, Eficácia normas", "Ética · Poder Constituinte", "⚖️", 87, "media", "dia-01"),
    (2,  "Direito Civil · Direito Penal", "Pessoa Natural, Bens, NJ, Prescrição · Iter Criminis, Tentativa", "Civil · Iter Criminis", "📜", 71, "media", "dia-03"),
    (3,  "Direito Constitucional · Direito Penal", "Princípios arts.1-4, DFs: Teoria, Vida, Igualdade · Lei Penal Tempo/Espaço", "DFs · Lei Penal", "🏛️", 72, "media", "dia-02"),
    (4,  "Processo Penal · Direito do Trabalho", "IP, ANPP, Ação Penal, Competência · Relação emprego, CTPS, terceirização", "Proc. Penal · Trabalho", "⚔️", 68, "media", "dia-04"),
    (5,  "Ética Profissional · Direito Constitucional", "Inscrição, atividades privativas, advogado empregado · Direitos Políticos, Federalismo", "Ética · Dir. Políticos", "⚖️", 85, "media", "dia-05"),
    (6,  "Direito Civil · Direito Penal", "Obrigações: teoria geral, solidariedade · Excludentes ilicitude, erro tipo/proibição", "Obrigações · Excludentes", "📜", 70, "media", "dia-06"),
    (7,  "Processo do Trabalho · Direito Constitucional", "Teoria geral JT, competência, petição, provas · Competências entes, Intervenção federal", "Proc. Trabalho · Competências", "⚖️", 65, "media", "dia-07"),
    (8,  "Processo Penal · Direito do Trabalho", "Provas em espécie, prisões cautelares · Jornada, horas extras, noturno", "Provas · Jornada", "⚔️", 66, "media", "dia-08"),
    (9,  "Direito Constitucional · Ética Profissional", "Legislativo, processo legislativo, MPs · Honorários, Sociedade advogados, pro bono", "Legislativo · Honorários", "🏛️", 74, "media", "dia-09"),
    (10, "Direito Civil · Direito Penal", "Obrigações: extinção, inadimplemento, mora · Imputabilidade, Concurso de pessoas", "Extinção obr. · Imputabilidade", "📜", 71, "media", "dia-10"),
    (11, "Processo Penal · Direito do Trabalho", "Procedimentos, Tribunal do Júri · Remuneração, salário, adicionais, FGTS", "Júri · Remuneração", "⚔️", 64, "media", "dia-11"),
    (12, "Direito Constitucional · Ética Profissional", "Executivo, funções essenciais · Responsabilidades, infrações, processo disciplinar", "Executivo · PAD", "🏛️", 72, "media", "dia-12"),
    (13, "Direito Civil · Direito Penal", "Contratos: teoria geral, espécies · Dosimetria 3 fases, regime inicial", "Contratos · Dosimetria", "📜", 70, "media", "dia-13"),
    (14, "Direito Tributário · Processo do Trabalho", "Tributo, espécies, princípios, imunidades · Recursos trabalhistas, execução", "Tributário · Rec. Trabalho", "💼", 67, "media", "dia-14"),
    (15, "Direito Administrativo · Direito Civil", "LIMPE, poderes, adm direta/indireta · Responsabilidade civil", "Administrativo · Resp. Civil", "🏛️", 69, "media", "dia-15"),
    (16, "Processo Penal · Direito do Trabalho", "Recursos: RESE, apelação, HC · Aviso prévio, verbas rescisórias", "Recursos PP · Rescisão", "⚔️", 63, "media", "dia-16"),
    (17, "Direito Constitucional · Direito Civil", "Judiciário, controle difuso · Posse, propriedade, usucapião", "Judiciário · Posse", "🏛️", 71, "media", "dia-17"),
    (18, "Direito Tributário · Direito Administrativo", "Obrigação, crédito, responsabilidade tributária · Agentes públicos, estabilidade", "Crédito trib. · Agentes", "💼", 66, "media", "dia-18"),
    (19, "Direito Constitucional · Ética Profissional", "Controle concentrado: ADI, ADC, ADPF, ADO · Sigilo, publicidade, TAC", "Controle conc. · Sigilo", "🏛️", 73, "media", "dia-19"),
    (20, "Direito Civil · Processo do Trabalho", "Família: casamento, regime de bens, dissolução · Execução trabalhista, ação rescisória", "Família · Execução TRT", "📜", 68, "media", "dia-20"),
    (21, "Processo Civil · Direito Penal", "Competência, tutelas provisórias · Concurso crimes, prescrição", "Proc. Civil · Prescrição", "⚖️", 67, "media", "dia-21"),
    (22, "Direito Administrativo · Direito Tributário", "Atos administrativos · Suspensão, extinção, exclusão do crédito", "Atos adm. · Crédito", "🏛️", 65, "media", "dia-22"),
    (23, "Processo Civil · Direito Penal", "Petição inicial, contestação, audiência · Crimes contra a vida", "Proc. Civil · Crimes vida", "⚖️", 70, "media", "dia-23"),
    (24, "Direito Empresarial · Direito Tributário", "Empresário, estabelecimento, registro · Garantias, certidões, execução fiscal", "Empresarial · Exec. fiscal", "💼", 64, "media", "dia-24"),
    (25, "Processo Civil · Direito Administrativo", "Sentença, coisa julgada, recursos · Improbidade administrativa", "Sentença · Improbidade", "⚖️", 68, "media", "dia-25"),
    (26, "Direito Civil · Direito Penal", "Sucessões: abertura, testamentos, colação · Crimes patrimônio, dignidade sexual", "Sucessões · Crimes patrim.", "📜", 71, "media", "dia-26"),
    (27, "Direito Empresarial · Direito Administrativo", "Sociedades, desconsideração · Controle da administração, Lei 9.784/99", "Sociedades · Controle adm.", "💼", 63, "media", "dia-27"),
    (28, "Processo Civil · Direito Penal", "Recursos: apelação, agravo, REsp, RExt · Crimes honra, fé pública, adm. pública", "Recursos PC · Crimes adm.", "⚖️", 67, "media", "dia-28"),
    (29, "Direito do Trabalho · Direito Empresarial", "Estabilidade, FGTS, saúde, sindicatos · Títulos de crédito", "Estabilidade · Títulos", "💼", 65, "media", "dia-29"),
    (30, "Direito Administrativo · Direito Tributário", "Licitação Lei 14.133/21, contratos · Impostos federais, estaduais, municipais", "Licitação · Impostos", "🏛️", 69, "media", "dia-30"),
    (31, "Direito Previdenciário · Direito Eleitoral", "RGPS, segurados, contribuições · Sistema eleitoral, JE, partidos", "Previdenciário · Eleitoral", "💼", 60, "dificil", "dia-31"),
    (32, "Direito Financeiro · Direito Empresarial", "Orçamento, LRF · Recuperação judicial, falência", "Financeiro · Falência", "💼", 58, "dificil", "dia-32"),
    (33, "Direitos Humanos · Direito Internacional", "ONU, PSJCR, sistemas regionais · Tratados, LINDB, extradição", "DH · Internacional", "🌍", 62, "dificil", "dia-33"),
    (34, "ECA · Código de Defesa do Consumidor", "Direitos fundamentais criança, ato infracional · Relação consumo, responsabilidade", "ECA · CDC", "👶", 64, "media", "dia-34"),
    (35, "Direito Ambiental · Filosofia do Direito", "CF art. 225, PNMA, crimes ambientais · Platão a Dworkin", "Ambiental · Filosofia", "🌿", 60, "dificil", "dia-35"),
    (36, "Processo Penal · Processo Civil", "LEP: regimes, remição, RDD · Execução: cumprimento sentença, embargos", "LEP · Execução PC", "⚔️", 65, "media", "dia-36"),
    (37, "Direito Previdenciário · Direito Eleitoral", "Benefícios: aposentadoria, pensão, BPC · Elegibilidade, inelegibilidade, propaganda", "Benefícios · Elegibilidade", "💼", 61, "dificil", "dia-37"),
    (38, "Direitos Humanos · Direito Internacional", "Corte IDH, mecanismos ONU · Migração, deportação, imunidade diplomática", "Corte IDH · Migração", "🌍", 60, "dificil", "dia-38"),
    (39, "Código de Defesa do Consumidor · ECA", "Contratos, cláusulas abusivas, tutela coletiva · Crimes ECA, exploração sexual", "Contratos CDC · Crimes ECA", "👶", 63, "media", "dia-39"),
    (40, "Direito Ambiental · Filosofia do Direito", "Código Florestal, SNUC, resíduos sólidos · Rawls, Arendt, Foucault", "Ambiental · Filosofia II", "🌿", 60, "dificil", "dia-40"),
    (41, "SIMULADO 01", "80 questões — todas as matérias", "Simulado completo", "📝", 100, "dificil", "dia-41"),
    (42, "Correção Simulado 01", "Análise de erros e banco de erros", "Correção simulado", "📊", 100, "media", "dia-42"),
    (43, "Revisão · Ética Profissional", "Estatuto + CED + questões FGV", "Revisão Ética", "⚖️", 87, "facil", "dia-43"),
    (44, "Revisão · Direito Constitucional", "DFs, organização Estado, controle constitucionalidade", "Revisão Constitucional", "🏛️", 72, "facil", "dia-44"),
    (45, "Revisão · Direito Civil", "Parte geral + obrigações + contratos + responsabilidade + família + sucessões", "Revisão Civil", "📜", 71, "facil", "dia-45"),
    (46, "Revisão · Direito Penal", "Parte geral + parte especial", "Revisão Penal", "⚔️", 70, "facil", "dia-46"),
    (47, "Revisão · Processo Civil + Processo Penal", "Procedimento + execução + recursos", "Revisão PC + PP", "⚖️", 67, "facil", "dia-47"),
    (48, "Revisão · Trabalho + Processo do Trabalho", "CLT + JT completo", "Revisão Trabalho", "💼", 65, "facil", "dia-48"),
    (49, "Revisão · Tributário + Administrativo", "Sistema tributário + administração pública", "Revisão Trib. + Adm.", "💼", 68, "facil", "dia-49"),
    (50, "Revisão · Empresarial + Matérias Secundárias", "9 secundárias em um dia", "Revisão geral", "📚", 64, "media", "dia-50"),
    (51, "SIMULADO 02", "80 questões — todas as matérias", "Simulado completo", "📝", 100, "dificil", "dia-51"),
    (52, "Correção Simulado 02", "Análise + reforço pontos críticos", "Correção simulado", "📊", 100, "media", "dia-52"),
    (53, "Revisão por Incidência FGV", "Últimos 5 exames — análise de tendências", "Revisão FGV", "📊", 100, "media", "dia-53"),
    (54, "Lei Seca — Artigos Essenciais", "Art. 5 CF, EOAB, CP parte geral, CLT", "Lei seca completa", "📜", 100, "media", "dia-54"),
    (55, "Pegadinhas Clássicas FGV", "Por matéria — 55 dias de preparação", "Pegadinhas FGV", "⚠️", 100, "media", "dia-55"),
    (56, "SIMULADO 03", "80 questões — todas as matérias", "Simulado completo", "📝", 100, "dificil", "dia-56"),
    (57, "Correção Simulado 03", "Reforço 3 matérias com pior desempenho", "Correção + reforço", "📊", 100, "media", "dia-57"),
    (58, "Súmulas + Jurisprudência", "STF, STJ, TST — principais súmulas", "Súmulas e julgados", "⚖️", 100, "media", "dia-58"),
    (59, "Revisão Leve + Questões Fáceis", "Confiança + descanso estratégico", "Revisão final", "🌸", 100, "facil", "dia-59"),
    (60, "Conclusão do Plano 🎉", "Revisão pontos críticos finais — você está pronta!", "Dia final", "🎀", 100, "facil", "dia-60"),
]


def _seed_days(cursor):
    start = date(2026, 6, 1)
    for row in PLANO:
        num, materia, topico, titulo, emoji, incidencia, dificuldade, arquivo = row
        dia_data = start + timedelta(days=num - 1)
        cursor.execute("""
            INSERT OR IGNORE INTO days
                (numero, data, materia, topico, titulo, emoji, incidencia, dificuldade, arquivo)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (num, dia_data.isoformat(), materia, topico, titulo, emoji, incidencia, dificuldade, arquivo))


if __name__ == '__main__':
    init_db()
    print("Banco de dados criado com sucesso.")
