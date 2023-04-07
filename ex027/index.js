let n = document.getElementById('num')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function calcular() {
    if (n.value <= 0) {
        alert('[ERRO!] Digite um número adequdo!')
    } else {
        let elevado = Math.pow(n.value, 4)
        if (elevado % 2 == 0 && elevado % 5 == 0) {
            res.innerHTML = `O número digitado foi: ${n.value} <br>`
            res.innerHTML += `Seu valor elevado ao quadrado é: ${Math.pow(n.value, 2)} <br>`
            res.innerHTML += `Seu valor elevado ao cubo é: ${Math.pow(n.value, 3)} <br>`
            res.innerHTML += `Seu valor elevado a sétima é: ${Math.pow(n.value, 7)} <br>`
        } else if (elevado % 2 != 0 ) {
            res.innerHTML = `O número digitado foi ${n.value} <br>`
            res.innerHTML += `Sua raiz quadrada é ${Math.sqrt(n.value)} <br>`
            res.innerHTML += `Sua raiz cúbica é ${Math.cbrt(n.value)} <br>`
            res.innerHTML += `Sua raiz sétima é ${Math.pow(n.value, 1/7)} <br>`
        }
    }
}