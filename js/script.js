/* ------------------------------------BANNER CURSOS------------------------------------ */
const DBCursos_ROUTE = "./js/cursos.json"
const contenedor = document.getElementById("bannercursos")
const cursos = []

const btnInformatica = document.getElementById("informatica")
const btnAdministracion = document.getElementById("administracion")
const btnHumanidades = document.getElementById("humanidades")
const btnIdiomas = document.getElementById("idiomas")

/* ------------------------------ SELECTOR CATEGORIAS -------------------------------- */
const mostrarCursos = (btn) => {
  contenedor.innerHTML = ""
  for (const curso of cursos) {
    if (curso.categoria == btn) {
      contenedor.innerHTML += `
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
}

fetch(DBCursos_ROUTE)
  .then(response => response.json())
  .then(data => {
    for (const curso of data) {
      cursos.push(curso)
    }
    mostrarCursos("informatica")
  })

let btn = ""
btnInformatica.addEventListener("click", () =>{
    mostrarCursos("informatica")
})
btnAdministracion.addEventListener("click", () =>{
    mostrarCursos("administracion")
})
btnHumanidades.addEventListener("click", () =>{
    mostrarCursos("humanidades")
})
btnIdiomas.addEventListener("click", () =>{
    mostrarCursos("idiomas")
})


/* --------------------------------- BANNER VISION ---------------------------------- */

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

/* ---------------------------- FORMULARIO DE CONTACTO------------------------------ */

const formularioContacto = document.getElementById("contactForm")
const contacto = []


formularioContacto.addEventListener("submit", (evento) =>{
  evento.preventDefault()
    contacto.push({
      nombre: formularioContacto.nombre.value,
      email: formularioContacto.email.value,
      cuestion: formularioContacto.cuestion.value
    })
    Toastify({
      text: "Mensaje enviado",
      duration: 4000
    }).showToast();
      
    formularioContacto.reset()
})



