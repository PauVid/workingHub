import './style.css'

// Vamos a tener 10 cartas
// 5 cartas distintas

const arrayCartas = [
  {
    id: 1,
    color: "red"
  },
  {
    id: 2,
    color: "blue"
  },
  {
    id: 3,
    color: "green"
  },
  {
    id: 4,
    color: "yellow"
  },
  {
    id: 5,
    color: "pink"
  },
  {
    id: 6,
    color: "red"
  },
  {
    id: 7,
    color: "blue"
  },
  {
    id: 8,
    color: "green"
  },
  {
    id: 9,
    color: "yellow"
  },
  {
    id: 10,
    color: "pink"
  },
];

// 1.1 Necesitamos saber cuando se ha seleccionado una carta
// poder ver en consola que se ha seleccionado una carta(1) no necesito saber cúal, sinó CUANTAS
let contador = 0;

// Hacer un console.log cuando se haya seleccionado la segunda carta

// Necesitamos saber cuando se ha seleccionado otra carta
// Necesitamos comparar esas dos cartas seleccionadas
let carta1;
let carta2;
// Necesitamos contar puntos 
let puntuacion;

arrayCartas.sort((a, b) => Math.random() - Math.random()); //Randomizamos las cartas 

const divApp = document.querySelector("#app");

const puntuacionHTML = document.createElement("h3");
document.body.insertBefore(puntuacionHTML);
// Necesitamos poder darle la vuelta de nuevo a las cartas

const resetearValores = () => {
  contador = 0;
  carta1 = undefined;
  carta2 = undefined;
  console.log(puntuacion);
};

const resetearCarta = (cartaGenerica) => {
  cartaGenerica.nodoHTML.style.backgroundColor = "#f23000";
  cartaGenerica.nodoHTML.style.backgroundImage = "url(https://www.transparenttextures.com/patterns/argyle.png)";
};

const comprobar = () => {
  if (carta1.datosCarta.color === carta2.datosCarta.color) {
    puntuacion++; // Sumamos puntos por aciertos
    resetearValores();
  } else {
    puntuacion--; // Restamos puntos si fallamos
    // Aquí volver a dar la vuelta
    // Cambiar el bg color y el bg image
    setTimeout(() => {
      resetearCarta(carta1)
      resetearCarta(carta2)
      resetearValores();
    }, 1000);

  }
  puntuacionHTML.textContent = "Puntuación: " + puntuacion;
}

const seleccionar = (divCartaNodoHTML, datosDeCadaCarta) => {
  //1.1
  if (contador < 2) {
    // Seleccionar una carta - sólo lo hago cuando contador sea menor que dos
    contador++;
    // console.log("Cartas Seleccionadas: " + contador);
    divCartaNodoHTML.style.backgroundColor = datosDeCadaCarta.color;
    divCartaNodoHTML.style.backgroundImage = "none";
  }

  // esto ocurre cuando hemos seleccionado la primera
  if (contador === 1) {
    carta1 = {
      nodoHTML: divCartaNodoHTML,
      datosCarta: datosDeCadaCarta
    };
  }
  // podemos controlar cuando hemos seleccionado la segunda
  if (contador === 2) {
    carta2 = {
      nodoHTML: divCartaNodoHTML,
      datosCarta: datosDeCadaCarta
    };
    comprobar(); 
  }
};

arrayCartas.forEach((datosDeCadaCarta) => {
  const divCartaNodoHTML = document.createElement("div");
  divCartaNodoHTML.className = "carta";

  // Elijo su nombre "seleccionar" y su funcionalidad
  // Necesitamos saber que carta ha seleccionado el usuario, por lo tanto
  // necesito enviarle a mi función la carta seleccionada
  divCartaNodoHTML.addEventListener("click", seleccionar(divCartaNodoHTML, datosDeCadaCarta));
  // const funcionPrevia = () => {
  //   seleccionar(divCarta, carta.color);     < ^ es lo mismo que esta función flecha
  // };

  divApp.append(divCartaNodoHTML);
});



