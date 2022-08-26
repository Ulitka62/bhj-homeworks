const menuLink = Array.from(document.getElementsByClassName('menu__link'))
for(let item of menuLink) {
    item.onclick = function() {
        const menuMain = this.closest('ul');
        const parent = this.parentElement.querySelector('.menu_sub');
        
        if( menuMain.className === 'menu menu_main') {
            const active = menuMain.querySelector('.menu_active');
            if(active && (active !== parent))
            active.className = 'menu menu_sub'
        }
        
        if(!parent) {
            return true
        }

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
