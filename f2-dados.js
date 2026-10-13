// 2ª fase · Direito do Trabalho (OAB 48). Prova prático-profissional em 28/02/2027 (cronograma da OAB, 21/05/2026).
// Materiais = PDFs do Drive de Julia (só IDs e títulos; nada do texto entra no repo).
// Peças: cabimento, prazo e base legal resumidos da CLT/CPC — conferir sempre no Vade Mecum (a prova permite consulta).
(function () {
  var MAT = [];
  function g(grupo, lista) { lista.forEach(function (x, i) { MAT.push({ id: x[0], t: x[1], g: grupo, n: i + 1 }); }); }

  // Livro de Processo do Trabalho (capítulos na ordem)
  g('proc', [
    ['1WpLhoB4CEzo8LMp2wwra-U6BWLBUynRS', 'Considerações iniciais'],
    ['1nF-YbrmUn4fljh2ZxPRTV8zm_qG3KLLD', 'Princípios do Processo do Trabalho'],
    ['1ZiF1TZiVlOUws8vC1XoAywL2K9FV3eM6', 'Organização da Justiça do Trabalho'],
    ['1Y_8ppyiVP9CHhunRjNwL1X7-HDGTsB_m', 'Competência da Justiça do Trabalho'],
    ['1d1xnT0UnQUNnok2RzTdPX3ynFKVCD6ZL', 'Atos processuais'],
    ['1rXdzmhY5XXsKX7Mr2paCa1bAtqLQGeoj', 'Prazos processuais'],
    ['1qKkp33bf__G--xDDuinIZoio3BXFWH0g', 'Despesas processuais'],
    ['19SMk7FYGkHyFliMmxNsjKyaP6al6p3Z_', 'Justiça gratuita'],
    ['1UfdygcMJZ9PC3VRydtOpHsWCLTElHpbl', 'Honorários periciais e advocatícios'],
    ['1qFBK3_MX1MXTA3Jtu0oHsrVYy84wfgN2', 'Partes e procuradores'],
    ['1EOM1NVaRT5V74A5dxu4EldUWgQ7pOJ6V', 'Reclamação trabalhista'],
    ['1wUfCk-7YTlEgt0ZSIvLsxZQ6MjiRGrXB', 'Audiência'],
    ['1XTdAlcieX_2a0H90ik_ygzNQKGrWVuUP', 'Acordo judicial'],
    ['14EEEwGyDKeuUl_CSIZeou6KtIinIFLCZ', 'Provas'],
    ['1RivJAniu57TaZLgRTLxLKbQVngg2-Gua', 'Sentença'],
    ['1RtpLQFMHEWYXsqerPflwMjEO-3d1OZ4i', 'Defesa (contestação)'],
    ['11glWqffkbsCZzMro-kZruhoHOkMK34aP', 'Preliminares de defesa'],
    ['1cRuB4Q_Nt8f38WSNAlKA7YUjhkNPRsE8', 'Prejudiciais de mérito'],
    ['1lnNkam1AA85GCHFxi3pP44PS_TkI-H4w', 'Exceções rituais'],
    ['1Pwsxm23TYPrTSB7hqvJWquq1WqFhszhm', 'Recursos: teoria geral'],
    ['1BEzk6epZWMPHfIASawPpcqKYkQCfk6EA', 'Recursos em espécie'],
    ['1gqIPqRaRumO3VmDF-ssO1gRDvwqAhmD-', 'Execução: teoria geral'],
    ['1Ab3FmXFnx6_za8LcXlUwf48-zgU4HKty', 'Defesa na execução']
  ]);
  // Livro de Direito do Trabalho (direito material)
  g('mat', [
    ['1S71xS-FDlcaWwwIY6QHmc2F4ydG-6HzQ', 'Princípios do Direito do Trabalho'],
    ['1hv_wyTNip75Fw6YqeNG68dpedfSiE0RE', 'Relação de emprego'],
    ['16iR7RnSA27X8HxLSt7rFGQD0JrYLwhU9', 'Relações empregatícias especiais'],
    ['18o1YGqtENs2LY-3NfZqKl0wm7YTV0Z_H', 'Relação de trabalho'],
    ['1IU-NBuV1TKwuHmOFcsXk12yiMaMPN4rB', 'Empregado e empregador'],
    ['1MvVD61Zl8Q1nvRmEiuAlavsH0XfKPiZ6', 'Trabalho do menor'],
    ['17SeNUP5H_K129mypLC8aNRCYfe-U9B1i', 'Contrato de trabalho'],
    ['1I7m4xZ_uW_SLca_Vh_xM4Efc7op1SZro', 'Alteração do contrato'],
    ['1Rlh7RwWQgo5nGrq6Fry3BE80tu4VsM1u', 'Suspensão e interrupção'],
    ['1PnXudXm4UwGSRGKEmlgKAIFFuQChyazD', 'Jornada de trabalho'],
    ['1wWljkj_aGg6hFQ-YI3RW-a21baBTtzqO', 'Jornadas especiais'],
    ['1ReEEjRCKO-uQauRVpx-4R8zfB9uh_wz2', 'Horas extras e compensação'],
    ['1j4mZOPEJKx6UUh5aSN0nrG8i2Tbl1YBp', 'Intervalos'],
    ['1QNo3GMvDEgoVSrIeZzdiRNJsgxzY7r7g', 'Férias'],
    ['1Io5qIO3quKYhazbKGh36GZY6YoAMFeJ1', 'Dano extrapatrimonial'],
    ['1veHWw-5304dWsNwclTRhIMYaDrHlw2eU', 'Remuneração e salário'],
    ['1rtqXV-R5J22Sco8iUoNMyYi3QLeXvM6S', 'Estabilidades'],
    ['1Gci2ibkzD7Budh_Cf3KyXRZAH3yBCwqD', 'Extinção do contrato'],
    ['1aIyPXCsafCNvzUZCTSfjGP5ytZmElxw1', 'Aviso prévio'],
    ['1m8h6lqDqoZREnjzBo4EqF2zA9iob-TAf', 'Prescrição e decadência']
  ]);
  // Aulas de Processo do Trabalho (outra explicação dos mesmos temas)
  g('aula', [
    ['1ZeRMGWRjF6667XARbSWfMkoawdxYoKWC', 'Aula 00 · Princípios e organização da JT'],
    ['1FbM0D_e3aQwhoMxVelqnfG7LxpE2e9xZ', 'Aula 01 · Competência'],
    ['1nzEGbpWrsKhB96HV1y5yGwR6rk9KUcSA', 'Aula 02 · Partes, procuradores, juízes, MPT'],
    ['10bPoQhCq7xL6B5DfmyVvZUa0v1MTtzep', 'Aula 03 · Atos, prazos e nulidades'],
    ['1-ipGCRvQpUa9CCmyu4tA4r_hfEZk0eh9', 'Aula 04 · Notificação, resposta do réu e revelia'],
    ['1K937T3soxRvof5T9uwiXeTFIG_lqtlra', 'Aula 05 · Audiências e provas'],
    ['12ajhKtI4VgNWV3Hb4tbxAVPMSwPS5Mrm', 'Aula 06 · Recursos'],
    ['1ODpiqlict55fZpmU_GKffQWLsw059pPD', 'Aula 07 · Liquidação e execução'],
    ['1nMbYquTv0lDfLxUc9BHawJyg52KcbunG', 'Aula 08 · MS, ação rescisória e inquérito'],
    ['1EwcN1DMwd9pZZNeFt9qKaEFVgzeP-7zE', 'Aula 09 · Dissídio coletivo e ação de cumprimento'],
    ['1hUuQTjZOJzijx18izuBKR44BnpSmVf_N', 'Aula 10 · Revisão por dicas']
  ]);
  g('rev', [
    ['18ka-ecpH3zCHAjCp_QpGboJMP87RTmCU', 'Revisão 1 · Trabalho'],
    ['1N22a2pb_bOm9X_U9wvGXbQZPm8DcPRSC', 'Revisão 2 · Trabalho'],
    ['1uvV1gjv53dTXdiMGFxqcnjwCky_ZTvVI', 'Revisão 3 · Trabalho'],
    ['14BL6gR-PcVZo6_TB9xKC48qz4HgbELqq', 'Revisão 1 · Processo do Trabalho'],
    ['1I3YQGnpvS_LTqSQ-OtY62by71M-TNi8L', 'Revisão 2 · Processo do Trabalho'],
    ['1OGR7oGAWMNzKTEBaIvvr26zmFWIwmPTI', 'Revisão 3 · Processo do Trabalho']
  ]);
  g('jur', [
    ['1NMvuAeuexuzbynQUQHxcp2jr2akOQivG', 'Processo do Trabalho · súmulas, OJs e jurisprudência'],
    ['1mdK6D9BH_sAtE20KXQvR_vcdcH5GCiaE', 'Direito do Trabalho · súmulas e jurisprudência'],
    ['1_rDhzVW9KuSyCA2C_NhQpfhV1nJSgtoQ', 'Direito do Trabalho · leis especiais'],
    ['1Wf-dDft2neib2N3QyQAcLcS-oye-5jIN', 'Super Dicas · Direito do Trabalho'],
    ['1zPjKf-7P8rxCw7eOU6x7aBV-P4Nz8kdu', 'Super Dicas · Processo do Trabalho']
  ]);
  g('lei', [
    ['1Ivu87tHb2MWGeeHoFrDNtQFXyM-pHyQR', 'Caderno legislativo · Trabalho'],
    ['1BrYM873G6pIj1BIe0a8LeS9lVcVAKXW3', 'Caderno legislativo · Processo do Trabalho']
  ]);

  var GRUPOS = [
    ['proc', 'Livro · Processo do Trabalho', 'A base da peça: competência, partes, defesa, recursos e execução.'],
    ['mat', 'Livro · Direito do Trabalho', 'O direito material que aparece nos fatos da peça e nas 4 questões.'],
    ['aula', 'Aulas · Processo do Trabalho', 'Outra explicação dos mesmos temas — use quando o livro não bastar.'],
    ['rev', 'Revisões do VDE', 'Para a reta final.'],
    ['jur', 'Súmulas, OJs e dicas', 'O que mais pesa na correção depois da lei.'],
    ['lei', 'Cadernos legislativos', 'Artigos que mais caem, para marcar o Vade Mecum.']
  ];

  // Peças trabalhistas, da mais cobrada para a menos cobrada (ordem do rodízio de treino)
  var PECAS = [
    { id: 'rt', nome: 'Reclamação Trabalhista', quem: 'Empregado (ou empregador) que vai ao Judiciário pela primeira vez.',
      quando: 'Ainda não há processo: o cliente conta o que aconteceu e quer cobrar direitos.', prazo: 'Prescrição: 2 anos após o fim do contrato, alcançando os últimos 5 anos (art. 7º, XXIX, CF; art. 11 CLT).',
      base: 'Art. 840, § 1º, CLT (pedido certo, determinado e com valor); arts. 319 e 320 CPC no que couber.',
      onde: 'Vara do Trabalho — em regra, a do local da prestação dos serviços (art. 651 CLT).',
      estrutura: ['Endereçamento ao Juízo da Vara do Trabalho', 'Qualificação do reclamante e do reclamado', 'Fatos', 'Fundamentos de cada pedido (lei + súmula/OJ)', 'Pedidos líquidos, um a um, com valor', 'Justiça gratuita (art. 790, §§ 3º e 4º, CLT), se couber', 'Honorários de sucumbência (art. 791-A CLT)', 'Provas, notificação do réu, valor da causa', 'Local, data, advogado, OAB'] },
    { id: 'cont', nome: 'Contestação', quem: 'Reclamado (empresa) que foi notificado de uma reclamação.',
      quando: 'Há reclamação ajuizada e audiência marcada; o cliente é o réu.', prazo: 'Até a audiência (art. 847 CLT; no PJe, pode ser juntada até a audiência).',
      base: 'Art. 847 CLT; arts. 336 e 337 CPC (preliminares); compensação e retenção só na defesa (art. 767 CLT).',
      onde: 'Ao mesmo Juízo da Vara do Trabalho, nos autos.',
      estrutura: ['Endereçamento ao Juízo e número do processo', 'Qualificação e "vem apresentar contestação"', 'Preliminares (art. 337 CPC: incompetência, inépcia, ilegitimidade…)', 'Prejudiciais de mérito (prescrição bienal/quinquenal)', 'Mérito: impugnar pedido por pedido', 'Compensação/dedução', 'Pedidos: acolher preliminares, improcedência, honorários', 'Provas, local, data, advogado'] },
    { id: 'ro', nome: 'Recurso Ordinário', quem: 'Parte que perdeu (total ou em parte) na sentença da Vara.',
      quando: 'Já existe sentença de 1º grau (fase de conhecimento) e o cliente quer reformá-la.', prazo: '8 dias (art. 895, I, CLT).',
      base: 'Art. 895 CLT; preparo: custas (art. 789 CLT) e depósito recursal do empregador (art. 899 CLT).',
      onde: 'Interposição ao Juízo da Vara; razões ao TRT (duas peças: folha de rosto + razões).',
      estrutura: ['Peça de interposição ao Juízo da Vara (tempestividade, preparo, pede remessa ao TRT)', 'Razões ao Egrégio TRT', 'Pressupostos (tempestividade, preparo, representação)', 'Preliminares (se houver nulidade)', 'Mérito: um tópico por capítulo da sentença', 'Pedido de conhecimento e provimento para reformar', 'Local, data, advogado'] },
    { id: 'ee', nome: 'Embargos à Execução', quem: 'Executado (em regra, a empresa) na fase de execução.',
      quando: 'Sentença transitada, conta homologada e o juízo garantido (penhora ou depósito).', prazo: '5 dias após a garantia do juízo (art. 884 CLT).',
      base: 'Art. 884 CLT; matérias do § 1º (cumprimento, quitação, prescrição da dívida) e impugnação aos cálculos (§ 3º).',
      onde: 'Ao Juízo da execução (Vara do Trabalho).',
      estrutura: ['Endereçamento ao Juízo da execução e número do processo', 'Tempestividade e garantia do juízo', 'Matérias de defesa (art. 884, § 1º, CLT) e excesso de execução', 'Pedido de procedência e desconstituição/redução', 'Local, data, advogado'] },
    { id: 'ap', nome: 'Agravo de Petição', quem: 'Parte vencida em decisão do juiz na execução (por ex., embargos à execução julgados).',
      quando: 'A decisão a atacar é da fase de execução.', prazo: '8 dias (art. 897, a, CLT).',
      base: 'Art. 897, a e § 1º, CLT (delimitar justificadamente as matérias e os valores impugnados).',
      onde: 'Interposição ao Juízo da execução; razões ao TRT.',
      estrutura: ['Interposição ao Juízo da Vara', 'Razões ao TRT', 'Pressupostos + delimitação de matérias e valores', 'Mérito por tópicos', 'Pedido de conhecimento e provimento', 'Local, data, advogado'] },
    { id: 'rr', nome: 'Recurso de Revista', quem: 'Parte vencida em acórdão de TRT em recurso ordinário.',
      quando: 'Há acórdão do TRT que viola lei federal/CF ou diverge de súmula/OJ do TST ou de outro TRT.', prazo: '8 dias (art. 896 CLT).',
      base: 'Art. 896 CLT (hipóteses a, b e c); transcendência (art. 896-A CLT); prequestionamento (Súm. 297 TST).',
      onde: 'Interposição ao Desembargador Presidente do TRT; razões ao TST.',
      estrutura: ['Interposição ao Presidente do TRT', 'Razões ao Colendo TST', 'Pressupostos, prequestionamento e transcendência', 'Cabimento: violação ou divergência (indicar o trecho do acórdão)', 'Mérito', 'Pedido de conhecimento e provimento', 'Local, data, advogado'] },
    { id: 'ed', nome: 'Embargos de Declaração', quem: 'Qualquer parte diante de decisão com omissão, contradição, obscuridade ou erro material.',
      quando: 'A decisão tem um vício interno (não é para rediscutir o mérito).', prazo: '5 dias (art. 897-A CLT).',
      base: 'Art. 897-A CLT; art. 1.022 CPC.',
      onde: 'Ao próprio juízo/órgão que proferiu a decisão.',
      estrutura: ['Endereçamento ao prolator da decisão', 'Tempestividade', 'Apontar o vício (omissão, contradição, obscuridade, erro material)', 'Pedido de saneamento, com efeito modificativo se for o caso', 'Local, data, advogado'] },
    { id: 'ai', nome: 'Agravo de Instrumento', quem: 'Parte cujo recurso teve o seguimento negado.',
      quando: 'Despacho denegou seguimento a recurso (ex.: RO considerado deserto).', prazo: '8 dias (art. 897, b, CLT).',
      base: 'Art. 897, b e § 5º, CLT; depósito recursal (art. 899, § 7º, CLT).',
      onde: 'Ao juízo que negou seguimento; razões ao tribunal competente para o recurso trancado.',
      estrutura: ['Interposição ao juízo que denegou', 'Razões ao tribunal', 'Pressupostos e depósito', 'Por que o recurso trancado deveria subir', 'Pedido de provimento para processar o recurso', 'Local, data, advogado'] },
    { id: 'ms', nome: 'Mandado de Segurança', quem: 'Quem sofre ato ilegal de juiz contra o qual não cabe recurso (ex.: tutela antecipada antes da sentença).',
      quando: 'Há direito líquido e certo e não existe recurso próprio contra o ato.', prazo: '120 dias da ciência do ato (art. 23 da Lei 12.016/2009).',
      base: 'Lei 12.016/2009; art. 114, IV, CF; Súm. 414 TST (tutela antes da sentença).',
      onde: 'Ato de juiz da Vara: ao TRT.',
      estrutura: ['Endereçamento ao TRT', 'Impetrante, autoridade coatora e litisconsorte', 'Cabimento (sem recurso próprio) e tempestividade', 'Direito líquido e certo e ilegalidade', 'Liminar (fumus e periculum)', 'Pedidos: liminar, notificação da autoridade, concessão da segurança', 'Valor da causa, local, data, advogado'] },
    { id: 'cons', nome: 'Consignação em Pagamento', quem: 'Empregador que quer pagar e não consegue (empregado se recusa a receber, sumiu, morreu…).',
      quando: 'O cliente é a empresa e quer se livrar da mora pagando em juízo.', prazo: 'Sem prazo específico; usar antes de incidir multa (ex.: art. 477, § 8º, CLT).',
      base: 'Arts. 539 e seguintes do CPC, aplicados pelo art. 769 CLT.',
      onde: 'Vara do Trabalho.',
      estrutura: ['Endereçamento à Vara', 'Consignante e consignado', 'Fatos (recusa ou impossibilidade de pagar)', 'Fundamento (art. 539 CPC)', 'Pedidos: depósito, citação, extinção da obrigação', 'Valor da causa, local, data, advogado'] },
    { id: 'iq', nome: 'Inquérito para Apuração de Falta Grave', quem: 'Empregador que quer dispensar por justa causa empregado estável que exige inquérito (ex.: dirigente sindical).',
      quando: 'Empregado estável cometeu falta grave e foi (ou será) suspenso.', prazo: '30 dias da suspensão do empregado (art. 853 CLT).',
      base: 'Arts. 853 a 855 CLT; art. 8º, VIII, CF e Súm. 379 TST (dirigente sindical).',
      onde: 'Vara do Trabalho; petição escrita.',
      estrutura: ['Endereçamento à Vara', 'Requerente (empresa) e requerido', 'Estabilidade do empregado e a falta grave (art. 482 CLT)', 'Suspensão e prazo de 30 dias', 'Pedidos: procedência e resolução do contrato', 'Provas (até 6 testemunhas), local, data, advogado'] },
    { id: 'ar', nome: 'Ação Rescisória', quem: 'Parte que quer desconstituir decisão de mérito transitada em julgado.',
      quando: 'Sentença ou acórdão já transitou em julgado e há hipótese do art. 966 CPC.', prazo: '2 anos do trânsito em julgado (art. 975 CPC).',
      base: 'Art. 836 CLT (depósito prévio de 20%); art. 966 CPC; Súm. 299 TST.',
      onde: 'TRT (ou TST, conforme a decisão rescindenda).',
      estrutura: ['Endereçamento ao tribunal', 'Partes', 'Decisão rescindenda e trânsito em julgado', 'Hipótese do art. 966 CPC', 'Depósito prévio de 20%', 'Pedidos: rescindir e novo julgamento', 'Valor da causa, local, data, advogado'] },
    { id: 'exc', nome: 'Exceção de Incompetência Territorial', quem: 'Reclamado demandado em Vara de local diferente do que a lei manda.',
      quando: 'Reclamação ajuizada fora do local da prestação de serviços.', prazo: '5 dias da notificação, antes da audiência (art. 800 CLT).',
      base: 'Arts. 651 e 800 CLT.',
      onde: 'Ao Juízo onde a ação foi proposta.',
      estrutura: ['Endereçamento ao Juízo', 'Tempestividade (5 dias)', 'Fundamento (art. 651 CLT)', 'Pedidos: suspensão do processo e remessa à Vara competente', 'Local, data, advogado'] }
  ];

  var PROVA = '2027-02-28', INICIO = '2027-01-11';
  function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function porGrupo(gr) { return MAT.filter(function (m) { return m.g === gr; }); }

  // Plano: 5 semanas de base (seg–sex: 1 capítulo de processo + 1 de direito material + esqueleto de uma peça;
  // sábado: peça completa cronometrada; domingo: 4 discursivas + revisão da semana) e 2 de reta final.
  function plano() {
    var dias = [], d = new Date(INICIO + 'T12:00:00'), fim = new Date(PROVA + 'T12:00:00');
    var proc = porGrupo('proc'), mat = porGrupo('mat'), rev = porGrupo('rev'), jur = porGrupo('jur');
    var fila1 = proc.concat(rev.slice(3)), fila2 = mat.concat(rev.slice(0, 3));
    var iPeca = 0, iCompleta = 0, semana = 1;
    while (d < fim) {
      var x = { d: iso(d), sem: semana, itens: [] }, dow = d.getDay(), reta = x.d >= '2027-02-15';
      if (x.d === '2027-02-27') {
        x.tipo = 'leve'; x.titulo = 'Véspera';
        x.itens.push({ k: 'v1', t: 'Reler o roteiro das 5 peças mais cobradas', a: 'pecas' });
        x.itens.push({ k: 'v2', t: 'Conferir o Vade Mecum: só legislação sem comentários, marcações permitidas pelo edital', a: 'guia' });
        x.itens.push({ k: 'v3', t: 'Separar documento, caneta preta transparente e descansar', a: '' });
      } else if (x.d === '2027-02-20') {
        x.tipo = 'simulado'; x.titulo = 'Simulado completo';
        x.itens.push({ k: 's', t: 'Prova inteira de um exame anterior em 5 horas (peça + 4 questões)', a: 'treino' });
        x.itens.push({ k: 'c', t: 'Corrigir pelo padrão de resposta da FGV e registrar a nota', a: 'treino' });
      } else if (dow === 6) {
        var p = PECAS[iCompleta++ % 5];
        x.tipo = 'peca'; x.titulo = 'Peça completa · ' + p.nome;
        x.itens.push({ k: 'p', t: 'Escrever uma ' + p.nome + ' inteira com cronômetro (até 3 horas)', a: 'pecas', peca: p.id });
        x.itens.push({ k: 'c', t: 'Corrigir pelo padrão de resposta e registrar no Treino', a: 'treino' });
      } else if (dow === 0) {
        x.tipo = 'discursivas'; x.titulo = 'Discursivas e revisão';
        x.itens.push({ k: 'q', t: 'Resolver 4 questões discursivas de exames anteriores (cerca de 30 min cada)', a: 'treino' });
        x.itens.push({ k: 'r', t: 'Revisar o que estudou na semana e marcar o Vade Mecum', a: 'estudo' });
      } else if (!reta) {
        x.tipo = 'estudo';
        var a = fila1.shift(), b = fila2.shift(), pe = PECAS[iPeca++ % PECAS.length];
        x.titulo = [a, b].filter(Boolean).map(function (m) { return m.t; }).join(' + ');
        if (a) x.itens.push({ k: 'm' + a.id, t: 'Ler: ' + a.t, a: 'estudo', mat: a.id });
        if (b) x.itens.push({ k: 'm' + b.id, t: 'Ler: ' + b.t, a: 'estudo', mat: b.id });
        x.itens.push({ k: 'e', t: 'Esqueleto de ' + pe.nome + ' (só a estrutura, 20 min)', a: 'pecas', peca: pe.id });
      } else {
        var pe2 = PECAS[iPeca++ % PECAS.length], j = jur[(dias.length) % jur.length];
        x.tipo = 'reta'; x.titulo = 'Reta final · ' + pe2.nome;
        x.itens.push({ k: 'p', t: 'Peça completa: ' + pe2.nome + ' (cronometrada)', a: 'pecas', peca: pe2.id });
        x.itens.push({ k: 'q', t: '2 questões discursivas', a: 'treino' });
        x.itens.push({ k: 'm' + j.id, t: 'Revisar: ' + j.t, a: 'estudo', mat: j.id });
      }
      dias.push(x);
      if (dow === 0) semana++;
      d.setDate(d.getDate() + 1);
    }
    dias.push({ d: PROVA, sem: semana, tipo: 'prova', titulo: 'Prova da 2ª fase', itens: [] });
    return dias;
  }

  window.F2 = { PROVA: PROVA, INICIO: INICIO, MATERIAIS: MAT, GRUPOS: GRUPOS, PECAS: PECAS, plano: plano };
})();
