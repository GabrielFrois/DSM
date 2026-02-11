/*Alterar o Exercício 2 para o programa aceitar valores em qualquer ordem fornecida pelo usuário*/
num1 = prompt("Entre com um número: ");
num1 = parseInt(num1);

num2 = prompt("Entre com um número: ");
num2 = parseInt(num2);

if(num1 < num2){
    while(num1 <= num2){
        console.log(num1);
        num1++;
    }
} else{
    while(num2 <= num1){
        console.log(num2);
        num2++;
    }
}
