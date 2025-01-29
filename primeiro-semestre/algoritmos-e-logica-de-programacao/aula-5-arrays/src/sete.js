/*Completar o código a seguir para imprimir na tela a
multiplicação dos elementos dos arrays pesos e notas.
Dica: use a estrutura de repetição while.
pesos = [0.4,0.2,0.1,0.3]
notas = [8.2,5.0,10.0,9.1]*/

pesos = [0.4,0.2,0.1,0.3];
notas = [8.2,5.0,10.0,9.1];

i = 0;

while(i < pesos.length){
    result = pesos[i] * notas[i];
    console.log(pesos[i], "*", notas[i], "=", result);
    i++;
}