/*Completar o código a seguir para imprimir na tela o
somatório dos elementos do array.
Dica: use a estrutura de repetição while.
numeros = [8,3,4,7,5]*/

numeros = [8,3,4,7,5];

i = numeros.length - 1;
soma = 0;

while(i >= 0){
    soma += numeros[i];
    i--;
}

console.log("Somatório", soma);