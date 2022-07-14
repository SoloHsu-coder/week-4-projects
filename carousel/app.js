const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const allSlides = document.querySelectorAll(".carousel-item");

const total = allSlides.length;
let index = 0;

prevBtn.addEventListener("click", (e) => {
  moveToPrev();
});

nextBtn.addEventListener("click", (e) => {
  moveToNext();
});
function moveToPrev() {
  removeSlides();
  if (index === 0) {
    index = total - 1;
  } else {
    index -= 1;
  }
  allSlides[index].classList.add("visible");
}
function moveToNext() {
  removeSlides();
  if (index === total - 1) {
    index = 0;
  } else {
    index += 1;
  }
  allSlides[index].classList.add("visible");
}

function removeSlides() {
  allSlides.forEach((slide) => {
    slide.classList.remove("visible");
  });
}
