function operacao(a, b, tipo) {
    let r = NaN;
    if (tipo === "+") {
        r = a + b;
    } else {
        if (tipo === "-") {
            r = a - b;
        } else {
            if (tipo === "*") {
                r = a * b;
            } else {
                if (tipo === "/") {
                    r = a / b;
                }
            }
        }
    }
    return r;
}

let r = operacao(10, 4, "+");
console.log("Soma:", r);
r = operacao(10, 4, "-");
console.log("Subtração:", r);
r = operacao(10, 4, "*");
console.log("Multiplicação:", r);
r = operacao(10, 4, "/");
console.log("Divisão:", r);
r = operacao(10, 4, "**");
console.log("Potência:", r);
