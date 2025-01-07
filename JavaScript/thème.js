// Sélectionne le bouton et le body
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

// Vérifie si le mode sombre est activé dans le stockage local
const darkMode = localStorage.getItem('sombre');

if (darkMode === 'enabled') {
  body.classList.add('sombre');
  toggleButton.textContent = 'Mode Jour';
}

// Ajoute un événement de clic pour basculer entre les modes
toggleButton.addEventListener('click', () => {
  if (body.classList.contains('sombre')) {
    body.classList.remove('sombre');
    toggleButton.textContent = 'Mode Sombre';
    localStorage.setItem('sombre', 'disabled'); // Enregistre l'état dans LocalStorage
  } else {
    body.classList.add('sombre');
    toggleButton.textContent = 'Mode Jour';
    localStorage.setItem('sombre', 'enabled'); // Enregistre l'état dans LocalStorage
  }
});
