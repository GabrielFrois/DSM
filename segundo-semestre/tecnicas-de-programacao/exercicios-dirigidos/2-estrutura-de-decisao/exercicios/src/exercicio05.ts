import * as readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPorcentagem(parte:number, total:number):number {
    return (parte / total) * 100;
}

function calcularEleicao():void {
    leitor.question("Digite o número total de eleitores do município: ", (totalEleitoresStr:string) => {
        const totalEleitores:number = parseInt(totalEleitoresStr);

        if (isNaN(totalEleitores) || totalEleitores <= 0) {
            console.log("Número de eleitores inválido.");
            leitor.close();
            return;
        }

        leitor.question("Digite o número de votos brancos: ", (votosBrancosStr:string) => {
            const votosBrancos:number = parseInt(votosBrancosStr);

            if (isNaN(votosBrancos) || votosBrancos < 0) {
                console.log("Número de votos brancos inválido.");
                leitor.close();
                return;
            }

            leitor.question("Digite o número de votos nulos: ", (votosNulosStr:string) => {
                const votosNulos:number = parseInt(votosNulosStr);

                if (isNaN(votosNulos) || votosNulos < 0) {
                    console.log("Número de votos nulos inválido.");
                    leitor.close();
                    return;
                }

                leitor.question("Digite o número de votos válidos: ", (votosValidosStr:string) => {
                    const votosValidos:number = parseInt(votosValidosStr);

                    if (isNaN(votosValidos) || votosValidos < 0) {
                        console.log("Número de votos válidos inválido.");
                        leitor.close();
                        return;
                    }

                    leitor.question("Digite o número de votos obtidos pelo candidato: ", (votosCandidatoStr:string) => {
                        const votosCandidato:number = parseInt(votosCandidatoStr);

                        if (isNaN(votosCandidato) || votosCandidato < 0) {
                            console.log("Número de votos obtidos pelo candidato inválido.");
                            leitor.close();
                            return;
                        }

                        const totalVotosValidosBrancos = votosValidos + votosBrancos;

                        const percentualCandidato = calcularPorcentagem(votosCandidato, totalVotosValidosBrancos);

                        if (percentualCandidato > 10) {
                            console.log("\nO candidato foi eleito!");
                        } else {
                            console.log("\nO candidato NÃO foi eleito.");
                        }

                        const percentualCandidatoEleitores = calcularPorcentagem(votosCandidato, totalEleitores);
                        console.log(`Percentual de votos do candidato em relação ao total de eleitores: ${percentualCandidatoEleitores.toFixed(2)}%`);

                        leitor.close();
                    });
                });
            });
        });
    });
}

calcularEleicao();
