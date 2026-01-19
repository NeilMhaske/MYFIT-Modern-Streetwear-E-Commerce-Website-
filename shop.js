let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".product-card");
    const product = {
      name: card.dataset.name,
      price: Number(card.dataset.price),
      image: card.dataset.image,
      quantity: 1
    };

    const existing = cart.find(p => p.name === product.name);
    if (existing) existing.quantity++;
    else cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  });
});
const track = document.getElementById("featuredTrack");

function slideFeatured(dir) {
  track.scrollLeft += dir * 320;
}
const featuredCards = document.querySelectorAll(".featured-one .product-card");
let currentFeatured = 0;

setInterval(() => {
  featuredCards[currentFeatured].classList.remove("active");

  currentFeatured = (currentFeatured + 1) % featuredCards.length;

  featuredCards[currentFeatured].classList.add("active");
}, 3500);
function startGenderSlideshow(containerClass) {
  const container = document.querySelector(containerClass);
  if (!container) return;

  const slides = container.querySelectorAll("img");
  if (slides.length === 0) return;

  let index = 0;
  slides[index].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  startGenderSlideshow(".men-slides");
  startGenderSlideshow(".women-slides");
});
