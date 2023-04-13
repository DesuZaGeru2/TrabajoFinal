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

let image_parallax = document.querySelector('.parax');
let texto_vision = document.querySelector('.visor');

if (window.innerWidth > 900) {
  document.querySelector('.parax').classList.add('parallax');
  texto_vision.classList.add('textovision');
  function scrollparallax() {
    let scrollTop = document.documentElement.scrollTop;
    image_parallax.style.transform = 'translateY(' + scrollTop * -0.09 + 'px)';
    texto_vision.style.transform = 'translateY(' + scrollTop * 0.06 + 'px)'; 
  }
}

window.addEventListener("resize", () => {window.location.reload()});
window.addEventListener("scroll",scrollparallax);
