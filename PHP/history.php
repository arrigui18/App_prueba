<?php

include 'Conexion/Conexion.php';

header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $query = "select * from history";
    $resultado = metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if ($_POST['METHOD'] == 'POST') {
    unset($_POST['METHOD']);
    $ciudad = $_POST['ciudad'];
    $info = $_POST['info'];
    $query = "insert into history(ciudad, info) values ('$ciudad', '$info')";
    $queryAutoIncrement = "select MAX(id) as id from history";
    $resultado = metodoPost($query, $queryAutoIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");
