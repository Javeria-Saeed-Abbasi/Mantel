
// =================== CONDITION FOR INTAKE FORM PAGE =============== //
function tele(that) {
  if (that.value == "Telehealth") {
    console.log("telehealth selected");
    document.getElementById("ifTele").style.display = "block";
  } else {
    document.getElementById("ifTele").style.display = "none";
  }
}
// =============== FOR INPUT TYPE DATE ============= //
$('#dob').on('input', function () {
  this.value = this.value.replace(/[^0-9/]/g, '');
});
// =================== CONDITION FOR INTAKE FORM PAGE (INSURANCE INFORMATION) =============== //
function checkyes() {
  if (document.getElementById('yeschecked').checked) {

    document.getElementById("ifYes").style.display = "block";
    console.log("yes selected");
  }
  else {
    document.getElementById("ifYes").style.display = "none";
  }
}
function checkno() {
  if (document.getElementById('nochecked').checked) {

    document.getElementById("ifYes").style.display = "none";
    console.log("noselected");
  }
}
// =================== CONDITION FOR INTAKE FORM PAGE (INSURANCE INFORMATION Secondary Insurance) =============== //
function secyes() {
  if (document.getElementById('y-checked').checked) {

    document.getElementById("sec-insured").style.display = "block";
    console.log("yes selected");
  }
  else {
    document.getElementById("sec-insured").style.display = "none";
  }
}
function secno() {
  if (document.getElementById('n-checked').checked) {

    document.getElementById("sec-insured").style.display = "none";
    console.log("noselected");
  }
}
// =================== CONDITION FOR INTAKE FORM PAGE (PRESENTING PROBLEMS OTHER-SYMPTOMS) =============== //
function otherSym() {
  if (document.getElementById('other-symp').checked) {

    document.getElementById("other-symptom").style.display = "block";
    console.log("others checked");
  }
  else {
    document.getElementById("other-symptom").style.display = "none";
  }
}
function otherSym2() {
  if (document.getElementById('other-symp2').checked) {

    document.getElementById("other-symptom2").style.display = "block";
    console.log("others2 checked");
  }
  else {
    document.getElementById("other-symptom2").style.display = "none";
  }
}
// =================== CONDITION FOR INTAKE FORM PAGE (Medical history medications) =============== //
function mediyes() {
  if (document.getElementById('medi-yes').checked) {

    document.getElementById("taking-medi").style.display = "block";
    console.log("medications yes checked");
  }
  else {
    document.getElementById("taking-medi").style.display = "none";
  }
}
function medino() {
  if (document.getElementById('medi-no').checked) {

    document.getElementById("taking-medi").style.display = "none";
    console.log("medications no checked");
  }

}
// =================== CONDITION FOR INTAKE FORM PAGE addmore button (Medical history medications) =============== //

//   $(document).ready(function() {
//     $(".add-more").click(function(){ 
//         var html = $("#taking-medi").html();
//         $(".after-add-more").after(html);
//         $(".change").append("<label for=''>&nbsp;</label><br/><a class='btn btn-danger remove'>- Remove</a>");
//       console.log('buttonclicked');
//       });

//     $("body").on("click",".remove",function(){ 
//         $(this).parents("#taking-medi").remove();
//     });
//   });
// =================== CONDITION FOR INTAKE FORM PAGE Mental Health history =============== //
$("input").change((e) => {
  console.log(e.target.value);
  let a = $(e.target.parentNode.parentNode).find(".for-more");
  if (e.target.value == "yes") {
    $(a).css('display', 'block')
  }
  else {
    $(a).css('display', 'none')
  }
})
// =================== CONDITION FOR INTAKE FORM PAGE Substance Use =============== //
$("select").change((e) => {
  console.log(e.target.value);
  let a = $(e.target.parentNode.parentNode).find("#drinks");
  if (e.target.value == "none") {
    $(a).css('display', 'none')
  }
  else {
    $(a).css('display', 'block')
  }
})
// ==================== CONDITION FOR INTAKE FORM PAGE Illicit Drugs =============== //
$("input").change((e) => {
  console.log(e.target.checked);
  let a = $(e.target.parentNode.parentNode).find("#drugs-duration");
  if (e.target.checked == true) {
    $(a).css('display', 'block')
  }
  else {
    $(a).css('display', 'none')
  }
})
// =================== CONDITION FOR INTAKE FORM PAGE Mental Health history =============== //
$("input").change((e) => {
  console.log(e.target.value);
  let a = $(e.target.parentNode.parentNode).find(".for-more");
  if (e.target.value == "yes") {
    $(a).css('display', 'block')
  }
  else {
    $(a).css('display', 'none')
  }
})
// =================== CONDITION FOR INTAKE FORM PAGE Marrige =============== //
$("input").change((e) => {
  console.log(e.target.value);
  let a = $(e.target.parentNode.parentNode).find("#domarr");
  if (e.target.value == "yes") {
    $(a).css('display', 'block')
  }
  else {
    $(a).css('display', 'none')
  }
});
//   ============= for addmore medications=====

