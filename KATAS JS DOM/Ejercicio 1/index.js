// 1. Usa querySelector para mostrar por consola el botón con la clase .showme
// 2. Usa querySelector para mostrar por consola el h1 con el id #pillado
// 3. Usa querySelector para mostrar por consola todos los p
// 4. Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
// 5. Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe"
// 6. Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe"

const show = document.querySelector(".showme");
console.log(show);

const pillado = document.querySelector("h1#pillado");
console.log(pillado);

console.log(document.querySelectorAll("p"));

console.log(document.querySelectorAll(".pokemon"));

console.log(document.querySelectorAll("[data-function='testMe']"));

console.log(document.querySelectorAll(3,"[data-function='testMe']"));


