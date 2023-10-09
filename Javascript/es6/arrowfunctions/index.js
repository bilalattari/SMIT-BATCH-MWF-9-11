//normal function
console.log(normal())

function normal (name = 'test') {
  console.log(arguments)
  return 'Hello ' + name
}

//arrow function
const arrow = (name = 'bilal') => 'Hello ' + name
console.log(arrow('Arrow Functionn'))
