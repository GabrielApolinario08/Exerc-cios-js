let n = document.querySelector('#num')
let botao = document.querySelector('#btn')
let todosN = document.querySelector('#todos')
let par = document.querySelector('#pares')
let impar = document.querySelector('#impares')
let numeros = []
function inserindo() {
    numeros.push(n.value)
    mostrando()
    n.value = ''
}

function mostrando() {
    todosN.innerHTML = ''
    par.innerHTML = ''
    impar.innerHTML = ''
    for(let i = 0 ; i < numeros.length ; i++) {
        console.log(numeros)
        console.log('numero', i)
        todosN.innerHTML += `<p class="number">Número: ${numeros[i]}</p><br>`

        if(numeros[i] % 2 == 0) {
            par.innerHTML +=`<p class="number par">Número: ${numeros[i]}</p><br>`
        } else {
            impar.innerHTML += `<p class="number impar">Número: ${numeros[i]}</p><br>`
        }
    }
}

botao.addEventListener('click', inserindo)