
const img = document.querySelector(".random-image"); // Seleccionamos el lugar donde irá la imagen y lo guardamos en la variable img

fetch("https://pokeapi.co/api/v2/pokemon/articuno" + (Math.floor(Math.random() * 151) + 1) // Llamamos a la API y randomizamos la aparición de los pokemon
    ).then((res) => res.json()) // Convertimos los datos obtenidos a json para poder trabajar con ello
    .then((pokemon) => (img.src = pokemon.sprites.other.dream_world.front_default)); // Entonces seleccionamos la imagen del pokemon de la API y le añadimos el src de la imagen