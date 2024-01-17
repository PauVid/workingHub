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

//LEEMOS_______________________________________________________
const allMyAprobados = document.querySelectorAll("p.aprobado");

//! __________________ACTUALIZAR__________________
// Voy a poder actualizar todo tipo de cosas en nuestro documento HTML

//ACTUALIZAMOS_____________________________
for (const aprobado of allMyAprobados) {
    nombreDeClase.style.color = "green";
    nombreDeClase.style.fontSize = "40px";
}

// console.log(myH1.innerHTML);
// console.log(myH1.innerText);  
// console.log(myH1.textContent);

allMyAprobados.innerHTML = "He cambiado, ya no estoy aprobado";
allMyAprobados.innerText = "He cambiado, ya no estoy aprobado"; 
allMyAprobados.textContent = "He cambiado, ya no estoy aprobado"; // Hacen lo mismo pero este tiene sentido usarlo para textos debido a su nombre.


//* Sustituir / sobreescribir una clase
allMyAprobados.className = "suspenso"; // cambio TODAS las clases del objeto
allMyAprobados.classList.add("añado"); // AÑADE una clase al objeto
allMyAprobados.classList.remove("suspenso") // QUITA la clase que queramos, en este caso .suspenso
allMyAprobados.classList.toggle("suspenso") // SI la tiene la QUITA y si no la tiene la PONE

// Posición aleatoria de un array de img (CON HTML NO SE PUEDE HACER)

const arrayImgs = {
    "https://www.linkdelaimg.com/1",
    "https://www.linkdelaimg.com/2",
    "https://www.linkdelaimg.com/3",
    "https://www.linkdelaimg.com/4",
    "https://www.linkdelaimg.com/5",
    "https://www.linkdelaimg.com/6",
};

const img = document.querySelector("img");
img.src = arrayImgs[Math.floor(Math.random() * arrayImgs.length)]
                    //_________________________________________
                    // .floor = Trunca un número / .random = Me da un número aleatorio entre 0 y 1 / pero si lo multiplico por la longitud (.length) me va a dar número de 0 a 6.


//ELIMINAMOS_____________________________
// .remove() -> es un método que elimina nodos de html desde js

//Para eliminar una imagen, por ejemplo, en un tiempo determinado:
setTimeout(() => {
    img.remove();
}, 5000) // En 5 segundos


//CREAMOS_____________________________
// para crear un nodo en HTML utilizaremos desde JS el método .creatElement()

const myP = document.createElement("p"); // dentro de ("") el nombre de la etiqueta(p, div, span, etc...) que quieras crear
// el elemento en este punto se ha creado pero está en el limbo, sólo está en una variable

// INYECTAR - appendChild()
                // ^ Necesita  elementoPadre.appendChild("elementoHijo"); 
myP.textContent = "He añadido contenido de texto en mi párrafo con JS";
document.body.appendChild(myP);

// METER EL PÁRRAFO DENTRO DEL DIV

// LEO
const myDiv = document.querySelector(".clase-div");

// INYECTO
myDiv.appendChild(myP);

// ¡Usamos appendChild() pero usando append() funciona exactamente igual!

// El anterior siempre lo crea al final, para inyectarlo donde queramos usamos: 
document.body.insertBefore(myP, myDiv);
                        // ^ Elemento que quiero poner primero/before




//! MINI EJERCICIOS

const alumns = [
    {
    name: "Pau",
    score: "5"
    },
    {
    name: "Pau",
    score: "5"
    },
    {
    name: "Pau",
    score: "5"
    },
    {
    name: "Pau",
    score: "5"
    },
    {
    name: "Pau",
    score: "5"
    },
    {
    name: "Pau",
    score: "5"
    },
    {
    name: "Pau",
    score: "5"
    },
    {
    name: "Pau",
    score: "5"
    },
];


// <ul> 
//     <li>
//         <h3>
//         <p>
//     </li>
// </ul>

const alumnList = document.createElement("ul");
// document.body.append(alumnList); // También puede ir aquí

for (const alumn of alumns) {
    const listParent = document.createElement("li")
    const title = document.createElement("h3");
    const parrafo = document.createElement("p");

    // PODEMOS JUGAR CON TODO ELLO, CREANDO UNA CLASE SEGÚN LA NOTA
    if (alumn.score >= 5) {
        title.className = "aprobado";
    } else {
        title.className = "suspenso";
    }
    // AHORA EDITARÍAMOS LA CLASE .aprobado o .suspenso EN EL FICHERO DE CSS

    title.textContent = alumn.name;
    parrafo.textContent = `${alumn.name} tiene un score de: ${alumn.score}`;

    // document.body.append(parrafo);
    listParent.append(title, parrafo);
    alumnList.append(listParent);
}

document.body.append(alumnList);

//________AHORA HEMOS CREADO UN ul Y DENTRO, CON EL BUCLE for HEMOS CREADO 6 li QUE CONTIENEN UN h3 Y UN p CADA UNO________

