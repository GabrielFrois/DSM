class Retangulo {
    base: number;
    altura: number;
    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
    area(): number {
        return this.base * this.altura;
    }
    perimetro(): number {
        return 2 * this.base + 2 * this.altura;
    }
    print(): void{
        console.log(`Área: ${this.area()}`);
        console.log(`Perímetro: ${this.perimetro()}`);
    }
}

const valores = new Retangulo(3, 2);

valores.print();