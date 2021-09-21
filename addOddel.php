<?php

require 'connect.php';

$postdata = file_get_contents("php://input");

$f_id = $_GET['f_id'];

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);

	$oddel_naziv = mysqli_real_escape_string($db_conn, trim($request->oddel_naziv));


	$sql = "INSERT INTO `oddeli` (`oddel_naziv`, `f_id`) VALUES ('{$oddel_naziv}', '{$f_id}')";

if(mysqli_query($db_conn, $sql))
{
  http_response_code(201);
}
else
{
  return http_response_code(422);
}
}

?>
