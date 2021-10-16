let array = []
for ( let i=0 ; i<=10 ; i++){
  array[i] = Math.floor(Math.random() * 100)
}
let arrayOrdenado = array.sort()
console.log(arrayOrdenado)