// EJERCICIO 3: función anónima con el evento submit.

// Ahora escuchamos el formulario completo, no el botón.
document.getElementById("formulario").addEventListener("submit", function (event) {

    // Impedimos que el formulario recargue la página.
    event.preventDefault();

    // El navegador ya revisó required: aquí los campos tienen valor.
    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);

    alert(`Multiplicación: ${numero1 * numero2}`);
});