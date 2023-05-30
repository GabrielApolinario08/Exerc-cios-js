const res = document.querySelector('#res')
const btn = document.querySelector('#botao')

function calculando() {
    const end = document.querySelector('#lastValue').value
    const raz = parseInt(document.querySelector('#razao').value)
    let arr = []
    let cont = 0
    while(cont <= end) {
        arr.push(cont)
        cont += raz
    }
    res.innerHTML = `Limite superior: ${end}<br>`
    res.innerHTML += `Incremento: ${raz}<br>`
    res.innerHTML += `Saída: ${arr.join(', ')}`
}

btn.addEventListener('click', calculando)
