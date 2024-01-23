// 1 Añade un botón a tu html con el ID btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const botonsito = document.createElement("button");
botonsito.id = "btnToClick";

botonsito.addEventListener("click", (e) => console.log(e))
document.body.append(botonsito);
// 2 Añade un evento 'focus' que ejecute un console.log con el valor del input
const input = document.querySelector("button");
input.addEventListener("focus", (e) => console.log(e.target.value));
// 3 Añade un evento 'input' que ejecute un console.log con el valor del input
const input2 = document.querySelector(".value");
input2.addEventListener("input", (e) => console.log(e.target.value));