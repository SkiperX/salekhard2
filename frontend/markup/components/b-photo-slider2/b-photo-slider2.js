export default function(e) {
    let context = 'b-photo-slider2';
    if ($(`.${context}`).length == 0) {
        return
    }
    let slider = new Swiper(`.${context} .swiper-container`, {
        spaceBetween: 30,
        slidesPerView: 'auto',
        loop: true,
        navigation: {
            nextEl: `.${context} .swiper-button-next`,
            prevEl: `.${context} .swiper-button-prev`,
        },
        breakpoints: {
            640: {
                spaceBetween: 10,
            }
        }
    });



}


