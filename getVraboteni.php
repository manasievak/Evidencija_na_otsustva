<?php

require 'connect.php';
  
$vraboteni=[];
$id = $_GET['id'];
$sql = "SELECT * FROM vraboteni WHERE `f_id` = '{$id}'";

if($result = mysqli_query($db_conn,$sql)) {
$cr=0;
while($row=mysqli_fetch_assoc($result)) {
	$vraboteni[$cr]['v_id'] = $row['v_id'];
	$vraboteni[$cr]['v_ime'] = $row['v_ime'];
	$vraboteni[$cr]['v_prezime'] = $row['v_prezime'];
	$vraboteni[$cr]['v_mesto'] = $row['v_mesto'];
	$vraboteni[$cr]['v_telefon'] = $row['v_telefon'];
	$vraboteni[$cr]['v_embg'] = $row['v_embg'];
	$vraboteni[$cr]['v_odmor'] = $row['v_odmor'];
	$vraboteni[$cr]['v_aktiven'] = $row['v_aktiven'];
	$vraboteni[$cr]['f_id'] = $row['f_id'];
	$cr++;
}

//print_r($posts);
echo json_encode($vraboteni);
}
else{http_response_code(404);}

?>
