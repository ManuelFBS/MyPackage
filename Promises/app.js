/* La línea `const promesa = falso` está asignando el valor `falso` a la variable `promesa`. */
const promise = false

/* El código está creando un nuevo objeto Promise llamado "myPromise". El constructor de Promise toma
una función de devolución de llamada con dos parámetros: `resolve` y `reject`. Dentro de la función
de devolución de llamada, hay una función setTimeout que simula una operación asincrónica. Si la
variable `promise` es verdadera, la promesa se resuelve con el mensaje 'Promesa cumplida...!'. En
caso contrario, la promesa se rechaza con el mensaje 'Promesa rechazada...!'. La función setTimeout
tiene un retraso de 3000 milisegundos (3 segundos). */
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promise) {
      resolve('Promesa cumplida...!')
    } else {
      reject('Promesa rechazada...!')
    }
  }, 3000)
})

/**
 * La función `handlePromiseKept` registra el valor que se le pasa.
 * @param value - El parámetro "valor" es el valor resuelto de una promesa.
 */
const handlePromiseKept = (value) => {
  console.log(value)
}

/**
 * La función `handlePromiseRejected` registra el motivo de una promesa rechazada.
 * @param reason - El parámetro "razón" es el valor que se pasó a la función "rechazar" cuando se
 * rechazó la promesa. Representa el motivo del rechazo y puede ser cualquier valor, como un mensaje de
 * error o un objeto.
 */
const handlePromiseRejected = (reason) => {
  console.log(reason)
}

/* `myPromise.then(handlePromiseKept, handlePromiseRejected)` está adjuntando dos funciones de
devolución de llamada `handlePromiseKept` y `handlePromiseRejected` a la promesa `myPromise`. */
myPromise.then(handlePromiseKept, handlePromiseRejected)
