// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper",  {
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