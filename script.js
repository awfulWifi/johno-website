// ===== JOHN O! CEREAL — SCRIPT.JS =====

// Fade in elements when page loads
document.addEventListener('DOMContentLoaded', () => {

  // Animate elements in on load
  const fadeElements = document.querySelectorAll('.hero-text, .hero-image, .card, .product-card, .about-placeholder');
  fadeElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  });

  // Highlight active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Fun: add a little bounce to the logo on click
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', () => {
      logo.style.transform = 'scale(1.2) rotate(-5deg)';
      setTimeout(() => {
        logo.style.transform = 'scale(1) rotate(0deg)';
      }, 300);
      logo.style.transition = 'transform 0.3s ease';
    });
  }

});
