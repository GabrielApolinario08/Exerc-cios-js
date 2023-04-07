let n = document.getElementById('num')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function calcular() {
    res.innerHTML = `O número digitado foi ${n.value} <br> Sua raiz cúbica é ${Math.cbrt(n.value).toFixed(2)} <br>  Sua raiz quadrada é ${Math.sqrt(n.value).toFixed(2)}`
}

bto.addEventListener('click', calcular)