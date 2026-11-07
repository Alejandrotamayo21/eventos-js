// TALLER 3: El mayor de tres números.

let formulario = document.getElementById("formTaller3");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Leemos lo que escribió el usuario
    let textoA = document.getElementById("numeroA").value;
    let textoB = document.getElementById("numeroB").value;
    let textoC = document.getElementById("numeroC").value;

    // Si alguno de los tres campos está vacío
    if (textoA === "" || textoB === "" || textoC === "") {
        resultado.textContent = "Completa los tres números.";
        resultado.className = "error";
        return;
    }

    // Convertimos los textos a números
    let a = Number(textoA);
    let b = Number(textoB);
    let c = Number(textoC);

    // Si los tres son iguales
    if (a === b && b === c) {
        resultado.textContent = "Los tres números son iguales.";
    } else if (a >= b && a >= c) {
        resultado.textContent = "El número mayor es " + a + ".";
    } else if (b >= a && b >= c) {
        resultado.textContent = "El número mayor es " + b + ".";
    } else {
        resultado.textContent = "El número mayor es " + c + ".";
    }
    resultado.className = "exito";
});