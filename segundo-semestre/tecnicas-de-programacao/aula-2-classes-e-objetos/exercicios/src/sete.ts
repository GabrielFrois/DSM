class Ponto{
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

    distancia(ponto:Ponto): number{
        const dx = this.x - ponto.x;
        const dy = this.y - ponto.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
}

const a = new Ponto(3,5);
const b = new Ponto(1,2);
//observe que passamos como parâmetro um objeto do tipo Ponto
console.log("Distância:", a.distancia(b));