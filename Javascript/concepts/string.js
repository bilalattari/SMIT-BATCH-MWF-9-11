// length
// indexOf
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

// const city = 'KARACHI'

// console.log(city.toLowerCase())
// console.log(city.toUpperCase())

// console.log(city.toLowerCase() === 'kArAchi'.toLowerCase())

// const msg = 'How is you?'

// console.log('copy1->', msg.slice(0, 4))
// console.log('copy2->', msg.slice(6, msg.length))
// console.log(msg.slice(0, 4) + 'are' + msg.slice(6, msg.length))

// const msgUpated = msg.replace('is', 'are')

// console.log(msgUpated)

// const hello = 'Hello World  '
// console.log(hello.trim())

// console.log(hello.charAt(1  ))

function countVowels () {
  let string = document.getElementById('input').value
  let vowelCountElement = document.getElementById('vowelscount')
  vowelCountElement.innerText =
    'Total number of vowels in this string is ' +
    countVowelsNumber(string.toLowerCase())
}

function countVowelsNumber (str) {
  let vowelsCount = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (var i = 0; i < str.length; i++) {
    console.log(str[i], vowels.includes(str[i]))
    if (vowels.includes(str[i])) {
      vowelsCount = vowelsCount + 1
    }
  }
  return vowelsCount
}

function reverseString () {
  let string = document.getElementById('reverse').value
  let reversedStrMsg = document.getElementById('reverseString')

  // convert string into array
  let arr = string.split('')
  console.log(arr)

  //reverse the array
  let reversedArr = arr.reverse()
  console.log('reversed->', reversedArr)

  //join this reverse array
  let reversedString = reversedArr.join('')
  console.log('reversedString->', reversedString)

  //   let reversedString = string
  //     .split('')
  //     .reverse()
  //     .join('')

  reversedStrMsg.innerText = 'Reverse string of this msg is ' + reversedString
}
