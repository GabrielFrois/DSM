import readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let continuar: boolean = true;

function contarVogaisEConsoantes(palavra: string): void {
    let vogais: string = "aeiouAEIOU";
    let quantidadeVogais: number = 0;
    let quantidadeConsoantes: number = 0;

    for (let i = 0; i < palavra.length; i++) {
        let letra: string = palavra[i].toLowerCase();
        if (vogais.includes(letra)) {
            quantidadeVogais++;
        } else if (letra.match(/[a-z]/i)) {
            quantidadeConsoantes++;
        }
    }

    console.log(`Quantidade de vogais: ${quantidadeVogais}`);
    console.log(`Quantidade de consoantes: ${quantidadeConsoantes}`);
}

function perguntar(): void {
    if (continuar) {
        leitor.question("Digite uma palavra (ou 'sair' para terminar): ", function(answer: string) {
            if (answer.toLowerCase() === 'sair') {
                continuar = false;
                leitor.close();
            } else {
                contarVogaisEConsoantes(answer);
                perguntar();
            }
        });
    }
}

perguntar(); 
