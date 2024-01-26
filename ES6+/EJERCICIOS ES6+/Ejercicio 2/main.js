//2.1 En base al siguiente JavaScript, crea variables en base a las propiedades
// del objeto usando object destructuring e imprímelas por consola. 
// Cuidado, no hace falta hacer destructuring del array, solo del objeto.

const game = {
    title: "The last of us 2", gender: ["Action", "Zombie", "Survival"], year: 2020,
};

const {title, gender, year} = game;

console.log(`${title} ${gender} ${year}`);

//2.2 En base al siguiente JavaScript, usa destructuring para crear 3 variables
// llamadas fruit1, fruit2, fruit3, con los valores del array. Posteriomente
// imprímelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange',];

const [fruit1, fruit2, fruit3] = game;

console.log(`${fruit1} ${fruit2} ${fruit3}`);

//2.3 En base al siguiente JavaScript, usa destructuring para crear 2
// variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger',}
};

const {name: nameAnimal, race} = animalFunction();

console.log(`${nameAnimal} ${race}`);

//2.4 En base al siguiente JavaScript, usa destructuring para crear las 
// variables name y itv con sus respectivos valores. Posteriormente crea
// 3 variables usando igualmente el destructuring para cada uno de los años
// y comprueba que todo está bien imprimiéndolo.

const car = {name: 'Mazda 6', itv[2015, 2011, 2020]}

const {name, itv};

const [year1, year2, year3] = itv;

console.log(`${name} ${itv} ${year1} ${year2} ${year3}`);