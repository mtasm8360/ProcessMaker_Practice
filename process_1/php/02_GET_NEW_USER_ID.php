// This trigger will find ID of processmaker user by using his name.

$userName = @@txt_national_code;
if (is_array($userName)) {
    $userName = $userName[0];
}
@@USER_ID = null;

$query = "SELECT USR_UID FROM USERS WHERE USR_USERNAME='$userName'";
$result = executeQuery($query);

if (is_array($result) && count($result) > 0) {
    @@USER_ID = $result[1]['USR_UID'];
}
	