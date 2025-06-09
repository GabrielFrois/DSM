class Operacao {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public somar(): number {
        return this.x + this.y;
    }
}

const op = new Operacao(5, 15);
console.log("Somar:", op.somar());