// Ejercicio 2 : uso de la funcion con nombre y el evento click


//seleccionamos el boton mediante el id y lo guardamos en una variable 

let botonRestar = document.getElementById("botonRestar");


//le asignamos el evento click y la funcion que se debe ejecutar cuando ocurra

botonRestar.addEventListener("click", resta);

//declaramos la funcion con el nombre que recibe el objeto event.
//este objeto proporciona informacion sobre el evento que ocurrio.
function resta(event){


    event.preventDefault();


    //parsefloat() admite decimales (a diferencia de parse int(), que los recorta)
    // y de NaN si el campo esta vacio.

    let valor1 = parsefloat(document.getElementById("num1").value);
    let valor2 = parsefloat(document.getElementById("num2").value)


    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Escribe los dos numeros.");
        return;
    
    
    
    }else {
        let resultado = valor1 - valor2;
        alert(`Resta: ${resultado}`);

    }
}