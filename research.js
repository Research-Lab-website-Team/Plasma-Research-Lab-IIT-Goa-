// Function to show a specific content box
function showBox(boxId) {
    const contentBox = document.getElementById(boxId);
    const overlay = document.createElement('div');
  
    // Create an overlay for the background
    overlay.classList.add('overlay');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);
  
    // Display the specific content box and overlay
    contentBox.style.display = 'block';
    overlay.style.display = 'block';
  
    // Add click event to close box when clicking the overlay
    overlay.addEventListener('click', () => hideBox(boxId));
  }
  
  // Function to hide the content box
  function hideBox(boxId) {
    const contentBox = document.getElementById(boxId);
    const overlay = document.getElementById('overlay');
  
    // Hide the content box and remove the overlay
    contentBox.style.display = 'none';
    if (overlay) {
        document.body.removeChild(overlay);
    }
  }
  
