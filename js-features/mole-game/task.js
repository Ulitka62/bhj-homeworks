const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const getField = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    getField(i).onclick = function() {
        if(getField(i).className.includes('hole_has-mole')) {
            ++dead.textContent;
            check();
        } else {
            ++lost.textContent;
            check();
        }
    }
}

function clear() {
    dead.textContent = 0;
    lost.textContent = 0; 
}


function check() {
    if(dead.textContent == 10) {
        alert('Вы выиграли!')
        clear()
    } else if (lost.textContent == 5) {
        alert('Вы проиграли!')
        clear()
    }
}
