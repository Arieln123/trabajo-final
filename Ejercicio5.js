var vectorUno = [1,2,4,6,7,8]
var vectorDos = [1,2,4,5,6,7,8]

let vectorTres = vectorUno
 for (let numero of vectorDos){
   if (vectorUno.indexOf(numero) === -1){
     vectorTres.push(numero)
   }
 }
 vectorTres = vectorTres.sort()
 console.log(vectorTres)