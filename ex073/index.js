const btn = document.querySelector('#botao')
const res = document.querySelector('#res')

function calculando() {
    let number = parseInt(document.querySelector('#num').value)
    res.innerHTML += `Número: ${number} | Quadrado: ${Math.pow(number, 2)} <br>`
    document.querySelector('#num').value = ''
    document.querySelector('#num').focus()
}

btn.addEventListener('click', calculando)