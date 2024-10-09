/*Desestruturar para as variáveis p1 e p2 os dois primeiros
elementos do array que está na propriedade pesos do objeto que está na
disciplina e imprimir no console.*/

const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    pesos: [0.25,0.35,0.4],
    notas: [8.2,7.5,9]
};

const {pesos: [p1, p2]} = disciplina;

console.log("Peso P1:", p1);
console.log("Peso P2:", p2);