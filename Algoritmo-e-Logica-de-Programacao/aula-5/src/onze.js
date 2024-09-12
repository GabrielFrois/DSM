/*Completar o código a seguir para imprimir na tela o
somatório dos elementos da matriz.
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
soma = 0;
   
   while(i < matriz.length){
        j = 0; //j fica aqui para voltar a ser 0
        while(j < matriz.length){
            soma += matriz[i][j];
            j++;
       }
       i++;
   }

   console.log("Somatório:", soma);