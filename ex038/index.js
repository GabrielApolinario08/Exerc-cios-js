let n1 = document.getElementById('valor1')
let n2 = document.getElementById('valor2')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function soma() {
    let soma = parseFloat(n1.value) + parseFloat(n2.value)
    if (soma > 10) {
        res.innerHTML = `A soma entre ${n1.value} e ${n2.value} é ${soma} e a raiz cúbica da adição é ${Math.cbrt(soma).toFixed(2)}`

    } else {
        res.innerHTML = `A soma entre ${n1.value} e ${n2.value} é ${soma}`
    }
}

bto.addEventListener('click', soma)