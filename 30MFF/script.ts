document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("styleSlider");
    const body = document.body;

    slider.addEventListener("input", function () {
        let value = slider.value;
        body.style.filter = `brightness(${100 + value * 2}%) contrast(${100 - value * 0.5}%)`;
    });
});
