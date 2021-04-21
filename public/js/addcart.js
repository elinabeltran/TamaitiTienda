window.addEventListener('load', function () {

    let addBtn = document.getElementById('addBtn');
    let cartNumber =document.querySelector("span.cartNumber")

    if (addBtn != null) {

        addBtn.addEventListener('click', function (event) {

            let imagen = document.getElementById('imagen').getAttribute('src');
            let nombreProduct = document.getElementById('name').innerText;
            let id = document.getElementById('name').getAttribute('value');
            let precioProduct = document.getElementById('precio').getAttribute('value');

            let productPedido = {
                name: nombreProduct,
                imagen: imagen,
                precio: precioProduct,
                id: id,
                amount: 1,
            }

            if (localStorage.cart == undefined) {
                let cart = []
                cart.push(productPedido)
                localStorage.setItem('cart', JSON.stringify(cart))

            } else {
                let cart = JSON.parse(localStorage.cart)
                // hacer un map buscar si existe un producto con mismo id ---- aumento cantidad /// retorna un nuevo array con los cambios que hice en ese array
                // set con el nuevo array 
                cart.push(productPedido)
                localStorage.setItem('cart', JSON.stringify(cart))
  
            }
                // actualiza el indice del head 




                    let cart = JSON.parse(localStorage.cart);
                    let indice = cart.length;
                    cartNumber.innerHTML += indice

                    console.log(indice)
               

        });



    }

});



















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
