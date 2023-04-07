let raio = document.getElementById('inputRaio')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function calcular() {
    res.innerHTML = `A área da esfera é ${(4 * Math.PI.toFixed(2) * Math.pow(raio.value, 2)).toFixed(2)} <br>`
    res.innerHTML += `O volume da esfera é ${((4 * Math.PI.toFixed(2) * Math.pow(raio.value, 3)) / 3).toFixed(2)}`
}

bto.addEventListener('click', calcular)