let sal = document.getElementById('salario')
let res = document.getElementById('res')

function aumento() {
    let newSal = parseFloat(sal.value) + (25 * sal.value / 100)
    res.innerHTML = `Com um aumento de 25% seu novo salário é R$${newSal.toFixed(2)}`
}