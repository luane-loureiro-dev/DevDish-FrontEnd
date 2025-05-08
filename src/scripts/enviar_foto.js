document.addEventListener('DOMContentLoaded', () => {
  const ingredientsBtn = document.querySelector('.Button_White');
  const ingredientsInputBox = document.getElementById('Busca_Ingredients');

  if (ingredientsBtn && ingredientsInputBox) {
    ingredientsBtn.addEventListener('click', () => {
      ingredientsInputBox.style.display = 'block';
    });
  }

  const uploadBtn = document.getElementById('uploadBtn');
  const uploadInput = document.getElementById('Upload_Foto');

  if (uploadBtn && uploadInput) {
    uploadBtn.addEventListener('click', () => {
      uploadInput.click();
    });

    uploadInput.addEventListener('change', () => {
      const file = uploadInput.files[0];
      if (file) {
        console.log("Imagem selecionada:", file.name);
      }
    });
  }
});

