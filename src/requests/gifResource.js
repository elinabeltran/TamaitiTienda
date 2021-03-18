//INSTALAR Y REQUERIR AXIOS
let axios = require('axios');
let defaults = require('./default');

const urlgifs = 'gifs/';

let gifResource ={

    random: function(){ 
        return axios({
            ...defaults,
            method: "GET",
            url: urlgifs + "random",
            params: {
                api_key: "CwKRJ4ZHZ6QHxtyAjBcjKioPezGuwGkI",
             }
        })
    },

    trending: function(){ 
        return axios({
            ...defaults,
            method: "GET",
            url: urlgifs + "trending",
            params: {
                api_key: "CwKRJ4ZHZ6QHxtyAjBcjKioPezGuwGkI",
             }
        })
      },
      byId: function(){ 
        let id= "xT4uQulxzV39haRFjG"
        return axios({
            ...defaults,
            method: "GET",
            url: urlgifs + "xT4uQulxzV39haRFjG",
            params: {
                api_key: "CwKRJ4ZHZ6QHxtyAjBcjKioPezGuwGkI",
             }
        })
      },


}


// PARA LLAMARLO NE RUTAS
// gifResource.byId().then(function(results){
//     console.log("acaa", results.data);
// })


module.exports  = gifResource;