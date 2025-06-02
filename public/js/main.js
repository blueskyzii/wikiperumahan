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


// AUTO BG WHEN SCROLL - ERROR
window.addEventListener('scroll', function () {
    const header = document.getElementById('tab-header');
    const h1 = header.querySelector('h1');
    const tabLinks = header.querySelectorAll('.tab a span');
    const hamburgerLines = header.querySelectorAll('.hamburger div');

    const scrolled = window.scrollY > 10;

    header.style.backgroundColor = scrolled ? '#fefefe' : 'transparent';
    h1.style.color = scrolled ? 'black' : '#fefefe';

    tabLinks.forEach(span => {
        const isActive = span.parentElement.classList.contains('active');
        if (scrolled) {
            span.style.color = isActive ? '#ffd700' : 'black';
        } else {
            span.style.color = '#fefefe';
        }
    });

    hamburgerLines.forEach(line => {
        line.style.backgroundColor = scrolled ? 'black' : '#fefefe';
    });

    // INVERT COLOR IMG ICON
    const logoImg = document.getElementById('logo-img');

    if (scrolled) {
        logoImg.style.filter = 'invert(1)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        logoImg.style.filter = 'invert(0)';
        header.style.boxShadow = 'none';
    }
});



// Tambahkan class "active" ke tab yang cocok dengan lokasi hash
window.addEventListener("hashchange", function () {
  document.querySelectorAll(".tab a").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === location.hash) {
      link.classList.add("active");
    }
  });
});