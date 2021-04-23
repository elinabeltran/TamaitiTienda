function numeritoCart() {
    let cartNumber = document.querySelector("span.cartNumber")
    if (localStorage.cart != undefined) {
        let cart = JSON.parse(localStorage.cart);
        let indice = cart.length;
        cartNumber.innerHTML = indice
    } else {
        // let indice = 0;
        // cartNumber.innerHTML = indice
    }
}

window.addEventListener('load', function () {
    let addBtn = document.getElementById('addBtn');

    if (addBtn != null) {
        addBtn.addEventListener('click', function (event) {
            numeritoCart()
            // actualiza el indice del head 
        });
    }
    numeritoCart()
});


