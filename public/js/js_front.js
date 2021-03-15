window.addEventListener('load', function () {

    let formulario = document.querySelector('form.createProductForm')

    formulario.addEventListener('submit', function (e) {
       
        let arrayErrors = []

        let name = document.querySelector('#name');
        let description = document.querySelector('#description');
        let price = document.querySelector('#price');
        let image = document.querySelector('#image');
        let category = document.querySelector('#category');
        if (name.value == "") {
            arrayErrors.push('Debes completar el campo de nombre')
        }
        console.log(image.value)

        if (description.value.length < 20) {
            arrayErrors.push('Debes completar el campo de description(20 caracteres minimo)')
        }
        if (price.value == "") {
            arrayErrors.push('Debes completar el campo de precio')
        }

        if (image.value == "") {
            arrayErrors.push('Debes carga una imagen con formato válido (jpg|png|jpeg|gif).')
           
        }

        if (!(/\.(jpg|png|jpeg|gif)$/i).test(image.value)) {
            arrayErrors.push('El archivo a adjuntar no es una imagen');
        }

        if (category.value == "") {
            arrayErrors.push('Debes seleccionar una categoría.')
        }
        if (arrayErrors.length > 0) {
            e.preventDefault();
            // console.log(arrayErrors)
            let ulDeErrores = document.querySelector('ul.errorsUl')
            for (let i = 0; i < arrayErrors.length; i++) {
                ulDeErrores.innerHTML += "<li>" + arrayErrors[i] + "</li>"
            }

        }

    })


});
