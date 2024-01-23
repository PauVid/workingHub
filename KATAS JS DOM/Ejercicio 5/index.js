// Basándote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los álbums

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

const libreria = document.createElement("ul");

for (const album of libreria) {
    const disco = document.createElement("li");
    libreria.textContent = album;

    libreria.append(disco);
};

document.body.append(libreria);