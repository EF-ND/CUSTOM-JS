var Webflow = window.Webflow || [];
Webflow.push(() => {
  const buttons = document.querySelectorAll('.tabs__button');
  const contents = document.querySelectorAll('.tabs__content');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      contents.forEach(content => {
        content.style.display = (content.getAttribute('data-content') === tab) ? 'block' : 'none';
      });
    });
  });

  // Стартовое состояние: показать первый таб, остальные скрыть
  contents.forEach((content, idx) => {
    content.style.display = idx === 0 ? 'block' : 'none';
  });
});
