const dialog = document.querySelector('[data-lightbox]');
const dialogImage = dialog?.querySelector('[data-lightbox-image]');
const closeBtn = dialog?.querySelector('[data-lightbox-close]');
const prevBtn = dialog?.querySelector('[data-lightbox-prev]');
const nextBtn = dialog?.querySelector('[data-lightbox-next]');
const items = Array.from(document.querySelectorAll('[data-lightbox-item]'));

if (dialog && dialogImage && items.length) {
  let currentIndex = 0;

  const show = (index) => {
    currentIndex = (index + items.length) % items.length;
    const item = items[currentIndex];
    dialogImage.src = item.dataset.image ?? '';
    dialogImage.alt = item.dataset.alt ?? '';
  };

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      show(index);
      dialog.showModal();
    });
  });

  closeBtn?.addEventListener('click', () => dialog.close());
  prevBtn?.addEventListener('click', () => show(currentIndex - 1));
  nextBtn?.addEventListener('click', () => show(currentIndex + 1));

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(currentIndex - 1);
    if (event.key === 'ArrowRight') show(currentIndex + 1);
  });
}
