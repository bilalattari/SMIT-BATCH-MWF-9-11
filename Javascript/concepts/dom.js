// let firstChild = document.getElementById('first_child')
// console.log('firstChild->', firstChild.childNodes)

// let first_grand_child = document.getElementById('first_grand_child')
// console.log('first_grand_child--<', first_grand_child.parentNode)

let container = document.getElementById('container')

function createChild () {
  let div = document.createElement('div')
  div.className = 'test-div'

  let divTitleEl = document.createElement('h2')
  divTitleEl.className = 'test-div-title'
  divTitleEl.innerText = document.getElementById('todo').value

  let divBtnEl = document.createElement('button')
  divBtnEl.className = 'test-div-button'
  divBtnEl.innerText = 'Delete'
  divBtnEl.onclick = function () {
    div.remove()
  }

  div.appendChild(divTitleEl)
  div.appendChild(divBtnEl)

  container.appendChild(div)
}
