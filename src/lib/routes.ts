// Шляхи сторінок (без base — його додає withBase() у місці використання).

export const ROUTES = {
  home: '/',
  services: '/poslugy/',
  service: (slug: string) => `/poslugy/${slug}/`,
  about: '/pro-nas/',
  masters: '/majstry/',
  gallery: '/galereya/',
  reviews: '/vidhuky/',
  promotions: '/aktsiyi/',
  contacts: '/kontakty/',
  faq: '/faq/',
  privacy: '/polityka-konfidentsiynosti/',
} as const;

export const NAV_LINKS = [
  { href: ROUTES.services, label: 'Послуги' },
  { href: ROUTES.masters, label: 'Майстри' },
  { href: ROUTES.gallery, label: 'Галерея' },
  { href: ROUTES.promotions, label: 'Акції' },
  { href: ROUTES.reviews, label: 'Відгуки' },
  { href: ROUTES.about, label: 'Про нас' },
  { href: ROUTES.contacts, label: 'Контакти' },
];
