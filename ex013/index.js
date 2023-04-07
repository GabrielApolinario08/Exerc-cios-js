let num01 = document.querySelector('input#num01-Input')
let num02 = document.querySelector('input#num02-Input')
let num03 = document.querySelector('input#num03-Input')
let num04 = document.querySelector('input#num04-Input')

let bto = document.querySelector('button#botao')
let res = document.querySelector('div#res')



function calcular() {
    let soma = num01.value * 1 + num02.value * 2 + num03.value * 3 + num04.value * 4
    let media = soma / 10
    res.innerHTML = `A média ponderada dos valores fornecidos é ${media}` 
}
bto.addEventListener('click', calcular)