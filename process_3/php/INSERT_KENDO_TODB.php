//executeQuery("DELETE FROM PMT_GRID");

foreach (@=grd_task1 as $aRow) {
	$name = $aRow['txt_name'];
	$address = $aRow['txt_addrss'];
	$doc = $aRow['txt_doc'];
	$score = $aRow['txt_score'];
	$rate = $aRow['txt_rate'];
    $sum = $aRow['txt_sum'];

      $sql = "INSERT INTO PMT_GRID (NAME,ADDRESS,DOC,SCORE,RATE,SUM) VALUES ('$name','$address','$doc','$score','$rate','$sum')";
      executeQuery($sql);
}