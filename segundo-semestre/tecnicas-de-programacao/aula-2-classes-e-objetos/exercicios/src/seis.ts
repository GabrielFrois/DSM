class Operacao {
    x: number;
    y: number;

    setX(x: number): void {
        this.x = x;
    }

    setY(y: number): void {
        this.y = y;
    }

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    somar(): number{
        return this.x + this.y;
    }

    subtrair(): number{
        return this.x - this.y;
    }

    dividir(): number{
        return this.x / this.y;
    }
}

const op = new Operacao(3,5);
console.log("Soma:", op.somar());
console.log("Diferença:", op.subtrair());
console.log("Divisão:", op.dividir());