// Podemos utilizar el método writeFile() para que nuestro programa sea capaz
// de crear un nuevo archivo si este no existe e introducir contenido, o por el contrario,
// sustiuit el contenido de un archivo existente. 

// Este método recibirá en su primer parámetro el archivo, en su segundo parámetro el contenido
// que deseemos insertar y el tercero será una función.

// Esta función recibirá dos parámetros iguales a los del método readFile()



fs.writeFile("archivoNuevo.txt", "Esto es el contenido del archivo", (error, data) => {
    console.log("Ya se ha creado!");
});
