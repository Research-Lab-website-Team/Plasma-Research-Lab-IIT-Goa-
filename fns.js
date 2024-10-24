// Handle hover to display sub-containers
const categories = document.querySelectorAll('.student-category');
const containers = document.querySelectorAll('.sub-container');

categories.forEach((category, index) => {
    category.addEventListener('mouseover', () => {
        containers.forEach(cont => cont.style.display = 'none');
        containers[index].style.display = 'flex';
    });
});
