let dMai = document.getElementById('dMaior')
let dMen = document.getElementById('dMenor')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function area() {
    if (dMai.value <= 0 || dMai.value == '' || dMen.value <= 0 || dMen.value == '') {
        alert('[ERRO!] Informe os valores de forma correta!')
    } else {
        res.innerHTML = `O valor da área do losango é: ${(dMai.value * dMen.value) / 2}`
    }
}

bto.addEventListener('click', area)