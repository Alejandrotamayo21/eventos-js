// TALLER 5: Calculadora con selector.

let formulario = document.getElementById("formTaller5");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", calcular);

function calcular(event) {
    event.preventDefault();

    // Leemos lo que escribió el usuario
    let textoPrimero = document.getElementById("primero").value;
    let textoSegundo = document.getElementById("segundo").value;
    let operacion = document.getElementById("operacion").value;

    // Si alguno de los dos números está vacío
    if (textoPrimero === "" || textoSegundo === "") {
        resultado.textContent = "Escribe los dos números.";
        resultado.className = "error";
        return;
    }

    // Si no se eligió una operación
    if (operacion === "") {
        resultado.textContent = "Selecciona una operación.";
        resultado.className = "error";
        return;
    }

    // Convertimos los textos a números
    let a = Number(textoPrimero);
    let b = Number(textoSegundo);

    // Si es división y el segundo número es cero
    if (operacion === "division" && b === 0) {
        resultado.textContent = "No es posible dividir entre cero.";
        resultado.className = "error";
        return;
    }

    // Elegimos la operación con switch
    switch (operacion) {
        case "suma":
            resultado.textContent = a + " + " + b + " = " + (a + b);
            break;
        case "resta":
            resultado.textContent = a + " - " + b + " = " + (a - b);
            break;
        case "multiplicacion":
            resultado.textContent = a + " x " + b + " = " + (a * b);
            break;
        case "division":
            resultado.textContent = a + " ÷ " + b + " = " + (a / b);
            break;
    }
    resultado.className = "exito";
}