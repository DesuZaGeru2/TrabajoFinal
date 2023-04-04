/* -------------------------------INGRESO------------------------------------------- */

const formularioIngreso = document.getElementById("formularioIngreso")
const user = []
const saludarUsuario = () =>{
    ingresoSaludo.innerHTML = `
    Bienvenido ${user[0].email}
    `
}


formularioIngreso.addEventListener("submit", (event) =>{
    event.preventDefault()
    user.push({
        
        email: formularioIngreso.emailIngreso.value
        /* contrasenia: formularioIngreso.contraseniaIngreso.value */
        
    })
    
    

    /* for (const usuario of usuarios){
        if(formularioIngreso.emailIngreso == usuario.email && formularioIngreso.contraseniaIngreso == usuario.contrasenia){
            alert("Se ha logueado con exito!")
        }else{
            alert("Usuario no registrado")
        }
    } */
    formularioIngreso.reset()

    saludarUsuario()

})