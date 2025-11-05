/**
 * Main JavaScript File - Trend News App Website
 * Handles navigation, mobile menu, and general interactivity
 */

(function() {
    'use strict';

    // DOM Elements
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const downloadBtn = document.getElementById('downloadBtn');
    const contactForm = document.getElementById('contactForm');

    /**
     * Mobile Navigation Toggle
     * Toggles the mobile menu when hamburger icon is clicked
     */
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    /**
     * Download Button Handler
     * Handles the download app button click (placeholder for future implementation)
     */
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Placeholder: In production, this would link to app stores
            // For now, show a message or redirect to contact page
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            
            if (/android/i.test(userAgent)) {
                // Redirect to Android app store
                alert('Android app coming soon! Visit our contact page for updates.');
            } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                // Redirect to iOS app store
                alert('iOS app coming soon! Visit our contact page for updates.');
            } else {
                // Desktop or other
                alert('Download available soon! Visit our contact page for updates.');
            }
        });
    }

    /**
     * Contact Form Handler
     * Handles form submission (placeholder - no backend yet)
     */
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !message) {
                showFormMessage(formMessage, 'error', 'Please fill in all fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage(formMessage, 'error', 'Please enter a valid email address.');
                return;
            }

            // Simulate form submission
            // In production, this would send data to a backend API
            showFormMessage(formMessage, 'success', 'Thank you for your message! We\'ll get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
                formMessage.classList.remove('success', 'error');
            }, 5000);
        });
    }

    /**
     * Show Form Message
     * Displays success or error messages in the contact form
     */
    function showFormMessage(element, type, message) {
        if (!element) return;
        
        element.textContent = message;
        element.className = `form-message ${type}`;
        element.style.display = 'block';
        
        // Scroll to message
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    /**
     * Smooth Scroll for Anchor Links
     * Adds smooth scrolling behavior to anchor links
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#download') {
                e.preventDefault();
                const target = document.querySelector(href === '#' ? 'body' : href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    /**
     * Add Fade-in Animation on Scroll
     * Adds fade-in animation to elements when they come into view
     */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards and other elements
    document.querySelectorAll('.feature-card, .policy-section, .info-card').forEach(el => {
        observer.observe(el);
    });

    /**
     * Navbar Background on Scroll
     * Adds background to navbar when scrolling
     */
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        }
        
        lastScroll = currentScroll;
    });

    /**
     * Console Welcome Message
     * Developer-friendly message in console
     */
    console.log('%cTrend News App', 'font-size: 24px; font-weight: bold; color: #6366f1;');
    console.log('%cWebsite built with modern web technologies', 'font-size: 12px; color: #9ca3af;');
    console.log('%cFor API integration, see callback.js', 'font-size: 12px; color: #818cf8;');

})();

