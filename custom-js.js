var Webflow = window.Webflow || [];
Webflow.push(() => {
  const buttons = document.querySelectorAll('.tabs__button');
  const contents = document.querySelectorAll('.tabs__content');

  // Показать первый таб с анимацией GSAP
  contents.forEach((content, idx) => {
    gsap.set(content, {autoAlpha: idx === 0 ? 1 : 0});
  });

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      contents.forEach(content => {
        if (content.getAttribute('data-content') === tab) {
          gsap.to(content, {autoAlpha: 1, duration: 0.5, overwrite: 'auto'});
        } else {
          gsap.to(content, {autoAlpha: 0, duration: 0.5, overwrite: 'auto'});
        }
      });
    });
  });
});