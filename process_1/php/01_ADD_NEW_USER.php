// This code uses PMFCreateUser built-in function to create a new processmaker user, firstname and lastname are from txt_use_name variable and also password is the phone number of signed in user!

// result variable will check if user were created sucessfully or not!


$userName = @@txt_national_code;
$password = @@txt_m_phone;
$fullName = @@txt_use_name;
	
$var = PMFCreateUser($userName, $password, $fullName, $fullName, $fullName.'@gmail.com', 'PROCESSMAKER_OPERATOR');
if ($var == 0)
    @@result = 'not created';
else
    @@result = 'created';
