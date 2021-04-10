
window.addEventListener('load', function () {

    document
    
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=dSc1y0Zte8200HrqTSnSG5Mc5Mi1n8GG&limit=5&rating=g")
    .then( function (response) {
        return response.json()
    })
    
    .then( function (info) {
        console.log(info.data)
    
    })
 
   

  

})