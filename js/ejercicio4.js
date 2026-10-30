// EJERCICIO 4: función con nombre con el evento submit.

let formularioDividir = document.getElementById("formularioDividir");

// Asociamos la función dividir al envío del formulario.
formularioDividir.addEventListener("submit", dividir);

function dividir(event) {

    event.preventDefault();

    // parseFloat() admite decimales (a diferencia de parseInt(), que los recorta).
    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);

    // required no puede saber si el divisor es cero: lo revisamos con if.
    if (numero2 === 0) {
        alert("No es posible dividir entre cero.");
        return;

    } else if (isNaN(numero1) || isNaN(numero2)) {
        alert("Escribe los dos números.");
        return;

    } else {
        alert(`División: ${numero1 / numero2}`);
    }
}