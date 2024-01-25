// Dado el siguiente JavaScript usa forof y forin para hacer la media del
// volumen de todos los sonidos favoritos que tienen los usuarios

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