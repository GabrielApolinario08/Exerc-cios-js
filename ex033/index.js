let degrau = document.getElementById('altDegrau')
let desejada = document.getElementById('altDese')
let res = document.getElementById('res')

function escada() {
    let r = desejada.value / degrau.value
    res.innerHTML = `Para chegar na altura de ${desejada.value} metros você precisa subir ${r} degraus.`
}