// alert('Hello Javascript')

// string "Hello World"
// number 12346789

var greeting = 'Hello World'
//DATA TYPE
var string = 'Hello World'
var number = 1000
var boolean = true //true false
var object = {}
var array = []
var undefined = undefined // null

console.log(typeof string)
console.log(typeof number)
console.log(typeof boolean)
console.log(typeof object)
console.log(typeof array)
console.log(typeof undefined)

//Rules of naming variable

// name should not include symbols
// name should not start with number
// name should be in camelCase
// there should not be any space between variable name
// variable name should not be any keyword of Javascript

//for loop
for (var i = 0; i < 4; i++) {
  console.log('i--->', i)
}

//while loop
var i = 0
while (i < 4) {
  console.log('i--->', i)
  i++
}

// do while loop
var i = 0
do {
  console.log('i--->', i)
  i++
} while (i < 4)

if (dayOfWk === 'Sat' || dayOfWk === 'Sun') {
  alert('Whoopee!')
} else if (dayOfWk === 'Fri') {
  alert('TGIF!')
} else {
  alert('Shoot me now!')
}

switch (dayOfWk) {
  case 'Sat':
    alert('Whoopee')
    break
  case 'Sun':
    alert('Whoopee')
    break
  case 'Fri':
    alert('TGIF!')
    break
  default:
    alert('Shoot me now!')
}
