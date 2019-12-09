
export default function () {
    let context = 'b-video';
    $('body').on('click',`.${context}__video-bg`, function(e) {
        e.stopPropagation();
        let $context =  $(this).closest(`.${context}`);
        let src = $context.find('iframe').data('src')
        $context.find('iframe').attr('src', src);
        $(this).fadeOut();
        return false
    })
}
