let n = document.getElementById('num')
let bto = document.getElementById('botao')
let div = document.getElementById('div')

function calcula() {
    div.innerHTML = `A raiz quadrada do número ${n.value} é ${Math.sqrt(n.value)}.`
}

bto.addEventListener('click', calcula)