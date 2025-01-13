let slideIndex = 1;
showSlides(slideIndex);

// Function to show the current slide
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let slide of slides) {
    slide.style.display = "none";
  }
  for (let dot of dots) {
    dot.className = dot.className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to change the slide
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Function to go to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Autoplay: Change slide every 3 seconds
setInterval(() => {
  changeSlide(1); // Move to the next slide
}, 1500); // 3000 milliseconds = 3 seconds

