// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  autoplaySpeed: 1000,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    414: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  },
});



// ==================== WOW JS ============================= //
new WOW().init();
// ==================== Butter JS ========================== //
butter.init({
  wrapperId: 'butter'
});
// =================== MOBILE SCREEN SIDE NAV =============== //
var sidebarBox = document.querySelector('#box');
var sidebarBtn = document.querySelector('#btn');
var pageWrapper = document.querySelector('#main-content');

sidebarBtn.addEventListener('click', function (event) {

  if (this.classList.contains('active')) {
    this.classList.remove('active');
    sidebarBox.classList.remove('active');
  } else {
    this.classList.add('active');
    sidebarBox.classList.add('active');
  }
});

pageWrapper.addEventListener('click', function (event) {

  if (sidebarBox.classList.contains('active')) {
    sidebarBtn.classList.remove('active');
    sidebarBox.classList.remove('active');
  }
});

window.addEventListener('keydown', function (event) {

  if (sidebarBox.classList.contains('active') && event.keyCode ===  27) {
    sidebarBtn.classList.remove('active');
    sidebarBox.classList.remove('active');
  }
});

// =================== VALIDATION FOR INTAKE FORM PAGE =============== //
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
// =================== VALIDATION FOR INTAKE FORM PAGE (INSURANCE INFORMATION) =============== //
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
// =================== VALIDATION FOR INTAKE FORM PAGE (INSURANCE INFORMATION Secondary Insurance) =============== //
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
// =================== VALIDATION FOR INTAKE FORM PAGE (PRESENTING PROBLEMS OTHER-SYMPTOMS) =============== //
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
// =================== VALIDATION FOR INTAKE FORM PAGE (Medical history medications) =============== //
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