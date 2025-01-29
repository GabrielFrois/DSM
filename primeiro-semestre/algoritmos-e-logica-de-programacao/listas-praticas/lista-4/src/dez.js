function somar(m) {
    let soma = 0;
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            soma += m[i][j];
        }
    }
    return soma;
}

let m = [
    [5, 8, 3, 4, 9, 7],
    [3, 5, 9, 2, 3, 4]
];

let r = somar(m);
console.log("Somatório:", r);
