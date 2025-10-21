var Webflow = window.Webflow || [];

Webflow.push(() => {
  const buttons = document.querySelectorAll('.tabs__button');
  const contents = document.querySelectorAll('.tabs__content');

  // Изначально показываем первый таб с начальным масштабом и прозрачностью
  contents.forEach((content, idx) => {
    gsap.set(content, {autoAlpha: idx === 0 ? 1 : 0, scale: idx === 0 ? 1 : 0.9, y: idx === 0 ? 0 : 20});
  });

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');

      contents.forEach(content => {
        if (content.getAttribute('data-content') === tab) {
          gsap.to(content, {autoAlpha: 1, scale: 1, y: 0, duration: 0.5, overwrite: 'auto', ease: "power2.out"});
        } else {
          gsap.to(content, {autoAlpha: 0, scale: 0.9, y: 20, duration: 0.5, overwrite: 'auto', ease: "power2.in"});
        }
      });
    });
  });
});
