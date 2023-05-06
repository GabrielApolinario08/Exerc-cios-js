let res = document.querySelector('#res')
let botao = document.querySelector('#btn')

function soma() {
    let cont = 1
    let numbers = []
    while(numbers.length < 50) {
        if(cont % 2 == 0) {
            numbers.push(cont)
        }
        cont++
    }
    console.log(numbers);
    res.innerHTML = `Os 50 primeiros números pares positivos: <br>${numbers.join(' - ')}<br><br>`
    let soma = 0
    for(let i = 0 ; i < numbers.length ; i++) {
        soma = soma + numbers[i]
    }
    res.innerHTML += `Soma: ${soma}.`
}

botao.addEventListener('click', soma)