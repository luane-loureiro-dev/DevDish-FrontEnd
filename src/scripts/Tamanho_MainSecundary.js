function ajustarAlturaSecundaria() {
  const receita = document.querySelector('.Recipe_Container');
  const secundaria = document.querySelector('.Main_Secundary_Recipe');

  if (receita && secundaria) {
    const alturaPx = receita.offsetHeight;
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const alturaEmRem = (alturaPx / fontSize) * 0.4; 
    secundaria.style.height = alturaEmRem + 'rem';
  }
}

window.addEventListener('load', ajustarAlturaSecundaria);
window.addEventListener('resize', ajustarAlturaSecundaria);