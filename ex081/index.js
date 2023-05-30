const res = document.querySelector('#res')
const btn = document.querySelector('#botao')
const arr = []

btn.addEventListener('click', (legal) => {
    legal.preventDefault()
    const nome = document.querySelector('#nome').value
    const idade = parseInt(document.querySelector('#idade').value)
    const peso = parseFloat(document.querySelector('#peso').value)
    const altura = parseFloat(document.querySelector('#altura').value)

    if (nome == '' || document.querySelector('#idade').value == '' || idade <= 0 || document.querySelector('#peso').value == '' || peso <= 0 || document.querySelector('#altura').value == '' || altura <= 0) {
        alert('Insira as informações corretamente!')
    } else {
        if (idade > 18) {
            arr.push(idade)
        }

        res.innerHTML +=
            `
        <tr>
        <td>${nome}</td>
        <td>${idade}</td>
        <td>${peso}</td>
        <td>${altura}</td>
        <td>${arr.length}</td>
        </tr>
        `

        document.querySelector('#nome').value = ''
        document.querySelector('#idade').value = ''
        document.querySelector('#peso').value = ''
        document.querySelector('#altura').value = ''
        document.querySelector('#nome').focus()
    }

})