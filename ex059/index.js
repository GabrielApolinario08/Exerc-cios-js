const btn = document.querySelector('#botao')
const res = document.querySelector('#res')
let arr = []

function mostrando() {
    let n1 = parseInt(document.querySelector('#num01').value)
    let n2 = parseInt(document.querySelector('#num02').value)
    let menor = n1
    let maior = n2
    if(n1 > n2) {
        menor = n2
        maior = n1
    }
    inserindo()
    res.innerHTML = `Todos os números pares e múltiplos de 7 compreendidos entre ${menor} e ${maior}: ${arr.join(' - ')} - FIM! `
}

function inserindo() {
    let n1 = parseInt(document.querySelector('#num01').value)
    let n2 = parseInt(document.querySelector('#num02').value)
    let menor = n1
    let maior = n2
    if(n1 > n2) {
        menor = n2
        maior = n1
    }
    arr = []
    let cont = menor + 1
    while(cont < maior) {
        if(cont % 7 == 0 && cont % 2 == 0) {
            arr.push(cont)
        }
        cont++
    }
    return arr
}

btn.addEventListener('click', mostrando)