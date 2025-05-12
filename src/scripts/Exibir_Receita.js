document.addEventListener('DOMContentLoaded', () => {
  const receitaJSON = sessionStorage.getItem('receita');
  if (!receitaJSON) return;

  const receita = JSON.parse(receitaJSON);

  document.querySelector('#titulo-receita').textContent = receita.titulo;
  document.querySelector('#instrucoes-receita').textContent = receita.instrucoes || receita.modoPreparo;
  document.querySelector('#tempo-preparo').textContent = `${receita.tempoPreparo} min`;

  const listaIngredientes = document.querySelector('#lista-ingredientes');
  receita.ingredientes.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listaIngredientes.appendChild(li);
  });
});