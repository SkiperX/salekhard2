export default function () {
    let context = 'b-tour-slider';
    if ($(`.${context}`).length == 0) {
        return
    }

    var swiper = new Swiper(`.${context} .swiper-container`, {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: `.${context} .swiper-button-next`,
            prevEl: `.${context} .swiper-button-prev`,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });

}
