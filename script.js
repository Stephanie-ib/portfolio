// ELEMENTS
const slider = document.querySelector('.projects-slider');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const cvBtn = document.querySelector('.btn');

// MOBILE MENU TOGGLE
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// SLIDER BUTTONS RESPONSIVE
if(slider){
  function slideLeft() {
    const cardWidth = slider.querySelector('.project-card').offsetWidth + 16;
    slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }

  function slideRight() {
    const cardWidth = slider.querySelector('.project-card').offsetWidth + 16;
    slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }

  window.slideLeft = slideLeft;
  window.slideRight = slideRight;
}

// CV DOWNLOAD BUTTON
if(cvBtn){
  cvBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = './files/Stephanie-Ibrahim-CV.pdf';
    link.download = 'Stephanie_Ibrahim_CV.pdf';
    link.click();
  });
}
