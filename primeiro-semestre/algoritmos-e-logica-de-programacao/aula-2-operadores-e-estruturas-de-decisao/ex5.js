/*Fazer um programa que pede para o usuário entrar com dois números inteiros, um de cada vez, e na
sequência o programa imprime na tela o maior valor.*/

num1 = prompt("Entre com um número inteiro: ");
num1 = parseInt(num1);

num2 = prompt("Entre com um número inteiro: ");
num2 = parseInt(num2);

if(num1 > num2){
  console.log(num1);
} else{
  console.log(num2);
}
console.log("Fim do Programa");
