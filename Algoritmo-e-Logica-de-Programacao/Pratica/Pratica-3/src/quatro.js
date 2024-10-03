function operacao(a, b, tipo) {
    if (tipo === "+") {
        return a + b;
    } else {
        if (tipo === "-") {
            return a - b;
        } else {
            if (tipo === "*") {
                return a * b;
            } else {
                return a / b;
            }
        }
    }
}

let r = operacao(10, 4, "+");
console.log("Soma:", r);
r = operacao(10, 4, "-");
console.log("Subtração:", r);
r = operacao(10, 4, "*");
console.log("Multiplicação:", r);
r = operacao(10, 4, "/");
console.log("Divisão:", r);
