<?php

include_once 'JWT.php';
include_once 'ExpiredException.php';
include_once 'BeforeValidException.php';
include_once 'SignatureInvalidException.php';


// $objDatos=json_decode(file_get_contents("php://input"));


$DatosPorPost = file_get_contents("php://input");
$objDatos = json_decode($DatosPorPost);


//$idUsuario=Usuario::ChequearUsuario($objDatos->email, $objDatos->clave); // devuelve id o flase si esta mal

if($objDatos->email=="33@33" && $objDatos->clave=="33")
{
	$idUsuario=1;
}
else{
	$idUsuario=false;	
}



if($idUsuario==1)
{
	$token=array(
	"email"=>$objDatos->email,
	"clave"=>$objDatos->clave,
	"exp"=>time() + 96000
	);

	$token = Firebase\JWT\JWT::encode($token, 'clave');

	$array['tokenFest2016']=$token;

	echo json_encode($array);	
}else
{

}



// 1- tomo dtos del http
// 2- verifico con un metodo de la clase usuario si son datos validos
// 3- de ser valido creo el token y lo retorno (Es lo que esta arriba)




?>