localStorage.setItem("theme", "dark");

const objeto = {
    propiedad: "valor"
};

localStorage.setItem("objeto", JSON.stringify(objeto));

const button = document.createElement("button");
button.textContent = "Botón cambiador de localStorage";

button.addEventListener("click", () => {
    localStorage.setItem("theme", "light");
});

document.body.append(button);