
                            //v Resolución v Eyección
const promesa = new Promise((resolve, reject) => {
    const interruptor = true;
    setTimeout(() => {
        if (interruptor) {
            resolve("Esto es un mensaje de que todo ha ido bien")
        } else {
            reject("Esto es un mensaje de que todo ha ido MAL")
        }
    }, 2000);
});

console.log(promesa)

// .then .catch

promesa.then((res) => console.log(res)); 
