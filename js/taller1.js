// TALLER 1: Par o impar.

let formulario = document.getElementById("formTaller1");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();


    let texto = document.getElementById("numero").value;

  
    if (texto === "") {
        resultado.textContent = "Escribe un número.";
        resultado.className = "error";
        return;
    }

 
    let numero = Number(texto);


    if (numero % 1 !== 0) {
        resultado.textContent = "Escribe un número entero.";
        resultado.className = "error";
        return;
    }

 
    if (numero % 2 === 0) {
        resultado.textContent = "El número es par.";
    } else {
        resultado.textContent = "El número es impar.";
    }
    resultado.className = "exito";
});
