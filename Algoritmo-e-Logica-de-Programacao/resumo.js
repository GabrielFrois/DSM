console.log("1- 'if else' \n2- 'while' \n3- 'for' \n4- 'switch case' \n5- Arrays \n6- 'JSON' \n7- Funções");

let continuar = true; // Variável para controlar o loop

while (continuar) {
    var num = parseInt(prompt("Entre com o número do item que deseja ver (ou 0 para sair): "));

    switch (num) {
        case 1:
            console.log("O if-else é uma estrutura condicional usada em JavaScript para executar blocos de código com base no resultado de uma expressão booleana (verdadeira ou falsa) \n if: Se a condição for verdadeira, o código dentro do bloco if será executado. \n else: Se a condição for falsa, o código dentro do bloco else será executado.");
            
            let idade = parseInt(prompt("Informe sua idade: "));
            
            if (idade >= 18) {
                console.log("Você pode dirigir.");
            } else {
                console.log("Você não pode dirigir.");
            }

            break;
        case 2:
            console.log("O while é uma estrutura de repetição (loop) em JavaScript que executa um bloco de código enquanto uma condição for verdadeira. A condição é avaliada antes de cada iteração, e se for verdadeira, o código dentro do loop será executado. Caso contrário, o loop será interrompido.");
            
            let i = 1;

            while (i <= 5) {
                console.log(i);
                i++;  // Incrementa o valor de i em 1 a cada iteração
            }

            break;
        case 3:
            console.log("O for é outra estrutura de repetição (loop) em JavaScript. Ele é usado quando você sabe de antemão quantas vezes um bloco de código precisa ser executado. A sintaxe do for é mais compacta e inclui a inicialização, a condição e o incremento ou decremento em um único lugar.");
            
            for (let i = 1; i <= 5; i++) {
                console.log(i);
            }
            
            break;
        case 4:
            console.log("O switch case é uma estrutura condicional usada quando você precisa verificar a igualdade de uma variável com várias opções possíveis. Ele oferece uma maneira mais limpa e legível de realizar múltiplas verificações de condição, especialmente quando há muitas opções, em comparação com uma série de instruções if-else.");
            
            let dia = 3;

            switch (dia) {
                case 1:
                    console.log("Domingo");
                    break;
                case 2:
                    console.log("Segunda-feira");
                    break;
                case 3:
                    console.log("Terça-feira");
                    break;
                case 4:
                    console.log("Quarta-feira");
                    break;
                case 5:
                    console.log("Quinta-feira");
                    break;
                case 6:
                    console.log("Sexta-feira");
                    break;
                case 7:
                    console.log("Sábado");
                    break;
                default:
                    console.log("Dia inválido");
            }

            break;
        case 5:
            console.log("Um array (ou vetor) é uma estrutura de dados que pode armazenar múltiplos valores em uma única variável. Os valores dentro de um array são chamados de elementos, e cada elemento é acessado por um índice. O índice é um número inteiro, começando do 0. \n Arrays podem armazenar qualquer tipo de dado, como números, strings, objetos e até outros arrays (isso é chamado de array multidimensional).");

            let frutas = ['maçã', 'banana', 'laranja'];
            console.log(frutas);

            break;
        case 6:
            console.log("JSON (JavaScript Object Notation) é um formato de dados leve e amplamente utilizado para armazenar e transmitir dados entre um servidor e um cliente, ou entre sistemas. Ele é fácil de ler e escrever para humanos e fácil de analisar e gerar para máquinas. JSON é uma forma simplificada de representar objetos e dados estruturados. \n Embora tenha 'JavaScript' no nome, JSON é um formato independente de linguagem, o que significa que ele pode ser usado em muitas outras linguagens de programação, como Python, Java, C++, etc. \n Características do JSON: \n Objetos: Representados por chaves {} e podem conter pares de chave-valor. \n Arrays: Representados por colchetes [], contendo uma lista de valores. \n Chaves: Sempre são strings e ficam entre aspas duplas. \n Valores: Podem ser strings, números, arrays, objetos, true, false, ou null.");

            // Exemplo de JSON
            let jsonExemplo = {
                "nome": "João",
                "idade": 30,
                "casado": true,
                "enderecos": [
                    {
                        "tipo": "residencial",
                        "rua": "Rua A",
                        "numero": 123
                    },
                    {
                        "tipo": "comercial",
                        "rua": "Rua B",
                        "numero": 456
                    }
                ]
            };

            console.log(jsonExemplo); // Exibe o exemplo de JSON

            break;
        case 7:
            console.log("Funções são blocos de código que podem ser reutilizados em várias partes do programa para realizar tarefas específicas. Elas podem receber parâmetros, executar um conjunto de instruções e, opcionalmente, retornar um valor. \n A declaração de uma função permite definir o comportamento da função, que pode ser chamada sempre que necessário.");

            function somar(a, b) {
                return a + b;
            }

            let resultado = somar(3, 5);  // Chama a função com 3 e 5 como argumentos
            console.log(resultado);

            break;
        case 0:
            console.log("Saindo do menu.");
            continuar = false;  // Sai do loop
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}
