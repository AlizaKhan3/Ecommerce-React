export const addToCartHandler = (product) => {
  const CART_KEY = "user-cart";
  const productWithQuantity = { ...product, quantity: 1 };

  const existingCart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

  const index = existingCart.findIndex((item) => item.id === product.id);

  if (index !== -1) {
    existingCart[index].quantity += 1;
  } else {
    existingCart.push(productWithQuantity);
  }

  localStorage.setItem(CART_KEY, JSON.stringify(existingCart));
};