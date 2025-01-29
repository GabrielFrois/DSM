//Fazer uma função de nome somatorio que recebe um array e retorna o somatório dos elementos desse array.

function somatorio(numeros){
    i = numeros.length - 1;
    soma = 0;
    while(i >= 0){
        soma += numeros[i];
        i--;
    }
    return soma;
}

numeros = [8, 3, 4, 7, 5];
s = somatorio(numeros);
console.log("Somatório:", s);

numeros = [5, 4, 3];
s = somatorio(numeros);
console.log("Somatório:", s);