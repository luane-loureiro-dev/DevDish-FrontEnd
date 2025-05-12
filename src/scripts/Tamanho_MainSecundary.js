function ajustarAlturaSecundaria() {
  const receita = document.querySelector('.receita-container');
  const secundaria = document.querySelector('.Main_secundary_Recipe');

  if (receita && secundaria) {
    const alturaPx = receita.offsetHeight;
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const alturaEmRem = (alturaPx / fontSize) * 0.7; 
    secundaria.style.height = alturaEmRem + 'rem';
  }
}

window.addEventListener('load', ajustarAlturaSecundaria);
window.addEventListener('resize', ajustarAlturaSecundaria);