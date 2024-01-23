// 1 Añade un botón a tu html con el ID btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const botonsito = document.createElement("button");
botonsito.id = "btnToClick";

botonsito.addEventListener("click", (e) => console.log(e))
document.body.append(botonsito);
// 2 Añade un evento 'focus' que ejecute un console.log con el valor del input

// 3 Añade un evento 'input' que ejecute un console.log con el valor del input