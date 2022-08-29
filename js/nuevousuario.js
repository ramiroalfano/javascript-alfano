let arregloUsuarios = []


function setData(){

    let dniUsuario = document.getElementById("inputDni");
    let nombreUsuario = document.getElementById("inputNombre");
    let passUsuario = document.getElementById("inputPass");
    let usuario = {"nombre": nombreUsuario.value , "dni": dniUsuario.value,"pass": passUsuario.value, };

    arregloUsuarios.push(usuario);

    let arregloJSON = JSON.stringify(arregloUsuarios);
    localStorage.setItem("usuarios" , arregloJSON);

}
let boton = document.getElementById("btnCrearCliente");
boton.addEventListener("click" , setData )
boton.addEventListener("click" , myfunction)

function myfunction(){
    alert("su usuario ha sido creado con exito, vuelva a la pagina principal y inicie sesion con su nombre y contraseña");
}