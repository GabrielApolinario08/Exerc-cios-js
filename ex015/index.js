let A = document.querySelector('input#inputLado-A')
let B = document.querySelector('input#inputLado-B')
let C = document.querySelector('input#inputLado-C')
let bto = document.querySelector('button#botao')
let res = document.querySelector('div#res')

function calcular() {
    res.innerHTML = `O volume do paralelepípedo é ${A.value * B.value * C.value}`
}

bto.addEventListener('click', calcular)