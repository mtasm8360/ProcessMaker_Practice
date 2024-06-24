// This trigger uses PMFUpdateUser function that updates the current user information by USER_ID that we gave to it.

$userName = @@txt_national_code;
$password = @@txt_m_phone;
$fullName = @@txt_use_name;

$result = PMFUpdateUser(@@USER_ID, $userName, $fullName, $fullName, $fullName . '@gmail.com', null, 'ACTIVE', 'PROCESSMAKER_OPERATOR', $password);

if ($result == 1) {
     $message = "updated!";
} else {
     $message = "error!";
}
