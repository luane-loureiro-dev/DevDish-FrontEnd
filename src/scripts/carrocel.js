document.addEventListener('DOMContentLoaded', () => {
  const texts = document.querySelectorAll('.carousel-texts h2');
  const btnLeft = document.querySelector('.carousel-arrow.left');
  const btnRight = document.querySelector('.carousel-arrow.right');
  let current = 0;

  const showText = (index) => {
    texts.forEach((h2, i) => h2.classList.toggle('active', i === index));
  };

  const next = () => {
    current = (current + 1) % texts.length;
    showText(current);
  };

  const prev = () => {
    current = (current - 1 + texts.length) % texts.length;
    showText(current);
  };

  btnRight.addEventListener('click', next);
  btnLeft.addEventListener('click', prev);

  // inicializa
  showText(current);
});