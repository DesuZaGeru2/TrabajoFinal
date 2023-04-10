/* -------------------------------INGRESO------------------------------------------- */

const formularioIngreso = document.getElementById("formularioIngreso")
let userActive = false
let userName = ""

formularioIngreso.addEventListener("submit", (event) =>{
    event.preventDefault()
   
    fetch("./js/usuarios.json")
        .then(response => response.json())
        .then(data => {
            
            for (const usuario of data){
                /* verifica que el usuario y la contraseña concuerden con alguno registrado en el json */
                if(usuario.email == formularioIngreso.emailIngreso.value
                && usuario.contrasenia == formularioIngreso.contraseniaIngreso.value){
                    userName = usuario.nombre 
                    userActive = true
                }
            }
            if (userActive){
                Toastify({
                    text: "Bienvenido de nuevo " + userName + "!",
                    duration: 3000
                    }).showToast();
                    formularioIngreso.reset()
                    setTimeout(()=>{ /* Con esto redirigimos al usuario al index en 3 segundos, para darle 
                    tiempo de aparición a la tostada */
                        window.location.href = 'index.html';
                    },3000)
            }else{
                Swal.fire( /* en caso de que no se hayan encontrado coincidencias, se muestra esta alerta */
                    'Algo salió mal',
                    'E-mail o contraseña incorrecta',
                    'error',
                )
                  formularioIngreso.reset()
            }
        })
   
 })
   


