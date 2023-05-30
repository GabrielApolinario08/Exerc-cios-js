const btn = document.querySelector('#botao')
const res = document.querySelector('#res')

function calculando() {
    let number = parseInt(document.querySelector('#num').value)
    if(number > 10) {
        let cont = 1
        res.innerHTML = ''
        while (cont <= number) {
            res.innerHTML += ` ${cont} -`
            cont ++
        }
        res.innerHTML += ' FIM!'

        document.querySelector('#num').value = ''
        document.querySelector('#num').focus()
    } else {
        alert('ERRO - Digite o valor corretamente!')
    }
}

btn.addEventListener('click', calculando)