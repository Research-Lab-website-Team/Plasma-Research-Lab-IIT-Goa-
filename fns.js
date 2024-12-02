// Handle hover to display sub-containers
const categories = document.querySelectorAll('.student-category');
const containers = document.querySelectorAll('.sub-container');

const carouselImages = document.getElementById('carousel-images');
const images = carouselImages.querySelectorAll('img');
let currentIndex = 0; // Index of the current image

// Function to update the carousel position
function updateCarousel() {
    const imageWidth = images[0].clientWidth; // Get the width of an image
    const offset = -currentIndex * imageWidth; // Calculate offset
    carouselImages.style.transform = translateX($,{offset},px); // Move to the image
}

// Automatically scroll every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // Go to the next image
    updateCarousel();
}, 3000);

// Allow manual navigation (optional)
carouselImages.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
});
carouselImages.addEventListener('mouseleave', () => {
    autoScrollInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }, 3000);
});



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
