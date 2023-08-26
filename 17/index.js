//valor do produto comprado.
const valorDoProduto = 2000;

//quantidade de parcelas
const quantidadeDoParcelamento = 5;

//valor pago
const valorPago = 800;
let valorDaParcela = 0
let parcelasFaltam

if (valorPago <= valorDoProduto) {
    valorDaParcela = valorDoProduto / quantidadeDoParcelamento
    parcelasFaltam = ((valorDoProduto - valorPago) / valorDaParcela)
    console.log(`Restam ${parcelasFaltam} parcelas de R$${valorDaParcela.toFixed(2)}`)
}