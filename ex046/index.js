let n = document.getElementById('num')
let res = document.getElementById('res')

function negPos() {
    if(n.value > 0) {
        res.innerHTML = `O número digitado foi ${n.value}<br>`
        res.innerHTML += `Sua raiz quadrada é ${Math.sqrt(n.value)}`

    } else if(n.value < 0) {
        res.innerHTML = `O número digitado foi ${n.value}<br>`
        res.innerHTML += `Seu valor elevado ao quadrado é ${Math.pow(n.value, 2)}`
    }
}
