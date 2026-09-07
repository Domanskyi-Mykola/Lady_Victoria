import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://domanskyi-mykola.github.io',
  base: '/Lady_Victoria',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Сторінки з noindex (наразі — політика конфіденційності) не мають
      // потрапляти в sitemap, щоб не давати Google суперечливий сигнал.
      filter: (page) => !page.includes('/polityka-konfidentsiynosti/'),
    }),
  ],
  compressHTML: true,
  build: {
    // Тримаємо всі стилі в окремих .css-файлах (не інлайнимо в <style>),
    // щоб CSP міг обходитись без 'unsafe-inline' у style-src.
    inlineStylesheets: 'never',
  },
});
