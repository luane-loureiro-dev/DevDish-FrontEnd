document.addEventListener('DOMContentLoaded', () => {
  const receitasJSON = sessionStorage.getItem('receitas');
  if (!receitasJSON) return;

  const data = JSON.parse(receitasJSON);
  const receitas = data.itens || [];

  if (receitas.length === 0) return;

  let indexAtual = 0;

  const tituloEl = document.querySelector('#Recipe_Title');
  const instrucoesEl = document.querySelector('#Recipe_Instructions');
  const tempoEl = document.querySelector('#Recipe_Preparation_Time');
  const listaIngredientesEl = document.querySelector('#Ingredients_List');
  const porcoesEl = document.querySelector('#Recipe_Portion');
  const imagemEl = document.querySelector('#Recipe_Image');
  const btnEsquerda = document.querySelector('.Recipe_Next_Arrow.left');
  const btnDireita = document.querySelector('.Recipe_Next_Arrow.right');
  const contadorEl = document.querySelector('#Recipe_Counter_Page');

  // Palavras-chave e imagens associadas
  const palavrasChave = {
    'bolo': 'src/img/img_receita/bolo.svg',
    'pizza': 'src/img/img_receita/pizza.svg',
    'salada': 'src/img/img_receita/salada.svg',
    'panqueca': 'src/img/img_receita/panqueca.svg',
    'pao': 'src/img/img_receita/pao.svg',
    'sopa': 'src/img/img_receita/sopa.svg',
    'ensopado': 'src/img/img_receita/sopa.svg',
    'pure': 'src/img/img_receita/pure.svg',
    'torta': 'src/img/img_receita/torta.svg',
    'suco': 'src/img/img_receita/suco.svg',
    'vitamina': 'src/img/img_receita/suco.svg',
    'Smoothie': 'src/img/img_receita/suco.svg',
    'quiche': 'src/img/img_receita/quiche.svg',
    'bolinho': 'src/img/img_receita/bolinho.svg',
    'biscoito': 'src/img/img_receita/biscoito.svg',
    'mousse': 'src/img/img_receita/musse.svg',	
    'pudim': 'src/img/img_receita/pudim.svg',
    'sorvete': 'src/img/img_receita/sorvete.svg',

  };

  // Função para remover acentos
  function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function atualizarContador() {
    if (contadorEl) {
      contadorEl.textContent = `${indexAtual + 1} / ${receitas.length}`;
    }
  }

  function verificarImagem(receita) {
    const titulo = removerAcentos(receita.titulo.toLowerCase());
    for (const palavra in palavrasChave) {
      const palavraSemAcento = removerAcentos(palavra);
      if (titulo.includes(palavraSemAcento)) {
        return palavrasChave[palavra];
      }
    }
    return '/src/img/img_Receita.svg'; // Caminho da imagem padrão
  }

  function exibirReceita(index) {
    const receita = receitas[index];

    tituloEl.textContent = receita.titulo;
    instrucoesEl.textContent = receita.instrucoes;
    tempoEl.textContent = `${receita.tempoPreparo} min`;
    porcoesEl.textContent = `${receita.porcoes} porções`;

    listaIngredientesEl.innerHTML = '';
    receita.ingredientes.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      listaIngredientesEl.appendChild(li);
    });

    imagemEl.src = verificarImagem(receita); // Altera a imagem com base no título
    atualizarContador();
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
