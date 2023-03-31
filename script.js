/* -------------------------  REGISTRO ------------------------------------------ */
const URL_API = "https://restcountries.com/v3.1/all/" //API de paises

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

/*     ---------------------------------------------------------------------------- */


