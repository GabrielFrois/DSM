function fatorial(nro) {
    let total = 1;
    if(nro < 0){
        return NaN;
    } else{
        for (let i = 1; i <= nro; i++) {
            total *= i;
        }
        return total;
    }
}

let r = fatorial(5);
console.log("Fatorial:", r);
r = fatorial(-2);
console.log("Fatorial:", r);
