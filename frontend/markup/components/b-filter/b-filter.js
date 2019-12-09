export default function () {
    let context = 'b-filter';
    if ($(`.${context}`).length == 0) {
        return
    }
    $(`.${context} select`).on('change', function () {
        setSelectTags($(`.${context}__tags`),  $(`.${context}`))
    })
    setSelectTags($(`.${context}__tags`),  $(`.${context}`))
    $('body').on('click', '.select-tag', function (e) {

        let id = $(this).attr('data-id');
        let val = $(this).attr('data-val');

        let selectVal = $(`#${id}`).val();
        let valArr = Array.isArray(selectVal) ? selectVal : [selectVal];

        let index = valArr.indexOf(val);
        valArr.splice(index,1);
        $(`#${id}`).val(valArr);
        $(`#${id}`).selectric('refresh');
        setSelectTags($(`.${context}__tags`),  $(`.${context}`))
    })
}
function setSelectTags($cont, $context) {
    $cont.html('');
    $cont.append('<div class="select-taglist"></div>')
    $context.find('select').each(function (i,e) {
        let id = $(this).attr('id');
        let val = $(this).val()

        let valArr = Array.isArray(val) ? val : [val];
        if (val == null) {
            valArr = []
        }
        valArr.forEach(el => {
            let text = $(`#${id} [value='${el}']`).text()
            $cont.find('.select-taglist').append(`<div class="select-tag" data-id="${id}" data-val="${el}">${text}<div class="tag-del"
></div></div>`)
        })

        console.log(valArr)
    })
}
