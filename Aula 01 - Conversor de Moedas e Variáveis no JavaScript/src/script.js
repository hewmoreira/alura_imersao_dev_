let valorRecebidoEmDolar = Number(prompt("Qual o valor em dólar?"))

let valorEmDolar = valorRecebidoEmDolar.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})

let valorEmReal = valorRecebidoEmDolar * 5.50

let resultado = valorEmReal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})


alert(`O valor de ${valorEmDolar} é equivalente à ${resultado}.`)