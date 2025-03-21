const salario = 2500;
const percentualReajuste = 10;

const reajuste = salario * (percentualReajuste / 100);
const novoSalario = salario + reajuste;

console.log(`Salário Atual: R$ ${salario.toFixed(2)} \nPercentual de Reajuste: ${percentualReajuste}% \nNovo Salário: R$ ${novoSalario.toFixed(2)}`);