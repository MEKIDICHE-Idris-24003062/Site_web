// Fonction pour changer le fichier CSS
function changeTheme(theme) {
    const link = document.getElementById('lientheme');
    link.href = theme;

    // Sauvegarder le thème sélectionné dans le stockage local
    localStorage.setItem('selected-theme', theme);

    // Masquer le menu après sélection
    document.getElementById('theme-menu').style.display = 'none';
}

// Fonction pour changer le thème (mode sombre / mode clair)
function toggleMode() {
    const link = document.getElementById('lientheme'); // Le lien qui contient le fichier CSS
    const currentTheme = link.getAttribute('href');
    
    if (currentTheme === 'css/index.css') { // Mode sombre
        link.setAttribute('href', 'css/sombre.css');
        document.getElementById('toggle-mode').textContent = 'Mode Clair';
        localStorage.setItem('theme', 'sombre');
    } else { // Mode clair
        link.setAttribute('href', 'css/index.css');
        document.getElementById('toggle-mode').textContent = 'Mode Sombre';
        localStorage.setItem('theme', 'clair');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Vérifier la préférence de thème dans localStorage
    const savedTheme = localStorage.getItem('theme');
    const link = document.getElementById('lientheme');
    const button = document.getElementById('toggle-mode');
    
    if (savedTheme === 'sombre') {
        link.setAttribute('href', 'css/sombre.css');
        button.textContent = 'Mode Clair';
    } else {
        link.setAttribute('href', 'css/index.css');
        button.textContent = 'Mode Sombre';
    }

    // Initialiser selon les préférences système (optionnel)
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (!savedTheme && prefersDarkScheme) {
        link.setAttribute('href', 'css/sombre.css');
        button.textContent = 'Mode Clair';
    }

    // Bouton pour le menu déroulant
    const boutonMenu = document.getElementById('boutonmenu');
    const liensMenu = document.getElementById('liens-menu');
    if (boutonMenu && liensMenu) {
        boutonMenu.addEventListener('click', () => {
            liensMenu.classList.toggle('actif'); // Ajoute/retire la classe 'actif'
        });
    }

    // Bouton pour remonter en haut de la page avec un défilement fluide
    const hautpage = document.querySelector('.hautpage');
    if (hautpage) {
        hautpage.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Défilement fluide natif
            });
        });
    }
});
