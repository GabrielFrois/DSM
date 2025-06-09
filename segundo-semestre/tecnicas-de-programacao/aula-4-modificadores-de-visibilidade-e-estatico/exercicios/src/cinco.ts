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

const carros: Carro[] = [];

carros.push(new Carro("VW", "Gol"));
carros.push(new Carro("Fiat", "Uno"));
carros.push(new Carro("GM", "Corsa"));

for (const carro of carros) {
    console.log(`${carro.marca} ${carro.modelo}`);
}