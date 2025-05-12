document.addEventListener('DOMContentLoaded', () => {
    const clickSound = new Audio('/src/sounds/click.mp3'); // Caminho para o arquivo de som
    clickSound.volume = 0.3; // Ajuste o volume conforme necessário
  
    const toggleMap = [
      { buttonId: 'Btn_Toggle_Photo', formId: 'Form_Photo' },
      { buttonId: 'Btn_Toggle_Text', formId: 'Form_Text' }
    ];
  
    toggleMap.forEach(({ buttonId, formId }, index, array) => {
      const button = document.getElementById(buttonId);
      const form = document.getElementById(formId);
  
      if (button && form) {
        button.addEventListener('click', () => {
          clickSound.currentTime = 0;
          clickSound.play();
  
          const isActive = form.classList.contains('active');
  
          // Esconde todos os formulários
          array.forEach(({ formId: otherFormId }) => {
            const otherForm = document.getElementById(otherFormId);
            if (otherForm) otherForm.classList.remove('active');
          });
  
          if (!isActive) {
            form.classList.add('active');
          }
        });
      } else {
        console.warn(`Elemento ${buttonId} ou ${formId} não encontrado.`);
      }
    });
  });
  