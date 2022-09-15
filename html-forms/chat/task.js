const chatWidget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages'); 
const chatSide = document.querySelector('.chat-widget__side');
const botMessages = [
    `Здравствуйте и до свидания!`,
    `Разбежался`,
    `Ничего не знаю!`,
    `Что надо то? `,
    `Отстань! `,
    `Ничего не слышу`,
    `Вы меня не интересуете`,
    `Как дела, дружок?`,
    `Напишите 31 февраля`,
    `Мы закрыты!`
];
const getDate = new Date();
const allTime = getDate.getHours() + ':' + getDate.getMinutes();


chatSide.addEventListener('click', () => {
  chatWidget.classList.toggle(`chat-widget_active`); 
});

function bot () { 
 		 index = Math.floor(Math.random() * botMessages.length);
   	 return botMessages[index];
}

input.addEventListener(`keydown`, e => {
    if (input.value) {
        if (e.key == 'Enter') {
            messages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">` + allTime  + `</div>
                    <div class="message__text">` + input.value + `</div>
                </div>`;
                input.value = ``;
        } else {
					return false
				}
							messages.innerHTML += `
                    <div class="message">
                        <div class="message__time">` + allTime  + `</div>
                        <div class="message__text">` + bot() + `</div>
                    </div>`;
               	input.value = ``;
    }
});