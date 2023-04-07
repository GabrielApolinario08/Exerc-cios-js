let n1 = document.getElementById('nota1')
let n2 = document.getElementById('nota2')
let n3 = document.getElementById('nota3')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function mediaArit() {
    let media = (parseFloat(n1.value) + parseFloat(n2.value) + parseFloat(n3.value)) / 3
    res.innerHTML = `A sua média foi calculada, média: ${media} <br>`
    if (media >= 7.50) {
        res.innerHTML += `Sua média é maior que 7,5, portanto foi <strong>APROVADO!</strong>`
    }else [
        res.innerHTML += `Sua média é menor que 7,5, portanto foi <strong>REPROVADO!</strong>`
    ]
}