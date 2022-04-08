// ==================== Butter JS ========================== //
butter.init({
  wrapperId: 'butter'
});
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
      $(wrapper).append('<br><div class="mb-4"><input type="text" class="form-control py-3" placeholder="Name of Medication" name="name-medi" id=""/></div><div class="mb-4"><input type="text" placeholder="Dosage" name="dose" class="form-control py-3" id=""></div><div class="mb-4"><input type="number" placeholder="Frequency" name="freq" class="form-control py-3" id=""></div>&nbsp;<a href="javascript:void(0);" class="btn btn-danger remove_field text-center"><i class="fa fa-minus mt-3"></i></a><br>'); //add input box
    }
  });

  $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
    e.preventDefault(); $(this).parent('div').remove(); x--;
  })
  console.log(wrapper);
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

$("select").change((e) => {
  console.log(e.target.value);
  let a = $(e.target.parentNode.parentNode).find("#domarr");
  let b = $(e.target.parentNode.parentNode).find("#other-sib")
  if (e.target.value == "0" || "1" || "2" || "3" || "4") {
    $(a).css('display', 'block')
  }
  else {
    $(a).css('display', 'none')
  }
  if (e.target.value == "other-siblings") {
    $(b).css('display', 'block')
    $(a).css('display', 'none');

  }
  else {
    $(b).css('display', 'none')
  }
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