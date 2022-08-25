const indexSlides = 5;
let n = 0;

const slider__item = document.getElementsByClassName('slider__item');
const slider__dot = document.getElementsByClassName('slider__dot');

const prev = document.getElementsByClassName('slider__arrow_prev')[0];
const next = document.getElementsByClassName('slider__arrow_next')[0];

function setSlide() {
  slider__item[n].className = 'slider__item slider__item_active';
  slider__dot[n].className = 'slider__dot slider__dot_active';
}

function clearSlide() {
  slider__item[n].className = 'slider__item';
  slider__dot[n].className = 'slider__dot';
}

for (let i = 0; i < indexSlides; i++) {
   slider__dot[i].index = i;
   slider__dot[i].onclick = function() {
    if (n == this.index)
      return;
    clearSlide();
    n = this.index;
    setSlide();
  }
}

prev.onclick = function() {
  clearSlide();
  n--;
  if (n < 0) 
    n = indexSlides - 1;
  setSlide();
}

next.onclick = function() {
  clearSlide();
  n++;
  if (n >= indexSlides) 
    n = 0;
  setSlide();
}