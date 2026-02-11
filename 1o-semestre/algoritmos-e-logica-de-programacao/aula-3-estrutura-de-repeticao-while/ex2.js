/*: Fazer um programa que pede para o usuário entrar
com dois números inteiros, um de cada vez, e na sequência o
programa imprime na tela todos os números nesse intervalo.
Dica: use a função prompt para ler o teclado e a função parseInt
para converter de string para inteiro.*/

num1 = prompt("Entre com o menor valor: ");
num1 = parseInt(num1);

num2 = prompt("Entre com o maior valor: ");
num2 = parseInt(num2);

while(num1 <= num2){
    console.log(num1);
    num1++;
}
