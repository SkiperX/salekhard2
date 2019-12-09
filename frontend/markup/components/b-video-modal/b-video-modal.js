export default function () {
    let context = 'b-video-modal';

    if($(`.${context}, #video`).length == 0) {
        return
    }



    $('.modal').on('show.bs.modal', function (e) {
        if($(e.target).find(`.${context}`).length == 0) {
            return
        }
        let src = $(e.target).find('iframe').attr('data-src');
        $(e.target).find('iframe').attr('src', src);

    });

    $('.modal').on('hide.bs.modal', function (e) {
        $(`.${context}`).find('iframe').removeAttr('src');
    })
}
