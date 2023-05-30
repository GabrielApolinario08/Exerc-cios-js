const btn = document.querySelector('#botao')
const res = document.querySelector('#res')

function calculando() {
    const number = parseInt(document.querySelector('#num').value)
    if (number < 0 || number > 10 || document.querySelector('#num').value == '') {
        alert('ERRO - Insira os valores corretamente!')
    } else {
        let cont = 100
        res.innerHTML = ''
        res.innerHTML += 'Contagem: '
        while (cont >= number) {
            res.innerHTML += ` ${cont} -`
            cont --
        }
        res.innerHTML += ' FIM!'
    }
}

btn.addEventListener('click', calculando)