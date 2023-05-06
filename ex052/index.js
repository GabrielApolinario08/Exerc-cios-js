let botao = document.querySelector('#btn')
let res = document.querySelector('#res')

botao.addEventListener('click', () => {
    let altura = parseFloat(document.querySelector('#alturaInput').value)
    let peso = parseFloat(document.querySelector('#pesoInput').value)
    if( altura > 0 && peso > 0) {
        let imc = peso/Math.pow(altura, 2)
        let tabela = ['Muito abaixo do peso', 'Abaixo do peso', 'Peso normal', 'Acima do peso', 'Obesidade I', 'Obesidade II (severa)', 'Obesidade III (mórbida)']
        res.innerHTML = `O seu IMC é de ${imc.toFixed(2)}<br><br>`
        if(imc < 17) {
            res.innerHTML += `Seu status: ${tabela[0]}`
        } else if(imc >= 17 && imc <= 18.49) {
            res.innerHTML += `Seu status: ${tabela[1]}`
        } else if(imc >= 18.5 && imc <= 24.99) {
            res.innerHTML += `Seu status: ${tabela[2]}`
        } else if(imc >= 25 && imc <= 29.99) {
            res.innerHTML += `Seu status: ${tabela[3]}`
        } else if(imc >= 30 && imc <= 34.99) {
            res.innerHTML += `Seu status: ${tabela[4]}`
        } else if(imc >= 35 && imc <= 39.99) {
            res.innerHTML += `Seu status: ${tabela[5]}`
        } else {
            res.innerHTML += `Seu status: ${tabela[6]}`
        }

    } else {
        alert('ERRO - Insira os valores corretamente!')
    }
    

})