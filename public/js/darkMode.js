document.addEventListener('DOMContentLoaded', function () {
    const darkModeSwitch = document.querySelector('.dark-mode-toggle input[type="checkbox"]');

    // Charger et appliquer le mode sombre à partir de localStorage
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkModeSwitch.checked = true;
    }

    darkModeSwitch.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true'); // Enregistrer le choix dans localStorage
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false'); // Enregistrer le choix dans localStorage
        }
    });
});