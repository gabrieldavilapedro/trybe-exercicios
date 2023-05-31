let num1 = 7
let num2 = 77
let num3 = 777
let maiorNumero = null

if(num1 >= num2 && num1 >= num3){
    maiorNumero = num1;
    console.log(maiorNumero);
}else if (num2 >= num1 && num2 >= num3){
    maiorNumero = num2;
    console.log(maiorNumero);
}else {
    maiorNumero = num3;
    console.log(maiorNumero);
}
