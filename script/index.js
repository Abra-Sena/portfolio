const navExpand = document.querySelector('.menu__list');
const navButton = document.querySelector('.menu__icon');

function toggleNav() {
  navExpand.classList.toggle('menu__list-open');
}

navButton.addEventListener('click', toggleNav);

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
