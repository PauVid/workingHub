// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

//? TEORÍA JS

//! CRUD - Create/Read/Update/Delete
//* No tienes porque hacer un CRUD completo siempre, puedes hacerlo por partes.
//* En el backend se ve más.
`Tu puedes ${CREAR}  información, ${LEER}información, ${ACTUALIZAR} la información y ${ELIMINAR} la información`

//! __________________CREAR__________________
// Crear información en el DOM (Document Object Model)
// Cuando tenemos un HTML tener un DOM me va a permitir hacer un modelo de objetos en nuestro documento.
// Lo que nos podemos encontrar es que todos los elementos del documento HTML se convierte en objetos.

//! __________________LEER__________________
// Si ponemos el script en el HTML en el head, se carga antes el script que en html, entonces no va a existir
// y vamos a tener problemas para hacer CRUD.
// Para ello, en la misma etiqueta de script añadirmos la palabra defer (hasta que no se carga todo el documento
// nuestro script no va a cargar)

`<script src="./..." ${defer} defer></script>`

// Pero podemos poner el script al final del body, no hay problema.

// const myH1 = document.querySelector("h1");
// console.log(myH1);

// document.getElementsByTagName(); <--- Va a coger TODOS los elementos que cumplan con el nombre de la etiqueta, 
// creando un array de nodos,    ^        llamado html collection. 
//                               ^ Aquí podemos elegir el número, por ejemplo si queremos el primero pondremos (0).

// document.getElementsByClassName(); <--- Selecciona todos los elementos que tengan la clase .aprobado

// document.getElementById(); <--- Está en singular porqué en principio sólo quieres coger UNO. IMPORTANTE
// Selecciona el nodo de nuestro HTML por ID 

// document.querySelector("h1") <--- Selecciono un único elemento por la cdondición que le indique. SIEMPRE SERÁ EL PRIMERO
                    //    "#id"
                    //   ".class"
                    //   "p.class"
                    //"div > p.class"
         // USA EL MISMO LENGUAJE QUE CSS ENTRE "" //Acepta casi todo, menos :hover, etc...

// document.querySelectorAll("h1") <--- Este hace lo mismo que getElements, te los trae TODOS creando una array de nodos.



