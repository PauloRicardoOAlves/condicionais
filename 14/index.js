//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 3.1;

if (quantidadeDeAguaIngerida < 1.5) {
    console.log('Rito alto - Você está bebendo pouquíssima água, beba mais água!')
} else if (quantidadeDeAguaIngerida > 3) {
    console.log('Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!')
} else {
    console.log('Risco Moderado - Você está ingerindo pouca água, beba mais!')
}