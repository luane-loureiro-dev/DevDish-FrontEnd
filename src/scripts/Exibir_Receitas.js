document.addEventListener('DOMContentLoaded', () => {
  const receitasJSON = sessionStorage.getItem('receitas');
  if (!receitasJSON) return;

  const data = JSON.parse(receitasJSON);
  const receitas = data.itens || []; 

  if (receitas.length === 0) return;

  let indexAtual = 0;

  const tituloEl = document.querySelector('#titulo-receita');
  const instrucoesEl = document.querySelector('#instrucoes-receita');
  const tempoEl = document.querySelector('#tempo-preparo');
  const listaIngredientesEl = document.querySelector('#lista-ingredientes');
  const porcoesE1 = document.querySelector('#numero-porcoes');
  const btnEsquerda = document.querySelector('.Next_Recipe_Arrow.left');
  const btnDireita = document.querySelector('.Next_Recipe_Arrow.right');

  function exibirReceita(index) {
    const receita = receitas[index];

    tituloEl.textContent = receita.titulo;
    instrucoesEl.textContent = receita.instrucoes;
    tempoEl.textContent = `${receita.tempoPreparo} min`;
    porcoesE1.textContent = `${receita.porcoes} porções`;

    listaIngredientesEl.innerHTML = '';
    receita.ingredientes.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      listaIngredientesEl.appendChild(li);
    });
  }

  btnEsquerda.addEventListener('click', () => {
    if (indexAtual > 0) {
      indexAtual--;
      exibirReceita(indexAtual);
    }
  });

  btnDireita.addEventListener('click', () => {
    if (indexAtual < receitas.length - 1) {
      indexAtual++;
      exibirReceita(indexAtual);
    }
  });

  exibirReceita(indexAtual);
});
