// Контент [data-reveal] завжди видимий за замовчуванням (див. global.css) —
// це лише програє одноразову анімацію появи, коли елемент потрапляє у
// в'юпорт. Якщо IntersectionObserver недоступний, користувач вимкнув
// анімації, або скрипт не завантажився — контент і без цього залишається
// повністю видимим, нічого не ламається.
const targets = document.querySelectorAll('[data-reveal]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (targets.length && 'IntersectionObserver' in window && 'animate' in HTMLElement.prototype && !reduceMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.animate(
            [
              { opacity: 0, transform: 'translateY(18px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: 600, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)', fill: 'backwards' },
          );
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  );

  targets.forEach((el) => observer.observe(el));
}
