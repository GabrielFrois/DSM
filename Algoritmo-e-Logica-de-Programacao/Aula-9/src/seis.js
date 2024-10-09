/*Desestruturar as propriedades inicio e fim do objeto que
está na variável contrato e imprimir no console*/

const contrato = {
    inicio: "01/02/1995",
    fim: "30/07/1997",
    tipo: "locação",
    valor: "123.45"
};

const {inicio, fim} = contrato;

console.log("Início:", inicio);
console.log("Fim:", fim);