/*Alterar o programa do Exercício 6 para imprimir na tela o
maior valor fornecido pelo usuário.
Dica: será necessário criar uma variável para manter o maior valor e essa
variável precisará ser iniciada com um valor muito baixo.*/

entrada = 0;
maior = -2147483647;

while(entrada < 5){
    num = prompt("Entre com um número: ");
    num = parseInt(num);
    if(num > maior){
        maior = num;
    }
    entrada++;
}

console.log("Maior valor: ", maior);
