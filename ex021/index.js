let n1 = document.getElementById('nota1')
let n2 = document.getElementById('nota2')
let n3 = document.getElementById('nota3')
let n4 = document.getElementById('nota4')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function mediaPonderada() {
    let media = ((n1.value * 3 + n2.value * 5 + n3.value * 6 + n4.value * 6) / 20).toFixed(1)
    res.innerHTML = `A sua média foi calculada e chegamos no resultado ${media}<br>`
    if (media >= 6) {
        res.innerHTML += `Sua nota está acima da 6, portanto foi APROVADO!`
    } else {
        res.innerHTML += `Sua nota esta abaixo de 6, portanto foi REPROVADO!`
    }
}