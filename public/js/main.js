// HAMBURGER BUTTON
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
menu.classList.toggle('open');
});

// STICKY TAB HEADER
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.tab-header');
    if (window.scrollY > 10) {
      header.style.backgroundColor = 'white';
      header.style.color = 'black';
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.color = '';
    }
    console.log("SCROLLED");
  });
});