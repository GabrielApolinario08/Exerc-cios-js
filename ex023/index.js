let n = document.getElementById('num')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function parImpar() {
    if (n.value % 2 == 0) {
        res.innerHTML = `O número digitado foi ${n.value} e ele é PAR! <br>`
        res.innerHTML += `${n.value} elevado ao quadrado fica: ${Math.pow(n.value, 2)}`
    } else {
        res.innerHTML = `O número digitado foi ${n.value} e ele é IMPAR!<br>`
        res.innerHTML += `${n.value} elevado ao cubo fica ${Math.pow(n.value, 3)}`
    }
}