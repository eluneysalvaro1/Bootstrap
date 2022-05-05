<?php
//USAR ESTE ARCHIVO DENTRO DE XAMPP
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$conexionBD = new mysqli('localhost', 'root', '', 'tp2jquery');

if (isset($_GET['contactos'])) {
    $sqlContactos = mysqli_query($conexionBD, "SELECT * FROM contactos ");
    if (mysqli_num_rows($sqlContactos) > 0) {
        $contactos = mysqli_fetch_all($sqlContactos, MYSQLI_ASSOC);
        echo json_encode($contactos);
    }
} else {
    $nombre = $_POST['nombre'];
    $mail = $_POST['mail'];
    $telefono = $_POST['telefono'];
    $empresa = $_POST['empresa'];
    $comentarios = $_POST['comentarios'];
    if (($mail != "") && ($nombre != "")) {
        $sqlEmpleaados = mysqli_query($conexionBD, "INSERT INTO contactos(Nombre, Empresa, Telefono, Mail, Comentario) VALUES('$nombre', '$empresa', '$telefono', '$mail', '$comentarios') ");
        echo json_encode(["success" => 1]);
    }
    exit();
}
