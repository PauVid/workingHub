//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con todos los valores que sean mayor que 18.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayores = ages.filter((age) => age > 18);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayores2 = ages2.filter((age2) => age2 % 2 === 0);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'},
];

const lol = streamers.filter((league) => league.gameMorePlayed === 'League of Legends'); 


//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name 
// Recomendamos usar la función .includes() para la comprobación.
const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'},
];

const letter = streamers.filter((letraU) => letraU.name.includes("u"));

// 5.5 Utiliza .filter() para generar un nuevo array con los streamers que
// incluyan el caracter 'Legends' en su propiedad .gamesMorePlayed 
// Recomendamos usar la función .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYÚSCULAS cuando
// .age sea mayor que 35.

const juegos = streamers.filter((juego) => {
    if(juego.gameMorePlayed.includes("Legends")) {
        if(juego.age > 35){
            juego.gameMorePlayed = juego.gameMorePlayed.toUpperCase();
        }    
        return juego;
    }

})