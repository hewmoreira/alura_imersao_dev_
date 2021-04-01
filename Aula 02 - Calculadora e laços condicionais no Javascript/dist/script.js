let primeiroValor = Number(prompt('Digite o primeiro valor:'))
let operador = prompt('Digite o operador se é "+", "-", "/" ou "*"')
let segundoValor = Number(prompt('Digite o segundo valor:'))
let calculo = 0
let resultado = ("")

switch(operador){
  case '+':
    calculo = Number(primeiroValor + segundoValor).toPrecision(2)
    break
  case '-':
    calculo = Number(primeiroValor - segundoValor).toPrecision(2)
    break
  case '/':
    calculo = Number(primeiroValor / segundoValor).toPrecision(2)
    break
  case '*':
    calculo = Number(primeiroValor * segundoValor).toPrecision(2)
    break
}

switch(true){
  case [0, NaN].includes(primeiroValor):
    resultado = "<h2>Opção Inválida</h2>"
    break
  case [0, NaN].includes(segundoValor):
    resultado = "<h2>Opção Inválida</h2>"
    break
  case !["+", "-", "/", "*"].includes(operador):
    resultado = "<h2>Opção Inválida</h2>"
    break
  default:
    resultado = `<h2> ${primeiroValor} ${operador} ${segundoValor} = ${calculo} </h2>`
}

document.write(resultado)