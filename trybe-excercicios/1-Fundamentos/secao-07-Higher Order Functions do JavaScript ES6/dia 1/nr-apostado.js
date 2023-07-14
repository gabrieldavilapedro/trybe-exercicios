const verifyNumbers = (meuNumemo, numeroSorteado) => {
    return meuNumemo === numeroSorteado
};

const geradorDeNumeros = (meuNumemo) => {
    const numero = Math.floor((Math.random() * 5) + 1);

    if(meuNumemo === numero){
       return 'Lucky day, you won!'
    }else{
      return  'Try Again!'
    }
}
console.log(geradorDeNumeros(3,verifyNumbers));