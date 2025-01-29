function somar(a, b) {
    let v = [];
    for (let i = 0; i < a.length; i++) {
        if(a[i] > b[i]){
            v[i] = a[i];
        } else{
            v[i] = b[i];
        }
    }
    return v;
}

let a = [5, 8, 3, 4, 9, 7];
let b = [3, 5, 9, 2, 3, 4];
let r = somar(a, b);
console.log("Soma:", r);
