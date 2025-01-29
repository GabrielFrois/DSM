/*Fazer um programa que pede para o usuário entrar um número inteiro e na sequência o programa imprime
na tela se o número é par ou ímpar. Dica: um número é par se o resto da divisão dele por 2 é zero.*/

num = prompt("Entre com um número inteiro: ");
num = parseInt(num);

if(num % 2 == 0){
  console.log(num, "é par");
} else{
  console.log(num, "é impar");
}
console.log("Fim do Programa");
