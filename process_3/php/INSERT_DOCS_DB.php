PMT_DOCS// Firstly it cleans the PMT_DOCS and then inserts the new data form grid to table.

executeQuery("DELETE FROM PMT_DOCS");

foreach (@=grd_task1 as $aRow) {
      $Doc = $aRow['text0000000007'];

      $sql = "INSERT INTO PMT_DOCS (DOC) VALUES ('$Doc')";
      executeQuery($sql);
}