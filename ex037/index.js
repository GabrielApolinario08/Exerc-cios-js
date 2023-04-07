let valor = document.getElementById('valor')
let res = document.getElementById('res')

function tudo10() {
    let v = Math.pow(valor.value, 2)
    res.innerHTML = `O quadrado do número informado é: ${v} <br>`
    if (v > 10) {
        res.innerHTML += `A raiz cúbica deste número é: ${Math.cbrt(v).toFixed(2)} <br>`
    } else if (v == 10) {
        res.innerHTML += `O quadrado do múmero irformado é igual a 10.<br>`
    } else {
        res.innerHTML += `O quadrado do número informado é menor que 10.<br>`
    }
}