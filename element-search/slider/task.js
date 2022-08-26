const indexSlides = 5;
let n = 0;

const sliderItem = document.getElementsByClassName('slider__item');
const sliderDot = document.getElementsByClassName('slider__dot');

const prev = document.getElementsByClassName('slider__arrow_prev')[0];
const next = document.getElementsByClassName('slider__arrow_next')[0];

function setSlide() {
  sliderItem[n].className = 'slider__item slider__item_active';
  sliderDot[n].className = 'slider__dot slider__dot_active';
}

function clearSlide() {
  sliderItem[n].className = 'slider__item';
  sliderDot[n].className = 'slider__dot';
}

for (let i = 0; i < indexSlides; i++) {
   sliderDot[i].index = i;
   sliderDot[i].onclick = function() {
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