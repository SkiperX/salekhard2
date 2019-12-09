export default function(e) {
    let context = 'b-gallery';
    if ($(`.${context}`).length == 0) {
        return
    }
    var galleryThumbs = new Swiper(`.${context} .gallery-thumbs`, {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper(`.${context} .gallery-top`, {
        spaceBetween: 10,
        navigation: {
            nextEl: `.${context} .swiper-button-next`,
            prevEl: `.${context} .swiper-button-prev`,
        },
        thumbs: {
            swiper: galleryThumbs
        },
        on: {
            slideChangeTransitionEnd: function () {
                setVideoBg()
            },
        },
    });
    function setVideoBg() {
        $('.b-video__video-bg:hidden').each(function (i,e) {
            let $context =  $(this).closest(`.b-video`);
            $context.find('iframe').attr('src', '');
            $('.b-video__video-bg').fadeIn();
        })
    }

}

