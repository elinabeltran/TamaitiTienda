window.addEventListener('load', function () {

    if (localStorage.cart == undefined) {
        document.querySelector("div.cartCard").innerHTML += `
        <img style="width:250px; margin: 0 40px;" src="/images/cart_icon.png" alt="">
        </br> 
        <span class="btn_secundary">El carrito de compras esta vacío.</span> 
        `

        document.querySelector(".vaciar").style.display="none"
        document.querySelector(".confirmar").style.display="none"

    } else {
        let cart = JSON.parse(localStorage.cart);
        let total = 0;
        let ulCart = document.querySelector("ul.cartList")


        for (let i = 0; i < cart.length; i++) {
            precio =parseInt(cart[i].precio);
            total = total + precio

            let productItem = `
                <li class="product">
                <img src="${cart[i].imagen}" alt="">
                <div class="nameProduct"><h6>${cart[i].name}</h6></div>
                
                <h5>$ ${cart[i].precio}</h5>
                <div class="actions"><button id="btn-trash" value=${cart[i].id} class="borrarItem btn-trash"><i class="fa fa-trash-o"></i></button></div>
                </li>
                `
             ulCart.innerHTML += productItem

        }
        document.querySelector("ul.cartList").innerHTML +=
        ` <li class="total">
            <h4>TOTAL</h2>
            <h2>$ ${total}</h2>
         </li>
        `  
   
    }




})







