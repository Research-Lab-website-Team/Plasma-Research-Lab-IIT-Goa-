function isElementInViewport(el, container = null) {
    const rect = el.getBoundingClientRect();
    const containerRect = container ? container.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };

    return (
        rect.top <= containerRect.bottom && // Element's top is above the container's bottom
        rect.bottom >= containerRect.top // Element's bottom is below the container's top
    );
}

function revealOnScroll() {
    const journalsContainer = document.querySelector('.journals');
    const conferencesContainer = document.querySelector('.conferences');

    const revealElementsJournals = journalsContainer.querySelectorAll('.reveal-section');
    const revealElementsConferences = conferencesContainer.querySelectorAll('.reveal-section');

    revealElementsJournals.forEach(el => {
        if (isElementInViewport(el, journalsContainer) || isElementInViewport(el)) {
            el.classList.add('show');
            el.classList.remove('hidden');
        } else {
            el.classList.remove('show');
            el.classList.add('hidden');
        }
    });

    revealElementsConferences.forEach(el => {
        if (isElementInViewport(el, conferencesContainer) || isElementInViewport(el)) {
            el.classList.add('show');
            el.classList.remove('hidden');
        } else {
            el.classList.remove('show');
            el.classList.add('hidden');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const journalsContainer = document.querySelector('.journals');
    const conferencesContainer = document.querySelector('.conferences');

    journalsContainer.addEventListener('scroll', revealOnScroll);
    conferencesContainer.addEventListener('scroll', revealOnScroll);
    window.addEventListener('scroll', revealOnScroll); // Add global scroll listener

    revealOnScroll(); // Initial reveal check
});
