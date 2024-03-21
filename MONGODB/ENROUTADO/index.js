// const http = require('http');

// const requestHandler = (req, res) => {
//     if (req.url === '/hello') {
//         res.setHeader('Content-Type', 'text/json');
//         res.writeHead(200);
//         res.end('Hello from NodeJs!')
//     }
// };

// const PORT = 3000;
// const server = http.createServer(requestHandler);

// server.listen(PORT, () => {
//     console.log(`Server started in http://localhost:${PORT}`);
// });


// ¿QUÉ HACE EXPRESSJS?

// ExpressJS analiza la ruta y si hay coincidencia con la ruta definida 
// en la función server.use entra en la función y ejecuta el código.

// Creación de Endpoints

// El siguiente paso va a ser crear una nueva ruta

// server.use('/movies', (req, res) => {
//     const movies = ['Harry Potter', 'Titanic', 'El Rey León'];
//     res.send(movies);
// });

// No aparecen debido a que NodeJs ejecuta su código de arriba a abajo
// y cuando encuentra el callback para server.use('/', () => {}) no estamos
// indicando de ninguna manera que debe cambiar a otra ruta, por lo que entra
// en esta ruta y ejecuta el código de la función

// Para solucionar este problema ExpressJS tiene la función Router() que nos
// ayudará a gestionar todas nuestra rutas o endPoints

// GET - Recopila datos del servidor y los devuelve a los usuarios
// POST - Envía información al servidor y crea nuevos elementos en la base datos.Envía
// PUT - Envía información al servidor y edita un elemento de la base de datos
// DELETE - Elimina un elemento de la base de datos


// Ahora vamos a utilizar el Router de ExpressJS

const express = require('express');

const PORT = 3000;
const server = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello!');
});

router.get('/movies', (req, res) => {
    const movies = ['Harry Potter', 'Titanic', 'El Rey León'];
    res.send(movies);
});

server.use('/', router);

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});