const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// Position pictures horizontally
slides.forEach((slide, index) => {
  slide.style.transform = `translate(${100 * index}%, 0)`;
});

let currentSlide = 0;

// Add active class to current slide dot
function updateActive(currentSlide) {
  removeActive();
  const activeDot = document.querySelector(`[data-id='${currentSlide}']`);
  activeDot.classList.add("active");
}

// Remove active class from dots
function removeActive() {
  const activeElements = document.querySelectorAll(".active");
  activeElements.forEach((element) => {
    element.classList.remove("active");
  });
}

updateActive(currentSlide);

// Use right arrow to navigate
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
    updateActive(currentSlide);
  });
});

// Use left arrow to navigate
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
    updateActive(currentSlide);
  });
});

// Use dots to navigate
dots.forEach((dot, dotIdx) => {
  dot.addEventListener("click", (e) => {
    if (dotIdx === currentSlide) {
      return;
    }
    slides.forEach((slide, index) => {
      slide.style.transform = `translate(${100 * (index - dotIdx)}%)`;
      currentSlide = dotIdx;
      updateActive(currentSlide);
    });
  });
});
