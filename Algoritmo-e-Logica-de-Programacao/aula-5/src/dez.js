/* Completar o código a seguir para imprimir na tela
os elementos da diagonal principal da matriz.
Dica: use a estrutura de repetição while.
matriz = [
 [9,2,4],
 [6,5,7],
 [2,1,3]
]*/

matriz = [
    [9,2,4],
    [6,5,7],
    [2,1,3]
   ];

i = 0;
j = 0;

while(i < matriz.length){
    while(j < matriz.length){
        console.log(matriz[i][j]);
        i++;
        j++;
    }
}