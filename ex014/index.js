let raio = document.querySelector('input#inputRaio')
let bto = document.querySelector('button#botao')
let res = document.querySelector('div#res')

function calcular() {
    res.innerHTML = `Área da circunferência: ${(Math.PI * Math.pow(raio.value, 2)).toFixed(3)} <br>`
    res.innerHTML += `Perímetro da circunferência: ${(2 * Math.PI * raio.value).toFixed(2)}`
}

bto.addEventListener('click', calcular)
