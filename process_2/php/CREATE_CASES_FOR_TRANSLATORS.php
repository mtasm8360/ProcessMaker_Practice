// This code will create 3 cases for translators admin,taham,mobinam.
// The processUID is for 02_01داشبورد مترجمین
// secend parameter of PMFNewCase function is userUID.

// variables sets a new variable in the sub-process and send APPLICATION sys-variable from main process to that, which we'll use it later for getting from report table. 

$processUID = "8879167526666d72fbe6f83045047317";
$taskUID = "7507487026666d758ab6104080258587";
$variables = array('MAINPROCESS_APP_UID' => @@APPLICATION);
$groupName = "مترجمین";

$groupId = PMFGetGroupUID($groupName);
if (empty($groupId)) {
	throw new Exception("Group '$groupName' doesn't exist.");
}
$aUsers = PMFGetGroupUsers($groupId);

foreach ($aUsers as $aUser) {
	$userUID = $aUser['USR_UID'];
	
	// now this function will create new cases for all user in the group مترجمین :
	PMFNewCase($processUID, $userUID, $taskUID, $variables);
}
