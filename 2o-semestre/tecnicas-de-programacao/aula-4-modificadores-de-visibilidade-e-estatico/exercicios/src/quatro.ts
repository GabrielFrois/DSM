class Carro {
    private _marca: string;
    private _modelo: string;

    constructor(marca: string, modelo: string) {
        this._marca = marca;
        this._modelo = modelo;
    }

    public get marca(): string {
        return this._marca;
    }

    public get modelo(): string {
        return this._modelo;
    }
}

const carro = new Carro("VW", "Gol");
console.log(carro);