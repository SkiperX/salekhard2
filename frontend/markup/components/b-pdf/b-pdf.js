export default function (dataJson) {
    let context = 'b-pdf';
    if ($(`.${context}`).length == 0) {
        return
    }
    $('.b-pdf__td-content').each(function (i,e) {
        if ($(this).height() > 55) {
            fixTextSize($(this))
        }
    })
    $(window).load(function () {
        $('.b-pdf__td-content').each(function (i,e) {
            if ($(this).height() > 55) {
                fixTextSize($(this))
            }
        })
    })
    function fixTextSize($el) {
        do {
            let fz = parseFloat($el.css('font-size'))-1;
            $el.css('font-size', fz+'px')
        } while ($el.height() > 55)
    }
}
