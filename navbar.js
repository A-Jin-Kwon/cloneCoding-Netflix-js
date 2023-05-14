/* navbar */
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbarActive');
    }
    else{
        navbar.classList.remove('navbarActive');
    }
})