document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("styleSlider") as HTMLInputElement; // Ensure TypeScript recognizes this as an input
    const body = document.body;

    slider.addEventListener("input", function () {
        let value = parseInt(slider.value, 10); // Convert value from string to number
        body.style.filter = `brightness(${50 + value * 3}%) contrast(${150 - value * 2}%)`;
    });
});
