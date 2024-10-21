const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3, // Shows three full cards
  spaceBetween: 30, // Adjust the space between the cards
  centeredSlides: false, // Makes sure it's aligned left, but you still see the fourth card
  loop: false, 
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1200: {
        slidesPerView: 3
    },
}
});
