const btn = document.querySelector('#botao')
const res = document.querySelector('#res')
let arr = []

function mostrando() {
    inserindo()
    res.innerHTML = `Todos os números ímpares de 1000 até 150 em ordem decrescente:<br> ${arr.join(' - ')}`
}

function inserindo() {
    for(let cont = 1000 ; cont >= 150 ; cont--) {
        if(cont % 2 !== 0) {
            arr.push(cont)
        }
    }
    return arr
}

btn.addEventListener('click', mostrando)