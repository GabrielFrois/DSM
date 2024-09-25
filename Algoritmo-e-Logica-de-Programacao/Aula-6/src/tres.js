/*Fazer uma função de nome ultima que recebe uma string e retorna 
o último caractere dessa string. Ao lado tem-se exemplos de chamadas dessa função.*/

function ultima(nome){
    return nome[nome.length-1];
}

u = ultima("Pedro");
console.log("Última Letra:", u);

u = ultima("Mariana");
console.log("Última Letra:", u);