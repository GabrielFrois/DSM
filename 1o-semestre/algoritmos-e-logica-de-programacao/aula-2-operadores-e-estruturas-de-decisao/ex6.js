/*Fazer um programa que pede para o usuário entrar com a idade dele e, 
na sequência, o programa indica se ele é de menor ou adulto.*/

idade = prompt("Informe sua idade: ");
idade = parseInt(idade);

if(idade >= 18){
  console.log("Maior de idade");
} else{
  console.log("Menor de idade");
}
console.log("Fim do Programa");
