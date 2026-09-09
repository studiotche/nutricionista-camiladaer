export const site = {
  name: "Sara Knorst",
  role: "Nutricionista",
  city: "Ivoti",
  state: "RS",
  region: "Ivoti e atendimento online",
  // TODO: Confirmar CRN com a profissional antes da publicação definitiva.
  crn: "XXXXX",
  credentials: "Nutricionista · CRN XXXXX", // TODO: atualizar com o CRN real.
  phoneDisplay: "(51) 98028-9339",
  phoneLink: "5551980289339",
  telLink: "tel:+5551980289339",
  email: "saraknorst@gmail.com",
  instagram: "https://www.instagram.com/nutri.saraknorst/",
  hours: [
    { days: "Terça a sexta", time: "09:00 às 20:00" },
    { days: "Sábado", time: "08:00 às 17:00" },
    { days: "Domingo e segunda", time: "Fechado" },
  ],
  googleProfile: "https://www.google.com/maps/place/Nutricionista+Sara+Knorst/@-29.5966783,-51.1613002,17z/data=!4m15!1m8!3m7!1s0x951945dcb30cab0b:0x2bcbe6a1b4193e19!2sNutricionista+Sara+Knorst!8m2!3d-29.5966524!4d-51.1615069!10e5!16s%2Fg%2F11v702zfvf!3m5!1s0x951945dcb30cab0b:0x2bcbe6a1b4193e19!8m2!3d-29.5966524!4d-51.1615069!16s%2Fg%2F11v702zfvf?entry=ttu",
  googleRating: {
    score: "5,0",
    reviews: 60,
  },
  mapsEmbedUrl: "https://maps.google.com/maps?q=-29.5966524,-51.1615069&z=17&hl=pt-BR&output=embed",
  mapsUrl: "https://www.google.com/maps/place/Nutricionista+Sara+Knorst/@-29.5966524,-51.1615069,17z",
  seo: {
    // TODO: substituir pelo domínio final antes da publicação.
    title: "Nutricionista em Ivoti | Sara Knorst · Emagrecimento Feminino",
    description:
      "Nutricionista em Ivoti com foco em emagrecimento feminino. Acompanhamento estratégico, prático e sem dietas restritivas, presencial e online.",
    url: "https://studiotche.github.io/nutricionista-saraknorst/",
    ogImage: "/images/nutricionista-ivoti-hero-sara.webp",
  },
  hero: {
    eyebrow: "Atendimento presencial e online",
    title: "Nutricionista em Ivoti, Sara Knorst",
    titleHighlight: "Sara Knorst",
    tagline: "Emagrecimento feminino com estratégia, sem restrição.",
    description:
      "Mais de 400 mulheres já transformaram a relação com a comida e com o corpo em um acompanhamento prático, possível e sem dietas impossíveis.",
  },
  about: {
    eyebrow: "Olá, eu sou a Sara!",
    title: "Nutrição feminina para transformar sua relação com a comida",
    titleHighlight: "sua relação com a comida",
    paragraphs: [
      "Meu trabalho é ajudar mulheres a emagrecerem com estratégia, sem abrir mão de comer bem e sem viver de restrição. Acredito que resultado não vem de comer menos, e sim de comer do jeito certo para o seu corpo e a sua rotina.",
      "Por isso, cada acompanhamento é construído a partir da sua história, das suas preferências e dos seus objetivos — com metas realistas e passos que cabem na vida real.",
      "Nada de fórmulas prontas ou dietas genéricas: estratégia, constância e um plano que faça sentido para você, para que o resultado venha e permaneça.",
    ],
  },
  assets: {
    logo: "/images/logo-saraknorst.svg",
    hero: "/images/nutricionista-ivoti-hero-sara.webp",
    heroMobile: "/images/nutricionista-ivoti-hero-sara-mobile.webp",
    about: "/images/nutricionista-ivoti-sobre-sara.webp",
    processBg: "/images/nutricionista-ivoti-sara.webp",
  },
} as const;

// TODO: ajustar especialidades com a profissional antes da publicação definitiva.
export const specialties = [
  {
    number: "01",
    title: "Emagrecimento feminino",
    text: "Um método estratégico para emagrecer sem restrição, com foco em resultados que duram e em uma relação saudável com a comida.",
    detail:
      "Aqui o foco não é a balança de uma semana, mas a construção de hábitos que se mantêm. O acompanhamento começa com uma avaliação completa e evolui em etapas graduais, com metas realistas e sem dietas impossíveis.",
  },
  {
    number: "02",
    title: "Reeducação alimentar",
    text: "Aprender a comer de um jeito novo, sem culpa e sem abrir mão do prazer, em um processo feito para a sua rotina.",
    detail:
      "Você não vai sair de dieta, vai sair da dieta. O trabalho identifica o que funciona para o seu dia a dia e constrói um plano flexível, com orientações práticas que você consegue manter.",
  },
  {
    number: "03",
    title: "Relação com a comida",
    text: "Apoio para quem quer parar de fazer dieta, entender os sinais do corpo e encerrar o ciclo de restrição e exagero.",
    detail:
      "Comer pouco não é o caminho. O acompanhamento ajuda a reconstruir sua confiança nas escolhas, com escuta sem julgamentos e estratégias práticas para o dia a dia.",
  },
  {
    number: "04",
    title: "Saúde e qualidade de vida",
    text: "Planejamento alimentar para quem quer mais energia, melhor disposição e uma rotina que sustente saúde e bem-estar.",
    detail:
      "Comer melhor impacta tudo: energia, sono, disposição e autoestima. O plano é montado a partir do seu histórico, dos seus exames e dos seus objetivos, com ajustes ao longo do tempo.",
  },
  {
    number: "05",
    title: "Acompanhamento online",
    text: "Atendimento por videochamada com a mesma estratégia e atenção do presencial, para você evoluir de onde estiver.",
    detail:
      "O acompanhamento online segue o mesmo método: avaliação completa, plano individualizado e suporte contínuo pelo WhatsApp, com privacidade e praticidade.",
  },
] as const;

