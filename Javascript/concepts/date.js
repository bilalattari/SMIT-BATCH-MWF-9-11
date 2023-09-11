// Object is a collection of properties
// property is consist of key and value

let car = {
  color: 'black',
  model: 2012,
  showCarName: function () {
    alert('Swift')
    return 'Swift'
  }
}
// function greetings () {
//   alert('Greetigs')
// }

// console.log('car->', car.showCarName())

// console.log('greetings->', greetings)

let now = new Date()

console.log('now->', typeof now)
console.log('now->', now)

// get day
console.log(now.getDay())

// get month
console.log(now.getMonth())

// get year
console.log(now.getFullYear())

// get hour and minute
console.log(now.getHours() + ' - ' + now.getMinutes())

// get date
console.log(now.toDateString())
console.log(now.toLocaleDateString())

//get time

// milliseconds -> 1000/seconds -> 60/mins => 60/hours => 24/days => 30/Months => 12/Years
console.log(now.getTime() / 1000 / 60 / 60 / 24 / 30 / 12)

// get time string
console.log(now.toLocaleTimeString())
console.log(now.toTimeString())

let birthdayDate = new Date()

// set Date
birthdayDate.setDate(10)

// set month
birthdayDate.setMonth(4)

//set year
birthdayDate.setFullYear(2006)

console.log(birthdayDate)
console.log('birthdayDate->', birthdayDate.getTime())
console.log('now->', now.getTime())
