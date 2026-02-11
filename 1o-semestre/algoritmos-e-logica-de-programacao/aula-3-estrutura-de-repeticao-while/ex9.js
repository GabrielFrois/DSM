/*Alterar o programa do Exercício 8 para limitar a três tentativas*/

senha = 'abc';
tentativas = 0;
entrada;

while(tentativas < 3){
    entrada = prompt("Entre com a senha: ");
    if(entrada == senha){
        console.log("Acesso Liberado");
        break;
    } else{
        console.log("Senha incorreta");
        tentativas++;
    }
    if(tentativas == 3){
        console.log("Excedeu o número de tentativas");
    }
}
