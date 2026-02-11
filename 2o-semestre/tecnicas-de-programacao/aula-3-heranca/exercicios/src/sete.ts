class Veiculo {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    print(): void {
        console.log(`${this.valor}`);
    }
}

class Automovel extends Veiculo {
    fabricante: string;

    constructor(fabricante: string, valor: number) {
        super(valor);
        this.fabricante = fabricante;
    }

    print(): void {
        console.log(`${this.fabricante} - ${this.valor}`);
    }
}

class Cavalo extends Veiculo {
    raca: string;

    constructor(raca: string, valor: number) {
        super(valor);
        this.raca = raca;
    }

    print(): void {
        console.log(`${this.raca} - ${this.valor}`);
    }
}

const auto = new Automovel("GM", 12500);
auto.print();
const cavalo = new Cavalo("Mangalarga", 4500);
cavalo.print();
