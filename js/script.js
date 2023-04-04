/* -------------------------  REGISTRO ------------------------------------------ */
const URL_API = "https://restcountries.com/v3.1/all/" //API de paises para selector

    const paisSelect = document.getElementById("selectorPais");
    
    fetch(URL_API)
    .then(response => response.json())
    .then(data => {
        const paises = data.map(pais => pais.name.common); // creamos un array con los nombres comunes de los países
        paises.sort(); // ordenamos los nombres alfabéticamente
        for(const pais of paises){ //bucle for para mostrar los elementos del array 
            paisSelect.innerHTML +=`
            <option value="${pais}">${pais}</option>
            `
        }
    });

const usuarios = []
const formularioRegistro = document.getElementById("formulario-registro");

const millisecsInYear = 1000 * 60 * 60 * 24 * 365.25 //cantidad de milisegundos en un año
let edadUsuario = 0;
const hoy = new Date() //fecha actual

formularioRegistro.addEventListener("submit", (event) => {
    event.preventDefault()

    /* Se hace la diferencia en milisegundos de la fecha actual y la fecha de nacimiento, 
    luego se divide por los milisegundos que hay en un año para obtener la edad. Math.floor redondea el nro */
    edadUsuario = Math.floor((hoy - new Date(formularioRegistro.fechaNac.value)) / millisecsInYear)
    
    if(edadUsuario < 18) {
        alert("El usuario es menor de edad")
    }else{
        usuarios.push({
            nombre: formularioRegistro.nombre.value,
            apellido: formularioRegistro.apellido.value,
            email: formularioRegistro.email.value,
            contrasenia: formularioRegistro.contrasenia.value,
            fechaNac: formularioRegistro.fechaNac.value,
            pais: formularioRegistro.selectorPais.value
        })
    }
    
    alert("¡Te has registrado con éxito!")
    formularioRegistro.reset()
})

/*     ---------------------------------------------------------------------------- */

