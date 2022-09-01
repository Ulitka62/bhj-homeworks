const downItem = Array.from(document.querySelectorAll('.dropdown__item'));
const downValue = document.querySelector('.dropdown__value');
const downList = document.querySelector('.dropdown__list');

downValue.addEventListener('click', function() {
  downList.classList.toggle('dropdown__list_active');
})

for (let i = 0; i < downItem.length; i++)
  downItem[i].addEventListener('click', function(e) {
    e.preventDefault();
    downList.classList.remove('dropdown__list_active');
    downValue.textContent = this.textContent;
  })