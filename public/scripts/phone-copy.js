// Окрема кнопка "копіювати" поруч із tel:-посиланням (саме посилання
// завжди веде на дзвінок і власної поведінки в JS не потребує).
const buttons = document.querySelectorAll('[data-copy-phone]');

buttons.forEach((button) => {
  const phone = button.getAttribute('data-copy-phone');
  if (!phone || !navigator.clipboard) return;

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(phone);
      const status = button.querySelector('[data-copy-status]');
      if (status) {
        status.textContent = 'Номер скопійовано';
        window.setTimeout(() => {
          status.textContent = '';
        }, 1800);
      }
    } catch {
      // Буфер обміну недоступний (немає дозволу/непідтримуваний браузер) —
      // номер телефону вже видно на сторінці, користувач скопіює вручну.
    }
  });
});
