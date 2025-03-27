import readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros: number[] = [];

function perguntar(): void {
    leitor.question("Digite um número inteiro entre 1 e 100 (ou 'sair' para terminar): ", function(answer: string) {
        if (answer.toLowerCase() === 'sair') {
            console.log("Programa encerrado.");
            leitor.close();
            return;
        }

        const numero: number = parseInt(answer);

        
        if (isNaN(numero) || numero < 1 || numero > 100) {
            console.log("Por favor, insira um número válido entre 1 e 100.");
        } else if (numeros.includes(numero)) {
            console.log("Você já inseriu esse número. Tente outro.");
        } else {
            numeros.push(numero);
        }

        
        if (numeros.length === 10) {
            const menor = Math.min(...numeros);
            const maior = Math.max(...numeros);
            const soma = numeros.reduce((acc, curr) => acc + curr, 0);

            console.log(`Os números inseridos são: ${numeros.sort((a, b) => a - b).join(', ')}`);
            console.log(`Menor número: ${menor}`);
            console.log(`Maior número: ${maior}`);
            console.log(`Soma dos números: ${soma}`);

            leitor.close();
            return;
        }

        perguntar();
    });
}

console.log("Digite 10 números abaixo");
perguntar();
