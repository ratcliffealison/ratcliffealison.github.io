let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

menu.onclick = () => {
    navbar.classList.toggle('active')
}