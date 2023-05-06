const btn = document.querySelector('#botao')
const res = document.querySelector('#res')
let numbers = []

function inserindo() {
    let num = parseFloat(document.querySelector('#numero').value)
    if(validando()) {
        numbers.push(num)
        mostrandoTodos()
        limpando()
        soma(numbers)
        quantidadeDeNumeros(numbers)
        media(numbers)
        mediaPares(numbers)
    }
    
}

function validando() {
    let num = document.querySelector('#numero')
    if(num.value == '') {
        alert('ERRO - Insira um valor!')
        return false
    }
    return true
}

function mostrandoTodos() {
    res.innerHTML = `Todos os números:`
    for(let i = 0 ; i < numbers.length ; i++) {
        res.innerHTML += ` ${numbers[i]} |`
    }
}

function limpando() {
    document.querySelector('#numero').value = ''
    document.querySelector('#numero').focus()
}

function soma(arr) {
    let soma = 0
    res.innerHTML += `<br>`
    res.innerHTML += `Soma de todos os números: `
    for(let i = 0 ; i < arr.length ; i++) {
        soma = soma + arr[i]
    }
    res.innerHTML += `${soma} <br>`
}

function quantidadeDeNumeros(arr) {
    res.innerHTML += `Quantidade de números digitados: ${arr.length} <br>`
}

function media(arr) {
    let soma = 0
    for(let i = 0 ; i < arr.length ; i++) {
        soma = soma + arr[i]
    }
    res.innerHTML += `Media: ${(soma / arr.length).toFixed(0)} <br>`
}

function mediaPares(arr) {
    let soma = 0
    let numPar = 0

    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] % 2 == 0) {
            soma = soma + arr[i]
            numPar += 1
        } 
    }
    res.innerHTML += `Média dos números pares: ${(soma / numPar).toFixed(0)}`
}

btn.addEventListener('click', inserindo)