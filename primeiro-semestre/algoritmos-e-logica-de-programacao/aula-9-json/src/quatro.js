/*Refazer o Exercício 3 usando o objeto que está na variável
disciplina a seguir. Observe que as notas e pesos estão num array.*/

const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    pesos: [0.25,0.35,0.4],
    notas: [8.2,7.5,9]
    };    
    
let nfinal = (disciplina.pesos[0] * disciplina.notas[0]) + (disciplina.pesos[1] * disciplina.notas[1]) + (disciplina.pesos[2] * disciplina.notas[2]);

console.log("Nota Final:", nfinal);