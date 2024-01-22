//! TRY & CATCH
// El bloque try...catch es una estructura de control de flujo que se utiliza para manejar los errores en JavaScript
// Se utiliza para envolver una porción de código que puede generar un error y proporcionar una forma de manejar ese error.

// El bloque try contiene el código que se quiere ejecutar y el bloque catch contiene el código que se ejecuta 
// cuando se produce un error

try {
    // código que puede generar un error
} catch (error) {
    // código que maneja el error
}

// Cuando se ejecuta el código en el bloque try, si se produce un error, se detiene la ejecución del código y se salta al bloque catch

try {
    const x = y + 1; // esto generará un ReferenceError porque "y" no está definida
} catch (error) {
    console.error(error.message); // "y" is not defined
}

// El vloque catch también se puede opcpionalmente seguir de un bloque finally, que se ejecuta siempre al final, 
// independientemente de si se ha producido un error o no.

// El bloque finally es útil para ejecutar código que siempre debe ejecutarse, como cerrar una conexión a una
// base de datos o limpiar recursos 

try {
    // código que puede generar un error
} catch (error) {
    // código que maneja el error
} finally {
    // código que siempre se ejecuta
}
 