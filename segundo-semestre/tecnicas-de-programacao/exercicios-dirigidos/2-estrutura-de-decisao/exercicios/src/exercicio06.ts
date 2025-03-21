import * as readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularReajuste(salario:number):void {
    let percentualReajuste:number;

    if (salario <= 650) {
        percentualReajuste = 10;
    } else {
        percentualReajuste = 5;
    }

    const reajuste = salario * (percentualReajuste / 100);

    const novoSalario = salario + reajuste;

    console.log(`Salário Original: R$ ${salario.toFixed(2)}`);
    console.log(`Percentual de Reajuste: ${percentualReajuste}%`);
    console.log(`Valor do Reajuste: R$ ${reajuste.toFixed(2)}`);
    console.log(`Novo Salário: R$ ${novoSalario.toFixed(2)}`);
}

leitor.question("Digite o valor do seu salário mensal atual: R$ ", (salarioStr:string) => {
    const salario:number = parseFloat(salarioStr);

    if (isNaN(salario) || salario <= 0) {
        console.log("Por favor, insira um valor válido para o salário.");
    } else {
        calcularReajuste(salario); 
    }

    leitor.close();
});