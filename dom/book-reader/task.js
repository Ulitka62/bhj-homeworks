const book = document.getElementById('book');
const fontSize = document.getElementsByClassName('font-size');

for (const size of fontSize) 
  size.addEventListener('click', function(evt) {
    evt.preventDefault();

     if (size.classList.contains('font-size_small')) {
            book.className = 'book book_fs-small';
        } else if (size.classList.contains('font-size_big')) {
            book.className = 'book book_fs-big';
        } else {
            book.className = 'book';			
        }
		
		book.querySelector('.font-size_active').classList.remove('font-size_active');
		size.classList.add('font-size_active');
  })