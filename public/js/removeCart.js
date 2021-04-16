window.addEventListener('load', function () {

    let vaciar = document.getElementById('vaciar');
    vaciar.addEventListener('click', function (event) {

        alert("Vas a vaciar todos los productos seleccionados en tu carrito")
        
        localStorage.clear('cart')
        document.querySelector("ul.cartList").innerHTML == 
        `<li class="product">Aún no hay productos en tu carrito</li>`
        
        location.reload();


    })


})

    // let urlArray =  window.location.href.split("/");
    // let idURL = urlArray[urlArray.length - 1];
    // // let imagenProducto = document.getElementById("imagen");
    // let nombreProduct = document.getElementById('nombre').innerText;
    // let precioProduct = document.getElementById('precio').innerText;

    //   // guardamos en variable el pedido

    // let productPedido = {
    //     name:nombreProduct,
    //     id:idURL,
    //     precio:precioProduct,
    //     amountProduct:1,
    // }

    // if(localStorage.cart == undefined){
    //     let cart = []
    //     cart.push(productPedido)
    //     localStorage.setItem('cart',JSON.stringify(cart)) 
    // } else {
    //         let cart = JSON.parse(localStorage.cart)
    //         let arrayProductos = cart.filter(function(productPedido){    //veo si existe en el localstorage un producto con el id igual al mismo que acabo de agregar 
    //            return productPedido.id== idURL    //DEVUELVE UN booleano que me dice true si tiene ese id o false si no lo tiene
//     //         })
//     //         if(arrayProductos.length == 0){
//     //             cart.push(productPedido)
//     //             localStorage.setItem('cart',JSON.stringify(cart)) ;
//     //         } else {
//     //             arrayProductos[0].cantidadProduct = parseInt(arrayProductos[0].cantidadProduct) + 1;
//     //             localStorage.setItem('cart',JSON.stringify(cart)); 
//     //         }
//     //     }

// });



//        // guardamos en variable el pedido





//     // else {
//     //     let carrito = JSON.parse(localStorage.carrito)
//     //     let  arrayProductos = carrito.filter(function(producto){    //veo si existe en el localstorage un producto con el id igual al mismo que acabo de agregar 
//     //        return producto.idProducto == pepe    //DEVUELVE UN booleano que me dice true si tiene ese id o false si no lo tiene
//     //     })
//     //     if(arrayProductos.length == 0){
//     //         carrito.push(producto)
//     //         localStorage.setItem('carrito',JSON.stringify(carrito)) ;
//     //     } else {
//     //         arrayProductos[0].cantProducto = parseInt(arrayProductos[0].cantProducto) + 1;
//     //         localStorage.setItem('carrito',JSON.stringify(carrito)); 
//     //     }


//     // }
//     //     alert(nombreProducto+' agregado al carrito')
