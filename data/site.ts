export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Giovanna Saroli',
  monogram: 'GS',
  headline: 'A beleza que já existe em você.',
  cro: 'CROSP 152.839',
  bio: 'Cirurgiã-dentista graduada pela UNESP e especialista em Harmonização Orofacial. A Dra. Giovanna Saroli acredita em uma beleza que respeita a identidade de cada pessoa: escuta, planejamento individual e cuidado em cada detalhe.',
  education: ['Graduada pela UNESP', 'Especialista em Harmonização Orofacial'],
  specialties: ['Harmonização Orofacial'],
  phone: '+55 11 99672-3137',
  whatsapp: '5511996723137',
  whatsappUrl: 'https://wa.me/5511996723137',
  address: 'Vila Leopoldina, São Paulo — SP',
  professionalPhilosophy: 'Realçar a beleza que já existe em você.',
  instagram: 'https://www.instagram.com/dragiovannasaroli/',
  instagramHandle: '@dragiovannasaroli',
  philosophy: ['SEUS TRAÇOS.', 'SUA ESSÊNCIA.', 'SUA BELEZA.'],
  colors: { paper: '#f4f0eb', ink: '#252321', taupe: '#8a756b', champagne: '#d8bda7', dark: '#211d1b', wine: '#292321', muted: '#6d635f' },
  images: { hero: '/images/giovanna-hero.webp', essence: '/images/giovanna-essencia.webp', about: '/images/giovanna-sobre.webp', beauty: '/images/giovanna-experiencia.webp' },
  procedures: [] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.webp', label: 'Harmonia de perfil', alt: 'Comparativo de antes e depois em detalhe do perfil nasal.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1122 / 1402 },
    { image: '/images/resultado-02.webp', label: 'Detalhes que fazem sentir', alt: 'Registro em detalhe de lábios após atendimento.', orientation: 'single', beforeShare: .5, comparisonRatio: 1027 / 1280 },
    { image: '/images/resultado-03.webp', label: 'Expressão e leveza', alt: 'Comparativo facial em visão de três quartos.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1280 / 1269 },
    { image: '/images/resultado-04.webp', label: 'Naturalidade em cada rosto', alt: 'Comparativo frontal de antes e depois em um paciente.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1278 / 1280 },
    { image: '/images/resultado-05.webp', label: 'Beleza com identidade', alt: 'Comparativo frontal de antes e depois em uma paciente.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1266 / 1280 },
    { image: '/images/resultado-06.webp', label: 'Traços em equilíbrio', alt: 'Comparativo lateral de antes e depois do perfil facial.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1258 / 1280 },
    { image: '/images/resultado-07.webp', label: 'Proporção em foco', alt: 'Comparativo lateral de antes e depois do perfil facial.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1275 / 1280 },
    { image: '/images/resultado-08.webp', label: 'Sutileza no resultado', alt: 'Comparativo frontal de antes e depois em um paciente.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1280 / 1236 },
  ] },
  seo: { title: 'Dra. Giovanna Saroli | Harmonização Orofacial em São Paulo', description: 'Realço a beleza que já existe em você. Conheça o olhar da Dra. Giovanna Saroli para a Harmonização Orofacial e agende sua avaliação em São Paulo.', url: '' },
};

export const appointmentUrl = site.whatsappUrl;
