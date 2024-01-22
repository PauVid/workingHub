// 1 Inserta dinámicamente en un html un div vacío con javascript.
// 2 Inserta dinámicamente en un html un div que contenga una p con javascript
// 3 Inserta dinámicamente en un html un div que contenga 6 p utilizando un loop con javascript
// 4 Inserta dinámicamente con javascript en un html una p con el texto "Soy dinámico"
// 5 Inserta en el h2 con la clase .fn-insert-here el texto "Wubba Lubba dub dub"
// 6 Basándote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', Instagram', 'Snapchat', 'Twitter'];
// 7 Elimina todos los nodos que tengan la clase .fn-remove-me
// 8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild
// 9 Inserta con p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here


document.querySelector("body").append("div");

document.querySelector("body").append("div", "p");

for (let i = 0; i < 6; i++){
    document.querySelector("body").append("div", "p");
};

const texto = "Soy dinámico";
document.querySelector("body").append("p", texto);

