/**CONSUIMIENDO API LARAVEL*/
// $("#enviarDatos").on("click", function() {
//     let nombre = document.getElementById("nombre").value;
//     let empresa = document.getElementById("empresa").value;
//     let telefono = document.getElementById("telefono").value;
//     let mail = document.getElementById("mail").value;

//     let comentarios = document.getElementById("comentarios").value;
//     const datos = {
//         nombre: nombre,
//         empresa: empresa,
//         telefono: telefono,
//         mail: mail,
//         comentarios: comentarios,
//     };
//     // e.preventDefault()
//     // console.log(datos);

//     contacto = $.post("http://127.0.0.1:8000/api/nuevoContacto", datos);
//     // console.log(contacto);

//     window.location.replace("http://127.0.0.1:5500/ejercicioJquery5.html");
// });

/**USANDO PHP PURO*/
$("#enviarDatos").on("click", function(e) {
    e.preventDefault();
    //Lucas
    let nombre = document.getElementById("nombre").value;
    let empresa = document.getElementById("empresa").value;
    let telefono = document.getElementById("telefono").value;
    let mail = document.getElementById("mail").value;
    let comentarios = document.getElementById("comentarios").value;
    const datos = {
        buscarContacto: 1,
        nombre: nombre,
        empresa: empresa,
        telefono: telefono,
        mail: mail,
        comentarios: comentarios,
    };
    $.ajax(
        "http://localhost/tp2jquery/consultasBD.php?buscarContacto=1&mail=" +
        mail +
        "&telefono=" +
        telefono, {
            success: function(data) {
                if (data.length > 0) {
                    $("#formularioContacto").trigger("reset");
                    alert("Los datos de contacto ya se encuentran en la base de datos");
                } else {
                    $.post("http://localhost/tp2jquery/consultasBD.php", datos)
                        .done(function() {
                            $("#formularioContacto").trigger("reset");
                            alert("Contacto cargado");
                        })
                        .fail(function() {
                            $("#formularioContacto").trigger("reset");
                            alert("Error en la carga del contacto");
                        });
                }
            },
            error: function(error) {
                $("#formularioContacto").trigger("reset");
                console.log("Error en la carga del contacto (error)");
            },
        }
    );

    // $.ajax({
    //     url: "http://localhost/tp2jquery/consultasBD.php",
    //     type: "POST",
    //     data: datos
    // })
    // window.location.replace("http://127.0.0.1:5500/ejercicioJquery5.html");
});