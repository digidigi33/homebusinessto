<?php 
	$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	$loc =  $_SERVER['REQUEST_URI'];
	$host = $_SERVER['HTTP_HOST'];
$username = isSubDomain($host);
if ($username) {
	//first to see if user is valid
	$isActive = isUserActive($username);
	if ($isActive){
		if ($loc == "/"){
			include "index.php";
		}
	print "You want to go to username: " . $username . "'s site";
	}
	
}

//check pieces 1/2 to match site root
//parse request uri to see if there is a subfolder request
//issubfolder
	
//create 404 not found page	

//if there's a subdomain, check and see if user is valid
function isUserActive($username){
	return true;
}

function isSubDomain($domain) {
	$pieces = explode(".", $domain);
	if (isset($pieces[2])){//this means we have three strings
		return $pieces[0];
	}
	else return false;
	
}
	
	 ?>