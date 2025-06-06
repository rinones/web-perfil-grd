document.addEventListener('DOMContentLoaded', () => {
    const navHamburguer = document.querySelector('#navHamburguer');
    if (navHamburguer) {
        navHamburguer.addEventListener('click', (e) => {
            navHamburguer.parentElement.classList.toggle('active');
        });
    }
});