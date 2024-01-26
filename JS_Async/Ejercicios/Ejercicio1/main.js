

fetch("https://thronesapi.com/api/v2/Characters") // Obtenemos los datos 
    .then((res) => res.json()) // Convertimos los datos a json para poder añadirlos al html
    .then((personajes) => { // Entonces seleccionamos los elementos del HTML
        const lista = document.querySelector("#character-list"); // Al div de lista  de personajes
        for (const personaje of personajes) {
            select.innerHTML += `<option value="${personaje.firstName} ${personaje.lastName}">${personaje.firstName} ${personaje.lastName}</option>`
        } // Creamos dentro del div el texto con el nombre de los personajes
        select.addEventListener("change", (e) =>{ // Añadimos un evento de escucha al cambio 
            const image = document.querySelector(".character-image"); // Seleccionamos la imagen del HTML
            image.src = personajes.find(personaje =>    // y le damos el valor de la imagen dentro de la API
            e.target.value.includes(personaje.firstName) &&
            e.target.value.includes(personaje.lastName)
            ).imageUrl;
        })
    })
