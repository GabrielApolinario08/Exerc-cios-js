let res = document.querySelector('#res')
let arr = []
let soma = 0
let cont = 1

while(cont <= 1000) {
    if(cont % 5 == 0 && cont % 3 == 0) {
        arr.push(cont)
    }
    cont ++
}

for(let i = 0 ; i < arr.length ; i++) {
    soma = soma + arr[i]
}

res.innerHTML = `Todos os números múltiplos de 3 e 5 abaixo de 1000:<br> ${arr.join(' - ')}<br><br>`
res.innerHTML += `Soma dos números acima: ${soma}`
console.log(arr)
console.log(soma)