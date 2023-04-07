let n = document.getElementById('num')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function parImpar() {
    if (n.value < 0 || n.value == '') {
        alert('[ERRO!] Valor incorreto!')
    } else {
        if (n.value % 2 == 0) {
            res.innerHTML = `O valor ${n.value} é PAR!`
        } else {
            res.innerHTML = `O valor ${n.value} é IMPAR!`
        }
    }
}