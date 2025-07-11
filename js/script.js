window.addEventListener('load', () => {
    const body = document.body;
    const overlay = document.querySelector('.reveal-overlay');

    // Add a class to the body to trigger the animation
    body.classList.add('reveal-animation');

    // Hide the overlay after the animation is complete
    setTimeout(() => {
        if (overlay) {
            overlay.style.display = 'none';
        }
    }, 1200); // Must match the CSS transition duration
});
