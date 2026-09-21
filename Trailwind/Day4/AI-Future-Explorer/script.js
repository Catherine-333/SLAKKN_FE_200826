// ============================================================
// AI Future Explorer - Simple JavaScript
// Easy-to-understand code for beginner developers
// ============================================================

// 1. Mobile Menu Toggle
// We grab the button, the dropdown menu, and both SVG icons
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    // Toggle the 'hidden' class on the dropdown menu
    const isMenuOpen = !mobileMenu.classList.contains('hidden');

    if (isMenuOpen) {
      // If it's open, hide it
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      // If it's hidden, show it
      mobileMenu.classList.remove('hidden');
      hamburgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  });
}

// 2. Automatically close mobile menu when a navigation link is clicked
const mobileLinks = document.querySelectorAll('.mobile-nav-link');
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });
});

// 3. Dynamic Footer Year
// Automatically shows the current year in the footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
