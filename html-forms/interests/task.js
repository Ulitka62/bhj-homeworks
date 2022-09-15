const interest = document.querySelectorAll('.interest__check');

for (let item of interest) {
    item.addEventListener('click', () => {			
        if (!item.closest('.interests_active') && item.checked === true) {
            const parent = item.closest('.interest');
            const interestCheck = parent.querySelectorAll('.interest__check');

            for (let item of interestCheck) {
                item.checked = true;                
            }
					
        } else if (!item.closest('.interests_active') && item.checked === false) {
            const parent = item.closest('.interest');
            const interestCheck = parent.querySelectorAll('.interest__check');

            for (let item of interestCheck) {
                item.checked = false;                
            }
        }        
    });
}