
$("#button0000000001").on("click", async function (event) {
     // Form validation
     if (!isValidFieldsLength()) {
          alert('لطفا همه فیلد هارا با دقت پر کنین ')
          return;
     }
     var isValid = await isValidNationalCode()
     if (!isValid) {
          alert('این کد ملی قبلا ثبت شده');
          return;
     }
     // submitting the form
     $('#79361043466715fdc3cbd64034547047').submitForm();
});


$("#button00000000067").on("click", function (event) {
     // submitting the form
     $('#58499301566716052cf0900072497496').submitForm();
});


// AJAX code for checking the national code is allowed or not
async function isValidNationalCode() {
     // var host = PMDynaform.getHostName();
     // var ws = PMDynaform.getWorkspaceName();
     // var app_uid = PMDynaform.getProjectKeys().caseUID;
     // var trigger_uid = "4282073506672cb9d94fb47015700393";
     // var token = PMDynaform.getAccessToken();
     // var url = host + "/api/1.0/" + ws + "/cases/" + app_uid + "/execute-trigger/" + trigger_uid + '?AJAX=1';
     var code = $('#txt_national_code').getValue();
     var url = window.location;
     var isValid = false;
     await $.ajax({
          url: url,
          type: 'POST',
          dataType: "json",
          data: {
               act: "CHECK_NATIONAL_CODE",
               code: code,
          },
          success: function (result) {
               console.log(result)
               if (result == 'user exists!') {
                    isValid = false
               } else {
                    isValid = true
               }
          },
          error: function (err) {
               console.log("oh an Error  :", err)
          }
     })
     console.log("checkUP", isValid)
     return isValid
     // console.log(window.location);
     // console.log(token)
}


// function to validate the lingth of national code and phone numbers
function isValidFieldsLength() {
     var isValid = true;
     if ($('#txt_national_code').getValue().length != 10) {
          isValid = false;
          $('#txt_national_code').css("border", "2px solid red");
     } else {
          $('#txt_national_code').css("border", "0px solid red");
     }
     if ($('#txt_s_phone').getValue().length != 8) {
          isValid = false;
          $('#txt_s_phone').css("border", "2px solid red");
     } else {
          $('#txt_s_phone').css("border", "0px solid red");
     }

     if ($('#txt_m_phone').getValue().length != 11) {
          isValid = false;
          $('#txt_m_phone').css("border", "2px solid red");
     } else {
          $('#txt_m_phone').css("border", "0px solid red");
     }

     if ($('#txt_agent_national_code').getValue().length != 10) {
          isValid = false;
          $('#txt_agent_national_code').css("border", "2px solid red");
     } else {
          $('#txt_agent_national_code').css("border", "0px solid red");
     }

     if ($('#txt_agent_sphone').getValue().length != 8) {
          isValid = false;
          $('#txt_agent_sphone').css("border", "2px solid red");
     } else {
          $('#txt_agent_sphone').css("border", "0px solid red");
     }

     if ($('#txt_agent_mphone').getValue().length != 11) {
          isValid = false;
          $('#txt_agent_mphone').css("border", "2px solid red");
     } else {
          $('#txt_agent_mphone').css("border", "0px solid red");
     }

     if ($('#txt_home_sphone').getValue().length != 8) {
          isValid = false;
          $('#txt_home_sphone').css("border", "2px solid red");
     } else {
          $('#txt_home_sphone').css("border", "0px solid red");
     }

     if ($('#txt_home_mphone').getValue().length != 11) {
          isValid = false;
          $('#txt_home_mphone').css("border", "2px solid red");
     } else {
          $('#txt_home_mphone').css("border", "0px solid red");
     }

     return isValid;
}

// on blur of national code checks if the national code is valid (not registered before)
$('#txt_national_code').getControl().blur(async function () {
     var code = $('#txt_national_code').getValue();
     if (code.length == 10) {
          var isValid = await isValidNationalCode()
          console.log("isValidNationalCode", isValid)
          if (!isValid) {
               alert('این کد ملی قبلا ثبت شده');
          }
     }
})

// click events will toggle (show and hide) while clicking in section title
var firstPart = [
     'label0000000001',
     'txt_national_code',
     'label0000000002',
     'label0000000003',
     'label0000000004',
     'label0000000005',
     'label0000000006',
     'label0000000007',
     'label0000000008',
     'label0000000009',
     'txt_use_name',
     'txt_father_name',
     'txt_s_code',
     'txt_s_phone',
     'rad_gender',
     'dat_birth_day',
     'txt_birth_place',
     'txt_m_phone'
]
var secendPart = [
     'txt_agent_mphone',
     'txt_agent_national_code',
     'txt_agent_name',
     'txt_agent_sphone',
     'label0000000011',
     'label0000000020',
     'label0000000010',
     'label0000000019'
]
var thirdPart = [
     'label0000000018',
     'label0000000017',
     'mfi_file2',
     'mfi_file'
]
var finalPart = [
     'label0000000012',
     'label0000000014',
     'txt_home_sphone',
     'txt_home_post_code',
     'label0000000013',
     'label0000000015',
     'txt_home_mphone',
     'drp_cities',
     'label0000000016',
     'txt_home_adrs'
]
$('#subtitle0000000002').on('click', function () {
     for (var i = 0; i < firstPart.length; i++) {
          $('#' + firstPart[i]).toggle();
     }
});
$('#subtitle0000000003').on('click', function () {
     for (var i = 0; i < secendPart.length; i++) {
          $('#' + secendPart[i]).toggle();
     }
})
$('#subtitle0000000005').on('click', function () {
     for (var i = 0; i < thirdPart.length; i++) {
          $('#' + thirdPart[i]).toggle();
     }
})
$('#subtitle0000000004').on('click', function () {
     for (var i = 0; i < finalPart.length; i++) {
          $('#' + finalPart[i]).toggle();
     }
})
