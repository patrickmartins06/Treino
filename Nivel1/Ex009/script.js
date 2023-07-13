let b = ""
let res = document.querySelector('#res')

function clicar(){
 b ++
 res.innerHTML = `<p>Voce clicou ${b}</p>`
 console.log(b)
}

function dclick(){
  b = ""
  res.innerHTML = `<p>O contador foi zerado</p>`
}