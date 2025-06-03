// HAMBURGER BUTTON
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Toggle buka/tutup menu
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
});

// Klik di luar menu → tutup
document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    if (!isClickInsideMenu && !isClickOnHamburger) {
        menu.classList.remove('open');
    }
});

// Klik salah satu link menu → tutup (dengan delay biar animasi sempat jalan)
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            menu.classList.remove('open');
        }, 100); // bisa kamu atur, misal 300ms juga oke
    });
});


// AUTO BG WHEN SCROLL
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 10;

    const header = document.getElementById('tab-header');
    const h1 = header.querySelector('h1');
    const tabLinks = header.querySelectorAll('.tab a');
    const hamburgerLines = header.querySelectorAll('.hamburger div');
    const logo = document.getElementById('logo-img');
    const hrs = document.querySelectorAll('.hr');

    header.style.cssText = `
        background-color: ${scrolled ? '#fefefe' : 'transparent'};
        box-shadow: ${scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
    `;

    h1.style.color = scrolled ? 'black' : '#fefefe';

    tabLinks.forEach(link => link.classList.toggle('scrolled', scrolled));
    hamburgerLines.forEach(line => line.style.backgroundColor = scrolled ? 'black' : '#fefefe');
    hrs.forEach(hr => hr.style.backgroundColor = scrolled ? 'black' : '#fefefe');
    logo.style.filter = scrolled ? 'invert(1)' : 'invert(0)';
});



// Active class Tab
window.addEventListener("hashchange", function () {
  document.querySelectorAll(".tab a").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === location.hash) {
      link.classList.add("active");
    }
  });
});