function clique(){
  var n1 = Number(window.prompt("Digite um numero!"))
  var n2 = Number(window.prompt("Digite outro um numero!"))
  var resd = n1 + n2


  var res = document.getElementById('res')
  res.innerHTML = (`A soma entre ${n1} e ${n2} é ${resd}🖖`)
 

}