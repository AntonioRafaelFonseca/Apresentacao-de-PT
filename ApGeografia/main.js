const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.nav-button');

const cardWidth = () => container.clientWidth;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.classList.contains('left') ? -cardWidth() : cardWidth();
    container.scrollBy({ left: offset, behavior: 'smooth' });
  });
});

window.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    const offset = event.key === 'ArrowLeft' ? -cardWidth() : cardWidth();
    container.scrollBy({ left: offset, behavior: 'smooth' });
  }
});
