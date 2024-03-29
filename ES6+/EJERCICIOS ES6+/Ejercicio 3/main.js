//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

const copiaPointsList = [...pointsList];

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copiaToy = [...toy];

//3.3 Dado los siguientes arrays, crea un nuevo array juntándolos usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointList2 = [54, 87, 99, 65, 32];

const unionPoints = [...pointsList, ...pointList2];

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const fusionToys = [...toy, ...toyUpdate];

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operators.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const copiaColors = [...colors];

const copiaColors.splice(2, 1); 

