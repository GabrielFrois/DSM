var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let continuar = true;

function perguntar() {
    if (continuar) {
        leitor.question("Digite uma palavra (ou 'sair' para terminar): ", function(answer:string) {
        if (answer.toLowerCase() === 'sair') {
            continuar = false;
            leitor.close();
        } else {
            console.log('Você digitou: ${answer}');
            perguntar(); // Chama a função novamente para
        // continuar perguntando
            }
        });
    }
}

perguntar(); // Inicia o processo de perguntas
