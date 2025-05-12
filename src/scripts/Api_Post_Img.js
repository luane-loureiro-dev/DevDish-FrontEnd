console.log('Script Api_Post_Img.js carregado');

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('Form_Photo');
  const uploadInput = document.getElementById('Upload_Photo');
  const sendBtn = document.getElementById('Send_Photo');
  const loadingEl = document.getElementById('loading'); 
  const label = document.querySelector('label[for="Upload_Photo"]'); 

  if (!form || !uploadInput || !sendBtn || !label) {
    console.warn('Elemento Form_Photo, Upload_Photo, Send_Photo ou label não encontrado.');
    return;
  }

  uploadInput.addEventListener('change', () => {
    const file = uploadInput.files[0];
    if (file) {
      label.textContent = file.name.length > 30 
        ? file.name.slice(0, 27) + '...'
        : file.name;
    }
  });

  sendBtn.addEventListener('click', async () => {
    const file = uploadInput.files[0];
    if (!file) {
      alert('Por favor, selecione uma imagem antes de enviar.');
      return;
    }

    // Mostra o loading
    if (loadingEl) loadingEl.style.display = 'flex';

    const formData = new FormData();
    formData.append('image', file); 

    try {
      const response = await fetch('https://localhost:5121/api/receitas/gerar/imagem?pagina=1&size=3', {
        method: 'POST',
        body: formData
      });

      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        const receitas = await response.json();
        console.log('Receitas recebidas:', receitas);

        sessionStorage.setItem('receitas', JSON.stringify(receitas));
        form.classList.remove('active');
        window.location.href = 'ExibirReceitas.html';
      } else {
        const texto = await response.text();
        console.warn('Resposta não JSON:', texto);
        alert('A resposta não está no formato esperado.');
      }
    } catch (error) {
      console.error('Erro ao enviar imagem:', error);
      alert('Erro ao gerar receitas. Veja o console.');
    } finally {
      // Esconde o loading
      if (loadingEl) loadingEl.style.display = 'none';
    }
  });
});
