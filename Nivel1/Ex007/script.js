function media(){
  let nomealuno = window.prompt("Qual o nome do aluno?")
  let nota1 = Number(window.prompt(`Qual a primeira nota de ${nomealuno}?`))
  let nota2 = Number(window.prompt(`Qual a segunda nota de ${nomealuno}?` ))
  let media = (nota1 + nota2) / 2

  var res = document.querySelector('#res')
  res.innerHTML = (`Cauculando a média de ${nomealuno}<br>`)
  res.innerHTML += (`As notas obtidas foram ${nota1} e ${nota2}<br> `)
  res.innerHTML += (`A média final é ${media} <br>`)

}