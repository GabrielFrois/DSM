/*Fazer uma função de nome matriz que recebe
uma matriz e retorna o somatório dos elementos.*/

function matriz(numeros){
    i = 0;
    soma = 0; 
       while(i < numeros.length){
            j = 0;
            while(j < numeros[i].length){
                soma += numeros[i][j];
                j++;
           }
           i++;
       }
    return soma;
}

numeros = [
    [9, 2, 4],
    [6, 5, 7],
    [2, 1, 3]
];
s = matriz(numeros);
console.log("Somatório:", s);

numeros = [
    [5, 8, 3, 4],
    [9, 7, 2]
];
s = matriz(numeros);
console.log("Somatório:", s);