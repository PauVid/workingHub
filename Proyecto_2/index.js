const NARANJITOS = [
        {
          texto: "¡Aprendiendo a cocinar nuevas recetas! 🍳",
          user: {
            imagen: "./Assets/adolescente.png",
            nombre: "ChefGourmet",
            arroba: "@GourmetChef123"
          },
          comentarios: [
            {
              texto: "Esa receta suena deliciosa. ¿Puedes compartirla?",
              user: {
                imagen: "./Assets/estudiante.png",
                nombre: "FoodieAmigo",
                arroba: "@AmanteDeLaComida"
              },
              likes: 8
            },
          ],
          likes: 42
        },
        {
          texto: "Explorando lugares increíbles. #Aventuras",
          user: {
            imagen: "./Assets/hombre.png",
            nombre: "TravelExplorer",
            arroba: "@ExplorerTraveler"
          },
          comentarios: [
            {
              texto: "¿Cuál es tu lugar favorito hasta ahora?",
              user: {
                imagen: "./Assets/adolescente.png",
                nombre: "CuriousMind",
                arroba: "@MindCurious"
              },
              likes: 15
            },
          ],
          likes: 35
        },

];

const user = {
    imagen: "./Assets/hombre.png",
    nombre: "UsuarioYo",
    arroba: "@usuarioYo"
};


const printNaranjitos = (naranjitos) => {

    const naranjitosSection = document.querySelector("#naranjitos");

    // naranjitosSection.innerHTML = "";

    for (const naranjito of naranjitos) {
        
    // Crear los elementos
    const imgUser = document.createElement("img");
    const userName = document.createElement("h3");
    const arroba = document.createElement("p");
    const divUser = document.createElement("div");
    const text = document.createElement("p");
    const coments = document.createElement("img");
    const numberOfComents = document.createElement("p");
    const divComents = document.createElement("div");
    const likes = document.createElement("img");
    const numberOfLikes = document.createElement("p");
    const divLikes = document.createElement("div");
    const divInfo = document.createElement("div");
    const divNaranjito = document.createElement("div");

    // Metemos la información dentro de cada elemento
    imgUser.src = naranjito.user.imagen;
    imgUser.alt = naranjito.user.nombre;
    userName.textContent = naranjito.user.nombre;
    arroba.textContent = naranjito.user.arroba;
    divUser.className = "userInfo";
    text.textContent = naranjito.texto;
    text.className = "textoPrincipal";
    coments.src = "./Assets/Comentarios/comentario.png";
    numberOfComents.textContent = naranjito.comentarios.length;
    likes.src = "./Assets/Comentarios/amor.png";
    numberOfLikes.textContent = naranjito.likes;
    divInfo.classList.add("info");
    

    // Añadimos funcionalidad
    likes.addEventListener("click", (e) => giveLike(e.target, numberOfLikes, naranjito)); 

    // Añadir los elementos al HTML
    divUser.append(imgUser);
    divUser.append(userName);
    divUser.append(arroba);

    divComents.append(coments);
    divComents.append(numberOfComents);

    divLikes.append(likes);
    divLikes.append(numberOfLikes);

    divInfo.append(divComents);
    divInfo.append(divLikes);

    divNaranjito.append(divUser);
    divNaranjito.append(text);
    divNaranjito.append(divInfo);

    naranjitosSection.append(divNaranjito);

    };
};

const giveLike = (imagen, numberOfLikes, naranjito) => {
    if (!imagen.className.includes("clickado")) {
    naranjito.likes++;
    numberOfLikes.textContent = naranjito.likes;
    imagen.src = "./Assets/Comentarios/corazon.png";
    imagen.classList.add("clickado");
    }
};

printNaranjitos(NARANJITOS);

const printPublicar = () => {
    const publicar = document.querySelector("#publicar");
    const input = document.createElement("input");
    const button = document.createElement("button");
    const img = document.createElement("img")

    img.src = "./Assets/Comentarios/comentario.png";
    input.placeholder = "Escribe un naranjito...";
    button.addEventListener("click", () => postNaranjito(input))
    window.addEventListener("keypress", (e) => {
        if(e.key === "Enter") {
            postNaranjito(input);
        }
    });

    publicar.append(input);
    publicar.append(button);
    button.append(img)
};

const postNaranjito = (input) => {

    const naranjito = {
        texto: input.value,
        user: {
          imagen: user.imagen,
          nombre: user.nombre,
          arroba: user.arroba,
        },
        comentarios: [],
        likes: 0,
    };

    input.value = "";
    NARANJITOS.push(naranjito);
    
    const newArray = [naranjito];

    printNaranjitos(newArray);

};

printPublicar();
