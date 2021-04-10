window.addEventListener('load', function () {

    console.log("PEDIDOS--------------")


    let pedido = document.querySelector('#addCart')

    // let cartNumbers = localStorage.setItem('cartNumbers',1)
    // let productNumber= parseInt(cartNumbers)



    pedido.addEventListener('click', function (e){

        let productoPedido = document.querySelector('#addCart')
        let query = location.href


        localStorage.setItem('cartNumbers',JSON.stringify(productNumber))
    }) 

    


})
    
