// create object
let car = {
  name: 'Swift',
  modal: 2020,
  isNew: false,
  image:
    'https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBzd2lmdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  usedBy: ['Ahmed', 'Bilal'],
  color: 'black',
  average: function () {
    return '10km/hr'
  }
}

let nameInput = document.getElementById('name_input')
let modelInput = document.getElementById('model_input')
let colorInput = document.getElementById('color_input')
let usedByInput = document.getElementById('usedby_input')
let imgInput = document.getElementById('img_input')
let updateBtn = document.getElementById('update_car')

let carImg = document.getElementById('car_img')
let carName = document.getElementById('car_name')
let carModal = document.getElementById('car_modal')
let carUsedBy = document.getElementById('car_usedBy')
let carIsNew = document.getElementById('car_isNew')
let carColor = document.getElementById('car_color')

updateBtn.addEventListener('click', function () {
  carImg.src = imgInput.value
  carName.innerText = nameInput.value
  carModal.innerText = modelInput.value
  carUsedBy.innerText = usedByInput.value
  carColor.innerText = colorInput.value
})

carImg.src = car.image
carName.innerText = car.name
carModal.innerText = car.modal
carIsNew.innerText = car.isNew ? 'Its New Car' : 'No its not new'
carUsedBy.innerText = car.usedBy.join(',')
carColor.innerText = car.color
//get object property
// console.log(car.modal)

//add property in the object
car.color = 'black'
// console.log('car->', car)

//update property in the object
car.isNew = true

// delete the property in the object
// delete car.isNew

// console.log('After delete->', car)

var a = 10
var b = a
a = 30

var c = { value: 10 }
var d = c
c.value = 30

// console.log('c->', c)
// console.log('d->', d)

// primitive || immutable
// data types that cannot be updated but we can replace them

// non primitive || mutable
// data types that can be updated
