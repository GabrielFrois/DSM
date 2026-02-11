/*Fazer um programa que pede para o usuário. fornecer o nome da fruta (todas as letras minúsculas) e,
na sequência, o programa informa o valor do suco de acordo com a tabela a seguir.
O programa deverá exibir “Não temos esse suco”, caso o usuário forneça um nome de fruta inexistente na tabela.*/

fruta = prompt("Entre com o nome da fruta: ")

switch(fruta){
    case "laranja":
        console.log("R$3,50");
        break
    case "limão":
        console.log("R$3,00");
        break
    case "acerola":
        console.log("R$3,50");
        break
    case "manga":
        console.log("R$4,00");
        break
    case "melancia":
        console.log("R$4,00");
        break
    case "morango":
        console.log("R$5,00");
        break
    case "maracuja":
        console.log("R$4,50");
        break
    case "açai":
        console.log("R$6,00");
        break
    default:
        console.log("Não temos esse suco")
}
console.log("Fim do Programa");
