document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu
    const toggleNav = () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    };

    burger.addEventListener('click', toggleNav);

    // Smooth scrolling with longer duration
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetID = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            if (navLinks.classList.contains('nav-active')) {
                toggleNav();
            }
        });
    });
});