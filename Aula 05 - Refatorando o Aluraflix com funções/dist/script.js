function adicionarFilme(){
  let campoFilmeFavorito = document.querySelector('#filme')
  let filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito.endsWith('.jpg')){
    listarFilmesNaTela(filmeFavorito)
  } else {
    alert('Imagem inválida!')
  }
  campoFilmeFavorito.value = ''
}

function listarFilmesNaTela(filme) {
  let listaFilmes = document.querySelector('#listaFilmes')
  let elementoFilme = `<img src= ${filme} >`
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}