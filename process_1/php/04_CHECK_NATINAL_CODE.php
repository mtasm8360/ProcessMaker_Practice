$act = $_POST['act'];
if($act=='CHECK_NATIONAL_CODE'){
	$code = $_POST['code'];
	$query = "SELECT USR_UID FROM USERS WHERE USR_USERNAME='$code'";
	
	$result = executeQuery($query);
	header('Content-type: application/json');
	 
	if($result){
		echo json_encode("user exists!");
		die();
		
	}else{
		echo json_encode("user dosnt exist.");
		die();
	}
}