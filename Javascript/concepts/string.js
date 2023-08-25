// length
// indefOf
// charAt
// slice
// replace
// toLowercase
// toUppercase
// trim
// substring
// concat

const title = 'Hello World'
const desc = 'Hello World Hello World Hello World'

// console.log(desc.split(' '))
// if (desc.split(' ').length < 5) {
//   alert('Please input min 5 words')
// }

// console.log(title[2])

const city = 'KARACHI'

// console.log(city.toLowerCase())
// console.log(city.toUpperCase())

// console.log(city.toLowerCase() === 'kArAchi'.toLowerCase())

const msg = 'How is you?'

console.log('copy1->', msg.slice(0, 4))
console.log('copy2->', msg.slice(6, msg.length))
console.log(msg.slice(0, 4) + 'are' + msg.slice(6, msg.length))

const msgUpated = msg.replace('is', 'are')

console.log(msgUpated)
