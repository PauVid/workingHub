// Utiliza el array para crear dinámicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const div = document.querySelector("[data-function='printHere']");
const middleEarth = document.createElement("ul");

for (const place of places) {
    const gollumTravelsTo = document.createElement("li");
    golumTravelsTo.textContent = place;

    middleEarth.append(gollumTravelsTo);
};

div.append(middleEarth);