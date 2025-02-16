document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        let position = section.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight / 1.5) {
            section.style.opacity = "1";
        } else {
            section.style.opacity = "0.5";
        }
    });
});

document.getElementById('scrollButton').addEventListener('click', function () {
    window.scrollBy(0, 100);  // Scroll down by 100px on each click
});

