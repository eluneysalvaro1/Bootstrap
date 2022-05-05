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
//     console.log(datos);

//     contacto = $.post("http://127.0.0.1:8000/api/nuevoContacto", datos);
//     console.log(contacto);

//     window.location.replace("http://127.0.0.1:5500/ejercicioJquery5.html");
// });

/**USANDO PHP PURO*/
$("#enviarDatos").on("click", function() {
    let nombre = document.getElementById("nombre").value;
    let empresa = document.getElementById("empresa").value;
    let telefono = document.getElementById("telefono").value;
    let mail = document.getElementById("mail").value;
    let comentarios = document.getElementById("comentarios").value;
    const datos = {
        nombre: nombre,
        empresa: empresa,
        telefono: telefono,
        mail: mail,
        comentarios: comentarios,
    };

    contacto = $.post("http://localhost/tp2jquery/consultasBD.php", datos);
    window.location.replace("http://127.0.0.1:5500/ejercicioJquery5.html");
});