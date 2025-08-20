const slider = document.querySelector('.projects-slider');

function slideLeft() {
    slider.scrollBy({ left: -300, behavior: 'smooth' });
}

function slideRight() {
    slider.scrollBy({ left: 300, behavior: 'smooth' });
}
