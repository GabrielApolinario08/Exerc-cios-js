let bMenor = document.querySelector('input#inputBase-menor')
let bMaior = document.querySelector('input#inputBase-maior')
let altura = document.querySelector('input#input-altura')

let bto = document.querySelector('button#botao')
let res = document.querySelector('div#res')


function calcular() {
    res.innerHTML = `A área do trapézio informado é ${(parseFloat(bMenor.value) + parseFloat(bMaior.value)) * altura.value / 2}`
}

bto.addEventListener('click', calcular)
