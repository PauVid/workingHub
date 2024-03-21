require("dotenv").config();

// nos traemos el módulo express que previamente hemos instalado
const express = require("express");
const {connect} = require('./config/db')

connect()
//lo ejecutamos y guardamos en la variable app
const app = express();


// todas las rutas que no tengan respuesta entrarán por aquí

app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found")
})

//utilizamos nuestro servidor para ponerlo a escuchar con el método listen, 
//le tenemos que pasar un puerto en el primer parámetro y un callback con 
//la función a ejecutar cuando se ponga a escuchar
app.listen(3000, () => {
    console.log("http://localhost:3000");
});

const PORT = 3000;
const server = express();

const Character = require('./models/Character');
const router = express.Router();

router.get('/characters', async (req, res) => {
    return Character.find()
    .then(characters => {
        //Si encontramos los personajes, los devolvemos al usuario
        return res.status(200).json(characters);
    })
    .catch(err => {
        //Si hay un error, enviaremos por ahora una respuesta de error
        return res.status(500).json(err);
    })
})

server.use('/', router);
server.listen(PORT, () => {
    console.log('Server running in http//localhost:${PORT}');
});


router.get('/characters', async (req, res) => {
    try {
        const characters = await Character.find();
        return res.status(200).json(characters);
    } catch (err) {
        return res.status(500).json(err);
    }
});


// Una vez tenemos el primer endpoint, vamos a hacer otro para encontrar un personaje
// por su ID, que llamaremos /characters/:id y recibirá la información del parámetro ID 
// por medio de req.params:

router.get('/characters/:id', async (req, res) => {
    // Para escontrar aun personaje con su alias
    // '/characters/alias/:alias
    const id = req.params.id;
    try {
        const character = await Character.findById(id);
        if (character) {
            return res.status(200).json(character);
        } else {
            return res.status(400).json("No character found by this id");
        } 
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get('/characters/age/:age', async (req, res) => {
    // Para escontrar aun personaje con su alias
    // '/characters/alias/:alias
    const {age} = req.params;
    try {
        const characterByAge = await Character.find({ age: { $gt:age }} );
        if (character) {
            return res.status(200).json(characterByAge);
        } else {
            return res.status(400).json("No character found by this id");
        } 
    } catch (err) {
        return res.status(500).json(err);
    }
});

// Al igual que hemmos usado $gt tenemos a nuestra disposición otros condicionales:

$it (less than) //encontraremos valores menores al que usamos
$ite (less than equal) //encontraremos valores menores o igual al usado
$gt (greater than) // encontraremos los valores mayores al usado
$gte (greater than equal) //encontraremos los valores mayores e iguales al usado


//FUNCIÓN NEXT

// EN EXPRESS todos los callbacks para las funciones de rutas reciben dos parametros
// Request y Response (req, res) => {} 
// pero hay una más que es Next, este último gran argumento irá siempre en tercera 
// posición dentro los callbacks de express

(req, res, next) => {}

req - // nos permite acceder a la información que el cleinte envía al servidor, como las cookies, los query o los request params
res - // nos permite modificar las respuestas y enviar datos al cliente tras completar un procecso a través del status o las funciones send o json
next - // si llamamos esta función sin enviar nada como argumento, Express avanzará hasta el siguiente punto de control de la aplicación(middleware)
        // y si enviamos un argumento de tipo error se lanzará el controlador de errores express.

// En express, next es una función que se pasa como argumento a los middlewares o manejadores de rutas para indicarle a express
// que ocntinúe con la siguiente función o middleware en la cadena.

// Cuando un middleware o manejador de ruta llama a next(), Express ejecutará la siguiente función en la cadena de middlewares
// o manejadores de rutas que se han registrado para la ruta actual. Si ningñun otro middleware o manejador de ruta llama a next()
// la solicitud se considera terminada y se envía una respuesta al cliente.

// Aquí hay un ejemplo de código de un middleware simple que verifica si el usuario está autenticado y, de lo contrario redirige 
// a la página de inicio de sesión:

function autheticateMiddleware(req, res, next) {
    if (!req.user) {
        return res.redirect('/login');
    }
    next();
}

// CONTROLADOR DE ERRORES DE EXPRESS

// Para crear el controlador de errores de Express, tendremos que añadir un quarto parametro
// al callback de Express, que corresponderá con el Error(err) e irá en primer lugar

server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

// Como dijimos nuestro código se lanzará de arriba hacia abaho cuando nuestro servidor analace 
//una request, por lo que este middleware se añadirá al final de todo nuestro código en index.js

// De esta forma, todo el nuevo código que añadamos a nuestro servidor funcionará hasta llegar al 
// controlador de errores si no se ha resuelto previamente, ya sea por el uso de next() enviando un
// error debido a nuestro código, o porque no encuentra la ruta adecuada.

const express = require('express');

const PORT = 3000;
const server = express();

// Aquí añadiremos el nuevo código, dejando el controlador de errores en último lugar

// Crearemos un middleware para cuando no encontremos la ruta que busquemos

server.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error); //Lanzamos la función next() con un error
});

// Si se lanza la función

server.listen(PORT, () => {
    console.log('Server running in http://localhost:${PORT}');
});

// Con esto, tenemos creado nuestro control de errores completo para express.
// A partir de ahora podremos crear un nuevo error y enviarlo al controlador mediante la función next.

¡RECUERDA!

// No debes crear otra función en tu código que tenga cuatro argumentos como el controlador de errores,
// ya que si lo haces se pisarán entre ellos y tendrás side effects inesperados.


