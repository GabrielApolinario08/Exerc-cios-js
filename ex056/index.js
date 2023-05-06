let btn = document.querySelector('#botao')
let res = document.querySelector('#res')
let arrNumbers = []
let cont = 0
function somando() {
    inserindo()
    let soma = 0
    for(let i = 0 ; i < arrNumbers.length ; i++) {
        soma = soma + arrNumbers[i]
    }
    res.innerHTML = `Multiplos de 3 e de 5 entre 0 e 1000:<br> ${arrNumbers.join(' - ')} <br><br>`
    res.innerHTML += `Soma desses números: ${soma}`
}

function inserindo() {
    while(cont <= 1000) {
        if(cont % 3 == 0 && cont % 5 == 0) {
            arrNumbers.push(cont)
        }
        cont++
    }
}

btn.addEventListener('click', somando)