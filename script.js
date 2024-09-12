// Slider Functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    slides.forEach((slide) => slide.style.display = "none");
    dots.forEach((dot) => dot.classList.remove("active"));
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function prevSlide() {
    slideIndex -= 2;
    showSlides();
}

function nextSlide() {
    showSlides();
}

// Countdown Timer
const eventDate = new Date("October 7, 2024 00:00:00").getTime();

let countdown = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = eventDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown-timer").innerHTML = "The event has started!";
    }
}, 1000);

// Current Date
function updateCurrentDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("current-date").textContent = today.toLocaleDateString("en-US", options);
}
updateCurrentDate();
