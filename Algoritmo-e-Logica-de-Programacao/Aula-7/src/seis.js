/*Alterar o programa do Exercício 4 para imprimir na tela somente os elementos que possuem valor par.
Dica: use if para testar o valor. Use a função parseInt para converter o item para inteiro.*/

lista = prompt("Entre com os números separados por vírgula: ");
nros = lista.split(",");

for(i = 0; i < nros.length; i++){
    if(parseInt(nros[i]) % 2 == 0){
        console.log(nros[i]);
    }
}