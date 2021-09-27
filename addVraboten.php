<?php

require 'connect.php';

$postdata = file_get_contents("php://input");

$f_id = $_GET['f_id'];
$oddel_id = $_GET['oddel_id'];

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);

$v_ime = pg_escape_string($db_conn, trim($request->v_ime));
$v_prezime = pg_escape_string($db_conn, trim($request->v_prezime));
$v_mesto = pg_escape_string($db_conn, trim($request->v_mesto));
$v_telefon = pg_escape_string($db_conn, trim($request->v_telefon));
$v_embg = pg_escape_string($db_conn, trim($request->v_embg));
$v_odmor = pg_escape_string($db_conn, trim($request->v_odmor));
$v_aktiven = pg_escape_string($db_conn, trim($request->v_aktiven));

	$sql = "INSERT INTO vraboteni (v_ime, v_prezime, v_mesto, v_telefon, v_embg, v_odmor, v_aktiven, f_id) 
VALUES ('$v_ime', '$v_prezime','$v_mesto','$v_telefon','$v_embg','$v_odmor','$v_aktiven','$f_id')";

if(pg_query($db_conn, $sql))
{
pg_query($db_conn, "INSERT INTO vraboten_vo_oddel( v_id, oddel_id) VALUES (currval(pg_get_serial_sequence('vraboteni', 'v_id')), '$oddel_id')");
  http_response_code(201);
}
else
{
  return http_response_code(422);
}
}

?>
