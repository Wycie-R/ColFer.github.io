const botonmenu = document.querySelector(".nav-boton");
const menu = document.querySelector(".nav_menu");
const nav = document.querySelector(".nav");
const cortina = document.querySelector(".nav_menuCortina ");

botonmenu.addEventListener("click", ()=> {
    menu.classList.toggle("despliegue");
    cortina.classList.toggle("CortinaActive");
    if (window.scrollY < 100) {
        nav.classList.toggle("nav-backg");  
    }
});

addEventListener("scroll", ()=> {
    menu.classList.remove("despliegue");
    cortina.classList.remove("CortinaActive");
});

cortina.addEventListener("click", ()=> {
    menu.classList.remove("despliegue");
    cortina.classList.remove("CortinaActive");
    if (window.scrollY < 100) {
        nav.classList.remove("nav-backg");  
    }
});
