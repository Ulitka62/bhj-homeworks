const tasksInput = document.getElementById(`task__input`);
const tasksAdd = document.getElementById(`tasks__add`);
const tasksList = document.getElementById(`tasks__list`);

function taskAdd(task) {
        tasksList.insertAdjacentHTML(`beforeEnd`, `
            <div class="task">
            <div class="task__title">
                ${task}
            </div>
            <a href="#" class="task__remove">&times;</a>
            </div>`);
        
        tasksInput.value = "";   
}

tasksAdd.onclick = function(e) {
		e.preventDefault();
		if (tasksInput.value.trim() != '') {
					taskAdd(tasksInput.value);
		}
}

tasksList.onclick = function(e) {
    if ( e.target.classList.contains(`task__remove`) ) {
        e.target.closest(`.task`).remove();
    }
}
