let nome = document.getElementById('nome')
let nota1 = document.getElementById('nota1')
let nota2 = document.getElementById('nota2')
let res = document.getElementById('res')

function media() {
    let media = (parseFloat(nota1.value) + parseFloat(nota2.value)) / 2

    res.innerHTML = `Nome: ${nome.value}<br>`
    res.innerHTML += `Primeira nota: ${nota1.value}<br>`
    res.innerHTML += `Segunda nota: ${nota2.value}<br>`
    res.innerHTML += `Média: ${media}<br>`

    if (media > 7) {
        res.innerHTML += `<strong>APROVADO!</strong>`
    } else if (media < 5) {
        res.innerHTML += `<strong>RETIDO!</strong>`
    } else {
        res.innerHTML += `<strong>RECUPERAÇÃO!</strong>`
    }
}