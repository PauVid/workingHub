// Usando la función anterior benefíciate de poder conocer el índice del array
// para crear una función llamada removeItem qué, pasándole un array y un texto
// cómo parámetros. Llama a la función anteriormente creada findArrayIndex y obtén
// el índice para posteriormente usar la función de JavaScript .splice() para 
// eliminar el elemento del array.

// Finalmente retorna el array

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente

const potterLista = [
    {name: "Sirius Black", team: "Orden del Fénix"},
    {name: "Fenrir Grayback", team: "Mortífago"},
    {name: "Harry Potter", team: "Orden del Fénix"},
    {name: "Lilly Evans", team: "Orden del Fénix"},
    {name: "Severus Snape", team: "Orden del Fénix"},
    {name: "Lucious Malfoy", team: "Mortífago"},
    {name: "Tom Riddle", team: "Mortífago"},
]


const removeItem = (array, text) => {
    const index = findArrayIndex(array, text); 
    if (index !== -1) {
        array.splice(index, 1); // elimina un elemento de la posición index
    }
    return array;
}

console.log(removeItem(potterLista, potterlista.name[3]));
console.log(removeItem(potterLista, potterLista.team[4]));