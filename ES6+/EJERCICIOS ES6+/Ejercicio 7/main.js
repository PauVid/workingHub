// Dado el siguiente array, haz una suma de todas las notas de los examenes de
// los alumnos usando la función .reduce()

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martinez Lorenzo', score: 6},
    {name: 'Mercedes Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10},
];

const totalScore = exams.reduce(
    (accumulator, notas) => accumulator + notas.score, 0
);


//7.2 Dado el mismo array, haz una suma de todas las notas de los exámenes de los
// alumnos que estan aprobados usando la función reduce()

const totalAprovados = exams.reduce((accumulator, exam) => {
    if (exam.score >= 5) {
        return accumulator + exam.score;
    };
    return accumulator
}, 0);


//7.3 Dado el mismo array, haz la media de las notas de todos los exámenes .reduce()

const media = exams.reduce(
    (accumulator, mediaNotas) => accumulator + mediaNotas.score, 0) / mediaNotas.length;

