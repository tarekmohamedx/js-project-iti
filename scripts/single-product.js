import { products } from "../data/dataBase.js";
import { addToCart} from "../data/cart.js";
let selectedProductId = Number(localStorage.getItem('selectedProductId'));
let singleProductHtml = '';

window.onload = function(){
  AOS.init();

products.forEach((productItem)=>{
    if(productItem.id === selectedProductId){
        console.log(productItem);
        singleProductHtml = `
                    <div class="col-lg-6 col-sm-12 text-center" data-aos="fade-right" data-aos-duration="1000">
                        <img src="${productItem.productImage}" class="img-fluid" alt="#" title="${productItem.productName} $${productItem.productPrice}">
                    </div>
                    <div class="col-lg-6 col-sm-12" data-aos="fade-left" data-aos-duration="1000">
                         <div class="product-details p-5">
                              <h5>${productItem.productName}</h5>
                              <p>$${productItem.productPrice}</p>
                              <span id="stars-span">&starf;&starf;&starf;&starf;&starf;</span>
                              <p class="mt-2">${productItem.productDescription}</p>
                             <hr>
                             <div class="row">
                                <div class="col-6">
                                  <p class="lead">Stock</p>
                                  <span class="stock-span ms-3">${productItem.productQuantity}</span>
                                </div>
                                <div class="col-6">
                                  <p class="lead">Dimensions</p>
                                  <div class="ms-3 dimension">
                                    <p>Width: 135CM </p>
                                    <p>Height: 140CM </p>
                                  </div>
                                  
                                </div>
                             </div>
                                  
                              <hr>
                              <select name="" id="" class="js-quantity-${productItem.id}">
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
                              <button type="button" class="btn my-3 me-2 add-cart-btn js-add-to-cart" data-product-id="${productItem.id}">
                                <i class="bi bi-bag"></i>
                                Add to Cart</button>
                                <span class="addedflag js-added-${productItem.id}"">Added to Cart<span>
                         </div>
                    </div>
        `;

    } 
});

let productContainer = document.querySelector('.js-product-container');
if(productContainer){
    productContainer.innerHTML = singleProductHtml;            
    document.querySelector('.js-add-to-cart').addEventListener('click', function(){
        let productId = this.dataset.productId;
        addToCart(productId);
        showAddedMessage(productId);
    });

    function showAddedMessage(productId){
    document.querySelector(`.js-added-${productId}`).classList.add('addedmessage-visible');
    setTimeout(() => {
    document.querySelector(`.js-added-${productId}`).classList.remove('addedmessage-visible');
    }, 2000);
    }

}

} //end of load


// function addSingleProduct(productId){
//     console.log("add single product function");
             
// }
