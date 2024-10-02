/*Alterar o programa do Exercício 4 para imprimir na tela somente os elementos que estão em posições pares.
Dica: adicione 2 no incremento da variável contadora.*/

lista = prompt("Entre com os números separados por vírgula: ");
nros = lista.split(",");

for(i = 0; i < nros.length; i++){
    if(i % 2 == 0){
        console.log(nros[i]);
    }
}