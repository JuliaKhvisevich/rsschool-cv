// Adaptive menu
const onebut = document.querySelector('.toggle');
const menu = document.querySelector('.nav');
const menuList = document.querySelector('.nav-list');
const menuItems = document.querySelectorAll('.menu-item');

function toggleMenu() {
  onebut.classList.toggle('collapsed');
  menu.classList.toggle('collapsed');
  menuList.classList.toggle('collapsed');
}
onebut.addEventListener('click', toggleMenu);

function closeMenu() {
  setTimeout(() => {
    onebut.classList.remove('collapsed');
    menu.classList.remove('collapsed');
    menuList.classList.remove('collapsed');
  }, 1000);  
}
menuItems.forEach(el => el.addEventListener('click', closeMenu));