/* La línea `const EventEmitter = require('events')` está importando el módulo `events` en Node.js. El
módulo `events` proporciona una clase `EventEmitter` que le permite crear y emitir eventos
personalizados en su código. */
const EventEmitter = require('events')
// console.log(EventEmitter)

/* `const ProductsEmitter = new EventEmitter()` está creando una nueva instancia de la clase
`EventEmitter`. Esta instancia se puede utilizar para emitir y escuchar eventos personalizados en el
código. */
const productsEmitter = new EventEmitter()

// productsEmitter.on('compra', () => {
//   console.log('Se ha realizado una compra...')
// })

// productsEmitter.emit('compra')

/* El código `productsEmitter.on('compra', (total, cantidadProductos) => {
  console.log(`Se ha realizado una compra por $`)
  console.log(`Cantidad de productos: `)
})` está registrando un detector de eventos para el evento 'compra' en la instancia
`productsEmitter`. */
productsEmitter.on('compra', (total, quantityProducts) => {
  console.log(`Se ha realizado una compra por $${total}`)
  console.log(`Cantidad de productos: ${quantityProducts}`)
})

/* El código `productsEmitter.emit('compra', 500, 7)` está emitiendo un evento llamado 'compra' con dos
argumentos: 500 y 7. Esto significa que cualquier detector de eventos registrado para el evento
'compra' será activado y ejecutado. con estos argumentos. En este caso, se ejecutará el detector de
eventos definido anteriormente y se imprimirá en la consola el mensaje "Se ha realizado una compra
por " y "Cantidad de productos: 7". */
productsEmitter.emit('compra', 500, 7)
