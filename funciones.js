let cart = {};

function addToCart(productName, productPrice, productFeatures) {
  let product = {
    name: productName,
    price: productPrice,
    features: productFeatures
  };
  
  if (cart[productName]) {
    cart[productName].quantity++;
  } else {
    product.quantity = 1;
    cart[productName] = product;
  }
}

function calculateTotalPrice() {
  let totalPrice = 0;
  
  for (let productName in cart) {
    totalPrice += cart[productName].price * cart[productName].quantity;
  }
  
  return totalPrice;
}
