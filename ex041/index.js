let n = document.getElementById('num')
let res = document.getElementById('res')

function somar() {
    if (n.value <=0 || n.value == '') {
        alert('[ERRO!] Digite um número maior que zero!')
    } else {
        let cont = 0
        while (cont <= n.value) {
            res.innerHTML += `${cont} - `
            cont ++
        }
        res.innerHTML += `Acabou!!!`
    }
}