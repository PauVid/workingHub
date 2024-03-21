// Archivo character.routes.js dentro de la carpeta routes

const express = require('express');
const Character = require('../models/Character');
const router = express.Router();

router.get('/', async (req, res, next) => { // ¿Porque '/'? 1
    try {
        const characters = await Character.find();
        return res.status(200).json(characters)
    } catch (error) {
        return next(error)
    }
});

module.exports = router;

// 1. El cliente hace una request a http://localhost:3000/characters
//    El código de index.js llega al punto server.use('/characters', characterRoutes) como 
//    hay coincidencia realiza una llamada characterRoutes

// Al entrar en character.routes.js ya se ha considerado la parte /characters de la
// ruta, por lo que el archivo empieza en su nueva base /.

// Se busca el endpoint GET, POST, PUT o DELETE que coincida con la nueva base de ruta y se 
// lanza la función Response o Next para continuar o terminar el proceso en ese controlador
// en nuestro caso reconoce una petición GET y ejecuta la llamada la base de datos para devolver
// todos los personajes.

// UTLIZANDO POST PARA CREAR UN DOCUMENTO EN NUESTRA DB 

// Para crear nuestra primera ruta POST nos situamos en character.routes.js y creamos nuestro endpoint.

router.post('/create', async (req, res, next) => {
    try {
        //Crearemos una instancia de character con los datos enviados
        const newCharacter = new Character({
            name: req.body.name,
            age: req.body.age,
            alias: req.body.alias,
            role: req.body.role
        });

        //Guardamos el personaje en la DB
        const createdCharacter = await newCharacter.save();
        return res.status(201).json(createdCharacter);
    } catch (error) {
        //Lanzamos la función next con el error para que lo gestione Express
        next(error);
    }
});

module.export = router;


// UTILIZANDO DELETE PARA ELIMINAR UN DOCUMENTO DE LA DB

// No es correcto enviar bdoy a nuestro endpoint de tipo DELETE, por lo tanto utilizaremos
// un parámetro de ruta /:id para identificar el elemento que queremos eliminar de nuestra DB

//Empezaremos creando un endpoint del tipo delete en nuestro character.routes.js

router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        //No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
        await Character.findByIdAndDelete(id);
        return res.status(200).json('Character deleted!');
    } catch (error){
        return next(error);
    }
});


// UTILIZANDO PUT PARA EDITAR UN DOCUMENTO DE NUESTRA DB

// El método put es el más complejo de todos los que componen el CRUD, debido
// a que suele ser una mezcla de un delete y de un post. Necesitamos un id que 
// recogeremos con req.params como hicimos en el delete y por otro lado tenemos
// que menadar información en el body, como hicimos en el post. 

// Obligatoriamente se debe mandar el id en el body

// Como ya sabemos crear endpoints de tipo POST en nuestro servidor, vamos a 
// editar un personaje dada su id utilizando los métodos PUT

// Para ello, crearemos un nuevo endpoint /characters/edit/:id en que 
// enviaremos la id y los campos que queremos modificar.

router.put('/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params //Recuperamos el id de la url
        const characterModify = new Character(req.body) //instanciamos un nuevo Character con la información del body
        characterModify._id // añadimos la propiedad _id al personaje creado
        const characterUpdated = await Character.findByIdAndDelete(id, characterModify)
        return res.status(200).json(characterUpdated) //este personaje que devolvemos es el anterior a su modificación
    } catch (error) {
        return next(error)
    }
});

