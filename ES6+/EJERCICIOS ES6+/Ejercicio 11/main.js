// Dado el siguiente JavaScript usa forof y forin para saber cuantas veces ha
// sido cada sonido agregado por los usuarios a favoritos.

// Para ello recorre la lista de usuarios y usa forin para recoger el nombre
// de los sonidos que el usuario tenga como favoritos.

// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada 
// vez que ese sonido se repita como favorito en cada usuario.

// Este ejercicio es un poco complicado con los conocimientos actuales pero...
// a la vez, un buen reto y oportunidad para comprender que hay muchas formas 
// de hacer las cosas en JavaScript

const users = [
    {
        title: "Alberto",
        favoritesSounds: {
            waves: { format: "mp3", volume: 50 },
            rain: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        title: "Antonio",
        favoritesSounds: {
            waves: { format: "mp3", volume: 30 },
            rain: { format: "ogg", volume: 55 },
            firecamp: { format: "mp3", volume: 60 },
        },
    },
    {
        title: "Pedro",
        favoritesSounds: {
            waves: { format: "mp3", volume: 50 },
            rain: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        title: "Cristina",
        favoritesSounds: {
            waves: { format: "mp3", volume: 67 },
            rain: { format: "ogg", volume: 35 },
            firecamp: { format: "mp3", volume: 60 },
        },
    },
];