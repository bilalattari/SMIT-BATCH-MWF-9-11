// In JavaScript, Hoisting is the default behavior of
// moving all the declarations at the top of the scope
// before code execution.

// var hello;
// var username;

// there are two things in variable
// 1.Variable declaration
// 2.Assign Value to variable

var hello = helloWorld

console.log(hello)

var helloWorld = 'Hello World'
hello = helloWorld

console.log(hello)

//a : empty in both
//b : undefined in 17 and hello world in 21
//c : undefined in 17 and 19
//d : error in line number 15
//e : emmpty in 17 and helloworld in 21

var username = 'bilal raza'
var saylani = 'saylani'

// if you want to update the variable you declared before so
// just put the name of variable without var keyword and updated value
username = true //Boolean
// console.log(username)
username = 12134 //number
// console.log(username)

// variables declared using let cannot be redeclared

let classroomm = 'BATCH 9'
classroomm = 'BATCH 10'

console.log(classroomm)

// variables declared using let cannot be used before they are declared

// var before = after
// var after = 'After variable'

let after = 'After variable'
let before = after

console.log(before)

// var has functional scope and let have block scope

{
  let parent = 'parent'
  console.log(parent)
  console.log(child)
  {
    let child = 'child'
    console.log(parent)
    console.log(child)
  }
}
