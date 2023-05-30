const btn = document.querySelector('#botao')
const res = document.querySelector('#res')

function calculando() {
    res.innerHTML = 'Números:'
    for(let cont = 1 ; cont <= 10 ; cont++) {
        if(cont % 2 == 0) {
            res.innerHTML += ` ${cont} -`
        }
    }
    res.innerHTML += ` FIM!`
}

btn.addEventListener('click', calculando)