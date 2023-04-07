let sal = document.getElementById('salario')
let res = document.getElementById('res')

function aumento() {
    res.innerHTML = `O seu salário atual é: R$${(parseFloat(sal.value)).toFixed(2)} <br>`
    res.innerHTML += `Com um aumento de 25% seu novo salário é: R$${(parseFloat(sal.value) + (sal.value * 25 / 100)).toFixed(2)}`
}