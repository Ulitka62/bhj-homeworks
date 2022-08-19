const timer = document.getElementById('timer');
let time = new Date()

function countDown () {
   let minutes = Math.floor(time / 60);
   let seconds = Math.floor(time % 60);

   timer.textContent = (minutes < 10 ? `${minutes}` : minutes) + " : " + (seconds < 10 ? `0${seconds}` : seconds);

}

let out = setInterval(function() {
    --timer.textContent;
    if(timer.textContent == 0) {
        alert('Вы победили в конкурсе!')
         clearInterval(out)
        }
  }, 100);