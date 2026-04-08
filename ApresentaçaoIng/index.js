document.addEventListener('keydown', e => {
  evaluate(e);
});

function nextSlide(current) {
  if(current != 2){
    window.location.href = `slide${current + 1}.html`;
  }
}

function prevSlide(current) {
  // Para voltar, precisamos subtrair 1
  if (current > 0) {
      window.location.href = `slide${current - 1}.html`;
  }
}

function evaluate(event) {
  let match = window.location.pathname.match(/slide(\d+)\.html/);
  let current = match ? parseInt(match[1]) : 1;

  if (event.key === 'ArrowLeft') {
      prevSlide(current);
  } 
  else if (event.key === 'ArrowRight') {
      nextSlide(current);
  }
}