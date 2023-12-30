const fade = document.querySelector('#fade');
const navigation = document.querySelector(' #navigation');
const menuOpen = document.querySelector(' #iconMenu');
// const menuClose = document.querySelector(' #closeMenu');

// hide menu when the page is download
navigation.classList.add('activeMenu')
fade.classList.add('activeMenu')

//close and open menu-mobile when click at button
function toggleMenu() {
  navigation.classList.toggle('activeMenu');
  fade.classList.toggle('activeMenu');
  menuOpen.style.display = navigation.classList.contains('activeMenu') ? 'flex' :'none' ;
}

//events the button
// menuClose.addEventListener('click', toggleMenu);
menuOpen.addEventListener('click', toggleMenu);
fade.addEventListener('click',toggleMenu)