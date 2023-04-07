let cod = document.getElementById('codigo')
let quant = document.getElementById('quantidade')
let res = document.getElementById('res')

function cardapio() {
    if (cod.value < 100 || cod.value > 104) {
        alert('Este item não existe no cardápio!')

    }else {     
        if (cod.value == 100) {
            res.innerHTML = `Item pedido: cachorro quente<br>`
            res.innerHTML += `Quantidade: ${quant.value}<br>`
            res.innerHTML += `Valor a ser pago: R$${(quant.value * 4.50).toFixed(2)}`
            
        } else if(cod.value == 101){
            res.innerHTML = `Item pedido: bauru simples <br>`
            res.innerHTML += `Quantidade: ${quant.value}<br>`
            res.innerHTML += `Valor a ser pago: R$${(quant.value * 4.50).toFixed(2)}`
        } else if(cod.value == 102) {
            res.innerHTML = `Item pedido: bauru c/ovo <br>`
            res.innerHTML += `Quantidade: ${quant.value}<br>`
            res.innerHTML += `Valor a ser pago: R$${(quant.value * 5.50).toFixed(2)}`
        } else if(cod.value == 103) {
            res.innerHTML = `Item pedido: hambúrguer <br>`
            res.innerHTML += `Quantidade: ${quant.value}<br>`
            res.innerHTML += `Valor a ser pago: R$${(quant.value * 6.50).toFixed(2)}`
        } else {
            res.innerHTML = `Item pedido: refrigerante <br>`
            res.innerHTML += `Quantidade: ${quant.value}<br>`
            res.innerHTML += `Valor a ser pago: R$${(quant.value * 3.50).toFixed(2)}`
        }
    }    
}