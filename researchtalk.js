function isElementInViewport(el, container) {
    const rect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    return (
        rect.top <= containerRect.bottom && // Element's top is above the container's bottom
        rect.bottom >= containerRect.top // Element's bottom is below the container's top
    );
}

function revealOnScroll() {
    // Select all reveal sections
    const journalsContainer = document.querySelector('.journals');
    const conferencesContainer = document.querySelector('.conferences');
    
    const revealElementsJournals = journalsContainer.querySelectorAll('.reveal-section');
    const revealElementsConferences = conferencesContainer.querySelectorAll('.reveal-section');

    // Reveal items in journals container
    revealElementsJournals.forEach(el => {
        if (isElementInViewport(el, journalsContainer)) {
            el.classList.add('show');
            el.classList.remove('hidden');
        } else {
            el.classList.remove('show');
            el.classList.add('hidden');
        }
    });

    // Reveal items in conferences container
    revealElementsConferences.forEach(el => {
        if (isElementInViewport(el, conferencesContainer)) {
            el.classList.add('show');
            el.classList.remove('hidden');
        } else {
            el.classList.remove('show');
            el.classList.add('hidden');
        }
    });
}

// Add scroll event listeners to both containers
document.addEventListener('DOMContentLoaded', () => {
    const journalsContainer = document.querySelector('.journals');
    const conferencesContainer = document.querySelector('.conferences');

    journalsContainer.addEventListener('scroll', revealOnScroll);
    conferencesContainer.addEventListener('scroll', revealOnScroll);

    revealOnScroll(); // Initial reveal check
});
