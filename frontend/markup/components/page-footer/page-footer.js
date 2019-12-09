import base from "../../static/js/base/base";

export default function () {
    let context = 'page-footer';
    $(window).scroll(function() {
        if ($(`.${context}_init`).length) {
            return
        }

        let distantantion = $(window).scrollTop() +$(window).height();
        let position = $(`.${context}`).offset().top;
        if (distantantion > position) {
            $(`.${context}`).addClass(`${context}_init`);
            base.animContent($(`.${context} .row > div`), 0.4, 0)
        }
    })
}
