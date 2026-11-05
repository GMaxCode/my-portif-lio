export type FolderId = 'projetos' | 'experiencia' | 'formacao' | 'cursos' | 'habilidades';

export const portfolio = {
  name: 'Guilherme Gomes Máximo',
  role: 'futuro Data Engineer',
  cover: {
    study: 'Análise e Desenv. de Sistemas',
    fields: 'Dados · QA · Software',
  },
  folders: [
    { id: 'projetos', label: 'Projetos', tone: 'beige' },
    { id: 'experiencia', label: 'Experiência', tone: 'sage' },
    { id: 'formacao', label: 'Formação', tone: 'beige' },
    { id: 'cursos', label: 'Cursos', tone: 'sage' },
    { id: 'habilidades', label: 'Habilidades', tone: 'beige' },
  ] satisfies { id: FolderId; label: string; tone: 'beige' | 'sage' }[],
  about:
    'Estudante de Análise e Desenvolvimento de Sistemas, com interesse em Engenharia de Dados/Analytics, QA/Testes e desenvolvimento de software. Ex-Jovem Aprendiz em Engenharia de Testes na Flex, onde desenvolvi automações em Python e acompanhei indicadores de qualidade e produtividade. Busco estágio em tecnologia e inovação, com perfil colaborativo e mindset de aprendizado contínuo.',
  projects: [
    {
      title: 'Calculadora FTY PRO (First Time Yield)',
      description:
        'Desenvolvida em Python durante o período como Jovem Aprendiz na Flex. Automatiza o cálculo do indicador de First Time Yield, que era apurado manualmente pelos engenheiros de teste do time. Centraliza o registro dos dados de produção, aplica validação de dados e tratamento de erros e apresenta o resultado de forma padronizada, reduzindo o tempo de cálculo e a dependência de anotações manuais.',
      tags: ['Python', 'automação', 'validação de dados'],
      featured: true,
    },
    {
      title: 'Dashboard Comercial',
      description: 'Dashboard em Power BI para visualização e análise de indicadores.',
      tags: ['Power BI', 'análise de dados'],
    },
    {
      title: 'Banco de Dados BI',
      description: 'Transformação e preparação de dados.',
      tags: ['BI', 'preparação de dados'],
    },
    {
      title: 'Cadastro de Usuários em Python',
      description: 'Sistema em Python que recebe nome, e-mail e idade e guarda em um arquivo JSON.',
      tags: ['Python', 'JSON'],
    },
    {
      title: 'Calculadora Interativa em Python',
      description: 'Calculadora que recebe dados pelo terminal, com tratamento de erro e controle de fluxo.',
      tags: ['Python', 'terminal'],
    },
  ],
  experience: {
    role: 'Jovem Aprendiz — Engenharia de Testes',
    company: 'Flex',
    location: 'Jaguariúna-SP',
    period: '03/2026 – 06/2026',
    responsibilities: [
      'Apoio às atividades do time de Engenharia de Testes em ambiente corporativo, com suporte à instalação de softwares e à manutenção dos equipamentos de teste.',
      'Desenvolvimento de automações em Python para apoio ao time e análise de dados, incluindo leitura e tratamento de planilhas.',
      'Análise de informações e acompanhamento de indicadores de qualidade e produtividade.',
      'Desenvolvimento de calculadora de FTY usada pelos engenheiros de teste, automatizando um cálculo manual e reduzindo o tempo de apuração dos indicadores.',
    ],
  },
  education: {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Centro Universitário Adventista de São Paulo (UNASP)',
    location: 'Hortolândia',
    period: '02/2026 – 07/2028',
    status: 'Em andamento',
  },
  courses: [
    { title: 'Python for Data Science', provider: 'IBM', year: '2026' },
    { title: 'Enterprise Design Thinking Practitioner', provider: 'IBM', year: '2026' },
    { title: 'Introdução à Análise de Dados – Microsoft Power BI', provider: 'Fundação Bradesco', hours: '5h', year: '2026' },
    { title: 'Linguagem de Programação Orientada a Objetos', provider: 'Mundi', hours: '40h', year: '2026' },
    { title: 'Lógica de Programação', provider: 'Tybe', hours: '10h', year: '2026' },
    { title: 'HTML e CSS', provider: 'Curso em Vídeo', hours: '40h', year: '2025' },
    { title: 'Microsoft PowerPoint Avançado', provider: 'Fundação Bradesco', hours: '8h', year: '2025' },
    { title: 'Fundamentos do Design Gráfico', provider: 'Fundação Bradesco', hours: '6h', year: '2025' },
  ],
  skills: [
    {
      category: 'Dados e automação',
      items: ['Python (automação de processos)', 'Pandas', 'Power BI', 'análise de dados', 'acompanhamento de indicadores'],
    },
    {
      category: 'Desenvolvimento',
      items: ['lógica de programação', 'programação orientada a objetos', 'JavaScript', 'HTML', 'CSS', 'Dart', 'Git e GitHub'],
    },
    {
      category: 'Ferramentas',
      items: ['Pacote Office (Word, Excel, PowerPoint)'],
    },
    {
      category: 'Idiomas',
      items: ['Inglês intermediário'],
    },
    {
      category: 'Pessoais',
      items: [
        'colaboração e trabalho em equipe',
        'organização e disciplina',
        'dinamismo e proatividade',
        'facilidade de aprendizado',
        'responsabilidade',
      ],
    },
  ],
  contact: {
    email: 'guilhermegomesmaximo@gmail.com',
    linkedin: 'https://www.linkedin.com/in/guilherme-gomes-max01',
    github: 'https://github.com/GMaxCode',
    location: 'Hortolândia, SP',
    resume: '/curriculo.pdf',
  },
} as const;
