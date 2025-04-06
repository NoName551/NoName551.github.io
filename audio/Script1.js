// Select the glowing text element
const glowingText = document.querySelector('.overlay span');

// Initialize variables for controlling the glow effect
let glowIntensity = 1; // Initial blur radius (reduced for subtle effect)
let increasing = true; // Direction of the glow

// Function to animate the glow effect
function animateGlow() {
    // Update the blur radius based on the direction
    if (increasing) {
        glowIntensity += 0.05; // Slightly increase intensity
        if (glowIntensity >= 2) increasing = false; // Reverse direction at max intensity
    } else {
        glowIntensity -= 0.05; // Slightly decrease intensity
        if (glowIntensity <= 1) increasing = true; // Reverse direction at min intensity
    }

    // Apply the updated text-shadow style to create a subtle glow effect
    glowingText.style.textShadow = `
        0 0 ${glowIntensity}px #FFD700,
        0 0 ${glowIntensity * 1.5}px #FFD700,
        0 0 ${glowIntensity * 2}px #FFA500`;

    // Request the next animation frame
    requestAnimationFrame(animateGlow);
}

// Start the animation
animateGlow();


// Select the arrow element
const arrow = document.getElementById('arrow-image');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Check if the user has scrolled down
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
        arrow.classList.add('hidden'); // Hide the arrow by adding the "hidden" class
    } else {
        arrow.classList.remove('hidden'); // Show the arrow if scrolled back up
    }
});



//progress bar 
const audio = document.getElementById("audio");
const progressBar = document.getElementById("progress-bar");
const progressContainer = document.querySelector(".progress-container");
const playButton = document.querySelector(".play-button");

// update progress as audio plays
audio.addEventListener("timeupdate", function () {
    if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progressPercent + "%";
    }
});

// can click anywhere on the progress bar to seek
progressContainer.addEventListener("click", function (e) {
    const clickPosition = e.offsetX / this.offsetWidth;
    const seekTime = clickPosition * audio.duration;
    audio.currentTime = seekTime;
});

// Play/pause toggle
playButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = "&#10074;&#10074;"; // Pause symbol
    } else {
        audio.pause();
        playButton.innerHTML = "&#9658;"; // Play symbol
    }
});
