let students = ['Bilal', 'Ahmed', 'Wasif', 'Kamran']

console.log(students)
//values in array called element
//every element has it's own index number

//to console the value on the particular index of array
console.log(students[1])

//to see the length of an array
console.log(students.length)

//to add the element at the end of an array
students.push('Hamza')
console.log('students after push->', students)

//to delete the element from the end of an array
students.pop()
console.log('students after pop->', students)

//to add element in the start of an array
students.unshift('1st Student')
console.log('After unshift-->', students)

//to remove element in the start of an array
students.shift()
console.log('After shift-->', students)

//learning for loop
for (let x = 0; x < students.length; x++) {
  console.log(students[x])
  document.write(students[x] + '<br />')
}
