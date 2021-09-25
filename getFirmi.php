<?php

require 'connect.php';
  
$firmi=[];
$sql = "SELECT * FROM firmi";

if($result = pg_query($db_conn,$sql)) {
$cr=0;
while($row=pg_fetch_assoc($result)) {
	$firmi[$cr]['f_id'] = $row['f_id'];
	$firmi[$cr]['f_ime'] = $row['f_ime'];
	$firmi[$cr]['f_grad'] = $row['f_grad'];
	$firmi[$cr]['f_email'] = $row['f_email'];
	$firmi[$cr]['f_telefon'] = $row['f_telefon'];
	$firmi[$cr]['f_edb'] = $row['f_edb'];
	$firmi[$cr]['f_kontakt'] = $row['f_kontakt'];
	$firmi[$cr]['f_username'] = $row['f_username'];
	$firmi[$cr]['f_password'] = $row['f_password'];
	$firmi[$cr]['f_valid'] = $row['f_valid'];
	$cr++;
}

//print_r($firmi);
echo json_encode($firmi);
}
else{http_response_code(404);}

?>
