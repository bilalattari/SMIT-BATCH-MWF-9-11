let students = ['Bilal', 'Ahmed', 'Wasif', 'Kamran']

// console.log(students)
//values in array called element
//every element has it's own index number

//to console the value on the particular index of array
// console.log(students[1])

//to see the length of an array
// console.log(students.length)

//to add the element at the end of an array
students.push('Hamza', 'Abdul', 'Ali')
// console.log('students after push->', students)

//to delete the element from the end of an array
students.pop()
// console.log('students after pop->', students)

//to add element in the start of an array
students.unshift('1st Student', '2nd Student', '3rd Student')
// console.log('After unshift-->', students)

//to remove element in the start of an array
students.shift()
// console.log('After shift-->', students)

//to add or delete any element from array

let animals = ['dog', 'cat', 'fly', 'bug', 'ox']
// console.log('animals->', animals)
// only remove the element using splice

//Pehle wo index number hoga jahan se delete krna ham start karenge
//Dusra number wo hoga jo bateaga ke kitne elements remove krne hen

animals.splice(2, 3)
// console.log('animals after splice delete->', animals)

// only add  elements using splice
animals.splice(2, 0, 'Lion', 'Dog', 'Bird')
// console.log('animals after splice->', animals)

//add and remove element using splice
animals.splice(0, 2, '1st', '2nd', '3rd')

// console.log('After insert and remove->', animals)

//to copy the elements from array we use slice

let lastThree = animals.slice(3, animals.length)
// console.log('lastThree->', lastThree)

// console.log(animals)

animals.length = 0

// console.log('after length 0->', animals)

// Split - To convert strig into array

// let productInfo = 'small,portable,beutiful,colorful'

// console.log(productInfo.split(','))

//Join - Convert Array into string

// let productInfo  = ['small', 'portable', 'beutiful', 'colorful']

// let productInfoStr = productInfo.join('-')

// console.log(productInfoStr)

//Concat - To Combine two arrays into
//single array we use concat method
// let productInfo1  = ['small', 'portable', 'beutiful', 'colorful']
// let productInfo2  = ['features', 'rouded', 'abc', 'def']

// let newArray = productInfo1.concat(productInfo2)

// console.log(newArray)

const branches = ['karachi', 'lahore', 'peshawar', 'islamabad']
// const cityName = prompt('Which city you belong')

// console.log('cityName->', cityName)
// console.log(branches.includes(cityName))
// if(branches.includes(cityName)){
//     alert('You can visit our branch')
// }else{
//     alert('Sorry we did not provide service i your area. ')
// }

// Index of

let cities = ['karachi', 'lahore', 'peshawar', 'islamabad']
const cityName = prompt('City Name')
console.log(branches.indexOf('hyderabad'))

if (cities.indexOf(cityName) == -1) {
  cities.push(cityName)
} else {
  alert('City already exist')
}
console.log('cities->' ,cities)
