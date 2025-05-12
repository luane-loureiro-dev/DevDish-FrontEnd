console.log('Script Api_Post_Img.js carregado');

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('Form_Photo');
  const uploadBtn = document.getElementById('uploadBtn');
  const uploadInput = document.getElementById('Upload_Photo');

  if (!form || !uploadInput) {
    console.warn('Elemento Form_Photo ou Upload_Photo não encontrado.');
    return;
  }

  uploadBtn.addEventListener('click', () => {
    uploadInput.click();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const file = uploadInput.files[0];

    if (!file) {
      alert('Por favor, selecione uma imagem antes de enviar.');
      return;
    }
<<<<<<< HEAD
=======
  
    uploadInput.addEventListener('change', async function(event) {
      const file = event.target.files[0];
      if (!file) return;
  
      const formData = new FormData();
      formData.append('image', file);
  
      try {
        // Envia a imagem para a API
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
  
        // Envia os ingredientes para gerar a receita
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
  
        // Exibe os dados no console
        console.log('Título:', receita.titulo);
        console.log('Ingredientes:', receita.ingredientes);
        console.log('Instruções:', receita.instrucoes);
        console.log('Tempo de Preparo:', receita.tempoPreparo);
>>>>>>> 0d274d33681cd0e706d960c0c0a3bcff7a5b5fa1

    const formData = new FormData();
    formData.append('imagem', file);

    try {
      const response = await fetch('https://localhost:5121/gerar-receita-por-imagem', {
        method: 'POST',
        body: formData
      });

      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        const receita = await response.json();
        console.log('Receita recebida:', receita);
        sessionStorage.setItem('receita', JSON.stringify(receita));
        window.location.href = 'ExibirReceita.html';
      } else {
        const texto = await response.text();
        console.warn('Resposta não JSON:', texto);
        alert('A resposta não está no formato esperado.');
      }
    } catch (error) {
      console.error('Erro ao enviar imagem:', error);
      alert('Erro ao gerar receita. Veja o console.');
    }
  });
});
