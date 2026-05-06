document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a, .btn-primary').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Cart logic
    let cartCount = 0;
    const cartBadge = document.querySelector('.cart-count');
    const addButtons = document.querySelectorAll('.add-btn');

    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartBadge.textContent = cartCount;
            
            // Animation for the button
            button.textContent = 'Added!';
            button.style.backgroundColor = '#5D4037';
            button.style.color = '#FFFFFF';
            
            setTimeout(() => {
                button.textContent = 'Add to Cart';
                button.style.backgroundColor = '#FEF9EF';
                button.style.color = '#5D4037';
            }, 1000);

            // Simple pulse animation for the cart icon
            const cartIcon = document.querySelector('.cart-icon');
            cartIcon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartIcon.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Form submission simulation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your inquiry! We will get back to you shortly.');
                btn.textContent = originalText;
                btn.disabled = false;
                contactForm.reset();
            }, 1500);
        });
    }

    // Scroll effect for header
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(212, 163, 115, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = '#D4A373';
        }
    });
});
