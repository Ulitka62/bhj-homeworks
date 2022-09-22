const cart = document.querySelector('.cart__products');
const quantityControl = document.querySelectorAll('.product__quantity-control');
const productAdd = document.querySelectorAll('.product__add');


for (let item of quantityControl) {
    item.addEventListener('click', Value);
}

for (let item of productAdd) {
    item.addEventListener('click', addCart);
}

function Value(e) {

    let value = e.target.parentNode.querySelector('.product__quantity-value');
    let count = +value.innerText;
    
    if (e.target.classList.contains('product__quantity-control_inc')) {
        value.innerText = Number(value.innerText) + 1;
    } else {
        if (count > 1) {
            value.innerText = Number(value.innerText) - 1;
        } 
    }
}

function addCart(e) {

    const product = e.target.closest('.product');
    const id = product.dataset.id;
    const countProduct = + e.target.parentNode.querySelector('.product__quantity-value').innerText;

    for (let item of cart.children) {

        if (item.dataset.id === id) {
            let productCount = item.querySelector('.cart__product-count');
            let total = + productCount.innerText;
            productCount.innerText = total + countProduct;

            return false;
        }
    }

    const productImg = product.querySelector('.product__image').src;
    const count = product.querySelector('.product__quantity-value').innerText;

    const productCart = `<div class="cart__product" data-id="${id}">
                                <img class="cart__product-image" src="${productImg}">
                                <div class="cart__product-count">${count}</div>
                            </div>`;

    cart.insertAdjacentHTML('beforeend', productCart);
}