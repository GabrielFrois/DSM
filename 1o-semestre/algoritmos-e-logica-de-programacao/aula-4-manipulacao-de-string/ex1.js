/*Fazer um programa que pede para o usuário entrar
com um nome e, na sequência, o programa imprime na tela a
quantidade de caracteres do nome.
Dica: use a propriedade length da string.*/

i = 0;

nome = prompt("Entre com o nome: ");

while(i < nome.length){
    i++;
}
console.log("Quantidade: ", i);