$(document).ready(function () {
  var max_fields = 5; //maximum input boxes allowed
  var wrapper = $(".more-medi"); //Fields wrapper
  var add_button = $(".add_more-medi"); //Add button ID

  var x = 1; //initlal text box count
  $(add_button).click(function (e) { //on add input button click
    e.preventDefault();
    if (x < max_fields) { //max input box allowed
      x++; //text box increment
      $(wrapper).find('.medi-inputs').append(
                  ` <div class="medi-inputs-cards">
                  <hr/>
                  <div class="mb-4 mt-4 form-group">
                      <input type="text" placeholder="Name of Medication" name="name-medi"
                          class="form-control py-3" id="">
                  </div>
                  <div class="mb-4 form-group">
                      <input type="text" placeholder="Dosage" name="dose"
                          class="form-control py-3" id="">
                  </div>
                  <div class="mb-4 form-group">
                      <input type="number" placeholder="Frequency" name="freq"
                          class="form-control py-3" maxlength="10" id="">
                  </div>
                  
                  <button class="btn bg-danger remove_field text-white"> Remove </button>
                  
              </div>`
      ); //add input box
    }
  });

  $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
    e.preventDefault(); 
    $(this).parent().remove(); x--;
  })

});
//   ============= for multiple date selection ======
$(document).ready(function () {
  var max_fields = 5; //maximum input boxes allowed
  var wrapper = $(".input_fields_wrap"); //Fields wrapper
  var add_button = $(".add_field_button"); //Add button ID

  var x = 1; //initlal text box count
  $(add_button).click(function (e) { //on add input button click
    e.preventDefault();
    if (x < max_fields) { //max input box allowed
      x++; //text box increment
      $(wrapper).append('<div class="mb-3 mt-3 d-flex justify-content-center" ><input type="date" class="form-control py-3" name="multiple-dates"/>&nbsp;<a href="javascript:void(0);" class="btn btn-danger remove_field text-center mt-3"><i class="fa fa-minus"></i></a></div>'); //add input box
    }
  });

  $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
    e.preventDefault(); $(this).parent('div').remove(); x--;
  })
});
//   ============= for addmore children=====

$(document).ready(function () {
  var max_fields = 5; //maximum input boxes allowed
  var wrapper = $("#more-child"); //Fields wrapper
  var add_button = $(".add-child"); //Add button ID

  var x = 1; //initlal text box count
  $(add_button).click(function (e) { //on add input button click
    e.preventDefault();
    if (x < max_fields) { //max input box allowed
      x++; //text box increment
      $(wrapper).find('.more-children-wrap').append(
                  ` <div class="more-children-fields">
                  <hr/>
                  <div class="form-group mb-4">
                      <input type="text" placeholder="Name of Child" name="child-name"
                          class="form-control py-3" id="">
                  </div>
                  <div class="form-group mb-4">
                      <input type="number" placeholder="Age of Child" name="child-age"
                          class="form-control py-3" id="">
                  </div>
                  <div class="form-group mb-4">
                      <select class="form-select py-3" id="" name="rel-w-child">
                          <option selected disabled value="">Relationship With Child
                          </option>
                          <option value="">Excellent</option>
                          <option value="">Good </option>
                          <option value="">Fair</option>
                          <option value="">Poor</option>
                      </select>
                  </div>
              
                  
                  <button class="btn bg-danger remove_fields text-white"> Remove </button>
                  
              </div>`
      );//add input box
      console.log('more-child added');   }
    
  });

  $(wrapper).on("click", ".remove_fields", function (e) { //user click on remove text
    e.preventDefault(); 
    $(this).parent().remove(); x--;
  })

});
// =================== Family History Relationship With Parents =============== //
$("select").change((e) => {
  console.log(e.target.value);
  let a = $(e.target.parentNode.parentNode).find("#domarr");
  if (e.target.value == "divorced2") {
    $(a).css('display', 'block')
  }
  else {
    $(a).css('display', 'none')
  }
});
// =================== Family History (Mother Living/Not and Father Living/Not) =============== //

$("input").change((e) => {
  console.log(e.target.value);
  let a = $(e.target.parentNode.parentNode).find("#death");
  if (e.target.value == "no") {
    $(a).css('display', 'block')
  }
  else {
    $(a).css('display', 'none')
  }
});
// =================== Family History (Siblings) =============== //

