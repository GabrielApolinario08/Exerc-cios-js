const btn = document.querySelector('#botao')
const res = document.querySelector('#res')
function calculando() {
    let num = parseInt(document.querySelector('#number').value)
    let num2 = parseInt(document.querySelector('#number2').value)
    if (num > 0 && num <= 100 && num2 > 0 && num2 <= 100) {
        if (num > num2) {
            res.innerHTML = `Menor número: ${num2}`
        } else {
            res.innerHTML = `Menor número: ${num}`
        }
    } else {
        alert('ERRO - Informe valores maiores que zero e menores ou igual a cem!')
    }

}

btn.addEventListener('click', calculando)