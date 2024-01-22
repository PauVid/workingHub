// Para realizar un export de un js a otro js usamos "export" delante de una const

export const person = {
    name: "Stephen",
    surname: "Strange",
};

// Ahora vamos a otro fichero JS y escribimos

import {person} from "./nombredelarchivo";

// En este punto tenemos de manera aislada una parte de un script que podemos
// utilizar al exportarlo en cualquier fichero JavaScript que tengamos en nuestra aplicación

//* Podemos exportar e importar funciones del mismo modo, añadiendo export en la función 
//* y después en el fichero en cuestión añadiendo import.

//! Hay otro método llamado export default
//* Esto lo que hará es, por un lado, permitornos importar sin destructuring la información que exportemos
//* de esta forma y, por otro lado, habilitar el renombrado de esta información en el fichero donde lo importemos.

const DEV_LAN = "Javascript";
export default DEV_LAN;

//

import DEV_LAN, {person, sayHello} from "./nombredelarchivo";

// De este modo podemos exportar un script directamente con el nombre de la constante

//! Por convención, la información exportada por defecto es la información principal de nuestro fichero, siendo las exportadas sin más "opcionales"
//! o utilidades adicionales al mismo fichero

// Podemos utilizar export de la siguiente manera para exportar igual que si fuera un default

import DEV_LAN, {person as personObject, sayHello} from "./nombredelarchivo";

// la palabra "as" nos permite asignar un alias a la constante importada, pudiendo utilizar su alias en nuestro fichero.

//! Hay que tener en cuenta que si renombramos una constante a través del import no podremos usar su nombre original
//! en ese fichero.