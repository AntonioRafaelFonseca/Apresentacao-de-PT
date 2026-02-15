if(window.location.href.includes('slide'))
{
  cursor = true
  const cur = document.querySelector('.cursor')
  document.addEventListener('mousemove', (e) => {
    if(cursor){
      cur.style.left = `${e.clientX}px`
      cur.style.top = `${e.clientY}px`
    }else{
      cur.style.left = `-100px`
      cur.style.top = `-100px`
    }
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
      
    }else if(k.key == 'c')
    {
      if(cursor)cursor = false
      else cursor = true
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