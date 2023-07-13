function clique(){
  var name = window.prompt("Qual o seu nome!")
  var n1 = window.prompt("Digite um numero!")
  var n2 = window.prompt("Digite outro um numero!")
  var resd = n1 + n2
 

  var res = document.getElementById('res')
  res.innerHTML = (`A soma entre ${n1} e ${n2} é ${resd}🖖`)
 

}