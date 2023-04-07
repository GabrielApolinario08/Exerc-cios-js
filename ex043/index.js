let n1 = document.getElementById('num1')
let n2 = document.getElementById('num2')
let res = document.getElementById('res')

function somar() {
    let menor = n1.value
    let maior = n2.value
    if (parseFloat(n2.value) < parseFloat(n1.value)) {
        menor = n2.value
        maior = n1.value
    }
    let cont = menor
    let soma = 0
    while (parseFloat(cont) <= parseFloat(maior)) {
        soma = parseFloat(soma) + parseFloat(cont)
        cont++
    }
    res.innerHTML += `A soma de todos os números entre ${menor} e ${maior} é ${soma}`
}   