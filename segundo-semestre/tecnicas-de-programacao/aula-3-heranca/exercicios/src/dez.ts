class Texto extends String {
    primeira(): string {
        return this.charAt(0);
    }

    ultima(): string {
        return this.charAt(this.length - 1);
    }
}

const t = new Texto("Boa noite");

console.log("Quantidade de letras:", t.length);
console.log("Primeira letra:", t.primeira());
console.log("Última letra:", t.ultima());
console.log("Minúsculo:", t.toLowerCase());