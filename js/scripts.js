//menu toggler

let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

menu.onclick = () => {
    navbar.classList.toggle('active')
}

//darkmode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () =>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
         document.getElementById("profile-image").src = document.getElementById("profile-image").src.replace("_light", "_dark");
         document.body.classList.add('active');
        }else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.getElementById("profile-image").src = document.getElementById("profile-image").src.replace("_dark", "_light");
        document.body.classList.remove('active')
    }
}

