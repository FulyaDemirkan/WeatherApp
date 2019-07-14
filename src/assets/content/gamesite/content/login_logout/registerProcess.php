<?php
session_start();
require_once("Member.class");

$_SESSION['formAttemp'] = true;
$_SESSION['id'] = session_id();
$_SESSION['first'] = $_POST['first'];
$_SESSION['last'] = $_POST['last'];
$_SESSION['gender'] = $_POST['gender'];
$_SESSION['email'] = $_POST['email'];
$_SESSION['phone'] = $_POST['phone'];
$_SESSION['prov'] = $_POST['prov'];
$_SESSION['user'] = $_POST['username'];
$_SESSION['pass1'] = $_POST['pass1'];
$_SESSION['inUse'] = false;

if (isset($_POST['username']))
	if (!empty($_POST['username'])) {
		$safeuser = $_POST['username'];
	} else
		echo "handle the bad name";

$visitor = new Member;
if ($visitor->registerMember($safeuser, $_POST['pass1']))
{
	$visitor->authenticate($safeuser, $_POST['pass1']);
	// proceed to member site
	die(header("Location: ../../index.php"));
} else {
	$_SESSION['inUse'] = true;
	// return to login
	die(header("Location: register.html"));
}

?>
