let n1 = document.querySelector('#nota01')
let n2 = document.querySelector('#nota02')
let n3 = document.querySelector('#nota03')
let botao = document.querySelector('#btn')
let res = document.querySelector('#res')
let opc = document.querySelector('#opcao')

botao.addEventListener('click', (validando) => {
    if(n1.value < 0 || n2.value < 0 || n3.value < 0 || n1.value == '' || n2.value == '' || n3.value == '' || opc.value < 1 || opc.value > 2) {
        alert('ERRO - Insira os valores corretamente!')
    }else {
        let notas = [n1.value, n2.value, n3.value]
        let media = 0
        if (opc.value == 1) {
            for(let i = 0 ; i < notas.length ; i++) {
                media = media + parseFloat(notas[i])
            }
            media = media / 3
            res.innerHTML = `Sua média aritmética é de ${media.toFixed(2)}`
        } else {
            let pesos = [3, 3, 4]
            let soma = 0
            for(let i = 0 ; i < notas.length ; i++) {
                media = media + parseFloat(pesos[i]) * parseFloat(notas[i])
                soma = soma + pesos[i]
            }
            media = media / soma
            res.innerHTML = `Sua média ponderada é de ${media.toFixed(2)}`
        }
    }

})