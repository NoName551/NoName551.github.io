const text = `ᯓ★. ── ⚠︎ 𓇼 ⟡ ✦︎ ꕤ ── .✦
Asini Subanya
Undergraduate Computer Engineer
Born in Sri Lanka, living in UAE
Raised by the 2000s`;
let i = 0;
let result = "";

function typeWriter() {
    if (i < text.length) {
        result += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
        document.getElementById("typewriter").innerHTML = result;
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = function () {
    typeWriter();

    // Set up Intersection Observer to detect when elements enter viewport
    const observerOptions = {
        root: null, // use viewport as root
        rootMargin: '0px',
        threshold: 0.25 // trigger when 25% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get any delay attribute if present
                const delay = entry.target.dataset.delay ? parseFloat(entry.target.dataset.delay) : 0;
                
                // Add visible class with appropriate delay
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay * 1000);
                
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-element class
    document.querySelectorAll('.fade-in-element').forEach(element => {
        observer.observe(element);
    });
};


const workexpObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeWorkExp();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// Open modal on event click
document.querySelectorAll('.timeline-event').forEach(event => {
    event.addEventListener('click', function (e) {
        // Prevent event bubbling if close button is clicked
        if (e.target.classList.contains('modal-close')) return;
        const modalId = this.getAttribute('data-modal');
        if (modalId) {
            this.querySelector(`#${modalId}`).classList.add('active');
        }
    });
});

// Close modal on close button click
document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        this.closest('.modal').classList.remove('active');
    });
});

// Close modal on clicking outside the notepad box
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function (e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});


// Open modal with correct info
document.querySelectorAll('.timeline-event').forEach(event => {
    event.addEventListener('click', function () {
        document.getElementById('modal-title').textContent = this.getAttribute('data-title');
        document.getElementById('modal-description').textContent = this.getAttribute('data-description');
        document.getElementById('universal-modal').classList.add('active');
    });
});

// Close modal on close button click
document.querySelector('.modal-close').addEventListener('click', function (e) {
    e.stopPropagation();
    document.getElementById('universal-modal').classList.remove('active');
});

// Close modal on clicking outside the notepad box
document.getElementById('universal-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});


// Open modal with correct info
document.querySelectorAll('.timeline-event').forEach(event => {
    event.addEventListener('click', function () {
        document.getElementById('modal-title').textContent = this.getAttribute('data-title');
        document.getElementById('modal-description').textContent = this.getAttribute('data-description');
        document.getElementById('universal-modal').classList.add('active');
    });
});


// Shake images when they scroll into view (once)
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.group-shake');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('shake-on-scroll');
                // Remove the class after animation so it can trigger again if needed
                setTimeout(() => entry.target.classList.remove('shake-on-scroll'), 600);
            }
        });
    }, { threshold: 0.7 });

    images.forEach(img => observer.observe(img));
});
