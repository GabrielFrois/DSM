/*Alterar o programa do Exercício 4 para imprimir na tela o somatório dos valores fornecidos.
Dica: será necessário converter cada elemento da lista de string para inteiro, então use a função parseInt*/

lista = prompt("Entre com os números separados por vírgula: ");
nros = lista.split(",");
soma = 0;

for(i = 0; i < nros.length; i++){
    soma += parseInt(nros[i]);
}

console.log("Somatório:", soma);