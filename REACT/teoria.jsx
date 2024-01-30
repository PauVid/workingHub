// REACT TEORIA

//! JSX es una extensión de sintaxis utilizada
// en React que permite escribir estructuras similares a 
// HTML dentro del código JavaScript. JSX simplifica la creación
// de interfaces de usuario y facilita la definición de
// componentes en React

//? CARACTERÍSTICAS PRINCIPALES DE JSX

// 1. Sintaxis familiar y legible: JSX se parece mucho a HTML,
// lo que lo hace más fácil de entender y escribir para los
// desarrolladores acostumbrados a trabajar con código HTML

// 2. Integración con JavaScript: Permite la integración
// de expresiones JavaScript dentro de las etiquetas JSX 
// utilizando llaves {}. Esto permite la dinámica y la 
// lógica de JavaScript dentro de los elementos JSX

//3. Facilita la creación de componentes: Al proporcionar
// una sintaxis similar a HTML, JSX facilita la creación de 
// componentes React y su renderización en el DOM.


// Supongamos que tenemos un componente simple en React
// que meustra un encabezado y un párrafo.

import React from "react";

const MiComponente = () => {
    const nombre = 'Usuario';
    return (
        <div>
            <h1>Hola, {nombre}!</h1>
            <p>Bienvenido a mi aplicación</p>
        </div>
    );
};

export default MiComponente;


// En el ejemplo anterior, el código entre los paréntesis () es JSX.
// La estructura HTML dentro de la función return es lo que se conoce
// como JSX.

// Se utiliza la sintaxis {nombre} para insertar la variable nombre en
// el texto del ecabezado. Aunque parece HTML, el código se compila
// a llamadas de funciones de React para crear los elementos 
// correspondientes del DOM.


// Proceso de transformación de JSX

//Antes de que el código JSX se ejecute en el navegador, pasa por un 
// proceso de transformación llamado "transpilación". Este proceso,
// se lleva a cabo generalmente utilizando herramientas como Babel,
// que convierte el código JSX a JavaScript válido que el navegador
// puede entender (No es un proceso que tengamos que realizar a mano nosotros)

//? TRANSPILACIÓN
// Por ejemplo, el código JSX anterior que transpilaría a algo similar a esto:

import React from "react";

const MiComponente = () => {
    const nombre = 'Usuario';
    return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hola, ', nombre, '!'),
    React.createElement('p', null, 'Bienvenido a mi aplicación.')
    );
};

export default MiComponente;

// Este proceso muestra cómo JSX se traduce a llamada explícitas a 
// React.createElement(), donde se pasa el tipo de elemento, sus propiedades
// y sus hijos.

// En resumen, JSX es una extensión de sintaxis en React que simplifica
// la creación de interfaces de usuario al permitir la combinación de HTML
// y JavaScript de manera más intuitiva y legible, aunque en última instancia, 
// se transforma a llamadas de funciones de React para representar los 
// elementos en el DOM


//! APROXIMACIÓN FUNCIONAL
// COMPONENTES

import React from "react";


// 1. Mi componente se define en una función
const MyComponent = () => {
// 2. Memoria de datos
    const [value, setValue] = React.useState('Pau');
    // 3. Mi componente retorna un elemento de React
    return (
        <div>
        <h1> Hola Mundo</h1>
        </div>
    );
};

export default MyComponent;