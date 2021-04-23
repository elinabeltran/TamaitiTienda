window.addEventListener('load', function () {

    let vaciar = document.getElementById('vaciar');
    vaciar.addEventListener('click', function (event) {

        alert("Vas a vaciar todos los productos seleccionados en tu carrito")
        
        localStorage.clear('cart')
        document.querySelector("ul.cartList").innerHTML == 
        `<li class="product">Aún no hay productos en tu carrito</li>`
        
        location.reload();
    })

    
    let deleteBtns = document.querySelectorAll('button.borrarItem');
    // let idItem =  document.querySelector('button.borrarItem').getAttribute('value');

    for (let i = 0; i < deleteBtns.length; i++) {
      let deleteBtn = deleteBtns[i]
      let idItem = deleteBtns[i].getAttribute('value')


      deleteBtn.addEventListener('click', function (event) {
        let cart = JSON.parse(localStorage.cart)
    
        function filtrarPorID(obj) {
            if (obj.id != idItem) {
              return true;
            } else {
              return false;
            }
          }
          
          cart = cart.filter(filtrarPorID);
          localStorage.setItem('cart', JSON.stringify(cart))
          
          console.log('Array Filtrado\n', cart);
          location.reload();

 
    })
      
    }
   


})

