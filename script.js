document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    const cursorGlow = document.querySelector('.cursor-glow');

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        
        // Custom cursor movement
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
        cursorDot.style.left = `${clientX}px`;
        cursorDot.style.top = `${clientY}px`;
        
        // Background glow movement
        cursorGlow.style.left = `${clientX}px`;
        cursorGlow.style.top = `${clientY}px`;
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorGlow.style.width = '400px';
        cursorGlow.style.height = '400px';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorGlow.style.width = '600px';
        cursorGlow.style.height = '600px';
    });

    // Reveal animation for cards
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Command section switching
    const cmdDots = document.querySelectorAll('.cmd-dot');
    const cmdSections = document.querySelectorAll('.cmd-section');

    cmdDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const target = dot.getAttribute('data-target');
            
            // Update dots
            cmdDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            
            // Update sections
            cmdSections.forEach(s => {
                s.classList.remove('active');
                if (s.id === target) {
                    s.classList.add('active');
                }
            });
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});