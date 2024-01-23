// 1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countriesList = document.createElement("ul");

for (const country of countries) {
    const countryList = document.createElement("li");
    countryList.textContent = country; 
    countriesList.append(countryList);
}

document.body.append(countriesList);

// 2 Elimina el elemento que tenga la clase .fn-remove-me
const classDestroyer = document.querySelector(".fn-remove-me");
classDestroyer.remove()

// 3 Utiliza el array para crear dinámicamente en una lista ul > li de elementos en el div de html con el atributo data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corolla'];

const carsList = document.createElement("ul");

for (const car of carsList) {
    const carList = document.createElement("li");
    carList.setAttribute("data-function", "printHere")
    carList.textContent = car;

    carsList.append(carList);
};

document.body.append(carsList);

// 4 Crea dinámicamente en el html una serie de divs que contenga un elemento h4 para el título y otro elemento img para la imagen. 
const paises = [ 
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
];

for (const pais of paises) {
    const listaPaises = document.createElement("div");
    const titlePaises = document.createElement("h4");
    const fotoPaises = document.createElement("img")
    titlePaises.textContent = paises.title;
    fotoPaises.src = paises.imgUrl;

    listaPaises.append(titlePaises);
    listaPaises.append(fotoPaises);
}

document.body.append(listaPaises) // ¿Porqué en la solución lo añadís después del for of?

// 5 Basándote en el ejercicio anterior. Crea un botón que elimine el último elemento de la série de divs

const lastChildDestroyer = document.createElement("button");
lastChildDestroyer.textContent = "Corre, corre que te pillo";

function fnDestroyer() {
    const divDestroyer = document.querySelector("div");
    divDestroyer[divDestroyer.length -1].remove();
}

lastChildDestroyer.addEventListener("click", fnDestroyer);
document.body.append(lastChildDestroyer);


// 6 Basándote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const buttonBuitre = document.querySelectorAll("div");

for (const listaPaises of buttonBuitre) {
    const carne = document.createElement("button");
    carne.textContent = "¡Te pillé!";
    carne.addEventListener("click", (e) => e.target.parentElement.remove());

    listaPaises.append(carne);
}

