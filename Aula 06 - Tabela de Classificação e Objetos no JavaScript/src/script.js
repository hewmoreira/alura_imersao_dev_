let hewerton = {
  nome: 'Hewerton',
  vitorias: 2,
  empates: 5,
  derrotas: 1,
  pontos: 0
}

let karol = {
  nome: 'Karol',
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0
}

karol.pontos = calculaPontos(karol)
hewerton.pontos = calculaPontos(hewerton)

function calculaPontos(jogador){
  let pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

let jogadores = [hewerton, karol]
exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  let html = ''
  for(let i = 0; i < jogadores.length; i++){
    html += `<tr><td> ${jogadores[i].nome} </td>`
    html += `<td> ${jogadores[i].vitorias} </td>`
    html += `<td> ${jogadores[i].empates} </td>`
    html += `<td> ${jogadores[i].derrotas} </td>`
    html += `<td> ${jogadores[i].pontos} </td>`
    html += `<td><button onClick="adicionarVitoria(${i})">Vitória</button></td>`
    html += `<td><button onClick="adicionarEmpate(${i})">Empate</button></td>`
    html += `<td><button onClick="adicionarDerrota(${i})">Derrota</button></td></tr>`
  }
  let tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
  let jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos (jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
  let jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos (jogador)
  exibirJogadoresNaTela(jogadores)  
}

function adicionarDerrota(i){
  let jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos (jogador)
  exibirJogadoresNaTela(jogadores)  
}