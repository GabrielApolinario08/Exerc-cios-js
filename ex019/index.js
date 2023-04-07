let raio = document.querySelector('input#inputRaio')
let altura = document.querySelector('input#inputAltura')
let bto = document.querySelector('button#botao')
let res = document.querySelector('div#res')

function calcular() {
    let areaBase = Math.PI.toFixed(2) * Math.pow(raio.value, 2)
    res.innerHTML = `O volumedo cilindro informado é ${(areaBase * altura.value).toFixed(2)}`
}

bto.addEventListener('click', calcular)