
// Podemos utilizar el método readFile() para que nuestro programa sea capaz de interpretar
// el contenido de un archivo y utilizarlo.

// Este método recibirá en su primer parámetro el archivo, en su segundo parámetro la codificación
// y el tercero será una función.

// Esta función recibirá dos parámetros, el primero siempre será el error y el segundo el contenido
// del archivo, ambos se pueden llamar como queramos. 

fs.readFile("archivo.txt", "utf-8", (error, data) => {
    console.log(data)
});
