import readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarPrimo(numero: number): boolean {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function fatoresPrimos(numero: number): number[] {
    const fatores: number[] = [];
    let divisor: number = 2;

    while (numero >= divisor) {
        if (numero % divisor === 0) {
            fatores.push(divisor);
            numero /= divisor;
        } else {
            divisor++;
        }
    }

    return fatores;
}

function perguntar(): void {
    leitor.question("Digite um número inteiro (ou 'sair' para terminar): ", function(answer: string) {
        if (answer.toLowerCase() === 'sair') {
            console.log("Programa encerrado.");
            leitor.close();
            return;
        }

        const numero: number = parseInt(answer);

        if (isNaN(numero)) {
            console.log("Por favor, insira um número válido.");
        } else {
            if (verificarPrimo(numero)) {
                console.log(`${numero} é um número primo.`);
            } else {
                const fatores = fatoresPrimos(numero);
                console.log(`${numero} não é um número primo. \nSeus fatores primos são: ${fatores.join(', ')}`);
            }
        }

        perguntar();
    });
}

perguntar();
