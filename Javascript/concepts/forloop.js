// let evenNumbers = []

// for (let x = 1; x <= 100; x++) {
//   if (x % 2 == 0 && x % 5 == 0) {
//     evenNumbers.push(x)
//   }
// }

// console.log(evenNumbers)

//Sum of Numbers
// let numbers = [10, 20, 30, 15, 24, 40]

// let total = 0

// for (var x = 0; x < numbers.length; x++) {
//   total = total + numbers[x]
// }

// let tableNumber = prompt('Table of the Number you want to see')

// for (var i = 1; i <= 10; i++) {
//   let str = tableNumber + ' x ' + i + ' = ' + tableNumber * i + '<br />'
//   document.write(str)
// }

// let stars = ''
// for (var i = 0; i < 100; i++) {
//   stars = stars + '*'
//   document.write(stars + "<br />")
// }

// const animals = ['cat', 'dog', 'elephant', 'giraffe', 'lion']
// const pluralWords = []

// for (var i = 0; i < animals.length; i++) {
//   let plural = animals[i] + 's'
//   pluralWords.push(plural)
//   document.write(animals[i] + ' --- ' + plural + '<br />')
// }

// console.log('pluralWords->',pluralWords)

// const fruits = ['apple', 'banana', 'cherry', 'date', 'fig']

// const copied = fruits.slice(2, 4)
// console.log('copied->', copied)

// let tempAbove80 = 0
// const temperatures = [72, 78, 81, 89, 88, 70, 82, 88, 95]
// for (var i = 0; i < temperatures.length; i++) {
//   if (temperatures[i] >= 80) {
//     tempAbove80++
//   }
// }

// document.write(tempAbove80 + ' days temprature was above 80 Degree')

// let numbers = [5, 10, 15, 20, 25]
// const indByUser = prompt('Give index where number should be added')
// const numByUser = +prompt('Give number that should be added at given index')

// numbers.splice(indByUser, 0, numByUser)

// console.log('numbers->', numbers)

//sum

const numbers = [20, 112, 10, 20, 231, 131, 13]

let sum = 0

for (var i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]
}
document.write('Sum of [10 ,20 , 20,112,231,131,13] will be ' + sum + '<br />')

let highest = 0

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > highest) {
    highest = numbers[i]
  }
}
document.write(
  'Highest number of [10 ,20 , 20,112,231,131,13] will be ' + highest + '<br />'
)

let lowest = numbers[0]

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] < lowest) {
    lowest = numbers[i]
  }
}
document.write(
  'lowest number of [10 ,20 , 20,112,231,131,13] will be ' + lowest + '<br />'
)

// 1 9
// 2 8
// 3 7
// 4 6
// 5 5
// 6 4
// 7 3
// 8 2
// 9 1

// for (var i = 1; i <= 9; i++) {
//   let reverse = 9 - i + 1
//   document.write(i + ' ' + reverse + '<br />')
// }

const cities = ['karachi', 'lahore', 'islamabad', 'hyderabad', 'larkana']

const cityBtUser = prompt('Add City')

let cityFound = false
for (var i = 0; i < cities.length; i++) {
  console.log(cities[i])
  if (cityBtUser === cities[i]) {
    cityFound = true
    break
  }
}
if (cityFound) {
  alert('City Found')
} else {
  alert('City Not Found')
}
