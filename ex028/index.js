let n1 = document.getElementById('num1')
let n2 = document.getElementById('num2')
let n3 = document.getElementById('num3')
let bto = document.getElementById('botao')
let res = document.getElementById('res')
function calcular() {
    res.innerHTML += ''
    if (n1.value > 0) {
        res.innerHTML += `O número ${n1.value} é POSITIVO! <br>`

    } else if (n1.value == 0) {

        res.innerHTML += `O número ${n1.value} é NULO! <br>`

    } else {
        res.innerHTML += `O número ${n1.value} é NEGATIVO! <br>`
    }


    if (n2.value > 0) {
        res.innerHTML += `O número ${n2.value} é POSITIVO! <br>`

    } else if (n2.value == 0) {

        res.innerHTML += `O número ${n2.value} é NULO! <br>`

    } else {
        res.innerHTML += `O número ${n2.value} é NEGATIVO! <br>`
    }


    if (n3.value > 0) {
        res.innerHTML += `O número ${n3.value} é POSITIVO! <br>`

    } else if (n3.value == 0) {
        res.innerHTML += `O número ${n3.value} é NULO! <br>`

    } else {
        res.innerHTML += `O número ${n3.value} é NEGATIVO! <br>`
    }

    let maior = Number(n1.value)
    if (Number(n2.value) > maior) {
        maior = Number(n2.value)
    }
    if (Number(n3.value) > maior) {
        maior = Number(n3.value)
    }
    
    res.innerHTML += `O maior número digitado foi ${maior}. <br><br><br>`
}
