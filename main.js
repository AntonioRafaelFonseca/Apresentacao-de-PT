if(window.location.href.includes('slide'))
{
  document.addEventListener('mousemove', (e) => {
    const cur = document.querySelector('.cursor')

    cur.style.left = `${e.clientX}px`
    cur.style.top = `${e.clientY}px`
  });
  let current = (() => {
    const match = window.location.href.match(/slide(\d+)\.html$/);
    return match ? Number(match[1]) : 0;
  })();

  const maxSlides = 4; // Set this to your total number of slides

  document.addEventListener("keydown", (k) => {

    if (k.key === "ArrowRight") {
      if (current < maxSlides) {
        current++;
        window.location.href = `slide${current}.html`;
      }else
      {
      window.location.href = 'referencias.html'
      }
      
    }

    else if (k.key === "ArrowLeft") {
      if (current == 0) {
        window.location.href = 'index.html'
      }
      else
      {
        current--;
        window.location.href = `slide${current}.html`;
      }
      
    }
  });
}
else
{
  document.addEventListener('keydown', e => {
    if (e.key == 'ArrowLeft')
    {
      window.location.href = 'slide4.html'
    }
  });
}