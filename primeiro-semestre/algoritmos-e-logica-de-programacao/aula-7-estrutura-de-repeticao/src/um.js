/*Fazer um programa que pede para o usuário entrar com o nome dele. 
Na sequência o programa imprime cada letra do nome numa linha. 
Use a estrutura de repetição for.
Dica: use a função prompt para ler o teclado e a função console.log para imprimir no console.*/

nome = prompt("Entre com o seu nome: ");

for(i = 0; i < nome.length; i++){
    console.log(nome[i]);
}