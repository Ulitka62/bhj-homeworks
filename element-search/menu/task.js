const menuLink = Array.from(document.getElementsByClassName('menu__link'))
for(let item of menuLink) {
    item.onclick = function() {
        const parent = this.parentElement.querySelector('.menu_sub');
        if(parent.className === 'menu menu_sub') {
            parent.className = 'menu menu_sub menu_active'
        } else {
            parent.className = 'menu menu_sub';
        }
        if(item.closest('.menu_main')) {
            return false;
        }
    }
}
