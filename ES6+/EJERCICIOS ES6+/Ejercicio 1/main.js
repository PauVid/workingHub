// Crea una arrow function que tenga dos parametros a y b. Y que por
// defecto el valor de a = 10 y de b = 5. Haz que la funcion muestre 
// por consola la suma de los dos parametros. 
const suma = (a = 10, b = 5) => {console.log(a + b)};
// 1.1 Ejecuta esta función sin pasar ningún parámetro
suma();
// 1.2 Ejecuta esta función pasando solo parámetro
suma(4);
// 1.3 Ejecuta esta función pasando dos parámetros
suma(6, 0);