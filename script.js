// Select the link
const link = document.querySelector('.animated-link');

// Add a pulsing animation periodically
setInterval(() => {
    link.classList.add('pulsing');
    
    // Remove the pulsing animation after it plays once
    setTimeout(() => {
        link.classList.remove('pulsing');
    }, 1500); // Match the animation duration (1.5s in this case)
}, 5000); // Trigger the animation every 5 seconds
