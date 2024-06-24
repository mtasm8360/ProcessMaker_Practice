var txtScore = $('#txt_score_total');
var grid = $('#grd_task1');
var table = $('#myDataTable');

// Do these codes if it's the task2 dynaform 
if ($('#5065342436672def120b088097302840')) {
     // set sum of scores and set it to unique control 
     txtScore.setText(0);
     grid.on('change', function () {
          var result = 0;
          var SumVal;
          var rows = grid.getNumberRows();
          for (var row = 1; row <= rows; row++) {
               result += +grid.getValue(row, 4);
          }
          txtScore.setText(result);
          for (var row = 1; row <= rows; row++) {
               SumVal = 0;
               SumVal = +grid.getValue(row, 4) * +grid.getValue(row, 5);
               grid.setValue(SumVal, row, 6);
          }
     })

     // two tabs and changing them 
     $('#button0000000001').on('click', function () {
          // open the grid section
          grid.show();
          $('#label0000000001').show();
          $('#txt_score_total').show();
          $('#button0000000003').show();
          table.hide();
          // table.destroy();
          $('#subtitle0000000001').hide()

     })

     $('#button0000000002').on('click', function () {
          // open the data table section  
          table.show();
          // createTheDataTable();
          $('#subtitle0000000001').show();
          grid.hide();
          $('#label0000000001').hide();
          $('#txt_score_total').hide();
          $('#button0000000003').hide();
     })

     // when add to table button clicked 
     $('#button0000000003').on('click', function () {
          var rows = grid.getNumberRows();
          for (var row = 1; row <= rows; row++) {
               // Get values of grid 
               var name = grid.getValue(row, 1);
               var adrs = grid.getValue(row, 2);
               var doc = grid.getValue(row, 3);
               var score = grid.getValue(row, 4);
               var rate = grid.getValue(row, 5);
               var sum = grid.getValue(row, 6);

               // Fill the table with values 
               var tbody = document.getElementById('myDataTable').getElementsByTagName('tbody')[0];
               var newRow = document.createElement('tr');
               var cells = [name, adrs, doc, score, rate, sum];
               var counter = 0;
               cells.forEach((item) => {
                    if (item == 0)
                         counter++;
               })
               if (counter >= 6) {
                    counter = 0;
                    continue;
               }
               for (var i = 0; i < cells.length; i++) {
                    var newCell = document.createElement('td');
                    newCell.textContent = cells[i];
                    newRow.appendChild(newCell);
               }
               tbody.appendChild(newRow);

          }
     })
}




if ($('#6243371426672dee88e4a98039816308')) {
     var txtScore = $('#txt_score_total');
     txtScore.setText(0);

     // If grid checnged find out the SUM value and the score total will be set 
     grid.on('change', function () {
          var result = 0;
          var SumVal;
          var rows = grid.getNumberRows();
          for (var row = 1; row <= rows; row++) {
               result += +grid.getValue(row, 4);
          }
          txtScore.setText(result);

          for (var row = 1; row <= rows; row++) {
               SumVal = 0;
               SumVal = +grid.getValue(row, 4) * +grid.getValue(row, 5);
               grid.setValue(SumVal, row, 6);
          }
     })
}


// Function to load CSS
var loadCSS = function (url) {
     var link = document.createElement("link");
     link.rel = "stylesheet";
     link.href = url;
     document.getElementsByTagName("head")[0].appendChild(link);
};

loadCSS("https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css");

var loadScript = function (url, callback) {
     var script = document.createElement("script");
     script.type = "text/javascript";
     if (script.readyState) {
          script.onreadystatechange = function () {
               if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    callback();
               }
          };
     } else {
          script.onload = function () {
               callback();
          };
     }
     script.src = url;
     document.getElementsByTagName("head")[0].appendChild(script);
};

function createTheDataTable() {
     // Code for task 2 and for loading kendo table and filling data to it from table 
     loadScript("https://code.jquery.com/jquery-3.5.1.min.js", function () {
          loadScript("https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js", async function () {

               // Function to fetch data from PMT_GRID
               async function fetchData() {
                    // AJAX code to GET all data from PMT_GRID table for kendo-table 
                    await $.ajax({
                         url: window.location,
                         type: 'POST',
                         dataType: "json",
                         data: {
                              act: "GET_KENDO_DATA",
                         },
                         success: function (data) {
                              // Clear the table body before populating
                              var tableBody = $('#myDataTable tbody');
                              tableBody.empty();
                              // Fill the table with data
                              for (key in data) {
                                   var rowHtml = `
                                             <tr>
                                                  <td>${data[key].NAME}</td>
                                                  <td>${data[key].ADDRESS}</td>
                                                  <td>${data[key].DOC}</td>
                                                  <td>${data[key].SCORE}</td>
                                                  <td>${data[key].RATE}</td>
                                                  <td>${data[key].SUM}</td>
                                             </tr>
                                             `;
                                   tableBody.append(rowHtml);
                              }
                              // Initialize DataTables after data is loaded
                              $('#myDataTable').DataTable();
                         },
                         error: function (err) {
                              console.log("oh an Error  :", err)
                         }
                    })
               }

               // Insert table after the specified element
               $('#subtitle0000000001').after(`
             <table id="myDataTable" class="display" style="width:100%">
                 <thead>
                     <tr>
                         <th>NAME</th>
                         <th>ADDRESS</th>
                         <th>DOC</th>
                         <th>SCORE</th>
                         <th>RATE</th>
                         <th>SUM</th>
                     </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>
         `);

               // Fetch data and populate the table
               await fetchData();
          });
     });
}

createTheDataTable();