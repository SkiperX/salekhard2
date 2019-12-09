export default function(e) {
    let context = 'b-photo-slider';
    if ($(`.${context}`).length == 0) {
        return
    }
    let slider = new Swiper(`.${context} .swiper-container`, {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: `.${context} .swiper-button-next`,
            prevEl: `.${context} .swiper-button-prev`,
        },
    });



}


