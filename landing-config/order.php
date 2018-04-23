<?php 
	include('config.php');
	include($includes.'/order-sender.php');

	if(!isset($_POST)) die('incorrect input data');

	$res = json_decode(createConversion($_POST['name'], $_POST['phone'], $_POST['clickID'], $goal, $offerKey, $convertURL, 0, array()) );

	header('location: final.php?id=' . $res->id . '&client_name=' . checkGet($_POST['name'], 96) . '&client_phone=' . checkGet($_POST['phone'], 24)."&ec=".$res->ec);
?>
