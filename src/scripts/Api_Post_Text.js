<<<<<<< HEAD
// // Suponha que você tenha um campo de entrada de texto com o ID 'ingredientesInput'
// const input = document.getElementById('ingredientesInput');

// // Adicione um ouvinte de evento ao botão de envio
// document.getElementById('enviarIngredientesBtn').addEventListener('click', () => {
//   // Obtenha o valor do campo de entrada e divida em uma lista de ingredientes
//   const ingredientes = input.value
//     .split(',')
//     .map(item => item.trim())
//     .filter(item => item.length > 0); // Remove entradas vazias

//   // Verifique se a lista de ingredientes não está vazia
//   if (ingredientes.length === 0) {
//     alert('Por favor, insira pelo menos um ingrediente.');
//     return;
//   }

//   // Envie a lista para a API
//   fetch('https://sua-api.com/ingredientes', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ ingredientes })
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Erro ao enviar os ingredientes.');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Resposta da API:', data);
//     // Aqui você pode processar a resposta da API conforme necessário
//   })
//   .catch(error => {
//     console.error('Erro:', error);
//     alert('Ocorreu um erro ao enviar os ingredientes.');
//   });
// });
=======
document.addEventListener('DOMContentLoaded', () => {
    const uploadInput = document.getElementById('Upload_Foto');
  
    if (!uploadInput) {
      console.error('Elemento com ID "Upload_Foto" não encontrado.');
      return;
    }
  
    uploadInput.addEventListener('change', async function(event) {
      const file = event.target.files[0];
      if (!file) return;
  
      const formData = new FormData();
      formData.append('imagem', file); // Certifique-se de que 'imagem' é o nome esperado pela API
  
      try {
        const responseImg = await fetch('http://localhost:5120/api/receita/gerar/imagem', {
          method: 'POST',
          body: formData
        });
  
        if (!responseImg.ok) {
          throw new Error('Erro ao enviar a imagem para a API.');
        }
  
        const data = await responseImg.json();
        console.log('Imagem enviada com sucesso:', data);
  
        const ingredientes = data.ingredientes;
  
        if (!ingredientes || !Array.isArray(ingredientes)) {
          throw new Error('A resposta da IA não contém uma lista válida de ingredientes.');
        }
  
        const responseReceita = await fetch('http://localhost:5120/api/receita/gerar/texto', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ingredientes })
        });
  
        if (!responseReceita.ok) {
          throw new Error('Erro ao gerar a receita com os ingredientes.');
        }
  
        const receita = await responseReceita.json();
  
        console.log('Receita gerada com sucesso:', receita);
        console.log('Título:', receita.titulo);
        console.log('Ingredientes:', receita.ingredientes);
        console.log('Instruções:', receita.instrucoes);
        console.log('Tempo de Preparo:', receita.tempoPreparo);
  
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao processar a imagem ou gerar a receita. Verifique o console.');
      }
    });
  });
>>>>>>> 0d274d33681cd0e706d960c0c0a3bcff7a5b5fa1




