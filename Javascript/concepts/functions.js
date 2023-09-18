// add(5, 10)
// add(110, 12)
// add(90, 190)

// function add (num1, num2) {
//   console.log(num1 + num2)
// }

// function abc (price, disc) {
//   let discount = (price * disc) / 100
//   return price - discount
// }

// const discounted = abc(1000, 15)
// console.log(discounted)

//Function to make string's first letter uppercase

// function makeFirstLetterCapital (txt) {
//   console.log(txt.substring(1 , txt.length))
//   let firstLetter = txt.charAt(0).toUpperCase()
//   let txtWithoutFirst = txt.slice(1)
//   const updatedTxt = firstLetter + txtWithoutFirst
//   console.log('updatedTxt->', updatedTxt)
//   return updatedTxt
// }

// function makeFirstLetterCapital (txt) {
//   let firstLetter = txt.charAt(0).toUpperCase()
//   console.log(txt.substring(1, txt.length))
//   return firstLetter + txt.substring(1, txt.length)
// }

function makeFirstLetterCapital (txt) {
  let firstLetter = txt[0].toUpperCase()
  return firstLetter + txt.slice(1)
}

let updated = makeFirstLetterCapital('pakistan')
console.log(updated)

// function showIndOfLetter(string , letter){
//   let ind =  string.indexOf(letter)
//   return ind
// }

// console.log(showIndOfLetter('ABBC' , 'B'))

// function numberOfSpaces (sentence) {
//   const splittedArr = sentence.split(' ')
//   console.log(splittedArr.length - 1)
// }

// numberOfSpaces('Students are learning Javascript')
// numberOfSpaces('Students are learning Javascript in Saylani Bahadurabad')
// numberOfSpaces('Students are learning Javascript Funnctions')

// A function is a block of JavaScript that robotically does the same thing again and again,

//Named Function
function abc () {}

//Anonymous Function
const greetings = function () {
  alert('greeting')
}

//arrow function
const hello = () => alert('Hello')

//First we declare a function and then we call/invoke it.

//Like this we can invoke a function
// greetings()

// the data that we pass while calling/invoking a function is called Argument
greetings('Hello')
