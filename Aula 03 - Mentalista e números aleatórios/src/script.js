let numeroSecreto = Math.floor((Math.random() * 101) + 1)
let tentativas = 10

while (tentativas > 0){
  let chute = Number(prompt('Digite um número entre 0 e 100'))
  tentativas = tentativas -1
  switch (true){
    case (chute > numeroSecreto && tentativas > 0):
      alert(`O número secreto é menor. Você tem ${tentativas} tentativas`)
      break
    case (chute < numeroSecreto && tentativas > 0):
      alert(`O número secreto é maior. Você tem ${tentativas} tentativas`)
      break
    case (tentativas == 0):
      alert("Game Over!")
      break
    default:
      alert('Parabéns, você acertou!')
      tentativas = 0
  }
}