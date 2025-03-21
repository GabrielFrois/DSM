//npm install --save-dev @types/node -> Comando que adiciona definições de tipo para o Node.js, permitindo que o TypeScript reconheça process, readline e etc.
import * as readline from 'readline';

function categoriaIdade(idade: number): void {
    let categoria: string;
    
    if (idade <= 10) {
        categoria = "Criança";
    } else if (idade >= 11 && idade <= 13) {
        categoria = "Pré-Adolescente";
    } else if (idade >= 14 && idade <= 17) {
        categoria = "Adolescente";
    } else if (idade >= 18 && idade <= 59) {
        categoria = "Adulto";
    } else {
        categoria = "Idoso";
    }

    console.log("Categoria: " + categoria);
}

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite sua idade: ", (input: string) => {
    const idadeUsuario: number = parseInt(input);

    // Verifica se a entrada é um número válido
    if (isNaN(idadeUsuario)) {
        console.log("Por favor, insira um número válido.");
    } else {
        categoriaIdade(idadeUsuario);
    }

    // Fechar a interface após a leitura
    leitor.close();
});
