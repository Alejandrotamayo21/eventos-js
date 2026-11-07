// TALLER 1: Par o impar.

let formulario = document.getElementById("formTaller1");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Leemos lo que escribió el usuario
    let texto = document.getElementById("numero").value;

    // Si el campo está vacío
    if (texto === "") {
        resultado.textContent = "Escribe un número.";
        resultado.className = "error";
        return;
    }

    // Convertimos el texto a número
    let numero = Number(texto);

    // Si tiene decimales (por ejemplo 2.5, al dividir entre 1 sobra algo)
    if (numero % 1 !== 0) {
        resultado.textContent = "Escribe un número entero.";
        resultado.className = "error";
        return;
    }

    // Si es par o impar
    if (numero % 2 === 0) {
        resultado.textContent = "El número es par.";
    } else {
        resultado.textContent = "El número es impar.";
    }
    resultado.className = "exito";
});