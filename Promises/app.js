const promise = false

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promise) {
      resolve('Promesa cumplida...!')
    } else {
      reject('Promesa rechazada...!')
    }
  }, 3000)
})

const handlePromiseKept = (value) => {
  console.log(value)
}

const handlePromiseRejected = (reason) => {
  console.log(reason)
}

myPromise.then(handlePromiseKept, handlePromiseRejected)
