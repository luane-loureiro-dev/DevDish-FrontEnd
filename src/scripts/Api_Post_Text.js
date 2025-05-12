document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('Form_Text');
  const uploadInput = document.getElementById('Upload_Text'); 
  const sendBtn = document.getElementById('Send_Text');

  if (!form || !uploadInput || !sendBtn) {
    console.warn('Elemento Form_Text, Upload_text ou Send_Text não encontrado.');
    return;
  }

  sendBtn.addEventListener('click', async () => {
    const ingredientesTexto = uploadInput.value.trim();
    if (!ingredientesTexto) {
      alert('Por favor, digite os ingredientes antes de enviar.');
      return;
    }

    try {
      const response = await fetch('https://localhost:5121/api/receitas/gerar/texto?pagina=1&tamanhoPagina=10', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ingredientes: ingredientesTexto }) // Conforme esperado pela API
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
      console.error('Erro ao gerar receitas por texto:', error);
      alert('Erro ao gerar receitas. Veja o console.');
    }
  });
});
