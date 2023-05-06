const btn = document.querySelector('#botao')
const pol = document.querySelector('#pol')
const cm = document.querySelector('#cm')
arrPol = []
arrCm = []

function mostrando() {
    inserindo()
    const res = document.querySelector('#res')
    res.className="d-flex container text-bg-dark col-3 rounded"
    for(let i = 0 ; i < arrPol.length ; i++) {
        pol.innerHTML += `<p class="border border-black border-end-0 fs-3 my-0">${arrPol[i]}</p> <br>`
        cm.innerHTML += `<p class="border border-black border-start-0 fs-3 my-0">${arrCm[i]}</p> <br>`
    }
}

function inserindo() {
    let cont = 1
    while(cont <= 20) {
        arrPol.push(cont)
        cont++
    }
    for(let i = 0 ; i < 20 ; i++) {
        arrCm[i] = arrPol[i] * 2.54
    }
}

btn.addEventListener('click', mostrando)