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
        let cont = menor + 1
        while (cont < maior) {
            if(cont % 5 == 0) {
                arr.push(cont)
            }
            cont ++
        }
        console.log(arr.length)
        if (arr.length === 0) {
            res.innerHTML = `Não existe números múltiplos de 5 entre ${menor} e ${maior}.`
        } else {
            res.innerHTML = `Múltiplos de 5 entre o intervalo de ${menor} e ${maior} sem contabilizar os números digitados: ${arr.join(' - ')}`
        }
    }
}

btn.addEventListener('click', calculando)