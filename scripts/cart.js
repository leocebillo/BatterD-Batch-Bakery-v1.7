let cart = [];
let total = 0;

const paymentLinks = {
  "Cupcakes (6)": "https://buy.stripe.com/test_XXXX",
  "Cupcakes (12)": "https://buy.stripe.com/test_YYYY",
  "Custom Cake": "https://buy.stripe.com/test_ZZZZ"
};

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');

  cartList.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} — $${item.price}`;
    cartList.appendChild(li);
  });

  totalEl.textContent = total.toFixed(2);
}

function clearCart() {
  cart = [];
  total = 0;
  renderCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  if (cart.length > 1) {
    alert("For now, please checkout one item at a time.");
    return;
  }

  const item = cart[0];
  const link = paymentLinks[item.name];

  if (!link) {
    alert("This item is not available for checkout yet.");
    return;
  }

  window.location.href = link;
}
