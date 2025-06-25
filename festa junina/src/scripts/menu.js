const iconMenu = document.querySelector('.icon-menu');
const menuLateral = document.getElementById('menu-lateral');
const overlay = document.getElementById('overlay');

iconMenu.addEventListener('click', () => {
    menuLateral.classList.add('ativo');
    overlay.classList.add('ativo');
});

overlay.addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
    overlay.classList.remove('ativo');
});
