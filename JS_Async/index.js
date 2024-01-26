const nuestraPromesa = new Promise((ressolve, reject) => {
    setTimeout(()=> {
        if (5 > 4) {
            ressolve("Esto es un mensaje de éxito");
        } else {
            reject("Esto es un mensaje de error");
        }
    }, 3000);
});
console.log(nuestraPromesa); 

nuestraPromesa
    .then((res) => console.log(res))
    .catch((err) => console.log(err)); 
    // No va a tardar nada 
// 
const peticion = async () => {
    try {
        const res = await nuestraPromesa;
        // Va a tardar 3 segundos mínimo a ejecutarse
        console.log(res);
    } catch (error) {

    }
}

peticion();


async function peticion2 () {

} 