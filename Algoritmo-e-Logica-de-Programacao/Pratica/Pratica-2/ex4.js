let placa = prompt("Entre com a placa:");
for(let i = 0; i < placa.length; i++){
    if(placa.charCodeAt(i) >= 48 && placa.charCodeAt(i) <= 57){
        console.log(placa.charCodeAt(i));
    }
}