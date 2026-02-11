/*Fazer um programa que pede para o usuário entrar
com números. A entrada de números deve ser interrompida quando
a soma atingir o valor 20.
Dica: será necessário criar uma variável para acumular o somatório e
essa variável terá de ser iniciada com o valor 0.*/

soma = 0;

while(soma <= 20){
    num = prompt("Entre com o número: ");
    num = parseInt(num);
    soma += num;
}

console.log("Somatório: ", soma);
