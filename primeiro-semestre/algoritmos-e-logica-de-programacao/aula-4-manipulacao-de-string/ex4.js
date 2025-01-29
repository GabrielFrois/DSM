/*Fazer um programa que pede para o usuário entrar com um nome e, 
na sequência, o programa imprime na tela os caracteresna ordem invertida.
Dica: use a estrutura de repetição while.*/

nome = prompt("Entre com o nome: ");
i = nome.length;

while(i >= 0){
    console.log(nome[i-1]);
    i--;
}
