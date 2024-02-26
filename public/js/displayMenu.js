document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menuListe = document.querySelector('.menu-liste');

    let isActive = false;

    hamburger.addEventListener('click', (event) => {
        if (isActive) {
            console.log('actif');
            menuListe.classList.remove("active");
            hamburger.classList.remove("active");
        } else {
            console.log('inactif');
            menuListe.classList.add('active');
            hamburger.classList.add("active");
        }
        isActive = !isActive;
        console.log(isActive);
    });
});
