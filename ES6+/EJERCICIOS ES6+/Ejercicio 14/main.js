// Crea una función llamada rollDice() que reciba como parmámetro el 
// número de caras que queramos que tenga el dado que deberá simular
// el código dentro de la función.
// Cómo hemos dicho, que la función use el parámetro para simular una
// tirada de dado y retornar el resultado. Si no se te ocurre como hacer 
// un número aleatorio no te preocupes! Busca información sobre la función
// de JavaScript Math.random()

const buttonDice = document.createElement("button");

const carasDado = 6;

function getRandomInt(max) {
      return Math.floor(Math.random() * max);
}

console.log(getRandomInt(carasDado))

document.body.append(buttonDice);
buttonDice.addEventListener("click", rollDice);

