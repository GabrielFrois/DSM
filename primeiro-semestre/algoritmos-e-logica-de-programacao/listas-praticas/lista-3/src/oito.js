function somatorio(nro) {
    let soma = 0;
    for (i = 0; i <= nro; i++) {
        soma += i;
    }
    return soma;
}

let r = somatorio(5);
console.log("Somatório:", r);
