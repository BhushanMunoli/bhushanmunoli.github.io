// --- Typing Animation Logic ---
var typed = new Typed('#typing-text', {
    strings: [
        'SEEKING INTERNSHIP FALL 2026',
        'SEEKING INTERNSHIP SPRING 2027'
        'SEEKING INTERNSHIP SUMMER 2027',
    ],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
    cursorChar: '▮'
});

// --- PDF Slider Logic ---
let current = 0;

// Attached to window so the HTML 'onclick' can find it
window.moveSlide = (step) => {
    const slides = document.querySelectorAll('.cert-slide');

    // 1. Hide the current slide
    slides[current].classList.remove('active');

    // 2. Calculate the next index (circular logic)
    current = (current + step + slides.length) % slides.length;

    // 3. Show the new slide
    slides[current].classList.add('active');
};

function toggleDetails(button) {
    const card = button.closest('.project-card');
    card.classList.toggle('expanded');

    // Change button text based on state
    if (card.classList.contains('expanded')) {
        button.innerText = 'View Less';
    } else {
        button.innerText = 'View More';
    }
}


function toggleDetails_w(button) {
    const card = button.closest('.work-card');
    card.classList.toggle('expanded');

    // Change button text based on state
    if (card.classList.contains('expanded')) {
        button.innerText = 'View Less';
    } else {
        button.innerText = 'View More';
    }

}

function toggleEducationDetails(button) {
    const clickedCard = button.closest('.work-card');
    // If not found (shouldn't happen with correct markup), fallback safely
    const isExpanded = clickedCard ? clickedCard.classList.contains('expanded') : false;
    const newState = !isExpanded;

    const eduCards = document.querySelectorAll('.edu .work-card');
    eduCards.forEach(card => {
        // Toggle the class based on the intended new state
        if (newState) {
            card.classList.add('expanded');
        } else {
            card.classList.remove('expanded');
        }

        // Update button text
        const btn = card.querySelector('.view-more-btn');
        if (btn) {
            btn.innerText = newState ? 'View Less' : 'View More';
        }
    });
}

function toggleSectionDetails(button) {
    // Determine the container type
    const container = button.closest('.project-container') || button.closest('.work-container');
    if (!container) return; // Should not happen

    // Find the card that was clicked to determine current state
    const clickedCard = button.closest('.project-card') || button.closest('.work-card');
    const isExpanded = clickedCard.classList.contains('expanded');
    const newState = !isExpanded;

    // Select all compatible cards within this specific container
    const cards = container.querySelectorAll('.project-card, .work-card');

    cards.forEach(card => {
        if (newState) {
            card.classList.add('expanded');
        } else {
            card.classList.remove('expanded');
        }

        // Update button text
        const btn = card.querySelector('.view-more-btn');
        if (btn) {
            btn.innerText = newState ? 'View Less' : 'View More';
        }
    });
}

// --- Mobile Menu Logic ---
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-list li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navList.classList.contains('active')) {
            navList.classList.remove('active');
        }
    });
});


