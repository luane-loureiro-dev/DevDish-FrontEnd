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




