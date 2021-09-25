<?php

require 'connect.php';

$postdata = file_get_contents("php://input");

$v_id = $_GET['v_id'];
$vid_id = $_GET['vid_id'];

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);

$o_datum = pg_escape_string($db_conn, trim($request->o_datum));
$o_casovi = pg_escape_string($db_conn, trim($request->o_casovi));
$o_opis = pg_escape_string($db_conn, trim($request->o_opis));
//$v_id = pg_escape_string($db_conn, trim($request->v_id));
//$vid_id = pg_escape_string($db_conn, trim($request->vid_id));


	$sql = "INSERT INTO otsustva (o_datum, o_casovi, o_opis, v_id, vid_id) 
VALUES ('$o_datum', '$o_casovi','$o_opis','$v_id','$vid_id')";

if(pg_query($db_conn, $sql))
{
  http_response_code(201);
}
else
{
  return http_response_code(422);
}
}

?>
