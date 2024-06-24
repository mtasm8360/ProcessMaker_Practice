// This trigger fill grd_trans_details grid in dynaform by gettig data from PMT_TRANS (data is price and date that translators selected before).

$query = "SELECT T_ID AS text0000000001 ,T_PRICE AS text0000000002 , T_DATE AS datetime0000000001 FROM PMT_TRANS";
@=grd_trans_details = executeQuery($query);