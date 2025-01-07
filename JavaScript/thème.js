// changer le 
const toggleButton = document.getElementById('toggle-mode');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    // Basculer la classe "sombre" sur le body
    body.classList.toggle('sombre');

    // Basculer le texte du bouton
    if (body.classList.contains('sombre')) {
        toggleButton.textContent = 'Mode Jour';
    } else {
      toggleButton.textContent = 'Mode Sombre';
    }
  });