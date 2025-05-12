document.addEventListener('DOMContentLoaded', () => {
  const clickSound = new Audio('/src/sounds/click.mp3');
  clickSound.volume = 0.3;

  const toggleMap = [
    { buttonId: 'Btn_Toggle_Photo', formId: 'Form_Photo' },
    { buttonId: 'Btn_Toggle_Text', formId: 'Form_Text' }
  ];

  toggleMap.forEach(({ buttonId, formId }) => {
    const button = document.getElementById(buttonId);
    const form = document.getElementById(formId);

    if (button && form) {
      button.addEventListener('click', (event) => {
        event.preventDefault(); // evita comportamento padrão do botão
        clickSound.currentTime = 0;
        clickSound.play();

        const isActive = form.classList.contains('active');

        // Fecha apenas os outros formulários (não o atual)
        toggleMap.forEach(({ formId: otherFormId }) => {
          const otherForm = document.getElementById(otherFormId);
          if (otherForm && otherForm !== form) {
            otherForm.classList.remove('active');
          }
        });

        // Alterna o formulário atual
        if (!isActive) {
          form.classList.add('active');
        } else {
          form.classList.remove('active');
        }
      });
    } else {
      console.warn(`Elemento ${buttonId} ou ${formId} não encontrado.`);
    }
  });
});
  