/*Fazer uma função de nome letra que recebe uma string e um número inteiro
indicando uma posição na string. A função retornará o caractere que está 
na posição fornecida como parâmetro.*/

function letra(palavra, num){
    return palavra[num];
}

l = letra("Pedro", 1);
console.log("2ª letra:", l);

l = letra("Mariana", 3);
console.log("4ª letra:", l);