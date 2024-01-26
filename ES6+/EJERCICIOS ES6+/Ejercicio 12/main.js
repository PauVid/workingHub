// Crea una función llamada findArrayIndex que reciba como parámetros un array
// de textos y un texto y devuelve la posición del array cuando el valor del 
// array sea igual al valor del texto que enviaste como parámetro.

// Haz varios ejemplos y compruebalos.
// Sugerencia de función:

// function findArrayIndex(array, text) {}

// // Ej array:
// const mainCharacters = {
//     "Luke",
//     "Leia",
//     "Han Solo",
//     "Chewbacca",
//     "Rey",
//     "Anakin",
//     "Obi-Wan",
// };

const arrayPrueba1 = [

    "Texto 1",
    "Texto 2",
    "Texto 3",
    "Texto 4",
    "Texto 5",
    "Texto 6",
];

const findArrayIndex = (array, text) => {
    return array.indexOf(text);
}


console.log(findArrayIndex(arrayPrueba1, "Texto 3")); 
console.log(findArrayIndex(arrayPrueba1, "Texto 5"));

const listaDeLaCompra = [
    "Tomates",
    "Pan",
    "Aceite", 
    "Huevos",
    "Perejil",
    "Patatas",
];

const encontrarElArray = (array, text) => {
    return array.indexOf(text);
}


console.log(encontrarElArray(listaDeLaCompra, "Huevos"));
console.log(encontrarElArray(listaDeLaCompra, "Patatas"));