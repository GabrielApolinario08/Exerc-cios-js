const btn = document.querySelector('#botao')
const res = document.querySelector('#res')

function calcular() {
    const height = parseFloat(document.querySelector('#altura').value)
    const sex = document.querySelector('#sexo').value
    if (sex == 'Masculino') {
        men(height)
    } else {
        woman(height)
    }
}

function men(alt) {
    const pesoIdeal = (72.7 * alt) - 58
    res.innerHTML = `De acordo com os dados informados o seu peso ideal é de ${pesoIdeal.toFixed(2)}kg.`
}

function woman(alt) {
    const pesoIdeal = (62.1 * alt) - 44.7
    res.innerHTML = `De acordo com os dados informados o seu peso ideal é de ${pesoIdeal.toFixed(2)}kg.`
}

btn.addEventListener('click', calcular)