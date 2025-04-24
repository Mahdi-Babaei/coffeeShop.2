// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            menuIcon.classList.toggle('block');
            closeIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('block');
        });
    }

    // Add nav-link class to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.add('nav-link');
    });

    // Testimonial slider functionality
    let currentTestimonial = 0;
    const testimonials = [
        {
            initials: "JD",
            name: "Jane Doe",
            text: "The Ethiopian Yirgacheffe here is simply the best coffee I've ever had. The atmosphere is perfect for both work and relaxation."
        },
        {
            initials: "JS",
            name: "John Smith",
            text: "Their commitment to sustainability and fair trade is impressive. Not to mention, their seasonal blends are always something to look forward to."
        },
        {
            initials: "MC",
            name: "Maria Cruz",
            text: "As a coffee connoisseur, I appreciate the attention to detail in every cup. The baristas are knowledgeable and passionate about their craft."
        }
    ];

    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    const testimonialContainer = document.querySelector('.testimonial-slider');

    // Only set up testimonial slider if elements exist
    if (prevButton && nextButton && testimonialContainer) {
        function renderTestimonial(index) {
            const testimonial = testimonials[index];
            testimonialContainer.innerHTML = `
                <div class="testimonial-slide bg-primary bg-opacity-50 p-8 rounded-sm">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                            <span class="text-light font-bold">${testimonial.initials}</span>
                        </div>
                        <div>
                            <h3 class="font-heading text-xl">${testimonial.name}</h3>
                            <div class="flex text-accent">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                        </div>
                    </div>
                    <p class="text-light italic">"${testimonial.text}"</p>
                </div>
            `;
        }

        prevButton.addEventListener('click', function() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            renderTestimonial(currentTestimonial);
        });

        nextButton.addEventListener('click', function() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            renderTestimonial(currentTestimonial);
        });

        // Auto-rotate testimonials
        setInterval(function() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            renderTestimonial(currentTestimonial);
        }, 5000);
    }

    // Add fade-in animation for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Add coffee steam animation to specific elements
    const productCards = document.querySelectorAll('.bg-white h3');
    productCards.forEach(card => {
        card.classList.add('coffee-steam');
    });

    // Add image-hover class to product images
    const productImages = document.querySelectorAll('.h-64.bg-cover');
    productImages.forEach(image => {
        image.classList.add('image-hover');
    });

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('a[href], button');
    buttons.forEach(button => {
        if (!button.closest('nav')) { // Exclude nav links
            button.classList.add('btn-hover');
        }
    });

    // Add newsletter input class
    const emailInput = document.querySelector('input[type="email"]');
    if (emailInput) {
        emailInput.classList.add('newsletter-input');
    }
}); 