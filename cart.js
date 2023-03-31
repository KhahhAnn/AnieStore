const cart = document.querySelector('.cart')
const gioHang = document.querySelector('#gioHang')
const ListCart = document.querySelector('.ListCart')
const CheckOut = document.querySelector('.CheckOut')
const itemCart = document.querySelectorAll('.item-cart')
const closeShopping = document.querySelector('.closeShopping')
cart.addEventListener('click', function() {
   // lCart.classList.add('active')
   gioHang.classList.toggle('hiden')
})
closeShopping.addEventListener('click', function() {
   gioHang.classList.add('hiden')
})
// itemCart.addEventListener('click', function() {
//    gioHang.classList.remove('hiden')
// })
itemCart.forEach(function(button, index) {

   // console.log(button, index)
   button.addEventListener('click', function(event) {{
      var btnItem = event.target
      var product = btnItem.parentElement.parentElement
      // console.log(product)
      var productImg = product.querySelector('img').src
      var productName = product.querySelector('.intro p').innerHTML
      console.log(productName)
      var productPrice = product.querySelector('span').innerHTML
      console.log(productPrice.toLocaleString("de-DE"))
      addCart(productImg, productPrice, productName)  
   }})
})
function addCart(productImg, productPrice, productName) {
   var addtr = document.createElement("tr")
   // var trcontent = '<div class="col" style="display: flex; justify-content: space-between;font-size: 14px; text-align: center; width: 500px; margin-bottom: 20px;"><img src="'+productImg+'" alt="" style="width: 20%;height: 90px; border-radius: 50%; margin-left: 20px; "><p class="name" style="display: none;">'+productName+'</p><p style="margin-top: 20px; class = "price">'+productPrice+'</p><input type="number" value="1" min="0" style="outline: none; width: 40px; height: 20px; text-align: center; margin-right: 40px; margin-top: 20px;"><p style="margin-right: 45px; margin-top: 20px; cursor: pointer;">Xóa</p></div>'
   var cartItem = document.querySelectorAll('.col')
   
   var trcontent = '<div class="col" style="display: flex; justify-content: space-between;font-size: 14px; text-align: center;width: 500px; margin-bottom: 20px; height: 100%;"><img src="'+productImg+'" alt="" style="width: 20%;height: 90px; border-radius: 50%; margin-left: 20px; "><span id = "pName" style="margin-top: 20px; display: none;">'+productName+'</span><p class = "price" style="margin-top: 20px;">'+productPrice+'</p><input type="number" value="1" min="0" style="outline: none; width: 40px; height: 20px; text-align: center; margin-right: 40px; margin-top: 20px;"><p class = "delete" style="margin-right: 45px; margin-top: 20px; cursor: pointer;">Xóa</p></div>'
   addtr.innerHTML = trcontent
   var cartTable = document.querySelector('.ListCart')
   cartTable.append(addtr)
   for(var i = 0; i < cartItem.length; i++) {
      var productT = document.querySelectorAll('#pName')
      console.log()
      if(productT[i].innerHTML == productName) {
         alertE = "Sản phẩm đã có trong giỏ hàng!"
         alert('San pham ban da co')
      }
   }
   deleteCart()
   cartTotal()
   hartInner()
   // deleteHart()
   // console.log(cartTable)
}

function cartTotal() {
   const cartItem = document.querySelectorAll('.col')
   // console.log(cartItem)
   var totalB = 0
   // var totalA = []
   // var inputPrice = []
   // var inputValue = []
   // console.log(cartItem)
   for(var i = 0; i < cartItem.length; i++) {
      inputValue = cartItem[i].querySelector('input').value
      // console.log(inputValue)
      inputPrice = cartItem[i].querySelector('.price').innerHTML
      // console.log(inputPrice)
      totalA = inputValue * inputPrice * 1000
      // console.log(totalA)
      // totalB = totalA.toLocaleString('de-DE')
      // console.log(totalB)
      totalB  = totalB + totalA
      // totalC = totalB.toLocaleString('de-DE')
   }

   var cartTotalA = document.querySelector('.total .money')
   console.log(cartTotalA)
   cartTotalA.innerHTML = totalB.toLocaleString('de-DE')
   // console.log(cartTotalA)
}
function hartInner() {
   const cartItem = document.querySelectorAll('.col')
   var hart = document.querySelector('.hart')
   hart.innerHTML = cartItem.length
}
// var trcontent = '<div class="col" style="display: flex; justify-content: space-between;font-size: 14px; text-align: center; width: 500px; margin-bottom: 20px;"><img src="'+productImg+'" alt="" style="width: 20%;height: 90px; border-radius: 50%; margin-left: 20px; "><p class="name" style="display: none;">'+productName+'</p><p style="margin-top: 20px;">'+productPrice+'<sup>đ</sup></p><input type="number" value="1" min="0" style="outline: none; width: 40px; height: 20px; text-align: center; margin-right: 40px; margin-top: 20px;"><p class = "delete" style="margin-right: 45px; margin-top: 20px; cursor: pointer;">Xóa</p></div>'

function deleteCart() {
   const cartItem = document.querySelectorAll('.col')
   for(var i = 0; i < cartItem.length; i++) {
      var productT = document.querySelectorAll('.delete')
      productT[i].addEventListener("click", function(event) {
         var cartDelete = event.target
         var cartItemd = cartDelete.parentElement
         cartItemd.remove()
         // console.log(cartItemd)
      })
   }
}
function deleteHart() {
   const productT = document.querySelectorAll('.delete')
   var hart = document.querySelector('.hart')
   hart.innerHTML -= productT
}