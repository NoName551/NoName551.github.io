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

