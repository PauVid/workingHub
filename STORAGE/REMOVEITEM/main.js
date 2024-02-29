//! REMOVE ITEM

localStorage.removeItem("theme");

// Lo utilizaremos cuando queramos eliminar cualquier dato del localStorage, 
// se utilizará como el getItem("clave") enviándole la clave del elemento 
// sobre el que quieras realizar dicha acción.

//! CLEAR

localStorage.clear();

// El método clear no recibe parámetros y simplemente limpiará el localStorage
// por completo, eliminando consigo todos los elementos que tuviera almacenados.


//? SESSIONSTORAGE

// Estos métodos son exactamente los mismos que los del localStorage, sin 
// embargo, irán precedidos de la palabra sessionStorage

sessionStorage.setItem("item", "value");
sessionStorage.getItem("item");
sessionStorage.removeItem("item");
sessionStorage.clear();