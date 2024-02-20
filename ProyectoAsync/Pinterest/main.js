import "./style.css";

// HEADER 

const headerTemplate = () => { // Retornará contenido de html en formato string
    return `
    <h1>I</h1>
    <input type="text" placeholder="Search" id="searchinput"/>
    <button id="searchbtn><img src="/icons/search.svg" alt="Search icon"/></button>
    <button id="darkmodebtn"><img src="/icons/dark.svg" alt="Dark mode icon"/ id="darkmodeicon"></button>
    <img 
        src="/images/profile.jpg" 
        alt="Profile image" 
        class=""profile__img"
    />
    `;
};

// Me hacen falta los iconos de modo noche y modo día llamados como se especifica


const themeSwitch = () => { // Accederá al body de nuestra página y quitará cla clase dark si este la tiene, la pondrá si este no la tiene,
                            // cada vez que la invoquemos estaremos cambiando el tema de nuestra página
    document.body.classList.toggle("dark");
};


const listeners = () => { // La usaremos para añadir todos los escuchadores de eventos a los elementos que previamente hemos creado para 
                          // añadirles funcionalidad.

    const darkmodebtn= document.querySelector("#darkmodebtn");
    darkmodebtn.addEventListener("click", () => {
        themeSwitch()
        const theme = document.body.classList.contains("dark");

        if (theme) {
            document.querySelector("#darkmodeicon").src = "/icons/light.svg";
        } else {
            document.querySelector("#darkmodeicon").src = "/icons/dark.svg";
        }
    });
};

const printHeaderTemplate = () => { // Seleccionará el header que previamente creamos en nuestro html e inyectará el contenido de 
                                    // la función template, además, justo después de haber inyectado el contenido añadiremos los
                                    // escuchadores de eventos.
    document.querySelector("header").innerHTML = headerTemplate();
    listeners();
};

printHeaderTemplate();


// FOOTER

const templateFooter = () => {
    return `
    <h4> Copyright 2024 - Pinterest - Pau Vidal`
}

const printFooterTemplate = () => {
    document.querySelector("footer").innerHTML = templateFooter()
}

printFooterTemplate()



// // ESTRUCTURA CARTAS IMGS


// // Crearemos una estructura para las cartas mediante una función, así podremos reutilizarlo tantas
// // veces como necesitemos, las variables que estamos usando, como comprobaremos más adelante, 
// // es porque la API nos devuelve así los datos. Si lo estuviéramos haciendo de 0 habría que comprobar
// // como vienen esos datos.
const cardTemplate = (item) => {
     return `
     <li class="gallery-item" style="background-image: url(${item.urls.regular}); border:10px solid ${item.color}">
        <div class="info">
         <div class="save-btn">
             <button>Guardar</button>
         </div>
         <div class="links">
             <a href=${item.links.html} class="full-link">${item.links.html}</a>
             <div>
                 <a href=${item.urls.full} target="_blank" class="links-icon">
                 <img src="/icons/upload.svg" alt="Upload Icon">
                 </a>
                 <a href="#null" class="links-icon">
                 <img src="/icons/more.svg" alt="More Icon">
                 </a>
             </div>
         </div>
     </div>
     </li>
     `
 };


// // PETICIÓN


 import { createApi } from 'unsplash-js'

 const unsplash = createApi({
     accessKey: import.meta.env.VITE_ACCESS_KEY,
 });

 const searchPhotos = async (keyword) => {
     const images = await unsplash.search.getPhotos({
         query: keyword,
         page: 1,
         perPage: 30,
     });
     return images
 }


 // PINTAR LAS CARTAS

 const galleryTemplate = () => {
     return `
     <ul class="gallery"></ul>`
 };


 const printItems = (items) => {
     const gallery = document.querySelector(".gallery");
     gallery.innerHTML = "";
     for (const item of items) {
         gallery.innerHTML += cardTemplate(item)
     }
 };

 const galleryListeners = async () => {
     const input = document.querySelector("#searchinput");
     const btn = document.querySelector("#searchbtn");
     btn.addEventListener("click", async () => {
         const images = await searchPhotos(input.value)
         printItems(images.response.results)
     });
};

 const printTemplate = async () => {
     document.querySelector("main").innerHTML = galleryTemplate();
     galleryListeners();

     const images = await searchPhotos("moon");
     printItems(images.response.results)
 };

printTemplate();


