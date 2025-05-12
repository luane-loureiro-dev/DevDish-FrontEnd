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
