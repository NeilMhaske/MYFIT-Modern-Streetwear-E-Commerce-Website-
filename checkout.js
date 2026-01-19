// Grab cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Grab summary elements
const subtotalEl = document.getElementById("subtotal");
const gstEl = document.getElementById("gst");
const totalEl = document.getElementById("total");
const placeOrderBtn = document.querySelector(".place-order");

// Calculate subtotal
let subtotal = 0;
cart.forEach(item => subtotal += item.price * item.quantity);

// Calculate GST and total
let gst = Math.round(subtotal * 0.18);
let total = subtotal + gst;

// Display in summary
subtotalEl.innerText = subtotal;
gstEl.innerText = gst;
totalEl.innerText = total;

// Handle Place Order
placeOrderBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".checkout-card input");
  let allFilled = true;

  inputs.forEach(input => {
    if (!input.value.trim()) allFilled = false;
  });

  if (!allFilled) {
    alert("Please fill all shipping details!");
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert(`Order placed successfully!\nTotal: ₹${total}`);
  
  // Clear cart
  localStorage.removeItem("cart");

  // Redirect
  window.location.href = "shop.html";
});
