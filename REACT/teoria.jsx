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

import React, { useState } from "react";

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



//! REACT ES TOTALMENTE ASÍNCRONO

import React from "react";

const MyComponentAsync = () => {
    const [name, setName] = React.useState('Pau');

    React.useEffect(() => {
        console.log(name); // Pau
        setName('Cristian')
        console.log(name); // Saldrá Pau
    }, []);
    
    return (
        <div>Hello my name is {name}</div>
    )
}

export default App


// CONCEPTOS FLUJOS UNIDIRECCIONALES
// PADRE -> HIJO -> NIETO ...

// En REACT los elementos hijos no pueden lanzan el render, sinó que se lo
// tienen que pedir al padre. A través de un call-back. 

// PROPS (Properties)

// Son un mecanismo fundamental en React que permite pasar datos de un
// componente padre a un componente hijo como argumentos. Estos datos son
// inmutables (no se pueden modificar en el componente hijo) y se utilizan
// para personalizar o configurar la apariencia y el comportamiento
// de los componentes. 


// 1. Transmisión de datos entre componentes: Las props son utilizadas para
//    transmitir información desde un componente superior (padre) a un componente 
//    inferior (hijo). Esta comunicación es unidireccional.

// 2. Datos inmutables: Las props son de solo lectura en el componente hijo. 
//    Esto significa que el componente hijo no puede modificar directamente los
//    valores de las props; son pasadas como argumentos y deben ser tratados
//    como datos de solo lectura.

// 3. Configuración y personalización de componentes: Las props se utilizan para 
//    personalizar y configurar un componente según las necesidades del desarrollo.
//    Por ejemplo, podrían incluir información como texto, números, funciones
//    u objetos más complejos.


// Componente hijo

// Supongamos que tienes un componente Saludo que recibe un prop nombre y lo
// utiliza para mostrar un mensaje personalizado:

import React from "react";

const Saludo = (props) => {
    return <p>Hola, {props.nombre}</p>
};

export default Saludo;

// Componente padre

// Al utilizar este componente en otro lugar del código, puedes pasarle un valor
// para la prop del nombre:

import React from "react";
import Saludo from "./Saludo";

const App = () => {
    return (
        <div>
            <h1>¡Ejemplo de Props en React!</h1>
            <Saludo nombre="Juan"/>
            <Saludo nombre="María"/>
        </div>
    );
};

export default App;

// En el ejemplo anterior el componente Saludo recibe la prop nombre a través
// de props. Al usar <Saludo nombre="Juan"/> y <Saludo nombre="María"/> se 
// pasan diferentes valores a la prop nombre.
// Dentro del componente Saludo, se muestra un mensaje personalizado utilizando
// el valor de props.nombre.


// COMPONENTIZACIÓN

// La componentización es un principio clave en React que consiste en dividir la
// interfaz de usuario en componentes independientes y reutilizables. 
// Estos componentes encapsulan el comportamiento, la lógica y la interfaz de
// usuario de una parte específica de la aplicación. La idea principal es dividr 
// la aplicación en piezas más pequeñas y manejables, lo que facilita el mantenimiento,
// la reutilización y la comprensión del código.

// 1. Abstracción de la interfaz de usuario: Los componentes en React representan 
// partes individuales de la interfaz de usuario. Estos pueden ser simples (como un
// botón o un encabezado) o complejos(como un formulario o una lista).

// 2. Reutilización: Al dividir la aplicación en componentes, es posible reutilizarlos
// en múltiples lugares. Esto ayuda a evitar la duplicación de código y facilita la
// consisténcia en la apariencia y el comportamiento de la interfaz de usuario.

// 3. Separación de responsabilidades: Cada componente debe tener una responsabilidad
// clara y limitada. Esto hace que cada parte de la interfaz sea más fácil de entender,
// probar y mantener.

// Supongamos que estamos construyendo una lista de tareas pendientes. En lugar de
// tener todo el código relacionado con la lista en un solo lugar, podríamos 
// dividirlo en componentes más pequeños.

