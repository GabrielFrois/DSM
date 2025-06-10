class Geometria {
    private static contador: number = 0;

    constructor() {
        Geometria.contador++;
    }

    area(): number {
        return 0;
    }

    public static getContador(): number {
        return Geometria.contador;
    }
}

class Retangulo extends Geometria {
    constructor(private base: number, private altura: number) {
        super();
    }

    area(): number {
        return this.base * this.altura;
    }
}

class Circulo extends Geometria {
    constructor(private raio: number) {
        super();
    }

    area(): number {
        return Math.PI * this.raio ** 2;
    }
}

let geom: Geometria = new Retangulo(10, 5);
console.log("Retângulo:", geom.area());
geom = new Circulo(5);
console.log("Círculo:", geom.area());
console.log("Quantidade de geometrias:", Geometria.getContador());