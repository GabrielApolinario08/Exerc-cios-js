let valor = document.getElementById('valor')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function desconto() {
    if (valor.value <= 0 || valor.value == '') {
        alert('[ERRO!] Informe o valor corretamente!')
    } else {
        res.innerHTML = `O valor do produto com desconto de 9% é: R$${(valor.value - (valor.value * 9 / 100)).toFixed(2)}`
    }

    valor.focus()
}

bto.addEventListener('click', desconto)