import { FaqItem, BonusItem, PhaseItem, StepItem } from './types';

export const CHECKOUT_URL = 'https://pay.hotmart.com/S102293415L?off=owxybbn0&checkoutMode=10';

export const MARQUEE_ICONS = [
  '/images/icn1.svg?v=3',
  '/images/icn2.svg?v=3',
  '/images/icn3.svg?v=3',
  '/images/icn4.svg?v=3',
  '/images/icn5.svg?v=3',
  '/images/icn6.svg?v=3',
  '/images/icn7.svg?v=3',
  '/images/icn8.svg?v=3',
  '/images/icn9.svg?v=3',
  '/images/icn10.svg?v=3',
];

export const GENERAL_TESTIMONIALS = [
  '/images/dep-4-geral.avif',
  '/images/dep-3-geral.avif',
  '/images/dep-2-geral.avif',
];

export const OBJECTION_1_SLIDES = [
  '/images/dep-cent1.5.avif',
  '/images/dep-cent1.4.avif',
  '/images/dep-cent1.3.avif',
  '/images/dep-cent1.2.avif',
  '/images/dep-cent1.1.avif',
];

export const OBJECTION_2_SLIDES = [
  '/images/dep-cent3.1.avif',
  '/images/dep-cent3.4.avif',
  '/images/dep-cent3.3.avif',
  '/images/dep-cent3.2.avif',
];

export const OBJECTION_3_SLIDES = [
  '/images/dep-cent2.3.avif',
  '/images/dep-cent2.2.avif',
  '/images/dep-cent2.1.avif',
];

export const PHASES_DATA: PhaseItem[] = [
  {
    number: 1,
    title: 'PORTFÓLIO PRONTO',
    quote: '“Comece com o meu portifólio pronto. Depois construa o seu aos poucos.”',
    intro: 'Nessa fase você:',
    image: '/images/fase-1.avif',
    items: [
      'Recebe o portfólio pronto (100+ fotos e 80+ vídeos sem rosto)',
      'Escolhe o ângulo que faz sentido pro seu tipo de viagem.',
      'Copia, adapta e envia seguindo o passo a passo.',
      'Vê resultado já na primeira proposta.',
    ],
  },
  {
    number: 2,
    title: 'GATILHO DA RIQUEZA',
    quote: '“Ative o desejo através de uma técnica específica de tirar fotos.”',
    intro: 'Já na segunda fase, você…',
    image: '/images/fase-2.avif',
    items: [
      'Entende por que umas fotos vendem e outras não.',
      'Aprende a usar o Gatilho Secreto da Riqueza nas suas próprias fotos.',
      'Constrói um perfil que os hotéis desejam ter.',
      'Cria suas próprias propostas validadas.',
    ],
  },
  {
    number: 3,
    title: 'PROPOSTA IRRESISTÍVEL',
    quote: '“Transforme desejo em $$$ através de uma proposta que não parece venda.”',
    intro: 'E na última e não menos importante, você…',
    image: '/images/fase-3.avif',
    items: [
      'Aprende o Hack Secreto das 3 Frases que fecha sem parecer venda.',
      'Ganha autoridade instantânea em cada proposta.',
      'Transforma hotéis curiosos em parceiros fixos.',
      'Deixa a Checkin IA buscando novas hospedagens enquanto você dorme.',
    ],
  },
];

export const STEPS_DATA: StepItem[] = [
  {
    number: 1,
    image: '/images/rec.avif',
    title: 'ÂNGULOS DO DESEJO',
    description:
      'Posicionamento de câmera, luz e ângulos que fazem qualquer lugar parecer luxuoso (só com o celular)',
  },
  {
    number: 2,
    image: '/images/2x.avif',
    title: 'PROPOSTA',
    description:
      'O Hack Secreto das 3 Frases, como contatar o hotel, fazer com que seja impossível de eles não responderem.',
  },
  {
    number: 3,
    image: '/images/play.avif',
    title: 'EDIÇÃO',
    description:
      'Tutorial completo de edição pelo celular e a técnica de 5 minutos que entrega o vídeo editado e com música pronto pra postar.',
  },
  {
    number: 4,
    image: '/images/movie.avif',
    title: 'EQUIPAMENTOS',
    description:
      'Lista completa do que usar, sem precisar de câmera profissional, apenas um celular e um tripé já basta!',
  },
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 'bonus-1',
    image: '/images/ideias-32nichos.avif',
    title: 'Portfólio Sem Rosto: 100+ Fotos e 80+ Vídeos.',
    subtitle: '"Nunca mais chegue de mãos vazias numa proposta"',
    bullets: [
      '100+ imagens prontas para enviar aos hotéis',
      '80+ vídeos prontos, adaptáveis a qualquer hospedagem',
      'Nenhum com meu rosto — pode usar à vontade',
      'Testado e aprovado em parcerias reais',
    ],
  },
  {
    id: 'bonus-2',
    image: '/images/aulao-criador.avif',
    title: 'Checkin IA',
    subtitle: '"Nunca mais perca tempo procurando hospedagem"',
    bullets: [
      'Busca automática das melhores hospedagens da sua região',
      'Relatório pronto, enquanto você dorme, come ou toma banho',
      'Envio de proposta com um único clique',
      'Encontra as hospedagens com maior potencial de fechamento',
    ],
  },
  {
    id: 'bonus-3',
    image: '/images/lucro_no_direct.avif',
    title: 'IA de Edição + Técnica de Vídeo',
    subtitle: '"Transforme qualquer foto em uma foto que vende"',
    bullets: [
      'Cole a foto original, use o prompt que te darei',
      'A IA deixa a imagem com cara de luxo',
      'Vídeo sai pronto, com música e tudo, sem precisar editar',
      'Pronto pra postar no mesmo dia',
    ],
  },
  {
    id: 'bonus-4',
    image: '/images/presente-surpresa.avif',
    title: 'Hack Secreto das 3 Frases',
    subtitle: '"A frase certa vale mais que o curso inteiro"',
    bullets: [
      'É a sequência exata de palavras que faz o hotel te responder rápido. Copia, cola e manda hoje mesmo.',
    ],
  },
];

