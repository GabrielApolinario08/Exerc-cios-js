let number = document.querySelector('#num')
let btn = document.querySelector('#botao')
let res = document.querySelector('#res')
let arr = []
function calculando() {
    if(validando()) {
        inserindo()
        somando()
        QuantidadeDeNumeros()
        media()
        mediaPares()
        clear()
    }
    
}
function validando() {
    if(number.value == '') {
        alert('ERRO - Insira um valor!')
        return false
    }
    return true
}

function inserindo() {
    arr.push(number.value)
    res.innerHTML = `<strong>Todos os números digitados:</strong> ${arr.join(' - ')}<br>`
}

function somando() {
    let soma = 0
    for(let i = 0 ; i < arr.length ; i++) {
        soma = soma + parseInt(arr[i])
    }
    res.innerHTML += `<strong>Soma de todos os números digitados:</strong> ${soma}<br>`
    return soma
}

function QuantidadeDeNumeros() {
    res.innerHTML += `<strong>Quantidade de números digitados:</strong> ${arr.length}<br>`
}

function media() {
    let med = 0
    med = somando() / arr.length
    res.innerHTML += `<strong>Média dos números digitados:</strong> ${med.toFixed(2)}<br>`
}

function mediaPares() {
    let somaPar = 0
    let quantidadeDePares = 0
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] % 2 == 0) {
            somaPar = somaPar + parseInt(arr[i])
            quantidadeDePares++
        }
    }

    res.innerHTML += (quantidadeDePares > 0) ? `<strong>Média dos números pares digitados:</strong> ${(somaPar / quantidadeDePares).toFixed(2)}<br>` : ''
}

function clear() {
    number.value = ''
    number.focus()
}
btn.addEventListener('click', calculando)