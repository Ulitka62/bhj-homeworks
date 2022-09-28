const cart = document.querySelector('.cart__products');
const quantityDec = document.querySelectorAll('.product__quantity-control_dec');
const quantityInc = document.querySelectorAll('.product__quantity-control_inc');
const productAdd = document.querySelectorAll('.product__add');

for (let add of quantityInc) {
    add.addEventListener('click', function() {
        let result = Number(this.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText) + 1;
        this.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText = result; 
    });
};

for (let subtract of quantityDec) {
    subtract.addEventListener('click', function() {
        let result = Number(this.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText) - 1;
        if (result <= 0) {
            result = 1;
        }
        this.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText = result;   
    });
};

function findElement(item, itemId) {
    return item.find(element => element.dataset.id == itemId);
};

for (let clickButton of productAdd) {
    clickButton.addEventListener('click', function(e) {
		const product = e.target.closest('.product');
		const prodArr = Array.from(document.querySelectorAll('.cart__product'));
        const productId = product.dataset.id;
        const productImg = product.querySelector('.product__image').src;
        const productValue = product.querySelector('.product__quantity-value').innerText;
		const productCount = + e.target.parentNode.querySelector('.product__quantity-value').innerText;
        const productSelect = findElement(prodArr, productId);
	    const productCart = `<div class="cart__product" data-id="${productId}">
                                <img class="cart__product-image" src="${productImg}">
                                <div class="cart__product-count">${productCount}</div>
                            </div>`;	

        if (productSelect) {
            productSelect.querySelector('.cart__product-count').textContent = Number(productValue) + Number(productSelect.querySelector('.cart__product-count').textContent);
        } else {
            cart.insertAdjacentHTML('beforeend', productCart);
        }
    });
};