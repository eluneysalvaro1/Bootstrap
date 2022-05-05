$(document).ready(function() {
    $.ajax({
        url: "http://127.0.0.1:8000/api/paises",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            console.log(data);
            $("#pais").on("keyup", function() {
                $("#mostrarPaises").text("");
                let paises = "<option>Seleccione</option>";
                let inputPais = document.getElementById("pais").value.toLowerCase();
                data.forEach((pais) => {
                    if (pais.descripcion.toLowerCase().includes(inputPais)) {
                        paises += `<option>${pais.descripcion}</option>`;
                    }
                });
                $("#mostrarPaises").append(paises);
            });
        },
        error: function muestraError(err) {
            console.log(err);
        },
    });

    $("#mostrarPaises").on("change", function() {
        $.ajax({
            url: "http://127.0.0.1:8000/api/estados/" +
                document.getElementById("mostrarPaises").value,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
                $("#pais").on("keyup", function() {
                    $("#mostrarEstados").text("");
                });
                console.log(data);
                $("#mostrarEstados").text("");
                let estados;
                data.forEach((estado) => {
                    estados += `<option>${estado.descripcion}</option>`;
                });
                $("#mostrarEstados").append(estados);
            },
            error: function(error) {
                console.log(error);
            },
        });
    });
});