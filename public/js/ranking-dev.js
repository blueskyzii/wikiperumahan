document.addEventListener('DOMContentLoaded', function() {
    // Script untuk mengatur perilaku hamburger menu
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            menu.classList.toggle('open');
        });
    }

    // Optional: Close menu when a link is clicked (for single-page navigation)
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menu.classList.contains('open')) {
                menu.classList.remove('open');
            }
        });
    });

    // Highlight active menu item (adjust based on current page/section)
    const currentPath = window.location.pathname;
    const tabLinks = document.querySelectorAll('.tab a, .menu a');
    tabLinks.forEach(link => {
        if (link.href.includes(currentPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
