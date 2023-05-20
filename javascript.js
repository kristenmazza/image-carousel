const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.transform = `translate(${100 * index}%, 0)`;
});

let currentSlide = 0;

const rightArrow = document.querySelector(".right");
rightArrow.addEventListener("click", (e) => {
  currentSlide += 1;
  slides.forEach((slide, index) => {
    if (currentSlide === 4) {
      slide.style.transform = `translate(${100 * index}%)`;
      currentSlide = 0;
    } else {
      slide.style.transform = `translate(${100 * (index - currentSlide)}%)`;
    }
  });
});

const leftArrow = document.querySelector(".left");
leftArrow.addEventListener("click", (e) => {
  currentSlide -= 1;
  slides.forEach((slide, index) => {
    if (currentSlide === -1) {
      slide.style.transform = `translate(${
        100 * (index - (slides.length - 1))
      }%)`;
      currentSlide = 3;
    } else {
      slide.style.transform = `translate(${100 * (index - currentSlide)}%)`;
    }
  });
});
