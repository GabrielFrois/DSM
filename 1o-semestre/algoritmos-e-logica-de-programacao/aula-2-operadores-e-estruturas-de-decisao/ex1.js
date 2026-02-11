/* Fazer um programa que pede para o usuári oentrar com um número inteiro e na sequência o programa imprime o resto da divisão desse número por 2.
Dica: use a função prompt para ler o teclado, a função parseInt para converter de string para inteiro, e a função console.log para imprimir o resultado. */

num = prompt("Entre com um número inteiro: ");
num = parseInt(num);

resultado = num % 2;

console.log(resultado);
console.log("Fim do Programa");
