let btn = document.querySelector('#botao')
let res = document.querySelector('#res')
let arr = []
let soma = 0

function somando() {
    inserindo()
    for(let i = 0 ; i < arr.length ; i++) {
        soma = soma + arr[i]
    }
    res.innerHTML = `Todos os números pares múltiplos de 5 e 7 entre 0 e 100: ${arr.join(' - ')}<br>`
    res.innerHTML += `Soma destes números: ${soma}`
}

function inserindo() {
    let cont = 0
    while(cont <= 100) {
        if(cont % 2 == 0 && cont % 5 == 0 && cont % 7 == 0) {
            arr.push(cont)
        }
        cont++
    }
    return arr
}

btn.addEventListener('click', somando)
