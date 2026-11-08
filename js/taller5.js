// TALLER #5: Calculadora con selector.

let formulario = document.getElementById("formTaller5");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", calcular);

function calcular(event) {
    event.preventDefault();

    
    let textoPrimero = document.getElementById("primero").value;
    let textoSegundo = document.getElementById("segundo").value;
    let operacion = document.getElementById("operacion").value;

    if (textoPrimero === "" || textoSegundo === "") {
        resultado.textContent = "Escribe los dos números.";
        resultado.className = "error";
        return;
    }
        if (operacion === "") {
        resultado.textContent = "Selecciona una operación.";
        resultado.className = "error";
        return;
    }

    
    let a = Number(textoPrimero);
    let b = Number(textoSegundo);

    
    if (operacion === "division" && b === 0) {
        resultado.textContent = "No es posible dividir entre cero.";
        resultado.className = "error";
        return;
    }

 
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
