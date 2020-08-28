//automatic change projects in the gallery after 3 seconds
const slideshows = [...document.querySelectorAll('.projects__list')];

slideshows.forEach((slide) => {
  // Get an array of slides
  const slides = [...document.querySelectorAll('.project')];

  const index = 0, time = 5000;
  slides[index].classList.add('active');

  setInterval(() => {
    slides[index].classList.remove('active');

    index++;
    if(index == slides.length) index = 0;

    slides[index].classList.add('active');

  }, time);
});
