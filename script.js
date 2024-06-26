
// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll animations
function handleScrollAnimations() {
    const workItems = document.querySelectorAll('.work-item');

    workItems.forEach((item) => {
        if (isInViewport(item)) {
            item.classList.add('animate');
        }
    });
}

// Event listener for scroll events
document.addEventListener('scroll', () => {
    handleScrollAnimations();
});

// Initial check on page load
handleScrollAnimations();

// Function to animate the counter
// Function to animate the counter
function animateCounter(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(function () {
        current += increment;
        document.getElementById(id).innerText = current;
        if (current == end) {
            clearInterval(timer);
            document.getElementById(id).innerText += "+";
        }
    }, stepTime);
}

// Intersection Observer setup
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // When half of .counter-section is visible
};

const counterSection = document.querySelector('.counter-section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start counting when .counter-section becomes visible
            animateCounter('makeupCounter', 0, 300, 2000);   // Change 300 to your desired value
            animateCounter('hairCounter', 0, 100, 1500);     // Change 100 to your desired value
            animateCounter('flowerCounter', 0, 100, 1500);   // Change 100 to your desired value
            animateCounter('customerCounter', 0, 500, 2500); // Change 500 to your desired value
            observer.unobserve(entry.target); // Stop observing once started
        }
    });
}, observerOptions);

observer.observe(counterSection);