//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 150000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;
let parcela = 0

if (mesesDecorridos <= 60 && totalJaPagoPeloAluno < 1800000 && rendaMensalEmCentavos > 200000) {
    parcela = 18 / 100 * rendaMensalEmCentavos / 100
    console.log(`O valor da parcela desse mês é de R$ ${parcela.toFixed(2)} reais`)
} else {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido`)
}