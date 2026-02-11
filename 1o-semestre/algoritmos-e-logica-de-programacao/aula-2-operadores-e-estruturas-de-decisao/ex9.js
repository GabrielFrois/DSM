/*O IMC (Índice de Massa Corporal) é calculado usando peso/(altura*altura). 
Fazer um programa que pede para o usuário entrar com o peso (em Kg) e altura (em metros) 
e, na sequência, o programa imprime na tela a classificação do IMC*/

peso = prompt("Entre com o peso (Kg): ");
peso = parseFloat(peso);

altura = prompt("Entre com a altura (m): ");
altura = parseFloat(altura);

imc = peso / (altura * altura);

if(imc <= 18.5){
    console.log("Abaixo do peso");
} else if(imc <= 24.9){
    console.log("Peso ideal");
} else if(imc <= 29.9){
    console.log("Levemente acima do peso");
} else if(imc <= 34.9){
    console.log("Obesidade grau I");
} else if(imc <= 39.9){
    console.log("Obesidade grau II");
} else{
    console.log("Obesidade grau III");
}
console.log("Fim do Programa");
