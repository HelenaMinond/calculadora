//Variables botones numericos conectados con HTML
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const boton7 = document.getElementById("boton7");
const boton8 = document.getElementById("boton8");
const boton9 = document.getElementById("boton9");
const boton0 = document.getElementById("boton0");

//Variable Visor conectados con HTML
let visor = document.getElementsByClassName("visor");

//Variables botones de operaciones '+', '-', '*' y '/' conectados con HTML
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");

//Variables botones '=' y 'C' conectados con HTML
const resultado = document.getElementById("resultado");
const limpiar = document.getElementById("limpiar");

//Variable Visor para almacenar contenido ingresado
let visorContenido = "";

//Variables para guardar datos
let valor1 = 0;
let valor2 = 0;
let resul = 0;
let operacion = "";

//Funciones de escucha al realizar evento click
boton1.addEventListener("click", function () {
    visor[0].textContent += boton1.textContent;
});

boton2.addEventListener("click", function () {
    visor[0].textContent += boton2.textContent;
})

boton3.addEventListener("click", function () {
    visor[0].textContent += boton3.textContent;
})

boton4.addEventListener("click", function () {
    visor[0].textContent += boton4.textContent;
})

boton5.addEventListener("click", function () {
    visor[0].textContent += boton5.textContent;
})

boton6.addEventListener("click", function () {
    visor[0].textContent += boton6.textContent;
})

boton7.addEventListener("click", function () {
    visor[0].textContent += boton7.textContent;
})

boton8.addEventListener("click", function () {
    visor[0].textContent += boton8.textContent;
})

boton9.addEventListener("click", function () {
    visor[0].textContent += boton9.textContent;
})

boton0.addEventListener("click", function () {
    visor[0].textContent += boton0.textContent;
})

limpiar.addEventListener("click", function () {
    visor[0].textContent = "";
})

//Funciones de operaciones
const sumar = function() {
    valor1 = parseFloat(visor[0].textContent); 
    operacion = "+";
    visor[0].textContent = "";
}

const restar = function() {
    valor1 = parseFloat(visor[0].textContent)
    operacion = "-";
    visor[0].textContent = "";
}

const multiplicar = function() {
    valor1 = parseFloat(visor[0].textContent)
    operacion = "*";
    visor[0].textContent = "";
}

const dividir = function() {
    valor1 = parseFloat(visor[0].textContent)
    operacion = "/";
    visor[0].textContent = "";
}

//Selección de operación según botón en donde se realice el evento click
resultado.addEventListener("click", function(){
    valor2 = parseFloat(visor[0].textContent);
    switch(operacion){       
        case "+":
            result = valor1 + valor2;
            break;            

        case "-":
            result = valor1 - valor2;
            break;

        case "*":
            result = valor1 * valor2;
            break;

        case "/":
            result = valor1 / valor2;
            break;
    }
    valor1 = 0;
    valor2 = 0;
    operacion = "";
    visor[0].textContent = "" + result;
});

suma.addEventListener("click", sumar);
resta.addEventListener("click", restar);
multiplicacion.addEventListener("click", multiplicar);
division.addEventListener("click", dividir);