function longo(a, b) {
    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }
}

let r = longo("Ana", "Maria");
console.log("Nome mais longo:", r);
r = longo("Antonio", "Pedro");
console.log("Nome mais longo:", r);
