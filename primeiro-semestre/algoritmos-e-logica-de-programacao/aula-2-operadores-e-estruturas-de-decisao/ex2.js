/* Fazer um programa que pede para o usuário entrar com dois números inteiros, um de cada vez, e na
sequência o programa imprime o resto da divisão do primeiro número pelo segundo. */

num1 = prompt("Entre com um número inteiro: ");
num1 = parseInt(num1);

num2 = prompt("Entre com um número inteiro: ");
num2 = parseInt(num2);

resto = num1 % num2;

console.log(resto);
console.log("Fim do Programa");
