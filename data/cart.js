//test
// export const cart = [
//     {
//         productId: 1,
//         quantity: 2
//     },{
//         productId: 2,
//         quantity: 1
//     }
// ];

export const cart = [];

export function addToCart(productId){
    let matchingItem;
    let querySelectorValue = document.querySelector(`.js-quantity-${productId}`).value;
    console.log(querySelectorValue);

    cart.forEach((cartItem)=>{
            if(cartItem.productId === productId)
                    matchingItem = cartItem;                
      });

      if(matchingItem){
            matchingItem.quantity += Number(querySelectorValue);
          }

    else{
    cart.push({
      productId: productId,
      quantity:  Number(querySelectorValue)
      })
    }
    
    console.log(cart);
    updateCartQuantity();
}

export function updateCartQuantity(){
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    });
    
    document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity; 
    
}