let slideIndex = 1;

function moveSlide(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  const slides = document.getElementsByClassName("slides");

  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  if (slideIndex == 1) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }

  if (slideIndex == slides.length) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
