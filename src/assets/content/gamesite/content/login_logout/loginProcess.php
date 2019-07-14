<?php
session_start();
require_once("Member.class");

/*
if (!isset($_POST['submit'])) {
	die(header("Location: ../../index.php"));
}
*/
$_SESSION['formAttemp'] = true;
$_SESSION['id'] = session_id();
$_SESSION['isLoggedIn'] = false;
$_SESSION['password'] = $_POST['password'];
$_SESSION['startDate'] = $_POST['curdate'];

if (isset($_POST['username']))
	if (!empty($_POST['username'])) {
		$safeuser = $_POST['username'];
		$_SESSION['firstName'] = $_POST['username'];
	} else
		echo "handle the bad name";
	
$visitor = new Member;
if ($visitor->authenticate($_POST['username'],$_POST['password'])) {
	// proceed to member site
	//echo "authentication was successful.";	
	die(header("Location: ../../index.php"));
	
} else {
	// return to login
	//echo "authentication unsuccessful.";
	die(header("Location: register.html"));
}
?>