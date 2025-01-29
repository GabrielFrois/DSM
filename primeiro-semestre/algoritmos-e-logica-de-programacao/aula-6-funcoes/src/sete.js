/*Fazer uma função de nome inverter que recebe uma lista e 
imprime na tela os elementos da lista na ordem inversa.*/

function inverter(numeros){
    i = numeros.length - 1;
    while(i >= 0){
        console.log(i, ":", numeros[i]);
        i--;
    }
}

console.log("Lista");
numeros = [8, 3, 4, 7, 5];
inverter(numeros);

console.log("\nLista");
numeros = [5, 4, 3];
inverter(numeros);