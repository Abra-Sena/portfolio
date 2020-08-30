function readMoreText() {
  const dot = document.querySelector('.dots');
  const moreText = document.getElementById('more');

  if(dot.style.display === 'none') {
    dot.style.display = 'inline';
    moreText.style.display = 'none';
  } else {
    dot.style.display = 'none';
    moreText.style.display = 'inline';
  }
}
