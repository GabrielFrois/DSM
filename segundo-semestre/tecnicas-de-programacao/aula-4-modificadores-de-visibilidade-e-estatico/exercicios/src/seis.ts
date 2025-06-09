class Carro {
    private static contador: number = 0;
    private _marca: string;
    private _modelo: string;

    constructor(marca: string, modelo: string) {
        this._marca = marca;
        this._modelo = modelo;
        Carro.contador++;
    }

    public get marca(): string {
        return this._marca;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public static getContador(): number {
        return Carro.contador;
    }
}

const a = new Carro("VW", "Gol");
const b = new Carro("Fiat", "Uno");
const c = new Carro("GM", "Corsa");

console.log("Quantidade:", Carro.getContador());