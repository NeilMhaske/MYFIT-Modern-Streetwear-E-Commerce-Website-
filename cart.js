let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const subtotalEl = document.getElementById("subtotal");
const gstEl = document.getElementById("gst");
const totalEl = document.getElementById("total");

function renderCart() {
  cartItems.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, i) => {
    subtotal += item.price * item.quantity;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div>
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
          <div class="qty-control">
            <button onclick="updateQty(${i},-1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="updateQty(${i},1)">+</button>
          </div>
          <button class="remove" onclick="removeItem(${i})">Remove</button>
        </div>
      </div>`;
  });

  const gst = Math.round(subtotal * 0.18);
  subtotalEl.innerText = subtotal;
  gstEl.innerText = gst;
  totalEl.innerText = subtotal + gst;

  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateQty(i, d) {
  cart[i].quantity = Math.max(1, cart[i].quantity + d);
  renderCart();
}

function removeItem(i) {
  cart.splice(i, 1);
  renderCart();
}

renderCart();
document.addEventListener("DOMContentLoaded", () => {

  const checkoutBtn = document.getElementById("checkoutBtn");

  checkoutBtn.addEventListener("click", () => {

    // Example cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Redirect
    window.location.href = "checkout.html";
  });
});
