let D = document.getElementById('maior')
let d = document.getElementById('menor')
let res = document.getElementById('res')

function lado() {
    if(D.value <= 0 || D.value == '' || d.value <= 0 || d.value == '') {
        alert('[ERRO!] Informe os dados corretamente!')
    } else {
        res.innerHTML = `O lado do losango informado é: ${Math.sqrt(Math.pow(D.value, 2) + Math.pow(d.value, 2))}`
    }
}