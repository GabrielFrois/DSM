/*: Completar o código a seguir para imprimir na tela os
elementos do array que estão em posições ímpares.
Dica: use a estrutura de repetição while.
numeros = [8,3,4,7,5,6,4]*/

numeros = [8,3,4,7,5,6,4];
i = 0;

while(i < numeros.length){
    if(i % 2 != 0){
        console.log(i, ":", numeros[i]);
    }
    i++;
}