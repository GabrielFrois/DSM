/*: Completar o código a seguir para imprimir na tela o
os elementos do array na ordem invertida.
Dica: use a estrutura de repetição while.
numeros = ["um","dois","três","quatro"]*/

numeros = ["um","dois","três","quatro"];

i = numeros.length - 1;

while(i >= 0){
    console.log(i, numeros[i]);
    i--;
}