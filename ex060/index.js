const btn = document.querySelector('#botao')
const res = document.querySelector('#res')
let arr = []
let soma = 0

function mostrando() {
    inserindo()
    somando()
    res.innerHTML = `Números ímpares de 1 a 200: ${arr.join(' - ')} <br>`
    res.innerHTML += `soma dos números acima: ${soma}`
}

function inserindo() {
    for(let cont = 1 ; cont <= 200 ; cont++) {
        if(cont % 2 !== 0) {
            arr.push(cont)
        }
    }
    return arr
}

function somando() {
    for(let i = 0 ; i < arr.length ; i++) {
        soma += arr[i]
    }
    return soma
}
 
btn.addEventListener('click', mostrando)