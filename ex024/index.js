let salario = document.getElementById('salarioMin')
let gasto = document.getElementById('kwGasto')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function energia() {
    let kw1 = (1/7 * salario.value) / 100
    let valorPago = kw1 * gasto.value
    let novoValor = valorPago - (valorPago * 10/100)
    res.innerHTML = `Valor em reais de cada quilowatt: R$${kw1.toFixed(2).replace('.', ',')}<br>`
    res.innerHTML += `Valor em reais a ser pago: R$${valorPago.toFixed(2).replace('.', ',')}<br>`
    res.innerHTML += `Novo valor a ser pago por essa residência com um desconto de 10%: $${novoValor.toFixed(2).replace('.', ',')}`
}