// Tenemos un input donde le estamos pidiendo al usuario
// de la página que me indique cuantos elementos del array debo eliminar

const frutasHTML = document.querySelector(".frutas");
const bebidasHTML = document.querySelector(".bebidas");
const juegosHTML = document.querySelector(".juegos");

// console.log(frutasHTML);
// console.log(bebidasHTML);
// console.log(juegosHTML);

// const frutas = ["mango", "fresas", "naranja", "pomelo"];
// const bebidas = ["agua", "leche", "cocacola"];
// const juegos = ["The last of us", "Fifa", "Zelda", "Mario Party"];


//! SOLUCIÓN INCORRECTA

// const inputFrutas = document.createElement("input");
// inputFrutas.placeholder = "Frutas"
// frutasHTML.appendChild(inputFrutas);

// for (const fruta of frutas) {
//     const pFruta = document.createElement("p");
//     pFruta.textContent = fruta;
//     frutasHTML.append(pFruta);
// }

// const inputBebidas = document.createElement("input");
// inputBebidas.placeholder = "Bebidas"
// bebidasHTML.appendChild(inputBebidas);

// for (const bebida of bebidas) {
//     const pBebida = document.createElement("p");
//     pBebida.textContent = bebida;
//     bebidasHTML.append(pBebida);
// }

// const inputJuegos = document.createElement("input");
// inputJuegos.placeholder = "Juegos";
// juegosHTML.appendChild(inputJuegos);

// for (const juego of juegos) {
//     const pJuego = document.createElement("p");
//     pJuego.textContent = juego;
//     juegosHTML.append(pJuego);
// }

// Aquí estamos repitiendo demasiado código sería mejor hacer una función
// para reducir el número de líneas.

//! SOLUCIÓN CORRECTA

const frutas = ["mango", "fresas", "naranja", "pomelo"];
const bebidas = ["agua", "leche", "cocacola"];
const juegos = ["The last of us", "Fifa", "Zelda", "Mario Party"];
                        // 1     // 2
const quitarElementos = (array, cantidad) => {
    
    if (!cantidad) {
        alert("No puedo cortar 0 elementos, selecciona una cantidad superior")
    }

    for (let i = 0; i < Math.abs(cantidad); i++) {
        array.pop();
    };
};
            //   1      2
quitarElementos(juegos, 3);
quitarElementos(frutas 1);

                    //  1       2             3       // Así si alguien no me envía donde quiere meter algo lo mete en el body
const createSection = (array, texto = "", nodoPadre = document.body) => {
    
    nodoPadre.innerHTML = "";


    if(!array) {    // Si no tengo array no hago nada
        return
    };

    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = texto;
    nodoPadre.appendChild(inputJuegos);

    // blur es un elemento que me permite controlar cuando un elemento deja de hacer focus
    input.addEventListener("blur", (evento) => {
    quitarElementos(array, parseInt(evento.target.value));
    createSection(array, texto, nodoPadre);      
    });

    for (const element of array) {
    const pElement = document.createElement("p");
    pElement.textContent = element;
    nodoPadre.append(pElement);
    };
}

            //   1        2         3
createSection(frutas, "Frutas", frutasHTML);
createSection(bebidas, "Bebidas", bebidasHTML);
createSection(juegos, "Juegos", juegosHTML);


// Ahora tenemos una Función genérica que nos sirve para TODOS






