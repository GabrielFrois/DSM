function quebrar(nome) {
    let v = nome.split("");
    for (let i = 0; i < v.length; i++) {
        v[i] = "<div>" + v[i] + "<div>";
    }
    return v;
}

let r = quebrar("Mariana");
console.log("Separado:", r);
