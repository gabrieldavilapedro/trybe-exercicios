const { encode, decode } = require("./encodeDecode.js");

escribe('testa a função encode e decode', () => {

    it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(30)).toBe("fizzbuzz");
    });
});