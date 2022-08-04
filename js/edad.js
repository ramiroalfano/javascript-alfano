const edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));

let permiso = (edadDelUsuario >= 18) ? true : false

permiso ? logearse.removeAttribute("hidden") : alert("No puede solicitar su prestamo");

let edadUsuario = []