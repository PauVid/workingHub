//! Nuevos métodos para arrays

// Hemos visto una serie de métodos de arrays que nos resultaron bastante útiles, ahora veremos algunos más
// avanzados que nos vendrán muy bien en ciertas situaciones.

// Muchos de estos métodos implementarán las funciones flecha (arrow functions) en su sintaxis y harán nuestro código más conciso



//? MAP
// El método map() es una función de la clase Array que permite aplicar una función a cada elemento de un array y devolver un nuevo array con los resultados
// Es muy útil para transformar un array de una forma rápida y sencilla

const numbers = [1,2,3,4,5];
const doubledNumbers = numbers.map(number => number * 2);

console.log(doublesNumbers;) // [2,4,6,8,10]

// Lo que acabamos de hacer ha sido, crear un array con cinco números. Luego, hemos utilizado map() para aplicar la función que duplica 
// cada número a cada elemento del array y guardar el resultado en un nuevo array doubledNumbers. Al final, hemos imprimido este nuevo array en la consola
// y podemos ver que cada número del array original ha sido duplicado.

const users = [
    {name: "John", age: 30 },
    {name: "Jane", age: 25 },
    {name: "Bob", age: 35 },
];

const names = users.map(user => users.name);
console.log(names); // ["John", "Jane", "Bob"]

// En este caso, tenemos un array users con objetos que tienen dos propiedades: name y age.
// Usamos map() para extraer el valor de la propiedad name de cada objeto y guardarlo en un nuevo array names.
// Al final imprimimos este nuevo array en la consola y podemos ver que sólo contiene los nombres de los usuarios.


//? FILTER
//* El método filter() es una función de clase Array que permite filtrar elementos de un array en función de una condición dada
//* y devolver un nuevo array con los elementos que cumplen esa condición. Es muy útil para extraer elemtnos de un array de una
//* forma rápida y sencilla.

const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers) // [2,4,6,8,10]

// En este caso hemos utilizado filter() para extraer sólo los números pares del array y guardar el resultado en un nuevo array evenNumbers
// Al final, hemos imprimido este nuevo array en la consola y podemos ver que sólo contiene los números pares del array original.

const users = [
    {name: "John", age: 30 },
    {name: "Jane", age: 25 },
    {name: "Bob", age: 35 },
    {name: "Alice", age: 40 },
];

const olderThan30 = users.filter(user => user.age >= 30); // Aquí usamos filter() para encontrar los usuarios del array mayores de 30

//? FIND
// El método find() es una función de la clase array que permite encontrar un elmento en un array que cumpla una condición dada y devolverlo.
// Es muy útil para buscar un elemento específico en un array de una forma rápida y sencilla. 

const numbers = [1,2,3,4,5,6,7,8,9,10];

const four = numbers.find(number => number === 4);

// En este ejemplo, hemos creado un array numbers con diez números. Luego, hemos utilizado find() para buscar el número 4 en el array 
// y guardar el resultado en una variable four.



//? REDUCE
// El método reduce() es una función de la clase array que permite aplicar una función a cada elemento de un array y reducirlo
// a un único valor. Es muy útil para realizar cálculos sobre un array de forma rápida y sencilla.


const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // 15

//? SOME
// Es una función de la clase Array que permite comprobar si, al menos, un elemento de un array cumple una condición dada
// Devuelve true si encuentra alemnos un elemento que cumpla la condición y false en caso contrario.
// Es muy útil para verificar si un array cumple ciertas condiciones de una forma rrápida y sencilla 

const number = [1,2,3,4,5];

const hasEvenNumbers = numbers.some(number => number % 2 === 0); 
console.log(hasEvenNumbers);  // true

//? EVERY
// En algunos casos, puede quieras usar el método every() en lugar de some().
// every() es similar a some() pero en lugar de devolver true si al menos un elemento cumple la condición
// devuelve true sólo si todos los elementos cumplen la condición.



