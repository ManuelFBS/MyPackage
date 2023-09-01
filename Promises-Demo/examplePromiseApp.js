// APP DE PRACTICA PARA LAS PROMESAS, SIMULANDO EN ESTE CASO UN
// CONTROL DE CALIDAD DE UN PRODUCTO, EL CUAL PUEDE PASAR DICHO
// CONTROL O SER RECHAZADO POR PRESENTAR DEFECTO(S)...

/**
 * La función "requestStatus" devuelve un valor booleano aleatorio, con un 60% de posibilidades de ser
 * verdadero.
 * @returns un valor booleano.
 */
function requestStatus() {
  return Math.random() < 0.6
}

/* El código está creando un nuevo objeto Promise llamado "qualityControlProduct". Esta Promesa
representa el proceso de control de calidad de un producto. */
const qualityControlProduct = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (requestStatus()) {
      resolve('Aprobado el control de calidad del producto...!!!')
    } else {
      reject('El producto no pasa el control de calidad. Está defectuoso...!')
    }
  }, 5000)
})

/* El código utiliza el método "entonces" para manejar la resolución exitosa de la promesa
"calidadControlProducto". Si la promesa se resuelve exitosamente, se llamará al método "entonces"
con una función de devolución de llamada que toma un parámetro, "qcSuccessful". Dentro de esta
función de devolución de llamada, el valor de `qcSuccessful` se registra en la consola usando
`console.log(qcSuccessful)`. */
qualityControlProduct
  .then((qcSuccessful) => {
    console.log(qcSuccessful)
  })
  .catch((qcFailure) => {
    console.log(qcFailure)
  })
