//! Spread operator

const alumno = {
    name: "Santi",
    aprobado: true,
};

const alumno2 = {...alumno}; // Con spread operator estamos haciendo una copia exacta de una variable

alumno2.name = "María";

// Para unir listas

const lista1 = ["elemento1", "elemento2", "elemento3", "elemento4"];
const lista2 = ["elemento5", "elemento6"];

const newArray = [...lista1, ...lista2];
                // ^Copiamos la lista1 y copiamos la lista2
// Ahora estamos fusionado los dos arrays

const newAlumno = {...alumno, suspenso: true};
                                //^ Ahora hemos creado un nuevo elemento en la lista alumno

//! Rest

const list = ["elemento1", "elemento2", "elemento3", "elemento4"];

// Anteriormente lo haríamos así

const [ el1, ...resto ] = lista;
    //  ^ Hemos cogido el primer elemento
            // ^ Y el resto de elemento los agrupamos


  

// Para poder hacer una suma y no sabemos cuantos serán

const sum = (...allNums) => {}

sum(32, 844, 293, 4932);
sum(10923, 32432,2 ,3223, 4, 5, 5,44, 2, 234);


