let d = document;

$(d).ready(function() {
    // $.ajax({
    //     url: "http://127.0.0.1:8000/api/contactos",
    //     type: "GET",
    //     contentType: "application/json; charset=utf-8",
    //     dataType: "json",
    //     success: function(data) {
    //         let contactos;
    //         $.each(data, function(i, item) {
    //             contactos += `<tr><td>${item.nombre}</td><td>${item.empresa}</td><td>${item.telefono}</td><td>${item.mail}</td><td>${item.comentarios}</td></tr>`;
    //         });
    //         $("#tableBody").append(contactos);
    //     },
    //     error: function muestraError(err) {
    //         console.log(err);
    //     },
    // });

    $.ajax("http://localhost/tp2jquery/consultasBD.php?contactos=1", {
        // url: "http://127.0.0.1:5500/helpers/data/consultasBD.php?contactos=1",
        // type: "GET",
        success: function(data) {
            $("#tabla").pagination({
                dataSource: data,
                pageSize: 5,
                showPrevious: false,
                showNext: false,
                callback: function(data, pagination) {
                    // template method of yourself
                    let contactos;
                    $.each(data, function(i, item) {
                        contactos += `<tr><td>${item.Nombre}</td><td>${item.Empresa}</td><td>${item.Telefono}</td><td>${item.Mail}</td><td>${item.Comentario}</td></tr>`;
                    });
                    $("#tableBody").html(contactos);
                },
            });

            console.log(data);
            // let contactos;
            // $.each(data, function(i, item) {
            //     contactos += `<tr><td>${item.Nombre}</td><td>${item.Empresa}</td><td>${item.Telefono}</td><td>${item.Mail}</td><td>${item.Comentario}</td></tr>`;
            // });
            // $("#tableBody").append(contactos);
        },
        error: function muestraError(err) {
            console.log(err);
        },
    });
});