function clique(){
  var n1 = Number(window.prompt("Digite um numero!"))
  var res = document.querySelector('#res')

res.innerHTML = (`<p>O Numero a ser analisado é ${n1}</p>`)
res.innerHTML += (`<hr>`)
res.innerHTML +=(`O seu valor absoluto é ${Math.abs(n1)} <br><br>`)
res.innerHTML +=(`A sua parte inteira ${Math.trunc(n1)} <br><br>`)
res.innerHTML +=(`O seu valor inteiro mais proximo ${Math.round(n1)} <br><br>`)
res.innerHTML +=(`A sua raiz quadrada é ${Math.sqrt(n1)} <br><br>`)
res.innerHTML +=(`A sua raiz cúbica é ${Math.cbrt(n1)} <br><br>`)

res.innerHTML +=(`O valor de ${n1}<sup>2</sup> é  ${Math.pow(n1, 2)}<br><br>  `)
res.innerHTML +=(`O valor de ${n1}<sup>3</sup> é${Math.pow(n1, 3)}   `)


}