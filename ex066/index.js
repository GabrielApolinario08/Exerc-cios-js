const btn = document.querySelector('#botao')
const res = document.querySelector('#res')

function calculando() {
    const n1 = parseInt(document.querySelector('#valor01').value)
    const n2 = parseInt(document.querySelector('#valor02').value)
    const resultado = 0
    if(n1 == n2) {
        somar(n1, n2, resultado)
    } else {
        multiplicar(n1, n2, resultado)
    }
}

function somar(n1, n2, resp) {
    resp = n1 + n2
    res.innerHTML = `Como o primeiro e o segundo valor são iguais, o resultado da soma destes números é ${resp}.`
}

function multiplicar(n1, n2, resp) {
    resp = n1 * n2
    res.innerHTML = `Como o primeiro e o segundo valor são diferentes, o resultado da multiplicação destes números é ${resp}.`
}

btn.addEventListener('click', calculando)