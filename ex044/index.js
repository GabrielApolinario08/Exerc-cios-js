let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('res')

function somar() {
    let menor = n1.value
    let maior = n2.value
    if (parseFloat(n1.value) > parseFloat(n2.value)) {
        menor = n2.value
        maior = n1.value
    }

    let cont = menor
    let soma = 0
    while (parseFloat(cont) <= parseFloat(maior)) {
        if (cont % 2 == 0) {
            soma = soma + parseFloat(cont)
        }
        cont ++
    }
    res.innerHTML += `A soma dos valores pares entre ${menor} e ${maior} é ${soma}`
}