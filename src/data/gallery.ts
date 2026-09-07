// Галерея робіт. TODO: заміни плейсхолдери на реальні фото робіт салону
// (додай файли у public/images/gallery/ і онови шлях image нижче).

export type GalleryItem = {
  image: string;
  alt: string;
  category: string; // slug з services.ts
};

export const gallery: GalleryItem[] = [
  { image: '/images/gallery/manikyur-1.svg', alt: 'Приклад роботи: манікюр', category: 'manikyur' },
  { image: '/images/gallery/manikyur-2.svg', alt: 'Приклад роботи: манікюр з дизайном', category: 'manikyur' },
  { image: '/images/gallery/pedikyur-1.svg', alt: 'Приклад роботи: педикюр', category: 'pedikyur' },
  { image: '/images/gallery/strizhky-1.svg', alt: 'Приклад роботи: стрижка', category: 'strizhky' },
  { image: '/images/gallery/strizhky-2.svg', alt: 'Приклад роботи: вечірня укладка', category: 'strizhky' },
  {
    image: '/images/gallery/naroshchuvannya-volossya-1.svg',
    alt: 'Приклад роботи: нарощування волосся',
    category: 'naroshchuvannya-volossya',
  },
  { image: '/images/gallery/brovy-1.svg', alt: 'Приклад роботи: брови', category: 'brovy' },
  { image: '/images/gallery/farbuvannya-1.svg', alt: 'Приклад роботи: фарбування волосся', category: 'farbuvannya' },
  {
    image: '/images/gallery/farbuvannya-2.svg',
    alt: 'Приклад роботи: складне фарбування',
    category: 'farbuvannya',
  },
  {
    image: '/images/gallery/kosmetolohiya-1.svg',
    alt: 'Приклад роботи: косметологічна процедура',
    category: 'kosmetolohiya',
  },
];
