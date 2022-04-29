let doc = document
let insertar = doc.querySelectorAll('.opcion')
let card;

$(doc).ready(function() {
    $.ajax({
        url: '../helpers/data/informacionEje2.json',
        type: 'GET',
        success: function procesaRespuesta(response) {

            for (let i = 0; i < response.length; i++) {
                card = carta(response, i)
                insertar[i].innerHTML = card
                card = ''
            }

        },
        error: function muestraError(err) {
            console.log(err)
        }
    })
})


const carta = (respuesta, i) => {
    let rta = ` <div class="container text-center"> <h1> ${respuesta[i].name} </h1>
    <h2 class="text-center"> ${respuesta[i].title} </h2>
    <img src="${respuesta[i].url}" alt="${respuesta[i].name}" width="60%" height="50%" />
    <p class="text-center"> ${respuesta[i].dataContent} </p> </div> 
    `
    return rta
}