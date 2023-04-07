let n1 = document.getElementById('num1')
let n2 = document.getElementById('num2')
let res = document.getElementById('res')

function soma() {
    let soma = parseInt(n1.value) + parseInt(n2.value)
    if (soma > 10) {
        res.innerHTML = `Os múmeros digitaos foram ${n1.value} e ${n2.value}<br>`
        res.innerHTML += `A adição entre esses dois números é ${soma}<br>`
        res.innerHTML += `A raiz cúbica de ${soma} é ${Math.cbrt(soma)}<br>`
    } else {
        res.innerHTML = `Os números digitados foram ${n1.value} e ${n2.value}<br>`
        res. innerHTML += `A adição entre esses dois números é ${soma}<br>`
    }
}