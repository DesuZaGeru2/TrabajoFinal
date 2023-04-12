
/* ------------------------------------BANNER CURSOS------------------------------------ */
const contenedor = document.getElementById("bannercursos")

const btnInformatica = document.getElementById("informatica")
const btnAdministracion = document.getElementById("administracion")
const btnHumanidades = document.getElementById("humanidades")
const btnIdiomas = document.getElementById("idiomas")


/* ---------------------------------Categoria por defecto-------------------------------- */
fetch("./js/cursos.json")
    .then(response => response.json())
    .then(data => {
            for(const curso of data){
                if(curso.categoria == "informatica"){
                contenedor.innerHTML +=  `
                <div class="cursos"> 
                    <figure>
                      <img src="${curso.img}" alt="${curso.alt}">
                    </figure>
                    <div class="contenido">
                      <h4>${curso.nombre}</h4>
                     <p>${curso.descripcion}</p>
                     <a href="#">Ver más...</a>
                    </div>
                  </div>
                `
                }
            }
    })




/* ----------------------------- Seleccion de categorías----------------------------- */
const mostrarCursos = (btn) =>{
    fetch("./js/cursos.json")
    .then(response => response.json())
    .then(data => {
            contenedor.innerHTML=""
            for(const curso of data){
                if(curso.categoria == btn){
                contenedor.innerHTML +=  `
                <div class="cursos"> 
                    <figure>
                      <img src="${curso.img}" alt="${curso.alt}">
                    </figure>
                    <div class="contenido">
                      <h4>${curso.nombre}</h4>
                     <p>${curso.descripcion}</p>
                     <a href="#">Ver más...</a>
                    </div>
                  </div>
                `
                }
            }
        
        
    })
}
let btn = ""
btnInformatica.addEventListener("click", () =>{
    btn = "informatica"
    mostrarCursos(btn)
})
btnAdministracion.addEventListener("click", () =>{
    btn = "administracion"
    mostrarCursos(btn)
})
btnHumanidades.addEventListener("click", () =>{
    btn = "humanidades"
    mostrarCursos(btn)
})
btnIdiomas.addEventListener("click", () =>{
    btn = "idiomas"
    mostrarCursos(btn)
})

/* ----------------------------- Vision banner ----------------------------- */

let parallax = document.querySelector('.parax');
let textovision = document.querySelector('.visor');

function scrollparallax() {
  window.onresize = function() {
    if (window.innerWidth >= 1100) parax.classList.add('parallax'); /* agrega la clase parallax  */
    else homeIcon.classList.remove('parallax');
  }
  
  window.onresize = function() {
    if (window.innerWidth >= 1100) visor.classList.add('efectovisor'); /* agrega la clase efectovisor */
    else homeIcon.classList.remove('efectovisor');
  }

  let scrollTop = document.documentElement.scrollTop; /* toma la cantidad de scroll que se hizo */
  parallax.style.transform ='translateY(' + scrollTop * -0.09+ 'px)'; /* mueve el elemento */
  textovision.style.transform ='translateY(' + scrollTop * +0.06 + 'px)';
}

window.addEventListener("scroll",scrollparallax);