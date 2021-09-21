<?php

require 'connect.php';
  
$oddeli=[];
$id = $_GET['id'];
$sql = "SELECT * FROM oddeli WHERE `f_id` = '{$id}'";

if($result = mysqli_query($db_conn,$sql)) {
$cr=0;
while($row=mysqli_fetch_assoc($result)) {
	$oddeli[$cr]['oddel_id'] = $row['oddel_id'];
	$oddeli[$cr]['oddel_naziv'] = $row['oddel_naziv'];
	$oddeli[$cr]['f_id'] = $row['f_id'];
	$cr++;
}

//print_r($posts);
echo json_encode($oddeli);
}
else{http_response_code(404);}

?>
