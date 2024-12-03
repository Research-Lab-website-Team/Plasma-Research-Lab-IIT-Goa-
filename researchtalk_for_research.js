// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 // This makes sure it's not completely out of view
    );
}
 

// Function to add 'show' class when element is in the viewport and remove it when it's out
function revealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal-section');

    revealElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('show');
            el.classList.remove('hidden');
        } else {
            el.classList.remove('show');
            el.classList.add('hidden');
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', revealOnScroll);

// Trigger the function initially to check for any elements in the viewport on page load
revealOnScroll();
