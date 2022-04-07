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
  $('#dob').on('input', function() {
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
  $("input").change((e)=>{
    console.log(e.target.value);
    let a =  $(e.target.parentNode.parentNode).find(".for-more") ;
  if(e.target.value == "yes"){
   $(a).css('display' , 'block')
  }
  else
  {
    $(a).css('display' , 'none')
  }
  })
    // =================== CONDITION FOR INTAKE FORM PAGE Substance Use =============== //
    $("select").change((e)=>{
        console.log(e.target.value);
        let a =  $(e.target.parentNode.parentNode).find("#drinks") ;
      if(e.target.value == "none"){
       $(a).css('display' , 'none')
      }
      else 
      {
        $(a).css('display' , 'block')
      }
      })
    // ==================== CONDITION FOR INTAKE FORM PAGE Illicit Drugs =============== //
$("input").change((e)=>{
    console.log(e.target.checked);
    let a =  $(e.target.parentNode.parentNode).find("#drugs-duration") ;
  if(e.target.checked == true){
   $(a).css('display' , 'block')
  }
  else
  {
    $(a).css('display' , 'none')
  }
  })
  // =================== CONDITION FOR INTAKE FORM PAGE Mental Health history =============== //
  $("input").change((e)=>{
    console.log(e.target.value);
    let a =  $(e.target.parentNode.parentNode).find(".for-more") ;
  if(e.target.value == "yes"){
   $(a).css('display' , 'block')
  }
  else
  {
    $(a).css('display' , 'none')
  }
  })
// =================== CONDITION FOR INTAKE FORM PAGE Marrige =============== //
    $("input").change((e)=>{
        console.log(e.target.value);
        let a =  $(e.target.parentNode.parentNode).find("#domarr") ;
      if(e.target.value == "yes"){
       $(a).css('display' , 'block')
      }
      else
      {
        $(a).css('display' , 'none')
      }
      })
    //   ============= for multiple date selection ======
      // $(".add-date").click(function(){
      //   var multiDate = $('#multidate').html();
//  function adddate(){
// // let node = document.getElementById('#multidate');

//  let node = document.createElement("div");
//  let textnode = document.createTextNode("hello world");
//   node.appendChild(textnode);
//   document.getElementById("test").appendChild(node);
//  };


$(document).ready(function() {
  $(".add-date").click(function(){ 
      let html = $("#multidate").html();
      $(".after-add-more").after(html);
      $(".change").append("<label for=''>&nbsp;</label><br/><a class='btn btn-danger remove'> Remove</a>");
  console.log(html);
    });

  $("body").on("click",".remove",function(){ 
      $(this).parents("#multidate").remove();
  });
});
