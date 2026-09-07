const filterButtons = Array.from(document.querySelectorAll('[data-gallery-filter]'));
const items = Array.from(document.querySelectorAll('[data-gallery-item]'));

if (filterButtons.length && items.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.galleryFilter ?? 'all';

      filterButtons.forEach((btn) => btn.setAttribute('aria-pressed', String(btn === button)));

      items.forEach((item) => {
        const matches = filter === 'all' || item.dataset.category === filter;
        item.hidden = !matches;
      });
    });
  });
}
