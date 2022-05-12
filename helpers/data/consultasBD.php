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
    exit();
} else if (isset($_GET['buscarContacto'])) {
    $retorno = ['success' => 1];
    $mail = $_GET['mail'];
    $telefono = $_GET['telefono'];
    $sqlContactoExistente = mysqli_query($conexionBD, "SELECT * FROM contactos WHERE Telefono = '$telefono' OR Mail = '$mail'");
    $contactos = mysqli_fetch_all($sqlContactoExistente, MYSQLI_ASSOC);

    echo json_encode($contactos);
    exit();
} else if (isset($_GET['paises'])) {
    $sqlPaises = mysqli_query($conexionBD, "SELECT * FROM paises ");
    if (mysqli_num_rows($sqlPaises) > 0) {
        $paises = mysqli_fetch_all($sqlPaises, MYSQLI_ASSOC);
        echo json_encode($paises);
    }
    exit();
} else if (isset($_GET['estados'])) {
    $sqlEstados = mysqli_query($conexionBD, "SELECT * FROM estados WHERE idPais = {$_GET['estados']}");
    if (mysqli_num_rows($sqlEstados) > 0) {
        $estados = mysqli_fetch_all($sqlEstados, MYSQLI_ASSOC);
        echo json_encode($estados);
    }
    exit();
} else {
    $retorno = ['success' => 0];
    $nombre = $_POST['nombre'];
    $mail = $_POST['mail'];
    $telefono = $_POST['telefono'];
    $empresa = $_POST['empresa'];
    $comentarios = $_POST['comentarios'];
    $sqlContactos = mysqli_query($conexionBD, "INSERT INTO contactos(Nombre, Empresa, Telefono, Mail, Comentario) VALUES('$nombre', '$empresa', '$telefono', '$mail', '$comentarios') ");
    $retorno['success'] = 1;
    echo json_encode($retorno);
    exit();
}