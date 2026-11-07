// TALLER 2: Clasificar una nota.

let formulario = document.getElementById("formTaller2");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", clasificarNota);

function clasificarNota(event) {
    event.preventDefault();

    // Leemos lo que escribió el usuario
    let texto = document.getElementById("nota").value;

    // Si el campo está vacío
    if (texto === "") {
        resultado.textContent = "Escribe la nota.";
        resultado.className = "error";
        return;
    }

    // Convertimos el texto a número
    let nota = Number(texto);

    // Si la nota no está entre 0 y 5
    if (nota < 0 || nota > 5) {
        resultado.textContent = "La nota debe estar entre 0.0 y 5.0.";
        resultado.className = "error";
        return;
    }

    // Clasificamos la nota
    if (nota >= 4.5) {
        resultado.textContent = "Nota " + nota + ": Excelente. Aprobado.";
    } else if (nota >= 4.0) {
        resultado.textContent = "Nota " + nota + ": Bueno. Aprobado.";
    } else if (nota >= 3.0) {
        resultado.textContent = "Nota " + nota + ": Aceptable. Aprobado.";
    } else {
        resultado.textContent = "Nota " + nota + ": Insuficiente. No aprobado.";
    }
    resultado.className = "exito";
}