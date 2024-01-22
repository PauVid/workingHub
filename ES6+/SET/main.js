// Un SET es una estructura de datos que almacena valores únicos, es decir, no permite elementos duplicados
// Podremos ver como tiene sus propios métodos: add, has y size...

const miSet = new Set();

miSet.add("valor1");
miSet.add("valor2");
miSet.add("valor1"); // No se agrega de nuevo, ya existe

console.log(miSet.has("valor2")); // true
console.log(miSet.size); // 2

// Hemos visto anteriormente como quitar elementos repetidos en un array puede parecernos más o menos sencillo, pero con SET
// seguro que será más sencillo

const arrayConDuplicados = [1,2,3,4,5,2,5,1,6];
const arraySinDuplicados = [...new Set(arrayConDuplicados)];

console.log(arraySinDuplicados); // [1,2,3,4,5,6]

