// Майстри салону. TODO: заміни на реальні імена, спеціалізації, досвід і фото.
// Фото зараз — згенеровані плейсхолдери (/images/masters/*.svg).

export type Master = {
  slug: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  categories: string[]; // slugs з services.ts
};

export const masters: Master[] = [
  {
    slug: 'viktoriya',
    name: 'Вікторія',
    role: 'Майстер манікюру та педикюру',
    experience: 'Досвід 7 років',
    bio: 'Спеціалізується на апаратному манікюрі та стійких покриттях. Постійно проходить курси підвищення кваліфікації.',
    image: '/images/masters/master-1.svg',
    categories: ['manikyur', 'pedikyur'],
  },
  {
    slug: 'olena',
    name: 'Олена',
    role: 'Стиліст-перукар',
    experience: 'Досвід 10 років',
    bio: 'Виконує стрижки будь-якої складності та вечірні укладки. Любить класику й акуратні лінії.',
    image: '/images/masters/master-2.svg',
    categories: ['strizhky', 'naroshchuvannya-volossya'],
  },
  {
    slug: 'maryna',
    name: 'Марина',
    role: 'Колорист',
    experience: 'Досвід 8 років',
    bio: 'Підбирає відтінки індивідуально під тип зовнішності, вправно працює зі складними техніками фарбування.',
    image: '/images/masters/master-3.svg',
    categories: ['farbuvannya'],
  },
  {
    slug: 'iryna',
    name: 'Ірина',
    role: 'Броу-майстер',
    experience: 'Досвід 5 років',
    bio: 'Створює природну та виразну форму брів, володіє технікою архітектури та ламінування.',
    image: '/images/masters/master-4.svg',
    categories: ['brovy'],
  },
  {
    slug: 'kateryna',
    name: 'Катерина',
    role: 'Косметолог',
    experience: 'Досвід 6 років',
    bio: 'Підбирає програму догляду за шкірою індивідуально, працює дбайливо та з увагою до потреб клієнтки.',
    image: '/images/masters/master-5.svg',
    categories: ['kosmetolohiya'],
  },
];
