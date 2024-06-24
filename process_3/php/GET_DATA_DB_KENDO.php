// This trigger will use query to PMT_GRID table and GET information from it to a grid called grd_kendo in dynaform.
$act = $_POST['act'];
if ($act == "GET_KENDO_DATA") {
     $sql = "SELECT NAME, ADDRESS, DOC, SCORE, RATE, SUM FROM PMT_GRID";

     $result = executeQuery($sql);
     // @=grd_kendo = $result;
     echo json_encode($result);
     die();
}