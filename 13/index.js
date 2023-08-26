//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = 'cheque';

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
let valorFinal = 0

if (tipoDePagamento == 'credito') {
    valorFinal = (valorDoProduto - (valorDoProduto * 0.05)) / 100
    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`)
} else if (tipoDePagamento == 'cheque') {
    valorFinal = (valorDoProduto - (valorDoProduto * 0.03)) / 100
    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`)
} else if (tipoDePagamento == 'debito' || tipoDePagamento == 'dinheiro') {
    valorFinal = (valorDoProduto - (valorDoProduto * 0.10)) / 100
    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`)
}