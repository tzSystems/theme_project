document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('nav-open');
    });

    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        let theme = 'light-theme';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark-theme';
        }
        localStorage.setItem('theme', theme);
    });

    // Slider functionality
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});


const slides = [
    {
        image: './images/blog1.jpg',
        title: 'Title 1',
        description: 'Description for the first image.',
    },
    {
        image: './images/blog2.jpg',
        title: 'Title 2',
        description: 'Description for the second image.',
    },
    {
        image: './images/blog4.jpeg',
        title: 'Title 3',
        description: 'Description for the third image.',
    }
];

let currentSlide = 0;

function updateSlide() {
    const slideElement = document.querySelector('.slide');
    const titleElement = slideElement.querySelector('h3');
    const descriptionElement = slideElement.querySelector('p');
    
    // Update background image
    slideElement.style.backgroundImage = `url(${slides[currentSlide].image})`;

    // Update text content
    titleElement.textContent = slides[currentSlide].title;
    descriptionElement.textContent = slides[currentSlide].description;

    // Update the slide index
    currentSlide = (currentSlide + 1) % slides.length;
}

// Initial load
updateSlide();

// Set interval to update slide every 4 seconds (matching CSS animation timing)
setInterval(updateSlide, 4000);
