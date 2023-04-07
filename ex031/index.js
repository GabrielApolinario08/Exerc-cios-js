let n1 = document.getElementById('num1')
let n2 = document.getElementById('num2')
let n3 = document.getElementById('num3')
let res = document.getElementById('res')

function calcular() {
    let soma = Math.pow(n1.value, 2) + Math.pow(n2.value, 2) + Math.pow(n3.value, 2)
    if (soma % 2 == 0) {
        res.innerHTML = `O resultado ${soma} é PAR!`
    } else {
        res.innerHTML = `O resultado ${soma} é IMPAR!`
    }
}