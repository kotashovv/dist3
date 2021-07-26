const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: false,
    spaceBetween: 10,
    breakpoints : {
      '320': {
        slidesPerView: 2,
      },
      '425': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 4,
      },
    }
  });