import React from "react";

const Tarea = ({tarea}) => {
    return <li>{tarea}</li>;
};

const ListaTareas = ({tareas}) => {
    return (
        <ul>
            {tareas.map((tarea, index) => (
                <Tarea key={index} tarea={tarea}/>
            ))}
        </ul>
    );
};

const App = () => {
    const tareas = ['Comprar víveres', 'Estudiar React', 'Hace ejercicio'];
    return <ListaTareas tareas={tareas} />;
};

export default App;


// Como podéis ver, los componentes no son más que funciones, en este caso,
// están todas en el mismo archivo para poder ver los diferentes componentes 
// o funciones de una manera más cómoda. Sin embargo, podemos separarlas y,
// de hecho, trabajaremos con ellas separadas, pero eso no cambiará el funcionamiento

// En el ejemplo anterior podemos ver cómo abstraer nuestro código para que
// en lugar de estar todo en el mismo lugar (cosa que podría resultar en menos código)
// lo tendremos repartido en componentes.

// ¿Por qué si esto nos genera más código es mejor?

// El hecho de componentizar nuestro código puede ayudarnos a la hora de la:
// REUTILIZACIÓN, ESCALABILIDAD y COMPRENSIÓN de nuestro código




// CHILDREN

// El término "children" en React hace referencia a uno de los props especiales
// que se pueden utilizar en los componentes de React. En React, los componentes pueden
// recibir datos a través de propiedades o props, y "Children" es uno de esos props que 
// se utiliza para pasar componentes, elemntos JSX o simplemente texto a un componente padre
// desde su uso en el componente hijo

// Componente Padre

function ParentComponent() {
    return (
        <div>
            <ChildComponent>
                <h1>Hola, soy un elemento hijo</h1>
                <p>Este es un párrafo dentro del componente hijo</p>
            </ChildComponent>
        </div>
    );
}

// Componente Hijo

function ChildComponent() {
    return(
        <div>
            <h2>Componente Hijo</h2>
            {props.children}
        </div>
    );
}

// En este ejemplo podemos ver cómo dentro de las etiquetas de nuestro componente
// hijo metemos un h1 y un p, esto, lo recogemos en el propio componente hijo
// como props.childrn, y para utilizarlo podemos usarlo con un JSX aplicando
// las llaves {props.children}




// EVENTOS

// Podremos asignar manejadores de eventos a elementos JSX de manera similar a
// cómo lo harías en HTML, pero utilizando camelCase para los nombres de los eventos.

function MyComponent() {
    function laFuncionAEjecutar() {
        console.log('Has hecho click');
    }
    
    return (
        <button onClick={laFuncionAEjecutar}>
            Haz click aquí
        </button>
    );
}


// Funciones anónimas o flecha para enviar argumentos

// A veces, es posible que necesites pasar argumentos a tus funciones manejadores de eventos.
// Puedes hacerlo utilizando funciones anónimas o funciones de flecha

function MyComponent() {
    function saludar(name) {
        console.log(`Hola, ${name}`);
    }

    return (
        <button onClick={() => saludar('María')}>
            Saludar
        </button>
    );
}



// PRACTICAR CON EVENTOS

// Hay muchos eventos, como en JavaScript Vanilla, así que lo mejor será practicar
// con ellos, más adelante, os propondremos prácticas para ellos pero no esperéis,
// probad alguno de estos eventos:

// 1. onClick -> Este evento se desencadena cuando se hace click en un elemento.

// 2. onChange -> Este evento se utiliza comunmente en elementos de entrada, como
            //    input o select, y se dispara cuando su valor cambia.

// 3. onSubmit -> Se utiliza en formularios y se activa cuando se envía el formulario

// 4. onMouseOver y onMouseOut -> Estos eventos se disparan cuando el puntero
            //                    del mouse se coloca sobre un elemento y cuando sale
            //                    de ese elemento, respectivamente.