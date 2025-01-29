/*Alterar o programa do Exercício 7 para imprimir na tela o somatório dos elementos que estão em posições pares.
Dica: use a função parseInt para converter o elemento da lista para inteiro. Use uma variável para acumular o somatório dos elementos do array.*/

lista = prompt("Entre com os números separados por vírgula: ");
nros = lista.split(",");
somaPares = 0;

for(i = 0; i < nros.length; i++){
    if(i % 2 == 0){
        somaPares += parseInt(nros[i]);
    }
}

console.log("Somatório:", somaPares);