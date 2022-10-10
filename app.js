console.log('hi!')
const menuList = document.getElementsByClassName('menu-list')[0];
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');

openMenu.onclick = function() {
    menuList.style.display = 'block';
}
closeMenu.onclick = function() {
    menuList.style.display = 'none';
}

