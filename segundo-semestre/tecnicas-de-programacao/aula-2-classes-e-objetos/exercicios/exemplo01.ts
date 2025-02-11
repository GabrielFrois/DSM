class Pessoa {
    nome:string;
    idade:number;
    constructor(a:string, b:number){
        this.nome = a;
        this.idade = b;
    }
    imprimir(msg: string){
        console.log(`${this.nome} possui ${this.idade} anos. ` + msg);
    }
}
    const x = new Pessoa("Ana",18);
    const y = new Pessoa("Pedro",20);
    x.imprimir("Churrasco");
    y.imprimir("Lasanha");