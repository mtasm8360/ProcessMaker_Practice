var grid = $('#grd_trans_details');
var selectedID = $('#hid_selected_translator_id');
selectedID.hide();

// check function for selected translator and seting value to hidden control called selectedID.
function selectOneAndJustOne() {
     let number_of_translators = grid.getNumberRows();
     let counter = 0;
     for (let i = 1; i <= number_of_translators; i++) {
          if (grid.getValue(i, 4) == 1) {
               counter += 1;
          }
     }
     if (counter > 1 || counter == 0)
          return false;
     for (let i = 1; i <= number_of_translators; i++) {
          if (grid.getValue(i, 4) == 1) {
               selectedID.setValue(grid.getValue(i, 1));
          }
     }
     return true;
}
// on submit form validation
$('#296293362664f18fd82ebb7019581660').setOnSubmit(function () {
     let check = selectOneAndJustOne();
     if (!check) {
          alert("فقط یک مورد از مترجمین را انتخاب کنید");
          return false;
     }
})
