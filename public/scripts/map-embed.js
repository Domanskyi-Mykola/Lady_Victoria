// Карта підвантажується лише після кліку користувача: до цього моменту
// на сторінці немає жодного запиту чи cookie від Google.
const trigger = document.querySelector('[data-map-trigger]');
const placeholder = document.querySelector('[data-map-placeholder]');
const frameSrc = trigger?.getAttribute('data-map-src');

if (trigger && placeholder && frameSrc) {
  trigger.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = frameSrc;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.title = 'Карта з розташуванням салону';
    iframe.setAttribute('allowfullscreen', '');
    placeholder.replaceWith(iframe);
    iframe.className = 'map-embed__frame';
  });
}
