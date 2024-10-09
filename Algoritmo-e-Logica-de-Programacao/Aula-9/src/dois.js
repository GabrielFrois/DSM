/*Complete o código para imprimir no console as notas p1, p2 e
projeto do objeto que está na variável disciplina.*/

const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    pesos: {
    p1: 0.25,
    p2: 0.35,
    projeto: 0.4
    },
    notas: {
    p1: 8.2,
    p2: 7.5,
    projeto: 9
    }
};
    
console.log("P1:", disciplina.notas.p1);
console.log("P2:", disciplina.notas.p2);
console.log("Projeto:", disciplina.notas.projeto);