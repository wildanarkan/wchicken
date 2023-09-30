// Toggle active
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#chicken-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const chicken = document.querySelector('#chicken-menu');

document.addEventListener('click', function(e){
    if(!chicken.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})