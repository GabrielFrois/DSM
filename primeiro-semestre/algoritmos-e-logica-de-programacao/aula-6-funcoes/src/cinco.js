//Fazer uma função de nome inverte que recebe uma string e retorna ela invertida.
function inverte(nome){
    i = nome.length - 1;
    invertido = "";
    while(i >= 0){
        invertido += nome[i];
        i--;
    }
    return invertido;
}

r = inverte("Pedro");
console.log("Invertido:", r);

r = inverte("Mariana");
console.log("Invertido:", r);