// 1 Inserta dinámicamente en un html un div vacío con javascript.
const newDiv1 = document.createElement("div");
document.body.append(newDiv);
// 2 Inserta dinámicamente en un html un div que contenga una p con javascript
const newDiv = document.createElement("div");
const divWithP = document.createElement("p");

newDiv.append(divWithP);
document.body.append(newDiv);
// 3 Inserta dinámicamente en un html un div que contenga 6 p utilizando un loop con javascript
const parrafoLooper = document.createElement("div")

for (let i = 0; i < 6; i++){
    const parrafo = document.createElement("p");
    parrafoLooper.append(parrafo)
};

document.body.append(parrafoLooper);
// 4 Inserta dinámicamente con javascript en un html una p con el texto "Soy dinámico"
const dinamic = document.createElement("p")
dinamic.textContent = "Soy dinámico";

document.body.append(dinamic);
// 5 Inserta en el h2 con la clase .fn-insert-here el texto "Wubba Lubba dub dub"
const wubba = document.querySelector("h2.fn-insert-here")
wubba.textContent = "Wubba Lubba dub dub";
// 6 Basándote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const list = document.createElement("ul");

for (const app of apps) {
    const insideList = document.createElement("li");
    insideList.textContent = app; 
    list.append(insideList);
}

document.body.append(list);

// 7 Elimina todos los nodos que tengan la clase .fn-remove-me
const classDestroyer = document.querySelector(".fn-remove-me");

for (const clases of classDestroyer) {
    clases.remove();
}

// 8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
const selectorDivs = document.querySelectorAll("div")
const juevesP = document.createElement("p");

juevesP.textContent = "Voy en medio!";

document.body.insertBefore(juevesP, selectorDivs[1]);
// Recuerda que no solo puedes insertar elementos con .appendChild
// 9 Inserta con p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const classesInsertor = document.querySelectorAll(".fn-insert-here");

for (const classInsertor of classesInsertor) {
    const vaDentro = document.createElement("p");
    vaDentro.textContent = "Voy dentro!";

    classInsertor.append(vaDentro);
}







