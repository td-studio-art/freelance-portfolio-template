
        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Feather icons
        feather.replace();

        // Scroll animation
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('active');
                }
            });
        };

        // Initial check
        fadeInOnScroll();

        // Check on scroll
        window.addEventListener('scroll', fadeInOnScroll);

        // Mobile menu toggle (placeholder - would need more implementation)
        document.querySelector('button[aria-label="Menu"]').addEventListener('click', () => {
            // Mobile menu implementation would go here
            console.log('Mobile menu clicked');
        });