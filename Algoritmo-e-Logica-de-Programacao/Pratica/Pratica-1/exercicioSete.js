let i = 1;
while(i <= 6){
    nro = Math.random();
    nro = Math.floor(nro * 100);

    if(nro % 3 == 0 || nro % 5){
        console.log(nro);
    }
    i++;
}
