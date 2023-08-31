const infoReview = {
  title: 'Repaso de Node.js',
  numViews: 45642,
  numLikes: 21123,
  topics: ['Javascript', 'Node.js'],
  isPublic: true
}

// Objeto ---> cadena de caracteres...
// Cadena de caracteres en formato JSON...
let infoReviewJSON = JSON.stringify(infoReview)

console.log(infoReviewJSON)
console.log(typeof infoReviewJSON)
console.log(infoReviewJSON.title)

console.log('')

// Cadena de caracteres en formato JSON ---> objeto...
let infoReviewObject = JSON.parse(infoReviewJSON)

console.log(infoReviewObject)
console.log(typeof infoReviewObject)
console.log(infoReviewObject.title)
