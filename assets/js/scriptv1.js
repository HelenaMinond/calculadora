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

//--------------------------------------------------------------------------------------

//Variable Visor conectados con HTML
let visor = document.getElementsByClassName("visor");

//--------------------------------------------------------------------------------------

//Variables botones de operaciones '+', '-', '*' y '/' conectados con HTML
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");

//--------------------------------------------------------------------------------------

//Variables botones '=' y 'C' conectados con HTML
const resultado = document.getElementById("resultado");
const limpiar = document.getElementById("limpiar");

//--------------------------------------------------------------------------------------

//Variable Visor para almacenar contenido ingresado
let visorContenido = "";

//--------------------------------------------------------------------------------------

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

//--------------------------------------------------------------------------------------

//Función para:
// -Almacenar en memoria (variable visorContenido) lo que haya en visor.
// -Borrar el contenido de visor.
const operar = function() {
    visorContenido = visor[0].textContent;
    visor[0].textContent = "";
}

//--------------------------------------------------------------------------------------

//Funciones de escucha al realizar evento click
//*La función es llamada o invocada
suma.addEventListener("click", operar);
resta.addEventListener("click", operar);
multiplicacion.addEventListener("click", operar);
division.addEventListener("click", operar);

//---------------------------------------------------------------------------------------

//Función para:
// -Ingresar otro número
// -Sume, reste, multiplique y divida (respectivamente) al contenido de visorContenido

/*   Opcion 1
const results = function() {
    const ress = +visorContenido + Number(visor[0].textContent);
    visor[0].textContent = ress;
}
*/

//    Opcion2
const results = function() {
    const ress = +visorContenido + Number(visor[0].textContent);
    visor[0].textContent = ress;
}

const resultr = function() {
    const resr = +visorContenido - Number(visor[0].textContent);
    visor[0].textContent = resr;
}

const resultm = function() {
    const resm = +visorContenido * Number(visor[0].textContent);
    visor[0].textContent = resm;
}

const resultd = function() {
    const resd = +visorContenido / Number(visor[0].textContent);
    visor[0].textContent = resd;
}

/*  Opcion3
const result = function() {

    if (suma) {
        //const res = +visorContenido + Number(visor[0].textContent);
        //visor[0].textContent = res;
    }

    else if (resta) {
        //const res = +visorContenido - Number(visor[0].textContent);
        //visor[0].textContent = res;
    }
}
*/

/*  Opcion4
const result = function() {
    const res;
    switch (operacion){
        case "+":
        res = +visorContenido + Number(visor[0].textContent);
        break;

        case "-":
        res = +visorContenido - Number(visor[0].textContent);
        break;

        case "*":
        res = +visorContenido * Number(visor[0].textContent);
        break;

        case "/":
        res = +visorContenido / Number(visor[0].textContent);
        break;
    }
    visor[0].textContent = res;
}
*/

// --------------------------------------------------------------------

//Funciones de escucha al realizar evento click
//*La función es llamada o invocada

// Opcion1
//resultado.addEventListener("click", result);

//Opcion2
resultado.addEventListener("click", function(){
    
    if (results) {
        results();
    }

    else if (resultr) {
        resultr();
    }
})




