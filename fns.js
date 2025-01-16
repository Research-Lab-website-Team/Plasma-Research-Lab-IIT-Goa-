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

function autoScroll(elementId) {
    const element = document.getElementById(elementId);
    // let scrollAmount = 0;
    let scrollStep = 1; // Scrolling step
    const scrollSpeed = 50; // Speed of scrolling (lower = faster)
    let autoScrollInterval;

    // Function to start auto-scrolling
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
                scrollAmount = 0; // Reset scroll when at the bottom
                // element.scrollTop = scrollAmount;
            } else {
                element.scrollTop += scrollStep; // Scroll down
            }
        }, scrollSpeed);
    }

    // Function to stop auto-scrolling
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Start auto-scrolling by default
    startAutoScroll();

    // Pause auto-scrolling when the user interacts with the content
    element.addEventListener("mouseenter", stopAutoScroll);
    element.addEventListener("mouseleave", startAutoScroll);

    // Allow manual scrolling
    element.addEventListener("wheel", stopAutoScroll);
}

// Apply auto-scroll to each box
autoScroll('publications');
autoScroll('projects');
autoScroll('openings');

categories.forEach((category, index) => {
    category.addEventListener('mouseover', () => {
        containers.forEach(cont => cont.style.display = 'none');
        containers[index].style.display = 'flex';
    });
});
