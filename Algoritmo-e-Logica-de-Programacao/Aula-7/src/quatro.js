/*Fazer um programa que pede para o usuário entrar com alguns números separados por vírgula. 
Na sequência, imprimir na tela os números fornecidos pelo usuário. Use a estrutura de repetição for.
Dica: use o método split para transformar a string numa lista.*/

lista = prompt("Entre com os números separados por vírgula: ");
nros = lista.split(",");

for(i = 0; i < nros.length; i++){
    console.log(nros[i]);
}