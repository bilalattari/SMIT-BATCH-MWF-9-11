// let firstChild = document.getElementById('first_child')
// console.log('firstChild->', firstChild.childNodes)

// let first_grand_child = document.getElementById('first_grand_child')
// console.log('first_grand_child--<', first_grand_child.parentNode)

let container = document.getElementById('container')
let productContainer = document.getElementById('product_container')

let name = document.getElementById('name')
let fathername = document.getElementById('fathername')
let score = document.getElementById('score')

let seriel = 1
let total = 0

function createRow () {
  let tableRow = `<tr>
  <td>${seriel} </td>
  <td>${name.value} </td>
  <td>${fathername.value} </td>
  <td>${score.value} </td>
  <td>${total + +score.value} </td>
  </tr>`

  container.innerHTML += tableRow
  seriel++
  total = total + +score.value
}

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

// score.addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     console.log('event->', event)
//     createRow()
//   }
// })

let guestName = 'Bilal'
let text = 'Hi ' + guestName + ' Welcome to our house.'
let textUpdated = `Hey ${guestName} Welcome to our house.`

const products = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: { rate: 4.1, count: 259 }
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    rating: { rate: 2.1, count: 430 }
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 4.6, count: 400 }
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave ',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 3.9, count: 70 }
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 3, count: 400 }
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 1.9, count: 100 }
  },
  {
    id: 9,
    title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    price: 64,
    description:
      'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    rating: { rate: 3.3, count: 203 }
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 109,
    description:
      'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    rating: { rate: 2.9, count: 470 }
  },
  {
    id: 11,
    title:
      'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 109,
    description:
      '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    rating: { rate: 4.8, count: 319 }
  }
]

for (var i = 0; i < products.length; i++) {
  createProductCard(products[i])
}

function createProductCard (obj) {
  const cardDiv = document.createElement('div')
  cardDiv.className = 'card-div'

  const cardImg = document.createElement('img')
  cardImg.className = 'card-img'
  cardImg.src = obj.image

  const cardTitle = document.createElement('h2')
  cardTitle.className = 'card-title'
  cardTitle.innerText = obj.title

  const cardDesc = document.createElement('p')
  cardDesc.className = 'card-desc'
  cardDesc.innerText = obj.description

  cardDiv.appendChild(cardImg)
  cardDiv.appendChild(cardTitle)
  cardDiv.appendChild(cardDesc)

  productContainer.appendChild(cardDiv)
}

document
  .getElementById('changeColorBtn')
  .addEventListener('click', changeBodyColor)

document
  .getElementById('changeCardColorBtn')
  .addEventListener('click', changeCardBackgroundColor)

function generateRandomNumber () {
  const number = Math.round(Math.random() * 190)
  return number
}

function changeBodyColor () {
  let body = document.getElementsByTagName('body')
  console.log(body[0])
  body[0].style.backgroundColor = `rgb(
    ${generateRandomNumber()},  
    ${generateRandomNumber()}, 
    ${generateRandomNumber()} 
  )`
}

function changeCardBackgroundColor () {
  let allCard = document.getElementsByClassName('card-div')
  console.log('allCard-->', allCard.length)
  let bg = `rgb(
    ${generateRandomNumber()},  
    ${generateRandomNumber()}, 
    ${generateRandomNumber()} 
  )`
  for (var i = 0; i < allCard.length; i++) {
    console.log(allCard[i])
    allCard[i].style.backgroundColor = bg
    allCard[i].style.borderColor = bg
  }
}
