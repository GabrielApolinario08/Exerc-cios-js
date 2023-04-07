let base = prompt('Informe a medida da base do retângulo: ')
let altura = prompt('Informe a medida da altura do retângulo: ')

base = parseFloat(base)
altura = parseFloat(altura)

console.log(`A medida da área do retângulo de base ${base} e altura ${altura} é ${base * altura}`)
console.log(`A medida do perímetro do retângulo de base ${base} e altura ${altura} é ${base * 2 + altura * 2}`)

document.write(`A medida da área do retângulo de base ${base} e altura ${altura} é ${base * altura} <br>`)
document.write(`A medida do perímetro do retângulo de base ${base} e altura ${altura} é ${base * 2 + altura * 2} <br>`)