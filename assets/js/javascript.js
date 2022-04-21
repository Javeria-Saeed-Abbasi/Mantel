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
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 8
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

// ============== SCROLL TO TOP BUTTON ================= //
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });

  $('.scroll-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 100);
      return false;
  });

});

