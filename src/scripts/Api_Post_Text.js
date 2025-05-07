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
        const responseImg = await fetch('http://localhost:5120/gerar-receita-por-imagem', {
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
  
        const responseReceita = await fetch('https://localhost:7273/gerar-receita-por-texto', {
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




