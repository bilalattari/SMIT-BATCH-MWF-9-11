//round
// ciel
// floor
// toFixed
// random

let number = 6
//round
// console.log(Math.round(number))

//floor
// console.log(Math.floor(number))

// ciel
// console.log(Math.ceil(number))

// toFixed
// console.log(number.toFixed(2))

//random
// let randomNum = Math.random() * 100
// console.log('randomNum->', Math.ceil(randomNum) )

let randomNum = Math.random() * 6
console.log('randomNum->', Math.ceil(randomNum))

let counter = document.getElementById('counter')
let counterNumber = 0

function plus () {
  if (counterNumber < 20) {
    counterNumber++
    counter.innerText = counterNumber
  }
}

function minus () {
  if (counterNumber > 0) {
    counterNumber--
    counter.innerText = counterNumber
  }
}

function reset () {
  counterNumber = 0
  counter.innerText = counterNumber
}

function handleCounter (type) {
  console.log(type)
  if (type === 'plus' && counterNumber < 20) {
    counterNumber++
  }
  if (type === 'minus' && counterNumber > 0) {
    counterNumber--
  }
  if (type === 'reset') {
    counterNumber = 0
  }
  counter.innerText = counterNumber
}
