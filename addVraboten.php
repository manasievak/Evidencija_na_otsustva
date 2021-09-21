<?php

require 'connect.php';

$postdata = file_get_contents("php://input");

$f_id = $_GET['f_id'];
$oddel_id = $_GET['oddel_id'];

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);

$v_ime = mysqli_real_escape_string($db_conn, trim($request->v_ime));
$v_prezime = mysqli_real_escape_string($db_conn, trim($request->v_prezime));
$v_mesto = mysqli_real_escape_string($db_conn, trim($request->v_mesto));
$v_telefon = mysqli_real_escape_string($db_conn, trim($request->v_telefon));
$v_embg = mysqli_real_escape_string($db_conn, trim($request->v_embg));
$v_odmor = mysqli_real_escape_string($db_conn, trim($request->v_odmor));
$v_aktiven = mysqli_real_escape_string($db_conn, trim($request->v_aktiven));

	$sql = "INSERT INTO `vraboteni` (`v_ime`, `v_prezime`, `v_mesto`, `v_telefon`, `v_embg`, `v_odmor`, `v_aktiven`, `f_id`) 
VALUES ('{$v_ime}', '{$v_prezime}','{$v_mesto}','{$v_telefon}','{$v_embg}','{$v_odmor}','{$v_aktiven}','{$f_id}')";

if(mysqli_query($db_conn, $sql))
{
mysqli_query($db_conn, "INSERT INTO `vraboten_vo_oddel`( `v_id`, `oddel_id`) VALUES (LAST_INSERT_ID(), '{$oddel_id}')");
  http_response_code(201);
}
else
{
  return http_response_code(422);
}
}

?>
