const res = document.querySelector('#res')
const arr = []
let cont = 1
while (cont <= 100) {
    arr.push(cont)
    cont++
}

res.innerHTML = `Contagem normal: <br>${arr.join(' - ')} - FIM<br><br>`
res.innerHTML += `Contagem pedida: <br>`
for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] % 2 == 0) {
        res.innerHTML += ' @ -'
    } else {
        res.innerHTML += ' * -'
    }
}
res.innerHTML += ' FIM'