let base = document.getElementById('inputBase')
let altura = document.getElementById('inputAltura')
let bto = document.getElementById('botao')
let res = document.getElementById('res')


function calcular() {
    console.log(base.value)
    console.log(altura.value)
    res.innerHTML = `O volume do prisma de base retangular informado é: ${((base.value * altura.value) / 2) * altura.value}`
}

bto.addEventListener('click', calcular)