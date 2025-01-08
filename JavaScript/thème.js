function changeTheme() {
    const link = document.getElementById('theme');
    const currentTheme = link.href.includes('sombre.css') ? 'sombre.css' : 'index.css';
    const newTheme = currentTheme === 'sombre.css' ? 'index.css' : 'sombre.css';

    // Vérifier si on est sur index.html ou une autre page
    if (window.location.pathname.endsWith("index.html")) {
        // Comportement pour index.html
        link.href = `css/${newTheme}`;
        localStorage.setItem('selected-theme', newTheme);
    } else {
        // Comportement pour les autres pages dans HTML/
        link.href = `../css/${newTheme}`;
        localStorage.setItem('selected-theme', newTheme);
        console.log(newTheme)
    }
}
