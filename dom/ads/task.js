const changeText = document.querySelectorAll('.rotator__case');
const arrChangeText = Array.from(changeText);
let textIndex = 0;

function change () {
	for (let i = 0; i < arrChangeText.length; i++) {
		arrChangeText[i].classList.remove('rotator__case_active');
	}
		arrChangeText[textIndex].classList.add('rotator__case_active');
		
		if (textIndex + 1 == arrChangeText.length) {
        	textIndex = 0;
      	} else {
        	++textIndex;
      	}	
}
setInterval(change, 1000);