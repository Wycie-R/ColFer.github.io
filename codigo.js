addEventListener("scroll", ()=>{
    let nav = document.querySelector(".nav");
    nav.classList.toggle("nav-backg", window.scrollY > 100);
});

// Codigo para la seccion de preguntas frecuentes 
const bloques = document.querySelectorAll(".bloque");
const preguntas = document.querySelectorAll(".bloque_pregunta");
const boton = document.querySelectorAll(".bloque_flecha");

preguntas.forEach((cadah2, i)=>{
    bloques[i].addEventListener("click", ()=>{
        if(bloques[i].classList.contains("activo")){
            bloques[i].classList.remove("activo");
        } else {
            bloques.forEach((cadabloque, i)=>{
                bloques[i].classList.remove("activo");
            });

            bloques[i].classList.add("activo");
        }
    })
});


// codigo para "contactanos"

const cortina = document.querySelector(".form_cortina");
const form = document.querySelector(".form_container")
const contactanos = document.querySelector(".nav-contacto");
const salir = document.querySelector(".form_salir")

contactanos.addEventListener("click", ()=>{
    cortina.classList.add("trueCortina");
    form.classList.add("trueForm");
});

salir.addEventListener("click", ()=>{
    cortina.classList.toggle("trueCortina");
    form.classList.toggle("trueForm");
})

