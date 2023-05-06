const btn = document.querySelector('#botao')
const res = document.querySelector('#res')
let arr = []

function imprimindo() {
    inserindo()
    res.innerHTML = `Multiplos de 3 e de 5 entre 30 e 300 de forma decrescente: ${arr.join(' - ')} - FIM!`
}

function inserindo() {
    let cont = 300
    while(cont >= 30) {
        if(cont % 3 == 0 && cont % 5 == 0) {
            arr.push(cont)
        }
        cont --
    }
    return arr
}

btn.addEventListener('click', imprimindo)