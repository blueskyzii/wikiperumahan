// AD/NEWS/HOT WEBSITE
const marqueeWrapper = document.querySelector('.marquee-wrapper');

if (marqueeWrapper) {
  // Pause animasi saat user sentuh/mouseenter
  marqueeWrapper.addEventListener('touchstart', () => {
    marqueeWrapper.style.animationPlayState = 'paused';
  });
  marqueeWrapper.addEventListener('touchend', () => {
    marqueeWrapper.style.animationPlayState = 'running';
  });

  // Untuk desktop juga (opsional)
  marqueeWrapper.addEventListener('mouseenter', () => {
    marqueeWrapper.style.animationPlayState = 'paused';
  });
  marqueeWrapper.addEventListener('mouseleave', () => {
    marqueeWrapper.style.animationPlayState = 'running';
  });
}

// SEARCH BOX BISA DITUTUP DILUAR BOX
  const toggleBtn = document.querySelector('.toggle-search');
  const searchBox = document.getElementById('searchBox');

  // Toggle saat tombol ditekan
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Cegah bubbling
    searchBox.classList.toggle('active');
  });

  // Klik di dalam search box → jangan ditutup
  searchBox.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Klik di luar semuanya → tutup
  document.addEventListener('click', () => {
    searchBox.classList.remove('active');
  });