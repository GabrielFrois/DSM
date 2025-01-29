/*Fazer um programa que pede para o usuário entrar com dois números inteiros, um de cada vez, e na
sequência o programa imprime na tela se o 1º número é múltiplo do 2º número.
Dica: um número é múltiplo do outro se o resto da divisão deles é zero*/

num1 = prompt("Entre com um número inteiro: ");
num1 = parseInt(num1);

num2 = prompt("Entre com um número inteiro: ");
num2 = parseInt(num2);

if(num1 % num2 == 0){
  console.log(num1, "é multiplo de", num2);
} else{
  console.log(num1, "não é multiplo de", num2);
}
console.log("Fim do Programa");
