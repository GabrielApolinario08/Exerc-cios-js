const btn = document.querySelector('#botao')
const res = document.querySelector('#res')

function calculando() {
    if (document.querySelector('#num01').value <= 0 || document.querySelector('#num02').value <= 0 || document.querySelector('#num01').value == document.querySelector('#num02').value) {
        alert('ERRO - Digite os números corretamente!')
    } else {
        let n1 = parseInt(document.querySelector('#num01').value)
        let n2 = parseInt(document.querySelector('#num02').value)
        let menor = n1
        let maior = n2
        if (n1 > n2) {
            menor = n2
            maior = n1
        }
        const arr = []
        let cont = maior
        while (cont >= menor) {
            if (cont % 3 == 0 && cont % 7 == 0) {
                arr.push(cont)
            }
            cont --
        }
        if (arr.length == 0) {
            res.innerHTML = `Não existem números múltiplos de 3 e 7 entre ${menor} e ${maior}.`
        } else {
            res.innerHTML = `Números múltiplos de 3 e 7 entre ${menor} e ${maior} de forma decrescente: ${arr.join(' - ')}`
        }
    }
}

btn.addEventListener('click', calculando)