let A:number, B:number, C:number;

A = 10;
B = 20;

C = A;

A = B;

B = C;

console.log(`Variável A: ${A}, variável B: ${B}`);