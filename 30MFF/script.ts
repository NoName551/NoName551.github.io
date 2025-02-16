

/*interactive slider to the webpage that adjusts the brightness and contrast of the page based on the slider's value*/
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("styleSlider") as HTMLInputElement; // ensure TypeScript recognizes this as an input
    const body = document.body;

    slider.addEventListener("input", function () {
        let value = parseInt(slider.value, 10); // convert value from string to number
        body.style.filter = `brightness(${50 + value * 3}%) contrast(${150 - value * 2}%)`;
    });
});

/*ensures smooth scrolling through out page*/
document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.style.scrollBehavior = "smooth";
});