// Step 1
import numeral from 'numeral'

// Step 2
// Función que recibe un argumento (Número o String numérico) y lo devuelve formateado
// Si no hay numero, devolvemos 0
const formatNumber = (num) => {
  if (!num) {
    return 0
  }
  return numeral(Number(num)).format()
}

// Step 3
export {
  formatNumber
}
