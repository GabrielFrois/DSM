let imc:number, peso:number, altura:number;

peso = 70;
altura = 1.72;

imc = peso / Math.pow(altura, 2);

console.log(`Seu IMC é: ${imc}`);