export const pillars = [
  ["Nutricional", "Estratégias construídas a partir das suas necessidades, preferências e objetivos."],
  ["Comportamental", "Atenção à rotina e aos hábitos que influenciam suas escolhas todos os dias."],
  ["Estratégico", "Um plano prático, flexível e sem restrição, feito para caber na sua vida."],
] as const;

// Depoimentos reais coletados do Google (perfil: 5,0 estrelas · 60 avaliações).
// Datas aproximadas a partir do indicador "um mês atrás" (jul/2026) — confirmar antes da publicação.
export const testimonials: {
  name: string;
  date: string;
  dateTime: string;
  text: string;
}[] = [
  {
    name: "Sandra Linck",
    date: "15/07/2026",
    dateTime: "2026-07-15",
    text: "A Nutricionista Sara foi a divisora de águas na minha vida. De forma prática, estou conseguindo um emagrecimento lindo, comendo comida de verdade! Sem cortar isso ou aquilo, ela me ensinou que posso comer o que gosto de forma bem dosada. Em pouco mais de 7 meses, perdi 12 kg e hoje sou uma pessoa muito mais feliz!",
  },
  {
    name: "Luana Knorst",
    date: "15/07/2026",
    dateTime: "2026-07-15",
    text: "Ótima profissional! Entendeu minha rotina para juntas montarmos um plano possível, prático, flexível e que trouxe e continua trazendo ótimos resultados!",
  },
  {
    name: "Ana Lúcia Reder",
    date: "15/07/2026",
    dateTime: "2026-07-15",
    text: "A Sara é maravilhosa nutricionista prática: seu plano alimentar é com o que você tem em casa, e consegue manter fácil, atenciosa e incentivadora.",
  },
  {
    name: "Thamires Stoffel-Levy",
    date: "15/07/2026",
    dateTime: "2026-07-15",
    text: "Se você procura dietas que realmente funcionam, que se adaptam à sua rotina e paladar, Sara é a nutricionista mais indicada: vai te ajudar, assim como vem me ajudando! Recomendo muito!!",
  },
  {
    name: "Érica Wagner",
    date: "04/08/2026",
    dateTime: "2026-08-04",
    text: "Sempre muito prestativa. Uma dieta variada e eficiente, adaptada à minha rotina, e sem passar fome.",
  },
  {
    name: "Dienifer Schneider",
    date: "15/07/2026",
    dateTime: "2026-07-15",
    text: "Uma excelente profissional, te ajuda a atingir suas metas comendo bem e saudável!",
  },
  {
    name: "Débora Dresch Da Rosa",
    date: "15/07/2026",
    dateTime: "2026-07-15",
    text: "É muito atenciosa e procura auxiliar nas nossas maiores dificuldades. Gostei muito do seu atendimento.",
  },
];

export const locations = [
  {
    city: "Ivoti",
    address: "Avenida Presidente Lucena, 3071 · sala 06",
    district: "Centro · Ivoti/RS",
    type: "Presencial",
  },
  {
    city: "Atendimento online",
    address: "Consulta por videochamada",
    district: "De onde você estiver",
    type: "Online",
  },
] as const;

export const faqs = [
  ["Onde acontecem as consultas presenciais?", "Os atendimentos presenciais acontecem em Ivoti, na Avenida Presidente Lucena, 3071, sala 06, no Centro."],
  ["Quais os horários de atendimento?", "Os atendimentos acontecem de terça a sexta, das 09h às 20h, e aos sábados, das 08h às 17h. Domingos e segundas o consultório está fechado. Para agendar, é só chamar no WhatsApp."],
  ["É possível consultar online?", "Sim. O atendimento online permite realizar a consulta com privacidade e conforto, de onde você estiver."],
  ["Como faço para agendar?", `Clique em qualquer botão de agendamento para conversar diretamente pelo WhatsApp ${site.phoneDisplay}.`],
  ["O acompanhamento é personalizado?", "Sim. A proposta considera sua rotina, preferências, objetivos, histórico e contexto, evitando orientações genéricas."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Atende convênio?", "A consulta é particular, com emissão de nota fiscal. Você pode encaminhar a nota ao seu convênio para solicitar reembolso, conforme as regras do seu plano."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Quanto custa a primeira consulta?", "O valor da consulta é informado diretamente pelo WhatsApp. O acompanhamento e sua duração são combinados de acordo com os seus objetivos."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Como funciona a consulta online?", "A consulta online acontece por videochamada, com a mesma atenção e privacidade do atendimento presencial. Você recebe as orientações e o plano alimentar por WhatsApp ou e-mail."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Preciso levar exames na primeira consulta?", "Não é obrigatório. Se você tiver exames recentes, traga-os, eles ajudam a avaliar seu quadro. Se não tiver, o atendimento acontece normalmente."],
  // Confirmar com a profissional antes da publicação definitiva.
  ["Como funciona o primeiro atendimento?", "O primeiro atendimento é uma conversa completa: história de saúde, rotina, preferências e objetivos. A partir dela, é construído um plano realista, em etapas."],
] as const;

export const whatsappUrl = `https://wa.me/${site.phoneLink}?text=${encodeURIComponent("Olá, Nutri Sara! Quero mais informações sobre as consultas.")}`;
