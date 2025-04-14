document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Update icon
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Add float-in animations to elements when they enter viewport
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.profile, header');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Run animation check on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});

   // Optional JavaScript for additional functionality
   document.addEventListener('DOMContentLoaded', function() {
    // You can add additional interactivity here if needed
    const marqueeTrack = document.querySelector('.marquee-track');
    
    // Clone items for a seamless infinite scroll effect
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        const clone = item.cloneNode(true);
        marqueeTrack.appendChild(clone);
    });
});

 // Initialize Lucide icons
 lucide.createIcons();

 // Intersection Observer for fade-in animation
 document.addEventListener('DOMContentLoaded', function() {
     const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 entry.target.classList.add('visible');
             }
         });
     }, {
         threshold: 0.1
     });

     // Observe all skill cards
     document.querySelectorAll('.skill-card').forEach(card => {
         observer.observe(card);
     });
 });

  // Optional: Add IntersectionObserver for triggering animations when scrolled into view
  document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reset the animation when element comes into view
                entry.target.style.animation = 'none';
                // Force reflow
                void entry.target.offsetWidth;
                // Restart the animation
                if (entry.target.classList.contains('showcase-heading')) {
                    entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                } else if (entry.target.classList.contains('project-card')) {
                    const index = Array.from(document.querySelectorAll('.project-card')).indexOf(entry.target);
                    entry.target.style.animation = `fadeIn 0.6s ease forwards ${index * 0.2}s`;
                }
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe the heading and project cards
    observer.observe(document.querySelector('.showcase-heading'));
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
});

 // Back to top button functionality
 const backToTopButton = document.getElementById('back-to-top');
        
 // Show button when user scrolls down 300px
 window.addEventListener('scroll', () => {
     if (window.scrollY > 300) {
         backToTopButton.classList.add('visible');
     } else {
         backToTopButton.classList.remove('visible');
     }
 });

 // Scroll to top when button is clicked
 backToTopButton.addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });