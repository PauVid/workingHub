// const NARANJITOS = [
//         {
//           texto: "¡Aprendiendo a cocinar nuevas recetas! 🍳",
//           user: {
//             imagen: "./Assets/adolescente.png",
//             nombre: "ChefGourmet",
//             arroba: "@GourmetChef123"
//           },
//           comentarios: [
//             {
//               texto: "Esa receta suena deliciosa. ¿Puedes compartirla?",
//               user: {
//                 imagen: "./Assets/estudiante.png",
//                 nombre: "FoodieAmigo",
//                 arroba: "@AmanteDeLaComida"
//               },
//               likes: 8
//             },
//           ],
//           likes: 42
//         },
//         {
//           texto: "Explorando lugares increíbles. #Aventuras",
//           user: {
//             imagen: "./Assets/hombre.png",
//             nombre: "TravelExplorer",
//             arroba: "@ExplorerTraveler"
//           },
//           comentarios: [
//             {
//               texto: "¿Cuál es tu lugar favorito hasta ahora?",
//               user: {
//                 imagen: "./Assets/adolescente.png",
//                 nombre: "CuriousMind",
//                 arroba: "@MindCurious"
//               },
//               likes: 15
//             },
//           ],
//           likes: 35
//         },

// ];
let NARANJITOS;
let USER;

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
          imagen: USER.imagen,
          nombre: USER.nombre,
          arroba: USER.arroba,
        },
        comentarios: [],
        likes: 0,
    };

    input.value = "";

    NARANJITOS.push(naranjito);
    
    const newArray = [naranjito];

    printNaranjitos(newArray);

};

const pageLogin = () => {
    const modal = document.createElement("div");
    const img = document.createElement("img");
    const formLogin = document.createElement("form");
    const formText = document.createElement("h1");
    const inputUserName = document.createElement("input");
    const inputPassword = document.createElement("input");
    const buttonLogin = document.createElement("button");

    modal.className = "login-page";
    img.src = "./Assets/estudiante.png";
    formLogin.className = "form-login";
    formText.textContent = "¡Bienvenido!";
    inputUserName.placeholder = "Paquito...";
    inputPassword.type = "password";
    inputPassword.placeholder = "********";
    buttonLogin.textContent = "Login";

    formLogin.addEventListener("submit", (e) => login(e, inputUserName, inputPassword, modal, formLogin));

    formLogin.append(formText)
    formLogin.append(inputUserName);
    formLogin.append(inputPassword);
    formLogin.append(buttonLogin);
    modal.append(img);
    modal.append(formLogin);
    document.body.append(modal);

};

const login = (e, inputUserName, inputPassword, modal, formLogin) => {
        // Elemento submit me va a provocar una recarga de la página pero nosotros
        // queremos evitarlo. ¿Cómo?
        
        // El método preventDefault de un evento me va a permitir no realizar el 
        // comportamiento por defecto que tenga el evento de manera implícita
        e.preventDefault();

        // Para loggear un usuario en nuestra API/ Nuestro servidor, necesitaré 
        // formular una petición POST y le necesito enviar un objeto stringiceado
        // es decir, un objeto convertido en string para poder tener formato JSON
        // del nombre de usuario y password.

        // Además, en la petición voy a tener que indicar el tipo de contenido
        // que le estoy enviando

        // Toda petición va con un fetch

        fetch("https://users-api-mu.vercel.app/api/v1/users/login", {
            method: "POST",
            body: JSON.stringify({
                nombre: inputUserName.value,
                password: inputPassword.value,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            // información de la respuesta al fetch
            if (res.status === 400) {
                const error = document.createElement("p");
                error.textContent = "Usuario o contraseña incorrectos";
                formLogin.insertBefore(error, inputUserName);
            }
            return res.json()
        })
        .then((res) => {
            // la información procesada

            if (res !== "Usuario no encontrado"){
            USER = {...res};
            modal.remove();
            printPublicar();
            getUsers();
            // el login ha sido satisfactorio
            }
        });
};

const init = () => {
    
    if(!USER) {
        pageLogin()
    } else {

        printPublicar();
        printNaranjitos(NARANJITOS);
    }

};

const getUsers = () => {
    fetch("https://users-api-mu.vercel.app/api/v1/users/login")
    .then((res) => res.json())
    .then((users) => getNaranjitos(users));
};

const getNaranjitos = (users) => {
    NARANJITOS = [
        {
            texto: "¡Aprendiendo a cocinar nuevas recetas! 🍳",
            user: users[0],
            comentarios: [
            {
            texto: "Esa receta suena deliciosa. ¿Puedes compartirla?",
            user: users[1]
            },  
            ],
            likes: 12,
        },
        {
            texto: "¡Aprendiendo a cocinar nuevas recetas! 🍳",
            user: users[2],
            comentarios: [
            {
            texto: "Esa receta suena deliciosa. ¿Puedes compartirla?",
            user: users[3]
            },  
            ],
            likes: 2140,
        },
        {
            texto: "¡Aprendiendo a cocinar nuevas recetas! 🍳",
            user: users[4],
            comentarios: [
            {
            texto: "Esa receta suena deliciosa. ¿Puedes compartirla?",
            user: users[5]
            },  
            ],
            likes: 10,
        },
    ];

    printNaranjitos(NARANJITOS);
};

init(); 
  


