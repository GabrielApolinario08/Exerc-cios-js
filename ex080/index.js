const res = document.querySelector('#res')

for (let i = 1 ; i <= 600 ; i++) {
    if(i % 2 == 0) {
        res.innerHTML += ` ${i} -`
    }
}

res.innerHTML += ` FIM!`