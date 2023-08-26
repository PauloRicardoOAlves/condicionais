const idade = 18;
const possuiPatologia = false;
const altura = 150;
const ehEstudante = true;

if (idade >= 18 && idade <= 65 && possuiPatologia == false && altura >= 150) {
    if (ehEstudante == true) {
        console.log('10 reais')
    } else {
        console.log('20 reais')
    }
} else {
    console.log('ACESSO NEGADO')
}