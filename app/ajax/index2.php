<?php
$data = array();
if(isset($_POST['id']))
{
    $data['complate'] = '1';
}else{
    $data['complate'] = '0';
}
echo json_encode($data);
?>