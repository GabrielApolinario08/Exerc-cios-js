let graus = document.getElementById('tempC')
let res = document.getElementById('res')

function conversor() {
    let f = graus.value * (9/5) + 32
    res.innerHTML = `${graus.value}°C em fahrenheit é ${f}°F.`
}