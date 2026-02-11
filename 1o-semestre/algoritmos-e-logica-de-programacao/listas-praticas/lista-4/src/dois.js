function quebrar(nome) {
    const v = nome.split("");
    for (let i = 0; i < v.length; i++) {
        if (v[i] == "a") {
            v[i] = "-";
        }
    }
    return v;
}

let r = quebrar("Mariana");
console.log("Separado:", r);
