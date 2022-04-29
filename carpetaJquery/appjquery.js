let d = document
var provincias
var arregloEjercicios

$(d).ready(function() {
    $.ajax({
        url: '../helpers/data/informacionPaises.json',
        type: 'GET',
        success: function procesaRespuesta(response) {
            let pais
            provincias = response
            response.forEach(el => {
                pais += `<option id="${el.pais}" class="pais" value=${el.pais}> ${el.pais} </option>`

            });
            $('#informacion').append(pais)

        },
        error: function muestraError(err) {
            console.log(err)
        }
    });

    $.ajax({
        url: '../helpers/data/informacionDominio.json',
        type: 'GET',
        success: function procesaRespuesta(response) {
            let ejercicios
            arregloEjercicios = response
            response.forEach(el => {
                ejercicios += `<option id="${el.rama}" class="rama" value=${el.rama}> ${el.rama} </option>`

            });
            $('#informacionDominio').append(ejercicios)

        },
        error: function muestraError(err) {
            console.log(err)
        }
    });
})

$("#informacion").on('click', function(e) {
    let select = d.getElementById('informacion')
    let prov = "-"
    $('#provincias').empty()
    if (select.value == "Argentina") {
        $('#provincias').empty()
        provincias[0].provincias.forEach(el => {
            prov += `<option id="${el}" class="provincia" value="${el}"> ${el} </option>`
        });
        $('#provincias').append(prov)

    } else if (select.value == "Uruguay") {
        $('#provincias').empty()
        provincias[1].provincias.forEach(el => {
            prov += `<option id="${el}" class="provincia" value="${el}"> ${el} </option>`

        });
        $('#provincias').append(prov)
    } else if (select.value == "Paraguay") {
        $('#provincias').empty()
        provincias[2].provincias.forEach(el => {
            prov += `<option id="${el}" class="provincia" value="${el}"> ${el} </option>`

        });
        $('#provincias').append(prov)
    }

})



$("#informacionDominio").on('click', function(e) {
    let select = d.getElementById('informacionDominio')
    let ejer = ""
    $('#ejercicios').empty()
    if (select.value == "Tren-Inferior") {
        $('#ejercicios').empty()
        arregloEjercicios[0].ejercicios.forEach(el => {
            ejer += `<option id="${el}" class="ejercicios" value="${el}"> ${el} </option>`
        });
        $('#ejercicios').append(ejer)

    } else if (select.value == "Tren-Superior") {
        $('#ejercicios').empty()
        arregloEjercicios[1].ejercicios.forEach(el => {
            ejer += `<option id="${el}" class="ejercicios" value="${el}"> ${el} </option>`

        });
        $('#ejercicios').append(ejer)
    } else if (select.value == "Tren-Medio") {
        $('#ejercicios').empty()
        arregloEjercicios[2].ejercicios.forEach(el => {
            ejer += `<option id="${el}" class="ejercicios" value="${el}"> ${el} </option>`

        });
        $('#ejercicios').append(ejer)
    }
})

$(d).on('click', function(e) {
    let elemento = d.getElementsByTagName('option')
    let target = e.target
    console.log(elemento)
    elemento.forEach(el => {
        if (target == el) {
            el.setAtribute('selected', 'true')
        }
    })

})