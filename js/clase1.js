let usuarioRegistrado = "Ramiro";
let passRegistrado = "1414";



function validar(){

    let nombre = document.getElementById("nombreUsuario");
    let pass = document.getElementById("passUsuario");
    let mensaje = document.getElementById("mensaje");

    console.log("El nombre del usuario es:" , nombre.value);
    console.log("Y la pass es:" , pass.value);


    if( nombre.value == usuarioRegistrado  &&  pass.value == passRegistrado){
    let parrafo = document.createElement("p");
    parrafo.innerText = "Bienvenido/a a nustra pagina!"
    mensaje.append(parrafo);
    mensaje.style.color = "white";

    }
    else{
    document.body.innerHTML = `<h2>ERROR DE USUARIO O CONTRASEÑA</h2>
                                <p>No puede ingresar a nuestra pagina por favor intentelo nuevamente<p>
                                <p>Nombre de usuario incorrecto: ${nombre.value}</p>
                                <p>Contraseña invalida: ${pass.value}</p>`;
    }

}
function saludar(){

    let nombre = document.getElementById("nombre_usuario");

    console.log(nombre);
    console.log("Hola Bienvenido/a al sistema: " , nombre.value);
}