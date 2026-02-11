class Operacao {

    constructor(private x: number, private y: number) {
    }

    public somar(): number {
        return this.x + this.y;
    }
}

const op = new Operacao(5, 15);
console.log("Somar:", op.somar());