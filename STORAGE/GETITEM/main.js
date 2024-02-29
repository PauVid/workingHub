localStorage.setItem("theme", "dark");

const objeto = {
    propiedad: "valor"
};

localStorage.setItem("objeto", JSON.stringify(objeto));

const h1 = document.createElement("h1");

h1.textContent = localStorage.getItem("theme") || "No tienes el theme guardado en el localStorage"
                                            //  ^ CON || SI EL VALOR FUESE NULL O NO ESTUVIERA DEFINIDO, ESCRIBIRÍA EL MENSAJE SIGUIENTE
document.body.append(h1);
