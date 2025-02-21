/*
let x: number [] = [1, 2, 3];

for(let gabriel of x){
    console.log(gabriel);
}


x.forEach((v) => {console.log(v)
});

x.forEach(tratador);

function tratador(valor:any, indice:any){
    console.log(valor);
    console.log(indice);
}
*/

let pessoa: any = {'nome': 'Gabriel', 'idade': 23}
for (let p in pessoa){
    console.log(p);
};

export{}