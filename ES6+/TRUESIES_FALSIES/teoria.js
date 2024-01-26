// Se trata de como se tratan los valores si no son booleanos
// Truesies  
// Falsies

let cadena = "Soy una cadena";
let numero = 0;
let boolean = true;

// if (numero) {
//     console.log("Ha dado true")
// } else {
//     console.log("Ha sido false");
// }

// Los número se interpretarán como false en una condición cuando su valor
// sea literalmente 0. Sin embargo, se interpretará como true en caso contrario
// (cualquier otra cosa que no sea 0, incluso valores negativos)

// Los valores truesies y falsies solo entran en juego cuando dejas la variable ella sola.
// Es decir, no haces una comparación.


// no tengo número === 0 
// La exclamación ! siempre ha sido un NOT.
// if (!numero) {
//     console.log("Ha dado true")
// }


//! STRING

//La cadena de texto es true cuando tiene lognitud mayor que 0 y false cuando no tiene longitud

// console.log(cadena.length)

// if (cadena) {
//     console.log("La cadena es interpretada como un valor true")
// }


// const objeto = {};
// const array = [];

// if (objeto) {
//     console.log("Objeto es true")
// }

// if (array) {
//     console.log("Array es true")
// }


//Esto nos sirve mucho cuando vamos a utilizarlo en funciones

const frutas = ["mango", "fresa", "naranja", "pomelo"];
const bebidas = ["agua", "leche", "cocacola"];

const funcion = (array) => {

    if (!array) {
        console.log("Debes aportarme un array para poder cumplir la funcionalidad");
        return // El return me saca de la función y no ejecuta el código de debajo
    }
    console.log("La longitud del array es: " + array.length)
};

funcion(frutas);
funcion(bebidas);
funcion();


//!!!! TERNARIOS

// Los ternarios seran una versión acortada sintácticamente de los if

let interruptor;

let persona = "Clara";

if (persona) {
    interruptor = true;
} else {
    interruptor = false;
}

if (interruptor) {
    console.log("La luz está encendida")
} else {
    console.log("La luz está apagada")
}

// Dentro de un if puedes poner 1000 lineas de código o más
// Con un Ternario no

// Ternario = condición ? respuesta true : respuesta false

persona ? interruptor = true : interruptor = false;

