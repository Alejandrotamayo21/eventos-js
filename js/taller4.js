// TALLER 4: Formulario de registro.

let formulario = document.getElementById("formTaller4");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", validarRegistro);

function validarRegistro(event) {
    event.preventDefault();

    // Leemos lo que escribió el usuario
    let nombre = document.getElementById("nombre").value.trim();
    let textoEdad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;
    let confirmar = document.getElementById("confirmar").value;

    // Si el nombre está vacío
    if (nombre === "") {
        resultado.textContent = "Escribe tu nombre.";
        resultado.className = "error";
        return;
    }

    // Si la edad está vacía
    if (textoEdad === "") {
        resultado.textContent = "Escribe tu edad.";
        resultado.className = "error";
        return;
    }

    // Convertimos la edad a número
    let edad = Number(textoEdad);

    // Si la edad no es entera o no está entre 18 y 100
    if (edad % 1 !== 0 || edad < 18 || edad > 100) {
        resultado.textContent = "La edad debe ser un número entero entre 18 y 100.";
        resultado.className = "error";
        return;
    }

    // Si el correo no tiene @ y .
    if (!correo.includes("@") || !correo.includes(".")) {
        resultado.textContent = "Escribe un correo válido.";
        resultado.className = "error";
        return;
    }

    // Si las contraseñas no son iguales
    if (clave !== confirmar) {
        resultado.textContent = "Las contraseñas no coinciden.";
        resultado.className = "error";
        return;
    }

    // Si todo está bien
    resultado.textContent = "Registro exitoso. Bienvenido(a), " + nombre + ".";
    resultado.className = "exito";
}