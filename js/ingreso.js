let usuarioRegistrado = "Ramiro";
let passRegistrado = "1414";

function validar(){

    let nombre = document.getElementById("nombreUsuario");
    let pass = document.getElementById("passUsuario");

    console.log("El nombre del usuario es:" , nombre.value);
    console.log("Y la pass es:" , pass.value);


    if( nombre.value == usuarioRegistrado  &&  pass.value == passRegistrado){
        Toastify({
            text: "Bienvenido ya puede simular su prestamo",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            }).showToast();
    solicitarPrestamo.removeAttribute("hidden")

    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Error al ingresar',
            text: 'Por favor vuelva a escribir el usuario y la contraseña',
        })
    }

}