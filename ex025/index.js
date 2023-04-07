let adja = document.getElementById('catetoAdja')
let opos = document.getElementById('catetoOpos')
let bto = document.getElementById('botao')
let res = document.getElementById('res')

function triangulo() {
    if (adja.value <= 0 || adja.value =='' || opos.value <= 0 || opos.value == '') {
        window.alert('[ERRO!] Valores incorretos!')
    } else {
        let area = adja.value * opos.value / 2
        let hip = Math.sqrt(Math.pow(adja.value, 2) + Math.pow(opos.value, 2))
        res.innerHTML = `A área do triângulo retângulo informado é: ${area}<br>`
        res.innerHTML += `O valor da Hipotenusa é: ${hip}`
        }
}