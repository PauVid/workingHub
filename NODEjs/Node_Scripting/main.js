// instalamos fs escribiendo en el terminal: npm i fs

// const fs = require("fs");


// fs.writeFile("nuevoArchivo.txt", "Esto es lo primero que he escrito en mi archivo", (err, data) => { // ESTO HA CREADO UN ARCHIVO NUEVO EN MI CARPETA!!!
//     console.log("Se ha escrito correctamente");

//     fs.readFile("nuevoArchivo.txt", "utf-8", (error, data) => { // ESTA LEE EL ARCHIVO QUE HE CREADO ANTES!!!
//         console.log(data);
//     });
// });


// const arrayCoches = [
//     {
//         marca: "Peugeot",
//         precio: 20034,
//         color: "azul"
//     },
//     {
//         marca: "Mazda",
//         precio: 20034,
//         color: "rojo"
//     },
//     {
//         marca: "Ferrari",
//         precio: 150000,
//         color: "Rojo"
//     },
//     {
//         marca: "Volkswagen",
//         precio: 20034,
//         color: "blanco"
//     },
//     {
//         marca: "Seat",
//         precio: 20034,
//         color: "negro"
//     },
// ];

// fs.writeFile("coches.json", JSON.stringify(coches.csv), (error, data) => {
//     console.log("Se ha escrito correctamente");
// });

const fs = require("fs");

fs.readFile("coches.json", "utf-8", (err, data) => { 
    const coches = JSON.parse(data);
    
    let stringToCsv = "";

    for (const key in coches[0]) {
        stringToCsv += `${key},`;
    }

    stringToCsv = stringToCsv.slice(0, stringToCsv.length -1);
    stringToCsv += "\n";


    for (const coche of coches) {                   //                v                //
        stringToCsv += `${coche.marca}, ${coche.precio ? coche.precio : "no hay stock"}, ${coche.color} \n`
    }
                                                    //  ^ si no tubieramos alguno de los datos añadiríamos un ternario como el de arriba



    fs.writeFile("concesionario.csv", stringToCsv, (err, datos) =>{
        console.log("Procesado Correctamente");
    });
}); 



// ¿Cómo puedo obtener las claves de un objeto?
// for in
// object.keys