export const CHECKLIST_ITEMS = [
  'Acesso imediato ao Do Zero ao Primeiro Hotel',
  'Acesso durante 1 ano a todas as atualizações',
  'Suporte completo direto pela plataforma',
  'Bônus 01: Portfólio Sem Rosto',
  'Bônus 02: Checkin IA',
  'Bônus 03: IA de Edição + Técnica de Vídeo',
  'Bônus 04: Hack Secreto das 3 Frases',
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '1. O Checkin Reverso funciona mesmo que eu esteja começando do zero?',
    answer:
      'Sim. A maioria das alunas começou sem seguidores, sem câmera boa e sem experiência. O Portfólio Sem Rosto e o Hack das 3 Frases foram criados exatamente para quem quer sair do zero e fechar sua primeira hospedagem rápido.',
  },
  {
    id: 'faq-2',
    question: '2. Preciso aparecer na frente da câmera?',
    answer:
      'Não. O portfólio inteiro funciona sem mostrar o rosto. Você pode gravar só o ambiente, os detalhes, a comida e a experiência do lugar.',
  },
  {
    id: 'faq-3',
    question: '3. Quanto tempo preciso por dia para aplicar?',
    answer:
      'Com 30 a 60 minutos por dia você já consegue enviar propostas com a Checkin IA e ter resultados consistentes.',
  },
  {
    id: 'faq-4',
    question: '4. Preciso fechar hospedagem toda semana?',
    answer:
      'Não. Esse é o erro de quem acredita em “força bruta”. Com a proposta certa, menos contatos trazem muito mais resultado',
  },
  {
    id: 'faq-5',
    question: '5. Em quanto tempo vou ver resultado?',
    answer:
      'Algumas mulheres fecharam parceria nos primeiros 7 dias. Claro que cada caso é único, mas com o Checkin Reverso, você tem grandes chances de ver resultado já no primeiro mês.',
  },
  {
    id: 'faq-6',
    question: '6. Esse método funciona em qualquer cidade?',
    answer:
      'Sim. Já funcionou em capitais e em cidades pequenas, com hotéis, pousadas, chalés e até casas de temporada. Se existe hospedagem por perto, existe proposta pra você.',
  },
  {
    id: 'faq-7',
    question: '7. Funciona só pra hotéis grandes?',
    answer:
      'Não. O Hack das 3 Frases funciona em qualquer tipo de hospedagem: hotel, pousada, chalé, resort... Você pode aplicar a mesma proposta (com pouca ou nenhuma adaptação) em vários lugares e multiplicar seus resultados.',
  },
  {
    id: 'faq-8',
    question: '8. E se eu tiver vergonha de gravar?',
    answer:
      'O Checkin Reverso tem um módulo inteiro sobre isso, onde eu ensino como gravar sem aparecer e ainda assim entregar um material que vende.',
  },
  {
    id: 'faq-9',
    question: '9. Preciso de equipamentos caros para aplicar o método?',
    answer:
      'Não. Um celular básico (nem precisa ser um iPhone) e a luz natural do quarto já são suficientes. O que gera resultado não é a câmera, é o ângulo certo e o Gatilho Secreto da Riqueza.',
  },
  {
    id: 'faq-10',
    question: '10. Preciso ter portfólio antes de começar?',
    answer:
      'Não. Você recebe o Portfólio Sem Rosto pronto (100+ fotos e 80+ vídeos) pra usar como referência ou enviar direto pro hotel.\n\nDepois que você fizer suas primeiras hospedagens, vai construir seu próprio portfólio real, com fotos suas.\n\nSe você quer começar pela prática e ver resultado mais rápido, o portfólio pronto é a porta de entrada ideal.',
  },
  {
    id: 'faq-11',
    question: '11. Como funciona o acesso ao curso?',
    answer:
      'Assim que seu pagamento for aprovado, você recebe acesso imediato à plataforma. Pode acessar pelo celular, computador ou tablet, quando e onde quiser.',
  },
  {
    id: 'faq-12',
    question: '12. O curso tem suporte?',
    answer:
      'Sim. Você terá acesso à área de membros e a uma equipe de suporte preparada para responder suas dúvidas.',
  },
  {
    id: 'faq-13',
    question: '13. Qual é o investimento?',
    answer:
      'De R$900 → por apenas 12x de R$29 (ou R$288 à vista). Menos de R$1 por dia para dominar a habilidade que te paga pra viajar.',
  },
  {
    id: 'faq-14',
    question: '14. E se não funcionar pra mim?',
    answer:
      'Você tem garantia blindada de 16 dias. Se não gostar, pode pedir 100% do dinheiro de volta. Sem letras miúdas, sem enrolação.',
  },
];
