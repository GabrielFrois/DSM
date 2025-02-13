class Questao {
    enunciado: string = "";
    valor: number;

    setEnunciado(enunciado: string): void {
        this.enunciado = enunciado;
    }

    setValor(valor: number): void {
        this.valor = valor;
    }
    
    constructor(enunciado: string, valor: number) {
        this.enunciado = enunciado;
        this.valor = valor;
    }

    print(): void{
        console.log(`${this.enunciado} (${this.valor} pts.)`);
    }
}

const questao = new Questao("O que é um array?", 0.5);
questao.print();