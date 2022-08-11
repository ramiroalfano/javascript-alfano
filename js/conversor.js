const monedaUno = document.getElementById('moneda-uno');
const monedaDos = document.getElementById('moneda-dos');
const cantidadUno = document.getElementById('cantidad-uno');
const cantidadDos = document.getElementById('cantidad-dos');
const cambio = document.getElementById('cambio');

function calcular(){
    const monedaOne = monedaUno.value;
    const monedaTwo = monedaDos.value;

fetch(`https://api.exchangerate-api.com/v4/latest/${monedaOne}`)
.then(res => res.json() )
.then(data => {
    const taza = data.rates[monedaTwo];
    
    cambio.innerText = `1 ${monedaOne} = ${taza} ${monedaTwo}`;

       cantidadDos.value = (cantidadUno.value * taza).toFixed(2);
    } );
    
}
monedaUno.addEventListener('change', calcular);
cantidadUno.addEventListener('input', calcular);
monedaDos.addEventListener('change', calcular);
cantidadDos.addEventListener('input', calcular);

calcular();