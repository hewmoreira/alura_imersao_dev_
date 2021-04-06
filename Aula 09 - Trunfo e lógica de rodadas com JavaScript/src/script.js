let kakashi = {
  nome: 'Kakashi',
  imagem: 'https://avatarfiles.alphacoders.com/524/thumb-52442.jpg',
  atributos: {
  taijutsu: 60,
  ninjutsu: 75,
  genjutsu: 55    
  }
}

let naruto = {
  nome: 'Naruto',
  imagem: 'https://i.pinimg.com/originals/2a/92/06/2a9206a4a0d1d23cf92636c42115d054.jpg',
  atributos: {
  taijutsu: 55,
  ninjutsu: 80,
  genjutsu: 40    
  }
}

let sakura = {
  nome: 'Sakura',
  imagem: 'https://avatarfiles.alphacoders.com/891/89187.jpg',
  atributos: {
  taijutsu: 85,
  ninjutsu: 60,
  genjutsu: 55    
  }
}

let sasuke = {
  nome: "Sasuke",
  imagem: 'https://avatarfiles.alphacoders.com/101/thumb-1920-101899.jpg',
  atributos: {
  taijutsu: 70,
  ninjutsu: 90,
  genjutsu: 75      
  }
}

let zabuza = {
  nome: 'Zabuza',
  imagem: 'https://i.pinimg.com/originals/51/a3/aa/51a3aa8dd76f874d2596e067213cd15b.jpg',
  atributos: {
  taijutsu: 60,
  ninjutsu: 40,
  genjutsu: 60    
  }
}

let haku = {
  nome: 'Haku',
  imagem: 'https://64.media.tumblr.com/9fc589638791b25a19a3beb2bceb7ead/tumblr_ps0dqz4ZTX1qg53joo1_1280.png',
  atributos: {
  taijutsu: 40,
  ninjutsu: 70,
  genjutsu: 70    
  }
}

let gaara = {
  nome: 'Gaara',
  imagem: 'https://2img.net/h/3.bp.blogspot.com/_5U136w_QZLY/S7Fa29xc7sI/AAAAAAAAAdc/ku5GQsFz2oU/s320/gaara.jpg',
  atributos: {
  taijutsu: 20,
  ninjutsu: 90,
  genjutsu: 50    
  }
}

let pain = {
  nome: 'Pain',
  imagem: 'https://wallpaperaccess.com/full/818682.jpg',
  atributos: {
  taijutsu: 60,
  ninjutsu: 85,
  genjutsu: 85    
  }
}

let cartaMaquina
let cartaJogador
let cartas = [kakashi, naruto, sakura, sasuke, zabuza, haku, gaara, pain]

let pontosMaquina = 0
let pontosJogador = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  let divQuantidadeCartas = document.getElementById('quantidade-cartas')
  let html = `Quantidade de cartas no jogo: ${cartas.length}`
  
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
  let divPlacar = document.getElementById('placar')
  let html = `Jogador ${pontosJogador}/${pontosMaquina} Máquina`
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
  let numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)
  
  let numeroCartaJogador = parseInt(Math.random() * cartas.length)
  cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false  
  
  exibeCartaJogador()
}

function exibeCartaJogador(){
  let divCartaJogador = document.getElementById('carta-jogador')
  let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  let opcoesTexto = ''
  
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += `<input type='radio' name='atributo' value='${atributo}'>` + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }

  let html = '<div id="opcoes" class="carta-status">'
  
  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
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
  let divResultado = document.getElementById('resultado')
  var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Vitória!</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Derrota!</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empate!</p>'
        pontosJogador++
        pontosMaquina++
    }
  
    if (cartas.length == 0){
      alert('Fim de jogo!')  
        if (pontosJogador > pontosMaquina) {
          htmlResultado = "<p class='resultado-final'>Vitória!</p>"
        } else if (pontosMaquina > pontosJogador) {
          htmlResultado = "<p class='resultado-final'>Perdeu!!</p>" 
        } else {
           htmlResultado = "<p class='resultado-final'>Empate!</p>"
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }
  
  divResultado.innerHTML = htmlResultado
  document.getElementById('btnJogar').disabled = true

  
  atualizaPlacar()
  exibeCartaMaquina()
  atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
  let divCartaMaquina = document.getElementById('carta-maquina')
  let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  let opcoesTexto = ''
  
  for (var atributo in cartaMaquina.atributos){
    opcoesTexto += `<p type='text' name='atributo' value='${atributo}'>` + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
  }

  let html = '<div id="opcoes" class="carta-status">'
  
  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'  
}

function proximaRodada(){
  let divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true

  let divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ''
}