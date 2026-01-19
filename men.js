document.addEventListener("DOMContentLoaded", () => {

  function runSlideshow(selector) {
    const container = document.querySelector(selector);
    if (!container) return;

    const images = container.querySelectorAll("img");
    let index = 0;

    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 3000);
  }

  runSlideshow(".hoodies-slides");
  runSlideshow(".shirts-slides");
  runSlideshow(".jackets-slides");

});
