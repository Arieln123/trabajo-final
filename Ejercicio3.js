let array = []
let n = prompt("Ingrese la cantidad de numeros aleatoreos que desea")
console.log(n)
for (let i = 0; i<n ; i++ ){
array.push(Math.random()*n)
}
console.log(array)
//No se estipulo ninguna particularidad sobre los valores de los nuemeros al azar asi que elegi que sean N numeros al azar tales que pertenezcan al intervalo [0;N]
