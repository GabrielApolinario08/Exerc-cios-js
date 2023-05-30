const btn = document.querySelector('#botao')
const res = document.querySelector('#res')

function calcular() {
    const number = parseInt(document.querySelector('#num').value)

    if (number % 2 == 0) {
        par(number)
    } else {
        impar(number)
    }
}

function par(aux) {
    res.innerHTML = `Como o número informado é par somaremos 5 e obteremoso o resultado de ${aux + 5}.`
}
function impar(aux) {
    res.innerHTML = `Como o número informado é ímpar somaremos 8 e obteremoso o resultado de ${aux + 8}.`
}

btn.addEventListener('click', calcular)