/*Fazer um programa que pede para o usuário entrar com cinco
números, um de cada vez. Use a estrutura de repetição while. Após
finalizar a entrada dos números, o programa deverá imprimir o somatório.
Dica: será necessário criar uma variável para acumular o somatório e essa
variável terá de ser iniciada com o valor 0.*/

entrada = 0;
soma = 0;

while(entrada < 5){
    num = prompt("Entre com o número: ");
    num = parseInt(num);
    soma += num;
    entrada++;
}

console.log("Somatório: ", soma);
