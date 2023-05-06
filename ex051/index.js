let menor = document.querySelector('#menor')
let botao = document.querySelector('#btn')
let todos = document.querySelector('#todos')
let maior = document.querySelector('#maior')
let n = document.querySelector('#num')
let numeros = []
function inserindo() {
    numeros.push(n.value)
    console.log(numeros);
    let maiorN = parseInt(numeros[0])
    let menorN = parseInt(numeros[0])
    for(let i = 0 ; i < numeros.length ; i++) {
        if(numeros[i] > maiorN) {
            maiorN = parseInt(numeros[i])
        }

        if(numeros[i] < menorN) {
            menorN = parseInt(numeros[i])
        }
    }

    console.log(numeros, '-', maiorN, '-', menorN);
    todos.innerHTML = `Todos os números: ${numeros.join(' - ')}<br><br>`
    maior.innerHTML = `Maior número: ${maiorN}<br><br>`
    menor.innerHTML = `Menor número: ${menorN}`
}


botao.addEventListener('click', inserindo)