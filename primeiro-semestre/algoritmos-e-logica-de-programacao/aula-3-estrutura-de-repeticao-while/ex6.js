/*Fazer um programa que pede para o usuário entrar com cinco
números, um de cada vez. Use a estrutura de repetição while. Após
finalizar a entrada dos números, o programa deverá imprimir na tela o
menor valor fornecido pelo usuário.
Dica: será necessário criar uma variável para manter o menor valor e essa
variável precisará ser iniciada com um valor muito alto.*/

entrada = 0;
menor = 2147483647;

while(entrada < 5){
    num = prompt("Entre com um número: ");
    num = parseInt(num);
    if(num < menor){
        menor = num;
    }
    entrada++;
}

console.log("Menor valor: ", menor);
