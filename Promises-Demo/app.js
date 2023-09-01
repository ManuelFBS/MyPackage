const orderStatus = () => {
  return Math.random() < 0.8
}

// /* El código `for (let i = 0; i < 10; i++) { console.log(orderStatus()) }` es un bucle que llama a la
// función `orderStatus()` 10 veces y registra el resultado en la consola. Se utiliza para probar la
// función `orderStatus()` y ver el estado aleatorio generado cada vez. */
// for (let i = 0; i < 10; i++) {
//   console.log(orderStatus())
// }

const myPizzaOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (orderStatus()) {
      resolve('Pedido exitoso !!!. La Pizza está en camino...!!!')
    } else {
      reject('Ocurrió un error... Intente nuevamente...!')
    }
  }, 3000)
})

// ---------------------------------------------------------------------------
// Esta es una forma de realizar extendida, pero
// la misma, se puede optimizar uniendo el código...
// const orderSuccessful = (value) => {
//   console.log(value)
// }

// const failedOrder = (reason) => {
//   console.log(reason)
// }

// myPizzaOrder.then(orderSuccessful, failedOrder)
// ---------------------------------------------------------------------------

// Optimizando el código anterior...
/* El código `myPizzaOrder.then((successfulMessage) => { console.log(successfulMessage) }).then(null,
(errorMessage) => { console.log(errorMessage) })` está usando el método `then()` para manejar el
resultado de la promesa `myPizzaOrder`. */
myPizzaOrder
  .then((successfulMessage) => {
    console.log(successfulMessage)
  })
  .then(null, (errorMessage) => {
    console.log(errorMessage)
  })
