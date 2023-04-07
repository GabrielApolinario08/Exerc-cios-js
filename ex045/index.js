for(let cont = 1 ; cont <=5 ; cont++) {
    let num = window.prompt(`Digite o ${cont}° número: `)
    document.write(`O ${cont}° valor elevado ao quadrado é: ${Math.pow(num, 2)}<br>`)
    console.log(`O ${cont}° valor elevado ao quadrado é: ${Math.pow(num, 2)}<br>`)

}