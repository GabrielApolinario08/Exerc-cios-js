const res = document.querySelector('#res')
const btn = document.querySelector('#btn')



btn.addEventListener('click', (event) => {
    let n1 = parseInt(document.querySelector('#number1').value)
    let n2 = parseInt(document.querySelector('#number2').value)
    if(n1 >= 0 || n2 >= 0 || n1 <= 0 || n2 <= 0) {
        let numbers = []
        let menor = n1
        let maior = n2
        if(menor > maior) {
            menor = n2
            maior = n1
        }
        let cont = menor
        while(cont <= maior) {
            numbers.push(cont)
            cont ++
        }
        
        res.innerHTML = `Os números compreendidos entre ${menor} e ${maior} são `
        for(let i = 0 ; i < numbers.length ; i++) {
            res.innerHTML += `${numbers[i]}`
            res.innerHTML += ` | `
        }
        res.innerHTML += 'FIM!'
        
    }else {
        alert('ERRO - Insira os valores corretamente!')  
    }
})      