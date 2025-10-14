document.addEventListener('DOMContentLoaded', () => {
// Bouton pour le menu déroulant
    const boutonMenu = document.getElementById('boutonmenu');
    const liensMenu = document.getElementById('liens-menu');

    if (boutonMenu && liensMenu) {
        const navigation = boutonMenu.closest('.menu');
        const breakpoint = window.matchMedia('(max-width: 768px)');

        const closeMenu = () => {
            liensMenu.classList.remove('actif');
            boutonMenu.setAttribute('aria-expanded', 'false');
        };

        const openMenu = () => {
            liensMenu.classList.add('actif');
            boutonMenu.setAttribute('aria-expanded', 'true');
        };

        const toggleMenu = () => {
            if (liensMenu.classList.contains('actif')) {
                closeMenu();
            } else {
                openMenu();
            }
        };

        const syncMenuWithViewport = () => {
            closeMenu();
        };

        boutonMenu.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleMenu();
        });

        liensMenu.addEventListener('click', (event) => {
            event.stopPropagation();
            const target = event.target instanceof Element ? event.target.closest('a') : null;
            if (target) {
                closeMenu();
            }
        });

        document.addEventListener('click', (event) => {
            const target = event.target instanceof Node ? event.target : null;
            if (navigation && target && navigation.contains(target)) {
                return;
            }
            closeMenu();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeMenu();
                boutonMenu.focus();
            }
        });

        if (typeof breakpoint.addEventListener === 'function') {
            breakpoint.addEventListener('change', syncMenuWithViewport);
        } else if (typeof breakpoint.addListener === 'function') {
            breakpoint.addListener(syncMenuWithViewport);
        }

        syncMenuWithViewport();
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

// se qui permet de charger la page en entier avant de l'afficher
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.display = "none";
    }
});

