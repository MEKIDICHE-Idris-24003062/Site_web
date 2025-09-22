document.addEventListener('DOMContentLoaded', () => {
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


