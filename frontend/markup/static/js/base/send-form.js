export default function() {
    $('.send-form').on('beforeSubmit submit', function (e) {
        var form = $(this)[0];
        var data = new FormData(form);
        var type = $(this).attr('method');
        var url = $(this).attr('action');

        $.ajax({
            context: this,
            url: url,
            type: type,
            dataType: 'json',
            processData: false,
            contentType: false,
            data: data,
            success: function (res) {
                drowRes(res.title, res.text, $(this))

                return false;
            },
            error: function (res) {
                drowRes(res.title, res.text, $(this))
                return false;
            }
        });
        return false;
    });
    window.drowRes = drowRes

}

function drowRes(title, text, $form) {
    title = title || 'Произошла ошибка';
    text = text || 'Свяжитесь с нами по телефону';

    hideform($form)

    $form.html(`
                    <div class="b-senks">
                              <div class="b-senks__title">${title}</div>
                              <div class="b-senks__text">${text}</div> 
                              <svg class="b-senks__svg" viewBox="0 0 950 398"  fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<g filter="url(#filter0_d)">
<rect width="950" height="398" fill="white" />
</g>
<line x1="0.275674" y1="-0.417138" x2="459.58" y2="303.123" stroke="#2443be"/>
<line x1="950.007" y1="0.414239" x2="500.28" y2="304.414" stroke="#2443be"/>
<path d="M504.618 284.784C495.987 273.578 479.001 280.19 479.001 291.57C479.001 280.19 462.014 273.578 453.382 284.784C444.46 296.369 453.254 316.662 479.001 328.32C504.746 316.662 513.54 296.369 504.618 284.784Z" fill="#F05228"/>
</g>
<defs>
<filter id="filter0_d" x="-30" y="-30" width="1010" height="458" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.694118 0 0 0 0 0.756863 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<clipPath id="clip0">
<rect width="950" height="398" fill="white"/>
</clipPath>
</defs>
</svg>
                         
                    </div>
                `);
}
function hideform($form) {
    $form.closest('.modal')
        .find('.modal-title, .b-callme__pre-title, .b-callme__title, .b-callme__alert')
        .hide();
    $form.closest('.modal')
        .find('.modal-content')
        .addClass('modal-content_no-guetters');
    $form.closest('.b-event-info__form').css('padding', '0');
    $form.closest('.b-event-info').find('.b-event-info__title').hide();
}
