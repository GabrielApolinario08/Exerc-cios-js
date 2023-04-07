let Rmaior = document.getElementById('inputRmaior')
let Rmenor = document.getElementById('inputRmenor')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function calcular() {
    let areaMaior = Math.PI.toFixed(2) * Math.pow(Rmaior.value, 2)
    let areaMenor = Math.PI.toFixed(2) * Math.pow(Rmenor.value, 2)

    res.innerHTML = `A área da coroa informada é: ${(areaMaior - areaMenor).toFixed(2)}`
}

bto.addEventListener('click', calcular)