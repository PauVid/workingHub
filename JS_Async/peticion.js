
// No puedo usar un fetch sin el apoyo de un HTML
// Me permite pedir datos a un servidor

fetch("https://pokeapi.co/api/v2/pokemon/23")
    .then((res) => res.json())
    .then((res) => console.log(res);)
    .catch((error) => console.log(error));

const peticion = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/23");
    const response = await res.json();
}