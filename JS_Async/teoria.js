//! PROMESAS

// Estados de promesas

//1. Pending: El estado inicial de una promesa. 
//      Significa que la operación aún no se ha 
//      completado, pero podría estar en proceso
//      o esperando su resolución

//2. Fullfilled: La promesa se resuelve exitosamente
//      y produce un valor.

//3. Rejected: La promesa se revuelve, pero ocurre
//      un error, y se produce un valor de rechazo.


//Crear nuestra propia promesa

const miPromesa = new Promise((resolve, reject) = {
    // Simulando una tarea asíncrona, por ejemplo, 
    // una solicitud de red
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve("Exito: Datos obtenidos correctamente");
        } else {
            reject("Error: No se pudieron obtener los datos");
        }
    }, 2000); //Simulación de 2 segundo de espera
}); 

//Resolución de Promesas

// Para consumir el resultado de una promesa, puedes encadenar 
// métodos then y catch. El método then se jecuta cuando la 
// promesa se cumple (resuelve con éxito), y el método catch
// se ejecuta cuando la promesa se rechaza (ocurre un error)

miPromesa
    .then((resultado) => {
        console.log(resultado); // "Éxito: datos obtenidos correctamente"
    })
    .catch((error) => {
        console.error(error); // "Error: No se pudieron obtener los datos"
    });

//Async Await

// Nos permite resolver promesas con una sintáxis más amable. 
// ASYNC nos servirá para indicar que algún fragmento de código
// será asíncrono y la palabra AWAIT para hacer una pequeña pausa
// o STOP, para así no pasar a la siguiente línea de código hasta
// que no se resuelva ese proceso asíncrono

async function obtenerDatos() {
    //código asíncrono
    const resultado = await algunaOperaciónAsincrona();
    return resultado
};

//Fetch

// Es una función de JavaScript que se utiliza para realizar solicitudes HTTP
// Es una forma moderna y más sencilla de realizar solicitudes HTTP en 
// comparación con la función XMLHttpRequest tradicional

fetch("https://example.com/api/login", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
});

// Fetch devuelve una promesa que se cumple con un objeto Response que
// representa la respuesta del servidor. Luego, se puede utilizar
// el método THEN para procesar la respuesta y el método CATCH
// para manejar cualquuier error

fetch("https://example.com/api/login")
    .then((response) => {
        // procesar la respuesta del servidor
    })
    .catch((error) => {
        // manejar cualquier error
    })

//

