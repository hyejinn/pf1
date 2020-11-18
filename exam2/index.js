function MySliderBox__init() {
    var swiper = new Swiper(".my-slider-box-1 .swiper-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}

MySliderBox__init();