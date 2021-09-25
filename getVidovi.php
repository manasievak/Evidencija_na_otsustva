<?php

require 'connect.php';
  
$vidovi=[];
$sql = "SELECT * FROM vidovi";

if($result = pg_query($db_conn,$sql)) {
$cr=0;
while($row=pg_fetch_assoc($result)) {
	$vidovi[$cr]['vid_id'] = $row['vid_id'];
	$vidovi[$cr]['vid_otsustvo'] = $row['vid_otsustvo'];
	$cr++;
}

//print_r($posts);
echo json_encode($vidovi);
}
else{http_response_code(404);}

?>
