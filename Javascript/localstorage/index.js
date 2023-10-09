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

const upate_username_btn = document.getElementById('upate_username_btn')
const username_inp = document.getElementById('user_name_inp')
const username_txt = document.getElementById('user_name')

upate_username_btn.addEventListener('click', updateUserName)

function updateUserName () {
  localStorage.setItem('username', username_inp.value)
  setUserName()
  username_inp.value = ''
}
function setUserName () {
  const username = localStorage.getItem('username')
  username_txt.innerText = username || '--'
}

setUserName()

// var usernameFromLs = localStorage.getItem('username')
// console.log('usernameFromLs->', usernameFromLs)

// document.getElementById('user_name').innerText = usernameFromLs
