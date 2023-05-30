const res = document.querySelector('#res')
const numbers = []
const quadrado = []

let cont = 1
while (cont <= 20) {
    numbers.push(cont)
    cont++
}

res.innerHTML += `<div class="pai"><div class="linha">Número</div> <div class="linha">Quadrado</div></div>`
for (let i = 0 ; i < numbers.length ; i++) {
    quadrado.push(Math.pow(numbers[i], 2))
    res.innerHTML += `<div class="pai"><div class="linha">${numbers[i]}</div> <div class="linha">${quadrado[i]}</div></div>`
}
