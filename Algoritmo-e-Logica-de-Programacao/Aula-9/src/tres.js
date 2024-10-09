/*Alterar o programa do Exercício 2 para imprimir no console a
nota final. A nota final é calculada:
pesoP1 * notaP1 + pesoP2 * notaP2 + pesoProjeto * notaProjeto.*/

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
    
let nfinal = (disciplina.pesos.p1 * disciplina.notas.p1) + (disciplina.pesos.p2 * disciplina.notas.p2) + (disciplina.pesos.projeto * disciplina.notas.projeto);

console.log("Nota Final:", nfinal);