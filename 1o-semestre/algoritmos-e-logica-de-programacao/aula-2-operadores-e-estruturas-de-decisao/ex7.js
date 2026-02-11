/*Fazer um programa que pede para o usuário entrar com três
números, um de cada vez, e na sequência o programa imprime o maior
valor fornecido pelo usuário.*/

num1 = prompt("Entre com um número inteiro: ");
num1 = parseInt(num1);

num2 = prompt("Entre com um número inteiro: ");
num2 = parseInt(num2);

num3 = prompt("Entre com um número inteiro: ");
num3 = parseInt(num3);

if( num1 > num2 && num1 > num3){
    console.log(num1);
} else if(num2 > num1 && num2 > num3){
    console.log(num2);
} else{
    console.log(num3);
}
console.log("Fim do Programa");
