/*Alterar o programa do Exercício 3 para imprimir na tela
o somatório dos números no intervalo fornecido pelo usuário.
Dica: será necessário criar uma variável para acumular o somatório
e essa variável terá de ser iniciada com o valor 0.*/

num1 = prompt("Entre com um número: ");
num1 = parseInt(num1);

num2 = prompt("Entre com um número: ");
num2 = parseInt(num2);

soma = 0;

if(num1 < num2){
    while(num1 <= num2){
        soma += num1;
        num1++;
    }
} else{
    while(num2 <= num1){
        soma += num2;
        num2++;
    }
}

console.log("Somatório: ", soma);
