let n = document.getElementById('num')
let res = document.getElementById('res')

function numeros() {
    if (n.value < 0 || n.value > 10 || n.value == '') {
        alert('[ERRO!] Digite um número entre 0 e 10.')
    } else {
        res.innerHTML = ''
        let cont = 20
        while (cont >= n.value) {
            res.innerHTML += `${cont} - `
            cont --
        }
        res.innerHTML += `Acabou!!!`
    }

    
}