/*Completar o código a seguir para imprimir na tela os
elementos do array que possui valor ímpar.
Dica: use a estrutura de repetição while.
numeros = [8,3,4,7,5,6,4]*/

numeros = [8,3,4,7,5,6,4];
i = 0;

while(i < numeros.length){
    if(numeros[i] % 2 != 0){
        console.log("Ímpar", numeros[i]);
    }
    i++;
}