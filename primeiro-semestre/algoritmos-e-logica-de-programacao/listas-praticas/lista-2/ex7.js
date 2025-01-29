let nros = "19,11,5,10,20";
let num = nros.split(",");
let soma = 0;
for(let i = 0; i < num.length; i++ ){
    valor = parseInt(num[i]);
    soma += valor;
}
console.log("Somatório:", soma);