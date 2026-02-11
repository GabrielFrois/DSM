class Carro {
    private _marca: string = "";
    private _modelo: string = "";

    public get marca(): string {
        return this._marca;
    }

    public set marca(valor: string) {
        this._marca = valor;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(valor: string) {
        this._modelo = valor;
    }
}

const carro = new Carro();
carro.marca = "VW";
carro.modelo = "Gol";
console.log(carro);