// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop:true,
    autoplay:true,
    autoplaySpeed: 1500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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