let quantidade = document.getElementById(`qPicole`)
let tipo = document.getElementById('tipo')
let res = document.getElementById('res')

function picole() {
    res.innerHTML = `Quantidade de picoles vendidos: ${quantidade.value}<br>`
    res.innerHTML += `Tipo do picolé vendido: ${tipo.value}<br>`
    if(tipo.value == 1) {
        res.innerHTML += `O preço do picolé 1 é R$ 1,50.<br>`
        res.innerHTML += `O total arrecadado foi R$ ${quantidade.value * 1.50}.` 
    } else if(tipo.value == 2) {
        res.innerHTML += `O preço do picolé 2 é R$ 2,60.<br>`
        res.innerHTML += `O total arrecadado foi R$ ${quantidade.value * 2.60}.`
    } else if(tipo.value == 3) {
        res.innerHTML += `O preço do picolé 3 é R$ 3,75.<br>`
        res.innerHTML += `O total arrecadado foi R$ ${quantidade.value * 3.75}.`
    }
}