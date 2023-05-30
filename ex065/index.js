const btn = document.querySelector('#botao')
const res = document.querySelector('#res')

function calculando() {
    const nivel = document.querySelector('#nivel').value
    if (nivel < 0 || nivel > 10 || nivel == '') {
        alert('ERRO - Informe o valore corretamente!')
    } else {
        if (nivel > 9) {
            res.innerHTML = `Nível de risco: ${nivel}<br>
            Considerado <strong>GRAVE!!</strong>
            `
        } else {
            res.innerHTML = `Nível de risco: ${nivel}`
        }
    }
}

btn.addEventListener('click', calculando)