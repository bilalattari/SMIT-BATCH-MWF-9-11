console.log('localStorage->', localStorage)

// for create and update
// localStorage.setItem(key , value)

// set item function have two paramaters
// 1.key
// 2.value (value will always be in string)

// we convert array and objects into string by using
// JSON.stringify()

// for deleting an item
// localStorage.removeItem(key)

// for getting any item
// localStorage.getItem(key)

// for deleting all the values
// localStorage.clear()

// var username = 'bilal'
// localStorage.setItem('username', username)

const add_todo_btn = document.getElementById('upate_username_btn')
const todo_inp = document.getElementById('user_name_inp')
const todo_container = document.getElementById('todo_container')

const todos = JSON.parse(localStorage.getItem('todos')) || []
console.log('todos=>', todos)

for (var i = 0; i < todos.length; i++) {
  addTodo(todos[i])
}

add_todo_btn.addEventListener('click', function () {
  addTodo()
})

function addTodo (txt) {
  const div = document.createElement('div')
  div.className = 'todo-div'

  const todoTxt = document.createElement('span')
  div.className = 'todo-text'
  todoTxt.innerText = txt ? txt : todo_inp.value

  const delBtn = document.createElement('button')
  delBtn.innerText = 'Delete'
  delBtn.onclick = function () {
    div.remove()
  }

  div.appendChild(todoTxt)
  div.appendChild(delBtn)

  todo_container.appendChild(div)
  if (!txt) {
    addTodoToStorage(todo_inp.value)
    todo_inp.value = ''
  }
}

function addTodoToStorage (txt) {
  todos.push(txt)
  localStorage.setItem('todos', JSON.stringify(todos))
}

// upate_username_btn.addEventListener('click', updateUserName)

// function updateUserName () {
//   localStorage.setItem('username', username_inp.value)
//   setUserName()
//   username_inp.value = ''
// }
// function setUserName () {
//   const username = localStorage.getItem('username')
//   username_txt.innerText = username || '--'
// }

// setUserName()

// var usernameFromLs = localStorage.getItem('username')
// console.log('usernameFromLs->', usernameFromLs)

// document.getElementById('user_name').innerText = usernameFromLs
