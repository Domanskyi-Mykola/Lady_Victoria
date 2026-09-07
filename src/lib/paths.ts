// Сайт задеплоєний у підкаталог GitHub Pages (base: '/Lady_Victoria/'),
// тож усі внутрішні посилання й посилання на файли з public/ мають
// враховувати base — інакше вони працюватимуть лише на кореневому домені.
// Один хелпер тут — і при переїзді на власний домен (base стане '/')
// усе продовжить працювати без правок по всьому сайту.

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${normalizedBase}${normalizedPath}`;
}
