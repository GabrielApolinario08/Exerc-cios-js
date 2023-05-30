const btn = document.querySelector('#botao')
const res = document.querySelector('#res')

function calculando() {
    let number = parseInt(document.querySelector('#num').value)
    res.innerHTML += `${number} | ${number / 2}<br>`
    clear()
}

function clear() {
    document.querySelector('#num').focus()
    document.querySelector('#num').value = ''
}

btn.addEventListener('click', calculando)