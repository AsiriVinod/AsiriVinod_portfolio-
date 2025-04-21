document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Smooth scroll for the scroll-down arrow
    const scrollDownArrow = document.querySelector('.scroll-down-arrow');
    if (scrollDownArrow) {
        scrollDownArrow.addEventListener('click', () => {
            const aboutSection = document.getElementById('education');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Enhanced scroll animation logic
    const handleScrollAnimation = () => {
        const triggerBottom = window.innerHeight * 0.8;

        // Animate sections
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });

        // Animate section headings
        document.querySelectorAll('.section-heading').forEach(heading => {
            const headingTop = heading.getBoundingClientRect().top;
            if (headingTop < triggerBottom) {
                heading.classList.add('visible');
            }
        });

        // Animate cards and containers
        const animatedElements = document.querySelectorAll(
            '.education-card, .skill-card, .project-card, .certification-card, .activity-card, .achievement-card, #contact .container'
        );
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    };

    // Run animation check on load and scroll
    document.addEventListener('DOMContentLoaded', handleScrollAnimation);
    window.addEventListener('scroll', handleScrollAnimation);

    const progressBars = document.querySelectorAll('.progress');

    const handleProgressAnimation = () => {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                bar.style.width = bar.getAttribute('style').match(/width: (\d+%)/)[1];
            }
        });
    };

    window.addEventListener('scroll', handleProgressAnimation);
    document.addEventListener('DOMContentLoaded', handleProgressAnimation);

    const certificationCards = document.querySelectorAll('.certification-card');

    const handleCertificationAnimation = () => {
        certificationCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', handleCertificationAnimation);
    document.addEventListener('DOMContentLoaded', handleCertificationAnimation);

    const activityCards = document.querySelectorAll('.activity-card');

    const handleActivityAnimation = () => {
        activityCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', handleActivityAnimation);
    document.addEventListener('DOMContentLoaded', handleActivityAnimation);

    const achievementCards = document.querySelectorAll('.achievement-card');

    const handleAchievementAnimation = () => {
        achievementCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', handleAchievementAnimation);
    document.addEventListener('DOMContentLoaded', handleAchievementAnimation);

    const skillCards = document.querySelectorAll('.skill-card');

    const handleSkillAnimation = () => {
        skillCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                card.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', handleSkillAnimation);
    document.addEventListener('DOMContentLoaded', handleSkillAnimation);

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });

    document.querySelector('a[href="assets/AsiriVinod_CV.pdf"]').addEventListener('click', function(e) {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = 'assets/AsiriVinod_CV.pdf';
        link.download = 'AsiriVinod_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    let currentSlideIndex = 0;

    const showSlide = (index) => {
        const slides = document.querySelectorAll('.slide');
        if (index >= slides.length) currentSlideIndex = 0;
        if (index < 0) currentSlideIndex = slides.length - 1;

        slides.forEach((slide, i) => {
            slide.style.display = i === currentSlideIndex ? 'block' : 'none';
        });
    };

    const changeSlide = (direction) => {
        currentSlideIndex += direction;
        showSlide(currentSlideIndex);
    };

    document.addEventListener('DOMContentLoaded', () => {
        showSlide(currentSlideIndex);

        // Optional: Auto-play slideshow
        setInterval(() => {
            changeSlide(1);
        }, 5000); // Change slide every 5 seconds
    });

    // Contact form input animations
    const inputs = document.querySelectorAll("#contact .input");
    
    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }
    
    function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }
    
    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });
    
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
            // Reset the input focus styles
            inputs.forEach(input => {
                let parent = input.parentNode;
                parent.classList.remove("focus");
            });
        });
    }

    // Initialize slideshows in achievement cards
    function initAchievementSlideshows() {
        const achievementCards = document.querySelectorAll('.achievement-card');
        
        achievementCards.forEach(card => {
            const slideshow = card.querySelector('.achievement-slideshow');
            const images = slideshow.querySelectorAll('.slideshow-images img');
            const dotsContainer = slideshow.querySelector('.slideshow-dots');
            
            // Skip if no images or dots container
            if (!images.length || !dotsContainer) return;
            
            // Create dots for each image
            images.forEach((_, i) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                
                dot.addEventListener('click', () => {
                    showAchievementSlide(slideshow, i);
                });
                
                dotsContainer.appendChild(dot);
            });
            
            // Set up auto-sliding
            let currentIndex = 0;
            let slideshowInterval;
            
            // Function to show next slide
            function nextSlide() {
                currentIndex = (currentIndex + 1) % images.length;
                showAchievementSlide(slideshow, currentIndex);
            }
            
            // Start auto-play slideshow
            function startSlideshow() {
                slideshowInterval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
            }
            
            // Stop slideshow
            function stopSlideshow() {
                clearInterval(slideshowInterval);
            }
            
            // Initial start
            startSlideshow();
            
            // Pause slideshow on hover
            slideshow.addEventListener('mouseenter', stopSlideshow);
            
            // Resume slideshow when mouse leaves
            slideshow.addEventListener('mouseleave', startSlideshow);
        });
    }
    
    // Function to show a specific slide
    function showAchievementSlide(slideshow, index) {
        const images = slideshow.querySelectorAll('.slideshow-images img');
        const dots = slideshow.querySelectorAll('.slideshow-dots .dot');
        
        // Hide all images and deactivate all dots
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show the selected image and activate its dot
        if (images[index]) images[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
    }
    
    // Initialize the achievement slideshows
    initAchievementSlideshows();
});
