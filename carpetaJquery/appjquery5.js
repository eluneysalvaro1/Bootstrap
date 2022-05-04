let d = document;

$(d).ready(function() {
    $.ajax({
        url: "http://127.0.0.1:8000/api/contactos",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            let contactos;
            $.each(data, function(i, item) {
                contactos += `<tr><td>${item.nombre}</td><td>${item.empresa}</td><td>${item.telefono}</td><td>${item.mail}</td><td>${item.comentarios}</td></tr>`;
            });
            $("#tableBody").append(contactos);
        },
        error: function muestraError(err) {
            console.log(err);
        },
    });
});