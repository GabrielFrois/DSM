/*: Completar o código a seguir para imprimir na tela os
elementos de maior valor em cada posição nos arrays de
entradas e saídas.
Dica: use a estrutura de repetição while.
entradas = [9,2,4,5,8]
saidas = [3,5,2,7,4]*/

entradas = [9,2,4,5,8];
saidas = [3,5,2,7,4];

i = 0;

while(i < entradas.length){
    if(entradas[i] > saidas[i]){
        console.log(i, ":", entradas[i]);
    } else{
        console.log(i, ":", saidas[i]);
    }
    i++;
}