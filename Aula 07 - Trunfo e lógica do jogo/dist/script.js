let naruto = {
  nome: 'Naruto',
  atributos: {
  taijutsu: 52,
  ninjutsu: 55,
  genjutsu: 44    
  }
}

let sakura = {
  nome: 'Sakura',
  atributos: {
  taijutsu: 43,
  ninjutsu: 54,
  genjutsu: 57    
  }
}

let sasuke = {
  nome: "Sasuke",
  atributos: {
  taijutsu: 55,
  ninjutsu: 68,
  genjutsu: 65      
  }
}

let cartaMaquina
let cartaJogador
let cartas = [naruto, sakura, sasuke]

function sortearCarta() {
  let numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  let numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaJogador == numeroCartaMaquina){
    numeroCartaJogador = parseInt(Math.random() * 3)
  }
  
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false  
  
  exibirOpcoes()
}

function exibirOpcoes(){
  let opcoes = document.getElementById('opcoes')
  let opcoesTexto = ''
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += `<input type='radio' name='atributo' value='${atributo}'>` + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
    let radioAtributo = document.getElementsByName('atributo')
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        alert('Venceu a carta máquina')
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        alert('Perdeu. Carta da máquina é maior')
    } else {
        alert('Empatou!')
    }
    console.log(cartaMaquina)
}