document.addEventListener('DOMContentLoaded', () => {
    const studentsToggle = document.getElementById('students-toggle');
    const submenu = document.querySelector('.dropdown-submenu');

    // Event listener for the Students link
    studentsToggle.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor click behavior
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'; // Toggle display
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Function to reveal the project cards when they scroll into view
    const revealProjects = () => {
        const ongoingProjectsSection = document.querySelector('.ongoing-projects');
        const completedProjectsSection = document.querySelector('.completed-projects');
        const ongoingHeading = document.querySelector('#ongoing-projects');
        const completedHeading = document.querySelector('#completed-projects');
        
        // Get the current scroll position
        const windowHeight = window.innerHeight;
        const ongoingPos = ongoingProjectsSection.getBoundingClientRect().top;
        const completedPos = completedProjectsSection.getBoundingClientRect().top;

        // Check if the ongoing projects section is within view
        if (ongoingPos - windowHeight <= 0) {
            ongoingProjectsSection.style.opacity = '1';
            ongoingProjectsSection.style.transform = 'translateY(0)';
        }

        // Check if the completed projects section is within view
        if (completedPos - windowHeight <= 0) {
            completedProjectsSection.style.opacity = '1';
            completedProjectsSection.style.transform = 'translateY(0)';
        }
    };

    // Add an event listener to check for scrolling
    window.addEventListener('scroll', revealProjects);

    // Function to add hover effects to the cards
    const addHoverEffect = () => {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.05)';
                card.style.transition = 'transform 0.3s ease';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1)';
                card.style.transition = 'transform 0.25s ease';
            });
        });
    };

    // Call hover effect on page load
    addHoverEffect();
});
