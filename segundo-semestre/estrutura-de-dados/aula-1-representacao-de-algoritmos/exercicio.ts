import * as promptSync from 'prompt-sync';

const prompt = promptSync();

const nome = prompt('Digite seu nome: ');

switch (nome) {
    case "João":
        console.log('Seu nome é João');
        break;
    case "Carlos":
        console.log('Seu nome é Carlos');
        break;
    case "Gabriel":
        console.log('Seu nome é Gabriel');
        break;
    default:
        console.log("Nome não encontrado");
}