$("#sibling").change((e) => {
  console.log(e.target.value);
  let a = $(e.target.parentNode.parentNode).find("#domarr");
  let b = $(e.target.parentNode.parentNode).find("#other-sib")
  if (e.target.value == "1" || "2" || "3" || "4") {
    $(a).css('display', 'block')
  }
  else {
    $(a).css('display', 'none')
  }
  if (e.target.value == "other-siblings") {
    $(b).css('display', 'block')
    $(a).css('display', 'none');

  }
  else if (e.target.value == "0") {
    $(b).css('display', 'none')
    $(a).css('display', 'none');
  }
  else {
    $(b).css('display', 'none')
  }
});
$("#sibling1").keyup((e)=>{
  console.log(e.target.value);
  let a = $(e.target.parentNode.parentNode).find(".domarrlast");
  if(e.target.value  > 0){
    setTimeout(() => {
      $(".domarrlast").css('display', 'block');
    });
  }
  else{
    $(a).css('display', 'none');
  }
})
$("#sibling").change((e) => {
  $(".more-siblings-wrap").empty()
  console.log(e.target.value);
  $(document).ready(function () {
    var max_fields = e.target.value; //maximum input boxes allowed
    var wrapper = $("#more-siblings"); //Fields wrapper
    var add_button = $(".add-sib"); //Add button ID
  
    var x = 1; //initlal text box count
    $(add_button).click(function (e) { //on add input button click
      e.preventDefault();
      if (x < max_fields) { //max input box allowed
        x++; //text box increment
        $(wrapper).find('.more-siblings-wrap').append(
                    ` <div class="more-siblings-fields">
                    <hr/>
                    <div class="mb-4 form-group">
                    <input type="text" placeholder="Sibling Name" name="sibling-name"
                        class="form-control py-3 mt-2" id="">
                </div>
                <div class="mb-4 form-group">
                <input type="number" placeholder="Sibling Age" name="sibling-age"
                    class="form-control py-3 mt-2" id="">
            </div>
            <div class="mb-4 form-group">
            <select class="form-select py-3" id="" name="rel-w-sibling">
                <option selected disabled value="">Relationship with Sibling
                </option>
                <option value="">Excellent</option>
                <option value="">Good </option>
                <option value="">Fair</option>
                <option value="">Poor</option>
            </select>
        </div>
                
                    
                    <button class="btn bg-danger remove_fields text-white"> Remove </button>
                    
                </div>`
        );//add input box
        console.log('more-sibling added');   }
      
    });
  
    $(wrapper).on("click", ".remove_fields", function (e) { //user click on remove text
      e.preventDefault(); 
      $(this).parent().remove(); x--;
    })
  
  });
});
$("input[name='other-sibling']").keyup((e) => {
  $(".more-siblings-wrap").empty();
  console.log(e.target.value);
  $(document).ready(function () {
    var max_fields = e.target.value; //maximum input boxes allowed
    var wrapper = $("#more-siblings"); //Fields wrapper
    var add_button = $(".add-sib"); //Add button ID
  
    var x = 1; //initlal text box count
    $(add_button).click(function (e) { //on add input button click
      e.preventDefault();
      if (x < max_fields) { //max input box allowed
        x++; //text box increment
        $(wrapper).find('.more-siblings-wrap').append(
                    ` <div class="more-siblings-fields">
                    <hr/>
                    <div class="mb-4 form-group">
                    <input type="text" placeholder="Sibling Name" name="sibling-name"
                        class="form-control py-3 mt-2" id="">
                </div>
                <div class="mb-4 form-group">
                <input type="number" placeholder="Sibling Age" name="sibling-age"
                    class="form-control py-3 mt-2" id="">
            </div>
            <div class="mb-4 form-group">
            <select class="form-select py-3" id="" name="rel-w-sibling">
                <option selected disabled value="">Relationship with Sibling
                </option>
                <option value="">Excellent</option>
                <option value="">Good </option>
                <option value="">Fair</option>
                <option value="">Poor</option>
            </select>
        </div>
                
                    
                    <button class="btn bg-danger remove_fields text-white"> Remove </button>
                    
                </div>`
        );//add input box
        console.log('more-sibling added');   }
      
    });
  
    $(wrapper).on("click", ".remove_fields", function (e) { //user click on remove text
      e.preventDefault(); 
      $(this).parent().remove(); x--;
    })
  
  });
});

// ==============================================================//
// =======================FOR PAYMENT FORM ================//
$(function(){
  $("input[name='onlynumbers']").on('input', function (e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });
});
// --------- paragraph input
$(function(){
  $('.hide').text($('.txt').val());
  $('.txt').width($('.hide').width());
}).on('input', function () {
  $('.hide').text($('.txt').val());
  $('.txt').width($('.hide').width());
});
// =========== SLIDING-SCALE-PAGE-FORM============== //
// ----- HouseHold TABLE 
$(document).ready(function(){
  var i=1;
 $("#add_row").click(function(){b=i-1;
  $('#addr'+i).html($('#addr'+b).html()).find('td:first-child').html(i+1);
  $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
  i++; 
});

 $("#delete_row").click(function(){
   if(i>1){
 $("#addr"+(i-1)).html('');
 i--;
 }
});
});
// ----- HouseHold Expenses TABLE 
// $(document).ready(function(){
//   var a=1;
//  $("#add_row1").click(function(){b=a-1;
//   $('#addrow'+a).html($('#addrow'+b).html()).find('td:last-child').html();
//   $('#tab2_logic').append('<tr id="addrow1'+'"></tr>');
//   a++; 
//   console.log("rowadded");
// });


//  $("#delete_row1").click(function(){
//    if(a>1){
//  $("#addrow"+(a-1)).html('');
//  a--;
//  console.log("row deleted");

//  }
// });
// });