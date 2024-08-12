document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('nav-open');
    });
    
   
});

   
   
   // Select the theme toggle button
        const themeToggleBtn = document.getElementById('theme-toggle');

        // Check for saved user preference, if any, on load
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.body.classList.add(currentTheme);
        }

        // Update logo based on the current theme
        const logoImg = document.getElementById('logo-image');
        const updateLogo = () => {
            const theme = localStorage.getItem('theme') === 'dark-theme' ? 'white-logo3.png' : 'white-logo3.png';
            logoImg.src = `./images/${theme}`;
        };
        updateLogo();

        // Listen for a click on the button
        themeToggleBtn.addEventListener('click', function() {
            // Toggle the "dark-theme" class on the body
            document.body.classList.toggle('dark-theme');

            // Save the theme to local storage
            let theme = 'light-theme';
            if (document.body.classList.contains('dark-theme')) {
                theme = 'dark-theme';
            }
            localStorage.setItem('theme', theme);

            // Update the logo
            updateLogo();
        });