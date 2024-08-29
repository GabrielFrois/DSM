/*: Fazer um programa que pede para o usuário entrar com
a senha. O programa deverá repetir a entrada enquanto o usuário
não acertar a senha.
Considere que a senha é abc*/

senha = 'abc';
entrada;

while(entrada != senha){
    entrada = prompt("Entre com a senha: ");
    if(entrada != senha){
        console.log("Senha incorreta");
    }
}

console.log("Acesso liberado");
