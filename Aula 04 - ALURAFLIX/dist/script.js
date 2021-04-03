let filmes = []
let linkfilmes = []

filmes.push('https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg')
filmes.push('https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg')
filmes.push('https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg')
filmes.push('https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg')
filmes.push('https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_UX182_CR0,0,182,268_AL_.jpg')
filmes.push('https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg')

linkfilmes.push('https://www.imdb.com/title/tt0120737/?ref_=rvi_tt')
linkfilmes.push('https://www.imdb.com/title/tt0167261/?ref_=rvi_tt')
linkfilmes.push('https://www.imdb.com/title/tt0167260/?ref_=rvi_tt')
linkfilmes.push('https://www.imdb.com/title/tt0241527/?ref_=rvi_tt')
linkfilmes.push('https://www.imdb.com/title/tt0295297/?ref_=rvi_tt')
linkfilmes.push('https://www.imdb.com/title/tt0304141/?ref_=rvi_tt')

for (let i = 0; i < filmes.length; i++){
  document.write(`<a href=${linkfilmes[i]}> <img src= ${filmes[i]}> </a>`)
}