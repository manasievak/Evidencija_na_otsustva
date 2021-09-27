<?php

require 'connect.php';
  
$otsustva=[];
$sql = "SELECT * FROM otsustva as o JOIN vraboteni as v ON v.v_id=o.v_id";

if($result = pg_query($db_conn,$sql)) {
$cr=0;
while($row=pg_fetch_assoc($result)) {
	$otsustva[$cr]['o_id'] = $row['o_id'];
	$otsustva[$cr]['o_datum'] = $row['o_datum'];
	$otsustva[$cr]['o_casovi'] = $row['o_casovi'];
	$otsustva[$cr]['o_opis'] = $row['o_opis'];
	$otsustva[$cr]['v_id'] = $row['v_id'];
	$otsustva[$cr]['vid_id'] = $row['vid_id'];
	$cr++;
}

//print_r($posts);
echo json_encode($otsustva);
}
else{http_response_code(404);}

?>
