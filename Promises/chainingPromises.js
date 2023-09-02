const { response } = require('express')

const PROD = 'envase plástico 10" x 5" x 2"'

function orderProduct(products) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${products} de "MFB Store"`)

    setTimeout(() => {
      if (products === PROD) {
        resolve(`Ordenando '${PROD}' con el logo de "MFB Store"...!!!`)
      } else {
        reject(`El producto: '${products}' no se encuentra en existencia...!`)
      }
    }, 2000)
  })
}

function orderProcess(response) {
  return new Promise((resolve) => {
    console.log('Procesando respuesta...!!!')
    console.log(`La respuesta fue: "${response}"`)

    setTimeout(() => {
      resolve(
        'Gracias por su compra... Disfrute su producto de "MFB Store" !!!'
      )
    }, 4000)
  })
}

// orderProduct(PROD) ---> Acepta la promesa. No hay errores...
// orderProduct('lapiz')
//   .then((response) => {
//     console.log('Respuesta recibida...')
//     console.log(response)
//     return orderProcess(response)
//   })
//   .then((responseProcessed) => {
//     console.log(responseProcessed)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

async function order(product) {
  try {
    const response = await orderProduct(product)
    console.log('Respuesta recibida...')
    const responseProc = await orderProcess(response)
    console.log(responseProc)
  } catch (error) {
    console.log(error)
  }
}

order('lapiz')
