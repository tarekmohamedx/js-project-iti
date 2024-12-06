import { products } from "../data/dataBase.js";
import {cart} from "../data/cart.js";
import { addToCart} from "../data/cart.js";

let productsHtml = '';

window.onload = function(){
        AOS.init();
}
products.forEach((item)=>{
        productsHtml += `
         <div class="col-lg-3 col-6 product-item">
                <div class="card p-2" style="width: 100%;" data-aos="fade-up" data-aos-duration="1000">
                  <img src="${item.productImage}" class="card-img-top productImage" data-image-id="${item.id}" title="${item.productName} $${item.productPrice}">
                  <div class="card-body">
                    <h5 class="card-title">${item.productName}</h5>
                    <p class="fw-bold">$${item.productPrice}</p>
                    <p class="card-text">${item.productDescription}</p>
                
                    <select name="" id="" class="js-quantity-${item.id}">
                      <option selected value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select><br>
                    <button type="button" class="btn my-3 me-2 add-cart-btn js-add-to-cart" data-product-id="${item.id}">
                    <i class="bi bi-bag"></i>
                    Add to Cart</button>  
                    <span class="addedflag js-added-${item.id}">Added<span>
                  </div>
                </div>
              </div>
        `;

})

function showAddedMessage(productId){
        document.querySelector(`.js-added-${productId}`).classList.add('addedmessage-visible');
        setTimeout(() => {
           document.querySelector(`.js-added-${productId}`).classList.remove('addedmessage-visible');
        }, 2000);
}

// function shakeCart(){
//         document.querySelector('.js-cart-ico').classList.add('fa-shake');
//         setTimeout(()=>{
//         document.querySelector('.js-cart-ico').classList.remove('fa-shake');
//         }, 3000);

// }

let productsContainer = document.querySelector('.js-products-container');
if(productsContainer){
        productsContainer.innerHTML = productsHtml;
}
console.log(products[26]);

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
        button.addEventListener('click', function(){
                // shakeCart();
                let productId = button.dataset.productId;
                // console.log(productId);
                showAddedMessage(productId);
                addToCart(productId);
        });
});

console.log(cart);

document.querySelectorAll('.productImage').forEach((productImage)=>{
        productImage.addEventListener('click', function(){
                let imageid = productImage.dataset.imageId;
                localStorage.setItem('selectedProductId', imageid);
                window.location.href = 'single-product.html';
        });
});
