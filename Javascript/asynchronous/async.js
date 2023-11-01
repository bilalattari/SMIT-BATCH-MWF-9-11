let username = 'BILAL RAZA'

setTimeout(() => {
  console.log('Timeout')
}, 1000)

console.log('username->', username)

// createOrder(cartItems , function(orderId){
//     createPayment(orderId , function(invoiceId){
//         generateReceipt(invoiceId , function(){
//             sendEmail()
//         })
//     })
// })

function getProductInfo (id, callback) {
  setTimeout(() => {
    const product = {
      id: id,
      name: 'Test'
    }
    callback(null, product)
  }, 1000)
}

getProductInfo(1, function (err, product) {
  if (err) {
    console.warn(err)
  }
  if (product) {
    console.log(product)
    // findStock(product.name, function () {
    //   isThisStockEnds()
    // })
  }
})

const getProducts = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(['Abc', 'Abbc', 'Abc'])
  }, 1000)
})

const products = getProducts

console.log(products)
