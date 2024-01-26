// Crea una función llamada swap que reciba un array y dos parámetros
// que sean índices del array. La función deberá intercambiar la 
// posición de los valores de los índices que hayamos enviado cómo
// parámetro. Retorna el array resultante.

// Sugerencia de array

const fantasticFour = [
    "La antorcha humana",
    "Mr Fantástico",
    "La mujer invisible",
    "La cosa",
];


function swap(array, index1, index2) = {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    
    return array;
};

const swappedFantasticFour = swap(fantasticFour, 1, 2);
console.log(swappedFantasticFour);