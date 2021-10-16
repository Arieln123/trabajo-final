var parametro = 'HoLa ! % @ 7/= como AndaS'
function analizar(parametro) {
    parametro = parametro.replace(/\W/g, '') //Remueve simbolos especiales del string y los reemplaza con un espacio en blanco
  let resultado = []
  for (const letra of parametro) {
      if ((letra === letra.toUpperCase(letra)) && (letra !== ' ') && isNaN(parseInt(letra))) {
        resultado.push(letra)
    }
  }
  console.log(resultado)
}

analizar(parametro)