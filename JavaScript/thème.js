// Récupérer les éléments HTML
const link = document.querySelectorAll('link[href*=".css"]');
const button = document.getElementById('theme-btn');

// Définir les chemins des fichiers CSS
const lightTheme = 'CSS/index.css';
const darkTheme = 'CSS/sombre.css';

// Vérifier si la page actuelle est index.html
const isIndexHtml = window.location.pathname.endsWith('index.html');

// Vérifier le thème actuel
let currentTheme = link[0].href;

// Ajouter un écouteur d'événement sur le bouton
button.addEventListener('click', () => {
  // Alterner entre les thèmes
  if (currentTheme === lightTheme) {
    for (let i = 0; i < link.length; i++) {
      if (isIndexHtml) {
        link[i].href = link[i].href.replace(lightTheme, darkTheme);
      } else {
        link[i].href = link[i].href.replace(lightTheme, '../' + darkTheme);
      }
    }
    currentTheme = darkTheme;
  } else {
    for (let i = 0; i < link.length; i++) {
      if (isIndexHtml) {
        link[i].href = link[i].href.replace(darkTheme, lightTheme);
      } else {
        link[i].href = link[i].href.replace(darkTheme, '../' + lightTheme);
      }
    }
    currentTheme = lightTheme;
  }
});
