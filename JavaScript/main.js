// Fonction pour changer le fichier CSS
function changeTheme(theme) {
    const link = document.getElementById('theme-link');
    link.href = theme;

    // Sauvegarder le thème sélectionné dans le stockage local
    localStorage.setItem('selected-theme', theme);

    // Masquer le menu après sélection
    document.getElementById('theme-menu').style.display = 'none';
    closeTheme()
}

// Fonction pour afficher/masquer le menu
function toggleMenuById(boutonmenu) {
    const menu = document.getElementById(boutonmenu);
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  // Initialisation des événements
  document.addEventListener('DOMContentLoaded', () => {
    // Bouton pour le menu déroulant
    const boutonMenu = document.getElementById('boutonmenu');
    const liensMenuId = 'liens-menu'; // ID de la div contenant les liens du menu
  
    if (boutonMenu) {
      boutonMenu.addEventListener('click', () => {
        const liensMenu = document.getElementById(liensMenuId);
        liensMenu.classList.toggle('actif'); // Ajoute/retire la classe 'actif'
      });
    } else {
      console.error('Le bouton de menu est introuvable.');
    }
  
    // Bouton pour remonter en haut de la page
    const hautpage = document.querySelector('.hautpage');
    if (hautpage) {
      hautpage.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      });
    } else {
      console.error('Le bouton pour remonter en haut de la page est introuvable.');
    }
  });
  
