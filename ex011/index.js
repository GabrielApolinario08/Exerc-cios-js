let n = document.getElementById('num')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function calcula() {
    res.innerHTML = `O número digitado foi ${n.value} e seu valor elevado a 2 é ${Math.pow(n.value, 2)}, elevado a 3 é ${Math.pow(n.value, 3)}, elevado a 4 é ${Math.pow(n.value, 4)}, elevado a 5 é ${Math.pow(n.value, 5)}`   
}

bto.addEventListener('click', calcula)